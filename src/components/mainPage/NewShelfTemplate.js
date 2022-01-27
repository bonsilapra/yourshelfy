import React from 'react';
import { MyButton } from '../button/MyButton.js';
import './MainPage.css';
import '../commons/Commons.css';


export class NewShelfTemplate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            addNewShelf: true,
            shelf: ""
        }
    }

    handleNewShelfName(event) {
        this.setState({shelf:event.target.value});
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.addNewShelf(this.state.shelf);
        }
    }

    render() {
        return (
            <div className = "shelf-container">
                <div className='shelf-name'>
                    <input 
                        autoFocus
                        type="text" 
                        style={{height:"1.7rem"}}
                        onChange={(event) => this.handleNewShelfName(event)}
                        onKeyDown={(event) => this.handleKeyDown(event)}
                    />
                    <MyButton 
                        buttonStyle='btn--dark'
                        buttonSize='btn--small-icon'
                        style={{marginLeft:"5px"}}
                        onClick={() => { this.props.addNewShelf(this.state.shelf) }}
                        title="Save">
                        <i className="fas fa-check"></i>
                    </MyButton>
                    <MyButton 
                        buttonStyle='btn--dark'
                        buttonSize='btn--small-icon'
                        style={{marginLeft:"5px"}}
                        onClick={() => this.props.setShow(false)}
                        title="Cancel">
                        <i className="fas fa-times"></i>
                    </MyButton>
                </div>
                <div className='shelf-items' > 
                </div>
            </div> 
        );
    }
}