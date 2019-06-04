import React, {useState, useEffect} from "react";
import Action from "../redux/actions";
import cn from "classnames";

function SideBar(props) {
    const {
        dispatch,
        isSidebarOpen
    } = props;

    return (
        <div className={cn("SideBar", {isSidebarOpen})}>
            <div onClick={() => dispatch(Action.Creators.updateState({isSidebarOpen: false}))}  className="btnClose">close</div>
        </div>
    );
}

export default SideBar;
