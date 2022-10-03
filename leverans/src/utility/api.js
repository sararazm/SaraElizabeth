const fetchData = (url, method, body = {}) => {
    const options = {
        method,
    }

    if (method === 'POST' || method === 'PUT') {
        options.headers = {
            "content-Type": "application/json",
        }
        options.body = JSON.stringify(body);
    }

    return fetch(url, options).then((res) => res.json())
};

const get = (url) => fetchData(url, 'GET')

const post = (url, body) => fetchData(url, 'POST', body)

const put = (url, body) => fetchData(url, 'PUT', body)

const taBort = (url) => fetchData(url, 'DELETE')

export { get, put, taBort, post };