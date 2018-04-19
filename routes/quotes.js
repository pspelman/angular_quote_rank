var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Author = mongoose.model('Author');
// var Quote = mongoose.model('Quote');
// var Author = mongoose.model('Author');

// mongoose.Promise = global.Promise;


router.get('/', function (req, res) {
    console.log(`reached the quotes router`,);

    console.log(`reached the quotes.js router`,);

    res.json({'message': 'You made it...congrats'});
});


// Each academic sub document will have an _id after you save. There are two ways you can do it.
// If you pass the id of the author and id of the academic sub-doc id in the url or request body,
// then you can update like this:

//TODO: router.get('/', function(req, res){}
//get all authors



//TODO: router.post('/', function(req, res){}

//TODO: router.put('/', function(req, res){}

//TODO: router.delete('/', function(req, res){}





//FIXME: Update quotes of selected author
router.put('/add_quote', function (req, res) {
    console.log(`got request to update author's quotes`,);
    let author_id = req.body.id;


    //TODO: find the author

    //TODO: if the author exists, find the quote and update it
    // updateAuthor
    Author.findById(authorId).then(author => {
        let academic = author.academic.id(academicId);
        academic.qualification = 'something';
        return author.save();
    });

});


//todo: Add a VOTES function to add or subtract votes from a quote
//todo: get the selected author
//todo: get the quote from the selected author
//todo: update that quote's votes

// If you only pass the id of the academic sub-doc, then you can do it like this:

function update_by_quote_sub_id(){
    Author.findOne({'quote._id': quoteId}).then(author => {
        let quote = author.quote.id(quoteId);
        quote.votes = 'something';
        return author.save();
    });

}

// Note that sub document array return from mongoose are mongoose
// array instead of the native array data type. So you can manipulate them using .id .push .pop .remove method
// http://mongoosejs.com/docs/subdocs.html






router.all("*", (req,res,next) => {
    console.log(`reached wildcard route...need to redirect to Angular templates`,);
    res.sendFile(path.resolve("./public/dist/index.html"));
});




//create one post on load
var createSampleAuthor = function () {
    console.log(`trying to make a sample Author`,);
    var AuthorInstance = new Author();
    AuthorInstance.first_last_name = 'Bilbo Baggins';

    AuthorInstance.save(function (err) {
        if (err) {
            // console.log(`there was an error saving to db`, err);
            console.log(`there was an error saving to db`, err );
        } else {
            console.log(`successfully saved!`);
        }
    });
};
// createSampleAuthor();


module.exports = router;
