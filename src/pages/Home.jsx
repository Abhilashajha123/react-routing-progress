import { useState } from "react";
import Project from "../component/Project";
import Popup from "../component/PopUp";

const Home = () =>{
  const [showPopup, setShowPopup] = useState(false);


  const viewPopup = () =>{

      setShowPopup(true);
    
  }
  const closePopup = () => {
      setShowPopup(false);
  };

  return <>
    <div className="flex flex-col p-6 m-8">
      <div className="flex justify-end items-centre p-5">
           <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={viewPopup}>Add Project</button> 
      </div>
      

      {showPopup && <Popup onClose={closePopup}/>}
      <Project/>  
    </div>
  </>
}

export default Home;
