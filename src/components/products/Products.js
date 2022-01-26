import React from 'react';
import { connect } from 'react-redux';
import '../commons/Commons.css';
import LoginModal from '../commons/LoginModal.js';
import { RegisterModal } from '../commons/RegisterModal.js';
import { MyButton } from './../button/MyButton.js';
import MyAxios from '../../utilities/MyAxios'
import { addToShoppingListAction } from '../../features/shelf/shelfSlice';
import './Products.css';


class Products extends React.Component {

    constructor(props) {
        super(props)
        window.scrollTo(0,0)
        this.state = {
            editCatName: false,
            changeCat: false,
            editProdName: false,
            products: {},
            showRegister: false,
            showLogin: false,
            showingAlert: false,
            showingAlertError: false
        }
        this.setEditCatName = this.setEditCatName.bind(this);
        this.setChangeCat = this.setChangeCat.bind(this);
        this.setEditProdName = this.setEditProdName.bind(this);
        this.showRegisterModal = this.showRegisterModal.bind(this);
        this.showLoginModal = this.showLoginModal.bind(this);
        this.handleClickShowAlert = this.handleClickShowAlert.bind(this)
        this.handleClickShowAlertError = this.handleClickShowAlertError.bind(this)
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

    showRegisterModal () {
        this.setState({showRegister: !this.state.showRegister})
    }

    showLoginModal () {
        this.setState({showLogin: !this.state.showLogin})
    }

    makeProducts (shelves) {
        let products = {}
        let copy = JSON.parse(JSON.stringify(shelves))
        copy.forEach(shelf => {
            shelf.categories.forEach(category => {
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
        return products
    }

    componentDidUpdate(prevProps) {
        if (this.props.shelves.length != prevProps.shelves.length) {
            this.setState({ products: this.makeProducts(this.props.shelves)})
        }
    }

    componentDidMount() {
        this.setState({ products: this.makeProducts(this.props.shelves)})
    }

    addToShoppingList(productId, categoryName) {
        MyAxios.post(`category/addProductToShoppingList/`, {
            productId: productId,
            categoryName: categoryName
        })
        .then((response) => {
            this.props.addToShoppingListAction(response.data);
            this.handleClickShowAlert()
        })
        .catch((error) => {
            this.handleClickShowAlertError()
            console.log(error);
        });
    }

    handleClickShowAlert() {
        this.setState({
            showingAlert: true
        });
        setTimeout(() => {
            this.setState({
                showingAlert: false
            });
        }, 1500);
    }

    handleClickShowAlertError() {
        this.setState({
            showingAlertError: true
        });
        setTimeout(() => {
            this.setState({
                showingAlertError: false
            });
        }, 1500);
    }


    render() { 
        return (
            <div className="page-container" >
                <h1>MY PRODUCTS</h1>
                    <div className={ this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}>
                        <strong>Added to the shopping list!</strong> 
                    </div>
                    <div className={ this.state.showingAlertError ? 'alert-shown-err' : 'alert-hidden-err'}>
                        <strong>Product is already on the shopping list!</strong> 
                    </div>
                {this.props.user ?
                    <>
                        {this.state.products &&
                        Object.keys(this.state.products)
                        .sort(function compare (a, b) {
                            return a.localeCompare(b)
                        })
                        .map((categoryName) => 
                            <div key={categoryName} className='products-container'>           
                                <div className='product-category'>
                                    {categoryName}
                                </div>
                                {this.state.products[categoryName].map((item) =>
                                    <div key={item.product.id} className='category-items'>
                                        <div className='items'>
                                            <p>{item.product.name}</p>
                                        </div>
                                        <div className='amount'>
                                            <p><b>{item.amount}</b></p>
                                            <MyButton 
                                                buttonStyle='btn--dark-rev'
                                                buttonSize='btn--small-icon'
                                                style={{marginLeft:"10px"}}
                                                title="Add to Shopping list"
                                                onClick={() => this.addToShoppingList(item.product.id, categoryName)}
                                            >
                                                <i className="fas fa-shopping-basket"></i>
                                            </MyButton>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </> :
                    <div style={{display:"flex", alignItems:"center"}}>
                        <MyButton 
                            style={{margin: "0px", border: "0px"}}
                            buttonStyle='btn--primary'
                            onClick={this.showLoginModal}
                        >
                            LOG IN
                        </MyButton>
                        <p style={{marginBottom: "3px"}}>or</p>
                        <MyButton 
                            style={{margin: "0px"}}
                            buttonStyle='btn--primary'
                            onClick={this.showRegisterModal}
                        >
                            REGISTER
                        </MyButton>
                        <p style={{marginBottom: "3px"}}>to add your shelf!</p>
                        <RegisterModal show={this.state.showRegister} setOpen={this.showRegisterModal}/>
                        <LoginModal show={this.state.showLogin} setOpen={this.showLoginModal}/>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    shelves: state.shelf.shelves,
    user: state.user
});

const mapDispatchToProps = { addToShoppingListAction };

export default connect(mapStateToProps, mapDispatchToProps)(Products);