export default (state = null, action) => {
  switch(action.type) {
    case 'GAME-SELECTED':
      return action.payload;
  }

  return state;
}