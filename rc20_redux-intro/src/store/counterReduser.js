const initialState = {
    count: 0,
}
// PURE REDUSER FUNCTION
export const counterReducer = (state = initialState, action) => {


    switch (action.type) {
        case "INC":
            return{count: state.count +1}
          
            case "DEC":
            
             return { count: state.count -1}
            case "CLR":
              return { count:0 }
           
        default:
            return state
            //! reduser funkction must have a return or the first stiasjon
    }
}