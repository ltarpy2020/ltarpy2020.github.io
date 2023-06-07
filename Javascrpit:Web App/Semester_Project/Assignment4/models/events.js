//Needed imported by refernce to the video
const { DateTime } = require('luxon');
const {v4: uuidv4} = require('uuid');
const {ObjectId} = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Building the Schema here
const eventSchema = new Schema(
    {
        category: {type: String, required: [true, 'category is required']},
        title: {type: String, required: [true, 'title is required']},
        description: {type: String, required: [true, 'description is required'], minLength: [10, 'the description needs to be greater than 10 chars']},
        location: {type: String, required: [true, 'location is required']},
        host: {type: String, required: [true, 'host is required']},
        startDate: {type: Date, required: [true, 'startDate is requied']},
        endDate: {type: Date, required: [true, 'endDate is required']},
        img: {type: String}
    },
    {timestamps: true}
);

module.exports = mongoose.model('Event', eventSchema);


/*  let events;
exports.getCollection = db =>
{
    events = db.collection('events');
} */

exports.find = () =>  events.find().toArray();

exports.findById = id => events.findOne({_id: ObjectId(id)});

//Saves when event was created and displays time for when it was created
exports.save = function (event)
{
    event.id = uuidv4();
    event.startDate = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    event.endDate = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    event.push(event);
};

exports.updateById = function(id, newEvent)
{
    let event = event.find(event => event.id === id);
    if (event)
    {
        //Had to add more newEvent categories than video since more was required for the project
        event.category = newEvent.category;
        event.title = newEvent.title;
        event.location = newEvent.location;
        event.host = newEvent.host;
        event.description = newEvent.description;
        event.startDate = newEvent.startDate
        event.endDate = newEvent.endDate;
        event.img = newEvent.img;
        return true;
    }
    else
    {
        return false;
    }
};

exports.deleteById = function(id)
{
    //Deletes any event based on the id
    let index = events.findIndex(event => event.id === id);
    if (index !== -1)
    {
        events.splice(index, 1);
        return true;
    }
    else
    {
        return false;
    }
};

//console.log(events[4]);