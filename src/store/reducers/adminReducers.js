

const defaultState = {
    users: [],
    posts: [],
    post: {}
}

const admin = (state = defaultState, action) => {
    switch(action.type) {
        case 'GOT_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'GOT_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        case 'POST_ADDED':
            console.log('has returned');
            return {
                ...state,
                posts: state.posts.concat(action.payload),
                post: action.payload
            }
        case 'GOT_SINGLE_POST':
            return {
                ...state,
                post: action.payload
            }
        case 'IMAGE_UPLOADED':
            console.log(action.payload);
            return {
                ...state,
                post: {...state.post,
                    PostImage: [action.payload]}
            }
        case 'POST_UPDATED':
            return{
                ...state,
                post: {
                    ...state.post,
                    ...action.payload
                },
                posts: state.posts.map(p => {
                    if(p.id === action.payload.id){
                        //This is the existing post that has been updated
                        // and currentlyin action.payload
                        return{
                            ...p,
                            ...action.payload
                        }
                    }else{
                        return p
                    }
                })
            }
        default:
            return state;
    }
}

export default admin;