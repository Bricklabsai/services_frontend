'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { resetUserStateValues, signin } from "../../../../redux/slices/auth/authSlice";

function Page() {
    const router = useRouter(); 
    const dispatch = useDispatch()

    // handle submit
    const submitLoginDetails = (values, actions) => {
        dispatch(signin({
            email: values.email,
            password: values.password
        }))
   
        // router.replace('/dashboard')
    }

    // retrieve data from store
    const { user, isUserLoading, isUserError, isUserSuccess, isUserMessage } = useSelector((state) => state.auth)

    // console.log(isUserMessage)

    // handle user object changes
    useEffect(() => {
        if(isUserError){
            toast.error(isUserMessage, {
                position: 'top-center',
                // autoClose: false
            })
        }

        if(isUserSuccess && user){
            router.replace('/dashboard')
        }

        dispatch(resetUserStateValues())
    }, [isUserError, isUserSuccess, isUserMessage, user, dispatch, router])

    // validation schema
    const loginSchema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup.string().required('Password is required')
    })

    // formik form validation
    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: submitLoginDetails
    })


    const handleRegisterClick = () => {
        router.push('/auth/register');
    }
  return (
     <section className="bg-gray-50 dark:bg-gray-900">
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" width={100}  
                    height={32} />
          Bricklabsai    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form  onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={values.email} 
                            onChange={handleChange} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password"
                             name="password"
                             id="password" 
                             placeholder="••••••••" 
                             value={values.password} 
                             onChange={handleChange} 
                             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input 
                                id="remember" 
                                aria-describedby="remember" 
                                type="checkbox" 
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="/auth/forgotpass" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? 
                      <span 
                        onClick={handleRegisterClick} 
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                        Sign up
                    </span>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Page
