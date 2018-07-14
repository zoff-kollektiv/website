import React from 'react';

const Imprint = () => (
    <address className="imprint">
        <style jsx>{`
            .imprint {
                align-items: center;
                display: flex;
                flex-direction: column;
                font-style: normal;
                height: 100vh;
                justify-content: center;
            }

            .imprint__line {
                display: block;
            }
        `}</style>

        <span className="imprint__line">Zoff</span>
        <span className="imprint__line">Lausitzer Straße 22</span>
        <span className="imprint__line">10999 Berlin</span>
    </address>
);

export default Imprint;
