import React from 'react'
import { MyButton } from './../button/MyButton.js';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../commons/Commons.css';
import './ShoppingList.css';

//not used!
class GetListComp extends React.Component {

    print() {
        window.print();
    }

    render() {
        let shelf = {}
        if (this.props.shelves) {
            shelf = this.props.shelves.find((shelf) =>
            shelf.isShoppingList == true
            )
        }

        let arrayForSort =[]
        if (shelf) {
            arrayForSort = [...shelf.categories]
        }
    
        return (
            <>
                <div className="page-container">
                <Link className = "link-main" to={"/shoppingList"}>Back to shopping list <i className="fas fa-undo-alt"></i></Link>
                    <div className='section-to-print'>
                        <h1 style={{textAlign:"center"}}>MY SHOPPING LIST</h1>
                                {shelf.categories.length != 0 &&
                                    arrayForSort
                                    .sort((a,b) =>
                                        a.name.localeCompare(b.name))
                                    .map((cat) => 
                                        <>
                                            {cat.products.length !=0 &&
                                                <div key={cat.id} className='list-container'>  
                                                    <div  className='product-category'>
                                                        {cat.name}
                                                    </div>
                                                    {cat.products.map((product) =>
                                                        <div key={product.product.id} className='item-category-items'>
                                                            <div className='item-name'>
                                                                <p>{product.product.name}</p>
                                                            </div>
                                                            <div className='item-options'>
                                                                <p><b>{product.amount}</b></p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            }
                                        </>
                                )}
                    </div>
                    <MyButton 
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={() => this.print()}>
                        Print <i className="fas fa-print"></i>
                    </MyButton>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    shelves: state.shelf.shelves,
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(GetListComp);