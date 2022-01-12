import React, { useState, useEffect }  from 'react'
import { useParams } from "react-router-dom"
// import myAxios from '../../utilities/myAxios';
import { Link } from 'react-router-dom'
import '../commons/Commons.css';
import { MyButton } from './../button/MyButton.js';
import './ShoppingList.css';


export function ShoppingList() {


    return (
        <div className="page-container">
            <h1>MY SHOPPING LIST</h1>
            <div className='shop-container'>                     
                <div className='product-category'>
                    Kategoria 1
                    <MyButton 
                        buttonStyle='btn--dark'
                        buttonSize='btn--small-icon'
                        style={{marginLeft:"5px"}}
                        title="Edit name">
                        <i class="fas fa-edit"></i>
                    </MyButton>
                    <MyButton 
                            buttonStyle='btn--dark'
                            buttonSize='btn--small-icon'
                            title="Remove">
                            <i class="fas fa-trash-alt"></i>
                    </MyButton>
                </div>
                <div className='category-items'>
                    <div className='item'>
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
                                title="Edit name">
                                <i class="fas fa-edit"></i>
                            </MyButton>
                        </div>
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
                <MyButton 
                buttonStyle='btn--dark-rev'
                buttonSize='btn--medium'>
                    Add product <i class="fas fa-plus-circle"></i>
                </MyButton>
            </div>
            
            <MyButton 
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Add category <i class="fas fa-plus-circle"></i>
            </MyButton>
        </div>   
    )
}