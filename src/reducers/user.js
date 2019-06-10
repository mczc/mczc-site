

export function user(state = initial, action) {
    switch (action.type) {
      case CLEAR_ORDER:
        return initial;
      case UPDATE_ORDER:
        return {
          ...state,
          [action.id]: action.value
        };
      default:
        return state;
    }
  }
  