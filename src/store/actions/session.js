import { LOGIN_SUCCESS } from '../types';
import API from '../../api';

export function register(self, data) {
    return async dispatch => {
        API.post(`/signup`, data).then(async (response) => {
            if (response.success === true) {
                self.setState({ loading: false })
                let dataLogin = {}
                dataLogin.email = data.email;
                dataLogin.password = data.password;
                dataLogin.expireTime = "10000";
                API.post(`/login`, dataLogin).then(async (responseData) => {
                    if (responseData.success === true) {
                        localStorage.setItem("user_token", JSON.stringify(responseData.result.token))
                        self.setState({ loading: false })
                        self.props.history.push("/admin/dashboard")
                        dispatch({ type: LOGIN_SUCCESS, data: true });
                    } else {
                        self.setState({ error_text: response.message, loading: false })
                    }
                }).catch(function (error) {
                    self.setState({ error_text: error.message, loading: false })
                });
            } else {
                if (response.message === 'Already Exists') {
                    self.setState({ error_text: response.message, loading: false })
                }
            }
        }).catch(function (error) {
            self.setState({ error_text: error.message, loading: false })
        });
    }
}

export function login(self, data) {
    return async dispatch => {
        API.post(`/login`, data).then(async (response) => {
            if (response.success === true) {
                localStorage.setItem("user_token", JSON.stringify(response.result.token))
                self.setState({ loading: false })
                self.props.history.push("/admin/dashboard")
                dispatch({ type: LOGIN_SUCCESS, data: true });
            } else {
                self.setState({ error_text: response.message, loading: false })
            }
        }).catch(function (error) {
            self.setState({ error_text: error.message, loading: false })
        });
    }
}

export function logout(self) {
    return async dispatch => {
        localStorage.removeItem("user_token")
        dispatch({ type: LOGIN_SUCCESS, data: false });
        self.props.history.push("/")
    }
}

