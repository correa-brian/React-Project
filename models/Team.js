var mongoose = require('mongoose')

var TeamSchema = new mongoose.Schema({

	name: {type:String, default: ''},
	city: {type:String, default: ''},
	conference: {type:String, default: ''},

})


module.exports = mongoose.model('TeamSchema', TeamSchema);