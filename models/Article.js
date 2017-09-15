var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Articleschema = new Schema({
	title: {
		type: String,
		required: true,
		text: true
	},
	link: {
		type: String,
		required: true,
	},
	summary: {
		type: String,
		default: "Summary unavailable."
	},
	img: {
		type: String,
		default: "/assets/images/unavailable.jpg"
	},
	issaved: {
		type: Boolean,
		default: false
	},
	status: {
		type: String,
		default: "Save Article"
	},
	created: {
		type: Date,
		default: Date.now
	},
	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	}
});

var Article  = mongoose.model("Article", Articleschema);
module.exports = Article;