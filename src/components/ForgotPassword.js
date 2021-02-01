import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link} from "react-router-dom"

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Vérifier votre boîte mail pour plus d'information")
        } catch {
            setError('Password reset failed')
        }
        setLoading(false)
    }


    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Modifier votre mot de passe</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Réinitialiser votre mot de passe
                    </Button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to="/login">Se connecter</Link>
                </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Pas encore inscrit ? <Link to="/signup">S'inscrire</Link>
        </div>
        </>
    )
}
