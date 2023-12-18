import { Route, Routes } from "react-router-dom";
import Allrooms from "./Components/Allrooms";
import Home from "./Components/Home";

import Ourrestaurants from "./Components/Ourrestaurants";
import Roomdetails from "./Components/Roomdetails";
import Guestfoodmenu from "./Components/Guestfoodmenu";
import Outsideguestmenu from "./Components/Outsideguestmenu";


function App() {
  return (
<>


<Routes>
<Route path="/" element={<Home/>}/>
<Route path="Allrooms" element={<Allrooms/>}/>
<Route path="Roomdetails" element={<Roomdetails/>}/>
<Route path="Ourrestaurants" element={<Ourrestaurants/>}/>
<Route path="Guestfoodmenu" element={<Guestfoodmenu/>}/>
<Route path="Outsideguestmenu" element={<Outsideguestmenu/>}/>

</Routes>



</>
  );
}

export default App;
