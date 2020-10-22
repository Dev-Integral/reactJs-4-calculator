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