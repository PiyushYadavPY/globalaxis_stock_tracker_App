"use client"
import FooterLink from "@/components/forms/FooterLink"
import InputField from "@/components/forms/InputField"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

const SignIn = () => {
  const {register, handleSubmit, control, formState : {errors, isSubmitting}} = useForm<SignInFormData>({
    defaultValues:{
      email:'',
      password:''
    },
    mode:'onBlur'
  })
  const onSubmit = (data: SignInFormData) => {
    try{
      console.log(data);
    }catch(error){
      console.error(error)
    }
  }
  return (
    <>
    <h1 className="form-title">Welcome Back</h1>
    <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <InputField
      name="email"
      label="Email"
      placeholder="johndoe@gmail.com"
      register={register}
      error={errors.email}
      validation={{required: 'Email is required', pattern:/^\w+@\w+\.\w+$/, message:'Email adress is required'}}
      />
      <InputField
      name="password"
      label="Password"
      placeholder="Enter a strong password"
      type='password'
      register={register}
      error={errors.password}
      validation={{required: 'Password is required', minLength:8}}
      />
      <Button className='yellow-btn w-full mt-5'>
        {isSubmitting ? 'Signing In' : 'Sign In'}
      </Button>
      <FooterLink text="Dont have an account?" linkText="Create an Account" href="sign-up"/>
    </form>
      </>
  )
}

export default SignIn