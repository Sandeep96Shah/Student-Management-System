import React, { Component } from 'react'
import styles from '../styles.module.css';

class Sign_Up extends Component {
    render() {
        return (
            <div className={styles.user_outer_container}>
                <div className={styles.user_container}>
                    <div className={styles.user_header}>
                        <h1>Sign Up Form</h1>
                    </div>
                    <div className={styles.user_form}>
                        <form>
                            <input 
                                type="text"
                                name="role"
                                placeholder="Role"
                                list="opt"
                            />
                            <datalist id="opt">
                            <option>Teacher</option>
                            <option>Student</option>
                            </datalist>
                             <input 
                                type="text"
                                name="subject"
                                placeholder="Subject"
                            />
                             <input 
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                             <input 
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                             <input 
                                type="password"
                                name="passsword"
                                placeholder="Password"
                            />
                             <input 
                                type="password"
                                name="confirm_password"
                                placeholder="Confirm Password"
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
