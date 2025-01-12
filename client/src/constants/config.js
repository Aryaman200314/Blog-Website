export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Please wait...'
    },
    success: {
        title: 'Success',
        message: 'Data fetched successfully'
    },
    reponseFailure: {
        title: 'Error',
        message: 'Something went wrong. Please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'Error occured while getting data. Please try again'
    },
    networkError: {
      title: 'Error',
      message: 'Network error. Please try again'  
    }
}

export const SERVICE_URL = {
    userSignup: {url: '/signup', method: 'POST'},
    userLogin: {url: '/login', method: 'POST'},
    uploadFile: {url: '/file/upload', method: 'POST'}
}