import React from 'react';
import { ShelfTemplate } from './ShelfTemplate'
import '../commons/Commons.css';
import './MainPage.css';


export class MainPage extends React.Component {

    constructor(props) {
        super(props)
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div className="page-container" >
                <h1>MY SHELVES</h1>
                <div className='shelves-container'>
                    <ShelfTemplate name="szafka1" id="1"/>
                    <ShelfTemplate name="szafka2" id="2"/>   
                    <ShelfTemplate name="szafka3" id="3"/>      
                    <ShelfTemplate name="szafka4" id="4"/>                       

                </div>
            </div>

        );
    }

}