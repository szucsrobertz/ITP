const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/ITP', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Mongodb connected...")
        });
}