import logo from "../../assets/react.svg";
function Navbar() {
    return(
      <nav className=" flex  text-center justify-between">
      <section>
        <img src={logo} alt="pic"/>
      </section>
      <section >
          <a className="m-3" href="#">Home</a>
          <a className="m-3"href="#">About</a>
          <a className="m-3" href="#">Project</a>
          <a className="m-3"href="#">Contact</a>
      </section>
      </nav>
    );
  }
export default Navbar;