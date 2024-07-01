import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = [{
//     id: 1,
//     file: null,
//     title: "",
//     blog: ""
// }]

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        card: []
    },
    reducers: {
        addBlog: (state, action) => {
            
            state.card.push(action.payload);
            console.log(state.card)

        },
        removeBlog: (state, action) => {
            // state.card = state.card.filter((blog)=>blog.id !== action.payload)  
            // state.card.length = 0;
            console.log(action.payload[0].id)

            console.log('blog state', state.card)
            
            // const findID = state.card.findIndex((blog)=>blog == id)  
            // console.log(findID)
            // state.card.filter(findID.blog == 0)
            // if (findID !== -1)  {
                // state.card[findID] = 0;
            // }
            // alert("done")
        }
    }
})

export const { addBlog, removeBlog } = blogSlice.actions

export default blogSlice.reducer;