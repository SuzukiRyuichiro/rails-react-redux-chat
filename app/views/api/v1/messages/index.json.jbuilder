json.channel @channel, :id, :name, :created_at
json.messages do
  json.array! @messages do |message|
    json.id message.id
    json.content message.content
    json.author message.user, :id, :username
  end
end
