import React, { Component } from 'react'
import styles from '../styles.module.css';

class CreateAssignment extends Component {
    render() {
        return (
            <div className={styles.assignment_form}>
                    <div className={styles.assignment_form_container}>
                        <div className={styles.user_header}>
                            <h1>Create Assignment</h1>
                        </div>
                        <div className={styles.user_form}>
                            <form>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                />

                                <textarea
                                    rows="3"
                                    name="description"
                                    placeholder="Description"
                                ></textarea>

                                <input
                                    type="text"
                                    name="deadLine"
                                    placeholder="DeadLine"
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

export default CreateAssignment
