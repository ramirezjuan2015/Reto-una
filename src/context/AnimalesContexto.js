import createDataContext from './createDataContext';
import Conection from '../api/Conection';

const Animales = (state, action) => {
    switch (action.type) {
        case 'animals':
            return action.payload;
        default:
            return state;
    }
};

const categorias = dispatch => async () => {
    const accion = await Conection.get('/animal');
    dispatch({ type: 'animals', payload: accion.data });
};

const animals = () => async (name, categoryId) => {
    await Conection.post('/animal', { name, categoryId, })
    console.log(categoryId)
};

export const { Provider, Context } = createDataContext(
    Animales,
    { categorias, animals },
    []
);