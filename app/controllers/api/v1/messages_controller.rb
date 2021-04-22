class Api::V1::MessagesController < ActionController::Base
  def index
    @channel = Channel.find_by(name: params[:channel_id])
    if @channel
      @messages = @channel.messages
      render json: { channel: @channel, messages: @messages}
    else
      render json: { channel: "not found", messages: []}
    end
  end

  def create
    channel = Channel.find_by(name: params[:channel_id])
    message = channel ? set_message(channel) : set_message(Channel.create(name: params[:channel_id]))
    save_message(message)
  end

  private

  def set_message(channel)
    # expects a instance of a Channel
    Message.new(content: params[:content], author: params[:author], channel: channel)
  end

  def save_message(message)
    # expects an instance of a messge
    if message.save
      render json: { status: 'SUCCESS', message: message }
    else
      render json: { status: 'ERROR', errors: message.errors }
    end
  end
end
