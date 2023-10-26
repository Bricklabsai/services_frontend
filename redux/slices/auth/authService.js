"use client" 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  user: null,
  Register: null,

//   changepassword: null,
//   forgotpassword: null,
//   activate_user: null,
//   resendactivationlink: null,
//   reset_password: null,

    // user login
    isUserError: false,
    isUserSuccess: false,
    isUserLoading: false,
    isUserMessage: '',

    // user register
    isRegisterError: false,
    isRegisterSuccess: false,
    isRegisterLoading: false,
    isRegisterMessage: '',



    // // change password
    // isChangePasswordError: false,
    // isChangePasswordSuccess: false,
    // isChangePasswordLoading: false,
    // isChangePasswordMessage: '',

    // // forgot password
    // isForgotPasswordError: false,
    // isForgotPasswordSuccess: false,
    // isForgotPasswordLoading: false,
    // isForgotPasswordMessage: '',

    // // activate user
    // isActivateUserError: false,
    // isActivateUserSuccess: false,
    // isActivateUserLoading: false,
    // isActivateUserMessage: '',

    // // resend activation link
    // isResendActivationLinkError: false,
    // isResendActivationLinkSuccess: false,
    // isResendActivationLinkLoading: false,
    // isResendActivationLinkMessage: '',

    // // reset password
    // isResetPasswordError: false,
    // isResetPasswordSuccess: false,
    // isResetPasswordLoading: false,
    // // isResetPasswordMessage: '',
}

// allow all users to sign in
export const signin = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const response = await authService.signin(userData)

        if(response.error){
            return thunkAPI.rejectWithValue(response.error)
        }

        return response
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// register organization admin user
export const register = createAsyncThunk('auth/register', async (adminData, thunkAPI) => {
    try {
        const response = await authService.admin(adminData)

        if(response.error){
            return thunkAPI.rejectWithValue(response.error)
        }
        return response
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



// Enable any user to change password
// export const changepassword = createAsyncThunk('auth/changepassword', async (user, thunkAPI) => {
//     try {
//         return await authService.changepassword(user)
//     } catch(error) {
//         console.error(error)
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// // Enable any user to change password
// export const forgotpassword = createAsyncThunk('auth/forgotpassword', async (user, thunkAPI) => {
//     try {
//         return await authService.forgotpassword(user)
//     } catch(error) {
//         console.error(error)
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// // Activate a user after they have signed up
// export const activate_user = createAsyncThunk('auth/activate_user', async (user, thunkAPI) => {
//     try {
//         return await authService.activate_user(user)
//     } catch(error) {
//         console.error(error)
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// // Resend invitation link to user incase they did not get one
// export const resendactivationlink = createAsyncThunk('auth/resendactivationlink', async (user, thunkAPI) => {
//     try {
//         return await authService.resendactivationlink(user)
//     } catch(error) {
//         console.error(error)
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// // Resend invitation link to user incase they did not get one
// export const reset_password = createAsyncThunk('auth/reset_password', async (user, thunkAPI) => {
//     try {
//         return await authService.reset_password(user)
//     } catch(error) {
//         console.error(error)
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message)
//     }
// })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // logout
        logout: (state) => {
            state.user = null
        },

        // function to reset values to initial state
        resetAuthStateValues: (state) => {
            state.isRegisterLoading = false
            state.isRegisterSuccess = false
            state.isRegisterError = false
            state.isRegisterMessage = ''
        },
        resetUserStateValues: (state) => {
            state.isUserLoading = false
            state.isUserSuccess = false
            state.isUserError = false
            state.isUserMessage = ''
        },
    },
    // asynchronous fxns
    extraReducers: (builder) => {
        builder
            .addCase(signin.pending, (state) => {
                state.isUserLoading = true
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.isUserLoading = false
                state.isUserSuccess = true
                state.user = action.payload
            })
            .addCase(signin.rejected, (state, action) => {
                state.isUserLoading = false
                state.isUserError = true
                state.isUserMessage = action.payload
                state.user = null 
            })

            .addCase(register_admin.pending, (state) => {
                state.isAdminLoading = true
            })
            .addCase(register_admin.fulfilled, (state, action) => {
                state.isRegisterLoading = false
                state.isRegisterSuccess = true
                state.Register = action.payload
            })
            .addCase(register_admin.rejected, (state, action) => {
                state.isRegisterLoading = false
                state.isRegisterError = true
                state.isRegisterMessage = action.payload
                state.Register = null 
            })


            // .addCase(changepassword.pending, (state) => {
            //     state.isChangePasswordLoading = true
            // })
            // .addCase(changepassword.fulfilled, (state, action) => {
            //     state.isChangePasswordLoading = false
            //     state.isChangePasswordSuccess = true
            //     state.changepassword = action.payload
            // })
            // .addCase(changepassword.rejected, (state, action) => {
            //     state.isChangePasswordLoading = false
            //     state.isChangePasswordError = true
            //     state.isChangePasswordMessage = action.payload
            //     state.changepassword = null 
            // })

            // .addCase(forgotpassword.pending, (state) => {
            //     state.isForgotPasswordLoading = true
            // })
            // .addCase(forgotpassword.fulfilled, (state, action) => {
            //     state.isForgotPasswordLoading = false
            //     state.isForgotPasswordSuccess = true
            //     state.forgotpassword = action.payload
            // })
            // .addCase(forgotpassword.rejected, (state, action) => {
            //     state.isForgotPasswordLoading = false
            //     state.isForgotPasswordError = true
            //     state.isForgotPasswordMessage = action.payload
            //     state.forgotpassword = null 
            // })

            // .addCase(activate_user.pending, (state) => {
            //     state.isActivateUserLoading = true
            // })
            // .addCase(activate_user.fulfilled, (state, action) => {
            //     state.isActivateUserLoading = false
            //     state.isActivateUserSuccess = true
            //     state.activate_user = action.payload
            // })
            // .addCase(activate_user.rejected, (state, action) => {
            //     state.isActivateUserLoading = false
            //     state.isActivateUserError = true
            //     state.isActivateUserMessage = action.payload
            //     state.activate_user = null 
            // })

            // .addCase(resendactivationlink.pending, (state) => {
            //     state.isResendActivationLinkLoading = true
            // })
            // .addCase(resendactivationlink.fulfilled, (state, action) => {
            //     state.isResendActivationLinkLoading = false
            //     state.isResendActivationLinkSuccess = true
            //     state.resendactivationlink = action.payload
            // })
            // .addCase(resendactivationlink.rejected, (state, action) => {
            //     state.isResendActivationLinkLoading = false
            //     state.isResendActivationLinkError = true
            //     state.isResendActivationLinkMessage = action.payload
            //     state.resendactivationlink = null 
            // })

            // .addCase(reset_password.pending, (state) => {
            //     state.isResendActivationLinkLoading = true
            // })
            // .addCase(reset_password.fulfilled, (state, action) => {
            //     state.isResendActivationLinkLoading = false
            //     state.isResendActivationLinkSuccess = true
            //     state.resendactivationlink = action.payload
            // })
            // .addCase(reset_password.rejected, (state, action) => {
            //     state.isResendActivationLinkLoading = false
            //     state.isResendActivationLinkError = true
            //     state.isResendActivationLinkMessage = action.payload
            //     state.resendactivationlink = null 
            // })
    }
})

export const { logout, resetAuthStateValues, resetUserStateValues } = authSlice.actions

export default authSlice.reducer