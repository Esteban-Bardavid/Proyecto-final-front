import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ForgotPassword = async () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userEmail = e.target.email.value
    };

    setIsLoading(true);
    await axios.post(process.env.REACT_APP_API_URL + "/forgotpassword", userEmail)
        .then((res) => {
            setIsLoading(false);
            Swal.fire({
                showConfirmButton: true,
                icon: "success",
                text: "Revise su casilla de correo..."
            })
        }).catch((err) => {
            setIsLoading(false)
            Swal.fire({
                showConfirmButton: true,
                icon: "error",
                text: "ha habido un error, comprueba los datos y vuelva a intentarlo"
            })
        });
}

return (
    <div className='main'>
     <form className='mainContainer' onSubmit={handleSubmit}>
    <h3>Recuperar Cuenta</h3>
    <div>Correo electronico:</div>
    <input type="email" name='email' placeholder='"Introduce tu email' required/>
    <div className='divButton'>
        {isLoading
           ?
           <div className='loadingImage'>
          <img src={loading} alt="loading"/>
           </div>
           :
           <button type="submit">Enviar</button>

        }

    </div>
     </form>
    </div>
)

export default ForgotPassword; 