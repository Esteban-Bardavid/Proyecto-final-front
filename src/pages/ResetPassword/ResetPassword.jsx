import React, { useState } from 'react';
import axios from 'axios';

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
        console.log(data)
        resetPassword(data._id)
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
        <div className='main' onSubmit={handleSubmit}>
            <form className='mainContainer'>
                <h3>Nueva contraseña</h3>
                <div className='divPassword'>Email</div>
                <div className='containerPassword'>
                    <input type={showPassword ? "text" : "password"} value={password} onChange={onChange} name='email' placeholder="Introduce tu contraseña" required />
                    <button onClick={switchShowPassword}>{showPassword ? "Ocultar" : "Mostrar"}</button>
                </div>
                <div>Contraseña</div>
                <input type="password" onChange={onChange} name="password" placeholder="nueva contra" />
                <div className='confirmPassword'>{isError}</div>
                <div className='divButton'>
                    <button type="submit" onClick={handleSubmit}>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;