import createDataContext from './createDataContext';

const Reducer = (state, action) => {
    switch (action.type) {
        case 'category':
            return { ...state, categoryId: action.payload };
        case 'name':
            return { ...state, name: action.payload }
        case 'reset':
            return { ...state, categoryId: '', name: '', loading: false };
        case 'start_loading':
            return { ...state, loading: true };
        case 'stop_loading':
            return { ...state, loading: false };
        default:
            return state;
    }
};

const add_name = dispatch => name => {
    dispatch({ type: 'name', payload: name });
};

const reset = dispatch => () => {
    dispatch({ type: 'reset' });
};

const startLoading = dispatch => () => {
    dispatch({ type: 'start_loading' });
};

const stopLoading = dispatch => () => {
    dispatch({ type: 'stop_loading' });
};

export const { Context, Provider } = createDataContext(
    Reducer,
    { reset, add_name, startLoading, stopLoading },
    { name: '', loading: false }
);
