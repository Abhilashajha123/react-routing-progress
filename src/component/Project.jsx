

import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import data from "../data/data.json";

const Project = () =>{
    const { allForms } = useContext(FormContext);
   
    return(
        <>
        <div className="flex flex-wrap gap-6 justify-center ">
            {
                    data.map((dataObj)=>(
                        <div className="bg-white-600 shadow-md p-6 w-80 mt-20 flex flex-col">
                            <h1 className="font-bold">{dataObj.title}</h1>
                            <p className="item-justify">{dataObj.description}</p>
                             <img
                                src={dataObj.image}
                                alt={dataObj.title}
                                className="w-full h-40 object-cover rounded"
                            />
                        </div>
                    ))
                }
                 {
                    allForms.map((dataObj)=>(
                        <div className="bg-white-600 shadow-md p-6 w-80 mt-20 flex flex-col">
                            <h1 className="font-bold">{dataObj.title}</h1>
                            <p className="item-justify">{dataObj.description}</p>
                             {dataObj.image instanceof File && (
                                <img
                                    src={URL.createObjectURL(dataObj.image)}
                                    alt={dataObj.title}
                                    className="h-40 w-full object-cover mb-2"
                                />
                            )}
                        </div>
                    ))
                }
            </div>
        </>
    )

}

export default Project;