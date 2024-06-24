import { setCookies, getCookie, removeCookies } from 'cookies-next';
import jwt from 'jwt-decode';

const COOKIE_NAME_TOKEN = 'authToken';
const COOKIE_NAME_USER_INFO = 'user_info';

export function getUserInfo() {
    const userToken = getAuthToken();
    if (!userToken) {
        return null;
    }
    try {
        return jwt(userToken);
    } catch (e) {
        console.log('Error during JWT decode', e);
    }
    return null;
}

export function getAuthToken() {
    return getCookie(COOKIE_NAME_TOKEN);
}
export function setAuthToken(token) {
    setCookies(COOKIE_NAME_TOKEN, token);
}
export function deleteAuthToken() {
    removeCookies(COOKIE_NAME_TOKEN);
    deleteUserInfo();
}

// export function getUserInfo() {
//     return getCookie(COOKIE_NAME_USER_INFO);
// }
export function setUserInfo(userInfo) {
    setCookies(COOKIE_NAME_USER_INFO, userInfo);
}
export function deleteUserInfo() {
    removeCookies(COOKIE_NAME_USER_INFO)
}