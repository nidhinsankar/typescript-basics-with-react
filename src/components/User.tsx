import React from "react";
import { UserTYpe } from "../action.types";

const User: React.FC<UserTYpe> = ({ name, login, email, gender, phone }) => {
  return (
    <li style={{ marginTop: "20px" }} key={login.uuid}>
      <h2>
        Name:{name?.first} {name?.last}
      </h2>
      <h2>{email}</h2>
      <p>{phone}</p>
      <p>{gender}</p>
    </li>
  );
};

export default User;
