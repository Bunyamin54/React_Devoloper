
const initialState = {

   loading : false,
   catImage: "",
   error:""

}


export const reducer = ( initialState, action) =>  {


    switch (action.type) {
        case  "START":
            
        return {...initialState, loading:true }

        case "SUCCES" :
        return {...initialState, catImage: action.payload, error:"" }

   
    
        default:
            break;
    }

}

//? action

//! {type: "SUCCES", payload: catImage}
//! {type: "START}