import React, { useState, useEffect } from 'react'
import { Formik, Form} from 'formik'
import CvTextInput from '../../utilities/customFormControls/CvTextInput'
import {Button } from "semantic-ui-react"
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import CvProgrammingLanguageService from '../../Services/cvProgrammingLanguageService';



export default function CvProgrammingLanguageUpdate() {

    const {cvProgrammingLanguageId} = useParams()

    var intcvProgrammingLanguageId = parseInt(cvProgrammingLanguageId, 10);
    
   let cvProgrammingLanguageService = new CvProgrammingLanguageService();
        
        
   const schema = Yup.object({

    cvProgrammingLanguageName: Yup.string().required("Dil Adı Giriniz"),
    cvProgrammingLanguageLevel: Yup.number().min(0).max(5).required("Dil Seviyesi Giriniz")


    
})

const [cvProgrammingLanguage, setCvProgrammingLanguage] = useState([])

   useEffect(()=>{

    let cvProgrammingLanguageService = new CvProgrammingLanguageService()

    cvProgrammingLanguageService.getCvProgrammingLanguage(cvProgrammingLanguageId).then(result=>setCvProgrammingLanguage(result.data.data))
    
  },[])
    
    // console.log(cvId)
    const initialValues= {
        
        cvProgrammingLanguageName: cvProgrammingLanguage.cvProgrammingLanguageName,
        cvProgrammingLanguageLevel: cvProgrammingLanguage.cvProgrammingLanguageLevel
       


    }
    
    return (
        <div>
            
            <b>Cv Diller</b>
            <Formik

            initialValues={initialValues}

            validationSchema={schema}

            enableReinitialize
            
            onSubmit= {(values)=>{

                cvProgrammingLanguageService.updateCvProgrammingLanguage(values,intcvProgrammingLanguageId);
                window.location.reload()

                // console.log(values)
                
            }}
            >

                <Form >
                    
                    <b>Diller</b>
                    <CvTextInput name="cvProgrammingLanguageName" placeholder = "Dil İsmi"></CvTextInput>
                    <CvTextInput name="cvProgrammingLanguageLevel" placeholder = "Dil Seviyesi (1-5)"></CvTextInput>
                    
                  

                    <Button color ="orange" type="submit">Güncelle</Button>



                </Form>


            </Formik>

        </div>
    )
}
