import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import MainPopup from "./components/MainPopup";
import {connect} from "react-redux";



function App(props) {

    const {
        mainPopup
    } = props;

    return (
        <div className="App">
            <Header/>
            {
                mainPopup && <MainPopup/>

            }
        </div>
    )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(App);
