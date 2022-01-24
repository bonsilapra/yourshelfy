import React from 'react';
import { MyButton } from './../button/MyButton.js';
import '../commons/Commons.css';
import './Products.css';
import Select from 'react-select';
import { connect } from 'react-redux'



class Products extends React.Component {

    constructor(props) {
        super(props)
        window.scrollTo(0,0)
        this.state = {
            editCatName: false,
            changeCat: false,
            editProdName: false,
            products: {}
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
    
    
    componentDidMount() {
        let products = {}
        let allCategoriesList = []
        let copy = JSON.parse(JSON.stringify(this.props.shelves))
        copy.forEach(shelf => {
            shelf.categories.forEach(category => {
                allCategoriesList.push(category)
                if (products[category.name]) {
                    category.products.forEach(product => {
                        let prod = products[category.name].find(element => product.product.id == element.product.id)
                        if (prod) {
                            prod.amount += product.amount
                        } else {
                            products[category.name].push(product)
                        }
                    })
                } else {
                    products[category.name] = category.products
                }
            })
        })
        Object.values(products).map((arr) =>
            arr.sort(function compare (a, b) {
                return a.product.name.localeCompare(b.product.name)
            })
        )
        this.setState({ products: products})
    }


    render() { 
        return (
            <div className="page-container" >
                <h1>MY PRODUCTS</h1>
                {this.state.products &&
                Object.keys(this.state.products)
                .sort(function compare (a, b) {
                    return a.localeCompare(b)
                }).map((categoryName) => 
                    <div className='products-container'>           
                        <div className='product-category'>
                            {categoryName}
                        </div>
                        {this.state.products[categoryName].map((item) =>
                            <div className='category-items'>
                                <div className='items'>
                                    <p>{item.product.name}</p>
                                </div>
                                <div className='amount'>
                                    <p><b>{item.amount}</b></p>
                                    <MyButton 
                                        buttonStyle='btn--dark-rev'
                                        buttonSize='btn--small-icon'
                                        style={{marginLeft:"10px"}}
                                        title="Add to Shopping list">
                                        <i className="fas fa-shopping-basket"></i>
                                    </MyButton>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    shelves: state.shelf.shelves
});

const mapDispatchToProps = {  };

export default connect(mapStateToProps, mapDispatchToProps)(Products);