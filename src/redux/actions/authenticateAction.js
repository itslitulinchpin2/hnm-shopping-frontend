
function login(id,password){
    
    return(dispatch,getState)=>{
        console.log("액션크리에이터 도달돼서 전달값: ", id, password);
        dispatch({type:"LOGIN_SUCCESS" ,payload:{id,password}})
    }
}

export const authenticateAction={login}