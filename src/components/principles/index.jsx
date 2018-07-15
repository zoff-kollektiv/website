import React from 'react';

import Principle from './principle';
import styles from './styles';

const Principles = ({ edges }) => (
    <section className="principles">
        <style jsx>{styles}</style>

        <h2 className="principles__title">Prinzipien</h2>

        <ul className="principles__list">
            {edges && edges.map((_, index) => <li className="principles__list-item"><Principle key={_.node.frontmatter.title} index={index + 1} {..._.node.frontmatter} /></li>)}
        </ul>
    </section>
);

export default Principles;
