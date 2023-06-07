const {DateTime} = require('luxon');
const stories = [
    {
        id: '1', 
        title: 'My Life at Charlotte',
        content: 'My life at Charlotte is great.  Studying computer science and making lots of frineds.  Would recommend anyone studying computer science to come here.',
        author: 'Liam Tarpy',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '2',
        title: 'Learning NBAD',
        content: 'Learning this has been very fun.  I cannot wait to show my skills to any future employeer and work with this in the future',
        author: 'Liam Tarpy',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {
        id: '3',
        title: 'My Spring Break',
        content: 'During my spring break, hoping to see a Charlotte FC game and go to a concert with a few friends.',
        author: 'Liam Tarpy',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    }
];

//console.log(stories[1]);

exports.find = () => stories;

exports.findBYId = function(id)
{
    return stories.find(story => story.id === id);
};