
class ArduinoChannel < ApplicationCable::Channel
  require "socket"
  require 'json'

  @hostname = "localhost"
  @port = 18207

  def subscribed
    stream_from 'arduino'
  end

  def unsubcribed
    
  end

  def self.send_data(l1,l2, mode)
    # ArduinoChannel.broadcast_to(:arduino, humidity: humidity, temperature: temperature, gas: gas)
    ActionCable.server.broadcast "arduino", { light_1: l1, light_2: l2, mode: mode }
  end

  def change_mode(data)
    
    s = TCPSocket.open("localhost", 18207)
    if data["mode"] == "auto"
      s.puts "auto"
    else
      s.puts "control"
    end
    s.close
  end
#code tu webs gui toi icp server
  def change_light_1(data)
    s = TCPSocket.open("localhost", 18207)
    if data["color"] == "r"
      s.puts "red1"
    elsif data["color"] == "g"
      s.puts "green1"
    else
      s.puts "yellow1"
    end

    s.close
  end

  def change_light_2(data)
    s = TCPSocket.open("localhost", 18207)
    if data["color"] == "r"
      s.puts "red2"
    elsif data["color"] == "g"
      s.puts "green2"
    else
      s.puts "yellow2"
    end
    s.close
  end

  def set_red_light_1(data)
     s = TCPSocket.open("localhost", 18207)
    time = data["time"]
    d = "redtime=<<" + time.to_s + ">>"
    s.puts d
    s.close
  end

  def set_green_light_1(data)
     s = TCPSocket.open("localhost", 18207)
    time = data["time"]
    d = "greentime=<<" + time.to_s + ">>"
    s.puts d
    s.close
  end
end