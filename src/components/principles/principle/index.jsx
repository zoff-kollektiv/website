import React from 'react';

import styles from './styles';

const Project = ({ title, index }) => (
    <div className="principle">
        <style jsx>{styles}</style>
        <h2 className="principle__title">
            <small className="principle__title-index">
                {index < 10 ? '0' + index : index}
            </small>

            <span className="principle__title-text">
                {title}
            </span>
        </h2>
    </div>
)

export default Project;
