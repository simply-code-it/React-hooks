const initialState = {
    loading: false,
    data: [],
    err: false 
};

const reducer = (state, action) => {
    if(action.type === 'FETCH_LOADING') {
        return {loading: true, err: false, data: []};
    }else if(action.type === 'FETCH_SUCCESS') {
        return {loading: false, data: action.payload, err: false};
    }else if(action.type === 'FETCH_ERROR') {
        return {loading: false, err: true, data: []};
    }else{
        throw new Error('Action type is invalid!');
    }
}

const getData = async(url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch {
        throw new Error("Something went wrong while fetching data");
    }
};

export {initialState, reducer, getData};