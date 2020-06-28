import { each } from '../../util';

class EventEmitter {
    constructor(props) {
        this.events = [];
    }
    /**
     * 绑定事件
     * @param {*} name 
     * @param {*} cb 
     */
    on(name, cb) {
        var cbs = this.events[name];
        if (!cbs) {
            cbs = this.events[name] = [];
        }
        cbs.push(cb);
    }
    /**
     * 触发事件
     * @param {*} name 
     * @param {*} evt 
     */
    emit(name, evt) {
        each(this.events[name], function (cb) {
            cb(evt);
        });
        if (name === 'error') {
            delete this.events[name];
        }
    }
}

export default EventEmitter;
