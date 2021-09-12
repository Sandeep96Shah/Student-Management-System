import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';

const DashBoard_SideBar = ({title, option1, option2, option3}) => {
    return (
        <div className={styles.teacher_container_link}>
                <h3>Assignment:</h3>
                {
                    option1 == "Create" ? 
                    <Link to="/teacher"><div className={`${styles.assignment_state} ${title === `${option1} Assignment` ? styles.bg_blue : null}`} >
                    <p>{option1}</p>
                    </div></Link> : 
                    <Link to="/student"><div className={`${styles.assignment_state} ${title === `${option1} Assignment` ? styles.bg_blue : null}`} >
                    <p>{option1}</p>
                    </div></Link>
                }
                <Link to="/dashboard_assignment"><div className={`${styles.assignment_state} ${title === `${option2} Assignment` ? styles.bg_blue : null}`} >
                    <p>{option2}</p>
                </div></Link>
                <Link to="/dashboard_assignment_assignment"><div className={`${styles.assignment_state} ${title === `${option3} Assignment` ? styles.bg_blue : null}`} >
                    <p>{option3}</p>
                </div></Link>
        </div>
    )
}

export default DashBoard_SideBar;
