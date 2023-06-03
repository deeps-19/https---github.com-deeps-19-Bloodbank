let mongo = require('mongoose');

let Donate = mongo.Schema({
       
        Bloodgroup:{type:String, require:true},
       
        Unit:{type:Number, require:true},
        Reason:{type:String, require:true},
        Disease:{type:String, require:true},
        Age:{type:Number, require:true},    
})

let DonateModel = mongo.model('Donate', Donate);
module.exports= DonateModel;