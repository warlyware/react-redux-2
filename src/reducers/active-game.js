export default (state = null, action) => {
  switch(action.type) {
    case 'GAME_SELECTED':
      return action.payload;
  }

  return state;
}