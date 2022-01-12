import React from 'react';
import { MyButton } from './../button/MyButton.js';
import '../commons/Commons.css';
import './Products.css';


export class Products extends React.Component {

    constructor(props) {
        super(props)
        window.scrollTo(0,0)
        this.state = {editName: false}
        this.setEditName = this.setEditName.bind(this);
    }

    setEditName(editName) {
        this.setState({ editName: editName})
    }

    render() {
        return (
            <div className="page-container" >
                <h1>MY PRODUCTS</h1>
                <div className='products-container'>                     
                    <div className='product-category'>
                        {this.state.editName==false ?
                        (<>
                        Kategoria
                        <MyButton 
                            buttonStyle='btn--dark'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            onClick={()=>this.setEditName(true)}
                            title="Edit name">
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
                            onClick={()=>this.setEditName(false)}
                            title="Save">
                            <i class="fas fa-check"></i>
                        </MyButton>
                        <MyButton 
                            buttonStyle='btn--dark'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            onClick={()=>this.setEditName(false)}
                            title="Exit">
                            <i class="fas fa-times"></i>
                        </MyButton>
                        </>)

                        }
                    </div>
                    <div className='category-items'>
                        <div className='items'>
                            <MyButton 
                                buttonStyle='btn--dark-rev'
                                buttonSize='btn--small-icon'
                                title="Remove">
                                <i class="fas fa-trash-alt"></i>
                            </MyButton>
                            <p>Lusik </p>
                            <MyButton 
                                buttonStyle='btn--dark-rev'
                                buttonSize='btn--small-icon'
                                title="Edit name">
                                <i class="fas fa-edit"></i>
                            </MyButton>
                        </div>
                        <div className='amount'>
                            <p><b>ilość</b></p>
                            <MyButton 
                                buttonStyle='btn--dark-rev'
                                buttonSize='btn--small-icon'
                                style={{marginLeft:"10px"}}
                                title="Add to Shopping list">
                                <i class="fas fa-shopping-basket"></i>
                            </MyButton>
                        </div>
                    </div>
                </div>
                <MyButton 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Add category <i class="fas fa-plus-circle"></i>
                </MyButton>
            </div>

        );
    }

}