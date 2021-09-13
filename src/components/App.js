import React from 'react';
import {connect} from 'react-redux'
import { testAction } from "../redux/actions/";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Routing from "./Layout/Routing/Routing";


function App(props) {
    const {testAction} = props;
    return (
        <div>
            <Header/>
            <Routing/>
            <Footer/>
        </div>
    );
}

const mapStateToProps = ({testReducer}) => {
    return {testReducer}
}

export default connect(mapStateToProps , {testAction})(App);
