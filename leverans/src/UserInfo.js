import React from "react";

const UserInfo = ({
    name,
    lastName,
    id,
    deleteUser,
    updateUser,
    setUpdateName,
    setUpdateLastName,
    updateName,
    updateLastName
}) => {
  return (
    <div className="user">

       <h3>{name} {lastName}</h3>
        <button onClick={() => deleteUser(id)}>Delete</button>

      
      <div className="edit">
        <input
          onChange={(event) => setUpdateName(event.target.value)
          }
          type="text" className="edit" placeholder="Name"
        />
        <input

          onChange={(event) => setUpdateLastName(event.target.value)}
          type="text" className="edit" placeholder="Last Name"
        />
        <button onClick={()=> updateUser(id)}>Edit</button>
        <button onClick={() => deleteUser(id)}>Delete</button>
      </div>
    </div>
  );
};
export default UserInfo;
