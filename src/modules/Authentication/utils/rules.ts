import * as yup from 'yup'

export const FormLoginSchema = yup.object({
  userNameOrEmail: yup.string().required('Vui lòng nhập email !'),
  password: yup.string().required('Vui lòng nhập mật khẩu !')
})

export type FormLoginType = yup.InferType<typeof FormLoginSchema>
