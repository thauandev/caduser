export default function list(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return [...state, action.user];
    case 'ADD_USERS_LIST':
      return [...action.payload];
    case 'DELETE_USER_LIST':
      return [...state.filter(item => item.id !== action.payload.id)];
    default:
      return state;
  }
}
