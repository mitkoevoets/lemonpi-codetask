export function getPayload(action: any, key: string) {
  if (action.payload && action.payload.hasOwnProperty(key)) {
    return action.payload[key];
  }

  return undefined;
}

export function setPayload(state: any, action: any, key: string) {
  state[key] = getPayload(action, key);

  return state;
}
