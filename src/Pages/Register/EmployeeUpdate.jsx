import React, { useState, useEffect } from 'react'
import { Formik, Form} from 'formik'
import {Button } from "semantic-ui-react"
import * as Yup from "yup";
import RegisterInput from '../../utilities/customFormControls/RegisterInput';
import EmployeeService from '../../Services/employeeService';

export default function EmployeeUpdate() {

    const schema = Yup.object({

        firstName: Yup.string().required("Bu Alan Boş Bırakılmaz"),
        lastName: Yup.string().required("Bu Alan Boş Bırakılmaz"),
        email: Yup.string().required("Bu Alan Boş Bırakılmaz"),
        password: Yup.string().required("Bu Alan Boş Bırakılmaz")
        
    })

    let employeeService = new EmployeeService();

    const [employees, setEmployees] = useState([])

   useEffect(()=>{

    let employeeService = new EmployeeService()

    employeeService.getEmployee().then(result=>setEmployees(result.data.data))
    
  },[])

    const initialValues= {
       
        firstName: employees.firstName,
        lastName: employees.lastName,
        email: employees.email,
        password: employees.password
        
    }
    return (
        <div>
            <b>Güncelle</b>
            <Formik

            initialValues={initialValues}

            validationSchema={schema}

            enableReinitialize
            
            onSubmit= {(values)=>{

                employeeService.updateEmployees(values);
                window.location.reload()

                // console.log(values)
                
            }}
            >

                <Form >
                    
                   
                    <RegisterInput name="firstName" placeholder = "Ad"></RegisterInput>
                    <RegisterInput name="lastName" placeholder = "Soyad"></RegisterInput>
                    <RegisterInput name="email" placeholder = "Email"></RegisterInput>
                    <RegisterInput name="password" placeholder = "Şifre"></RegisterInput>

                    <Button color ="green" type="submit">Ekle</Button>



                </Form>


            </Formik>
        </div>
    )
}
