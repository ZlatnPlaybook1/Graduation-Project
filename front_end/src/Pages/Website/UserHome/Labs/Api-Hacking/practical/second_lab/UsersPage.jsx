import usersData from "./users.json";
import React, { useState, useEffect } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setUsers(usersData);
  }, []);

  return <pre>{users ? JSON.stringify(users, null, 2) : "Loading..."}</pre>;
};

export default UsersPage;
