import React, {useRef, useState} from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import Logo from "../assets/iDiversity_logo.png";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to log in : check your email/password')
        }
        setLoading(false)
    }


    return (
        <>
            <img src={Logo} className="text-center mb-4 ml-5" alt="logo_idiversity" />
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Log in</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id ="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Se connecter
                    </Button>
                </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Mot de passe oublié ?</Link>
                    </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Pas encore inscrit ? <Link to="/signup">S'inscrire</Link>
        </div>
        </>
    )
}
