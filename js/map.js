const viewport = document.getElementById("mapViewport");
const mapLayer = document.getElementById("mapLayer");
const mapImage = document.getElementById("mapImage");
const markersLayer = document.getElementById("markersLayer");
const togglePlacementButton = document.getElementById("togglePlacement");
const placementHelper = document.getElementById("placementHelper");
const placementCoords = document.getElementById("placementCoords");

const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");
const resetViewButton = document.getElementById("resetView");

const placeCard = document.getElementById("placeCard");
const closePlaceCardButton = document.getElementById("closePlaceCard");
const placeType = document.getElementById("placeType");
const placeName = document.getElementById("placeName");
const placeDistrict = document.getElementById("placeDistrict");
const placeDescription = document.getElementById("placeDescription");
const placeCoords = document.getElementById("placeCoords");

const explorerTabButton = document.getElementById("explorerTab");
const closeExplorerButton = document.getElementById("closeExplorer");
const explorerPanel = document.getElementById("explorerPanel");
const placesList = document.getElementById("placesList");
const placesSearchInput = document.getElementById("placesSearch");

const categoryControlButtons = document.querySelectorAll(".category-control");
const mapCategoryPanel = document.getElementById("mapCategoryPanel");

const visiblePlacesCount = document.getElementById("visiblePlacesCount");

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

let places = [];
let hasInitialized = false;
let visiblePlaces = [];

let placementMode = false;
let pointerDownClientX = 0;
let pointerDownClientY = 0;
let hasPointerMoved = false;

let placesSearchQuery = "";

let activeCategories = new Set();

const smoothness = 0.18;

function applyTransform() {
  mapLayer.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale})`;

  const markerScale = 1 / currentScale;
  markersLayer.style.setProperty("--marker-scale", markerScale);
}

function animateMap() {
  currentX += (targetX - currentX) * smoothness;
  currentY += (targetY - currentY) * smoothness;
  currentScale += (targetScale - currentScale) * smoothness;

  if (Math.abs(targetX - currentX) < 0.01) currentX = targetX;
  if (Math.abs(targetY - currentY) < 0.01) currentY = targetY;
  if (Math.abs(targetScale - currentScale) < 0.0001) currentScale = targetScale;

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

function renderPlaces() {
  markersLayer.innerHTML = "";

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (!imageWidth || !imageHeight) return;

  markersLayer.style.width = `${imageWidth}px`;
  markersLayer.style.height = `${imageHeight}px`;

  places.forEach((place) => {
    const marker = document.createElement("button");

    marker.className = `map-marker marker-${place.type}`;
    marker.type = "button";
    marker.dataset.name = place.name;
    marker.dataset.placeId = place.id;
    marker.setAttribute("aria-label", place.name);

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

function setActiveTypeFilter(filterValue) {
  activeTypeFilter = filterValue;

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeTypeFilter;
    button.classList.toggle("is-active", isActive);
  });

  updatePlacesVisibility();
}

function openPlaceCard(place) {
  placeType.textContent = place.typeLabel || place.type;
  placeName.textContent = place.name;
  placeDistrict.textContent = place.district;
  placeDescription.textContent = place.description;
  placeCoords.textContent = `Coordonnées : X ${place.minecraftX} / Z ${place.minecraftZ}`;

  placeCard.classList.remove("is-hidden");
}

function closePlaceCard() {
  placeCard.classList.add("is-hidden");
}

function togglePlacementMode() {
  placementMode = !placementMode;

  togglePlacementButton.classList.toggle("is-active", placementMode);
  placementHelper.classList.toggle("is-hidden", !placementMode);

  if (placementMode) {
    placeCard.classList.add("is-hidden");
  }
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

  const jsonText = `"xPercent": ${position.xPercent},\n"yPercent": ${position.yPercent}`;

  placementCoords.textContent = jsonText;

  navigator.clipboard
    ?.writeText(jsonText)
    .catch(() => {
      console.warn("Copie automatique impossible.");
    });
}

function getFilteredPlaces() {
  const normalizedQuery = placesSearchQuery.trim().toLowerCase();

  if (!normalizedQuery) {
    return places;
  }

  return places.filter((place) => {
    const searchableText = [
      place.name,
      place.type,
      place.typeLabel,
      place.district,
      place.description
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
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

function focusPlace(place) {
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

function toggleExplorerPanel() {
  const isNowClosed = explorerPanel.classList.toggle("is-closed");

  explorerTabButton.classList.toggle("is-open", !isNowClosed);

  if (mapCategoryPanel) {
    mapCategoryPanel.classList.toggle("is-hidden", !isNowClosed);
  }
}

function closeExplorerPanel() {
  explorerPanel.classList.add("is-closed");
  explorerTabButton.classList.remove("is-open");

  if (mapCategoryPanel) {
    mapCategoryPanel.classList.remove("is-hidden");
  }
}

function initializeMap() {
  if (hasInitialized) return;

  hasInitialized = true;

  fitMapToScreen(true);
  loadPlaces();
}

function initializeCategories() {
  const availableCategories = new Set(
    places
      .map((place) => place.type)
      .filter(Boolean)
  );

  activeCategories = new Set(availableCategories);

  categoryControlButtons.forEach((button) => {
    const category = button.dataset.category;
    const isAvailable = availableCategories.has(category);

    button.hidden = !isAvailable;
    button.classList.toggle("is-active", isAvailable);
    button.setAttribute("aria-pressed", String(isAvailable));
  });
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

function toggleCategory(category) {
  if (activeCategories.has(category)) {
    activeCategories.delete(category);
  } else {
    activeCategories.add(category);
  }

  categoryControlButtons.forEach((button) => {
    const isActive = activeCategories.has(button.dataset.category);

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updatePlacesVisibility();
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

closePlaceCardButton.addEventListener("click", closePlaceCard);
togglePlacementButton.addEventListener("click", togglePlacementMode);
explorerTabButton.addEventListener("click", toggleExplorerPanel);
closeExplorerButton.addEventListener("click", closeExplorerPanel);

animateMap();
