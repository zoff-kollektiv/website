import React, { Fragment } from 'react';
import { withI18n } from '@lingui/react';

import Hello from '../components/hello';

const IndexPage = ({ i18n }) => (
  <Hello title="Zoff" />
);

export default withI18n()(IndexPage)
