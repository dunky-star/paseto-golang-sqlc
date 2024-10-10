import { useState } from "react";
import { data } from "../../Data/Data"; // Importing the data from Data.js

interface User {
  id: number;
  name: string;
}

export const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<User[]>(data); // Initial state set to data

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updateUsers = [...users, newUser];
    setUsers(updateUsers);
    setName("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>

      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>
              <h4>{user.name}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};
