let initialState={
    productList:[]
}

function productReducer(state=initialState,action){
    let {type,payload}=action;
    if(type==="GET_PRODUCT_SUCCESS"){
        return {...state,productList:payload.data}
    }
    return {...state};
}


export default productReducer;