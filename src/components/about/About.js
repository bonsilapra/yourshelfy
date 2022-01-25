import React from 'react';
import '../commons/Commons.css';
import './About.css';


export class About extends React.Component {

    constructor(props) {
        super(props)
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div className="page-container" >
                <h1>ABOUT</h1>
                <div className='about-container'>
                    <h4>Main purpose</h4>
                    <p>
                    This app was created to organize shelves in the house. It will help you with keeping up with quantity of products that you have and hopefully prevent from wasting food.
                    </p>
                    <br />
                    <h4>About me</h4>
                    <p>
                        My name is Asia and I am learning programming. Having completed my studies in Civil Engineering at the Poznań University of Technology and after working in my profession for several years, I decided to change the industry. This is my second project that I made using the React.js library. This website was created mainly to practice using React Redux. 
                    </p>
                    <br />
                    <p>
                        The creation of this website would not be possible without the help of my brother - Kuba. He spent a lot of his time teaching me the basics of programming and creating the back-end necessary for this site to function.
                    </p>
                </div>
            </div>
        );
    }

}