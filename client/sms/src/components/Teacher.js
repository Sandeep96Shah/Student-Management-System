import React, { Component } from 'react'
import styles from '../styles.module.css';
import CreateAssignment from './CreateAssignment';
import CreatedAssignment from './CreatedAssignment';
import SubmittedAssignment from './SubmittedAssignment';

class Teacher extends Component {
    render() {
        return (
            <div className={styles.teacher_container}>
                <h1>Hello Sandeep Shah</h1>
                <CreateAssignment />
                <CreatedAssignment />
                <SubmittedAssignment />
            </div>
        )
    }
}

export default Teacher
