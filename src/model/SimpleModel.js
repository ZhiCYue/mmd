import BaseModel from './BaseModel';

class SimpleModel extends BaseModel {
    constructor(data) {
        super(data);
        this.setData('name', 'simple')
    }
}

export default SimpleModel;
