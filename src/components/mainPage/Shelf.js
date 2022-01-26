import React, { useState }  from 'react'
import { useParams } from "react-router-dom"
import MyAxios from '../../utilities/MyAxios'
import { useSelector, useDispatch } from 'react-redux'
import '../commons/Commons.css';
import { MyButton } from './../button/MyButton.js';
import { Category } from './Category.js';
import { editShelf, addCategoryAction } from '../../features/shelf/shelfSlice';
import './MainPage.css';


export function Shelf () {

    const dispatch = useDispatch()

    const [editShelfName, setEditShelfName] = useState(false);
    const openEditShelfName = () => {
        setEditShelfName(true);
        setInputText(selectedShelf.name)
    }
    const [inputText, setInputText] = useState("");
    const handleShefNameChange = (event) => {
        setInputText(event.target.value)
    }
    const cancelShelfName = () => setEditShelfName(false);
    const saveShelfName = () => {
        MyAxios.put(`shelf/rename/${selectedShelf.id}`, inputText, {
            headers: { 'Content-Type': 'text/plain' }
        })
        .then((response) => {
            dispatch(editShelf(response.data));
            setEditShelfName(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const [addCategory, setAddCatName] = useState(false);
    const openAddCatName = () => setAddCatName(true);
    const [inputCatName, setInputCatname] = useState("");
    const handleCatNameChange = (event) => {
        setInputCatname(event.target.value)
    }
    const saveNewCatName = () => {
        MyAxios.post(`category/create`, {shelfId: selectedShelf.id, name: inputCatName})
        .then(response => {
            dispatch(addCategoryAction({shelfId: selectedShelf.id, newCat: response.data}));
            setAddCatName(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const cancelNewCatName = () => setAddCatName(false);

    let params = useParams();

    const selectedShelf = useSelector((state) => {
        if (state.shelf.shelves && state.shelf.shelves.filter((shelf) => shelf.id == params.id).length != 0) {
            return state.shelf.shelves.filter((shelf) => shelf.id == params.id)[0]
        } else { 
            return null
        }
    })

    let arrayForSort = [...selectedShelf.categories]

    return (
        <div className="page-container">
            <div className='shelf-head'>
                {selectedShelf.isNullShelf==true ?
                    (<h1>NO SHELF</h1>):
                    (<>
                        {editShelfName==false ?
                            (<div style={{display:"flex", height:"2.8rem"}}>
                                <h1>{selectedShelf.name}</h1>
                                <MyButton 
                                    buttonStyle='btn--primary'
                                    buttonSize='btn--large-icon'
                                    title="Edit name"
                                    onClick={openEditShelfName}
                                >
                                    <i className="fas fa-edit"></i>
                                </MyButton>
                            </div>):
                            (<div style={{display:"flex", height:"2.8rem"}}>
                                <input 
                                    type="text" 
                                    onChange={handleShefNameChange}
                                    value={inputText}
                                />
                                <MyButton 
                                    buttonStyle='btn--primary'
                                    buttonSize='btn--large-icon'
                                    style={{marginLeft:"5px"}}
                                    onClick={saveShelfName}
                                    title="Save"
                                >
                                    <i className="fas fa-check"></i>
                                </MyButton>
                                <MyButton 
                                    buttonStyle='btn--primary'
                                    buttonSize='btn--large-icon'
                                    style={{marginLeft:"5px"}}
                                    onClick={cancelShelfName}
                                    title="Cancel"
                                >
                                    <i className="fas fa-times"></i>
                                </MyButton>
                            </div>)
                        }
                    </>)
                }
            </div>
            <div className='shelf-categories-container'>
                {selectedShelf && selectedShelf.categories &&
                selectedShelf.categories.length !=0 &&
                arrayForSort
                .sort((a,b) =>
                    a.name.localeCompare(b.name))
                .map((cat) =>   
                    <Category key={cat.id} selectedCat={cat} />
                )}
            </div>
            <div className='add-category'>
                {addCategory==false ?
                    (<MyButton 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={openAddCatName}
                    >
                        Add category <i className="fas fa-plus-circle"></i>
                    </MyButton>):
                    (<div className='shelf-category-container'>                     
                        <div className='product-category'>
                            <input 
                                type="text" 
                                style={{height:"1.7rem"}}
                                onChange={handleCatNameChange}
                            />
                            <MyButton 
                                buttonStyle='btn--dark'
                                buttonSize='btn--small-icon'
                                style={{marginLeft:"5px"}}
                                onClick={saveNewCatName}
                                title="Save"
                            >
                                <i className="fas fa-check"></i>
                            </MyButton>
                            <MyButton 
                                buttonStyle='btn--dark'
                                buttonSize='btn--small-icon'
                                style={{marginLeft:"5px"}}
                                onClick={cancelNewCatName}
                                title="Cancel"
                            >
                                <i className="fas fa-times"></i>
                            </MyButton>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}