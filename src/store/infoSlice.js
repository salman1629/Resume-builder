import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    DATA:{
        personalInfo:{},
        workHistory:[],
        skills:"",
        education:[]
    }
}

const infoSlice = createSlice({
    name:"info",
    initialState,
    reducers:{
        storePersonalInfo: (state,action)=>{
            let payload = action.payload
            console.log("form store---------",payload)
            if(payload.workHistory){
            payload.workHistory = [...state.DATA.workHistory,payload.workHistory]
            }
            if(payload.education){
                payload.education = [...state.DATA.education,payload.education]
            }
            state.DATA = {...state.DATA,...payload}
            console.log("form store---checking entered data------",payload,state.DATA)
        }

        
    }
})

export const {storePersonalInfo} = infoSlice.actions

export default infoSlice.reducer