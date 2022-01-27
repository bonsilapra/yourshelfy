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
                    <Modal.Body>
                        <div id="elem" className='section-to-print-modal'>
                            <h1 style={{textAlign:"center"}}>MY SHOPPING LIST</h1>
                            {this.props.selectedShelf && this.props.selectedShelf.categories &&
                            this.props.selectedShelf.categories.length !=0 &&
                            this.props.arrayForSort
                            .sort((a,b) =>
                                a.name.localeCompare(b.name))
                            .map((cat) =>  
                                <>
                                    {cat.products.length !=0 &&
                                        <div key={cat.id} className='list-container'>  
                                            <div  className='product-category'>
                                                {cat.name}
                                            </div>
                                            {cat.products.map((product) =>
                                                <div key={product.product.id} className='item-category-items'>
                                                    <div className='item-name'>
                                                        <p>{product.product.name}</p>
                                                    </div>
                                                    <div className='item-options'>
                                                        <p><b>{product.amount}</b></p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    }
                                </>
                            )}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.setOpen(false)}>Close</Button>
                        <Button 
                            type="submit" 
                            variant="primary" 
                            onClick={() => this.print()}
                        >
                            Print
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}