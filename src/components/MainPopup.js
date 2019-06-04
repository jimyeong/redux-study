import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import Action from "../redux/actions";

function MainPopup (props) {
  
  const {dispatch} = props;
  
  return (
          <div className="MainPopup">
            MainPopup
              <div className="btnClose" onClick={() => dispatch(Action.Creators.updateState({mainPopup: false}))}>닫기</div>
          </div>
      )
}

export default connect(state => ({...state}), dispatch => ({dispatch}))(MainPopup);