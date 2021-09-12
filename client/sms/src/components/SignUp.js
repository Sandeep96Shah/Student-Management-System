import React from 'react'
import styles from '../createAssignment.module.css';
import Auth from './Auth';
import Navbar from './Navbar';
//checking

const SignUp = (props) => {
    const title = props.title;
    const handleSubmit = () => {
        Auth.login(() => {
            this.props.history.push('/student')
        })
    }
    return (
        <div>
            {/* <Navbar /> */}
            <Navbar />
        <div className={`${styles.create_assignment} ${styles.container_height} ${styles.container_scroll}`}>
            <div className={styles.header}>
                <h1>{title}</h1>
            </div>
            <div className={styles.form_outer}>
                <form className={styles.form_container}>
                    <label htmlFor="role" className={styles.label_field}>Role</label>
                    <input 
                        type="text"
                        name="role"
                        list="opt"
                        className={styles.input_field}
                    />
                    <datalist id="opt">
                    <option>Teacher</option>
                    <option>Student</option>
                    </datalist>
                    <label htmlFor="subject" className={styles.label_field}>Subject</label>
                    <input 
                        type="text"
                        name="subject"
                        className={styles.input_field}
                    />
                    <label htmlFor="name" className={styles.label_field}>Name</label>
                    <input 
                        type="text"
                        name="name"
                        className={styles.input_field}
                    />
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
                    <label htmlFor="confirm_password" className={styles.label_field}>Confirm Password</label>
                    <input 
                        type="password"
                        name="confirm_password"
                        className={styles.input_field}
                    />
                    <div className={styles.submit_container}>
                    <input 
                        type="submit"
                        value="Submit"
                        className={styles.input_field}
                        onClick={() => this.handleSubmit()}
                    />
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default SignUp;