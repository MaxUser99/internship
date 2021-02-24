import { observer } from "mobx-react-lite";
import uiStore, { MODALS } from "../../store/uiStore";
import styles from './AuthModal.module.css';

const AuthModal = () => {
  const { openedModal, openModal } = uiStore;

  const closeHandler = () => openModal(null);

  console.log({ openedModal   })
  if (openedModal !== MODALS.AUTH) return null;

  return (
    <>
      <div className={`${styles.form} inset-center container bg-white`}>
        <h2>Auth</h2>
      </div>
      <div onClick={closeHandler} className="backface cursor-pointer" />
    </>
  );
}

export default observer(AuthModal);
