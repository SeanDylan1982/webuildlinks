import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import StarIcon from '@mui/icons-material/StarBorder'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import GlobalStyles from '@mui/material/GlobalStyles'
import Container from '@mui/material/Container'

function Copyright (props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        WeBuildWebs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const tiers = [
  {
    title: 'Single Page Website',
    subheader: 'A great start',
    price: '950',
    description: [
      'Single Page Brochure Design',
      'Google Maps Registration',
      'Ordering/Messaging Feature',
      'Contact Info with Links'
    ],
    buttonText: 'Get in contact today!',
    buttonVariant: 'outlined'
  },
  {
    title: 'Website & Socials',
    subheader: 'Most popular',
    price: '1500',
    description: [
      'Single Page Brochure Website',
      'Google Maps Registration',
      'Ordering/Messaging Feature',
      'Contact Info with Links',
      '3 x Social Media Accounts',
      'Setup, customized & linked to your website!'
    ],
    buttonText: 'Get started today!',
    buttonVariant: 'contained'
  },
  {
    title: 'Monthly Website & Socials Management',
    subheader: 'Premium Service',
    price: '500p/m',
    description: [
      'Weekly posts to 3 socials',
      'Once a month product updates',
      'Access to analytics reports',
      'Phone & email support'
    ],
    buttonText: 'Contact us now!',
    buttonVariant: 'outlined'
  }
]

const footers = [
  {
    title: 'Company',
    description: ['Home', 'About us', 'Contact us', 'Locations']
  },
  {
    title: 'Features',
    description: [
      'Domain name included',
      '1 Year free hosting',
      'Free Stock Imagery',
      'Modern design',
      'Advanced features available'
    ]
  },
  {
    title: 'Portfolio',
    description: [
      'Venda Brothers Chysa Nyama',
      'Business Dashboard',
      'Tablet Home Page',
      'Source code available'
    ]
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
]

function PricingContent () {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth='sm'
        component='main'
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='text.primary'
          gutterBottom
        >
          Connecting you where it really counts
        </Typography>
        <Typography
          variant='h5'
          align='center'
          color='text.secondary'
          component='p'
        >
          <ul>
            <li>Professional, affordable business web design</li>
            <li>Professional management of your website and socials</li>
            <li>Fixed pricing, no contracts and no hidden costs!</li>
          </ul>
          <h3>That's what we do!</h3>
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} alignItems='flex-end'>
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={
                tier.title === 'Monthly Website & Socials Management' ? 12 : 6
              }
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={
                    tier.title === 'Website & Socials' ? <StarIcon /> : null
                  }
                  subheaderTypographyProps={{
                    align: 'center'
                  }}
                  sx={{
                    backgroundColor: theme =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700]
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2
                    }}
                  >
                    <Typography
                      component='h2'
                      variant='h3'
                      color='text.primary'
                    >
                      R{tier.price}
                    </Typography>
                    <Typography
                      variant='h6'
                      color='text.secondary'
                    ></Typography>
                  </Box>
                  <ul>
                    {tier.description.map(line => (
                      <Typography
                        component='li'
                        variant='subtitle1'
                        align='center'
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth='md'
        component='footer'
        sx={{
          borderTop: theme => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6]
        }}
      >
        <Grid container spacing={4} justifyContent='space-evenly'>
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant='h6' color='text.primary' gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href='#' variant='subtitle1' color='text.secondary'>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  )
}

export default function Pricing () {
  return <PricingContent />
}
