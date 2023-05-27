import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useJsonFetch  = (url, loading, err) => {
    const [data, setData] = useState({
        url: url,
        json: undefined,
        err: false,
    });
    const [isLoading, setLoading] = useState(false)


    useEffect(() => {
       setLoading(true)
       fetch(data.url, {
        method: 'GET', 
        headers: {'Content-Type': 'application/json;charset=utf-8'}
       })
       .then((response) => {
        if (response.status === 200) {
            response.json().then((json) => {
                setData(prevState => ({
                    ...prevState,
                    json: data.json = json,
                }));
                setLoading(false)
            });
        }
        else {
            setData(prevState => ({
                ...prevState,
                err: data.err = new Error(500)
            }));
        }
        
       });
    }, []);

    return [data.json, isLoading, data.err]

}

export default useJsonFetch;