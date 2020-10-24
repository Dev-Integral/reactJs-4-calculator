import axios from 'axios';

let host;
if(process.env.NODE_ENV ==='development'){
    host = 'http://localhost:8080';
}else{
    host = 'http://demoapi.integral.com';
}

const API = {
    makeFileUrl: (url, token) => {
        return `${host}${url}?access_token=${token}`;
    },
    login: (email, pass, success) => {
        axios.post(`${host}/api/users/login`, {email: email, password:pass})
        .then(res => {
            success(res);
        });
    },
    getUser: (userId, token, success) => {
        axios.get(`${host}/api/users/${userId}?access_token=${token}`)
        .then(res => {
            success(res);
        })
    },
    updateUser: (updatedData, userId, token, success) => {
        axios.patch(`${host}/api/users/${userId}?access_token=${token}`, updatedData)
        .then(res=>{
            success(res);
        })
    },
    register: (email, name, pass, success) => {
        axios.post(`${host}/api/users`, {email: email, name: name, password: pass})
        .then(res => {
            success(res);
        })
        .catch(err=> {
            success(err);
        })
    },
    getUsers: (token, success) => {
        axios.get(`${host}/api/users?access_token=${token}`, {
            params: {
                filter: { 
                    include: 'Profile'
                }
            }
        }) 
        .then(res => {
            success(res);
        })
    },
    // Admin actions
    addUser: (newUserData, token, success) => {
        axios.post(`${host}/api/users?access_token=${token}`, newUserData)
        .then(res => {
            success(res);
        })
    },
    getPosts: (token, success) => {
        axios.get(`${host}/api/Posts?access_token=${token}`) 
        .then(res => {
            success(res);
        })
    },
    addPost: (post, token, success) => {
        axios.post(`${host}/api/Posts?access_token=${token}`, post) 
        .then(res => {
            success(res);
        })
    },
    getSinglePost: (postId, token, success) => {
        axios.get(`${host}/api/Posts/${postId}?access_token=${token}`, {
            params: {
                filter: {include: 'PostImage'}
            }
        } )
        .then(res => {
            success(res);
        })
    },
    updatePost: (post, postId, token, success) => {
        axios.patch(`${host}/api/Posts/${postId}?access_token=${token}`, post)
        .then(res=>{
            success(res);
        })
    },
    uploadImage: (data, token, postId, userId, success) => {
        console.log(data);
        axios.post(`${host}/api/PostImages/upload?post_id=${postId}&access_token=${token}&user_id=${userId}`, data)
        .then(res=>{
            console.log(res);
            success(res);
        })
    },
    // Site Interaction
    getSitePosts: (skip, success) => {
        axios.get(`${host}/api/Posts`, {
            params: {
                filter: { 
                    skip: skip,
                    limit: 5,
                    include: 'PostImage',
                    fields: {
                        id: true,
                        title: true,
                        slug: true
                    }
                }
            }
        }) 
        .then(res => {
            success(res);
        })
    },
    getSinglePostBySlug: (slug, token, success) => {
        axios.get(`${host}/api/Posts/findOne?access_token=${token}`, {
            params: {
                filter: { 
                    where: {slug: slug},
                    include: {Comment: 'Profile'}
                }
            }
        }) 
        .then(res => {
            console.log(res);
            success(res);
        })
    },
    getPostsCount: (success) => {
        axios.get(`${host}/api/Posts/count`)
        .then(res=> {
            success(res);
        })
    },
    getCommentById: (commentId, token, success) => {
        axios.get(`${host}/api/Comments/${commentId}?access_token=${token}`, {
            params: {
                filter: {
                    include: 'Profile'
                }
            }
        }).then(res => {
            success(res);
        })
    },

    postComment: (comment, token, success) => {
        axios.post(`${host}/api/Comments?access_token=${token}`, comment, {
            params: {
                filter: {
                    include: "Profile"
                }
            }
        })
        .then(res=> {
            success(res);
        })
    }
}

export default API;