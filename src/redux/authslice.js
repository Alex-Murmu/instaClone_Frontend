import { createSlice } from "@reduxjs/toolkit"


const authslice = createSlice({
    name:"auth",
    initialState:{
        user:null,
    },
    reducers:{
        setAuhtUser:(state,action)=>{
            state.user = action.payload;
        }
    }
})


export const {setAuhtUser} = authslice.actions;
export default authslice.reducer;