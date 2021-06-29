import React from 'react'
import { Formik, Form} from 'formik'
import CvTextInput from '../../utilities/customFormControls/CvTextInput'
import {Button } from "semantic-ui-react"
import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import CvLinkService from '../../Services/cvLinkService';

export default function CvLinkUpdate() {

    const {cvLinkId} = useParams()

    var intcvLinkId = parseInt(cvLinkId, 10);
    
   let cvLinkService = new CvLinkService();
        
        
   const schema = Yup.object({

    linkName: Yup.string().required("Link Giriniz"),
    


    
})

    
    // console.log(cvId)
    const initialValues= {
        
        linkName: ""
        
       


    }
    return (
        <div>
             <b>Cv Linkler</b>
            <Formik

            initialValues={initialValues}

            validationSchema={schema}
            
            onSubmit= {(values)=>{

                cvLinkService.updateCvLink(values,intcvLinkId);
                window.location.reload()

                // console.log(values)
                
            }}
            >

                <Form >
                    
                    <b>Linkler</b>
                    <CvTextInput name="linkName" placeholder = "Link"></CvTextInput>
                   
                    
                  

                    <Button color ="orange" type="submit">Güncelle</Button>



                </Form>


            </Formik>
        </div>
    )
}
