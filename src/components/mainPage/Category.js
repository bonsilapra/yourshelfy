import React, { useState, useEffect }  from 'react'
import { useParams } from "react-router-dom"
import MyAxios from '../../utilities/MyAxios'
import { useDispatch } from 'react-redux'
import { deleteCategoryAction } from '../../features/shelf/shelfSlice';
import '../commons/Commons.css';
import { MyButton } from './../button/MyButton.js';
import Select from 'react-select';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './MainPage.css';
import '../shoppingList/ShoppingList.css';


export function Category ({selectedCat}) {

    const dispatch = useDispatch()

    const [editCategory, setEditCatName]=useState(false);
    const openEditCatName = () => setEditCatName(true);
    const saveCatName = () => setEditCatName(false);
    const cancelCatName = () => setEditCatName(false);

    const [changeCategory, setChangeCat]=useState(false);
    const openChangeCat = () => setChangeCat(true);
    // const saveCat = () => setChangeCat(false);
    const cancelCat = () => setChangeCat(false);

    const [editProdName, setEditProdName]=useState(false);
    const openEditProdName = () => setEditProdName(true);
    const saveProdName = () => setEditProdName(false);
    const cancelProdName = () => setEditProdName(false);

    const [addProdName, setAddProdName]=useState(false);
    const openAddProdName = () => setAddProdName(true);
    const saveNewProdName = () => setAddProdName(false);
    const cancelNewProdName = () => setAddProdName(false);

    const [showDeleteModal, setShowDeleteModal]=useState(false);

    const handleDelete = (id) => {
        MyAxios.delete(`category/delete/${id}`)
        .then(response => {
            dispatch(deleteCategoryAction(id));
        })
        .catch((error) => {
            console.log(error);
        })
    }

    let params = useParams();

    return (
        <div className='shop-container'>
            <div className='product-category' >
                {editCategory==false ?
                    (<>
                        {selectedCat.name}
                        <MyButton 
                            buttonStyle='btn--dark'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            title="Edit name"
                            onClick={openEditCatName}>
                            <i className="fas fa-edit"></i>
                        </MyButton>
                        <MyButton 
                                buttonStyle='btn--dark'
                                buttonSize='btn--small-icon'
                                title="Remove"
                                onClick={() => setShowDeleteModal(true)}>
                                <i className="fas fa-trash-alt"></i>
                        </MyButton>
                    </>):
                    (<>
                        <input type="text" style={{height:"1.7rem"}}/>
                        <MyButton 
                            buttonStyle='btn--dark'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            onClick={saveCatName}
                            title="Save">
                            <i className="fas fa-check"></i>
                        </MyButton>
                        <MyButton 
                            buttonStyle='btn--dark'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            onClick={cancelCatName}
                            title="Cancel">
                            <i className="fas fa-times"></i>
                        </MyButton>
                    </>)
                }
            </div>
            <Modal show={showDeleteModal} onHide={()=> setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete shelf?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setShowDeleteModal(false)}>No</Button>
                    <Button variant="primary" onClick={()=> {handleDelete(selectedCat.id); setShowDeleteModal(false)}}>Yes, remove</Button>
                </Modal.Footer>
            </Modal>
            <div className='category-items'>
                {editProdName==false ?
                    (<div className='item' >
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'
                            title="Remove">
                            <i className="fas fa-trash-alt"></i>
                        </MyButton>
                        <h4 style={{padding:"5px"}}>Pieczarki</h4>
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'
                            title="Edit name"
                            onClick={openEditProdName}>
                            <i className="fas fa-edit"></i>
                        </MyButton>
                    {changeCategory==false ?
                        (<MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'
                            title="Change category"
                            onClick={openChangeCat}>
                            <i className="fas fa-boxes"></i>
                        </MyButton>):
                        (
                        <>
                            <Select 
                                placeholder="Category" 
                                // onChange={} 
                                // options={}
                            />
                            <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            onClick={cancelCat}
                            title="Cancel">
                            <i className="fas fa-times"></i>
                            </MyButton>
                        </>)
                    }
                    </div>):
                    (<div className='item'>
                        <input type="text" style={{height:"2rem"}}/>
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            onClick={saveProdName}
                            title="Save">
                            <i className="fas fa-check"></i>
                        </MyButton>
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            onClick={cancelProdName}
                            title="Cancel">
                            <i className="fas fa-times"></i>
                        </MyButton>
                    </div>)
                }
                <div className='options'>
                    <MyButton 
                        buttonStyle='btn--dark-rev'
                        buttonSize='btn--small-icon'
                        title="Subtract">
                        <i className="fas fa-minus"></i>
                    </MyButton>
                    <p><b>ilość</b></p>
                    <MyButton 
                        buttonStyle='btn--dark-rev'
                        buttonSize='btn--small-icon'
                        title="Add">
                        <i className="fas fa-plus"></i>
                    </MyButton>
                    <p> Amount: </p>
                    <input type="number" style={{width:"50px", marginRight:"10px"}}></input>
                    <MyButton 
                        buttonStyle='btn--dark'
                        buttonSize='btn--small'>
                        Add
                    </MyButton>
                </div>
            </div>
            <div className='add-product'>
            {addProdName==true ?
                (<div className='category-items'>
                    <div className='item'>
                        <input type="text" style={{height:"2rem"}}/>
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            onClick={saveNewProdName}
                            title="Save">
                            <i className="fas fa-check"></i>
                        </MyButton>
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            onClick={cancelNewProdName}
                            title="Cancel">
                            <i className="fas fa-times"></i>
                        </MyButton>
                    </div>
                </div>):
                (<MyButton 
                    buttonStyle='btn--dark-rev'
                    buttonSize='btn--medium'
                    onClick={openAddProdName}
                    style={{slignItem:"center"}}>
                        Add product <i className="fas fa-plus-circle"></i>
                    </MyButton>
                )
            }
            </div>
        </div>
    )
}