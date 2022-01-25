import React from 'react';
import myAxios from '../../utilities/MyAxios.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export class RegisterModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isInvalid: {
                email: false,
                repEmail: false,
                password: false,
                repPassword: false
            },
            showRegister: false,
            form: {
                email: "",
                repEmail: "",
                password: "",
                repPassword: ""
            },
        };
    }

    handleEmail(event) {
        this.setState(
            {
                form:
                {
                    ...this.state.form,
                    email: event.target.value.replaceAll(" ", "")
                },
                isInvalid: {
                    ...this.state.isInvalid,
                    email: event.target.value.replaceAll(" ", "").match(/^[a-z0-9._-]{2,}@[a-z0-9._-]{2,}\.[a-z]{2,}$/g) == null
                }
            }
        );
    }

    handlePassword(event) {
        let userPassword = event.target.value;
        let invalidPassword = true;
        if
            (/[a-z]/.test(userPassword) &&
            /[A-Z]/.test(userPassword) &&
            /[0-9]/.test(userPassword) &&
            /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(userPassword) &&
            /^[A-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/.test(userPassword)
        ) {
            invalidPassword = false
        }
        this.setState(
            {
                form: {
                    ...this.state.form,
                    password: event.target.value
                },
                isInvalid: {
                    ...this.state.isInvalid,
                    password: invalidPassword,
                    repPassword: (event.target.value !== this.state.form.repPassword)
                }
            }
        )
    }

    handleRepPassword(event) {
        this.setState(
            {
                form: {
                    ...this.state.form,
                    repPassword: event.target.value
                },
                isInvalid: {
                    ...this.state.isInvalid,
                    repPassword: (event.target.value !== this.state.form.password)
                }
            }
        )
    }

    addNewUser() {
        myAxios.post(`register`, {
            email: this.state.form.email,
            password: this.state.form.password
        })
            .then((response) => {
                alert("Succes!");
                this.props.setOpen(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={() => this.props.setOpen(false)}>
                    <Modal.Header closeButton >
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="E-mail"
                                    value={this.state.form.email}
                                    onChange={(event) => this.handleEmail(event)}
                                    isInvalid={this.state.isInvalid.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Your e-mail
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.form.password}
                                    onChange={(event) => this.handlePassword(event)}
                                    isInvalid={this.state.isInvalid.password}
                                />
                                <Form.Text className="text-muted">
                                    Your password should contain at least 8 characters, mixture of both uppercase and lowercase letters and at least one number and special character: !"#$%&amp;'&#40;&#41;*+,-./:;&#60;=&#62;?@&#62;\&#93;^_`&#123;|&#125;~
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Repeat password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Repeat password"
                                    onChange={(event) => this.handleRepPassword(event)}
                                    isInvalid={this.state.isInvalid.repPassword}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            variant="secondary" 
                            onClick={() => this.props.setOpen(false)}
                        >
                            Exit
                        </Button>
                        <Button 
                            type="submit" 
                            disabled={
                                this.state.isInvalid.email || 
                                this.state.isInvalid.password || 
                                this.state.isInvalid.repPassword || 
                                !this.state.form.email.length || 
                                !this.state.form.password.length || 
                                !this.state.form.repPassword.length
                            } 
                            variant="primary" 
                            onClick={() => this.addNewUser()}
                        >
                            Register
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}