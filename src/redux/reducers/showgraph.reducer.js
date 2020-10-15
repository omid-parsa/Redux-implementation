const INITIAL_STATE = {
    hidden: false
}

const showGraph = (state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'SHOW_HIDE_GRAPH':
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}

export default showGraph;