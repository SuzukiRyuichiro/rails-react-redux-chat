// TODO: add and export your own actions
export function setMessages(messages) {
  return {
    type: 'SET_MESSAGES',
    payload: messages
  }
}

export function sendMessage(channel, author, content) {
  sendMessageApiRequest(channel, author, content);
  return {
    type: 'SEND_MESSAGE',
    payload: { author: author, content: content, key: content }
  }
}

const sendMessageApiRequest = (channel, author, content) => {
  const body = { author: author, content: content };
  const promise = fetch(`https://scooter-messages.herokuapp.com/api/v1/channels/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
}

export function setChannels(channels){
  return {
    type: 'SET_CHANNELS',
    payload: channels
  }
}

export function createChannel(name){
  sendChannelApiRequest(name)
  return {
    type: 'CREATE_CHANNEL',
    payload: { name: name }
  }
}

const sendChannelApiRequest = (name) => {
  const body = { name: name };
  const promise = fetch(`https://scooter-messages.herokuapp.com/api/v1/channels`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
}
