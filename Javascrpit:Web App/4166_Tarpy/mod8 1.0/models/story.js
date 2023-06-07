const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema(
    {
        title: {type: String, required: [true, 'title is required']},
        author: {type: String, required: [true, 'author is required']},
        content: {type: String, required: [true, 'content is required'], minLength: [10, 'the content needs to be greater than 10 chars']}
    },
    {timestamps: true}
);

//collection name in the database
module.exports = mongoose.model('Story', storySchema);

// let story = new Story(
//     {
//         title: 'test',
//         author: 'Liam',
//         content: 'This is a test story for mod 8',
//     }
// );

// story.validate()
// .then( ()=>
//     {
//         console.log('validated sucessfully')
//     }
// )
// .catch(err=>console.log(err.message));

// console.log(story);