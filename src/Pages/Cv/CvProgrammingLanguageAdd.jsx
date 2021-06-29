import { Formik, Form} from 'formik'
import CvTextInput from '../../utilities/customFormControls/CvTextInput'
import {Button } from "semantic-ui-react"
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import CvProgrammingLanguageService from '../../Services/cvProgrammingLanguageService';




export default function CvProgrammingLanguageAdd() {
   
   
    const {cvId} = useParams()

    var intCvId = parseInt(cvId, 10);
    
   let cvProgrammingLanguageService = new CvProgrammingLanguageService();
        
        
   const schema = Yup.object({

    cvProgrammingLanguageName: Yup.string().required("Dil Adı Giriniz"),
    cvProgrammingLanguageLevel: Yup.number().min(0).max(5).required("Dil Seviyesi Giriniz")


    
})

    
    // console.log(cvId)
    const initialValues= {
        cvId: intCvId,
        cvProgrammingLanguageName: "",
        cvProgrammingLanguageLevel: ""
       


    }
    return (
        <div>

            <b>Cv Diller</b>
            <Formik

            initialValues={initialValues}

            validationSchema={schema}
            
            onSubmit= {(values)=>{

                cvProgrammingLanguageService.addCvProgrammingLanguage(values);
                window.location.reload()

                // console.log(values)
                
            }}
            >

                <Form >
                    
                    <b>Diller</b>
                    <CvTextInput name="cvProgrammingLanguageName" placeholder = "Dil İsmi"></CvTextInput>
                    <CvTextInput name="cvProgrammingLanguageLevel" placeholder = "Dil Seviyesi (1-5)"></CvTextInput>
                    
                  

                    <Button color ="green" type="submit">Ekle</Button>



                </Form>


            </Formik>
        </div>
    )
}
