import { Formik, Form} from 'formik'
import CvTextInput from '../../utilities/customFormControls/CvTextInput'
import {Button } from "semantic-ui-react"
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import CvSchoolService from '../../Services/cvSchoolService';




export default function CvSchoolAdd() {
   
   
    const {cvId} = useParams()

    var intCvId = parseInt(cvId, 10);
    
   let cvSchoolService = new CvSchoolService();
        
        
   const schema = Yup.object({

    cvSchoolName: Yup.string().required("Okul Adı Giriniz"),
    cvSchoolBranch: Yup.string().required("Bölüm Giriniz"),
    cvSchoolStartDate: Yup.date().required("Başlama Tarihi Giriniz"),
    cvSchoolGraduateDate: Yup.date().required("Mezun Olma Tarihi Giriniz")
    

    
})

    
    // console.log(cvId)
    const initialValues= {
        cvId: intCvId,
        cvSchoolName: "",
        cvSchoolBranch: "",
        cvSchoolGraduateDate:"",
        cvSchoolStartDate:""
       


    }
    return (
        <div>

            <b>Cv Diller</b>
            <Formik

            initialValues={initialValues}

            validationSchema={schema}
            
            onSubmit= {(values)=>{

                cvSchoolService.addCvSchool(values);
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
                    
                  

                    <Button color ="green" type="submit">Ekle</Button>



                </Form>


            </Formik>
        </div>
    )
}
