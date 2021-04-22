export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case 'SET_CHANNELS':
      return action.payload;
    case 'CREATE_CHANNEL':
      state.push(action.payload);
      return state;
    default:
      return state;
  }
}
