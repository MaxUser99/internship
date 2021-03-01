import { useState } from 'react';
import { observer } from "mobx-react-lite";
import uiStore, { MODALS } from "../../store/uiStore";
import { signInWithGoogle } from '../../store/firebase';
import styles from './AuthModal.module.css';

const MODE = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP'
}

const AuthModal = () => {
  const { openedModal, openModal } = uiStore;

  const [mode, setMode] = useState(MODE.SIGN_IN);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const closeHandler = () => openModal(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  }

  const changeHandler = ({ target: { value, name } }) => {
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  }

  const toggleMode = () => setMode(prevMode => (
    prevMode === MODE.SIGN_IN
      ? MODE.SIGN_UP
      : MODE.SIGN_IN
  ));

  if (openedModal !== MODALS.AUTH) return null;

  return (
    <>
      <div className={`${styles.form} inset-center container bg-white p-6`}>
        <h2 className="text-lg font-medium">Auth</h2>
        <form onSubmit={submitHandler}>
          <div className="my-5 text-sm">
            <label htmlFor="email" className="block text-black">Email</label>
            <input value={email} onChange={changeHandler} className="input" type="text" autoFocus name="email" placeholder="Email" />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="password" className="block text-black">Password</label>
            <input value={password} onChange={changeHandler} className="input" type="password" name="password" placeholder="Password" />
          </div>
          <button type='submit' className="btn w-full">
            {
              mode === MODE.SIGN_IN
              ? 'sign in'
              : 'sign up'
            }
          </button>
          <p className="w-full text-center">or</p>
          <button onClick={signInWithGoogle} className="btn w-full">
            {
              mode === MODE.SIGN_IN
                ? 'sign in '
                : 'sign up '
            } with google
          </button>
          <p className="text-center mb-1 mt-5">
            {
              mode === MODE.SIGN_IN
                ? 'Dont have account?'
                : 'Already have account?'
            }
          </p>
          <p className="text-center text-blue-500 cursor-pointer" onClick={toggleMode}>
            {
              mode === MODE.SIGN_IN
                ? 'Please sign up'
                : 'Please sign in'
            }
          </p>
        </form>
      </div>
      <div onClick={closeHandler} className="backface cursor-pointer" />
    </>
  );
}

export default observer(AuthModal);
