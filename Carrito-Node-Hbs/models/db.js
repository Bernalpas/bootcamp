const mongoose= require('mongoose');
const MONGO = process.env.MONGO;
require('./order.model');

mongoose.connect(MONGO, {
    useNewUrlParser:true
    }, (err)=>{
        if (!err) {
            console.log('MongoDB connected');
        } else {
            console.log('error: '+ err);
    }
});
