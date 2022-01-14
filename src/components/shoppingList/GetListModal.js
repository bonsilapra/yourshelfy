import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../commons/Commons.css';
import './ShoppingList.css';


export class GetListModal extends React.Component {

    print() {
        window.print();
    }



    render() {
        return (
            <>
                <Modal scrollable={true} show={this.props.show} onHide={() => this.props.setOpen(false)}>
                    <Modal.Body >
                        <div id="elem" className='section-to-print-modal'>
                            <h1 style={{textAlign:"center"}}>MY SHOPPING LIST</h1>
                            <div className='list-container'>                     
                                <div className='product-category'>
                                    Kategoria 1
                                </div>
                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>
                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>                                <div className='item-category-items'>
                                    <div className='item-name'>
                                        <p>Pieczarki</p>
                                    </div>
                                    <div className='item-options'>
                                        <p><b>ilość</b></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.setOpen(false)}>Close</Button>
                        <Button 
                            type="submit" 
                            variant="primary" 
                            onClick={() => this.print()}>
                            Print
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        )
    }
}