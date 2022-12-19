import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: {name:'kim', age: 20},
    reducers: {
        changeName(state){
            state.name = 'park' //객체는 state 직접 수정해도 됨
        },
        increase(state, action) {
            state.age += action.payload
        },
    }
})

export let { changeName, increase } = user.actions

export default user