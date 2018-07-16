import React from 'react';

import styles from './styles';

const What = ({ paragraphs }) => (
    <section className="what">
        <style jsx>{styles}</style>

        {paragraphs.map(_ => <p key={_} className="what__paragraph">{_}</p>)}
    </section>
);

export default What;
