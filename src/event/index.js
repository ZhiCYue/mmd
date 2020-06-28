import { eachProp, isArray, isFunction, each } from '../util';

var EventEmitter = {
    events: [],
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
    },
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

/**
 * 将source 对象属性混入到target 中
 */
function mixin(target, source, force, deepStringMixin) {
    if (source) {
        eachProp(source, function (value, prop) {
            if (force || !target.hasOwnProperty(prop)) {
                if (deepStringMixin && typeof value === 'object' && value &&
                    !isArray(value) && !isFunction(value) &&
                    !(value instanceof RegExp)) {

                    if (!target[prop]) {
                        target[prop] = {};
                    }
                    mixin(target[prop], value, force, deepStringMixin);
                } else {
                    target[prop] = value;
                }
            }
        });
    }
    return target;
}


export function registe(target) {
    if (target.events || target.on || target.emit) throw new Error('target already has the mixin properties.');
    else {
        mixin(target, EventEmitter)
    }
}
