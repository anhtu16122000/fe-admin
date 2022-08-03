import { Box, FormControlLabel, TextField, makeStyles, useTheme, FormControl } from '@material-ui/core'
import { Input, Stack, Checkbox, Link, Button, FormHelperText } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import React from 'react'
import { useDispatch } from 'react-redux'
import userSlice from '../../../redux/reducers/userSlice'
import MyButton from '../../../components/common/MyButton'

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
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(userSlice.actions.logout())
  }

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
      dispatch(userSlice.actions.request(value))
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} noValidate autoComplete="on" >
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
            {(formik.touched.email && formik.errors.email) || " "}
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
            {(formik.touched.password && formik.errors.password) || " "}
          </FormHelperText>
          <Box className={classes.savePassword}>
            <FormControlLabel
              control={<Checkbox color="secondary" />}
              label="Lưu đăng nhập"
            />
            <Link sx={{ cursor: 'pointer', textDecoration: 'none', color: '#673ab7', fontSize: 16, }}
              onClick={e => {
                e.preventDefault()
                navigate("/auth/forgot-password")
              }}
            >
              Quên mật khẩu?
            </Link>
          </Box>
          <MyButton type="submit"  variant="contained" color="secondary" >Đăng nhập</MyButton>
          <Button type="button" variant="contained" color="secondary" onClick={handleLogout}>Đăng xuất</Button>
        </FormControl>
      </Stack>
    </form>
  )
}

export default FormLogin