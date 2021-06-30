import React from 'react'
import { Formik, Form} from 'formik'
import CvTextInput from '../../utilities/customFormControls/CvTextInput'
import {Button } from "semantic-ui-react"
import { useParams } from 'react-router-dom';
import CvDetailsService from '../../Services/cvDetailsService';
import * as Yup from "yup";



export default function CvDetailsAdd() {
   
   
    const {cvId} = useParams()

    var intCvId = parseInt(cvId, 10);
    
   let cvDetailsService = new CvDetailsService();
        
        
   const schema = Yup.object({

    cvDetailsField: Yup.string().required("Açıklama giriniz")
    
})


  
    
    // console.log(cvId)
    const initialValues= {
       
        cvId: intCvId,
        cvDetailsField: ""
        
    }
    return (
        <div>

            <b>Cv Detayları</b>
            <Formik

            initialValues={initialValues}

            validationSchema={schema}
            
            onSubmit= {(values)=>{

                cvDetailsService.addCvDetails(values);
                window.location.reload()

                // console.log(values)
                
            }}
            >

                <Form >
                    
                    <b>Açıklama</b>
                    <CvTextInput name="cvDetailsField" placeholder = "Açıklama"></CvTextInput>

                    <Button color ="green" type="submit">Ekle</Button>



                </Form>


            </Formik>
        </div>
    )
}
