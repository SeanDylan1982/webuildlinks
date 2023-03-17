import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'
import Pricing from '../../components/Pricing/Pricing.js'
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation.js'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.js'

const HomePage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'WeBuildWebs' })}>
      <Typography>{intl.formatMessage({ id: ' ' })}</Typography>
      <BreadCrumbs />
      <Pricing />
      <BottomNavigation />
    </Page>
  )
}
export default HomePage
