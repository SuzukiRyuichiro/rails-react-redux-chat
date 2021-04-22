json.array! @messages do |message|
  json.extract! message, :id, :content
end
