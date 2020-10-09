import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../store/actions";

const initialFormValues = {
  name: "",
  age: "",
  height: "",
};

const SmurfForm = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postSmurf(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formValues.name}
        />
      </label>
      <br />
      <label>
        {" "}
        Age
        <input
          type="text"
          name="age"
          onChange={handleChange}
          value={formValues.age}
        />
      </label>
      <br />
      <label>
        {" "}
        Height
        <input
          type="text"
          name="height"
          onChange={handleChange}
          value={formValues.height}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
};

export default connect(null, { postSmurf })(SmurfForm);
