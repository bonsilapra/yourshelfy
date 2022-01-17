import React from 'react';
import { ShelfTemplate } from './ShelfTemplate'
import { NOShelfTemplate } from './NOShelfTemplate'
import { NewShelfTemplate } from './NewShelfTemplate'
import { MyButton } from './../button/MyButton.js';
import MyAxios from '../../utilities/MyAxios'
import '../commons/Commons.css';
import './MainPage.css';


export class MainPage extends React.Component {

    constructor(props) {
        super(props)
        window.scrollTo(0,0)
        this.state = {
            addNewShelf: false,
            shelf: "",
            id: ""
        }
        this.setAddNewShelf = this.setAddNewShelf.bind(this);
        this.addNewShelf = this.addNewShelf.bind(this);

    }

    setAddNewShelf(addNewShelf) {
        this.setState({ addNewShelf: addNewShelf})
    }

    componentDidMount() {
        MyAxios.get(`shelf`)
            .then(res => {
                const shelves = res.data;
                this.setState({ shelves });
                }
            )
    }

    addNewShelf (name) {
        MyAxios.post(`shelf/create`, name, {
            headers: { 'Content-Type': 'text/plain' }
        })
        .then((response) => {
            this.setState();
            this.setAddNewShelf(false);
        })
        .catch((error) => {
        })
    }

    handleDelete() {
        MyAxios.delete(`shelf/`+ this.state.id)
        .then((response) => {
            this.setState(
                {shelf: this.state.peak.filter(element => {
                    return element.id!==this.state.id
                })
            });
            this.setShow(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }


    render() {
        return (
            <div className="page-container" >
                <h1>MY SHELVES</h1>
                <div className='shelves-container'>
                    {this.state.shelves && 
                    this.state.shelves.sort(function compare(a, b) {
                        return a.name.localeCompare(b.name)
                        })
                        .map((shelf) =>
                            <ShelfTemplate id={shelf.id} name={shelf.name} />
                        )
                    }         
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
                    <NewShelfTemplate name="New shelf" setShow={this.setAddNewShelf} addNewShelf={this.addNewShelf}/>                  
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