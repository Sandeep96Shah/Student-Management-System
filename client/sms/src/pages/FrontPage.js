import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import styles from '../styles.module.css';
import Navbar from '../components/Navbar';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import Student from './Student';
import Teacher from './Teacher';


class FrontPage extends Component {
    render() {
        return (
            <div>
                {/* <Router> */}
                    <Navbar />
                    <div>   
                        {/* <Switch> */}
                            {/* <Route exact path="/sign_up" component={() =>  <SignUp title={"SignUp Form"} /> }/>
                            <Route exact path="/teacher_sign_in" component={() =>  <SignIn title={"Teacher SignIn"} role={"teacher"} /> }/>
                            <Route exact path="/student_sign_in" component={() =>  <SignIn title={"Student SignIn"} role={"student"} /> }/> */}
                            {/* <Route exact path="/student" component={() =>  <Student /> }/>
                            <Route exact path="/teacher" component={() =>  <Teacher /> }/>                        */}
                        {/* </Switch> */}
                    </div>
                {/* </Router> */}
            </div>
        )
    }
}

export default FrontPage;
