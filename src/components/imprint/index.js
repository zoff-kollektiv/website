import React from 'react';

import styles from './styles';

const Imprint = () => (
    <address className="imprint">
        <style jsx>{styles}</style>

        <span className="imprint__line">Zoff</span>
        <span className="imprint__line">Lausitzer Straße 22</span>
        <span className="imprint__line">10999 Berlin</span>
    </address>
);

export default Imprint;
