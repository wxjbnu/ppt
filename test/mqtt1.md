MQTT数据包由：固定头（Fixed header）、 可变头（Variable header）、 消息体（payload）


https://github.com/eclipse/paho.mqtt.javascript
https://github.com/mqttjs/MQTT.js

客户端文档[http://emqtt.com/clients#javascripts]

参考[https://itbilu.com/nodejs/npm/41wDnJoDg.html]
mqtt.js
mqtt.connect()
mqtt.Client()
mqtt.Client#publish()
mqtt.Client#subscribe()
mqtt.Client#unsubscribe()
mqtt.Client#end()
mqtt.Client#handleMessage()
mqtt.Store()
mqtt.Store#put()
mqtt.Store#del()
mqtt.Store#createStream()
mqtt.Store#close()


```javascript

var mqtt    = require('mqtt')
var client  = mqtt.connec('mqtt://test.mosquitto.org')
 
client.on('connect', function () {
  //订阅presence主题
  client.subscribe('presence')
  //向presence主题发布消息
  client.publish('presence', 'Hello mqtt')
})
 
client.on('message', function (topic, message) {
  //收到的消息是一个Buffer
  console.log(message.toString())
  client.end()
})

```