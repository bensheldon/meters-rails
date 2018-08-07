class GaugesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "gauges"
  end

  def unsubscribed
    stop_all_streams
  end
end