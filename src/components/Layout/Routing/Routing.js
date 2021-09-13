import React, {useContext, useEffect, useState , useCallback} from "react";
import { Switch, Route, __RouterContext } from "react-router";
import Home from "../../Pages/Home/Home";
function Routing(props) {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    );
}

Routing.propTypes = {};
Routing.defaultProps = {};

export default Routing;
