import Form from "./projects/Form";

const Popup = ({ onClose }) => {
   
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="flex flex-col  bg-white p-6 rounded shadow-lg w-80 text-center">
        <div className="flex justify-end items-centre p-5">
           <button
          className="bg-gray-500 text-white px-4 py-2 rounded justify-end"
          
          onClick={onClose}
        >
          X
        </button>
      </div>
        
       <div>
        <Form onClose={onClose}/>
       </div>
        
      </div>
    </div>
  );
};

export default Popup;
