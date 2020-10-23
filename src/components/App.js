import React from 'react';
import {connect} from 'react-redux'
import { notify } from "../redux/actions/";

function App(props) {
    const {notify} = props;
    return (
        <div>
            <button className='btn btn-primary' onClick={notify}>do that</button>
            {props.bahruz}
        </div>
    );
}

const mapStateToProps = ({bahruz, murad}) => {
    return {bahruz, murad}
}

export default connect(mapStateToProps , {notify})(App);
