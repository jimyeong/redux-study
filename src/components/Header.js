import React, {useState, useEffect} from "react";
import SideBar from "./SideBar";
import {connect} from "react-redux";
import Action from "../redux/actions";


function Header(props) {
    const {dispatch, isSidebarOpen} = props;
    console.log(props)

    return (
        <React.Fragment>
            <div className="Header">
                <div className="btnSideBar" onClick={() => dispatch(Action.Creators.updateState({isSidebarOpen: true}))}>
                    menu
                </div>
                <div className="btnPopup" onClick={()=> dispatch(Action.Creators.updateState({mainPopup:true}))}>notice</div>
            </div>

            <SideBar
                isSidebarOpen={isSidebarOpen}
                dispatch={dispatch}/>

        </React.Fragment>
    );
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(Header);

