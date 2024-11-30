
export const fetchData = (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
}

export const DeleteData = (url, method, data = null) => {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : null
    };

    return fetch(url)
        .then(res => res.json())
        .catch(error => console.error(error));
}