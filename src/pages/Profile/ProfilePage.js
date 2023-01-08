import "./ProfilePage.css";
import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ProfilePage() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token") ?? "";
  const headers = { "x-auth-token": token };

  useEffect(() => {
    GetUsers();
  }, []);

  async function GetUsers() {
    try {
      const { data } = await axios.get("http://localhost:4000/api/auth", { headers });
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  var url = "http://localhost:4000/api";
  //use state para los updates

  const [update, setUpdate] = useState({});

  //OnChange -- > Trae los datos escritos en los Inputs
  function OnChange(e) {
    const { name, value } = e.target;
    const response = { ...update, [name]: value };
    setUpdate(response);
    console.log(response);
  }

  //function PUT
  async function PutMethod() {
    try {
      const response = await axios.put(`${url}/user/${user._id}`, update, {
        headers,
      });
      console.log(response);
    } catch (error) {
      console.log("error");
    }
  }
  function singOut() {
    const token = localStorage.getItem("token");
    if (token == null || token == undefined) {
      window.location.href = "/login";
    }
  }

  singOut()

  return (
    <div>
      
    </div>
  );
}

export default ProfilePage;
