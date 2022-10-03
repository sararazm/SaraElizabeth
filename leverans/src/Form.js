import React , { useState, useEffect} from 'react';
import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Recaptcha from "./ReCAPTCHA";
import { get, put, taBort, post } from "./utility/api.js";
import UserInfo from './UserInfo';
import uuid from "react-uuid";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [users, setUser] = useState([]);
  const [updateName, setUpdateName] = useState('')
  const [updateLastName, setUpdateLastName] = useState('')

  const addUser = () => {
    const newUser = {
      id: uuid(),
      name,
      lastName,
    };

    post("/api/users/post", newUser);
    setUser([...users, newUser]);
  };

  useEffect(() => {
    get("/api/users/").then(
      (res) => {return setUser(res)}
    );
  }, [setUser]);

  const deleteUser = (id) => {
    taBort(`/api/users/delete/${id}`).then((res) => {
      get("/api/users/").then((res) => setUser(res));
    });
  }

  const deleteAllUsers = () => {
    taBort("/api/users/delete").then((res) => {
      get("/api/users/").then((res) => setUser(res));
    });;
  };

  const updateUser = (id) => {
    put(`/api/users/update/${id}`, {
      id,
      name: updateName,
      lastName: updateLastName,
    }).then((res) => {
      get("/api/users/").then((res) => setUser(res));
    });
  };

  const schema = yup.object().shape({
    name: yup.string().required("Must have firstname"),
    lastName: yup.string().required("Enter lastname"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="Form">
      <div className="title">Sara and Lizzys list</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(addUser)}>
          <input
            type="text"
            name="Name"
            value={name}
            placeholder="Name..."
            {...register("name")}
            onChange={(event) => setName(event.target.value)}
          />
          <p>{errors.name?.message}</p>
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Lastname..."
            {...register("lastName")}
            onChange={(event) => setLastName(event.target.value)}
          />
          <p>{errors.lastName?.message}</p>
          <Recaptcha />
          <input type="submit" disabled id="login_btn" />
        </form>
      </div>
      <button className="delete" onClick={() => deleteAllUsers()}>Delete all users</button>
      {users.map((users) => {
        return <UserInfo 
        key={users.id}
        id={users.id}
        name={users.name} 
        lastName={users.lastName} 
        deleteUser={deleteUser} 
        deleteAllUsers={deleteAllUsers}
        updateUser={updateUser} 
        setUpdateName={setUpdateName} 
        setUpdateLastName={setUpdateLastName} 
        updateName={updateName}
        updateLastName={updateLastName}
        />
      })}
    </div>
  );
};
export default Form;