import { bizdata } from "../data/data"

//export every function
export const fetchList = () => {
    return (dispatch) => {
        const action = {
            type: "FETCH_LIST",
            value: bizdata
        }
        dispatch(action)
    }
}

export const addbiz = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: business
    }
}

export const removeBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}
