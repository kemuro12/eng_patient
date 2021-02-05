const APP_INITIALIZED = "app/APP_INITIALIZED"

let initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case APP_INITIALIZED: {
            return {
                ...state,
                isInitialized: true
            }
        }
        default:
            return state; 
    }
}

export const initializeApp = () => {
    return {
        type: APP_INITIALIZED
    }
}

export default appReducer;