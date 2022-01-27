import React, { useState, useRef }  from 'react'
import MyAxios from '../../utilities/MyAxios'
import { useDispatch } from 'react-redux'
import { deleteProductAction, editProductAction, deltaProduct } from '../../features/shelf/shelfSlice';
import '../commons/Commons.css';
import { MyButton } from './../button/MyButton.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './MainPage.css';
import '../shoppingList/ShoppingList.css';


export function Product ({selectedProd,selectedCat}) {

    const prodNameChangeInput = useRef()

    const dispatch = useDispatch()

    const [editProdName, setEditProdName] = useState(false);
    const openEditProdName = () => {
        setEditProdName(true);
        setInputProdName(selectedProd.product.name)
        setTimeout(() => {
            prodNameChangeInput.current.focus()
        }, 0);
    }
    const [inputProdName, setInputProdName] = useState("");
    const handleProdNameChange = (event) => {
        setInputProdName(event.target.value)
    }
    const saveProdName = (catID, prodID, newName) => {
        MyAxios.put(`category/${catID}/changeProductName`, {productId: prodID, newName: newName})
        .then(response => {
            dispatch(editProductAction({catID: catID, oldProductId: prodID, newProduct: response.data.product}));
            setEditProdName(false)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const cancelProdName = () => setEditProdName(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleDelete = (catID, prodID) => {
        MyAxios.delete(`category/${catID}/deleteProduct/${prodID}`)
        .then(response => {
            dispatch(deleteProductAction({catID: catID, prodID: prodID}));
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const [amount, setAmount] = useState(0);
    const handleAmount = (event) => {
        setAmount(event.target.value)
    }

    const handleAmountChange = (catID, prodID, delta) => {
        MyAxios.put(`category/${catID}/changeProductAmount`, {productId: prodID, delta: parseInt(delta)})
        .then(response => {
            dispatch(deltaProduct({catID: catID, prodID: prodID, amount: response.data.amount}));
            setAmount(0)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleKeyDown = (event, func) => {
        if (event.key === 'Enter') {
            func()
        }
    }

    return (
        <div className='category-items-shelf'>
            {editProdName==false ?
                (<div className='item' >
                    <MyButton 
                        onClick={() => setShowDeleteModal(true)}
                        buttonStyle='btn--dark-rev'
                        buttonSize='btn--small-icon'
                        title="Remove"
                    >
                        <i className="fas fa-trash-alt"></i>
                    </MyButton>
                    <Modal show={showDeleteModal} onHide={()=> setShowDeleteModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Deleting</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to delete product?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={()=> setShowDeleteModal(false)}>No</Button>
                            <Button variant="primary" onClick={()=> {handleDelete(selectedCat.id, selectedProd.product.id); setShowDeleteModal(false)}}>Yes, remove</Button>
                        </Modal.Footer>
                    </Modal>
                    <h4 key={selectedProd.product.id} style={{padding:"5px"}}>{selectedProd.product.name}</h4>
                    <MyButton 
                        buttonStyle='btn--dark-rev'
                        buttonSize='btn--small-icon'
                        title="Edit name"
                        onClick={openEditProdName}
                    >
                        <i className="fas fa-edit"></i>
                    </MyButton>
                </div>):
                (<div className='item'>
                    <input 
                        ref={prodNameChangeInput}
                        type="text" 
                        style={{height:"2rem", marginLeft:"5px"}}
                        onChange={handleProdNameChange}
                        value={inputProdName}
                        onKeyDown={(event) => handleKeyDown(event, () => saveProdName(selectedCat.id, selectedProd.product.id, inputProdName))}
                    />
                    <MyButton 
                        buttonStyle='btn--dark-rev'
                        buttonSize='btn--small-icon'
                        style={{marginLeft:"5px"}}
                        onClick={() => saveProdName(selectedCat.id, selectedProd.product.id, inputProdName)}
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
                    title="Subtract"
                    onClick={() => handleAmountChange(selectedCat.id, selectedProd.product.id, -1)}
                >
                    <i className="fas fa-minus"></i>
                </MyButton>
                <p><b>{selectedProd.amount}</b></p>
                <MyButton 
                    buttonStyle='btn--dark-rev'
                    buttonSize='btn--small-icon'
                    title="Add"
                    onClick={() => handleAmountChange(selectedCat.id, selectedProd.product.id, 1)}
                >
                    <i className="fas fa-plus"></i>
                </MyButton>
                <p> Amount: </p>
                <input 
                    value={amount}
                    type="number" 
                    style={{width:"50px", marginRight:"10px"}}
                    onChange={handleAmount}
                    onKeyDown={(event) => handleKeyDown(event, () => handleAmountChange(selectedCat.id, selectedProd.product.id, amount))}
                />
                <MyButton 
                    buttonStyle='btn--dark'
                    buttonSize='btn--small'
                    onClick={() => handleAmountChange(selectedCat.id, selectedProd.product.id, amount)}
                >
                    Add
                </MyButton>
            </div>
        </div>
    )
}