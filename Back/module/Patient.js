let mongo = require('mongoose');

let patient = mongo.Schema({
        Name:{type:String, require:true},
        Lname:{type:String, require:true},
        Username:{type:String, require:true},
        Password:{type:String, require:true},
        Age:{type:String, require:true},
        Bloodgroup:{type:String, require:true},
        Deasise:{type:String, require:true},
        Doctor:{type:String, require:true},
        Address:{type:String, require:true},
        Mobile:{type:String, require:true}
})

let patientModel = mongo.model('patient', patient);
module.exports= patientModel;