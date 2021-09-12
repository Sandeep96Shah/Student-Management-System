import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import styles from '../styles.module.css';
import Assignment from '../components/Assignment';
import SubmitAssignment from '../components/SubmitAssignment';
import DashBoardSideBar from '../components/DashBoard_SideBar';
import DashBoardHeader from '../components/DashBoard_Header';

class Student extends Component {
    constructor(){
        super();
        this.state={
            title:"Submit Assignment",
        }
    }

    render() {
        const { title } = this.state;
        return (
            <div className={styles.teacher_container}>
                {/* <Router> */}
                    <DashBoardSideBar 
                        title={title}
                        option1={"Submit"}
                        option2={"Latest"}
                        option3={"Submitted"}
                    />
                    <DashBoardHeader name={"Sandeep Kumar Shah"} />
                    <Switch>
                        <Route exact path="/student" component={() =>  <SubmitAssignment title={"Submit Assignment"}/> } />
                        <Route exact path="/dashboard_assignment" component={() =>  <Assignment title={"Latest Assignment"}/> }/>
                        <Route exact path="/dashboard_assignment_assignment" component={() =>  <Assignment title={"Submitted Assignment"}/> }/>
                    </Switch>
                {/* </Router> */}
            </div>
        )
    }
}

export default Student
