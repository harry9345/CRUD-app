import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

import { useHistory } from "react-router";

export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [check, setCheckbox] = useState();

  let history = useHistory();

  useEffect(() => {
    setId(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Check Box"));
  }, []);

  const updateAPIData = () => {
    console.log(check);
    axios
      .put(`https://6108eefcd71b670017639644.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        check,
      })
      .then(() => {
        history.push("/read");
      });
  };

  return (
    <div>
      <Form className="create-form" id={id}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            value={check}
            onChange={(e) => setCheckbox(!check)}
          />
        </Form.Field>
        <Button onClick={updateAPIData} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
