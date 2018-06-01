https://segmentfault.com/a/1190000011117061
https://github.com/mcxiaoke/mqtt/blob/master/mqtt/01-Introduction.md

MQTT（Message Queuing Telemetry Transport，消息队列遥测传输协议）

MQTT是轻量级基于代理的发布/订阅的消息传输协议
代理服务器、发布者和订阅者
是一种基于发布/订阅（publish/subscribe）模式的“轻量级”通讯协议，该协议构建于TCP/IP协议上


发布者（Publish）、代理（Broker）（服务器）、订阅者（Subscribe）

订阅（Subscription）
会话（Session）
主题名（Topic Name）
主题筛选器（Topic Filter）:在订阅表达式中使用，表示订阅所匹配到的多个主题。
负载（Payload）

MQTT传输的消息分为：主题（Topic）和负载（payload）两部分


Connect，等待与服务器建立连接
Disconnect，等待MQTT客户端完成所做的工作，并与服务器断开TCP/IP会话
Subscribe，等待完成订阅
UnSubscribe，等待服务器取消客户端的一个或多个topics订阅
Publish，MQTT客户端发送消息请求，发送完成后返回应用程序线程


Topic:
Subcribe
Message:
Payload:
QoS: 0 ， 1， 2去重（四次包交互）
QoS == 1 时，虽然是PUBLISH有序的，但是可能会重复。例如，发布者按顺序 1,2,3,4 发送消息，订阅者收到的顺序可能是 1,2,3,2,3,4。 
QoS == 1 时，如果限制 传输窗口 (in-flight window) ==1，即同一时刻只有一个包在传输，就可以保证乱序。例如，订阅者收到的顺序可能是 1,2,3,3,4，而不是 1,2,3,2,3,4 


mqtt
web端
mqtt基于websocket
mqtt库选择:
1.(Eclipse Paho Client)[https://github.com/eclipse/paho.mqtt.javascript]
2.(mqtt.js)[https://github.com/mqttjs/MQTT.js]
3.mosca (http://www.mosca.io/docs/)



我们的协议:其中type为1才有基础头
version + type + 基础头(rid=xxxx&time=1555123).length + 扩展头({service: '/api/getname', topic: '/wxj'}).length + 扩展头({service: '/api/getname', topic: '/wxj'}) + 数据主体body({})

例子:
1字节=8位二进制
以下JSON格式如何转换成mqtt的二进制
JSON数据：{
    version: 1, // 1字节
    type: 1, // 1字节
    rid: 123456789, 
    time: 1527228306099, 
    head: { // 扩展头
        service: '',
        topic: '',
    },
    body: { // 消息主体
        code: 1001,
        msg: {},
        data: {},
    }
}

二进制：
1字节:1 (version)
1字节:1 (type)
2字节:rid和time的长度值的二进制
4字节:扩展头长度值的二进制(a字节)
8字节:rid的二进制
8字节:time的二进制
a字节:head的json二进制字符串
最后所有数据:body的json二进制字符串




参考1[https://blog.csdn.net/u011216417/article/details/69666752]

参考2[https://blog.csdn.net/JIESA/article/details/50635222]

参考3[https://itbilu.com/other/relate/4kHBsx_Pg.html]