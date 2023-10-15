function getProducts(searchQuery){
    
    
    
    //action creator는 함수를 리턴한다.
    return async (dispatch,getState)=>{
        let url = `https://my-json-server.typicode.com/itslitulinchpin2/hnm-shopping-frontend/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json()
        //setProductList(data);
        console.log(data);
        //잘 받았으니 이제 리듀서로 보내자.
        dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
    }
}

export const productAction={getProducts}
// productAction이라는 객체를 반환한다. 
// 이 객체에는 여러 액션 크리에이터 함수들이 존재.