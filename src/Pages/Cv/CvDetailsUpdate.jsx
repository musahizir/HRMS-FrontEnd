import React, { useState, useEffect } from 'react'
import { Formik, Form, useFormik} from 'formik'
import CvTextInput from '../../utilities/customFormControls/CvTextInput'
import {Button } from "semantic-ui-react"
import { useParams } from 'react-router-dom';
import CvDetailsService from '../../Services/cvDetailsService';
import * as Yup from "yup";



export default function CvDetailsUpdate() {
   
   
    const {cvDetailsId} = useParams()

    var intCvDetailsId = parseInt(cvDetailsId, 10);
    
   let cvDetailsService = new CvDetailsService();

   const [cvDetails, setCvDetails] = useState([])

   useEffect(()=>{

    let cvDetailService = new CvDetailsService()

    cvDetailService.getCvDetail(cvDetailsId).then(result=>setCvDetails(result.data.data))
    
  },[])
     
        
   const schema = Yup.object({

    cvDetailsField: Yup.string().required("Açıklama giriniz")
    
})

 


  
    // console.log(cvId)
    const initialValues= {
       
       
         cvDetailsField : cvDetails.cvDetailsField
        
    }
    return (
        <div>

            <b>Cv Detayları</b>
            <Formik


            enableReinitialize  

            initialValues={initialValues}

            validationSchema={schema}
            
            onSubmit= {(values)=>{

                cvDetailsService.updateCvDetails(values,intCvDetailsId );
                 window.location.reload()

                
                
            }}
            >

                <Form >
                      <b>Açıklama</b>
                    <CvTextInput name="cvDetailsField" placeholder = "Açıklama"></CvTextInput>

                    <Button color ="orange" type="submit">Güncelle</Button>



                </Form>


            </Formik>
        </div>
    )
}
