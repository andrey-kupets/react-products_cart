class HttpClient {
    get(url)  {
        return fetch(url)
    }
}

export default new HttpClient();