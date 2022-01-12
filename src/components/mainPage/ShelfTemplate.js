import React from 'react'
import { Link } from 'react-router-dom'
import './MainPage.css';
import '../commons/Commons.css';


export class ShelfTemplate extends React.Component {

    render() {
        return (
            <div className = "shelf-container">
                <div className='shelf-name'>
                    <Link className = "link-shelf" to={"/shelf/" + this.props.id}>{this.props.name} </Link>
                </div>
                <div className='shelf-items' > 
                    <ul>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                    </ul>
                </div>
            </div>
            
                
        );
    }
}