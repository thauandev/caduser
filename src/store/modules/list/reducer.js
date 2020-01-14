export default function list(state = [], action) {
  console.log(state);
  switch (action.type) {
    case 'ADD_TO_LIST':
      return [...state, action.user];
    default:
      return state;
  }
}
