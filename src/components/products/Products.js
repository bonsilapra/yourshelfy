import React from 'react';
import '../commons/Commons.css';
import './Products.css';


export class Products extends React.Component {

    constructor(props) {
        super(props)
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div className="page-container" >
                <h1>MY PRODUCTS</h1>
                <div className='products-container'>                     
                    <div className='product-category'>
                        Kategoria 1
                    </div>

                </div>
            </div>

        );
    }

}