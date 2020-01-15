export default function list(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return [...state, action.user];
    case 'ADD_USERS_LIST':
      return [...action.data];
    default:
      return state;
  }
}
