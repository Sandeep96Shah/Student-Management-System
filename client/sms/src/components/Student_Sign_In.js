import React, { Component } from 'react'
import styles from '../styles.module.css';

class Sign_Up extends Component {
    render() {
        return (
            <div className={styles.user_outer_container}>
                <div className={styles.user_container}>
                    <div className={styles.user_header}>
                        <h1>Student SignIn</h1>
                    </div>
                    <div className={styles.user_form}>
                        <form>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                             <input 
                                type="submit"
                                id="submit"
                                value="Submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sign_Up
