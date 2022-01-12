import React from 'react';
import { Link } from 'react-router-dom';
import { MyButton } from './../button/MyButton.js';
import './MainPage.css';
import '../commons/Commons.css';


export class ShelfTemplate extends React.Component {

    render() {
        return (
            <div className = "shelf-container">
                <div className='shelf-name'>
                    <Link className = "link-shelf" to={"/shelf/" + this.props.id}>{this.props.name} </Link>
                    <MyButton 
                            buttonStyle='btn--dark'
                            buttonSize='btn--small-icon'
                            style={{marginLeft:"5px"}}
                            title="Remove">
                            <i class="fas fa-trash-alt"></i>
                    </MyButton>
                </div>
                <div className='shelf-items' > 
                    <ul>
                        <li>
                            <div>
                                item 1
                            </div>
                            <div style={{marginLeft:"auto"}}>
                                <b>ilość</b>
                            </div>
                        </li>
                        <li>
                            <div>
                                item 2
                            </div>
                            <div style={{marginLeft:"auto"}}>
                                <b>ilość</b>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
                
        );
    }
}