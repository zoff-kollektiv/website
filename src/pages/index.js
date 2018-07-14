import React, { Fragment } from 'react'
import { withI18n } from '@lingui/react'

import Hello from '../components/hello'
import Imprint from '../components/imprint'
import What from '../components/what'

const IndexPage = ({ i18n }) => (
  <Fragment>
    <Hello title="Zoff" />
    <What
      paragraphs={[
        'Zoff ist ein berliner Kollektiv, welches visuelle Kommunikationswerkzeuge im Kontext von politischen, sozialen, kulturellen und Bildungsprojekten entwickelt.',
      ]}
    />
    <Imprint />
  </Fragment>
)

export default withI18n()(IndexPage)
