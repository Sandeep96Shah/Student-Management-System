import React from 'react'
import styles from '../createAssignment.module.css';

const CreateAssignment = ({title}) => {
    return (
        <div className={styles.create_assignment}>
            <div className={styles.header}>
                <h1>{title}</h1>
            </div>
            <div className={styles.form_outer}>
                <form className={styles.form_container}>
                    <label htmlFor="subject" className={styles.label_field}>Subject</label>
                    <input 
                        type="text"
                        name="subject"
                        className={styles.input_field}
                    />
                    <label htmlFor="description" className={styles.label_field}>Description</label>
                    <textarea
                        rows="3"
                        name="description"
                        className={styles.textarea_field}
                    ></textarea>
                    <label htmlFor="deadLine" className={styles.label_field}>DeadLine</label>
                    <input 
                        type="date"
                        name="deadLine"
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

export default CreateAssignment;