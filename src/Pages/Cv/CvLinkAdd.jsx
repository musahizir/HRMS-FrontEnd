import { Formik, Form} from 'formik'
import CvTextInput from '../../utilities/customFormControls/CvTextInput'
import {Button } from "semantic-ui-react"
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import CvLanguageService from '../../Services/cvLanguageService';
import CvLinkService from '../../Services/cvLinkService';




export default function CvLinkAdd() {
   
   
    const {cvId} = useParams()

    var intCvId = parseInt(cvId, 10);
    
   let cvLinkService = new CvLinkService();
        
        
   const schema = Yup.object({

    linkName: Yup.string().required("Link Giriniz"),
    


    
})

    
    // console.log(cvId)
    const initialValues= {
        cvId: intCvId,
        linkName: ""
        
       


    }
    return (
        <div>

            <b>Cv Linkler</b>
            <Formik

            initialValues={initialValues}

            validationSchema={schema}
            
            onSubmit= {(values)=>{

                cvLinkService.addCvLink(values);
                window.location.reload()

                // console.log(values)
                
            }}
            >

                <Form >
                    
                    <b>Linkler</b>
                    <CvTextInput name="linkName" placeholder = "Link"></CvTextInput>
                   
                    
                  

                    <Button color ="green" type="submit">Ekle</Button>



                </Form>


            </Formik>
        </div>
    )
}
