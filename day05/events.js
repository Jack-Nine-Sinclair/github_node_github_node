let events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.once('some_event',() => {
    console.log("some_event1 事件触发")
})

let callback = () => {
    console.log("some_event2 事件触发")
}

eventEmitter.on('some_event',callback)

// eventEmitter.removeAllListeners('some_event')

eventEmitter.emit('some_event')

eventEmitter.emit('some_event')