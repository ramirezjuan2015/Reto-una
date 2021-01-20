import { useContext } from 'react';
import { Context as CategoriasContex } from '../context/CategoriasContext';
import { Context as SalvarContexto } from '../context/SalvarContexto';
import { navigate } from '../navigationRef';

export default () => {
  const { logica } = useContext(CategoriasContex);
  const {
    state: { animals, name },
    reset
  } = useContext(SalvarContexto);

  const saveList = async () => {
    console.log(animals,name)
    await logica(animals, name);
    reset();
    navigate('Maqueta');
  };

  return [saveList];
};
