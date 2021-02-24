function Header({ className }) {
  const isLoggedIn = false;

  return (
    <div className={`${className} bg-blue-500`}>
      <div className="container flex items-center justify-between mx-auto py-4">
        <h1 className="text-3xl text-white">header</h1>

        {
          isLoggedIn
          ? <p>user is logged in</p>
          : <div></div>
        }
        <div className="">

        </div>
      </div>
    </div>
  );
}

export default Header;
