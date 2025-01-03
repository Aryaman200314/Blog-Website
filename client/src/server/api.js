import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URL } from '../constants/config';

const API_URL = "http://localhost:8000";
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type" : "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        return processResponse(response);
    },
    function (error) {
        return Promise.reject(processError(error));
    }
)

const processResponse = (reponse) => {
    if(reponse?.status === 200) {
        return {isSuccess: true, data: reponse.data}
    }
    else {
        return {
            isFailure: true,
            status: reponse?.status,
            msg: reponse?.msg,
            code: reponse?.code
        }
    }
}

const processError = (error) => {
    if(error.reponse) {
        console.log("Error reponse", error.toJSON());
        
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.reponseFailure,
            coode: error.reponse.status
        }
    }

    else if(error.request) {
        console.log("Error in request", error.toJSON());
        
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            coode: ""
        }
    }

    else {
        console.log("Error network", error.toJSON());
        
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            coode: ""
        }
    }
}


const api = {};

for (const [key, value] of Object.entries(SERVICE_URL)) {
  api[key] = (body, showUploadProgress, showDownloadProgress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      reponseType: value.reponseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageDone = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageDone);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageDone = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageDone);
        }
      },
    });
}

export {api};
