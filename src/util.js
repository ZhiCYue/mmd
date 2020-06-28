/**
 * 遍历执行数组中的每个元素
 * @param {*} ary 
 * @param {*} func 
 */
export function each(ary, func) {
    if (ary) {
        var i;
        for (i = 0; i < ary.length; i += 1) {
            if (ary[i] && func(ary[i], i, ary)) {
                break;
            }
        }
    }
}

/**
 * 遍历执行对象中的每个属性（不包含继承链属性）
 * @param {*} obj 
 * @param {*} func 
 */
export function eachProp(obj, func) {
    var prop;
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (func(obj[prop], prop)) {
                break;
            }
        }
    }
}

/**
 * 判断是不是方法
 * @param {*} target 
 */
export function isFunction(target){
    return Object.prototype.toString.call(target) === '[object Function]';
}
  
/**
 * 判断是不是数组
 * @param {*} target 
 */
export function isArray(target){
    return Object.prototype.toString.call(target) === '[object Array]';
}
  