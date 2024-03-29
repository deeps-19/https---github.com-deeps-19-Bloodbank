let mongo = require('mongoose');

let bloodreq = mongo.Schema({
        Uid:{
                type: mongo.Schema.Types.ObjectId,
                ref: 'patient'
            },
        Name:{type:String, require:true},
        Age:{type:String, require:true},
        Reason:{type:String, require:true},
        Bloodgroup:{type:String, require:true},
        Unit:{type:Number, require:true},    
        Status:{type:String, require:true},
})

let bloodreqModel = mongo.model('bloodreq', bloodreq);
module.exports= bloodreqModel;