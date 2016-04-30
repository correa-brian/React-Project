var Team = require('../models/Team')

module.exports = {

	get: function(params, callback){
		Team.find(params, function(err, teams){
			if(err){
				callback(err, null)
				return
			}

			callback(null, teams)
		})
	},

	getById: function(id, callback){
	
		Team.findById(id, function(err, team){
			if(err){
				callback(err, null)
				return
			}

			callback(null, team)
		})
	},

	post: function(id, callback){
		Team.create(id, function(err, team){
			if(err){
				callback(err, null)
				return
			}
			callback(null, team)

		})

	},
	put: function(id, params, callback){
		Team.findByIdandUpdate(id, params, {new:true}, function(err, team){
			if(err){
				callback(err, null)
				return
			}
			callback(null, team)
		})
	}

}