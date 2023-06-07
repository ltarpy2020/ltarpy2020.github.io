 const model = require('../models/user');

exports.index = (req, res, next)=>{
    model.find()
    .then(users=>res.render('/', {users}))
    .catch(err=>next(err));
};

exports.new = (req, res)=>{
    res.render('./userInfo/new');
};

exports.create = (req, res)=>{
    res.redirect('./userInfo/profile');
};

exports.show = (req, res)=>{
    res.render('./userInfo/profile');
};

exports.edit = (req, res)=>{
    res.render('./userInfo/login');
};


exports.delete = (req, res)=>{
    res.redirect('/');
};
