import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import Swal from 'sweetalert2';


export const useCart =()=>{


    const [CartOpen,setCartOpen] = useState(false)

    var url = 'http://localhost:4000/api';

    // Capturamos los inputs del formulario de compra:
    const defectForm = {
        nombre: "",
        email: "",
        telefono: "",
        provincia: "",
        direccion: "",
        cp: "",
        formaPago: "",
        numerotarjeta: "",
        compra:"",
    }
    const [buyForm, setBuyForm] = useState(defectForm);

    function OnChangeForm(e) {
        const { name, value } = e.target;
        const response = { ...buyForm, [name]: value };
        setBuyForm(response);
        console.log(buyForm);
    }

    async function handlePost() {
        try {
            
            if (buyForm === defectForm) {
                Swal
                    .fire({
                        title: "Importante !!",
                        text: "Debes completar todos los campos requeridos",
                        icon: 'warning',
                        //showCancelButton: true,
                        confirmButtonText: "Aceptar",
                        //cancelButtonText: "Cancelar",
                    })

            } else {

                const datosDeCompra = await axios.post(`${url}/cart`, buyForm);
                console.log(datosDeCompra);

                Swal
                    .fire({
                        title: "Listo !!",
                        text: "Tu compra ha sido resgistrada con exito! En las proximas horas nos pondremso en contacto con vos para coordinar la entrega",
                        icon: 'warning',
                        //showCancelButton: true,
                        confirmButtonText: "Aceptar",
                        //cancelButtonText: "Cancelar",
                    })
                    .then(resultado => {
                        if (resultado.value) {
                            // Hicieron click en "Sí"
                            window.location.reload();
                        } else {
                            // Dijeron que no
                        }
                    });

            }
            
        } catch (error) {
            console.error(error);
        }
    }



 
 return {
    CartOpen, 
    setCartOpen,
    buyForm,
    setBuyForm,
    OnChangeForm,
    handlePost

}
 
 }