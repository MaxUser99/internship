import uiStore, { MODALS } from "../../store/uiStore";
import userStore from "../../store/userStore";

function Header({ className }) {
  const { user } = userStore;
  const { openModal } = uiStore;

  const openAuthModal = () => openModal(MODALS.AUTH);

  const isLoggedIn = !!user;

  return (
    <div className={`${className} bg-blue-500`}>
      <div className="container flex items-center justify-between mx-auto py-4">
        <h1 className="text-3xl text-white">header</h1>
        {
          isLoggedIn
            ? <p>user is logged in</p>
            : <div>
              <button onClick={openAuthModal} className="btn-loggin">
                Sign In
              </button>
            </div>
        }
      </div>
    </div>
  );
}

export default Header;
