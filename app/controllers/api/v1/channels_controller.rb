class Api::V1::ChannelsController < ActionController::Base
  before_action :authenticate_user!
  protect_from_forgery with: :null_session

  def index
    @channels = Channel.all
    render json: {channels: @channels}
  end

  def create
    @channel = Channel.new(name: params[:name])
    if @channel.save
      render json: { status: 'SUCCESS', channel: @channel}
    else
      render json: { status: 'ERROR', errors: @channel.errors }
    end
  end
end
