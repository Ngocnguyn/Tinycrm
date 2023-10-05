import * as yup from 'yup'

export const FormUserSchema = yup.object({
  userName: yup.string().required('User name is required'),
  fullName: yup.string().required('Full name is required'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Password is required')
})

export type FormUserType = yup.InferType<typeof FormUserSchema>
