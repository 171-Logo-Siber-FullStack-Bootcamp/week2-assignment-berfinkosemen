const users = require("../data/users.json");

getAllUsers = () =>{
    return users;
};

getUsersById = (userId) =>{
    return users.filter(x=>x.id == userId);
};

module.exports = { getAllUsers, getUsersById };