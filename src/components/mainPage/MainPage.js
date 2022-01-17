import React from 'react';
import { ShelfTemplate } from './ShelfTemplate'
import { NOShelfTemplate } from './NOShelfTemplate'
import { NewShelfTemplate } from './NewShelfTemplate'
import { MyButton } from './../button/MyButton.js';
import MyAxios from '../../utilities/MyAxios'
import { connect } from 'react-redux'
import '../commons/Commons.css';
import './MainPage.css';


class MainPage extends React.Component {

    constructor(props) {
        super(props)
        window.scrollTo(0,0)
        this.state = {
            addNewShelf: false,
            id: ""
        }
        this.setAddNewShelf = this.setAddNewShelf.bind(this);
        this.addNewShelf = this.addNewShelf.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    setAddNewShelf(addNewShelf) {
        this.setState({ addNewShelf: addNewShelf})
    }

    addNewShelf (name) {
        MyAxios.post(`shelf/create`, name, {
            headers: { 'Content-Type': 'text/plain' }
        })
        .then((response) => {
            this.setAddNewShelf(false);
        })
        .catch((error) => {
        })
    }

    handleDelete() {
        MyAxios.delete(`shelf/delete/`+ this.state.id)
        .then((response) => {
            this.setState(
                {shelf: this.state.shelf.filter(element => {
                    return element.id!==this.state.id
                })
            });
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
                    {this.props.shelves && 
                    this.props.shelves.sort(function compare(a, b) {
                        return a.name.localeCompare(b.name)
                        })
                        .map((shelf) =>
                            <ShelfTemplate id={shelf.id} name={shelf.name} handleDelete={this.handleDelete} />
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

const mapStateToProps = (state) => ({
    shelves: state.shelf
});

const mapDispatchToProps = {  };

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);