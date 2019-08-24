import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './App';

class Root extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/users" component={Home}/>
                        <Route exact path="/posts" component={Home}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default Root;