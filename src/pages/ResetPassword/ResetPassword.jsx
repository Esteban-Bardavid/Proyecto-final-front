import React, { useState } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';


const ResetPassword = (props) => {


    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        /*let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,16}$/;*/
        const userPassword = {
            password: e.target.value
        }

        let { data } = await axios.get("http://localhost:4000/api/user/searchEmail", { email: "mari@gmail.com" })
        console.log(data)
        let response = await axios.put(`http://localhost:4000/api/user/resetPassword/${data._id}`, {
            password:
                "Esteban123456789*"

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
                <div className='divPassword'>Contraseña*</div>
                <div className='containerPassword'>
                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder="Introduce tu contraseña" required />
                    <button onClick={switchShowPassword}>{showPassword ? "Ocultar" : "Mostrar"}</button>
                </div>
                <div>Confirmar contraseña:*</div>
                <input type="password" onchange={(e) => checkValidation(e)} name="confirmPassword" placeholder="Confirma la contraseña" />
                <div className='confirmPassword'>{isError}</div>
                <div className='divButton'>

                    <button type="submit">Enviar</button>


                </div>
            </form>
        </div>
    )
}

export default ResetPassword;