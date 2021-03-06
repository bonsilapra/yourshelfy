import React from 'react';
import MyAxios from '../../utilities/MyAxios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux'
import { loginUser } from '../../features/user/userSlice'
import { getShelves } from '../../features/shelf/shelfSlice'
import './Modal.css';

class LoginModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isInvalid: {
                email: false,
                password: false,
            },
            showLogin: false,
            form: {
                email: "",
                password: "",
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
                    password: invalidPassword
                }
            }
        )
    }

    login() {
        MyAxios.post(`login`, {
            email: this.state.form.email,
            password: this.state.form.password,
        })
            .then((response) => {
                this.props.loginUser(response.data);
                this.props.setOpen(false);
                MyAxios.get(`shelf`)
                .then(res => {
                    this.props.getShelves(res.data);
                })
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
                        <Modal.Title>Sign in</Modal.Title>
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
                                !this.state.form.email.length || 
                                !this.state.form.password.length
                            } 
                            variant="primary" 
                            className={"primaryButton"} 
                            onClick={() => this.login()}
                        >
                            Log in
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = { loginUser, getShelves };

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);

