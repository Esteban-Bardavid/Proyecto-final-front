import "./LoginPage.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import  FooterComponent  from "../../../src/components/Footer/Footer";

function LoginPage() {
    // const { } = useLogin();
    const [form, setform] = useState({});

    function onChange(e) {
        const { name, value } = e.target;
        const response = { ...form, [name]: value }
        setform(response)
    }
    async function Login() {
        try {
            const { data } = await axios.post(`http://localhost:4000/api/auth`, form)

            localStorage.setItem('token', data)

            window.location.href = '/'
        } catch (error) {
            console.error('error')

        }
    }

    return (
        <div>
           hola soy el login
        </div>

    )
}

export default LoginPage;