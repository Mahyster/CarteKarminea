const viewport = document.getElementById("mapViewport");
const mapLayer = document.getElementById("mapLayer");
const mapImage = document.getElementById("mapImage");
const markersLayer = document.getElementById("markersLayer");
const highlightLayer = document.getElementById("highlightLayer");
const featureLayer = document.getElementById("featureLayer");
const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");
const resetViewButton = document.getElementById("resetView");
const togglePlacementButton = document.getElementById("togglePlacement");
const placementHelper = document.getElementById("placementHelper");
const placementCoords = document.getElementById("placementCoords");
const placementCursor = document.getElementById("placementCursor");
const placeCard = document.getElementById("placeCard");
const closePlaceCardButton = document.getElementById("closePlaceCard");
const placeType = document.getElementById("placeType");
const placeName = document.getElementById("placeName");
const placeDistrict = document.getElementById("placeDistrict");
const placeDescription = document.getElementById("placeDescription");
const placeCoords = document.getElementById("placeCoords");
const placeCategoryDot = document.getElementById("placeCategoryDot");
const copyCoordsButton = document.getElementById("copyCoordsButton");
const featureCard = document.getElementById("featureCard");
const closeFeatureCardButton = document.getElementById("closeFeatureCard");
const featureType = document.getElementById("featureType");
const featureName = document.getElementById("featureName");
const featureArchitecture = document.getElementById("featureArchitecture");
const featureDescription = document.getElementById("featureDescription");
const explorerTabButton = document.getElementById("explorerTab");
const closeExplorerButton = document.getElementById("closeExplorer");
const explorerPanel = document.getElementById("explorerPanel");
const placesList = document.getElementById("placesList");
const placesSearchInput = document.getElementById("placesSearch");
const visiblePlacesCount = document.getElementById("visiblePlacesCount");
const categoryControlButtons = document.querySelectorAll(".category-control");
const mapCategoryPanel = document.getElementById("mapCategoryPanel");
const togglePlacesLayerButton = document.getElementById("togglePlacesLayer");
const categoryPrevButton = document.getElementById("categoryPrev");
const categoryNextButton = document.getElementById("categoryNext");
const categoryPanelTitle = document.getElementById("categoryPanelTitle");
const placesCategoryPage = document.getElementById("placesCategoryPage");
const featuresCategoryPage = document.getElementById("featuresCategoryPage");
const featureControlButtons = document.querySelectorAll(".feature-control");
const toggleToolsMenuButton = document.getElementById("toggleToolsMenu");
const toolsMenu = document.getElementById("toolsMenu");
const toolsWidget = document.getElementById("toolsWidget");
const newsButton = document.getElementById("newsButton");
const newsPanel = document.getElementById("newsPanel");
const closeNewsPanelButton = document.getElementById("closeNewsPanel");
const helpButton = document.getElementById("helpButton");
const helpPanel = document.getElementById("helpPanel");
const closeHelpPanelButton = document.getElementById("closeHelpPanel");
const welcomePanel = document.getElementById("welcomePanel");
const closeWelcomePanelButton = document.getElementById("closeWelcomePanel");
const welcomeConfirmButton = document.getElementById("welcomeConfirmButton");

let currentScale = 1;
let currentX = 0;
let currentY = 0;

let targetScale = 1;
let targetX = 0;
let targetY = 0;

let isDragging = false;
let startX = 0;
let startY = 0;

let minScale = 0.2;
let maxScale = 5;

let hasInitialized = false;

let places = [];
let activeCategories = new Set();
let availablePlaceCategories = new Set();
let placesLayerVisible = true;
let placesSearchQuery = "";

let selectedPlaceId = null;
let selectedPlace = null;

let features = [];
let selectedFeatureId = null;

let placementMode = false;
let pointerDownClientX = 0;
let pointerDownClientY = 0;
let hasPointerMoved = false;

let smoothness = 0.18;

let activeCategoryPage = "places";
let activeFeatureCategories = new Set();
let availableFeatureCategories = new Set();


const normalSmoothness = 0.18;
const focusSmoothness = 0.01;



function applyTransform() {
  mapLayer.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale})`;

  const markerScale = 1 / currentScale;
  markersLayer.style.setProperty("--marker-scale", markerScale);
}

function animateMap() {
  currentX += (targetX - currentX) * smoothness;
  currentY += (targetY - currentY) * smoothness;
  currentScale += (targetScale - currentScale) * smoothness;

  const distanceToTarget = Math.hypot(targetX - currentX, targetY - currentY);
  const scaleDistance = Math.abs(targetScale - currentScale);

  if (Math.abs(targetX - currentX) < 0.01) currentX = targetX;
  if (Math.abs(targetY - currentY) < 0.01) currentY = targetY;
  if (Math.abs(targetScale - currentScale) < 0.0001) currentScale = targetScale;

  if (distanceToTarget < 1 && scaleDistance < 0.001) {
    smoothness = normalSmoothness;
  }

  applyTransform();
  requestAnimationFrame(animateMap);
}

function fitMapToScreen(instant = false) {
  const viewportWidth = viewport.clientWidth;
  const viewportHeight = viewport.clientHeight;

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (!imageWidth || !imageHeight) return;

  const scaleX = viewportWidth / imageWidth;
  const scaleY = viewportHeight / imageHeight;

  targetScale = Math.min(scaleX, scaleY) * 0.92;

  minScale = targetScale * 0.6;
  maxScale = targetScale * 8;

  targetX = (viewportWidth - imageWidth * targetScale) / 2;
  targetY = (viewportHeight - imageHeight * targetScale) / 2;

  if (instant) {
    currentScale = targetScale;
    currentX = targetX;
    currentY = targetY;
    applyTransform();
  }
}

function zoomAtPoint(newScale, clientX, clientY) {
  const rect = viewport.getBoundingClientRect();

  const mouseX = clientX - rect.left;
  const mouseY = clientY - rect.top;

  const worldX = (mouseX - targetX) / targetScale;
  const worldY = (mouseY - targetY) / targetScale;

  newScale = Math.max(minScale, Math.min(maxScale, newScale));

  targetX = mouseX - worldX * newScale;
  targetY = mouseY - worldY * newScale;
  targetScale = newScale;
}

async function loadPlaces() {
  try {
    const response = await fetch("data/markers.json");

    if (!response.ok) {
      throw new Error("Impossible de charger data/markers.json");
    }

    places = await response.json();

    initializeCategories();
    renderPlaces();
    renderPlacesList();
  } catch (error) {
    console.error(error);
  }
}

async function loadFeatures() {
  try {
    const response = await fetch("data/features.json");

    if (!response.ok) {
      throw new Error("Impossible de charger data/features.json");
    }

    features = await response.json();

    initializeFeatureCategories();
    renderFeatures();
  } catch (error) {
    console.error(error);
  }
}

function initializeMap() {
  if (hasInitialized) return;

  hasInitialized = true;

  fitMapToScreen(true);
  loadPlaces();
  loadFeatures();
}

function initializeCategories() {
  availablePlaceCategories = new Set(
    places
      .map((place) => place.type)
      .filter(Boolean)
  );

  activeCategories = new Set(availablePlaceCategories);
  placesLayerVisible = availablePlaceCategories.size > 0;

  updateCategoryControlStates();

  if (togglePlacesLayerButton) {
    togglePlacesLayerButton.classList.toggle("is-active", placesLayerVisible);
    togglePlacesLayerButton.setAttribute("aria-pressed", String(placesLayerVisible));
  }

  markersLayer.classList.toggle("is-hidden", !placesLayerVisible);
}

function updateCategoryControlStates() {
  categoryControlButtons.forEach((button) => {
    const category = button.dataset.category;
    const isAvailable = availablePlaceCategories.has(category);
    const isActive = activeCategories.has(category);

    button.hidden = !isAvailable;
    button.classList.toggle("is-active", isAvailable && isActive);
    button.setAttribute("aria-pressed", String(isAvailable && isActive));
  });
}

function setCategoryPage(pageName) {
  activeCategoryPage = pageName;

  const isPlacesPage = activeCategoryPage === "places";

  categoryPanelTitle.classList.add("is-changing");

  setTimeout(() => {
    placesCategoryPage.classList.toggle("is-active", isPlacesPage);
    featuresCategoryPage.classList.toggle("is-active", !isPlacesPage);

    categoryPanelTitle.textContent = isPlacesPage ? "Lieux" : "Éléments de carte";

    categoryPanelTitle.classList.remove("is-changing");
  }, 120);
}

function toggleCategoryPage() {
  setCategoryPage(activeCategoryPage === "places" ? "features" : "places");
}

function setPlacesLayerVisibility(isVisible) {
  placesLayerVisible = isVisible;

  if (togglePlacesLayerButton) {
    togglePlacesLayerButton.classList.toggle("is-active", placesLayerVisible);
    togglePlacesLayerButton.setAttribute("aria-pressed", String(placesLayerVisible));
  }

  markersLayer.classList.toggle("is-hidden", !placesLayerVisible);

  if (!placesLayerVisible) {
    closePlaceCard();
  }
}

function togglePlacesLayer() {
  const shouldShowPlaces = !placesLayerVisible;

  if (shouldShowPlaces) {
    activeCategories = new Set(availablePlaceCategories);
  } else {
    activeCategories.clear();
  }

  setPlacesLayerVisibility(shouldShowPlaces);
  updateCategoryControlStates();
  updatePlacesVisibility();
}

function toggleCategory(category) {
  if (activeCategories.has(category)) {
    activeCategories.delete(category);
  } else {
    activeCategories.add(category);
  }

  const hasAtLeastOneCategory = activeCategories.size > 0;

  setPlacesLayerVisibility(hasAtLeastOneCategory);
  updateCategoryControlStates();
  updatePlacesVisibility();
}

function placeMatchesSearch(place) {
  const normalizedQuery = placesSearchQuery.trim().toLowerCase();

  const matchesSearch =
    !normalizedQuery ||
    [
      place.name,
      place.type,
      place.typeLabel,
      place.district,
      place.description
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);

  const matchesCategory = activeCategories.has(place.type);

  return matchesSearch && matchesCategory;
}

function renderPlaces() {
  markersLayer.innerHTML = "";

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (!imageWidth || !imageHeight) return;

  markersLayer.style.width = `${imageWidth}px`;
  markersLayer.style.height = `${imageHeight}px`;

  highlightLayer.setAttribute("width", imageWidth);
  highlightLayer.setAttribute("height", imageHeight);
  highlightLayer.setAttribute("viewBox", `0 0 ${imageWidth} ${imageHeight}`);
  highlightLayer.style.width = `${imageWidth}px`;
  highlightLayer.style.height = `${imageHeight}px`;

  places.forEach((place) => {
    const marker = document.createElement("button");

    marker.className = `map-marker marker-${place.type}`;
    marker.type = "button";
    marker.dataset.name = place.name;
    marker.dataset.placeId = place.id;
    marker.setAttribute("aria-label", place.name);

    if (place.id === selectedPlaceId) {
      marker.classList.add("is-selected");
    }

    const markerX = (place.xPercent / 100) * imageWidth;
    const markerY = (place.yPercent / 100) * imageHeight;

    marker.style.left = `${markerX}px`;
    marker.style.top = `${markerY}px`;

    marker.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    });

    marker.addEventListener("click", (event) => {
      event.stopPropagation();
      openPlaceCard(place);
      focusPlace(place);
    });

    markersLayer.appendChild(marker);
  });

  updatePlacesVisibility();
}

function renderPlacesList() {
  placesList.innerHTML = "";

  if (!places.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-list";
    emptyMessage.textContent = "Aucun lieu recensé pour le moment.";
    placesList.appendChild(emptyMessage);
    return;
  }

  places.forEach((place) => {
    const button = document.createElement("button");
    button.className = `place-list-item list-${place.type}`;
    button.type = "button";
    button.dataset.placeId = place.id;

    if (place.id === selectedPlaceId) {
      button.classList.add("is-selected");
    }

    const name = document.createElement("strong");
    name.textContent = place.name;

    const type = document.createElement("span");
    type.textContent = place.typeLabel || place.type;

    const district = document.createElement("small");
    district.textContent = place.district || "Quartier non renseigné";

    button.appendChild(name);
    button.appendChild(type);
    button.appendChild(district);

    button.addEventListener("click", () => {
      openPlaceCard(place);
      focusPlace(place);
    });

    placesList.appendChild(button);
  });

  const emptySearchMessage = document.createElement("p");
  emptySearchMessage.id = "emptySearchMessage";
  emptySearchMessage.className = "empty-list is-hidden";
  emptySearchMessage.textContent = "Aucun lieu ne correspond à cette recherche.";
  placesList.appendChild(emptySearchMessage);

  updatePlacesVisibility();
}

function updateVisiblePlacesCount(count) {
  if (!visiblePlacesCount) return;

  if (count === 0) {
    visiblePlacesCount.textContent = "Aucun lieu";
    return;
  }

  visiblePlacesCount.textContent = count === 1 ? "1 lieu" : `${count} lieux`;
}

function updatePlacesVisibility() {
  let visibleCount = 0;

  places.forEach((place) => {
    const isVisible = placeMatchesSearch(place);

    if (isVisible) {
      visibleCount += 1;
    }

    const marker = markersLayer.querySelector(`[data-place-id="${place.id}"]`);
    const listItem = placesList.querySelector(`[data-place-id="${place.id}"]`);

    if (marker) {
      marker.classList.toggle("is-hidden", !isVisible);
    }

    if (listItem) {
      listItem.classList.toggle("is-hidden", !isVisible);
    }
  });

  const emptySearchMessage = document.getElementById("emptySearchMessage");

  if (emptySearchMessage) {
    const hasSearch = placesSearchQuery.trim().length > 0;
    emptySearchMessage.classList.toggle("is-hidden", visibleCount > 0 || !hasSearch);
  }

  updateVisiblePlacesCount(visibleCount);
}

function renderSelectedAura(place) {
  highlightLayer.innerHTML = "";

  if (!place.outline || !place.outline.length) {
    return;
  }

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  const points = place.outline
    .map((point) => {
      const x = (point.xPercent / 100) * imageWidth;
      const y = (point.yPercent / 100) * imageHeight;

      return `${x},${y}`;
    })
    .join(" ");

  const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

  polygon.setAttribute("points", points);
  polygon.classList.add("selected-area", `area-${place.type}`);

  highlightLayer.appendChild(polygon);
}

function clearSelectedAura() {
  highlightLayer.innerHTML = "";
}

function setSelectedPlace(place) {
  selectedPlaceId = place.id;

  document.querySelectorAll(".map-marker").forEach((marker) => {
    const isSelected = marker.dataset.placeId === selectedPlaceId;
    marker.classList.toggle("is-selected", isSelected);
  });

  document.querySelectorAll(".place-list-item").forEach((item) => {
    const isSelected = item.dataset.placeId === selectedPlaceId;
    item.classList.toggle("is-selected", isSelected);
  });
}

function clearSelectedPlace() {
  selectedPlaceId = null;

  document.querySelectorAll(".map-marker").forEach((marker) => {
    marker.classList.remove("is-selected");
  });

  document.querySelectorAll(".place-list-item").forEach((item) => {
    item.classList.remove("is-selected");
  });
}

function openPlaceCard(place) {
  closeFeatureCard();

  selectedPlace = place;

  setSelectedPlace(place);
  renderSelectedAura(place);

  placeType.textContent = place.typeLabel || place.type;
  placeCategoryDot.className = `place-category-dot category-${place.type}`;

  placeName.textContent = place.name;
  placeDistrict.textContent = place.district;
  placeDescription.textContent = place.description;
  placeCoords.textContent = `Coordonnées : X ${place.minecraftX} / Z ${place.minecraftZ}`;

  copyCoordsButton.textContent = "Copier";
  copyCoordsButton.classList.remove("is-copied");

  placeCard.classList.remove("is-hidden");
}

function closePlaceCard() {
  placeCard.classList.add("is-hidden");
  clearSelectedAura();
  clearSelectedPlace();

  selectedPlace = null;
}

async function copySelectedPlaceCoords() {
  if (!selectedPlace) return;

  const coordsText = `X ${selectedPlace.minecraftX} / Z ${selectedPlace.minecraftZ}`;

  try {
    await navigator.clipboard.writeText(coordsText);

    copyCoordsButton.textContent = "Copié";
    copyCoordsButton.classList.add("is-copied");

    setTimeout(() => {
      copyCoordsButton.textContent = "Copier";
      copyCoordsButton.classList.remove("is-copied");
    }, 1400);
  } catch (error) {
    console.error("Impossible de copier les coordonnées.", error);

    copyCoordsButton.textContent = "Erreur";
    setTimeout(() => {
      copyCoordsButton.textContent = "Copier";
    }, 1400);
  }
}

function focusPlace(place) {
  smoothness = focusSmoothness;

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (!imageWidth || !imageHeight) return;

  const placeX = (place.xPercent / 100) * imageWidth;
  const placeY = (place.yPercent / 100) * imageHeight;

  const rect = viewport.getBoundingClientRect();

  const focusScale = Math.min(maxScale, Math.max(targetScale, minScale * 10));

  targetScale = focusScale;
  targetX = rect.width / 2 - placeX * focusScale;
  targetY = rect.height / 2 - placeY * focusScale;
}

function getFeaturePoint(point) {
  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  return {
    x: (point.xPercent / 100) * imageWidth,
    y: (point.yPercent / 100) * imageHeight
  };
}

function getFeatureLabelPosition(feature) {
  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (feature.labelXPercent !== undefined && feature.labelYPercent !== undefined) {
    return {
      x: (feature.labelXPercent / 100) * imageWidth,
      y: (feature.labelYPercent / 100) * imageHeight
    };
  }

  const points = feature.points.map(getFeaturePoint);
  const total = points.reduce(
    (acc, point) => {
      acc.x += point.x;
      acc.y += point.y;
      return acc;
    },
    { x: 0, y: 0 }
  );

  return {
    x: total.x / points.length,
    y: total.y / points.length
  };
}

function initializeFeatureCategories() {
  availableFeatureCategories = new Set(
    features
      .map((feature) => feature.type)
      .filter(Boolean)
  );

  activeFeatureCategories = new Set(availableFeatureCategories);

  updateFeatureControlStates();
}

function updateFeatureControlStates() {
  featureControlButtons.forEach((button) => {
    const category = button.dataset.featureCategory;
    const isAvailable = availableFeatureCategories.has(category);
    const isActive = activeFeatureCategories.has(category);

    button.hidden = !isAvailable;
    button.classList.toggle("is-active", isAvailable && isActive);
    button.setAttribute("aria-pressed", String(isAvailable && isActive));
  });
}

function featureMatchesVisibility(feature) {
  return activeFeatureCategories.has(feature.type);
}

function updateFeaturesVisibility() {
  features.forEach((feature) => {
    const isVisible = featureMatchesVisibility(feature);

    const featureGroup = featureLayer.querySelector(
      `[data-feature-id="${feature.id}"]`
    );

    if (featureGroup) {
      featureGroup.classList.toggle("is-hidden", !isVisible);
    }

    if (!isVisible && selectedFeatureId === feature.id) {
      closeFeatureCard();
    }
  });
}

function toggleFeatureCategory(category) {
  if (activeFeatureCategories.has(category)) {
    activeFeatureCategories.delete(category);
  } else {
    activeFeatureCategories.add(category);
  }

  updateFeatureControlStates();
  updateFeaturesVisibility();
}

function renderFeatures() {
  featureLayer.innerHTML = "";

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (!imageWidth || !imageHeight) return;

  featureLayer.setAttribute("width", imageWidth);
  featureLayer.setAttribute("height", imageHeight);
  featureLayer.setAttribute("viewBox", `0 0 ${imageWidth} ${imageHeight}`);
  featureLayer.style.width = `${imageWidth}px`;
  featureLayer.style.height = `${imageHeight}px`;

  features.forEach((feature) => {
    if (!feature.points || !feature.points.length) return;

    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.classList.add("feature-group");
    group.dataset.featureId = feature.id;

    if (feature.id === selectedFeatureId) {
      group.classList.add("is-selected");
    }

    const points = feature.points
      .map((point) => {
        const convertedPoint = getFeaturePoint(point);
        return `${convertedPoint.x},${convertedPoint.y}`;
      })
      .join(" ");

    const hitLine = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    hitLine.setAttribute("points", points);
    hitLine.setAttribute("stroke-width", feature.thickness || 28);
    hitLine.classList.add("feature-hit");

    const visualLine = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    visualLine.setAttribute("points", points);
    visualLine.classList.add("feature-visual", `feature-${feature.type}`);

    const labelPosition = getFeatureLabelPosition(feature);

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", labelPosition.x);
    label.setAttribute("y", labelPosition.y);
    label.setAttribute("text-anchor", "middle");
    label.classList.add("feature-label", `feature-${feature.type}`);
    label.textContent = feature.name;

    group.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    });

    group.addEventListener("click", (event) => {
      event.stopPropagation();
      openFeatureCard(feature);
    });

    group.appendChild(hitLine);
    group.appendChild(visualLine);
    group.appendChild(label);

    featureLayer.appendChild(group);
  });
  updateFeaturesVisibility();
}

function setSelectedFeature(feature) {
  selectedFeatureId = feature.id;

  document.querySelectorAll(".feature-group").forEach((group) => {
    const isSelected = group.dataset.featureId === selectedFeatureId;
    group.classList.toggle("is-selected", isSelected);
  });
}

function clearSelectedFeature() {
  selectedFeatureId = null;

  document.querySelectorAll(".feature-group").forEach((group) => {
    group.classList.remove("is-selected");
  });
}

function openFeatureCard(feature) {
  setSelectedFeature(feature);

  placeCard.classList.add("is-hidden");
  clearSelectedAura();
  clearSelectedPlace();
  selectedPlace = null;

  featureType.textContent = feature.typeLabel || feature.type;
  featureName.textContent = feature.name;
  featureArchitecture.textContent = feature.architectureType || "Non renseigné";
  featureDescription.textContent = feature.description || "Aucune description renseignée.";

  featureCard.classList.remove("is-hidden");
}

function closeFeatureCard() {
  featureCard.classList.add("is-hidden");
  clearSelectedFeature();
}

function togglePlacementMode() {
  placementMode = !placementMode;

  togglePlacementButton.classList.toggle("is-active", placementMode);
  placementHelper.classList.toggle("is-hidden", !placementMode);
  placementCursor.classList.toggle("is-hidden", !placementMode);

  if (placementMode) {
    placeCard.classList.add("is-hidden");
    featureCard.classList.add("is-hidden");
  }
}

function updatePlacementCursor(event) {
  if (!placementMode) return;

  const position = getMapPositionFromPointer(event);

  placementCoords.textContent = `"xPercent": ${position.xPercent}, "yPercent": ${position.yPercent}`;

  const panelRect = viewport.getBoundingClientRect();

  const cursorX = event.clientX - panelRect.left;
  const cursorY = event.clientY - panelRect.top;

  placementCursor.style.left = `${cursorX}px`;
  placementCursor.style.top = `${cursorY}px`;
}

function getMapPositionFromPointer(event) {
  const rect = viewport.getBoundingClientRect();

  const viewportX = event.clientX - rect.left;
  const viewportY = event.clientY - rect.top;

  const imageX = (viewportX - currentX) / currentScale;
  const imageY = (viewportY - currentY) / currentScale;

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  const clampedX = Math.max(0, Math.min(imageWidth, imageX));
  const clampedY = Math.max(0, Math.min(imageHeight, imageY));

  const xPercent = (clampedX / imageWidth) * 100;
  const yPercent = (clampedY / imageHeight) * 100;

  return {
    xPercent: Number(xPercent.toFixed(2)),
    yPercent: Number(yPercent.toFixed(2))
  };
}

function selectPlacementPosition(event) {
  const position = getMapPositionFromPointer(event);

  const jsonText = `{ "xPercent": ${position.xPercent}, "yPercent": ${position.yPercent} }`;

  placementCoords.textContent = `"xPercent": ${position.xPercent}, "yPercent": ${position.yPercent}`;

  navigator.clipboard
    ?.writeText(jsonText)
    .catch(() => {
      console.warn("Copie automatique impossible.");
    });
}

function toggleExplorerPanel() {
  const isNowClosed = explorerPanel.classList.toggle("is-closed");

  explorerTabButton.classList.toggle("is-open", !isNowClosed);

  if (mapCategoryPanel) {
    mapCategoryPanel.classList.toggle("is-hidden", !isNowClosed);
  }
}

function openHelpPanel() {
  helpPanel.classList.remove("is-hidden");
  helpButton.classList.add("is-active");

  closeNewsPanel();
}

function closeHelpPanel() {
  helpPanel.classList.add("is-hidden");
  helpButton.classList.remove("is-active");
}

function toggleHelpPanel() {
  const isHidden = helpPanel.classList.contains("is-hidden");

  if (isHidden) {
    openHelpPanel();
  } else {
    closeHelpPanel();
  }
}

function openNewsPanel() {
  newsPanel.classList.remove("is-hidden");
  newsButton.classList.add("is-active");

  closeHelpPanel();
}

function closeNewsPanel() {
  newsPanel.classList.add("is-hidden");
  newsButton.classList.remove("is-active");
}

function toggleNewsPanel() {
  const isHidden = newsPanel.classList.contains("is-hidden");

  if (isHidden) {
    openNewsPanel();
  } else {
    closeNewsPanel();
  }
}

function toggleToolsMenu() {
  const isOpening = toolsMenu.classList.toggle("is-hidden") === false;

  toolsWidget.classList.toggle("is-open", isOpening);
  toggleToolsMenuButton.classList.toggle("is-active", isOpening);
  toggleToolsMenuButton.setAttribute("aria-expanded", String(isOpening));
}

function closeExplorerPanel() {
  explorerPanel.classList.add("is-closed");
  explorerTabButton.classList.remove("is-open");

  if (mapCategoryPanel) {
    mapCategoryPanel.classList.remove("is-hidden");
  }
}

function closeWelcomePanel() {
  welcomePanel.classList.add("is-hidden");
}

if (mapImage.complete) {
  initializeMap();
} else {
  mapImage.addEventListener("load", initializeMap);
}

window.addEventListener("resize", () => {
  fitMapToScreen(true);
});

viewport.addEventListener("pointerdown", (event) => {
  if (event.button !== 0) return;

  isDragging = true;
  hasPointerMoved = false;

  pointerDownClientX = event.clientX;
  pointerDownClientY = event.clientY;

  startX = event.clientX - targetX;
  startY = event.clientY - targetY;

  viewport.classList.add("is-dragging");
  viewport.setPointerCapture(event.pointerId);
});

viewport.addEventListener("pointermove", (event) => {
  updatePlacementCursor(event);

  if (!isDragging) return;

  const moveDistance = Math.hypot(
    event.clientX - pointerDownClientX,
    event.clientY - pointerDownClientY
  );

  if (moveDistance > 5) {
    hasPointerMoved = true;
  }

  targetX = event.clientX - startX;
  targetY = event.clientY - startY;
});

viewport.addEventListener("pointerup", (event) => {
  if (placementMode && !hasPointerMoved) {
    selectPlacementPosition(event);
  }

  isDragging = false;
  viewport.classList.remove("is-dragging");
});

viewport.addEventListener("pointercancel", () => {
  isDragging = false;
  viewport.classList.remove("is-dragging");
});

viewport.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();

    const zoomIntensity = 0.08;
    const direction = event.deltaY < 0 ? 1 : -1;
    const zoomFactor = 1 + direction * zoomIntensity;

    zoomAtPoint(targetScale * zoomFactor, event.clientX, event.clientY);
  },
  { passive: false }
);

zoomInButton.addEventListener("click", () => {
  const rect = viewport.getBoundingClientRect();

  zoomAtPoint(
    targetScale * 1.25,
    rect.left + rect.width / 2,
    rect.top + rect.height / 2
  );
});

zoomOutButton.addEventListener("click", () => {
  const rect = viewport.getBoundingClientRect();

  zoomAtPoint(
    targetScale / 1.25,
    rect.left + rect.width / 2,
    rect.top + rect.height / 2
  );
});

resetViewButton.addEventListener("click", () => {
  fitMapToScreen(false);
});

placesSearchInput.addEventListener("input", (event) => {
  placesSearchQuery = event.target.value;
  updatePlacesVisibility();
});

categoryControlButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleCategory(button.dataset.category);
  });
});

featureControlButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleFeatureCategory(button.dataset.featureCategory);
  });
});

closePlaceCardButton.addEventListener("click", closePlaceCard);
togglePlacementButton.addEventListener("click", togglePlacementMode);
explorerTabButton.addEventListener("click", toggleExplorerPanel);
closeExplorerButton.addEventListener("click", closeExplorerPanel);
copyCoordsButton.addEventListener("click", copySelectedPlaceCoords);
closeFeatureCardButton.addEventListener("click", closeFeatureCard);
categoryPrevButton.addEventListener("click", toggleCategoryPage);
categoryNextButton.addEventListener("click", toggleCategoryPage);
toggleToolsMenuButton.addEventListener("click", toggleToolsMenu);
newsButton.addEventListener("click", toggleNewsPanel);
closeNewsPanelButton.addEventListener("click", closeNewsPanel);
helpButton.addEventListener("click", toggleHelpPanel);
closeHelpPanelButton.addEventListener("click", closeHelpPanel);
closeWelcomePanelButton.addEventListener("click", closeWelcomePanel);
welcomeConfirmButton.addEventListener("click", closeWelcomePanel);

if (togglePlacesLayerButton) {
  togglePlacesLayerButton.addEventListener("click", togglePlacesLayer);
}

animateMap();
