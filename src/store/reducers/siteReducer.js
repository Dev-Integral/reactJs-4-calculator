const defaultState = {
    posts: [],
    post: {},
    postsCount: 0
}


const site = (state = defaultState, action) => {
    switch(action.type){
        case 'GOT_SITE_POSTS':
            return {
                ...state,
                posts: 
                action.skip ?
                state.posts.concat(action.payload) : action.payload

            }
        case 'GOT_SITE_POSTS_COUNT':
            return {
                ...state,
                postsCount: action.payload
            }
        case 'GOT_POST_DATA':
            return {
                ...state,
                post: action.payload
            }
        case 'SET_FULL_POST_DATA':
            return {
                ...state,
                post: {
                    ...state.post,
                    ...action.payload,}

            }
        case 'ADDED_COMMENT':
            console.log({'new_comment': action.payload});
            return {
                ...state,
                post: {
                    ...state.post,
                    Comment: state.post.Comment.concat(action.payload)
                }
            }
        default: 
            return state;
    }
}

export default site;