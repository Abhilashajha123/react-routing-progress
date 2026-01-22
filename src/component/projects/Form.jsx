import { useContext, useState } from "react"
import { FormContext } from "../../context/FormContext"

const Form = ({onClose})=> {
    
    const {addFormData} = useContext(FormContext)
    const [formData, setFormData ] = useState({
        title:"",
        description:"",
        image: null,
    })

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!validate()) return;
         alert("Project created Successfully!");

        addFormData(formData);
         onClose(); 

        setFormData({
            title:"",
            description:""
        })

    }

    const [errors,setErrors] = useState({})

    const validate = () =>{
        let newErrors = {}

        if(!formData.title){
            newErrors.name = "Title is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        
         setErrors({});
};
    return(
       <div className="flex justify-center items-center bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Form</h2>

        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
          
        />
         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        <input
          type="file"
          accept="image/*"
         className="w-full border p-2 mb-3 rounded"
          onChange={handleImageChange}
        />

        <textarea
          name="description"
          placeholder="Enter Description"
          className="w-full border p-2 mb-3 rounded"
          rows="4"
          value={formData.description}
           onChange={handleChange}
        
        ></textarea>
        
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    )
}
export default Form