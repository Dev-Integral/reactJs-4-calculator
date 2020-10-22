import API from '../../utils/api';

export const getPosts = (skip) => {
    return (dispatch) => {
        API.getSitePosts(skip, res => {
            console.log({posts: res.data});
            dispatch({
                type: 'GOT_SITE_POSTS',
                payload: res.data,
                skip: skip
            })
        })
    }
}
export const getPostsCount = () => {
    return (dispatch) => {
        API.getPostsCount(res => {
            console.log({PostsCount: res.data});
            dispatch({
                type: 'GOT_SITE_POSTS_COUNT',
                payload: res.data
            })
        })
    }
}
export const setPostData = (post) => {
    return (dispatch) => {
            dispatch({
                type: 'GOT_POST_DATA',
                payload: post
            })
        }
}
export const getSinglePostBySlug = (slug, token) => {
    return (dispatch) => {
        API.getSinglePostBySlug( slug, token, res => {
                dispatch({
                type: 'SET_FULL_POST_DATA',
                payload: res.data
            })
        })
    }
}
export const postComment =(comment, token) => {
    return (dispatch) =>{
        API.postComment(comment, token, res =>{
            if(res.status===200){
                API.getCommentById(res.data.id, token, res2 => {
                    console.log(res2)
                    dispatch({
                        type: 'ADDED_COMMENT',
                        payload: res2.data
                    })  
                })   
            }
        })
    }
}