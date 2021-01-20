import { useContext } from 'react';
import { Context as animalsContext } from '../context/animalsContext';
import { Context as AnimalesContext } from '../context/AnimalesContexto'
import { navigate } from '../navigationRef';

export default () => {
  const { animals } = useContext(AnimalesContext)
  const {
    state: { name },
    reset,
  } = useContext(animalsContext);

  const saveList = async (categoryId) => {
    console.log(name, categoryId,)
    await animals(name, categoryId,);
    reset();
    navigate('Animal');
  };

  return [saveList];
};
