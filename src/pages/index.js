import React, { Fragment } from 'react'
import { withI18n } from '@lingui/react'

import Hello from '../components/hello'
import Imprint from '../components/imprint'
import What from '../components/what'

const IndexPage = ({ i18n }) => (
  <Fragment>
    <Hello title="Zoff" />
    <What />
    <Imprint />
  </Fragment>
)

export default withI18n()(IndexPage)
