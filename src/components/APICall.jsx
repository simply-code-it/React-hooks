import { useEffect, useReducer } from "react";

import { initialState, reducer, getData } from "./ApiReducer";

const APICall = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchAndUpdateData = (url) => {
        dispatch({type: 'FETCH_LOADING'});
        getData(url)
            .then(res => dispatch({type: 'FETCH_SUCCESS', payload: res}))
            .catch(_ => dispatch({type: 'FETCH_ERROR'}));
    };

    useEffect(()=> {
        fetchAndUpdateData(`https://jsonplaceholder.typicode.com/posts?_limit=10`);

    }, []);


    const {loading, err, data} = state;

    return loading ? (
        <h1>Loading...</h1>
    ): err?(
        <h1>Something went wrong!!</h1>
    ): (
        <div>
            {data.map(post => {
                return <p key={post.id}>
                    {post.id} - {post.title}
                </p>
            })}
        </div>
    )
}

export default APICall;