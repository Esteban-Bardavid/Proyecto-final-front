import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {
  LinkButtons,
  SubmitButtons,
  registerButton,
  homeButton,
  forgotButton,
  inputStyle,
  HeaderBar,
} from '../components';

const title = {
  pageTitle: 'Olvido la contraseña',
};

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      });
    } else {
      try {
        const response = await axios.post(
          'http://localhost:4000/forgotPassword',
          {
            email,
          },
        );
        console.log(response.data);
        if (response.data === 'Email de recuperacion enviado') {
          this.setState({
            showError: false,
            messageFromServer: 'Email de recuperacion enviado',
            showNullError: false,
          });
        }
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'Email no enviado') {
          this.setState({
            showError: true,
            messageFromServer: '',
            showNullError: false,
          });
        }
      }
    }
  };

  render() {
    const {
 email, messageFromServer, showNullError, showError 
} = this.state;

    return (
      <div>
        <HeaderBar title={title} />
        <form className="profile-form" onSubmit={this.sendEmail}>
          <TextField
            style={inputStyle}
            id="email"
            label="email"
            value={email}
            onChange={this.handleChange('email')}
            placeholder="Email Address"
          />
          <SubmitButtons
            buttonStyle={forgotButton}
            buttonText="Enviar correo electrónico de restablecimiento de contraseña"
          />
        </form>
        {showNullError && (
          <div>
            <p>La direccion de correo electronico no existe</p>
          </div>
        )}
        {showError && (
          <div>
            <p>
            La direccion de correo no se reconoce . intentalo nuevamente
            </p>
            <LinkButtons
              buttonText="Register"
              buttonStyle={registerButton}
              link="/register"
            />
          </div>
        )}
        {messageFromServer === 'recovery email sent' && (
          <div>
            <h3>El correo de restablecimiento de contraseña se ha enviado con exito</h3>
          </div>
        )}
        <LinkButtons buttonText="Go Home" buttonStyle={homeButton} link="/" />
      </div>
    );
  }
}

export default ForgotPassword;