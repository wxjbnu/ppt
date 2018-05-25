MQTT数据包由：固定头（Fixed header）、 可变头（Variable header）、 消息体（payload）



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