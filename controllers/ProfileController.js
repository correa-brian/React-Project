var Profile = require('../models/Profile')

module.exports = {

	get: function(params, callback){

		Profile.find(params, function(err, profiles){
			if(err){
				callback(err, null)
				return
			}

			callback(null, profiles)
		})
	},

	getById: function(id, callback){
		
		Profile.findById(id, function(err, profile){
			if(err){
				callback(err, null)
				return
			}

			callback(null, profile)
		})
	},

	post: function(id, callback){
		Profile.create(id, function(err, profile){
			if(err){
				callback(err, null)
				return
			}
			callback(null, profile)

		})

	},

// takes 3 parameters - id: which one, params: what to update, callback

	put: function(id, params, callback){
		Profile.findByIdandUpdate(id, params, {new:true}, function(err, profile){
			if(err){
				callback(err, null)
				return
			}
			callback(null, profile)
		})
	}

}