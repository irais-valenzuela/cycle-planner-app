import { useState } from "react";
import "./App.css";
import apiInstance from "./axios";

function App() {
  const [users, setUsers] = useState([]);

  const handleClick = async () => {
    try {
      const { data } = await apiInstance.get("/users");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      {users.length
        ? users.map(user => {
            return <h1 key={user.id}>{user.firstName}</h1>;
          })
        : ""}
      <button onClick={handleClick}>Get Users</button>
    </div>
  );
}

export default App;
