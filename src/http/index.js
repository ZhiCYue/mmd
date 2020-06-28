// 模拟http 请求
const meta = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                code: 200,
                view: {
                    name: 'test',
                    containers: [
                        {
                            itemName: 'input',
                            controlType: 'input',
                            value: 23
                        },
                        {
                            itemName: 'button',
                            controlType: 'button',
                            title: '内容查看'
                        }
                    ]
                },
                vm: `cb.registe("Demo_VM", function(modelType){
                    var model = function(data) {
                        cb.models.BaseModel.call(this, data);
                        this.init();
                    }
                    model.prototype = cb.models.BaseModel.prototype;
                    model.prototype.modelType = modelType;

                    model.prototype.init = function() {
                        var input = new cb.models.SimpleModel({
                            itemName: 'input',
                            controlType: 'input',
                            value: 23
                        })

                        var text = new cb.models.SimpleModel({
                            itemName: 'text',
                            controlType: 'text',
                            title: '内容查看'
                        })

                        this.setData('input', input);
                        this.setData('text', text);
                    }
                }`
            })
        }, 3000);
    });
};

export default meta;
