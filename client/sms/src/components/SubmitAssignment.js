import React from 'react'
import styles from '../createAssignment.module.css';

const SubmitAssignment = ({title}) => {
    return (
        <div className={styles.create_assignment}>
            <div className={styles.header}>
                <h1>{title}</h1>
            </div>
            <div className={styles.form_outer}>
                <form className={styles.form_container}>
                    <label htmlFor="file" className={styles.label_field}>File</label>
                    <input 
                        type="file"
                        name="file"
                        className={styles.input_field}
                    />
                    <div className={styles.submit_container}>
                    <input 
                        type="submit"
                        value="Submit"
                        className={styles.input_field}
                    />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SubmitAssignment;