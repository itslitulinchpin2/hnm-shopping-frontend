let initialState={
    id:'',
    password:'',
    authenticate:false
}

function authenticateReducer(state=initialState,action){
    let {type,payload} = action;
    if(type==="LOGIN_SUCCESS"){
        return {...state,id:payload.id,password:payload.password,authenticate:true}
    }
    return {...state}

}

export default authenticateReducer;