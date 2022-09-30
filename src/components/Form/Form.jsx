import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/Form.module.scss';
import FormInput from '../FormInput/FormInput';
import FormSlider from '../FormSlider/FormSlider';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import { Cancel, Save } from '../Icons';
import { savePokemonAction, clearPokemonAction } from '../../redux/actions/pokemon.actions';

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const idAuthor = useSelector((state) => state.userReducer.user.idAuthor);
  const pokemon = useSelector((state) => state.pokemonReducer.pokemon);

  const [saveBtnState, setSaveBtnState] = useState(true);
  const [formData, setFormData] = useState({});
  const { edit } = location.state;

  useEffect(() => {
    pokemon
      ? setFormData(pokemon)
      : setFormData({
          name: '',
          image: '',
          attack: 50,
          defense: 50,
          hp: 100,
          type: 'Base',
        });
  }, [pokemon]);

  useEffect(() => {
    if (formData.name && formData.image) {
      setSaveBtnState(false);
    } else {
      setSaveBtnState(true);
    }
  }, [formData]);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSaveHandler = () => {
    dispatch(savePokemonAction({ ...formData, idAuthor: Number(idAuthor) }, edit));
    navigate('/');
    dispatch(clearPokemonAction());
  };

  const onCancelHandler = () => {
    navigate('/');
    dispatch(clearPokemonAction());
  };

  const buttons = [
    { icon: <Save />, text: 'Guardar', onClickHandler: onSaveHandler, disabled: saveBtnState },
    { icon: <Cancel />, text: 'Cancelar', onClickHandler: onCancelHandler },
  ];

  return (
    <div className={styles.form}>
      <h2>Nuevo Pokemon</h2>
      <form>
        <div className={styles.formData}>
          <section>
            <FormInput
              text={'Nombre:'}
              name={'name'}
              value={formData.name}
              placeholder={'Nombre'}
              onChangeHandler={onChangeHandler}
            />
            <FormInput
              text={'Imagen:'}
              name={'image'}
              value={formData.image}
              placeholder={'Url'}
              onChangeHandler={onChangeHandler}
            />
            {/* <FormInput text={'Tipo:'} name={'type'} placeholder={'Tipo'} onChangeHandler={onChangeHandler} /> */}
          </section>
          <section>
            <FormSlider text={'Ataque:'} name={'attack'} value={formData.attack} onChangeHandler={onChangeHandler} />
            <FormSlider text={'Defensa:'} name={'defense'} value={formData.defense} onChangeHandler={onChangeHandler} />
            {/* <FormSlider text={'Hp:'} name={'hp'} onChangeHandler={onChangeHandler} /> */}
          </section>
        </div>
        <ButtonsGroup>{buttons}</ButtonsGroup>
      </form>
    </div>
  );
};

export default Form;

// <section>
//           <div className={styles.labels}>
//             <label htmlFor='name' className={styles.label}>
//               Nombre:
//             </label>
//             <label htmlFor='image' className={styles.label}>
//               Imagen:
//             </label>
//             <label htmlFor='type' className={styles.label}>
//               Tipo:
//             </label>
//           </div>
//           <div className={styles.inputs}>
//             <input
//               type='text'
//               placeholder='Nombre'
//               name='name'
//               className={styles.input}
//               onChange={(e) => onChangeHandler(e)}
//             />
//             <input
//               type='text'
//               placeholder='Url'
//               name='image'
//               className={styles.input}
//               onChange={(e) => onChangeHandler(e)}
//             />
//             <input
//               type='text'
//               placeholder='Tipo'
//               name='type'
//               className={styles.input}
//               onChange={(e) => onChangeHandler(e)}
//             />
//           </div>
//         </section>
//         <section>
//           <div className={styles.labels}>
//             <label htmlFor='attack' className={styles.label}>
//               Ataque:
//             </label>
//             <label htmlFor='defense' className={styles.label}>
//               Defensa:
//             </label>
//             <label htmlFor='hp' className={styles.label}>
//               Hp:
//             </label>
//           </div>
//           <div className={styles.inputs}>
//             <FormSlider text={'Ataque:'} name={'attack'} onChangeHandler={onChangeHandler} />
//             <FormSlider text={'Defensa:'} name={'defense'} onChangeHandler={onChangeHandler} />
//             <FormSlider text={'Hp:'} name={'hp'} onChangeHandler={onChangeHandler} />
//           </div>
//         </section>

// <table>
// <tbody>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td></td>
//   </tr>
// </tbody>
// </table>
