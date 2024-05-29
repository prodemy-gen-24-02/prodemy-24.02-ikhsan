// import axios from "axios";

// axios
//     .get(`https://dummyjson.com/comments/`)
//     .then(resp => {
//         console.log(resp.data);
//     })
//     .catch(err => console.log(err));

// const getAllProducts = async () => {
//     try {
//         const resp = await axios.get('https://dummyjson.com/products')
//         console.log(resp.data.products)
//     } catch (err) {
//         console.log(err)
//     }
// }

// const getProductById = async (id) => {
//     try {
//         const resp = await axios.get(`https://dummyjson.com/products/${id}`)
//         console.log(resp.data)
//     } catch (err) {
//         console.log(err)
//     }
// }



const getAllComments = async () => {
    try {
        const resp = await axios.get('https://dummyjson.com/comments')
        console.log(resp.status, resp.data.comments)
    } catch (err) {
        console.log(err)
    }
}

const getCommentById = async (id) => {
    try {
        const resp = await axios.get(`https://dummyjson.com/comments/${id}`)
        setTimeout (() => {
            console.log(resp.status, resp.data)
        }, 1000)
    } catch (err) {
        console.log(err)
    }
}

const addData = {
    body: 'What a writer',
    postId: 3,
    userId:5
}

const addComment = async (addData) => {
    try {
        const resp = await axios.post("https://dummyjson.com/comments/add",addData)
        setTimeout(() => {
            console.log(resp.status, resp.data)
        },2000)
    } catch (err) {
        console.log(err)
    }
}

const data = {
    body: 'What a writer!'
}

const updateComment = async (id, data) => {
    try {
        const resp = await axios.put(`https://dummyjson.com/comments/${id}`, data)
        setTimeout(() => {
            console.log(resp.status, resp.data)
        },3000)
    } catch (err) {
        console.log(err)
    }

}

const deleteCommentsById = async (id) => {
    try {
      const resp = await axios.delete(`https://dummyjson.com/comments/${id}`);
      setTimeout(() => {
        console.log (resp.status, resp.data);
      }, 4000)
    } catch (err) {
      console.log(err);
    }
  };

getAllComments();
getCommentById(3);
addComment(addData);
updateComment(3, data);
deleteCommentsById(3);
