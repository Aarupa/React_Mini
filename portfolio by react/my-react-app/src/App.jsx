
import Hero from "./assets/component/Hero";
import Navbar from "./assets/component/Navbar";
import Work from "./assets/component/Work";
function App(){
  return(
    <>
    <div className="bg-purple-400 p-2  w-full absolute mt-0 top-0">
   <Navbar/>
   </div>
   <Hero/>
   <Work/>
   </>
  );
}
export default App;