import React, { useState } from 'react'
import { Formik, Form} from 'formik'
import CvTextInput from '../utilities/customFormControls/CvTextInput';
import {Button } from "semantic-ui-react"
import CvService from '../Services/cvService';
import * as Yup from "yup";

export default function CvCandidateAdd() {

   
    let cvService = new CvService();
        
        
    const schema = Yup.object({
 
     cvName: Yup.string().required("Bu Alan Boş Bırakılmaz")
     
 })
 
 
   
     
     // console.log(cvId)
     const initialValues= {
        
         cvName: ""
         
         
     }
     const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));

     const [isLoading, setIsLoading] = useState(false);

    
    return (
        <div>
            <b>Cv Ekle</b>
            <Formik

            initialValues={initialValues}

            validationSchema={schema}
            
            onSubmit= {(values)=>{
                
                setIsLoading(true);
      
                fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                wait(2000).then(json => {console.log(json); setIsLoading(false)} )

                wait(1000).then(()=> cvService.cvAdd(values))
                
                values.id = 44;
                wait(1700).then(()=> window.location.reload()) 

                console.log(values)
                
            }}
            >

                <Form >
                    
                    
                    <CvTextInput name="cvName" placeholder = "Cv Adı"></CvTextInput>
     
                    <p>{  !isLoading &&  
        <Button type="submit" className="btn btn-danger mr-2" color = "green"  >Ekle</Button>}
        {  isLoading &&  
        <Button className="btn btn-danger mr-2" disabled color="green" floated ="right">Ekleniyor... <i className="fas fa-spinner fa-spin"></i></Button>}
        </p>


                </Form>


            </Formik>
            
        </div>
    )
}
