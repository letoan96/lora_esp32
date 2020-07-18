
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
      s.puts "aaaaaaaaaa"
    else
      s.puts "cccccccccc"
    end
    s.close
  end

  def change_light_1(data)
    s = TCPSocket.open("localhost", 18207)
    if data["color"] == "r"
      s.puts "mmmm"
    elsif data["color"] == "g"
      s.puts "bbbb"
    else
      s.puts "xxxx"
    end

    s.close
  end

  def change_light_2(data)
    s = TCPSocket.open("localhost", 18207)
    if data["color"] == "r"
      s.puts "iiii"
    elsif data["color"] == "g"
      s.puts "kkkk"
    else
      s.puts "pppp"
    end
    s.close
  end

  def set_red_light_1(data)
     s = TCPSocket.open("localhost", 18207)
    time = data["time"]
    code = time.to_i * 1111111111
    d = "jjjjjjjjjj" + code.to_s
    s.puts d
    s.close
  end

  def set_green_light_1(data)
     s = TCPSocket.open("localhost", 18207)
    time = data["time"]
    code = time.to_i * 1111111111
    d = "ddddddddddd" + code.to_s
    s.puts d
    s.close
  end
end