
function login(id,password){
    if(id){
    return(dispatch,getState)=>{
        console.log("로그인 액션크리에이터 도달돼서 전달값: ", id, password);
        dispatch({type:"LOGIN_SUCCESS" ,payload:{id,password}})
    }}
    else {
        return(dispatch,getState)=>{
            console.log("로그아웃 액션크리에이터 도달돼서 전달값: ", id, password);
            dispatch({type:"LOGOUT_SUCCESS" })
        }
    }
}

export const authenticateAction={login}