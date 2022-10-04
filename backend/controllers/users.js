const uuid = require("uuid");

exports.get_all_users = (req, res) => {
    res.send(getAllUsers());
};

exports.post_users = (req, res) => {
  res.status(200).json(createUser(req.body));
  // res.send(users);
};

exports.get_user = (req, res) => {
    res.send(getUser(req.params.id));
};

exports.put_user = (req, res) => {
    res.send(updateUser(req.params.id, req.body));
};

exports.delete_all_users = (req, res) => {
    res.send(delete_all_users());
};

exports.delete_user = (req, res) => {
  res.send(deleteUser(req.params.id));
};


let users = [];

const createUser = (user) => {
  const newUser = {
    id: uuid.v4(),
    name: user.name,
    lastName: user.lastName
}

  users.push(newUser);
}

const getAllUsers = () => {
  return users
} 

const getUser = (id) => {
  const foundUser = users.find(user => user.id === id)
  return foundUser
}

const updateUser = (id, user) => {
  const index = users.findIndex(user => user.id === id)
  users[index] = user
  return users[index]
}

const deleteUser = (id) => {
  const index = users.findIndex(user => user.id === id)
  return users.splice(index, 1)
}

const delete_all_users = () => {
  return users = [];
}