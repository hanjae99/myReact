import React from "react";

const User = ({ user, onDelete, onToggle }) => {
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => {
          onToggle(user.id);
        }}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onDelete(user.id)}>삭제</button>
    </div>
  );
};
const UserList = ({ users, onDelete, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          onDelete={onDelete}
          key={user.id}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default UserList;
