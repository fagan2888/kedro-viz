import {
  TOGGLE_NODE_CLICKED,
  TOGGLE_NODE_DISABLED,
  TOGGLE_NODES_DISABLED,
  TOGGLE_NODE_HOVERED
} from '../actions/nodes';

export function nodeClickedReducer(nodeClicked = null, action) {
  if (action.type === TOGGLE_NODE_CLICKED) {
    return action.nodeClicked;
  }
  return nodeClicked;
}

export function nodeHoveredReducer(nodeHovered = null, action) {
  if (action.type === TOGGLE_NODE_HOVERED) {
    return action.nodeHovered;
  }
  return nodeHovered;
}

export function nodeDisabledReducer(nodeDisabled = {}, action) {
  switch (action.type) {
    case TOGGLE_NODE_DISABLED: {
      return Object.assign({}, nodeDisabled, {
        [action.nodeID]: action.isDisabled
      });
    }

    case TOGGLE_NODES_DISABLED: {
      return action.nodeIDs.reduce(
        (disabled, id) =>
          Object.assign({}, disabled, {
            [id]: action.isDisabled
          }),
        nodeDisabled
      );
    }

    default:
      return nodeDisabled;
  }
}
