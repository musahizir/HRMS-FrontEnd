import React, { useState, useEffect } from 'react'
import { Formik, Form} from 'formik'
import CvTextInput from '../../utilities/customFormControls/CvTextInput'
import {Button } from "semantic-ui-react"
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import CvSchoolService from '../../Services/cvSchoolService';

export default function CvSchoolUpdate() {

    const {cvSchoolId} = useParams()

    var intcvSchoolId = parseInt(cvSchoolId, 10);
    
   let cvSchoolService = new CvSchoolService();
        
        
   const schema = Yup.object({

    cvSchoolName: Yup.string().required("Okul Adı Giriniz"),
    cvSchoolBranch: Yup.string().required("Bölüm Giriniz"),
    cvSchoolStartDate: Yup.date().required("Başlama Tarihi Giriniz"),
    cvSchoolGraduateDate: Yup.date().required("Mezun Olma Tarihi Giriniz")
    

    
})

const [cvSchool, setCvSchool] = useState([])

   useEffect(()=>{

    let cvSchoolService = new CvSchoolService()

    cvSchoolService.getCvSchool(cvSchoolId).then(result=>setCvSchool(result.data.data))
    
  },[])

    
    // console.log(cvId)
    const initialValues= {
       
        cvSchoolName: cvSchool.cvSchoolName,
        cvSchoolBranch: cvSchool.cvSchoolBranch,
        cvSchoolGraduateDate: cvSchool.cvSchoolGraduateDate,
        cvSchoolStartDate:cvSchool.cvSchoolStartDate
       


    }
    return (
        <div>
            <b>Cv Diller</b>
            <Formik

            initialValues={initialValues}

            validationSchema={schema}

            enableReinitialize
            
            onSubmit= {(values)=>{

                cvSchoolService.updateCvSchool(values,intcvSchoolId);
                window.location.reload()

                // console.log(values)
                
            }}
            >

                <Form >
                    
                    <b>Diller</b>
                    <CvTextInput name="cvSchoolName" placeholder = "Okul Adı"></CvTextInput>
                    <CvTextInput name="cvSchoolBranch" placeholder = "Bölüm"></CvTextInput>
                    <CvTextInput name="cvSchoolStartDate" placeholder = "Okula Başlama Tarihi"></CvTextInput>
                    <CvTextInput name="cvSchoolGraduateDate" placeholder = "Mezun Olma Tarihi"></CvTextInput>
                    
                  

                    <Button color ="orange" type="submit">Güncelle</Button>



                </Form>


            </Formik>
        </div>
    )
}
