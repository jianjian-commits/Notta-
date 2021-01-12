import { http, api } from "../../request";

const SET_DATA = "list/setlistData";
const SET_LOADING = "list/setLoading";

const initialState = {
    listData: [],
    loading: false
}

const setListData = (data) => {
    return {
        type: SET_DATA,
        value: data
    }
}

const setLoading = (data) => {
    return {
        type: SET_LOADING,
        value: data
    }
}

export const listRequestData = () => async (dispatch) => {
    dispatch(setLoading(true)) //显示loading、
    const {data} = await http.get(api.COMMENT);
    dispatch(setListData(data.data));
    dispatch(setLoading(false)) //关闭loading
}

const reducer = ((state = initialState, action) => {
    switch(action.type){
        case SET_DATA:
            return {
                ...state,
                listData: action.value
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.value
            }
        default: 
            return state;
    }
})

export default reducer;