import React, { useState, useEffect } from 'react'
import { Formik, Form} from 'formik'
import CvTextInput from '../../utilities/customFormControls/CvTextInput'
import {Button } from "semantic-ui-react"
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import CvLanguageService from '../../Services/cvLanguageService';



export default function CvLanguageUpdate() {
    
    const {cvLanguageId} = useParams()

    var intcvLanguageId = parseInt(cvLanguageId, 10);
    
   let cvLanguageService = new CvLanguageService();
        
        
   const schema = Yup.object({

    cvLanguageName: Yup.string().required("Dil Adı Giriniz"),
    cvLanguageLevel: Yup.number().min(0).max(5).required("Dil Seviyesi Giriniz")


    
})

const [cvLanguage, setCvLanguage] = useState([])

   useEffect(()=>{

    let cvLanguageService = new CvLanguageService()

    cvLanguageService.getCvLanguage(cvLanguageId).then(result=>setCvLanguage(result.data.data))
    
  },[])

    
    // console.log(cvId)
    const initialValues= {
        
        cvLanguageName: cvLanguage.cvLanguageName,
        cvLanguageLevel: cvLanguage.cvLanguageLevel
       


    }
    return (
        <div>
            <b>Cv Diller</b>
            <Formik

            initialValues={initialValues}

            validationSchema={schema}

            enableReinitialize 
            
            onSubmit= {(values)=>{

                cvLanguageService.updateCvLanguage(values,intcvLanguageId);
                window.location.reload()

                // console.log(values)
                
            }}
            >

                <Form >
                    
                    <b>Diller</b>
                    <CvTextInput name="cvLanguageName" placeholder = "Dil İsmi"></CvTextInput>
                    <CvTextInput name="cvLanguageLevel" placeholder = "Dil Seviyesi (1-5)"></CvTextInput>
                    
                  

                    <Button color ="orange" type="submit">Güncelle</Button>



                </Form>


            </Formik>
        </div>
    )
}
