
const fs = require('fs');
const path = require('path')
module.exports=class Product {
    constructor(t) {
        this.title = t;

    }

    save() {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, filecontent) => {
            console.log(err)
            let products = []
            if (!err) {
                products = JSON.parse(filecontent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }
}