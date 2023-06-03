let mongo = require('mongoose');
const conn=mongo.connect('mongodb+srv://deepalimore609:5882apazRqrjvVCk@cluster0.rsmpbya.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true

})
.then(()=>{console.log("Mongo db connected")})
.catch((error)=>{console.log(error)})

module.exports = conn
