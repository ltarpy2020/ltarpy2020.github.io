const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
{
    name: {type: String, required: [true, 'name of field is required']},
    age: {type: Number, required: [true, 'age is required'], min: 1, max: 120},
    rank: {type: String, required: [true, 'rank is required'], enum: ['private', 'sergent', 'captin', 'major']},
    phone: {type: String, required: [true, 'phone is required'], match: [/\d{3}-\d{3}-\d{4}/, 'phone number is not valid']}
});
const User = mongoose.model('User', userSchema);
const user = new User(
{
    name: "Billy Pilgrim",
    age: 64,
    rank: 'private',
    phone: '980-888-5492'
});

user.validate()
.then(()=>console.log('Doc is valid'))
.catch(err=>console.log(err.message));
console.log(user);