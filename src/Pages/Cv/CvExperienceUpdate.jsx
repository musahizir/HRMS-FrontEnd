import React, { useState, useEffect } from 'react'
import { Formik, Form} from 'formik'
import CvTextInput from '../../utilities/customFormControls/CvTextInput'
import {Button } from "semantic-ui-react"
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import CvExperiencesService from '../../Services/cvExperienceService';



export default function CvExperienceUpdate() {
   
   
    const {cvExperienceId} = useParams()

    var intcvExperienceId = parseInt(cvExperienceId, 10);
    
   let cvExperienceService = new CvExperiencesService();

   const [cvExperience, setCvExperience] = useState([])

   useEffect(()=>{

    let cvExperienceService = new CvExperiencesService()

    cvExperienceService.getCvExperience(cvExperienceId).then(result=>setCvExperience(result.data.data))
    
  },[])
     
        
   const schema = Yup.object({

    cvExperienceCompanyName: Yup.string().required("Şirket Adı giriniz"),
    cvExperiencePosition: Yup.string().required("İş Pozisyonu giriniz"),
    cvExperienceLeaveDate: Yup.date().required("Ayrılma Tarihi giriniz"),
    cvExperienceStartDate: Yup.date().required("İşe Giriş Tarihi giriniz")
    
})



  
    
    // console.log(cvId)
    const initialValues= {
       
       
        cvExperienceCompanyName: cvExperience.cvExperienceCompanyName,
        cvExperienceLeaveDate: cvExperience.cvExperienceLeaveDate,
        cvExperienceStartDate: cvExperience.cvExperienceStartDate,
        cvExperiencePosition: cvExperience.cvExperiencePosition
        
    }
    return (
        <div>

            <b>Cv İş Geçmişi</b>
            <Formik

            initialValues={initialValues}

            enableReinitialize  

            validationSchema={schema}
            
            onSubmit= {(values)=>{

                cvExperienceService.updateCvExperience(values,intcvExperienceId );
                 window.location.reload()

                console.log(values)
                
            }}
            >

                <Form >
                <b>İş Tecrübesi</b>
                    <CvTextInput name="cvExperienceCompanyName" placeholder = "Şirket Adı"></CvTextInput>
                    <CvTextInput name="cvExperienceLeaveDate" placeholder = "İşten Ayrılma Tarihi"></CvTextInput>
                    <CvTextInput name="cvExperienceStartDate" placeholder = "İşe Başlama Tarihi"></CvTextInput>
                    <CvTextInput name="cvExperiencePosition" placeholder = "Çalışılan İş Pozisyonu"></CvTextInput>

                    <Button color ="orange" type="submit">Güncelle</Button>



                </Form>


            </Formik>
        </div>
    )
}
