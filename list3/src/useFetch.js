import { useState } from 'react';

export function useFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);

    const handleFetch = async (url, options) => {
        setLoading(true);
        const abortController = new AbortController();
        setController(abortController);

        try {
            const response = await fetch(url, options, { signal: abortController.signal });
            const responseData = await response.json();
            setData(responseData);
            setError(null);
        } catch (err) {
            if (err.name === "AbortError") {
                console.log("Request canceled");
            } else {
                setError(err);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError("Request cancelled");
        }
    };

    return { data, loading, error, handleFetch, handleCancelRequest };
}
