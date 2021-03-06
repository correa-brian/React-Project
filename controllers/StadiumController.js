var Stadium = require('../models/Stadium')

module.exports = {

	get: function(params, callback){
		Stadium.find(params, function(err, stadiums){
			if(err){
				callback(err, null)
				return
			}

			callback(null, stadiums)
		})
	},

	getById: function(id, callback){
	
		Stadium.findById(id, function(err, stadium){
			if(err){
				callback(err, null)
				return
			}

			callback(null, stadium)
		})
	},

	post: function(id, callback){
		Stadium.create(id, function(err, stadium){
			if(err){
				callback(err, null)
				return
			}
			callback(null, stadium)

		})

	},
	put: function(id, params, callback){
		Stadium.findByIdandUpdate(id, params, {new:true}, function(err, stadium){
			if(err){
				callback(err, null)
				return
			}
			callback(null, stadium)
		})
	}

}