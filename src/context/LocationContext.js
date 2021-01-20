import createDataContext from './createDataContext';
import Conection from '../api/Conection';

const listing = (state, action) => {
    switch (action.type) {
        case 'locationId':
            return { ...state, locationId: action.payload }
        case 'reset':
            return { ...state, locationId: '', loading: false };
        case 'start_loading':
            return { ...state, loading: true };
        case 'stop_loading':
            return { ...state, loading: false };
        case 'category':
            return action.payload;
        default:
            return state;
    }
};

const add_name = dispatch => locationId => {
    dispatch({ type: 'locationId', payload: locationId });
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
    listing,
    { reset, add_name, startLoading, stopLoading },
    { locationId: '', loading: false }
);