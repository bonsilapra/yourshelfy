import React from 'react';
import { Link } from 'react-router-dom';
import { MyButton } from '../button/MyButton.js';
import Select from 'react-select';
import './MainPage.css';
import '../commons/Commons.css';


export class NewShelfTemplate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {addNewShelf: true}
    }

    // setEditShelf(editShelf) {
    //     this.setState({ editShelf: editShelf})
    // }




    render() {
        return (
            <div className = "shelf-container">
                <div className='shelf-name'>
                    <input type="text" style={{height:"1.7rem"}}/>
                        <MyButton 
                            buttonStyle='btn--dark'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            // onClick={saveNewShelf}
                            title="Save">
                            <i class="fas fa-check"></i>
                        </MyButton>
                        <MyButton 
                            buttonStyle='btn--dark'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            onClick={()=>this.props.setShow(false)}
                            title="Cancel">
                            <i class="fas fa-times"></i>
                        </MyButton>
                </div>
                <div className='shelf-items' > 
                </div>
            </div>
            
                
        );
    }
}