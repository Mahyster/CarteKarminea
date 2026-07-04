const viewport = document.getElementById("mapViewport");
const mapLayer = document.getElementById("mapLayer");
const mapImage = document.getElementById("mapImage");
const markersLayer = document.getElementById("markersLayer");
const highlightLayer = document.getElementById("highlightLayer");
const featureLayer = document.getElementById("featureLayer");
const featureLabelsLayer = document.getElementById("featureLabelsLayer");
const creationLayer = document.getElementById("creationLayer");
const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");
const resetViewButton = document.getElementById("resetView");
const toggleCreationButton = document.getElementById("toggleCreation");
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
const featuresList = document.getElementById("featuresList");
const placesSearchInput = document.getElementById("placesSearch");
const visiblePlacesCount = document.getElementById("visiblePlacesCount");
const visibleFeaturesCount = document.getElementById("visibleFeaturesCount");
const explorerModeButtons = document.querySelectorAll(".explorer-mode-button");
const explorerPagesTrack = document.getElementById("explorerPagesTrack");
const explorerPlacesPage = document.getElementById("explorerPlacesPage");
const explorerFeaturesPage = document.getElementById("explorerFeaturesPage");
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
const openCoordinateToolButton = document.getElementById("openCoordinateTool");
const openNeedsToolButton = document.getElementById("openNeedsTool");
const needsToolPanel = document.getElementById("needsToolPanel");
const closeNeedsToolButton = document.getElementById("closeNeedsTool");
const needsChoiceButtons = document.querySelectorAll(".needs-choice-button");
const needsResultsTitle = document.getElementById("needsResultsTitle");
const needsResultsCount = document.getElementById("needsResultsCount");
const needsResultsList = document.getElementById("needsResultsList");
const needsToolStatus = document.getElementById("needsToolStatus");
const coordinateToolPanel = document.getElementById("coordinateToolPanel");
const closeCoordinateToolButton = document.getElementById("closeCoordinateTool");
const coordinateXInput = document.getElementById("coordinateXInput");
const coordinateZInput = document.getElementById("coordinateZInput");
const goToCoordinateButton = document.getElementById("goToCoordinateButton");
const clearCoordinateTargetButton = document.getElementById("clearCoordinateTargetButton");
const copyCoordinateLinkButton = document.getElementById("copyCoordinateLinkButton");
const coordinateHoverText = document.getElementById("coordinateHoverText");
const coordinateToolStatus = document.getElementById("coordinateToolStatus");
const coordinateTarget = document.getElementById("coordinateTarget");
const feedbackTabButton = document.getElementById("feedbackTab");
const feedbackPanel = document.getElementById("feedbackPanel");
const closeFeedbackPanelButton = document.getElementById("closeFeedbackPanel");
const feedbackTitleInput = document.getElementById("feedbackTitle");
const feedbackCategoryInput = document.getElementById("feedbackCategory");
const feedbackDescriptionInput = document.getElementById("feedbackDescription");
const copyFeedbackButton = document.getElementById("copyFeedbackButton");
const feedbackStatus = document.getElementById("feedbackStatus");
const mapSwitcherButton = document.getElementById("mapSwitcherButton");
const mapSwitcherMenu = document.getElementById("mapSwitcherMenu");
const newsButton = document.getElementById("newsButton");
const newsPanel = document.getElementById("newsPanel");
const closeNewsPanelButton = document.getElementById("closeNewsPanel");
const helpButton = document.getElementById("helpButton");
const helpPanel = document.getElementById("helpPanel");
const closeHelpPanelButton = document.getElementById("closeHelpPanel");
const welcomePanel = document.getElementById("welcomePanel");
const closeWelcomePanelButton = document.getElementById("closeWelcomePanel");
const welcomeConfirmButton = document.getElementById("welcomeConfirmButton");
const creationAdminElements = document.querySelectorAll(".creation-admin-only");
const creationPanel = document.getElementById("creationPanel");
const closeCreationPanelButton = document.getElementById("closeCreationPanel");
const creationPlaceTab = document.getElementById("creationPlaceTab");
const creationFeatureTab = document.getElementById("creationFeatureTab");
const creationPlacePage = document.getElementById("creationPlacePage");
const creationFeaturePage = document.getElementById("creationFeaturePage");
const creationPlaceNameInput = document.getElementById("creationPlaceName");
const creationPlaceTypeInput = document.getElementById("creationPlaceType");
const creationPlaceDistrictInput = document.getElementById("creationPlaceDistrict");
const creationPlaceMinecraftXInput = document.getElementById("creationPlaceMinecraftX");
const creationPlaceMinecraftZInput = document.getElementById("creationPlaceMinecraftZ");
const creationPlaceDescriptionInput = document.getElementById("creationPlaceDescription");
const creationPlacePositionText = document.getElementById("creationPlacePositionText");
const resetCreationPlaceButton = document.getElementById("resetCreationPlace");
const copyCreationPlaceJsonButton = document.getElementById("copyCreationPlaceJson");
const creationPlaceOutput = document.getElementById("creationPlaceOutput");
const creationFeatureNameInput = document.getElementById("creationFeatureName");
const creationFeatureTypeInput = document.getElementById("creationFeatureType");
const creationFeatureShapeInput = document.getElementById("creationFeatureShape");
const creationFeatureArchitectureInput = document.getElementById("creationFeatureArchitecture");
const creationFeatureThicknessInput = document.getElementById("creationFeatureThickness");
const creationFeatureDescriptionInput = document.getElementById("creationFeatureDescription");
const creationFeaturePointsText = document.getElementById("creationFeaturePointsText");
const undoCreationFeaturePointButton = document.getElementById("undoCreationFeaturePoint");
const resetCreationFeatureButton = document.getElementById("resetCreationFeature");
const copyCreationFeatureJsonButton = document.getElementById("copyCreationFeatureJson");
const creationFeatureOutput = document.getElementById("creationFeatureOutput");
const creationCleanModeInput = document.getElementById("creationCleanMode");

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
let priorityHoveredMarker = null;

let features = [];
let selectedFeatureId = null;

let pointerDownClientX = 0;
let pointerDownClientY = 0;
let hasPointerMoved = false;

const activeViewportPointers = new Map();
let isPinching = false;
let pinchStartDistance = 0;
let pinchStartScale = 1;
let pinchStartWorldCenter = { x: 0, y: 0 };

let smoothness = 0.18;

let activeExplorerPage = "places";
let activeCategoryPage = "places";
let activeFeatureCategories = new Set();
let availableFeatureCategories = new Set();

let creationMode = false;
let activeCreationPage = "place";
let creationPlacePosition = null;
let creationFeaturePoints = [];
let creationAdminEnabled = false;
let creationCleanMode = true;

let coordinateToolOpen = false;
let coordinateTargetPosition = null;

let needsToolOpen = false;
let activeNeedType = null;

const mapBounds = {
  minX: -320,
  maxX: 573,
  minZ: -700,
  maxZ: 557
};

const placeTypeLabels = {
  commerce: "Commerce",
  institution: "Institution",
  divertissement: "Divertissement",
  sante: "Santé"
};

const featureTypeLabels = {
  voirie: "Voirie",
  pont: "Pont",
  ocean: "Océan",
  quartier: "Quartier",
  place: "Place"
};

const defaultFeatureArchitectures = {
  voirie: "Axe de circulation",
  pont: "Infrastructure de franchissement",
  ocean: "Étendue maritime",
  quartier: "Zone urbaine",
  place: "Espace public"
};


const normalSmoothness = 0.18;
const focusSmoothness = 0.01;

const mobileLayoutQuery = window.matchMedia("(max-width: 768px)");

function isMobileLayout() {
  return mobileLayoutQuery.matches;
}



function applyTransform() {
  mapLayer.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale})`;

  const markerScale = 1 / currentScale;
  markersLayer.style.setProperty("--marker-scale", markerScale);

  updateFeatureScreenPositions();
  updateFeatureLabelPositions();
  updateCoordinateTargetPosition();
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

    if (activeNeedType) {
      renderNeedsResults();
    }
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
    renderFeaturesList();
  } catch (error) {
    console.error(error);
  }
}


function getNormalizedFeatureShape(feature) {
  const shape = feature.shape || "line";
  return shape === "polygon" || shape === "zone" ? "polygon" : "line";
}

function initializeCreationAdminVisibility() {
  const params = new URLSearchParams(window.location.search);
  creationAdminEnabled =
    params.has("creation") ||
    params.has("admin") ||
    params.has("edition") ||
    window.location.hash === "#creation";

  creationAdminElements.forEach((element) => {
    element.classList.toggle("is-admin-hidden", !creationAdminEnabled);
  });
}

function syncCreationLayerSize() {
  if (!creationLayer) return;

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (!imageWidth || !imageHeight) return;

  creationLayer.setAttribute("width", imageWidth);
  creationLayer.setAttribute("height", imageHeight);
  creationLayer.setAttribute("viewBox", `0 0 ${imageWidth} ${imageHeight}`);
  creationLayer.style.width = `${imageWidth}px`;
  creationLayer.style.height = `${imageHeight}px`;
}

function slugify(value) {
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "element-sans-nom";
}

function safeNumber(value, fallback = 0) {
  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) ? parsedValue : fallback;
}

function getPointInImageCoordinates(point) {
  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  return {
    x: (point.xPercent / 100) * imageWidth,
    y: (point.yPercent / 100) * imageHeight
  };
}

function setCreationPage(pageName) {
  activeCreationPage = pageName;

  const isPlacePage = activeCreationPage === "place";

  creationPlaceTab.classList.toggle("is-active", isPlacePage);
  creationFeatureTab.classList.toggle("is-active", !isPlacePage);
  creationPlacePage.classList.toggle("is-active", isPlacePage);
  creationFeaturePage.classList.toggle("is-active", !isPlacePage);

  updateCreationPreview();
}

function applyCreationCleanMode() {
  const shouldUseCleanView = creationMode && creationCleanMode;

  document.body.classList.toggle("is-creation-clean", shouldUseCleanView);
}

function setCreationCleanMode(isEnabled) {
  creationCleanMode = isEnabled;
  applyCreationCleanMode();
}

function openCreationPanel() {
  closeMapSwitcherMenu();

  creationMode = true;

  creationPanel.classList.remove("is-hidden");
  toggleCreationButton.classList.add("is-active");
  toggleCreationButton.textContent = "Création active";

  closePlaceCard();
  closeFeatureCard();
  closeNewsPanel();
  closeHelpPanel();
  closeFeedbackPanel();
  closeCoordinateTool();
  closeNeedsTool();
  closeExplorerPanel();

  if (toolsMenu && !toolsMenu.classList.contains("is-hidden")) {
    toggleToolsMenu();
  }

  applyCreationCleanMode();
  updateCreationPreview();
}

function closeCreationPanel() {
  creationMode = false;

  creationPanel.classList.add("is-hidden");
  toggleCreationButton.classList.remove("is-active");
  toggleCreationButton.textContent = "Mode création";

  applyCreationCleanMode();
  clearCreationPreview();
}

function toggleCreationMode() {
  if (!creationAdminEnabled) return;

  if (creationMode) {
    closeCreationPanel();
  } else {
    openCreationPanel();
  }
}

function clearCreationPreview() {
  if (creationLayer) {
    creationLayer.innerHTML = "";
  }
}

function addCreationPointMarker(point, index) {
  const { x, y } = getPointInImageCoordinates(point);

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", 2);
  circle.classList.add("creation-point-marker");

  const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  label.setAttribute("x", x);
  label.setAttribute("y", y - 10);
  label.setAttribute("text-anchor", "middle");
  label.classList.add("creation-point-label");
  label.textContent = index + 1;

  creationLayer.appendChild(circle);
  creationLayer.appendChild(label);
}

function updateCreationPreview() {
  clearCreationPreview();
  syncCreationLayerSize();

  if (!creationMode || !creationLayer) return;

  if (activeCreationPage === "place") {
    updateCreationPlacePreview();
    return;
  }

  updateCreationFeaturePreview();
}

function updateCreationPlacePreview() {
  if (!creationPlacePosition) return;

  const { x, y } = getPointInImageCoordinates(creationPlacePosition);
  const name = creationPlaceNameInput.value.trim() || "Nouveau lieu";
  const type = creationPlaceTypeInput.value;

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", 2);
  circle.classList.add("creation-place-preview", `creation-preview-${type}`);

  const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  label.setAttribute("x", x);
  label.setAttribute("y", y - 16);
  label.setAttribute("text-anchor", "middle");
  label.classList.add("creation-preview-label");
  label.textContent = name;

  creationLayer.appendChild(circle);
  creationLayer.appendChild(label);
}

function updateCreationFeaturePreview() {
  const pointsCount = creationFeaturePoints.length;

  if (!pointsCount) return;

  const shape = creationFeatureShapeInput.value;
  const type = creationFeatureTypeInput.value;

  const points = creationFeaturePoints
    .map((point) => {
      const convertedPoint = getPointInImageCoordinates(point);
      return `${convertedPoint.x},${convertedPoint.y}`;
    })
    .join(" ");

  if (pointsCount > 1) {
    const svgShape = shape === "polygon" && pointsCount > 2 ? "polygon" : "polyline";
    const previewShape = document.createElementNS("http://www.w3.org/2000/svg", svgShape);

    previewShape.setAttribute("points", points);
    previewShape.classList.add(
      "creation-feature-preview",
      `creation-preview-${type}`,
      `creation-preview-${shape}`
    );

    creationLayer.appendChild(previewShape);
  }

  creationFeaturePoints.forEach(addCreationPointMarker);
}

function updateCreationPlaceOutput() {
  if (!creationPlacePosition) {
    creationPlacePositionText.textContent = "Clique sur la carte pour placer le marqueur.";
    creationPlaceOutput.value = "";
    return;
  }

  const name = creationPlaceNameInput.value.trim() || "Nouveau lieu";
  const type = creationPlaceTypeInput.value;
  const district = creationPlaceDistrictInput.value.trim() || "Quartier non renseigné";
  const description = creationPlaceDescriptionInput.value.trim() || "Description à compléter.";

  const placeJson = {
    id: slugify(name),
    name,
    type,
    typeLabel: placeTypeLabels[type] || type,
    district,
    description,
    minecraftX: safeNumber(creationPlaceMinecraftXInput.value),
    minecraftZ: safeNumber(creationPlaceMinecraftZInput.value),
    xPercent: creationPlacePosition.xPercent,
    yPercent: creationPlacePosition.yPercent
  };

  creationPlacePositionText.textContent =
    `xPercent: ${creationPlacePosition.xPercent} / yPercent: ${creationPlacePosition.yPercent}`;

  creationPlaceOutput.value = JSON.stringify(placeJson, null, 2);
  updateCreationPreview();
}

function updateCreationFeatureOutput() {
  const pointsCount = creationFeaturePoints.length;
  const shape = creationFeatureShapeInput.value;
  const minimumPoints = shape === "polygon" ? 3 : 2;

  creationFeaturePointsText.textContent =
    pointsCount === 0
      ? "Clique sur la carte pour ajouter des points."
      : pointsCount === 1
        ? "1 point enregistré."
        : `${pointsCount} points enregistrés.`;

  if (pointsCount < minimumPoints) {
    creationFeatureOutput.value = "";
    updateCreationPreview();
    return;
  }

  const name = creationFeatureNameInput.value.trim() || "Nouvel élément";
  const type = creationFeatureTypeInput.value;
  const architectureType =
    creationFeatureArchitectureInput.value.trim() ||
    defaultFeatureArchitectures[type] ||
    "Type à renseigner";
  const description = creationFeatureDescriptionInput.value.trim() || "Description à compléter.";

  const featureJson = {
    id: slugify(name),
    name,
    type,
    typeLabel: featureTypeLabels[type] || type,
    architectureType,
    description,
    shape,
    points: creationFeaturePoints
  };

  if (shape === "line") {
    featureJson.thickness = safeNumber(creationFeatureThicknessInput.value, 28);
  }

  creationFeatureOutput.value = JSON.stringify(featureJson, null, 2);
  updateCreationPreview();
}

function handleCreationMapClick(event) {
  const position = getMapPositionFromPointer(event);

  if (activeCreationPage === "place") {
    creationPlacePosition = position;
    updateCreationPlaceOutput();
    return;
  }

  creationFeaturePoints.push(position);
  updateCreationFeatureOutput();
}

function resetCreationPlace() {
  creationPlacePosition = null;
  creationPlaceOutput.value = "";
  creationPlacePositionText.textContent = "Clique sur la carte pour placer le marqueur.";
  updateCreationPreview();
}

function undoCreationFeaturePoint() {
  creationFeaturePoints.pop();
  updateCreationFeatureOutput();
}

function resetCreationFeature() {
  creationFeaturePoints = [];
  creationFeatureOutput.value = "";
  creationFeaturePointsText.textContent = "Clique sur la carte pour ajouter des points.";
  updateCreationPreview();
}

function autoSelectFeatureShape() {
  const type = creationFeatureTypeInput.value;

  if (["ocean", "quartier", "place"].includes(type)) {
    creationFeatureShapeInput.value = "polygon";
  } else {
    creationFeatureShapeInput.value = "line";
  }

  if (!creationFeatureArchitectureInput.value.trim()) {
    creationFeatureArchitectureInput.value = defaultFeatureArchitectures[type] || "";
  }

  updateCreationFeatureOutput();
}

async function copyTextFromTextarea(textarea, button, defaultText) {
  if (!textarea.value.trim()) {
    button.textContent = "JSON incomplet";
    setTimeout(() => {
      button.textContent = defaultText;
    }, 1400);
    return;
  }

  try {
    await navigator.clipboard.writeText(textarea.value);
    button.textContent = "Copié";
    button.classList.add("is-copied");

    setTimeout(() => {
      button.textContent = defaultText;
      button.classList.remove("is-copied");
    }, 1400);
  } catch (error) {
    console.error("Impossible de copier le JSON.", error);
    button.textContent = "Erreur copie";

    setTimeout(() => {
      button.textContent = defaultText;
    }, 1400);
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

  syncCreationLayerSize();

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

      if (isMobileLayout()) {
        closeExplorerPanel();
      }
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

function featureMatchesSearch(feature) {
  const normalizedQuery = placesSearchQuery.trim().toLowerCase();

  const matchesSearch =
    !normalizedQuery ||
    [
      feature.name,
      feature.type,
      feature.typeLabel,
      feature.architectureType,
      feature.description
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);

  const matchesCategory = activeFeatureCategories.has(feature.type);

  return matchesSearch && matchesCategory;
}

function renderFeaturesList() {
  if (!featuresList) return;

  featuresList.innerHTML = "";

  if (!features.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-list";
    emptyMessage.textContent = "Aucun élément de carte recensé pour le moment.";
    featuresList.appendChild(emptyMessage);
    updateVisibleFeaturesCount(0);
    return;
  }

  features.forEach((feature) => {
    const button = document.createElement("button");
    button.className = `feature-list-item list-feature-${feature.type}`;
    button.type = "button";
    button.dataset.featureId = feature.id;

    if (feature.id === selectedFeatureId) {
      button.classList.add("is-selected");
    }

    const name = document.createElement("strong");
    name.textContent = feature.name;

    const type = document.createElement("span");
    type.textContent = feature.typeLabel || featureTypeLabels[feature.type] || feature.type;

    const architecture = document.createElement("small");
    architecture.textContent = feature.architectureType || "Type non renseigné";

    button.appendChild(name);
    button.appendChild(type);
    button.appendChild(architecture);

    button.addEventListener("click", () => {
      openFeatureCard(feature);
      focusFeature(feature);

      if (isMobileLayout()) {
        closeExplorerPanel();
      }
    });

    featuresList.appendChild(button);
  });

  const emptySearchMessage = document.createElement("p");
  emptySearchMessage.id = "emptyFeaturesSearchMessage";
  emptySearchMessage.className = "empty-list is-hidden";
  emptySearchMessage.textContent = "Aucun élément de carte ne correspond à cette recherche.";
  featuresList.appendChild(emptySearchMessage);

  updateFeaturesListVisibility();
}

function updateVisibleFeaturesCount(count) {
  if (!visibleFeaturesCount) return;

  if (count === 0) {
    visibleFeaturesCount.textContent = "Aucun élément";
    return;
  }

  visibleFeaturesCount.textContent = count === 1 ? "1 élément" : `${count} éléments`;
}

function updateFeaturesListVisibility() {
  if (!featuresList) return;

  let visibleCount = 0;

  features.forEach((feature) => {
    const isVisible = featureMatchesSearch(feature);

    if (isVisible) {
      visibleCount += 1;
    }

    const listItem = featuresList.querySelector(`[data-feature-id="${feature.id}"]`);

    if (listItem) {
      listItem.classList.toggle("is-hidden", !isVisible);
    }
  });

  const emptySearchMessage = document.getElementById("emptyFeaturesSearchMessage");

  if (emptySearchMessage) {
    const hasSearch = placesSearchQuery.trim().length > 0;
    emptySearchMessage.classList.toggle("is-hidden", visibleCount > 0 || !hasSearch);
  }

  updateVisibleFeaturesCount(visibleCount);
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

function focusFeature(feature) {
  smoothness = focusSmoothness;

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (!imageWidth || !imageHeight || !feature.points || !feature.points.length) return;

  const labelPosition = getFeatureLabelPosition(feature);
  const rect = viewport.getBoundingClientRect();
  const focusScale = Math.min(maxScale, Math.max(targetScale, minScale * 10));

  targetScale = focusScale;
  targetX = rect.width / 2 - labelPosition.x * focusScale;
  targetY = rect.height / 2 - labelPosition.y * focusScale;
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



function getFeatureDisplayLabel(feature) {
  return feature.mapLabel || feature.shortName || feature.name || "Élément";
}

function syncFeatureScreenLayerSize() {
  if (!featureLayer) return;

  const viewportWidth = viewport.clientWidth;
  const viewportHeight = viewport.clientHeight;

  featureLayer.setAttribute("width", viewportWidth);
  featureLayer.setAttribute("height", viewportHeight);
  featureLayer.setAttribute("viewBox", `0 0 ${viewportWidth} ${viewportHeight}`);
  featureLayer.style.width = `${viewportWidth}px`;
  featureLayer.style.height = `${viewportHeight}px`;
}

function convertImagePointToScreen(point) {
  const imagePoint = getFeaturePoint(point);

  return {
    x: currentX + imagePoint.x * currentScale,
    y: currentY + imagePoint.y * currentScale
  };
}

function getFeatureScreenPoints(feature) {
  return feature.points
    .map((point) => {
      const screenPoint = convertImagePointToScreen(point);
      return `${screenPoint.x},${screenPoint.y}`;
    })
    .join(" ");
}

function getFeatureScreenLabelPosition(feature) {
  const labelPosition = getFeatureLabelPosition(feature);

  return {
    x: currentX + labelPosition.x * currentScale,
    y: currentY + labelPosition.y * currentScale
  };
}

function createFeatureHtmlLabel(feature, labelPosition) {
  if (!featureLabelsLayer) return;

  const label = document.createElement("div");

  label.className = `street-plate street-plate-${feature.type}`;
  label.dataset.featureId = feature.id;
  label.dataset.imageX = labelPosition.x;
  label.dataset.imageY = labelPosition.y;
  label.textContent = getFeatureDisplayLabel(feature);

  featureLabelsLayer.appendChild(label);
}

function updateFeatureScreenPositions() {
  if (!featureLayer || !features.length) return;

  syncFeatureScreenLayerSize();

  features.forEach((feature) => {
    if (!feature.points || !feature.points.length) return;

    const featureGroup = featureLayer.querySelector(
      `[data-feature-id="${feature.id}"]`
    );

    if (!featureGroup) return;

    const points = getFeatureScreenPoints(feature);
    const hitShape = featureGroup.querySelector(".feature-hit");
    const visualShape = featureGroup.querySelector(".feature-visual");

    if (hitShape) {
      hitShape.setAttribute("points", points);
    }

    if (visualShape) {
      visualShape.setAttribute("points", points);
    }
  });
}

function updateFeatureLabelPositions() {
  if (!featureLabelsLayer) return;

  featureLabelsLayer.querySelectorAll(".street-plate").forEach((label) => {
    const imageX = Number(label.dataset.imageX);
    const imageY = Number(label.dataset.imageY);

    if (!Number.isFinite(imageX) || !Number.isFinite(imageY)) return;

    const screenX = currentX + imageX * currentScale;
    const screenY = currentY + imageY * currentScale;

    label.style.left = `${Math.round(screenX)}px`;
    label.style.top = `${Math.round(screenY)}px`;
  });
}

function showFeatureHtmlLabel(featureId) {
  const label = featureLabelsLayer?.querySelector(`[data-feature-id="${featureId}"]`);

  if (!label || selectedFeatureId === featureId) return;
  if (label.classList.contains("is-unavailable")) return;

  label.classList.add("is-visible");
}

function hideFeatureHtmlLabel(featureId) {
  const label = featureLabelsLayer?.querySelector(`[data-feature-id="${featureId}"]`);

  if (!label) return;

  label.classList.remove("is-visible");
}

function updateFeatureHtmlLabelsVisibility() {
  if (!featureLabelsLayer) return;

  featureLabelsLayer.querySelectorAll(".street-plate").forEach((label) => {
    const featureId = label.dataset.featureId;
    const feature = features.find((item) => item.id === featureId);

    const isVisible = feature && featureMatchesVisibility(feature);
    const isSelected = selectedFeatureId === featureId;

    label.classList.toggle("is-unavailable", !isVisible);
    label.classList.toggle("is-selected", isSelected);

    if (!isVisible || isSelected) {
      label.classList.remove("is-visible");
    }
  });
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

  updateFeatureHtmlLabelsVisibility();
  updateFeatureScreenPositions();
  updateFeatureLabelPositions();
  updateCoordinateTargetPosition();
  updateFeaturesListVisibility();
}

function toggleFeatureCategory(category) {
  if (activeFeatureCategories.has(category)) {
    activeFeatureCategories.delete(category);
  } else {
    activeFeatureCategories.add(category);
  }

  updateFeatureControlStates();
  updateFeaturesVisibility();
  updateFeaturesListVisibility();
}

function clearPriorityMarkerHover() {
  if (!priorityHoveredMarker) return;

  priorityHoveredMarker.classList.remove("is-priority-hover");
  priorityHoveredMarker = null;
}

function setPriorityMarkerHover(marker) {
  if (priorityHoveredMarker === marker) return;

  clearPriorityMarkerHover();

  if (!marker) return;

  marker.classList.add("is-priority-hover");
  priorityHoveredMarker = marker;
}

function getMarkerUnderPointer(event) {
  if (!markersLayer || !placesLayerVisible || !places.length) return null;

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (!imageWidth || !imageHeight) return null;

  const rect = viewport.getBoundingClientRect();
  const pointerX = event.clientX - rect.left;
  const pointerY = event.clientY - rect.top;

  const markerHitRadius = 18;
  let closestMarker = null;
  let closestDistance = Infinity;

  places.forEach((place) => {
    if (!placeMatchesSearch(place)) return;

    const marker = markersLayer.querySelector(`[data-place-id="${place.id}"]`);

    if (!marker || marker.classList.contains("is-hidden")) return;

    const markerX = currentX + ((place.xPercent / 100) * imageWidth) * currentScale;
    const markerY = currentY + ((place.yPercent / 100) * imageHeight) * currentScale;
    const distance = Math.hypot(pointerX - markerX, pointerY - markerY);

    if (distance <= markerHitRadius && distance < closestDistance) {
      closestDistance = distance;
      closestMarker = marker;
    }
  });

  return closestMarker;
}

function updateMarkerPriorityHover(event) {
  const marker = getMarkerUnderPointer(event);
  setPriorityMarkerHover(marker);
}

function openMarkerUnderPointerIfNeeded(event) {
  const marker = getMarkerUnderPointer(event);

  if (!marker) return false;

  const placeId = marker.dataset.placeId;
  const place = places.find((item) => item.id === placeId);

  if (!place) return false;

  event.stopPropagation();

  openPlaceCard(place);
  focusPlace(place);
  setPriorityMarkerHover(marker);

  return true;
}

function renderFeatures() {
  featureLayer.innerHTML = "";

  if (featureLabelsLayer) {
    featureLabelsLayer.innerHTML = "";
  }

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (!imageWidth || !imageHeight) return;

  syncFeatureScreenLayerSize();
  syncCreationLayerSize();

  features.forEach((feature) => {
    if (!feature.points || !feature.points.length) return;

    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.classList.add("feature-group");
    group.dataset.featureId = feature.id;

    if (feature.id === selectedFeatureId) {
      group.classList.add("is-selected");
    }

    const points = getFeatureScreenPoints(feature);
    const normalizedShape = getNormalizedFeatureShape(feature);
    const svgShape = normalizedShape === "polygon" ? "polygon" : "polyline";

    const hitLine = document.createElementNS("http://www.w3.org/2000/svg", svgShape);
    hitLine.setAttribute("points", points);
    hitLine.classList.add("feature-hit", `feature-shape-${normalizedShape}`);

    if (normalizedShape === "line") {
      hitLine.setAttribute("stroke-width", feature.thickness || 28);
    }

    const visualLine = document.createElementNS("http://www.w3.org/2000/svg", svgShape);
    visualLine.setAttribute("points", points);
    visualLine.classList.add(
      "feature-visual",
      `feature-${feature.type}`,
      `feature-shape-${normalizedShape}`
    );

    const labelPosition = getFeatureLabelPosition(feature);
    createFeatureHtmlLabel(feature, labelPosition);

    group.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    });

    group.addEventListener("pointerenter", (event) => {
      showFeatureHtmlLabel(feature.id);
      updateMarkerPriorityHover(event);
    });

    group.addEventListener("pointermove", (event) => {
      updateMarkerPriorityHover(event);
    });

    group.addEventListener("pointerleave", () => {
      hideFeatureHtmlLabel(feature.id);
      clearPriorityMarkerHover();
    });

    group.addEventListener("click", (event) => {
      if (openMarkerUnderPointerIfNeeded(event)) {
        return;
      }

      event.stopPropagation();
      openFeatureCard(feature);
    });

    group.appendChild(hitLine);
    group.appendChild(visualLine);

    featureLayer.appendChild(group);
  });

  updateFeaturesVisibility();
  updateFeatureHtmlLabelsVisibility();
  updateFeatureScreenPositions();
  updateFeatureLabelPositions();
  updateCoordinateTargetPosition();
  updateFeaturesListVisibility();
}

function setSelectedFeature(feature) {
  selectedFeatureId = feature.id;

  document.querySelectorAll(".feature-group").forEach((group) => {
    const isSelected = group.dataset.featureId === selectedFeatureId;
    group.classList.toggle("is-selected", isSelected);
  });

  document.querySelectorAll(".feature-list-item").forEach((item) => {
    const isSelected = item.dataset.featureId === selectedFeatureId;
    item.classList.toggle("is-selected", isSelected);
  });

  updateFeatureHtmlLabelsVisibility();
}

function clearSelectedFeature() {
  selectedFeatureId = null;

  document.querySelectorAll(".feature-group").forEach((group) => {
    group.classList.remove("is-selected");
  });

  document.querySelectorAll(".feature-list-item").forEach((item) => {
    item.classList.remove("is-selected");
  });

  updateFeatureHtmlLabelsVisibility();
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

function percentToMinecraftCoords(xPercent, yPercent) {
  const x = mapBounds.minX + (xPercent / 100) * (mapBounds.maxX - mapBounds.minX);
  const z = mapBounds.minZ + (yPercent / 100) * (mapBounds.maxZ - mapBounds.minZ);

  return {
    x: Math.round(x),
    z: Math.round(z)
  };
}

function minecraftCoordsToPercent(x, z) {
  const xPercent = ((x - mapBounds.minX) / (mapBounds.maxX - mapBounds.minX)) * 100;
  const yPercent = ((z - mapBounds.minZ) / (mapBounds.maxZ - mapBounds.minZ)) * 100;

  return {
    xPercent: Number(xPercent.toFixed(2)),
    yPercent: Number(yPercent.toFixed(2))
  };
}

function getMinecraftCoordsFromPointer(event) {
  const position = getMapPositionFromPointer(event);
  return percentToMinecraftCoords(position.xPercent, position.yPercent);
}

function updateCoordinateHover(event) {
  if (!coordinateToolOpen || !coordinateHoverText) return;

  const coords = getMinecraftCoordsFromPointer(event);
  coordinateHoverText.textContent = `Position survolée : X ${coords.x} / Z ${coords.z}`;
}

function coordinatesAreInsideMap(x, z) {
  return (
    x >= mapBounds.minX &&
    x <= mapBounds.maxX &&
    z >= mapBounds.minZ &&
    z <= mapBounds.maxZ
  );
}

function updateCoordinateToolStatus(message) {
  if (!coordinateToolStatus) return;
  coordinateToolStatus.textContent = message || "";
}

function updateCoordinateTargetPosition() {
  if (!coordinateTarget || !coordinateTargetPosition) return;

  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (!imageWidth || !imageHeight) return;

  const imageX = (coordinateTargetPosition.xPercent / 100) * imageWidth;
  const imageY = (coordinateTargetPosition.yPercent / 100) * imageHeight;

  const screenX = currentX + imageX * currentScale;
  const screenY = currentY + imageY * currentScale;

  coordinateTarget.style.left = `${Math.round(screenX)}px`;
  coordinateTarget.style.top = `${Math.round(screenY)}px`;
}

function clearCoordinateTarget() {
  coordinateTargetPosition = null;
  coordinateTarget?.classList.add("is-hidden");
}

function focusCoordinatePosition(x, z) {
  if (!coordinatesAreInsideMap(x, z)) {
    updateCoordinateToolStatus(
      `Ces coordonnées semblent hors de la carte. Zone couverte : X ${mapBounds.minX} à ${mapBounds.maxX}, Z ${mapBounds.minZ} à ${mapBounds.maxZ}.`
    );
    clearCoordinateTarget();
    return;
  }

  const position = minecraftCoordsToPercent(x, z);
  const imageWidth = mapImage.naturalWidth;
  const imageHeight = mapImage.naturalHeight;

  if (!imageWidth || !imageHeight) return;

  const imageX = (position.xPercent / 100) * imageWidth;
  const imageY = (position.yPercent / 100) * imageHeight;
  const rect = viewport.getBoundingClientRect();

  smoothness = focusSmoothness;

  const focusScale = Math.min(maxScale, Math.max(targetScale, minScale * 10));

  targetScale = focusScale;
  targetX = rect.width / 2 - imageX * focusScale;
  targetY = rect.height / 2 - imageY * focusScale;

  coordinateTargetPosition = {
    x,
    z,
    xPercent: position.xPercent,
    yPercent: position.yPercent
  };

  coordinateTarget?.classList.remove("is-hidden");
  updateCoordinateTargetPosition();
  updateCoordinateToolStatus(`Cible placée : X ${x} / Z ${z}`);
}

function readCoordinateInputs() {
  const x = Number(coordinateXInput?.value);
  const z = Number(coordinateZInput?.value);

  if (!Number.isFinite(x) || !Number.isFinite(z)) {
    updateCoordinateToolStatus("Renseigne une coordonnée X et une coordonnée Z valides.");
    return null;
  }

  return {
    x: Math.round(x),
    z: Math.round(z)
  };
}

function goToCoordinateFromInputs() {
  const coords = readCoordinateInputs();
  if (!coords) return;

  focusCoordinatePosition(coords.x, coords.z);
}

function initializeCoordinateInputsFromUrl() {
  if (!coordinateXInput || !coordinateZInput) return;

  const params = new URLSearchParams(window.location.search);

  if (!params.has("x") || !params.has("z")) return;

  const x = Number(params.get("x"));
  const z = Number(params.get("z"));

  if (!Number.isFinite(x) || !Number.isFinite(z)) return;

  coordinateXInput.value = Math.round(x);
  coordinateZInput.value = Math.round(z);
}

function openCoordinateTool() {
  closeMapSwitcherMenu();

  coordinateToolOpen = true;

  coordinateToolPanel?.classList.remove("is-hidden");

  closeNewsPanel();
  closeHelpPanel();
  closeFeedbackPanel();
  closeNeedsTool();

  if (creationMode) {
    closeCreationPanel();
  }

  if (toolsMenu && !toolsMenu.classList.contains("is-hidden")) {
    toggleToolsMenu();
  }

  updateCoordinateToolStatus("");
}

function closeCoordinateTool() {
  coordinateToolOpen = false;

  coordinateToolPanel?.classList.add("is-hidden");
  clearCoordinateTarget();

  if (coordinateHoverText) {
    coordinateHoverText.textContent = "Survole la carte pour lire les coordonnées Minecraft.";
  }

  updateCoordinateToolStatus("");
}

async function copyCoordinateLink() {
  let coords = coordinateTargetPosition
    ? { x: coordinateTargetPosition.x, z: coordinateTargetPosition.z }
    : readCoordinateInputs();

  if (!coords) return;

  if (!coordinatesAreInsideMap(coords.x, coords.z)) {
    updateCoordinateToolStatus("Impossible de copier un lien : ces coordonnées sont hors de la carte.");
    return;
  }

  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  const coordinateUrl = `${baseUrl}?x=${coords.x}&z=${coords.z}`;

  try {
    await navigator.clipboard.writeText(coordinateUrl);
    updateCoordinateToolStatus("Lien copié. À l’ouverture, les coordonnées seront préremplies dans l’outil.");

    copyCoordinateLinkButton?.classList.add("is-copied");
    if (copyCoordinateLinkButton) {
      copyCoordinateLinkButton.textContent = "Lien copié";
    }

    setTimeout(() => {
      copyCoordinateLinkButton?.classList.remove("is-copied");
      if (copyCoordinateLinkButton) {
        copyCoordinateLinkButton.textContent = "Copier le lien de cette position";
      }
    }, 1500);
  } catch (error) {
    console.error("Impossible de copier le lien de coordonnées.", error);
    updateCoordinateToolStatus("Impossible de copier automatiquement le lien.");
  }
}

function getNeedLabel(type) {
  return placeTypeLabels[type] || type || "Besoin";
}

function getPlacesForNeed(type) {
  return places
    .filter((place) => place.type === type)
    .sort((a, b) => (a.name || "").localeCompare(b.name || "", "fr"));
}

function updateNeedsToolStatus(message) {
  if (!needsToolStatus) return;
  needsToolStatus.textContent = message || "";
}

function updateNeedsChoiceStates() {
  needsChoiceButtons.forEach((button) => {
    const isActive = button.dataset.need === activeNeedType;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateNeedsResultsCount(count) {
  if (!needsResultsCount) return;
  needsResultsCount.textContent = count === 1 ? "1 lieu" : `${count} lieux`;
}

function clearNeedsResults() {
  activeNeedType = null;
  updateNeedsChoiceStates();
  updateNeedsResultsCount(0);

  if (needsResultsTitle) {
    needsResultsTitle.textContent = "Choisissez un besoin";
  }

  if (needsResultsList) {
    needsResultsList.innerHTML = "";

    const emptyMessage = document.createElement("p");
    emptyMessage.className = "needs-empty-message";
    emptyMessage.textContent = "Sélectionnez une catégorie pour afficher les lieux utiles correspondants.";
    needsResultsList.appendChild(emptyMessage);
  }

  updateNeedsToolStatus("");
}

function renderNeedsResults() {
  if (!needsResultsList) return;

  needsResultsList.innerHTML = "";

  if (!activeNeedType) {
    clearNeedsResults();
    return;
  }

  const matchingPlaces = getPlacesForNeed(activeNeedType);
  const label = getNeedLabel(activeNeedType);

  if (needsResultsTitle) {
    needsResultsTitle.textContent = label;
  }

  updateNeedsResultsCount(matchingPlaces.length);

  if (!matchingPlaces.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "needs-empty-message";
    emptyMessage.textContent = `Aucun lieu de type ${label.toLowerCase()} n’est recensé pour le moment.`;
    needsResultsList.appendChild(emptyMessage);
    updateNeedsToolStatus("Vous pouvez proposer l’ajout d’un lieu avec l’onglet Remarque.");
    return;
  }

  updateNeedsToolStatus("Cliquez sur un résultat pour ouvrir sa fiche et centrer la carte.");

  matchingPlaces.forEach((place) => {
    const button = document.createElement("button");
    button.className = `needs-result-item list-${place.type}`;
    button.type = "button";

    const name = document.createElement("strong");
    name.textContent = place.name;

    const meta = document.createElement("span");
    meta.textContent = place.district || "Quartier non renseigné";

    const coords = document.createElement("small");
    coords.textContent = `X ${place.minecraftX} / Z ${place.minecraftZ}`;

    button.appendChild(name);
    button.appendChild(meta);
    button.appendChild(coords);

    button.addEventListener("click", () => {
      openPlaceCard(place);
      focusPlace(place);
      closeExplorerPanel();
    });

    needsResultsList.appendChild(button);
  });
}

function setActiveNeed(type) {
  activeNeedType = type;
  updateNeedsChoiceStates();
  renderNeedsResults();
}

function openNeedsTool() {
  closeMapSwitcherMenu();

  needsToolOpen = true;

  needsToolPanel?.classList.remove("is-hidden");

  closeNewsPanel();
  closeHelpPanel();
  closeFeedbackPanel();
  closeCoordinateTool();
  closeExplorerPanel();

  if (creationMode) {
    closeCreationPanel();
  }

  if (toolsMenu && !toolsMenu.classList.contains("is-hidden")) {
    toggleToolsMenu();
  }

  if (!activeNeedType) {
    clearNeedsResults();
  } else {
    renderNeedsResults();
  }
}

function closeNeedsTool() {
  needsToolOpen = false;
  needsToolPanel?.classList.add("is-hidden");
  updateNeedsToolStatus("");
}

function setExplorerPage(pageName) {
  activeExplorerPage = pageName === "features" ? "features" : "places";

  const isPlacesPage = activeExplorerPage === "places";

  explorerPagesTrack?.classList.toggle("show-features", !isPlacesPage);
  explorerPlacesPage?.classList.toggle("is-active", isPlacesPage);
  explorerFeaturesPage?.classList.toggle("is-active", !isPlacesPage);

  explorerModeButtons.forEach((button) => {
    const isActive = button.dataset.explorerPage === activeExplorerPage;

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
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
  closeMapSwitcherMenu();

  helpPanel.classList.remove("is-hidden");
  helpButton.classList.add("is-active");

  closeNewsPanel();
  closeFeedbackPanel();
  closeCoordinateTool();
  closeNeedsTool();
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
  closeMapSwitcherMenu();

  newsPanel.classList.remove("is-hidden");
  newsButton.classList.add("is-active");

  closeHelpPanel();
  closeFeedbackPanel();
  closeCoordinateTool();
  closeNeedsTool();
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

function openFeedbackPanel() {
  closeMapSwitcherMenu();

  feedbackPanel?.classList.remove("is-hidden");
  feedbackTabButton?.classList.add("is-active");

  closeNewsPanel();
  closeHelpPanel();
  closeCoordinateTool();
  closeNeedsTool();
}

function closeFeedbackPanel() {
  feedbackPanel?.classList.add("is-hidden");
  feedbackTabButton?.classList.remove("is-active");

  if (feedbackStatus) {
    feedbackStatus.textContent = "";
  }
}

function toggleFeedbackPanel() {
  if (!feedbackPanel) return;

  const isHidden = feedbackPanel.classList.contains("is-hidden");

  if (isHidden) {
    openFeedbackPanel();
  } else {
    closeFeedbackPanel();
  }
}

async function copyFeedbackMessage() {
  if (!feedbackTitleInput || !feedbackCategoryInput || !feedbackDescriptionInput) return;

  const title = feedbackTitleInput.value.trim() || "Remarque sur l’Atlas";
  const category = feedbackCategoryInput.value;
  const description = feedbackDescriptionInput.value.trim() || "Description à compléter.";
  const pageUrl = window.location.href.split("#")[0];

  const message = [
    "Bonjour @Mahyster,",
    "",
    "Je souhaite effectuer une remarque sur l’Atlas de Karminéa.",
    "",
    `Titre : ${title}`,
    `Catégorie : ${category}`,
    "",
    "Description :",
    description,
    "",
    `Page : ${pageUrl}`
  ].join("\n");

  try {
    await navigator.clipboard.writeText(message);

    if (feedbackStatus) {
      feedbackStatus.textContent = "Message copié. Tu peux maintenant le coller sur Discord.";
    }

    copyFeedbackButton?.classList.add("is-copied");
    copyFeedbackButton.textContent = "Message copié";

    setTimeout(() => {
      copyFeedbackButton?.classList.remove("is-copied");
      if (copyFeedbackButton) {
        copyFeedbackButton.textContent = "Copier le message Discord";
      }
    }, 1600);
  } catch (error) {
    console.error("Impossible de copier le message de remarque.", error);

    if (feedbackStatus) {
      feedbackStatus.textContent = "Impossible de copier automatiquement. Vérifie les permissions du navigateur.";
    }
  }
}

function closeMapSwitcherMenu() {
  if (!mapSwitcherMenu || !mapSwitcherButton) return;

  mapSwitcherMenu.classList.add("is-hidden");
  mapSwitcherButton.classList.remove("is-active");
  mapSwitcherButton.setAttribute("aria-expanded", "false");
}

function toggleMapSwitcherMenu() {
  if (!mapSwitcherMenu || !mapSwitcherButton) return;

  const isOpening = mapSwitcherMenu.classList.toggle("is-hidden") === false;

  mapSwitcherButton.classList.toggle("is-active", isOpening);
  mapSwitcherButton.setAttribute("aria-expanded", String(isOpening));

  if (isOpening && toolsMenu && !toolsMenu.classList.contains("is-hidden")) {
    toggleToolsMenu();
  }
}

function closeWelcomePanel() {
  welcomePanel.classList.add("is-hidden");
}

initializeCreationAdminVisibility();

if (mapImage.complete) {
  initializeMap();
} else {
  mapImage.addEventListener("load", initializeMap);
}

window.addEventListener("resize", () => {
  fitMapToScreen(true);
  updateFeatureScreenPositions();
  updateFeatureLabelPositions();
  updateCoordinateTargetPosition();
  updateCreationPreview();
});

function getViewportPointerCenter(pointerA, pointerB) {
  return {
    clientX: (pointerA.clientX + pointerB.clientX) / 2,
    clientY: (pointerA.clientY + pointerB.clientY) / 2
  };
}

function getViewportPointerDistance(pointerA, pointerB) {
  return Math.hypot(
    pointerA.clientX - pointerB.clientX,
    pointerA.clientY - pointerB.clientY
  );
}

function startPinchZoom() {
  if (activeViewportPointers.size < 2) return;

  const [pointerA, pointerB] = Array.from(activeViewportPointers.values());
  const center = getViewportPointerCenter(pointerA, pointerB);
  const rect = viewport.getBoundingClientRect();

  const centerX = center.clientX - rect.left;
  const centerY = center.clientY - rect.top;

  isPinching = true;
  isDragging = false;
  hasPointerMoved = true;

  pinchStartDistance = getViewportPointerDistance(pointerA, pointerB);
  pinchStartScale = targetScale;
  pinchStartWorldCenter = {
    x: (centerX - targetX) / targetScale,
    y: (centerY - targetY) / targetScale
  };
}

function updatePinchZoom() {
  if (!isPinching || activeViewportPointers.size < 2) return;

  const [pointerA, pointerB] = Array.from(activeViewportPointers.values());
  const currentDistance = getViewportPointerDistance(pointerA, pointerB);

  if (!pinchStartDistance || !currentDistance) return;

  const center = getViewportPointerCenter(pointerA, pointerB);
  const rect = viewport.getBoundingClientRect();
  const centerX = center.clientX - rect.left;
  const centerY = center.clientY - rect.top;

  const nextScale = Math.max(
    minScale,
    Math.min(maxScale, pinchStartScale * (currentDistance / pinchStartDistance))
  );

  targetScale = nextScale;
  targetX = centerX - pinchStartWorldCenter.x * nextScale;
  targetY = centerY - pinchStartWorldCenter.y * nextScale;
}

function stopViewportPointer(event) {
  activeViewportPointers.delete(event.pointerId);

  if (activeViewportPointers.size === 0) {
    isDragging = false;
    isPinching = false;
    viewport.classList.remove("is-dragging");
    return;
  }

  if (isPinching && activeViewportPointers.size === 1) {
    const remainingPointer = Array.from(activeViewportPointers.values())[0];

    isPinching = false;
    isDragging = true;
    pointerDownClientX = remainingPointer.clientX;
    pointerDownClientY = remainingPointer.clientY;
    startX = remainingPointer.clientX - targetX;
    startY = remainingPointer.clientY - targetY;
  }
}

viewport.addEventListener("pointerdown", (event) => {
  if (event.pointerType !== "touch" && event.button !== 0) return;

  activeViewportPointers.set(event.pointerId, {
    clientX: event.clientX,
    clientY: event.clientY
  });

  viewport.setPointerCapture(event.pointerId);

  if (activeViewportPointers.size >= 2) {
    viewport.classList.add("is-dragging");
    startPinchZoom();
    return;
  }

  isDragging = true;
  isPinching = false;
  hasPointerMoved = false;

  pointerDownClientX = event.clientX;
  pointerDownClientY = event.clientY;

  startX = event.clientX - targetX;
  startY = event.clientY - targetY;

  viewport.classList.add("is-dragging");
});

viewport.addEventListener("pointermove", (event) => {
  updateCoordinateHover(event);

  if (activeViewportPointers.has(event.pointerId)) {
    activeViewportPointers.set(event.pointerId, {
      clientX: event.clientX,
      clientY: event.clientY
    });
  }

  if (isPinching) {
    updatePinchZoom();
    return;
  }

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
  const wasPinching = isPinching;

  if (creationMode && !hasPointerMoved && !wasPinching) {
    handleCreationMapClick(event);
  }

  stopViewportPointer(event);
});

viewport.addEventListener("pointercancel", (event) => {
  stopViewportPointer(event);
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
  updateFeaturesListVisibility();
});


explorerModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setExplorerPage(button.dataset.explorerPage);
  });
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
explorerTabButton.addEventListener("click", toggleExplorerPanel);
closeExplorerButton.addEventListener("click", closeExplorerPanel);
copyCoordsButton.addEventListener("click", copySelectedPlaceCoords);
closeFeatureCardButton.addEventListener("click", closeFeatureCard);
categoryPrevButton.addEventListener("click", toggleCategoryPage);
categoryNextButton.addEventListener("click", toggleCategoryPage);
mapSwitcherButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMapSwitcherMenu();
});

mapSwitcherMenu?.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!mapSwitcherMenu || !mapSwitcherButton) return;
  if (mapSwitcherMenu.classList.contains("is-hidden")) return;

  const clickedInsideSwitcher =
    mapSwitcherMenu.contains(event.target) || mapSwitcherButton.contains(event.target);

  if (!clickedInsideSwitcher) {
    closeMapSwitcherMenu();
  }
});

toggleToolsMenuButton.addEventListener("click", toggleToolsMenu);
openCoordinateToolButton?.addEventListener("click", openCoordinateTool);
openNeedsToolButton?.addEventListener("click", openNeedsTool);
closeNeedsToolButton?.addEventListener("click", closeNeedsTool);
needsChoiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveNeed(button.dataset.need);
  });
});
closeCoordinateToolButton?.addEventListener("click", closeCoordinateTool);
goToCoordinateButton?.addEventListener("click", goToCoordinateFromInputs);
clearCoordinateTargetButton?.addEventListener("click", () => {
  clearCoordinateTarget();
  updateCoordinateToolStatus("Cible effacée.");
});
copyCoordinateLinkButton?.addEventListener("click", copyCoordinateLink);
feedbackTabButton?.addEventListener("click", toggleFeedbackPanel);
closeFeedbackPanelButton?.addEventListener("click", closeFeedbackPanel);
copyFeedbackButton?.addEventListener("click", copyFeedbackMessage);
newsButton.addEventListener("click", toggleNewsPanel);
closeNewsPanelButton.addEventListener("click", closeNewsPanel);
helpButton.addEventListener("click", toggleHelpPanel);
closeHelpPanelButton.addEventListener("click", closeHelpPanel);
closeWelcomePanelButton.addEventListener("click", closeWelcomePanel);
welcomeConfirmButton.addEventListener("click", closeWelcomePanel);

if (toggleCreationButton) {
  toggleCreationButton.addEventListener("click", toggleCreationMode);
}

if (closeCreationPanelButton) {
  closeCreationPanelButton.addEventListener("click", closeCreationPanel);
}

if (creationPlaceTab) {
  creationPlaceTab.addEventListener("click", () => setCreationPage("place"));
}

if (creationFeatureTab) {
  creationFeatureTab.addEventListener("click", () => setCreationPage("feature"));
}

[
  creationPlaceNameInput,
  creationPlaceTypeInput,
  creationPlaceDistrictInput,
  creationPlaceMinecraftXInput,
  creationPlaceMinecraftZInput,
  creationPlaceDescriptionInput
].forEach((input) => {
  input?.addEventListener("input", updateCreationPlaceOutput);
  input?.addEventListener("change", updateCreationPlaceOutput);
});

[
  creationFeatureNameInput,
  creationFeatureShapeInput,
  creationFeatureArchitectureInput,
  creationFeatureThicknessInput,
  creationFeatureDescriptionInput
].forEach((input) => {
  input?.addEventListener("input", updateCreationFeatureOutput);
  input?.addEventListener("change", updateCreationFeatureOutput);
});

creationFeatureTypeInput?.addEventListener("change", autoSelectFeatureShape);
resetCreationPlaceButton?.addEventListener("click", resetCreationPlace);
undoCreationFeaturePointButton?.addEventListener("click", undoCreationFeaturePoint);
resetCreationFeatureButton?.addEventListener("click", resetCreationFeature);

copyCreationPlaceJsonButton?.addEventListener("click", () => {
  copyTextFromTextarea(creationPlaceOutput, copyCreationPlaceJsonButton, "Copier le JSON");
});

copyCreationFeatureJsonButton?.addEventListener("click", () => {
  copyTextFromTextarea(
    creationFeatureOutput,
    copyCreationFeatureJsonButton,
    "Copier le JSON features.json"
  );
});

creationCleanModeInput?.addEventListener("change", (event) => {
  setCreationCleanMode(event.target.checked);
});

if (togglePlacesLayerButton) {
  togglePlacesLayerButton.addEventListener("click", togglePlacesLayer);
}

initializeCoordinateInputsFromUrl();

autoSelectFeatureShape();

animateMap();
