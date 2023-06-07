//Needed imported by refernce to the video
const { DateTime } = require('luxon');
const {v4: uuidv4} = require('uuid');
// const input_img = document.querySelector("#input_img");
// var uploaded = "";

// input_img.addEventListener("change", function()
// {
//     const reader = new FileReader();
//     reader.addEventListener("load", () =>
//     {
//         uploaded = reader.result;
//         document.querySelector("#display_image").style.backgroundImage = 'url(${uploaded})';
//     });
//     reader.readAsDataURL(this.files[0]);
// })

//An array named events

const ima1 = './public/images/basketball.jpg'
const ima2 = './public/images/study.jpg'
const ima3 = './public/images/TarpyCorp.jpg'
const events = [
    {
        id: '1', 
        category: 'Sports',
        title: 'Football Games',
        description: 'There is a football game on Friday, dont be late',
        location: 'Jerry Richardson Stadium',
        startDate: DateTime.local(2022, 11, 10, 18, 0).toLocaleString(DateTime.DATETIME_SHORT),
        endDate: DateTime.local(2022, 11, 10, 21, 30).toLocaleString(DateTime.DATETIME_SHORT),
        img: ima1
    },
    {
        id: '2',
        category: 'Study',
        title: 'Study for Chem',
        description: 'We are studying for the big chemistry test coming up',
        location: 'Woodward Hall 106',
        startDate: DateTime.local(2022, 11, 12, 11, 0).toLocaleString(DateTime.DATETIME_SHORT),
        endDate: DateTime.local(2022, 11, 12, 14, 0).toLocaleString(DateTime.DATETIME_SHORT),
        img: ima2
    },
    {
        id: '3',
        category: 'Party',
        title: 'Pizza Party',
        description: 'Have a nice study break with pizza, sponsored by Tarpy Corp',
        location: 'Atkins Library',
        startDate: DateTime.local(2022, 12, 3, 17, 0).toLocaleString(DateTime.DATETIME_SHORT),
        endDate: DateTime.local(2022, 12, 3, 20, 15).toLocaleString(DateTime.DATETIME_SHORT),
        img: ima3
    }
];
exports.find = () =>  events;

exports.findById = id => events.find(event => event.id === id);

//Saves when event was created and displays time for when it was created
exports.save = function (event)
{
    event.id = uuidv4();
    event.startDate = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    event.endDate = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    events.push(event);
};

exports.updateById = function(id, newEvent)
{
    let event = events.find(event => event.id === id);
    if (event)
    {
        //Had to add more newEvent categories than video since more was required for the project
        event.category = newEvent.category;
        event.title = newEvent.title;
        event.location = newEvent.location;
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
    //Deletes any story based on the id
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