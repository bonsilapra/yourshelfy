import React from 'react'
import { MyButton } from './../button/MyButton.js';
import { Link } from 'react-router-dom'
import '../commons/Commons.css';
import './ShoppingList.css';


export class GetListComp extends React.Component {

    print() {
        window.print();
    }

    render() {
        return (
            <>
                <div className="page-container">
                <Link className = "link-main" to={"/shoppingList"}>Back to shopping list <i class="fas fa-undo-alt"></i></Link>
                    <div className='section-to-print'>
                        <h1 style={{textAlign:"center"}}>MY SHOPPING LIST</h1>
                        <div className='list-container'>                     
                            <div className='product-category'>
                                Kategoria 1
                            </div>
                            <div className='item-category-items'>
                                <div className='item-name'>
                                    <p>Pieczarki</p>
                                </div>
                                <div className='item-options'>
                                    <p><b>ilość</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MyButton 
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={() => this.print()}>
                        Print <i class="fas fa-print"></i>
                    </MyButton>
                </div>
            </>
        )
    }
}