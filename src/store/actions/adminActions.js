import API from '../../utils/api';

export const getUsers = (token) => {
    return (dispatch) => {
        API.getUsers(token, res => {
            console.log({users: res.data});
            dispatch({
                type: 'GOT_USERS',
                payload: res.data
            })
        })
    }
}
export const getPosts = (token) => {
    return (dispatch) => {
        API.getPosts(token, res => {
            console.log({posts: res.data});
            dispatch({
                type: 'GOT_POSTS',
                payload: res.data
            })
        })
    }
}
export const addPost = (post, token) => {
    return dispatch => {
        API.addPost(post, token, res => {
            console.log({newPost: res.data});
            dispatch({
                type: 'POST_ADDED',
                payload: res.data
            })
        })
    }
}
export const addUser = (newUserData, token) => {
    return dispatch => {
        API.addUser(newUserData, token, res => {
            console.log({newUser: res.data});
            dispatch({
                type: 'USER_ADDED',
                payload: res.data
            })
        })
    }
}
export const getSingleUser = (userId, token) => {
    console.log(userId, token);
    return dispatch => {
        API.getUser(userId, token, res => {
            console.log({singleUser: res.data});
            dispatch ({
                type: 'GOT_SINGLE_USER',
                payload: res.data
            })
        })
    }
}
export const getSinglePost = (postId, token) => {
    return dispatch => {
        API.getSinglePost(postId, token, res => {
            console.log({singlePost: res.data});
            dispatch ({
                type: 'GOT_SINGLE_POST',
                payload: res.data
            })
        })
    }

}
export const updateUser = (updatedData, userId, token) => {
    return dispatch => {
        API.updateUser(updatedData, userId, token, res => {
            console.log({updatedPost: res.data});
            dispatch ({
                type: 'USER_UPDATED',
                payload: res.data
            })
        })
    }
}
export const updatePost = (post, postId, token) => {
    return dispatch => {
        API.updatePost(post, postId, token, res=>{
            console.log({postUpdated: res.data});
            dispatch({
                type: 'POST_UPDATED',
                payload: res.data
            })
        })
    }
}
export const uploadImage = (data, token, postId, userId) => {
    console.log({AdminActionUserIdupload:userId});
    return dispatch => {
        API.uploadImage(data, token, postId, userId, res=>{
            console.log({imageUpdated: res.data, rawData: data});
            dispatch({
                type: 'IMAGE_UPLOADED',
                payload: res.data
            })
        })
    }
}