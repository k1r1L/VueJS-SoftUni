const baseUrl = "https://baas.kinvey.com/";

const appKey = "";
const appSecret = "";

const requester = {
    methods: {
        handler(response) {
            if (response.status >= 400) {
                throw new Error(`Something went wrong. Error: ${response.statusText}`);
            }

            if (response.status !== 204) {
                response = response.json();
            }

            return response;
        },
        makeHeaders(data) {
            const loggedIn = sessionStorage.getItem('authtoken') !== null;

            if (loggedIn) {
                data.loggedIn = loggedIn;
                data.username = sessionStorage.getItem('username');
            }
        },
        makeAuth(type) {
            return type === 'Basic'
                ? 'Basic ' + btoa(appKey + ':' + appSecret)
                : 'Kinvey ' + sessionStorage.getItem('authtoken');
        },
        get(endpoint, module, type) {
            const headers = this.makeHeaders(type, 'GET');
            const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

            return fetch(url, headers);
        },
        post(endpoint, module, type, data) {
            const headers = this.makeHeaders(type, 'POST', data);
            const url = `${baseUrl}${module}/${appKey}/${endpoint}`;

            return fetch(url, headers);
        },
        test() {
            console.log('Test')
        }
    }
};

export default requester;