const { default: mongoose } = require("mongoose");
const { DateTIme } = require('luxon');
const { DateTime } = require("luxon");

const Schema = mongoose.Schema

var AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    last_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
})

//create virtual fullname
AuthorSchema.virtual('name').get(function () { 
    return this.first_name && this.last_name ? this.last_name + ', ' + this.first_name : '';
})

//create virtual for lifespan
AuthorSchema.virtual('lifespan').get(function () {
    var lifetime_string = this.date_of_birth ? this.date_of_birth.getYear().toString() : '';
    lifetime_string = this.date_of_death ? ' - ' + this.date_of_death.getYear() : lifetime_string;
    return lifetime_string;
})

//create virtual for url
AuthorSchema.virtual('url').get(function () { return '/catalog/author/' + this._id });

AuthorSchema.virtual('date_of_birth_formatted')
.get(function () { 
    return this.date_of_birth ? 
        DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';
}) 

AuthorSchema.virtual('date_of_death_formatted')
.get(function () { 
    return this.date_of_death ? 
        DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED) : '';
}) 

//Export model

module.exports = mongoose.model('Author', AuthorSchema);