import React from 'react';
import { MyButton } from './../button/MyButton.js';
import '../commons/Commons.css';
import './Products.css';
import Select from 'react-select';


export class Products extends React.Component {

    constructor(props) {
        super(props)
        window.scrollTo(0,0)
        this.state = {
            editCatName: false,
            changeCat: false,
            editProdName: false
        }
        this.setEditCatName = this.setEditCatName.bind(this);
        this.setChangeCat = this.setChangeCat.bind(this);
        this.setEditProdName = this.setEditProdName.bind(this);
    }

    setEditCatName(editCatName) {
        this.setState({ editCatName: editCatName})
    }

    setChangeCat(changeCat) {
        this.setState({ changeCat: changeCat})
    }

    setEditProdName(editProdName) {
        this.setState({ editProdName: editProdName})
    }

    render() { 
        return (
            <div className="page-container" >
                <h1>MY PRODUCTS</h1>
                <div className='products-container'>                     
                    <div className='product-category'>
                        {this.state.editCatName==false ?
                        (<>
                            Kategoria
                            <MyButton 
                                buttonStyle='btn--dark'
                                buttonSize='btn--small-icon'
                                style={{marginLeft:"5px"}}
                                onClick={()=>this.setEditCatName(true)}
                                title="Edit name">
                                <i className="fas fa-edit"></i>
                            </MyButton>
                            <MyButton 
                                buttonStyle='btn--dark'
                                buttonSize='btn--small-icon'
                                title="Remove">
                                <i className="fas fa-trash-alt"></i>
                            </MyButton>
                        </>):
                        (<>
                            <input type="text" style={{height:"1.7rem"}}/>
                            <MyButton 
                                buttonStyle='btn--dark'
                                buttonSize='btn--small-icon'
                                style={{marginLeft:"5px"}}
                                onClick={()=>this.setEditCatName(false)}
                                title="Save">
                                <i className="fas fa-check"></i>
                            </MyButton>
                            <MyButton 
                                buttonStyle='btn--dark'
                                buttonSize='btn--small-icon'
                                style={{marginLeft:"5px"}}
                                onClick={()=>this.setEditCatName(false)}
                                title="Exit">
                                <i className="fas fa-times"></i>
                            </MyButton>
                        </>)
                        }
                    </div>
                    <div className='category-items'>
                        <div className='items'>
                            {this.state.editProdName==false ?
                            (<>
                                <MyButton 
                                    buttonStyle='btn--dark-rev'
                                    buttonSize='btn--small-icon'
                                    title="Remove">
                                    <i className="fas fa-trash-alt"></i>
                                </MyButton>
                                <p>Lusik </p>
                                <MyButton 
                                    buttonStyle='btn--dark-rev'
                                    buttonSize='btn--small-icon'
                                    title="Edit name"
                                    onClick={()=>this.setEditProdName(true)}>
                                    <i className="fas fa-edit"></i>
                                </MyButton>
                                {this.state.changeCat==false ?
                                (<MyButton 
                                    buttonStyle='btn--dark-rev'
                                    buttonSize='btn--small-icon'
                                    title="Change category"
                                    onClick={()=>this.setChangeCat(true)}>
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
                                    onClick={()=>this.setChangeCat(false)}
                                    title="Cancel">
                                    <i className="fas fa-times"></i>
                                    </MyButton>
                                </>)
                                }
                            </>):
                            (<>
                                <input type="text" style={{height:"1.7rem"}}/>
                                <MyButton 
                                    buttonStyle='btn--dark-rev'
                                    buttonSize='btn--small-icon'
                                    style={{marginLeft:"5px"}}
                                    onClick={()=>this.setEditProdName(false)}
                                    title="Save">
                                    <i className="fas fa-check"></i>
                                </MyButton>
                                <MyButton 
                                    buttonStyle='btn--dark-rev'
                                    buttonSize='btn--small-icon'
                                    style={{marginLeft:"5px"}}
                                    onClick={()=>this.setEditProdName(false)}
                                    title="Exit">
                                    <i className="fas fa-times"></i>
                                </MyButton>
                            </>)
                        }
                        </div>
                        <div className='amount'>
                            <p><b>ilość</b></p>
                            <MyButton 
                                buttonStyle='btn--dark-rev'
                                buttonSize='btn--small-icon'
                                style={{marginLeft:"10px"}}
                                title="Add to Shopping list">
                                <i className="fas fa-shopping-basket"></i>
                            </MyButton>
                        </div>
                    </div>
                </div>
                {/* <MyButton 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    Add category <i className="fas fa-plus-circle"></i>
                </MyButton> */}
            </div>
        );
    }
}