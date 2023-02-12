import "./RegisterModal.css";
import { Form, Button, Modal, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const url = process.env.REACT_APP_API_URL;

function RegisterModal({handleClose, show}) {




  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dni, setDni] = useState("");


    function SaveLocalStorage ({name, lastname,dni}) {
      localStorage.setItem("Usuarios", JSON.stringify({name, lastname,dni}));
      
    }


  //↓Es async ya que hago una llamada al servidor
  async function Register() {
    if (name.length < 3 && lastname.length < 3 && dni.length<8 ) {
      swal({
        title: "Hubo un Error",
        text: "Verifica si completaste todos los campos ",
        icon: "error",
        button: "Aceptar",
      });
    } else {
      
      try {

        const response = await axios.post(`${url}/user`, {name, lastname,dni});
        SaveLocalStorage(response.data);
        
        const successAlert = () => {
          swal({ 
            title: "Registro Exitoso",
            text: "Bienvenido/a !!!",
            icon: "success",
            button: "Aceptar",
          }).then((respuesta) => {
            if (respuesta) {
              window.location.href = "/login";
            }
          });
        };

        successAlert();
      } catch (error) {
        console.error(error);

        const errorAlert = () => {
          swal({
            title: "Error",
            text: "Error de servidor",
            icon: "error",
            button: "Aceptar",
          });
        };

        errorAlert();
      }
    }
  }

  return (
    <div className="container-fluid">
      <Modal show={show} onHide={handleClose}>
        <div>
          <Modal.Header closeButton>
            <Modal.Title>Registrarme como cliente</Modal.Title>
          </Modal.Header>
        </div>
        <h5 className="d-flex justify-content-center mt-3">
          Completá los datos{" "}
        </h5>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="NOMBRE"
                value= {name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="APELLIDO"
                value={lastname}
                onChange= {(e) => setLastname(e.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="DNI"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />

              <Form.Group className="mt-3 p-2">
                <Form.Label htmlFor="disabledSelect">GENERO</Form.Label>
                <Form.Select id="disabledSelect">
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>No Binario</option>
                </Form.Select>

                <Form.Group className="mb-2" controlId="formGridAddress1">
                  <Form.Label className="m-2">Fecha de Nacimiento</Form.Label>
                  <Form.Control type="date" placeholder="" />
                </Form.Group>
              </Form.Group>
            </Form.Group>
          </Form>

          <FloatingLabel controlId="  " label="E-mail" className="mb-2">
            <Form.Control type="Email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Contraseña">
            <Form.Control type="Password" placeholder="Contraseña" />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button variant="primary" onClick={Register}>
            Registrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RegisterModal;
