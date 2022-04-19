import { Box, FormControlLabel, TextField, makeStyles, useTheme, FormControl } from '@material-ui/core'
import { Input, Stack, Checkbox, Link, Button, FormHelperText } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import React from 'react'

const useStyle = makeStyles(theme => ({
  savePassword: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))

const FormLogin = () => {
  const theme = useTheme()
  const classes = useStyle()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('vui lòng nhập đúng email').required('vui lòng nhập vào email'),
      password: Yup.string().required("vui lòng nhập vào mật khẩu")
    }),
    onSubmit: (value) => {
      console.log('submit', value)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} noValidate autoComplete="off" >
      <Stack minWidth={350}>
        <FormControl >
          <TextField name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            label="Email"
            variant="filled"
            error={formik.touched.email && formik.errors.email}
          />
          <FormHelperText error >
            { (formik.touched.email && formik.errors.email) || " "}
          </FormHelperText>
          <TextField name="password"
            type="password"
            label="Mật khẩu"
            variant="filled"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />
          <FormHelperText error>
            {( formik.touched.password && formik.errors.password) || " "}
          </FormHelperText>
          <Box className={classes.savePassword}>
            <FormControlLabel
              control={<Checkbox color="secondary" />}
              label="Lưu đăng nhập"
            />
            <Link sx={{ cursor: 'pointer', textDecoration: 'none', color: theme.palette.primary.main, fontSize: 16, }}
              onClick={ e => {
                e.preventDefault()
                navigate("/auth/forgot-password")
              }}
            >
              Quên mật khẩu?
            </Link>
          </Box>
          <Button type="submit" variant="contained" color="secondary">Đăng nhập</Button>
        </FormControl>
      </Stack>
    </form>
  )
}

export default FormLogin