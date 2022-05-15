const initial = 12;
const Calclutor = (state=initial, action) =>{
    switch(action.type){
        case "INC" : return state +1;
        default: return state;

    }
}

export default Calclutor ;