import axios from "axios";
import BaseUrl from './baseUrl'
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcHJhbmF2a2FtYmxlLmluXC9tYWx2YW5pdG91cnNcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NDc3MTUyODIsImV4cCI6MTY0NzcxODg4MiwibmJmIjoxNjQ3NzE1MjgyLCJqdGkiOiJIZ1RMbVQ3UzZ4QllaWmVCIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.GgoJB9tTATaOtXDcaszgD1_92JGsjkJU_s_JwKvpaIY';

export const comnGet = async (url) => {
    const myUrl = BaseUrl.API_PATH + url;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.get(myUrl, config)
        .then(res => {
            console.log('oo', res);
            return res;
        })
        .catch(err => {
            return err;
        })
};

export const comnPost = async (url, data) => {
    const myUrl = BaseUrl.API_PATH + url;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        }
    }

    return axios.post(myUrl, data, config)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};

export const comnPut = async (url, data) => {
    const myUrl = BaseUrl.API_PATH + url;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.put(myUrl, data, config)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};

export const ComnDel = async (url, data) => {
    const myUrl = BaseUrl.API_PATH + url;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    return axios.delete(myUrl, data, config)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};