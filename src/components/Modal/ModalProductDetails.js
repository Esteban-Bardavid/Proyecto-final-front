import React, { useState, useContext } from 'react';
import { Modal, Form, Button, Container, Col, Row } from 'react-bootstrap';
import useProducts from '../../utils/useProducts';
import ProductCard from '../ProductCard/ProductCard';
import './ModalProductDetails.css'


import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../CartProvider/CartProvider";
import { display } from '@mui/system';


function ModalProduct({item}) {
   
 
    const [ShowProduct, setShowProd] = useState(false);
    const closeModal = () => {

        setShowProd(false)};
    const openModal = () =>  setShowProd(true);
   
    
  
    const { addItem } = useContext(CartContext);

    

   


    
    function Talle36() {
        if (item.tseis > 0) {
            document.getElementById("talle").innerHTML = '36'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle37() {
        if (item.tsiete > 0) {
            document.getElementById("talle").innerHTML = '37'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle38() {
        if (item.tocho > 0) {
            document.getElementById("talle").innerHTML = '38'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle39() {
        if (item.tnueve > 0) {
            document.getElementById("talle").innerHTML = '39'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle40() {
        if (item.ccero > 0) {
            document.getElementById("talle").innerHTML = '40'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle41() {
        if (item.cuno > 0) {
            document.getElementById("talle").innerHTML = '41'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle42() {
        if (item.cdos > 0) {
            document.getElementById("talle").innerHTML = '42'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle43() {
        if (item.ctres > 0) {
            document.getElementById("talle").innerHTML = '43'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }

    function sendProduct(id) {
        addItem(id)
        closeModal()
    }



    return (
        <>   
        <i onClick={openModal} ><FaCartPlus /></i>
            <Modal show={ShowProduct} onHide={closeModal}  >
                <Modal.Body>
                    <div className='modal__container'>

                        <div className='img__modal'>
                            <img className="img__1" src={item.imgUrl} alt='' />
                            
                        </div>
                        <div className='box__modal'>
                            <div className='row__box'>
                                <h2>{item.producto}</h2>
                                <span>${item.precio}</span>
                                
                            </div>
                            <p>
                                {item.sex} - {item.categoria}
                            </p>
                            
                            <div className='talles'>
                                <h2>Talles disponibles:</h2>
                                <button onClick={Talle36}>36</button>
                                <button onClick={Talle37}>37</button>
                                <button onClick={Talle38}>38</button>
                                <button onClick={Talle39}>39</button>
                                <button onClick={Talle40}>40</button>
                                <button onClick={Talle41}>41</button>
                                <button onClick={Talle42}>42</button>
                                <div className='d-flex'>
                                        <p className='me-2'>Elegiste Talle:</p> <p className="mt-4" id='talle'></p>
                                </div>
                               

                            </div>
                            <div className='thumb'>
                               { [item.imgUrl, item.imgUrl,item.imgUrl].flatMap((img)=>(
                                <img src={img} alt=""/>
                               ))}
                               </div>
                                
                            
                            <div className='modal__buttons'>
                            <button className='add__tocart' onClick={() => sendProduct(item)}>
                                Agregar al carrito
                            </button>
                            <button className='salir__modal' onClick={closeModal}>
                                Salir
                            </button>
                            </div>
                            
                        </div>

                    </div>
                </Modal.Body>


              
            </Modal>     
        </>
        
    );
}
export default ModalProduct;
