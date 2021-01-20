import createDataContext from './createDataContext';
import Conection from '../api/Conection';

const Categoria = (state, action) => {
    switch (action.type) {
        case 'category':
            return action.payload;
        default:
            return state;
    }
};

const go = dispatch => async () => {
    const accion = await Conection.get('/category');
    dispatch({ type: 'category', payload: accion.data });
};

const logica = () => async (category, name) => {
    await Conection.post('/category', { category, name });
};

export const { Provider, Context } = createDataContext(
    Categoria,
    { go, logica },
    []
);
