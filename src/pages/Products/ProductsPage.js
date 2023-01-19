import React,{useState} from "react";
import { useEffect} from "react";
import products from "../../assets/data/ProductsData";
import ProductsList from "../../components/ProductCard/ProductsList";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

import "./ProductsPage.css";

import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



function ProductsPage() {

  const [data, setData] = useState(products)

 /* const handleFilter = e=>{
    const filterValue = e.target.value
    if(filterValue ==='Mujer'){
      const filteredProducts = products.filter(item=> item.genero ==='Mujer')
      setProductsData(filteredProducts);
    }
  }*/

  useEffect(()=>{
    const womanProducts = products.filter(
      (item)=> item.genero === 'Mujer'
    );

    setData(womanProducts)
  })



  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='3' md='3'>
            <div className="filter__widget">
              
              <select>
                <option>Filtrar por categoria</option>
                <option value="football">Football</option>
                <option value="running">Running</option>
                <option value="urbanas">Urbanas</option>
                <option value="clasicas">Clasicas</option>
              </select>
              <select>
                <option /* onChange={handleFilter}*/>Filtrar por Marcas</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Reebok">Reebok</option>
                <option value="Fila">Fila</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='3'>
            <div className="filter__widget">
              <select>
                <option>Ordenar por</option>
                <option value="mayor">Mayor precio</option>
                <option value="menor">Menor precio</option>
              </select>
              
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="search__box">
              <input type="text" placeholder="Search....." />
              <span><i class="ri-search-line"></i></span>
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
         
            <ProductsList data ={data} />
          
        </Row>
      </Container>
    </section>
    </>


    
/* {productsData.length === 0 ? ( 
            <h1>No hay productos para mostrar </h1>
            ) : ( */
    



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

export default ProductsPage;
