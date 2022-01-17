import React from 'react';
import { Link } from 'react-router-dom';
import { MyButton } from './../button/MyButton.js';
import Select from 'react-select';
import './MainPage.css';
import '../commons/Commons.css';


export class ShelfTemplate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {editShelf: false}
        this.setEditShelf = this.setEditShelf.bind(this);
    }

    setEditShelf(editShelf) {
        this.setState({ editShelf: editShelf})
    }

    render() {
        return (
            <div className = "shelf-container">
                <div className='shelf-name'>
                    <Link className = "link-shelf" to={"/shelf/" + this.props.id}>{this.props.name.slice(0, -1)} </Link>
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
                            <div className='shelf-items-name'>
                                item 1
                                {this.state.editShelf==false ?
                                    (<MyButton 
                                        buttonStyle='btn--dark-rev'
                                        buttonSize='btn--small-icon'
                                        title="Change Shelf"
                                        onClick={()=>this.setEditShelf(true)}>
                                        <i class="fas fa-dolly-flatbed"></i>
                                    </MyButton>):
                                    (<>
                                        <div className='shelf-items-name'>
                                            <MyButton 
                                                buttonStyle='btn--dark-rev'
                                                buttonSize='btn--small-icon'
                                                style={{marginLeft:"5px"}}
                                                onClick={()=>this.setEditShelf(false)}
                                                title="Cancel">
                                                <i class="fas fa-times"></i>
                                            </MyButton>
                                        </div>
                                        <div className='shelf-items-name'>
                                            <Select 
                                                style={{height:"1rem"}}
                                                placeholder="Pick shelf" 
                                                // onChange={} 
                                                // options={}
                                            />
                                        </div>
                                    </>)
                                }
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