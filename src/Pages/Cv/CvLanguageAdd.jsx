import { Formik, Form} from 'formik'
import CvTextInput from '../../utilities/customFormControls/CvTextInput'
import {Button } from "semantic-ui-react"
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import CvLanguageService from '../../Services/cvLanguageService';




export default function CvLanguageAdd() {
   
   
    const {cvId} = useParams()

    var intCvId = parseInt(cvId, 10);
    
   let cvLanguageService = new CvLanguageService();
        
        
   const schema = Yup.object({

    cvLanguageName: Yup.string().required("Dil Adı Giriniz"),
    cvLanguageLevel: Yup.number().min(0).max(5).required("Dil Seviyesi Giriniz")


    
})

    
    // console.log(cvId)
    const initialValues= {
        cvId: intCvId,
        cvLanguageName: "",
        cvLanguageLevel: ""
       


    }
    return (
        <div>

            <b>Cv Diller</b>
            <Formik

            initialValues={initialValues}

            validationSchema={schema}
            
            onSubmit= {(values)=>{

                cvLanguageService.addCvLanguages(values);
                window.location.reload()

                // console.log(values)
                
            }}
            >

                <Form >
                    
                    <b>Diller</b>
                    <CvTextInput name="cvLanguageName" placeholder = "Dil İsmi"></CvTextInput>
                    <CvTextInput name="cvLanguageLevel" placeholder = "Dil Seviyesi (1-5)"></CvTextInput>
                    
                  

                    <Button color ="green" type="submit">Ekle</Button>



                </Form>


            </Formik>
        </div>
    )
}
