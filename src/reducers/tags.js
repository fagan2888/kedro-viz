import { TOGGLE_TAG_ACTIVE, TOGGLE_TAG_FILTER } from '../actions/tags';

export function tagActiveReducer(tagActive = {}, action) {
  if (action.type === TOGGLE_TAG_ACTIVE) {
    return Object.assign({}, tagActive, {
      [action.tagID]: action.active
    });
  }
  return tagActive;
}

export function tagEnabledReducer(tagEnabled = {}, action) {
  if (action.type === TOGGLE_TAG_FILTER) {
    return Object.assign({}, tagEnabled, {
      [action.tagID]: action.enabled
    });
  }
  return tagEnabled;
}
