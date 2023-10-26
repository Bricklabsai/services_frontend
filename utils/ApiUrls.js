const BASE_URI = 'https://localhost:8000/api'
const AUTH_ENDPOINT = BASE_URI + '/auth'


export const ApiUrls = {
    // auth
    register_admin: AUTH_ENDPOINT + '/admin/',
    register_client: AUTH_ENDPOINT + '/client/',
    signin: AUTH_ENDPOINT + '/signin/',


}