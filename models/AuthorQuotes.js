var mongoose = require('mongoose');

//Instruction says use only ONE schema
var AuthorSchema = new mongoose.Schema({
    first_last_name: {
        type: String,
        required: true,
        minlength: 3
    },
    quotes:
        [
            {
                quote_text: {type: String, required: true, minlength: 3},
                votes: {type: Number, default: 0}
            }
        ]
    // ,
    // first_name: {
    //     type: String,
    //     required: true
    // },
    // last_name: {
    //     type: String,
    //     required: true
    // },

},{timestamps: true});
//
// var AuthorSchema = new mongoose.Schema({
//     first_last_name: {type: String, required: true, minlength: 3}
// });
//



mongoose.model('Author', AuthorSchema);
var Author = mongoose.model('Author');

//AuthorSchema
// var AuthorSchema = new mongoose.Schema({
//     //attributes
//     first_last: {type: String, required: true, unique: true, },
//     first_name: {type: String, required: true },
//     last_name: {type: String, required: true },
//     quotes: [{type: Schema.Types.ObjectId, ref: 'Quote'}]
//
//
// },{timestamps: true});
//
// //QuoteSchema
// var QuoteSchema = new mongoose.Schema({
//     //attributes
//     _author: {type: Schema.Types.ObjectId, ref: 'Author'},
//     words: {type: String, required: true, minlength: Float32Array },
//     votes: {type: Number, required: true, default: 0 },
//
//
// }, {timestamps: true});


// mongoose.model('Quote', QuoteSchema);
// mongoose.model('Author', AuthorSchema);



// var Quote = mongoose.model('Quote');
// var Author = mongoose.model('Author');