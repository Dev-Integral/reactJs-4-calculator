import API from '../../utils/api';

export const login =(email, password) => {
    return (dispatch) => {
        API.login(email, password, res => {
            console.log("Result", res.data);
            dispatch({
                type: 'LOGIN',
                payload: {
                    email: email,
                    token: res.data.id,
                    userId: res.data.userId
                }
            })
            API.getUser(res.data.userId, res.data.id, res2 =>{
                dispatch({
                    type: 'AFTER_LOGIN',
                    payload: res2.data
                })
            })
        })
    }
}

export const register = (email, name, password) => {
    return dispatch => {
        API.register(email, name, password, res => {
            if(res.status===200){
                dispatch(login(email, password));
            }else{
                if(res.response.data.error.message){
                    dispatch({
                        type: 'SHOW_ERROR',
                        payload: 'Do you already have an account?'
                    })
                }
            }
        })
    }
}

