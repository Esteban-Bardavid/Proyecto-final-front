import React from "react";
import "./ProductsPage.css";

import ProductsList from "../../components/ProductCard/ProductsList";
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

function ProductsPage() {


  return (
      <div style={{display:'flex', flexDirection:'row', justifyContent:"space-around"}}>
              
              <div style={{padding:'20px', width: '20%'}}>
              <h2>MUJER</h2>    
                <div style={{fontSize:'1rem'}}>
                        <h4>FILTRAR/ORDENAR</h4>
                        <h5>CATEGORIAS</h5>
                    <Form>
                      {['Running', 'Trainning', 'Outdoor', 'Footbal', 'Clasicas', 'Ojotas',].map((cat) => (
                          <div key={`${cat}`} className="mb-3">
                              <Form.Check
                                  id={`${cat}`}
                                  label={`${cat}`}
                              />
                          </div>
                      ))}
                    </Form>
                    <h5>MARCAS</h5>
                    <Form>
                      {['Adidas','Nike','Fila','Reebok'].map((marca) => (

                          <div key={`${marca}`} className="mb-3">
                              <Form.Check
                                  
                                  id={`${marca}`}
                                  label={`${marca}`}
                              />
                          </div>
                      ))}
                    </Form>
                    <h5>PRECIO</h5>
                    <Form>
                      {['OFERTAS','$10.000 a $20.000','$20.000 a $30.000', '$30.000 a $40.000','$50.000 a $60.000'].map((price) => (

                          <div key={`${price}`} className="mb-3">
                              <Form.Check
                                  
                                  id={`${price}`}
                                  label={`${price}`}
                              />
                          </div>
                      ))}
                    </Form>
                </div>

              </div>

              <Row style={{width:'80%', padding:'20px', alignItems:'center'}}>
                  <ProductsList />
              </Row>

      

      </div>
  );
}

export default ProductsPage;
