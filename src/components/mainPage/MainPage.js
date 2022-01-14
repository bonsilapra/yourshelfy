import React from 'react';
import { ShelfTemplate } from './ShelfTemplate'
import { NOShelfTemplate } from './NOShelfTemplate'
import { NewShelfTemplate } from './NewShelfTemplate'
import { MyButton } from './../button/MyButton.js';
import '../commons/Commons.css';
import './MainPage.css';


export class MainPage extends React.Component {

    constructor(props) {
        super(props)
        window.scrollTo(0,0)
        this.state = {
            addNewShelf: false,
        }
        this.setAddNewShelf = this.setAddNewShelf.bind(this);
    }

    setAddNewShelf(addNewShelf) {
        this.setState({ addNewShelf: addNewShelf})
    }



    render() {
        return (
            <div className="page-container" >
                <h1>MY SHELVES</h1>
                <div className='shelves-container'>
                    <ShelfTemplate name="szafka1" />
                    <ShelfTemplate name="szafka2" />   
                    <ShelfTemplate name="szafka3" />      
                    <NOShelfTemplate name="NO SHELF" />                       
                </div>
                {this.state.addNewShelf==false ?
                (<MyButton 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={()=>this.setAddNewShelf(true)}>
                    Add new shelf <i class="fas fa-plus-circle"></i>
                </MyButton>):
                (<div className='shelves-container'>   
                    <NewShelfTemplate name="New shelf" setShow={this.setAddNewShelf}/>                  
                    {/* <div className='product-category'>
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
                    </div> */}
                </div>)
                }
            </div>
            
        );
    }

}