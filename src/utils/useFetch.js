import { useState, useEffect } from 'react';
import firebase from './firebase';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        const portfolio = firebase.database().ref(url);

        portfolio.on('value', snapshot => {
            console.log('User data: ', snapshot.val());
            setIsPending(false);
            setData(snapshot.val());
            setError(null);
            // console.log('DATA = ' + data);
        })

        // abort the fetch
        return () => abortCont.abort();
    }, [url])

    return { data, isPending, error };
}

export default useFetch;