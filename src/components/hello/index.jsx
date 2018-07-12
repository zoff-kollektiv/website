import React from 'react';
import styled from 'styled-components';

import { color } from '../../tokens';

const Section = styled.section`
    border: 3px solid ${color};
`;

export default ({ text }) => (
    <Section>
        {text}
    </Section>
);
