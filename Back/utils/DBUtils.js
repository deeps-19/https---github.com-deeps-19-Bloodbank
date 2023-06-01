let mongo = require('mongoose');
const conn=mongo.connect('mongodb://127.0.0.1:27017/Bloodbank',{
    useNewUrlParser:true,
    useUnifiedTopology:true

})
.then(()=>{console.log("Mongo db connected")})
.catch((error)=>{console.log(error)})

module.exports = conn