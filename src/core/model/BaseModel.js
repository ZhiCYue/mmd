class BaseModel {
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
