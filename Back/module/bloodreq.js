let mongo = require('mongoose');

let bloodreq = mongo.Schema({
        Name:{type:String, require:true},
       
        Age:{type:String, require:true},
        Reason:{type:String, require:true},
        Bloodgroup:{type:String, require:true},
        Unit:{type:Number, require:true},    
})

let bloodreqModel = mongo.model('bloodreq', bloodreq);
module.exports= bloodreqModel;