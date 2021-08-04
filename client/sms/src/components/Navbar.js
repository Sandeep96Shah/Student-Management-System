import React, { Component } from 'react'
import styles from '../styles.module.css';

class Navbar extends Component {
    render() {
        const { handleSignup, handleTeacher, handleStudent, handleFrontPage } = this.props;
        return (
            <div className={styles.navbar}>
                <div className={styles.company_logo} onClick={ () => handleFrontPage() }>
                
                </div>
                <div className={styles.user}>
                    <div className={styles.user_nav} onClick={ () => handleSignup() }><h3>Sign UP</h3></div>
                    <div className={styles.user_nav} onClick={ () => handleTeacher() }><h3>Teacher</h3></div>
                    <div className={styles.user_nav} onClick={ () => handleStudent() }><h3>Student</h3></div>
                </div>
            </div>
        )
    }
}

export default Navbar
