let mongo = require('mongoose');

let Doner = mongo.Schema({
        Name:{type:String, require:true},
        Lname:{type:String, require:true},
        Username:{type:String, require:true},
        userRole:{type:String, require:true},
        Password:{type:String, require:true},
        Age:{type:String, require:true},
        Bloodgroup:{type:String, require:true},
       
        Address:{type:String, require:true},
        Mobile:{type:String, require:true}
})

let DonerModel = mongo.model('Doner', Doner);
module.exports= DonerModel;