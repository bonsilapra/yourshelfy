import React, { useState }  from 'react'
import MyAxios from '../../utilities/MyAxios'
import { useDispatch } from 'react-redux'
import { deleteCategoryAction, editCategoryAction, addProductAction } from '../../features/shelf/shelfSlice';
import '../commons/Commons.css';
import { MyButton } from './../button/MyButton.js';
import { Product } from './Product.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './MainPage.css';
import '../shoppingList/ShoppingList.css';


export function Category ({selectedCat}) {

    const dispatch = useDispatch()

    const [editCategory, setEditCatName] = useState(false);
    const openEditCatName = () => {
        setEditCatName(true);
        setInputCatname(selectedCat.name)
    }
    const [inputCatName, setInputCatname] = useState("");
    const handleCatNameChange = (event) => {
        setInputCatname(event.target.value)
    }
    const saveCatName = (id) => {
        MyAxios.put(`category/rename/${id}`, inputCatName, {
            headers: { 'Content-Type': 'text/plain' }
        })
        .then(response => {
            dispatch(editCategoryAction({catId: id, newCatName: inputCatName}));
            setEditCatName(false)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const cancelCatName = () => setEditCatName(false);

    const [addProdName, setAddProdName] = useState(false);
    const openAddProdName = () => setAddProdName(true);
    const [inputProdName, setInputProdName] = useState("");
    const handleProdNameAdd = (event) => {
        setInputProdName(event.target.value)
    }
    const saveNewProdName = () => {
        MyAxios.post(`category/${selectedCat.id}/addProduct`, inputProdName, {
            headers: { 'Content-Type': 'text/plain' }
        })
        .then(response => {
            dispatch(addProductAction({catId: selectedCat.id, newProd: response.data}));
            setAddProdName(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const cancelNewProdName = () => setAddProdName(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleDelete = (id) => {
        MyAxios.delete(`category/delete/${id}`)
        .then(response => {
            dispatch(deleteCategoryAction(id));
        })
        .catch((error) => {
            console.log(error);
        })
    }

    let arrayForSort = [...selectedCat.products]

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
                        <input 
                            type="text" 
                            style={{height:"1.7rem"}}
                            onChange={handleCatNameChange}
                            value={inputCatName}
                        />
                        <MyButton 
                            buttonStyle='btn--dark'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            onClick={()=> saveCatName(selectedCat.id)}
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
                    <p>Are you sure you want to delete category?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setShowDeleteModal(false)}>No</Button>
                    <Button variant="primary" onClick={()=> {handleDelete(selectedCat.id); setShowDeleteModal(false)}}>Yes, remove</Button>
                </Modal.Footer>
            </Modal>
            <div className='category-product-list'>
                {selectedCat && selectedCat.products &&
                selectedCat.products.length !=0 &&
                arrayForSort
                .sort((a,b) =>
                    a.product.name.localeCompare(b.product.name))
                .map((prod) =>   
                    <Product key={prod.product.id} selectedProd={prod} selectedCat={selectedCat}/>
                )}
                <div className='add-product'>
                    {addProdName==true ?
                    (<div className='category-items'>
                        <div className='item'>
                            <input 
                                type="text" 
                                style={{height:"2rem"}}
                                onChange={handleProdNameAdd}
                            />
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
                    >
                        Add product <i className="fas fa-plus-circle"></i>
                    </MyButton>
                    )
                    }
                </div>
            </div>
        </div>
    )
}