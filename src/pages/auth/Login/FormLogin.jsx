import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core'
import { InputLabel, FormControl, FormHelperText, OutlinedInput, TextField } from '@mui/material'


// style constant
const useStyles = makeStyles((theme) => ({
    redButton: {
        fontSize: '1rem',
        fontWeight: 500,
        backgroundColor: theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.grey[100],
        color: theme.palette.grey[700],
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem'
        }
    },
    signDivider: {
        flexGrow: 1
    },
    signText: {
        cursor: 'unset',
        margin: theme.spacing(2),
        padding: '5px 56px',
        borderColor: theme.palette.grey[100] + ' !important',
        color: theme.palette.grey[900] + '!important',
        fontWeight: 500
    },
    loginIcon: {
        marginRight: '16px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '8px'
        }
    },
    loginInput: {
        ...theme.typography.customInput
    }
}))

const FormLogin = (props, { ...others }) => {

    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Vui lòng nhập vào email')
                               .required('Vui lòng nhập vào email'),
            password: Yup.string().required('Vui lòng nhập vào password')
        })
    })

    return (
        <React.Fragment>
            <form noValidate {...others} autoComplete="off">
                <FormControl fullWidth error={Boolean(formik.touched.email && formik.errors.email)} className={classes.loginInput}>
                    <InputLabel htmlFor="outlined-adornment-email-login">Email</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-email-login"
                        type="email"
                        value={formik.values.email}
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        label="Email Address"
                        inputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline
                            }
                        }}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                            {' '}
                            {formik.errors.email}{' '}
                        </FormHelperText>
                    )}
                </FormControl>

            </form>
        </React.Fragment>
    )
}

export default FormLogin