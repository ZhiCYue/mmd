import http from '../http';
import {
    BaseModel,
    SimpleModel
} from './model';

const cb = {
    models: {}
};

const register = function (modelType, _class) {
    cb.models[modelType] = _class;
}

register('BaseModel', BaseModel);
register('SimpleModel', SimpleModel);

cb.runCommandLine = function(params, callback) {
    http(params).then(result => {
        if (result.code !== 200) throw new Error('请求出错');
        callback({}, result.view);
    })
}

cb.register = register;
export default cb;
