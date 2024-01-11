import React, { useReducer } from "react";

const FormTodos = () => {
  const initialstate = { name: "", email: "" };
  const reducer = (state, action) => {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "email":
        return { ...state, email: action.payload };
    }
  };
  const [users, dispatch] = useReducer(reducer, initialstate);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) =>
            dispatch({ type: e.target.name, payload: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          name="email"
          id="name"
          onChange={(e) =>
            dispatch({ type: e.target.name, payload: e.target.value })
          }
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormTodos;
