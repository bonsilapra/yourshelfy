import React, { useState, useEffect }  from 'react'
// import { useParams } from "react-router-dom"
import MyAxios from '../../utilities/MyAxios';
// import { Link } from 'react-router-dom'
import '../commons/Commons.css';
import { MyButton } from './../button/MyButton.js';
import { GetListModal } from './GetListModal.js';
import { RegisterModal } from '../commons/RegisterModal.js';
import  LoginModal  from '../commons/LoginModal.js';
import { useSelector } from 'react-redux'
import './ShoppingList.css';


export function ShoppingList() {

    const [editCategory, setEditCatName] = useState(false);
    const openEditCatName = () => setEditCatName(true);
    const saveCatName = () => setEditCatName(false);
    const cancelCatName = () => setEditCatName(false);

    const [editProdName, setEditProdName] = useState(false);
    const openEditProdName = () => setEditProdName(true);
    const saveProdName = () => setEditProdName(false);
    const cancelProdName = () => setEditProdName(false);

    const [addProdName, setAddProdName] = useState(false);
    const openAddProdName = () => setAddProdName(true);
    const saveNewProdName = () => setAddProdName(false);
    const cancelNewProdName = () => setAddProdName(false);

    const [addCategory, setAddCatName] = useState(false);
    const openAddCatName = () => setAddCatName(true);
    const saveNewCatName = () => setAddCatName(false);
    const cancelNewCatName = () => setAddCatName(false);

    const [showGetList, setGetList] = useState(false);

    const showGetListModal = () => setGetList(!showGetList);

    const user = useSelector((state) => state.user)

    const [showRegister, setRegisterModal] = useState(false);
    const [showLogin, setLoginModal] = useState(false);

    const showRegisterModal = () => setRegisterModal(!showRegister);
    const showLoginModal = () => setLoginModal(!showLogin);

    return (
        <div className="page-container">
            <h1>MY SHOPPING LIST</h1>
            {user!=null ?
                <>
                    <GetListModal show={showGetList} setOpen={showGetListModal}/>
                    <MyButton 
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={() => {showGetListModal()}}
                    >
                        Get the shopping list! <i className="fas fa-list-alt"></i>
                    </MyButton>
                    {/* <Link className = "link-main" to={"/listComp"}>Get the shopping list! <i className="fas fa-list-alt"></i> </Link> */}
                    <div className='shop-container'>                     
                        <div className='product-category'>
                        {editCategory==false ?
                            <>
                                Kategoria 1
                                <MyButton 
                                    buttonStyle='btn--dark'
                                    buttonSize='btn--small-icon'
                                    style={{marginLeft:"5px"}}
                                    title="Edit name"
                                    onClick={openEditCatName}
                                >
                                    <i className="fas fa-edit"></i>
                                </MyButton>
                                <MyButton 
                                    buttonStyle='btn--dark'
                                    buttonSize='btn--small-icon'
                                    title="Remove"
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </MyButton>
                            </>:
                            <>
                                <input type="text" style={{height:"1.7rem"}}/>
                                <MyButton 
                                    buttonStyle='btn--dark'
                                    buttonSize='btn--small-icon'
                                    style={{marginLeft:"5px"}}
                                    onClick={saveCatName}
                                    title="Save"
                                >
                                    <i className="fas fa-check"></i>
                                </MyButton>
                                <MyButton 
                                    buttonStyle='btn--dark'
                                    buttonSize='btn--small-icon'
                                    style={{marginLeft:"5px"}}
                                    onClick={cancelCatName}
                                    title="Cancel"
                                >
                                    <i className="fas fa-times"></i>
                                </MyButton>
                            </>
                        }
                        </div>
                        <div className='category-product-list-shop'>
                            <div className='category-items-shopping'>
                                {editProdName==false ?
                                    (<div className='item'>
                                        <MyButton 
                                            buttonStyle='btn--dark-rev'
                                            buttonSize='btn--small-icon'
                                            title="Remove"
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </MyButton>
                                        <h4 style={{padding:"5px"}}>Pieczarki</h4>
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
                                        <input type="text" style={{height:"2rem", marginLeft:"5px"}}/>
                                        <MyButton 
                                            buttonStyle='btn--dark-rev'
                                            buttonSize='btn--small-icon'
                                            style={{marginLeft:"5px"}}
                                            onClick={saveProdName}
                                            title="Save"
                                        >
                                            <i className="fas fa-check"></i>
                                        </MyButton>
                                        <MyButton 
                                            buttonStyle='btn--dark-rev'
                                            buttonSize='btn--small-icon'
                                            style={{marginLeft:"5px"}}
                                            onClick={cancelProdName}
                                            title="Cancel"
                                        >
                                            <i className="fas fa-times"></i>
                                        </MyButton>
                                    </div>)
                                }
                                <div className='options'>
                                    <MyButton 
                                        buttonStyle='btn--dark-rev'
                                        buttonSize='btn--small-icon'
                                        title="Subtract"
                                    >
                                        <i className="fas fa-minus"></i>
                                    </MyButton>
                                    <p><b>ilość</b></p>
                                    <MyButton 
                                        buttonStyle='btn--dark-rev'
                                        buttonSize='btn--small-icon'
                                        title="Add"
                                    >
                                        <i className="fas fa-plus"></i>
                                    </MyButton>
                                    <p> Amount: </p>
                                    <input type="number" style={{width:"50px", marginRight:"10px"}}></input>
                                    <MyButton 
                                        buttonStyle='btn--dark'
                                        buttonSize='btn--small'
                                    >
                                        Add
                                    </MyButton>
                                </div>
                            </div>
                        </div>
                        {addProdName==true ?
                            (<div className='category-items'>
                                <div className='item'>
                                    <input type="text" style={{height:"2rem"}}/>
                                    <MyButton 
                                        buttonStyle='btn--dark-rev'
                                        buttonSize='btn--small-icon'
                                        style={{marginLeft:"5px"}}
                                        onClick={saveNewProdName}
                                        title="Save"
                                    >
                                        <i className="fas fa-check"></i>
                                    </MyButton>
                                    <MyButton 
                                        buttonStyle='btn--dark-rev'
                                        buttonSize='btn--small-icon'
                                        style={{marginLeft:"5px"}}
                                        onClick={cancelNewProdName}
                                        title="Cancel"
                                    >
                                        <i className="fas fa-times"></i>
                                    </MyButton>
                                </div>
                            </div>):
                            (<div>
                                <MyButton 
                                    buttonStyle='btn--dark-rev'
                                    buttonSize='btn--medium'
                                    onClick={openAddProdName}
                                >
                                    Add product <i className="fas fa-plus-circle"></i>
                                </MyButton>
                            </div>)
                        }
                    </div>
                    {addCategory==false ?
                        (<MyButton 
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            onClick={openAddCatName}
                        >
                            Add category <i className="fas fa-plus-circle"></i>
                        </MyButton>):
                        (<div className='shop-container'>                     
                            <div className='product-category'>
                                <input type="text" style={{height:"1.7rem"}}/>
                                <MyButton 
                                    buttonStyle='btn--dark'
                                    buttonSize='btn--small-icon'
                                    style={{marginLeft:"5px"}}
                                    onClick={saveNewCatName}
                                    title="Save"
                                >
                                    <i className="fas fa-check"></i>
                                </MyButton>
                                <MyButton 
                                    buttonStyle='btn--dark'
                                    buttonSize='btn--small-icon'
                                    style={{marginLeft:"5px"}}
                                    onClick={cancelNewCatName}
                                    title="Cancel"
                                >
                                    <i className="fas fa-times"></i>
                                </MyButton>
                            </div>
                        </div>)
                    }  
                </> : 
                <div style={{display:"flex", alignItems:"center"}}>
                    <MyButton 
                        style={{margin: "0px", border: "0px"}}
                        buttonStyle='btn--primary'
                        onClick={showLoginModal}
                    >
                        LOG IN
                    </MyButton>
                    <p style={{marginBottom: "3px"}}>or</p>
                    <MyButton 
                        style={{margin: "0px"}}
                        buttonStyle='btn--primary'
                        onClick={showRegisterModal}
                    >
                        REGISTER
                    </MyButton>
                    <p style={{marginBottom: "3px"}}>to see your shopping list!</p>
                    <RegisterModal show={showRegister} setOpen={showRegisterModal}/>
                    <LoginModal show={showLogin} setOpen={showLoginModal}/>
                </div>
            }
        </div>   
    )
}