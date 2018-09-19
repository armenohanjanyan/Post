import axios from 'axios';
import { auth } from '../firebase';

export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const SIGN_UP = 'sign_up';
export const SHOW_POST = 'show-post';
export const DELETE_POST = 'delete_post';
export const LOG_IN = 'log_in';
export const SIGN_OUT = 'SIGN_OUT';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=armenohanjanyan';
const API_KEY1 = '?key=login'



export function fetchPost() {

    const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function createPost(values, callback) {

    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => callback())

    return {
        type: DELETE_POST,
        payload: request
    }
}

export function showPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: SHOW_POST,
        payload: request
    }
}

export async function signUp({email, password}, callback) {

    const response = await auth.createUser(email, password);

   console.log(response)
    return {
        type: SIGN_UP,
        payload: response
    }
}

export async function singIn({email, password}) {

    const response = await auth.signIn(email, password);

   console.log(response)
   
    return {
        type: LOG_IN,
        payload: response
    }
}
export async function signOut() {

    const response = await auth.signOut();
   
    return {
        type: SIGN_OUT,
        payload: response
    }
}