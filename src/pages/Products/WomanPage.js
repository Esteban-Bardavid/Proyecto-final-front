import React, { useState } from "react";
import { useEffect } from "react";
import products from "../../assets/data/ProductsData";
import ProductsList from "../../components/ProductCard/ProductsList";
import {
  Badge,
  Col,
  Container,
  Row,
  
} from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "./WomanPage.css";
import useProducts from '../../utils/useProducts';

import axios from "axios";
import Form from "react-bootstrap/Form";




function WomanPage() {
  const { 
    productos,
    handleFilter,
    Filter,
  
    
} = useProducts();

  

  return (
    <>
      <section>
        <Container>
          
          <Row data={Filter}>
          <h2 style={{ fontSize:"35px", color: "#243763"}}>MUJER  
          
            <span style={{ fontSize:"20px", color: "#243763"}}> [{Filter.length}] </span>
          
          </h2>
          </Row>
          <Row>
            <Col lg='2' md='2' className="filter__widget">
                <Row >
                  <h5>FILTRAR/ORDENAR</h5>
                <Row />
                <Row>
                  <div>
                    <select >
                      <option>Ordenar por:</option>
                      <option value="Nike">Nike</option>
                      <option value="Adidas">Adidas</option>
                      <option value="menor">Mas nuevo a mas viejo</option>
                      <option value="menor">Mas viejo a mas nuevo</option>
                    </select>
                 
                  </div>
                  
                </Row>
                <Row>
                  <div>
                    <h5>CATEGORIAS</h5>
                    <Form>
                      {['Running', 'Trainning', 'Outdoor', 'Footbal', 'Clasicas', 'Ojotas',].map((cat) => (
                        <div key={`${cat}`} className="mb-3">
                          <Form.Check 
                            onChange={handleFilter}
                            value={`${cat}`}
                            id={`${cat}`}
                            label={`${cat}`}
                          />
                        </div>
                      ))}
                    </Form>
                    <h5>MARCAS</h5>
                    <Form > 
                      {['Todas las marcas','Adidas', 'Nike', 'Fila', 'Reebok'].map((marca) => (
                        <div key={`${marca}`} className="mb-3">
                          <Form.Check type="checkbox"
                            onChange={handleFilter}
                            value={`${marca}`}
                            id={`${marca}`}
                            label={`${marca}`}
                          />
                        </div>
                      ))}
                    </Form>
                    <h5>PRECIO</h5>
                    <Form>
                          <select>
                          {['OFERTAS', '$10.000 a $20.000', '$20.000 a $30.000', '$30.000 a $40.000', '$50.000 a $60.000'].map((price) => (
                            <option value={`${price}`}>{price}</option>
                          ))}
                          </select>
                    </Form>
                  </div>
                </Row>
              </Row>

            </Col>
            <Col lg='10' md='10'>
              <Row>
              {Filter.length === 0 ? ( 
                <h2>No hay productos para mostrar </h2>
                ) : (
                <ProductsList data={Filter} /> )}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>



    /*  */




    /* <div style={{display:'flex', flexDirection:'row', justifyContent:"space-around"}}>
             
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

     

     </div>*/
  );
}

export default WomanPage;
