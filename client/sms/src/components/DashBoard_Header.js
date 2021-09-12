import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '../styles.module.css';

const DashBoard_Header = ({ name }) => {
    const history = useHistory();
    return (
        <div className={styles.teacher_container_header}>
            <button onClick={() => history.push('/') } >Sign Out</button>
            <h1>{`Hello ${name}`}</h1>
        </div>
    )
}

export default DashBoard_Header;
