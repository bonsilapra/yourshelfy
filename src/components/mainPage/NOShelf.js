import React, { useState, useEffect }  from 'react'
import { useParams } from "react-router-dom"
// import myAxios from '../../utilities/myAxios';
import { Link } from 'react-router-dom'
import '../commons/Commons.css';
import { MyButton } from '../button/MyButton.js';
import Select from 'react-select';
import './MainPage.css';
import '../shoppingList/ShoppingList.css';


export function NOShelf() {


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

    const [addCategory, setAddCatName]=useState(false);
    const openAddCatName = () => setAddCatName(true);
    const saveNewCatName = () => setAddCatName(false);
    const cancelNewCatName = () => setAddCatName(false);


    return (
        <div className="page-container">
            <div className='shelf-head'>
                <h1>NO SHELF</h1>
            </div>
            <div className='shop-container'>                     
                <div className='product-category'>
                    {editCategory==false ?
                        (<>
                            Kategoria 1
                            <MyButton 
                                buttonStyle='btn--dark'
                                buttonSize='btn--small-icon'
                                style={{marginLeft:"5px"}}
                                title="Edit name"
                                onClick={openEditCatName}>
                                <i class="fas fa-edit"></i>
                            </MyButton>
                            <MyButton 
                                    buttonStyle='btn--dark'
                                    buttonSize='btn--small-icon'
                                    title="Remove">
                                    <i class="fas fa-trash-alt"></i>
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
                                <i class="fas fa-check"></i>
                            </MyButton>
                            <MyButton 
                                buttonStyle='btn--dark'
                                buttonSize='btn--small-icon'
                                style={{marginLeft:"5px"}}
                                onClick={cancelCatName}
                                title="Cancel">
                                <i class="fas fa-times"></i>
                            </MyButton>
                        </>)
                    }
                </div>
                <div className='category-items'>
                    {editProdName==false ?
                        (<div className='item'>
                            <MyButton 
                                buttonStyle='btn--dark-rev'
                                buttonSize='btn--small-icon'
                                title="Remove">
                                <i class="fas fa-trash-alt"></i>
                            </MyButton>
                            <h4 style={{padding:"5px"}}>Pieczarki</h4>
                            <MyButton 
                                buttonStyle='btn--dark-rev'
                                buttonSize='btn--small-icon'
                                title="Edit name"
                                onClick={openEditProdName}>
                                <i class="fas fa-edit"></i>
                            </MyButton>
                        {changeCategory==false ?
                            (<MyButton 
                                buttonStyle='btn--dark-rev'
                                buttonSize='btn--small-icon'
                                title="Change category"
                                onClick={openChangeCat}>
                                <i class="fas fa-boxes"></i>
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
                                <i class="fas fa-times"></i>
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
                                <i class="fas fa-check"></i>
                            </MyButton>
                            <MyButton 
                                buttonStyle='btn--dark-rev'
                                buttonSize='btn--small-icon'
                                style={{marginLeft:"5px"}}
                                onClick={cancelProdName}
                                title="Cancel">
                                <i class="fas fa-times"></i>
                            </MyButton>
                        </div>)
                    }
                    <div className='options'>
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'
                            title="Subtract">
                            <i class="fas fa-minus"></i>
                        </MyButton>
                        <p><b>ilość</b></p>
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'
                            title="Add">
                            <i class="fas fa-plus"></i>
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
                                <i class="fas fa-check"></i>
                            </MyButton>
                            <MyButton 
                                buttonStyle='btn--dark-rev'
                                buttonSize='btn--small-icon'
                                style={{marginLeft:"5px"}}
                                onClick={cancelNewProdName}
                                title="Cancel">
                                <i class="fas fa-times"></i>
                            </MyButton>
                        </div>
                    </div>):
                    (<MyButton 
                        buttonStyle='btn--dark-rev'
                        buttonSize='btn--medium'
                        onClick={openAddProdName}
                        style={{slignItem:"center"}}>
                            Add product <i class="fas fa-plus-circle"></i>
                        </MyButton>
                    )
                }
            </div>
            {addCategory==false ?
            (<MyButton 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={openAddCatName}>
                Add category <i class="fas fa-plus-circle"></i>
            </MyButton>):
            (<div className='shop-container'>                     
                <div className='product-category'>
                    <input type="text" style={{height:"1.7rem"}}/>
                    <MyButton 
                        buttonStyle='btn--dark'
                        buttonSize='btn--small-icon'
                        style={{marginLeft:"5px"}}
                        onClick={saveNewCatName}
                        title="Save">
                        <i class="fas fa-check"></i>
                    </MyButton>
                    <MyButton 
                        buttonStyle='btn--dark'
                        buttonSize='btn--small-icon'
                        style={{marginLeft:"5px"}}
                        onClick={cancelNewCatName}
                        title="Cancel">
                        <i class="fas fa-times"></i>
                    </MyButton>
                </div>
            </div>)
            }
        </div>
            
    )
}