import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({children})=>{

     const [allForms, setAllForms] = useState([]); 
     const addFormData = (data) => {
        setAllForms((prev) => [...prev, data]); 
     };

    return(
        <FormContext.Provider value={{allForms,addFormData}}>
            {children}
        </FormContext.Provider>
    )
}