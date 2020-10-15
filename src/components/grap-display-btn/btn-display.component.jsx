import React from 'react';

import {connect } from 'react-redux';
import {showGraphAction} from '../../redux/actions/showgraph.actio';

const BtnDisplay = ({showGraph}) => {

    return(
        <button onClick={showGraph}>show graph</button>
    )
}

const mapDispatchToProps = dispatch => ({
    showGraph: () => dispatch(showGraphAction())
}) 
export default connect(null, mapDispatchToProps)(BtnDisplay);