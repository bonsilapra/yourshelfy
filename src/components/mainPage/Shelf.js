import React, { useState, useEffect }  from 'react'
import { useParams } from "react-router-dom"
// import myAxios from '../../utilities/myAxios';
import { Link } from 'react-router-dom'
import '../commons/Commons.css';
import { MyButton } from './../button/MyButton.js';
import './MainPage.css';


export function Shelf() {




    return (
        <div className="page-container">
            <div className='shelf-head'>
                <h1>Szafka</h1>
                <MyButton 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large-icon'>
                    <i class="fas fa-edit"></i>
                </MyButton>
            </div>
            <div className='shelf'>
                <div className='product'>
                    <div className='item'>
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'>
                            <i class="fas fa-trash-alt"></i>
                        </MyButton>
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'>
                            <i class="fas fa-edit"></i>
                        </MyButton>
                        <h4 style={{padding:"5px"}}>Pieczarki</h4>
                    </div>
                    <div className='options'>
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'>
                            <i class="fas fa-minus"></i>
                        </MyButton>
                        <p>ilość</p>
                        <MyButton 
                            buttonStyle='btn--dark-rev'
                            buttonSize='btn--small-icon'>
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

            </div>


            
            <MyButton 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Add product <i class="fas fa-plus-circle"></i>
            </MyButton>
        </div>
            
    )
}