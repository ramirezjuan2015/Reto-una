import createDataContext from './createDataContext';

const listingReducer = (state, action) => {
    switch (action.type) {
        case 'category':
            return { ...state, category: action.payload };
        case 'name':
            return { ...state, name: action.payload }
        case 'reset':
            return { ...state, category: '', name: '', loading: false };
        case 'start_loading':
            return { ...state, loading: true };
        case 'stop_loading':
            return { ...state, loading: false };
        default:
            return state;
    }
};

const add_category = dispatch => categorias => {
    dispatch({ type: 'category', payload: categorias });
};

const add_name = dispatch => animal => {
    dispatch({ type: 'name', payload: animal });
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
    listingReducer,
    { add_category, reset, add_name, startLoading, stopLoading },
    { category: '', name: '', loading: false }
);
