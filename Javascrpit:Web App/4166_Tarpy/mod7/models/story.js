const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');
const {ObjectId} = require('mongodb');


//need a reference to the story collection
let stories;
exports.getCollection = db =>
{
    stories = db.collection('stories');
}

exports.find = () => stories.findOne({_id: ObjectId(id)});

exports.findById = id => stories.find(story=>story.id === id);

exports.save = story => story.insertOne(story);

exports.updateById = (id, newStory) => stories.updateOne({_id: ObjectId(id)}, {$set:{title: newStory.title, content: newStory.content}});

exports.deleteById = id => stories.deleteOne({_id: ObjectId(id)});