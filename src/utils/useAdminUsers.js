import axios from 'axios';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';


function UseAdminUsers() {

    var url = 'https://backendproject-4ds1.onrender.com/api'


    const [user, setUser] = useState([]);

    useEffect(() => {
        GetUser()
    }, []);

    async function GetUser() {
        let getUser = await axios.get(`${url}/user`);
        setUser(getUser.data);
    }


    async function DeleteUser(id) {
        let admin = user.find(user => user.email === "esteban@gmail.com")
        if ( id !== admin._id) {
        let deleteUser= await axios.delete(`${url}/user/${id}`)
        window.location.reload();
    } else {
        Swal
        .fire({
            title: "Este Usuario No se puede Eliminar !!",
            icon: 'warning',
            
            confirmButtonText: "Aceptar",
        })
    }
}


    function consultAndDeleteUser (id) {
        Swal
        .fire({
            title: "Eliminar Usuario !!",
            text: "Seguro desea eliminar a este Usuario?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
        })
        .then(resultado => {
            if (resultado.value) {
                
                DeleteUser (id);
            } else {
                
            }
        });
    }



    return ({
        user,
        url,
        consultAndDeleteUser,
    })
}

export default UseAdminUsers;