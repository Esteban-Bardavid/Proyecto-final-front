import axios from 'axios';
import { useState, useEffect } from 'react';
//import Swal from 'sweetalert2';


function UseAdminShopping () {

    var url = 'http://localhost:4000/api'


    // Funcion para mostrar productos en tabla:
    const [shopping, setShopping] = useState([]);

    useEffect(() => {
        GetShopping()
    }, []);

    async function GetShopping() {
        let getShopping = await axios.get(`${url}/adminShopping`);
        setShopping(getShopping.data);
    }


    // Funcion para Eliminar productos en tabla:
//     async function DeleteUser(id) {
//         let admin = user.find(user => user.email === "esteban@gmail.com")
//         if ( id !== admin._id) {
//         let deleteUser= await axios.delete(`${url}/user/${id}`)
//         window.location.reload();
//     } else {
//         Swal
//         .fire({
//             title: "Este Usuario No se puede Eliminar !!",
//             icon: 'warning',
//             //showCancelButton: true,
//             confirmButtonText: "Aceptar",
//             //cancelButtonText: "Cancelar",
//         })
//     }
// }


    // function consultAndDeleteUser (id) {
    //     Swal
    //     .fire({
    //         title: "Eliminar Usuario !!",
    //         text: "Seguro desea eliminar a este Usuario?",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonText: "Aceptar",
    //         cancelButtonText: "Cancelar",
    //     })
    //     .then(resultado => {
    //         if (resultado.value) {
    //             // Hicieron click en "Sí"
    //             DeleteUser (id);
    //         } else {
    //             // Dijeron que no
    //         }
    //     });
    // }



    return ({
        shopping,
        url,
        //consultAndDeleteUser,
    })
}

export default UseAdminShopping;