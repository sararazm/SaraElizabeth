const uuid = require("uuid");

exports.get_all_users = (req, res) => {
    res.send(getAllUsers());
};

exports.post_users = (req, res) => {
  res.send(createUser(req.body), 'User created!');
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
  const id = uuid.v4();
  users.push({id, ...user});
}

const getAllUsers = () => {
  return users
} 

const getUser = (id) => {
  return users.find(user => user.id === id)
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
  users = []
}