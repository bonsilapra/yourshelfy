import React from 'react';
import { Link } from 'react-router-dom';
import { MyButton } from './../button/MyButton.js';
// import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MyAxios from '../../utilities/MyAxios'
import './MainPage.css';
import '../commons/Commons.css';


export class ShelfTemplate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editShelf: false, 
            showDeleteModal: false,
            shelfOptions: []}
        this.setEditShelf = this.setEditShelf.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    setEditShelf(editShelf) {
        this.setState({ editShelf: editShelf})
    }

    setShowDeleteModal(show, id) {
        this.setState({ showDeleteModal: show, id: id});
    }

    setShelfOptions() {
        this.setState({ shelfOptions: this.props.shelf.map((shelf) => {
            return shelf.name
            })
        })
    }

    handleDelete(id) {
        MyAxios.delete(`shelf/delete/`+ id)
        .then((response) => {
            this.props.deleteShelf(id)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className = "shelf-container">
                <div className='shelf-name'>
                    <Link className = "link-shelf" to={"/shelf/" + this.props.id}> {this.props.name} </Link>
                    <MyButton 
                            buttonStyle='btn--dark'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            title="Remove"
                            onClick={()=>this.setShowDeleteModal(true)}> 
                            <i className="fas fa-trash-alt"></i>
                    </MyButton>
                    <Modal show={this.state.showDeleteModal} onHide={()=> this.setShowDeleteModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Deleting</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to delete shelf?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={()=> this.setShowDeleteModal(false)}>No</Button>
                            <Button variant="primary" onClick={()=> {this.handleDelete(this.props.id); this.setShowDeleteModal(false)}}>Yes, remove</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className='shelf-items' > 
                    <ul>
                    {this.props.shelf &&
                    this.props.shelf.categories.slice().sort((a,b) =>
                    a.name.localeCompare(b.name)).map((cat) =>
                    cat.products.slice().sort((a,b) =>
                    a.product.name.localeCompare(b.product.name))
                    .map((prod) =>
                        <li>
                            <div className='shelf-items-name'>
                                {prod.product.name}
                                {this.state.editShelf==false ?
                                    (<MyButton 
                                        buttonStyle='btn--dark-rev'
                                        buttonSize='btn--small-icon'
                                        title="Change Shelf"
                                        onClick={()=>this.setEditShelf(true)}>
                                        <i className="fas fa-dolly-flatbed"></i>
                                    </MyButton>):
                                    (<>
                                        <div className='shelf-items-name'>
                                            <MyButton 
                                                buttonStyle='btn--dark-rev'
                                                buttonSize='btn--small-icon'
                                                style={{marginLeft:"5px"}}
                                                onClick={()=>this.setEditShelf(false)}
                                                title="Cancel">
                                                <i className="fas fa-times"></i>
                                            </MyButton>
                                        </div>
                                        <div className='shelf-items-name'>
                                            <select name="shelves">
                                                <option>Pick a shelf</option>
                                                {/* {this.state.shelfOptions.map((shelfName) => */}
                                                <option >asdf</option>
                                                {/* )} */}
                                            </select>
                                        </div>
                                    </>)
                                }
                            </div>
                            <div style={{marginLeft:"auto"}}>
                                <b>{prod.amount}</b>
                            </div>
                        </li>
                    )
                    )}
                    </ul>
                </div>
            </div>
            
                
        );
    }
}