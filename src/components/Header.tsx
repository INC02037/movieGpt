import netflixLogo from "../assets/netflixLogo.png";
const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen">
      <img className="w-56" src={netflixLogo} alt="netflixLogo" />
    </div>
  );
};

export default Header;
