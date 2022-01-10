import React from 'react';
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
                <h1>MOJE SZAFKI</h1>
                <p>
                    
                </p>
                
                <div className='shelves-container'>

                </div>
            </div>

        );
    }

}