import React, { Component } from 'react'
import styles from '../styles.module.css';

import Navbar from './Navbar';
import SignUp from './Sign_Up';
import TeacherSignIn from './Teacher_Sign_In';
import StudentSignIn from './Student_Sign_In';

class FrontPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             signup:false,
             teacher:false,
             student:false,
        }
    }
    
    handleSignup = () => {
        this.setState({
            signup:true,
            teacher:false,
            student:false,
        });
    }

    handleTeacher = () => {
        this.setState({
            signup:false,
            teacher:true,
            student:false,
        });
    }

    handleStudent = () => {
        this.setState({
            signup:false,
            teacher:false,
            student:true,
        });
    }

    handleFrontPage = () => {
        this.setState({
            signup:false,
            teacher:false,
            student:false,
        });
    }

    render() {
        const { signup, teacher, student } = this.state;
        return (
            <div>
                <Navbar
                    handleSignup={this.handleSignup}
                    handleTeacher={this.handleTeacher}
                    handleStudent={this.handleStudent}
                    handleFrontPage={this.handleFrontPage}
                />
                <div className={styles.front_page}>
                    { signup && <SignUp /> }
                    { teacher && <TeacherSignIn /> }
                    { student && <StudentSignIn /> }
                </div>
            </div>
        )
    }
}

export default FrontPage;
