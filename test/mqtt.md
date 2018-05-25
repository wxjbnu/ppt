https://segmentfault.com/a/1190000011117061




mqtt
web端
mqtt基于websocket
mqtt库选择:1.Eclipse Paho Client 2.mqtt.js


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
