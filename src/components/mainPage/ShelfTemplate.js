import React from 'react';
import { Link } from 'react-router-dom';
import { MyButton } from './../button/MyButton.js';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './MainPage.css';
import '../commons/Commons.css';


export class ShelfTemplate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editShelf: false, 
            showDeleteModal: false}
        this.setEditShelf = this.setEditShelf.bind(this);
    }

    setEditShelf(editShelf) {
        this.setState({ editShelf: editShelf})
    }

    setShowDeleteModal(show, id) {
        this.setState({ showDeleteModal: show, id: id});
    }


    render() {
        return (
            <div className = "shelf-container">
                <div className='shelf-name'>
                    <Link className = "link-shelf" to={"/shelf/" + this.props.id}>{this.props.name} </Link>
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
                        <Button variant="primary" onClick={()=> {this.props.handleDelete(); this.setShowDeleteModal(false)}}>Yes, remove</Button>
                    </Modal.Footer>
                </Modal>
                </div>
                <div className='shelf-items' > 
                    <ul>
                        <li>
                            <div className='shelf-items-name'>
                                item 1
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
                                            <Select 
                                                style={{height:"1rem"}}
                                                placeholder="Pick shelf" 
                                                // onChange={} 
                                                // options={}
                                            />
                                        </div>
                                    </>)
                                }
                            </div>
                            <div style={{marginLeft:"auto"}}>
                                <b>ilość</b>
                            </div>
                        </li>
                        <li>
                            <div>
                                item 2
                            </div>
                            <div style={{marginLeft:"auto"}}>
                                <b>ilość</b>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
                
        );
    }
}