function Navbar() {
  const links = {
    Home: "/",
    Dashboard :"#Dashboard",
    Products :"#Products",
    Transactions:"#Transactions",
    Journal:"#Journal"
  };
  return (
    <div className="relative">
    <div className="flex justify-center">
      <div className="flex justify-evenly gap-4">
        {Object.keys(links).map((link, index) => {
          return (
            <a key={index} href={links[link]} className="text-2xl">
              {link}
            </a>
          );
        })}
      </div>

    </div>
    <div className="top-3 right-6 absolute">
       <p>User</p>
    </div>
    </div>
  );
}

export default Navbar;
