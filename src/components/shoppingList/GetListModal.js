import React from 'react'
import Modal from 'react-bootstrap/Modal';
import '../commons/Commons.css';
import './ShoppingList.css';


export class GetListModal extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={() => this.props.setOpen(false)}>
                    <Modal.Body>
                        <h1 style={{textAlign:"center"}}>MY SHOPPING LIST</h1>
                        <div className='list-container'>                     
                            <div className='product-category'>
                                Kategoria 1
                            </div>
                            <div className='category-items'>
                                <div className='item-name'>
                                    <p>Pieczarki</p>
                                </div>
                                <div className='item-options'>
                                    <p><b>ilość</b></p>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.setOpen(false)}>Wyjście</Button>
                        <Button type="submit" 
                            disabled={
                                this.state.isInvalid.email || 
                                this.state.isInvalid.password || 
                                this.state.isInvalid.repPassword || 
                                !this.state.form.email.length || 
                                !this.state.form.password.length || 
                                !this.state.form.repPassword.length
                            } variant="primary" onClick={() => this.addNewUser()}>
                            Zarejestruj
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            </>

        )
    }
}