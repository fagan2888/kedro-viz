import { combineReducers } from 'redux';
import {
  nodeClickedReducer,
  nodeHoveredReducer,
  nodeDisabledReducer
} from './nodes';
import { tagActiveReducer, tagEnabledReducer } from './tags';
import {
  CHANGE_VIEW,
  RESET_DATA,
  TOGGLE_PARAMETERS,
  TOGGLE_TEXT_LABELS,
  TOGGLE_THEME,
  UPDATE_CHART_SIZE,
  UPDATE_FONT_LOADED
} from '../actions';

function resetReducer(state = {}, action) {
  if (action.type === RESET_DATA) {
    return action.data;
  }
  return state;
}

function viewReducer(view = 'combined', action) {
  if (action.type === CHANGE_VIEW) {
    return action.view;
  }
  return view;
}

function textLabelsReducer(textLabels = true, action) {
  if (action.type === TOGGLE_TEXT_LABELS) {
    return action.textLabels;
  }
  return textLabels;
}

function themeReducer(theme = true, action) {
  if (action.type === TOGGLE_THEME) {
    return action.theme;
  }
  return theme;
}

function chartSizeReducer(chartSize = true, action) {
  if (action.type === UPDATE_CHART_SIZE) {
    return action.chartSize;
  }
  return chartSize;
}

function fontLoadedReducer(fontLoaded = true, action) {
  if (action.type === UPDATE_FONT_LOADED) {
    return action.fontLoaded;
  }
  return fontLoaded;
}

function toggleParametersReducer(state = {}, action) {
  if (action.type === TOGGLE_PARAMETERS) {
    const paramIDs = state.nodes.filter(id => state.nodeIsParam[id]);
    return Object.assign({}, state, {
      nodeDisabled: paramIDs.reduce(
        (disabled, id) =>
          Object.assign({}, disabled, {
            [id]: !action.parameters
          }),
        state.nodeDisabled
      ),
      parameters: action.parameters
    });
  }
  return state;
}

const combinedReducer = combineReducers({
  chartSize: chartSizeReducer,
  fontLoaded: fontLoadedReducer,
  textLabels: textLabelsReducer,
  theme: themeReducer,
  nodeClicked: nodeClickedReducer,
  nodeDisabled: nodeDisabledReducer,
  nodeHovered: nodeHoveredReducer,
  tagActive: tagActiveReducer,
  tagEnabled: tagEnabledReducer,
  view: viewReducer
});

const rootReducer = (state = {}, action) =>
  Object.assign(
    {},
    state,
    combinedReducer(state, action),
    toggleParametersReducer(state, action),
    resetReducer(state, action)
  );

export default rootReducer;
