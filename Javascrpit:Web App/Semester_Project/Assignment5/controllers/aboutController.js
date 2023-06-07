//This is the controller for the about and contact page
exports.about = (req, res) =>
{
    res.render('../views/about');
};
exports.contact = (req, res) =>
{
    res.render('../views/contact');
};