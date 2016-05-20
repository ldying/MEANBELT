var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
	name        :{ type: String, min: 1, required: true},
	created_at  :{ type: Date, default: Date.now },
	polls      :[{ type: mongoose.Schema.Types.Mixed, ref: "Polls" }]
})


var pollSchema = mongoose.Schema({
	title        :{ type: String, min: 8, required: true},
	username     :{ type: String, required: true},
	user_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "Users" },

	opt1	    :{ text: { type: String, min: 3, required: true}, 
					score: { type: Number, default: 0},
					optid: { type: Number, default: 1}
				},

	opt2      	:{ text: { type: String, min: 3, required: true}, 
					score: { type: Number, default: 0},
					optid: { type: Number, default: 2}
				},	

	opt3 		:{ text: { type: String, min: 3, required: true}, 
					score: { type: Number, default: 0},
					optid: { type: Number, default: 3}
				},

	opt4        :{ text: { type: String, min: 3, required: true}, 
					score: { type: Number, default: 0},
					optid: { type: Number, default: 4}
				},

	created_at  :{ type: Date, default: Date.now }
}) 


mongoose.model("Users", userSchema);
mongoose.model("Polls", pollSchema);