import React from 'react';
import { ShelfTemplate } from './ShelfTemplate'
import { NewShelfTemplate } from './NewShelfTemplate'
import { MyButton } from './../button/MyButton.js';
import MyAxios from '../../utilities/MyAxios'
import { connect } from 'react-redux'
import { addShelf } from '../../features/shelf/shelfSlice'
import { deleteShelf } from '../../features/shelf/shelfSlice'
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
    }

    setAddNewShelf(addNewShelf) {
        this.setState({ addNewShelf: addNewShelf})
    }

    addNewShelf (name) {
        MyAxios.post(`shelf/create`, name, {
            headers: { 'Content-Type': 'text/plain' }
        })
        .then((response) => {
            this.props.addShelf(response.data)
            this.setAddNewShelf(false);
        })
        .catch((error) => {
        })
    }


    render() {
        return (
            <div className="page-container" >
                <h1>MY SHELVES</h1>
                <div className='shelves-container'>
                    {this.props.shelves && 
                    this.props.shelves.filter((shelf) => shelf.isNullShelf == false)
                        .map((shelf) =>
                            shelf.isShoppingList == false &&
                                <ShelfTemplate 
                                key={shelf.id}
                                id={shelf.id} 
                                name={shelf.name} 
                                shelf={shelf}
                                deleteShelf={this.props.deleteShelf}
                                isNullShelf={false}
                                />
                        )
                    }     
                    {this.props.shelves && 
                    this.props.shelves.filter((shelf) => shelf.isNullShelf == true)
                        .map((shelf) =>
                            <ShelfTemplate 
                            key={shelf.id}
                            id={shelf.id} 
                            name="NO SHELF"
                            shelf={shelf}
                            deleteShelf={this.props.deleteShelf}
                            isNullShelf={true}
                            />
                        )
                    }             
                </div>
                {this.state.addNewShelf==false ?
                (<MyButton 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={()=>this.setAddNewShelf(true)}>
                    Add new shelf <i className="fas fa-plus-circle"></i>
                </MyButton>):
                (<div className='shelves-container'>   
                    <NewShelfTemplate name="New shelf" setShow={this.setAddNewShelf} addNewShelf={this.addNewShelf}/>
                </div>)
                }
            </div>
            
        );
    }
}

const mapStateToProps = (state) => ({
    shelves: state.shelf.shelves
});

const mapDispatchToProps = { addShelf: addShelf, deleteShelf: deleteShelf };

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);