import React, { useState } from 'react';
import axios from 'axios';
import "./ResetPassword.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import button from 'react-bootstrap/Button';

import Swal from 'sweetalert2';


const ResetPassword = (props) => {


    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({})

    let url = "http://localhost:4000/api/";

    const onChange = (e) => {
        const { name, value } = e.target;
        const response = { ...user, [name]: value }
        setUser(response);
    }

    const handleSubmit = async () => {
        let { data } = await axios.get(`${url}user/searchEmail`, { email: user.email })
       
       if (data._id) {
        resetPassword(data._id)  /*aqui*/
        console.log(data)
       }
    }

    const resetPassword = async (id) => {
        let response = await axios.put(`${url}user/resetPassword/${id}`, {
            password: user.password
        })
        console.log(response)
    }

    const checkValidation = (e) => {
        const confirmPass = e.target.value;
        setConfirmPassword(confirmPass)
        if (password !== confirmPass) {
            setIsError("La contraseña no coincide");
        } else {
            setIsError("");
        }
    }

    const switchShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='body'>
        <div className='main' onSubmit={handleSubmit}>
            <form className='mainContainer'>
                <h3>Nueva contraseña</h3>
                <div className='divEmail'>Email</div>
                <div className='containerPassword'>
                    <input type="email" onChange={onChange} name='email' placeholder="Introduce tu Email" />
                </div>
                <div className='divPassword'>Contraseña</div>
                <input type="password" onChange={onChange} name="password" placeholder="nueva contraseña" />
                <div className='confirmPassword'>{isError}</div>
                <div className='divButton'>
                <button type="submit" class="btn btn-primary m-2" onClick={handleSubmit}>Enviar</button>
                </div>
            </form>
        </div>
        </div>
       
        
    )
}

export default ResetPassword;