class ArduinoChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'arduino'
  end

  def unsubcribed
    
  end

  def self.send_data(humidity, temperature, gas)
    # ArduinoChannel.broadcast_to(:arduino, humidity: humidity, temperature: temperature, gas: gas)
    ActionCable.server.broadcast "arduino", { humidity: humidity.to_f, temperature: temperature.to_f, gas: gas.to_f }
  end
end