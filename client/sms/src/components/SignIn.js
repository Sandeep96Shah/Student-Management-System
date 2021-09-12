import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import styles from '../createAssignment.module.css';
import Navbar from './Navbar';
//checking

const SubmitAssignment = ({title, role}) => {
    return (
        <>
        {/* <Navbar /> */}
        <Navbar />
        <div className={`${styles.create_assignment} ${styles.container_height}`}>
            <div className={styles.header}>
                <h1>{title}</h1>
            </div>
            <div className={styles.form_outer}>
                <form className={styles.form_container}>
                    <label htmlFor="email" className={styles.label_field}>Email</label>
                    <input 
                        type="email"
                        name="email"
                        className={styles.input_field}
                    />
                    <label htmlFor="password" className={styles.label_field}>Password</label>
                    <input 
                        type="password"
                        name="password"
                        className={styles.input_field}
                    />
                    <div className={styles.submit_container}>
                    {
                        role == "teacher" ? 
                            <Link to="/teacher">
                                <input 
                                type="submit"
                                value="Submit"
                                className={styles.input_field}
                            /></Link> : 
                            <Link to="/student">
                                <input 
                                type="submit"
                                value="Submit"
                                className={styles.input_field}
                            /></Link>
                    }
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default SubmitAssignment;