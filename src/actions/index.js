export const CHANGE_VIEW = 'CHANGE_VIEW';

/**
 * Change the view mode, which handles how the nodes should be filtered.
 * @param {string} view One of 'combined', 'data', or 'task'
 */
export function changeView(view) {
  return {
    type: CHANGE_VIEW,
    view
  };
}

export const RESET_DATA = 'RESET_DATA';

/**
 * Overwrite the existing data store when receiving new data from upstream
 * @param {Object} data New pipeline state data
 */
export function resetData(data) {
  return {
    type: RESET_DATA,
    data
  };
}

export const TOGGLE_PARAMETERS = 'TOGGLE_PARAMETERS';

/**
 * Toggle whether to show Parameters on/off
 * @param {Boolean} parameters Whether to show Parameters
 */
export function toggleParameters(parameters) {
  return {
    type: TOGGLE_PARAMETERS,
    parameters
  };
}

export const TOGGLE_TEXT_LABELS = 'TOGGLE_TEXT_LABELS';

/**
 * Toggle whether to show text labels on/off
 * @param {Boolean} textLabels True if text labels are to be shown
 */
export function toggleTextLabels(textLabels) {
  return {
    type: TOGGLE_TEXT_LABELS,
    textLabels
  };
}

export const TOGGLE_THEME = 'TOGGLE_THEME';

/**
 * Switch between light/dark theme
 * @param {string} theme Theme name
 */
export function toggleTheme(theme) {
  return {
    type: TOGGLE_THEME,
    theme
  };
}

export const UPDATE_CHART_SIZE = 'UPDATE_CHART_SIZE';

/**
 * Store the chart size, based on the window
 * @param {Object} chartSize getBoundingClientRect value
 */
export function updateChartSize(chartSize) {
  return {
    type: UPDATE_CHART_SIZE,
    chartSize
  };
}

export const UPDATE_FONT_LOADED = 'UPDATE_FONT_LOADED';

/**
 * Update whether the webfont has loaded, which should block the chart render
 * @param {Boolean} fontLoaded Whether the font has loaded
 */
export function updateFontLoaded(fontLoaded) {
  return {
    type: UPDATE_FONT_LOADED,
    fontLoaded
  };
}
