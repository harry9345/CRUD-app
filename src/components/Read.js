import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

export default function Read() {
  const [ApiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://6108eefcd71b670017639644.mockapi.io/fakeData")
      .then((response) => {
        setApiData(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, check } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Check Box", check);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6108eefcd71b670017639644.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {ApiData.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.check ? "Checked" : "Unchecked"}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
