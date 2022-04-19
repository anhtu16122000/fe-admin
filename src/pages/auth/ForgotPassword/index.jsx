import { Box, Button, Container, Divider, FormControl, Link, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FormHelperText, makeStyles } from '@material-ui/core'
import React from 'react'
import ContainerAuth from '../ContainerAuth'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import NavMotion from '../../../layout/NavMotion'

const useStyle = makeStyles(theme => {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      margin: '0 150px',
      [theme.breakpoints.down('md')]: {
        margin: '30px',
      }

    }
  }
})

const ForgotPassword = () => {

  const classes = useStyle()
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Vui lòng nhập đúng định dạng email").required('Vui lòng nhập vào email')
    }),
    onSubmit: (value) => {
      console.log('handlesubmit', value)
    }
  })

  return (
    <ContainerAuth>
      <Box className={classes.container} >
        <Container maxWidth={200} >
          <NavMotion>
            <Box>
              <Typography variant='h4' align='center' mb={2} sx={{ color: theme.palette.secondary.main, fontSize: '24px' }}  >
                Quên mật khẩu?
              </Typography>
              <Typography align='center' fontWeight={'200'} sx={{ fontSize: 16 }}>
                Vui lòng nhâp vào email, chúng tôi sẽ cung cấp mã OPT thông qua email này
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <FormControl sx={{ width: matchDownMd ? '100%' : '90%', marginTop: 4, marginLeft: matchDownMd ? 0 : 2, marginRight: matchDownMd ? 0 : 2 }}>
                  <TextField variant="filled"
                    label="Email của bạn"
                    color="secondary"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.email && formik.errors.email}
                  />
                  <FormHelperText error>
                    {" "}
                    {formik.touched.email && formik.errors.email}
                  </FormHelperText>
                  <Button type="submit" variant="contained" color="secondary" sx={{ marginTop: 3, marginBottom: 1 }} >
                    Gửi tới mail này
                  </Button>
                  <Divider sx={{ margin: '30px 0', }} />
                  <Link sx={{ cursor: 'pointer', textAlign: 'center', textDecoration: 'none', color: theme.palette.secondary.main, fontSize: 16 }}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/auth/login')
                    }}
                  >
                    Quay về đăng nhập?
                  </Link>
                </FormControl>
              </form>
            </Box>
          </NavMotion>

        </Container>
      </Box>
    </ContainerAuth>
  )
}

export default ForgotPassword