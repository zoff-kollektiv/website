import React, { Fragment } from 'react'
import { withI18n } from '@lingui/react'

import Hello from '../components/hello'
import Imprint from '../components/imprint'

const IndexPage = ({ i18n }) => (
  <Fragment>
    <Hello title="Zoff" />
    <Imprint />
  </Fragment>
)

export default withI18n()(IndexPage)
