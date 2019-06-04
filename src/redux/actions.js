const Action = {
    Types: {
        HANDLE_SIDEBAR: "HANDLE_SIDEBAR",
        UPDATE_STATE: "UPDATE_STATE"
    },
    Creators: {
        updateState:(props) => ({
            type: Action.Types.UPDATE_STATE,
            props

        })

    }
};

export default Action;