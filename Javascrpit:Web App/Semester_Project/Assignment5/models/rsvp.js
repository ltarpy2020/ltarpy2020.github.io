const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rsvpSchema = new Schema(
  {
    statusField: {type: String, enum: ['Yes', 'No', 'Maybe'], required: [true, 'Rsvp is required']},
  }
);

let rsvp = this;
rsvp = 'Yes' | 'No' | 'Maybe';

module.exports = mongoose.model('Rsvp', rsvpSchema);