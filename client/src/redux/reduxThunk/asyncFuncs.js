import { initTravelsAC, addTravelsAC, delTravelsAC, editTravelsAC } from "../../redux/actionCreators/actionCreators"


export const fetchInitTravels = () => {
    return (dispatch) => {
        fetch('http://localhost:4000/travels')
            .then(res => res.json())
            .then(data => dispatch(initTravelsAC(data)))
    }
}