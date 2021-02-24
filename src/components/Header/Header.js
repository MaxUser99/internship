function Header({ className }) {
  const isLoggedIn = false;

  return (
    <div className={`${className} bg-red-400`}>
      <div className="container flex items-center justify-between mx-auto py-4">
        <h1 className="text-3xl">header</h1>

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
