import React, { useState, useRef }  from 'react'
import MyAxios from '../../utilities/MyAxios';
// import { Link } from 'react-router-dom'
import '../commons/Commons.css';
import { MyButton } from './../button/MyButton.js';
import { GetListModal } from './GetListModal.js';
import { RegisterModal } from '../commons/RegisterModal.js';
import  LoginModal  from '../commons/LoginModal.js';
import { useSelector, useDispatch } from 'react-redux'
import { addCategoryAction, clearShoppingListAction } from '../../features/shelf/shelfSlice';
import { Category } from '../mainPage//Category.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ShoppingList.css';
import '../mainPage/MainPage.css';



export function ShoppingList() {

    const catNameAddInput = useRef()

    const selectedShelf = useSelector((state) => {
        if (state.shelf.shelves && state.shelf.shelves.filter((shelf) => shelf.isShoppingList == true)) {
            return state.shelf.shelves.filter((shelf) => shelf.isShoppingList == true)[0]
        } else { 
            return null
        }
    })

    let arrayForSort = [...selectedShelf.categories]

    const dispatch = useDispatch()

    const [addCategory, setAddCatName] = useState(false);
    const openAddCatName = () => {
        setAddCatName(true);
        setTimeout(() => {
            catNameAddInput.current.focus()
        }, 0);
    }
    const [inputCatName, setInputCatname] = useState("");
    const handleCatNameChange = (event) => {
        setInputCatname(event.target.value)
    }
    const saveNewCatName = () => {
        MyAxios.post(`category/create`, {shelfId: selectedShelf.id, name: inputCatName})
        .then(response => {
            dispatch(addCategoryAction({shelfId: selectedShelf.id, newCat: response.data}));
            setAddCatName(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const cancelNewCatName = () => setAddCatName(false);

    const [showGetList, setGetList] = useState(false);

    const showGetListModal = () => setGetList(!showGetList);

    const [showClearModal, setShowClearModal] = useState(false);
    const handleClear = () => {
        for (let i = 0; i < arrayForSort.length; i++) {
            MyAxios.delete(`category/delete/${arrayForSort[i].id}`)
            .then(response => {
                dispatch(clearShoppingListAction(arrayForSort[i].id));
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            saveNewCatName()
        }
    }

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
                    {selectedShelf.categories.length != 0 &&
                        <>
                            <GetListModal 
                                show={showGetList} 
                                setOpen={showGetListModal}
                                selectedShelf={selectedShelf}
                                arrayForSort={arrayForSort}
                            />
                            <MyButton 
                                buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                onClick={() => {showGetListModal()}}
                            >
                                Get the shopping list! <i className="fas fa-list-alt"></i>
                            </MyButton>
                            {/* <Link className = "link-main" to={"/listComp"}>Get the shopping list! <i className="fas fa-list-alt"></i> </Link> */}
                            <MyButton 
                                buttonStyle='btn--warn'
                                buttonSize='btn--large'
                                onClick={() => setShowClearModal(true)}
                            >
                                Clear the shopping list <i className="fas fa-ban"></i>
                            </MyButton>
                        </>
                    }
                    <Modal show={showClearModal} onHide={()=> setShowClearModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Clearing the shopping list</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure you want to clear the shopping list?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={()=> setShowClearModal(false)}>No</Button>
                            <Button variant="primary" onClick={()=> {handleClear(); setShowClearModal(false)}}>Yes, clear</Button>
                        </Modal.Footer>
                    </Modal>
                    <div className='shelf-categories-container'>
                        {selectedShelf && selectedShelf.categories &&
                        selectedShelf.categories.length !=0 &&
                        arrayForSort
                        .sort((a,b) =>
                            a.name.localeCompare(b.name))
                        .map((cat) =>   
                            <Category key={cat.id} selectedCat={cat} />
                        )}
                    </div>
                    <div className='add-category'>
                        {addCategory==false ?
                            (<MyButton 
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            onClick={openAddCatName}
                            >
                                Add category <i className="fas fa-plus-circle"></i>
                            </MyButton>):
                            (<div className='shelf-category-container'>                     
                                <div className='product-category'>
                                    <input 
                                        ref={catNameAddInput} 
                                        type="text" 
                                        style={{height:"1.7rem"}}
                                        onChange={handleCatNameChange}
                                        onKeyDown={handleKeyDown}
                                    />
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
                    </div> 
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