import Action from "./actions"

const INITIAL_STATE = {
    isSidebarOpen: false,
    mainPopup: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Action.Types.UPDATE_STATE : {
            return {
                ...state,
                ...action.props
            }
        }
        default:
            return state;
    }
}

