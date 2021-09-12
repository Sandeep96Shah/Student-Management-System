import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import styles from '../styles.module.css';
import CreateAssignment from '../components/CreateAssignment';
import Assignment from '../components/Assignment';
import DashBoardSideBar from '../components/DashBoard_SideBar';
import DashBoardHeader from '../components/DashBoard_Header';

class Teacher extends Component {
    constructor(){
        super();
        this.state={
            displayForm:true,
            displayAssignment:false,
            title:"Create Assignment",
        }
    }

    render() {
        const { title } = this.state;
        return (
            <div className={styles.teacher_container}>
                {/* <Router> */}
                    <DashBoardSideBar 
                        title={title}
                        option1={"Create"}
                        option2={"Pending"}
                        option3={"Evaluated"}
                    />
                    <DashBoardHeader name={"Sandeep Shah"} />
                    <Switch>
                        <Route exact path="/teacher" component={() =>  <CreateAssignment title={"Create Assignment"}/> }/>
                        <Route exact path="/dashboard_assignment" component={() =>  <Assignment title={"Pending Assignment"}/> }/>
                        <Route exact path="/dashboard_assignment_assignment" component={() =>  <Assignment title={"Evaluated Assignment"}/> }/>
                    </Switch>
                {/* </Router> */}
            </div>
        )
    }
}

export default Teacher
