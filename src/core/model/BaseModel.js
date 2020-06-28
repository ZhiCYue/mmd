import EventEmiter from '../event';

class BaseModel extends EventEmiter {
    constructor(data) {
        this.data = data;
        this.setData('name', 'base');
    }

    getData (key) {
        return this.data[key];
    }

    setData (key, value) {
        this.data[key] = value;
    }
}

export default BaseModel;
