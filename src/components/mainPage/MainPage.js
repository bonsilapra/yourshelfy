import React from 'react';
import { ShelfTemplate } from './ShelfTemplate'
import { NewShelfTemplate } from './NewShelfTemplate'
import { MyButton } from './../button/MyButton.js';
import MyAxios from '../../utilities/MyAxios'
import { connect } from 'react-redux'
import { addShelf, deleteShelf } from '../../features/shelf/shelfSlice'
import { RegisterModal } from '../commons/RegisterModal.js';
import  LoginModal  from '../commons/LoginModal.js';
import '../commons/Commons.css';
import './MainPage.css';


class MainPage extends React.Component {

    constructor(props) {
        super(props)
        window.scrollTo(0,0)
        this.state = {
            addNewShelf: false,
            id: "",
            showRegister: false,
            showLogin: false
        }
        this.setAddNewShelf = this.setAddNewShelf.bind(this);
        this.addNewShelf = this.addNewShelf.bind(this);
        this.showRegisterModal = this.showRegisterModal.bind(this);
        this.showLoginModal = this.showLoginModal.bind(this);
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

    showRegisterModal () {
        this.setState({showRegister: !this.state.showRegister})
    }

    showLoginModal () {
        this.setState({showLogin: !this.state.showLogin})
    }
    


    render() {
        return (
            <div className="page-container" >
                <h1>MY SHELVES</h1>
                {this.props.user ?
                <>
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
                </> :
                <div style={{display:"flex", alignItems:"center"}}>
                    <MyButton 
                    style={{margin: "0px", border: "0px"}}
                    buttonStyle='btn--primary'
                    onClick={this.showLoginModal}
                    >
                        LOG IN
                    </MyButton>
                    <p style={{marginBottom: "3px"}}>or</p>
                    <MyButton 
                    style={{margin: "0px"}}
                    buttonStyle='btn--primary'
                    onClick={this.showRegisterModal}
                    >
                        REGISTER
                    </MyButton>
                    <p style={{marginBottom: "3px"}}>to add your shelf!</p>
                    <RegisterModal show={this.state.showRegister} setOpen={this.showRegisterModal}/>
                    <LoginModal show={this.state.showLogin} setOpen={this.showLoginModal}/>
                </div>
            }
            </div>
            
        );
    }
}

const mapStateToProps = (state) => ({
    shelves: state.shelf.shelves,
    user: state.user
});

const mapDispatchToProps = { addShelf: addShelf, deleteShelf: deleteShelf };

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);