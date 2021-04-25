// TODO: add and export your own actions
export function setMessages(messages) {
  return {
    type: 'SET_MESSAGES',
    payload: messages
  }
}

export function sendMessage(channel, content) {
  sendMessageApiRequest(channel, content);
  return {
    type: 'SEND_MESSAGE',
    payload: { content: content, key: content }
  }
}

const sendMessageApiRequest = (channel, content) => {
  const body = { content: content };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(`api/v1/channels/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    body: JSON.stringify(body),
    credentials: "same-origin"
  }).then(r => r.json());
}

export function setChannels(channels){
  return {
    type: 'SET_CHANNELS',
    payload: channels
  }
}

export function createChannel(name){
  const ans = sendChannelApiRequest(name);
  console.log(ans);
  return {
    type: 'CREATE_CHANNEL',
    payload: { name: name }
  }
}

const sendChannelApiRequest = (name) => {
  const body = { name: name };
  const promise = fetch(`api/v1/channels`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return promise;
}
