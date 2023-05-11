// child ref component for forward ref component

import { forwardRef, useState } from "react";

const CRef = forwardRef((props, ref) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${name}`);
    setName("");
  };

  return (
    <>
      <h4>CRef</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>&nbsp;
        <input
          ref={ref}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="-- enter your name here --"
        />
        &nbsp;
        <button type="submit">submit</button>
      </form>
    </>
  );
});

export default CRef;
