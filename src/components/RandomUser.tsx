import React, { useEffect, useState } from "react";
import { randomApi } from "../costants";
import User from "./User";
import { UserTYpe } from "../action.types";

const RandomUser = () => {
  const [users, setUsers] = useState<UserTYpe[]>([]);
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(randomApi);
    const data = await res.json();

    setUsers(data.results);
    setIsLoading(false);
    console.log(data);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchData();
  };

  const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  console.log("username =>", username);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Random User</h2>
      <input
        type="text"
        name="user-name"
        id="user-name"
        onChange={handleEvent}
      />
      <button onClick={handleClick}>Fetch users</button>
      <p>{isLoading && "Loading .........."}</p>
      <ul>
        {users?.map((user) => (
          <User
            key={user?.login?.uuid}
            name={user?.name}
            email={user?.email}
            gender={user?.gender}
            login={user?.login}
            phone={user?.phone}
          />
        ))}
      </ul>
    </div>
  );
};

export default RandomUser;
