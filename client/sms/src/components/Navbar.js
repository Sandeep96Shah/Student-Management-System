import React, { Component } from 'react';
// import { BrowserRouter as Router} from "react-router-dom";
import { Link } from 'react-router-dom';

import styles from '../styles.module.css';
import logo from '../images/logo.jpg';

class Navbar extends Component {
    render() {
        // const { handleSignup, handleTeacher, handleStudent, handleFrontPage } = this.props;
        return (
            <div className={styles.navbar}>
                <Link to="/"><div className={styles.company_logo}>
                    <img src={logo} alt="logo" />
                </div></Link>               
                    <div className={styles.user}>
                        <Link to="/sign_up"><div className={styles.user_nav} ><h3>Sign UP</h3></div></Link>
                        <Link to="/teacher_sign_in"><div className={styles.user_nav} ><h3>Teacher</h3></div></Link>
                        <Link to="/student_sign_in"><div className={styles.user_nav} ><h3>Student</h3></div></Link>
                    </div>
                
            </div>
        )
    }
}

export default Navbar
