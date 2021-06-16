import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import CityService from '../Services/cityService';
import JobPositionService from '../Services/jobPositionService';
import JobAdWorkingStyleService from '../Services/jobAdWorkingStyleService';
import JobAdShiftService from '../Services/jobAdShiftService';
import JobAdvertisementService from '../Services/jobAdvertisementService';
import * as Yup from "yup";
import { Form, Input, Grid, Button } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react'


export default function JobAdForm() {

  let jobAdvertisementService = new JobAdvertisementService();

  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [jobAdWorkingStyles, setJobAdWorkingStyles] = useState([]);
  const [jobAdShifts, setJobAdShifts] = useState([]);


  useEffect(() => {

    let cityService = new CityService();
    cityService.getCities().then((result) => { setCities(result.data.data) })
  }, []
  )
  useEffect(() => {

    let jobPositionService = new JobPositionService();
    jobPositionService.getJobPositions().then((result) => { setJobPositions(result.data.data) })
  }, []
  )
  useEffect(() => {

    let jobAdWorkingStyleService = new JobAdWorkingStyleService();
    jobAdWorkingStyleService.getJobAdWorkingStyles().then((result) => { setJobAdWorkingStyles(result.data.data) })
  }, []
  )
  useEffect(() => {

    let jobAdShiftService = new JobAdShiftService();
    jobAdShiftService.getJobAdShifts().then((result) => { setJobAdShifts(result.data.data) })
  }
    , []
  )
  
  const handleChangeNotFormik = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  // const JobAdAddSchema = Yup.object().shape({

  //   jobPositionId: Yup.string().required("İş pozisyonu seçiniz"),
  //   cityId: Yup.string().required("Şehir seçiniz"),
  //   jobAdApplicationEnd: Yup.date().nullable().required("Başvuru bitiş zamanı giriniz"),
  //   jobAdShiftType: Yup.string().required("Çalışma türünü seçiniz"),
  //   jobAdWorkingStyleType: Yup.string().required("Çalışma şeklini seçiniz")
  // });
  
  

  const formik = useFormik({
    initialValues: {
      jobId: "",
        cityId: "",
        jobAdMaxOpenPosition: "",
        jobAdApplicationEnd: "",
        jobAdMinWage: "",
        jobAdMaxWage: "",
        jobAdDescription: "",
        jobAdShiftId: "",
        jobAdWorkingStyleId: ""
 
      },

      // validationSchema: JobAdAddSchema,

      // onSubmit: values => {
      //   alert(JSON.stringify(values, null, 2));
      //   console.log(values)
      // },
      
      onSubmit: (values) => {
        values.employerId = 42;
        jobAdvertisementService.jobAdAdd(values).then((response)=> console.log(response.data.message))
        // console.log(values);
      },
        
      },

    );
    
    const cityOption = cities.map((city, index) => ({
      key: index,
      text: city.cityName,
      value: city.cityId,
    }));
   
    const jobPositionOption = jobPositions.map((jobPosition, index) => ({
      key: index,
      text: jobPosition.jobName,
      value: jobPosition.jobId,
    }));

    const jobAdWorkingStyleOption = jobAdWorkingStyles.map((jobAdWorkingStyle, index) => ({
      key: index,
      text: jobAdWorkingStyle.jobAdWorkingStyleType,
      value: jobAdWorkingStyle.jobAdWorkingStyleId,
    }));

    const  jobAdShiftOption = jobAdShifts.map((jobAdShift, index) => ({
      key: index,
      text: jobAdShift.jobAdShiftType,
      value: jobAdShift.jobAdShiftId,
    }));

  return (


    <div className="job-ad-form">

     

          <Form onSubmit={formik.handleSubmit}>


            <Grid>
              <Grid.Column width={8}>
                <label><b>Şehir</b></label>
                <Form.Field>

                  <Dropdown
                    clearable
                    item
                    placeholder="Seçiniz"
                    search
                    selection
                    onChange={(event,data) =>
                      handleChangeNotFormik(data.value, "cityId")
                    }
                    onBlur={formik.onBlur}
                    id="cityId"
                    value={formik.values.cityId}
                    options={cityOption}
                   
                  />

                </Form.Field>
              </Grid.Column>
              <Grid.Column width={8}>
                <label><b>İş Pozisyonu</b></label>
                <Form.Field>

                <Dropdown
                    clearable
                    item
                    placeholder="Seçiniz"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeNotFormik(data.value, "jobId")
                    }
                    onBlur={formik.onBlur}
                    id="jobId"
                    value={formik.values.jobId}
                    options={jobPositionOption}
                   
                  />
                 

                </Form.Field>
              </Grid.Column>
            </Grid>

            <Grid>
              <Grid.Column width={8}>
                <label><b>Çalışma Şekli</b></label>
                <Form.Field>

                <Dropdown
                    clearable
                    item
                    placeholder="Seçiniz"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeNotFormik(data.value, "jobAdWorkingStyleId")
                    }
                    onBlur={formik.onBlur}
                    id="jobAdWorkingStyleId"
                    value={formik.values.jobAdWorkingStyleId}
                    options={jobAdWorkingStyleOption}
                   
                  />
                 

                </Form.Field>
              </Grid.Column>
              <Grid.Column width={8}>
                <label><b>Çalışma Türü</b></label>
                <Form.Field>

                <Dropdown
                    clearable
                    item
                    placeholder="Seçiniz"
                    search
                    selection
                    onChange={(event, data) =>
                      handleChangeNotFormik(data.value, "jobAdShiftId")
                    }
                    onBlur={formik.onBlur}
                    id="jobAdShiftId"
                    value={formik.values.jobAdShiftId}
                    options={jobAdShiftOption}
                   
                  />


                </Form.Field>
              </Grid.Column>
            </Grid>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <label><b>Açık Posisyon Adedi</b></label>

                  <Input
                  style={{ width: "100%" }}
                  id="jobAdMaxOpenPosition"
                  name="jobAdMaxOpenPosition"
                  error={Boolean(formik.errors.jobAdMaxOpenPosition)}
                  onChange={formik.handleChange}
                  value={formik.values.jobAdMaxOpenPosition}
                  onBlur={formik.handleBlur}
                  type="number"
                 
                />
                
                  

                </Grid.Column>
                <Grid.Column width={8}>
                  <label> <b>Son Başvuru Tarihi</b></label>

                  <Input
                  style={{ width: "100%" }}
                  id="jobAdApplicationEnd"
                  name="jobAdApplicationEnd"
                  error={Boolean(formik.errors.jobAdApplicationEnd)}
                  onChange={formik.handleChange}
                  value={formik.values.jobAdApplicationEnd}
                  onBlur={formik.handleBlur}
                  type="date"
                  
                />
                  

                </Grid.Column>
              </Grid>
            </Form.Field>

            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <label> <b>En Düşük Maaş</b></label>

                  <Input
                  style={{ width: "100%" }}
                  id="jobAdMinWage"
                  name="jobAdMinWage"
                  error={Boolean(formik.errors.jobAdMinWage)}
                  onChange={formik.handleChange}
                  value={formik.values.jobAdMinWage}
                  onBlur={formik.handleBlur}
                  type="number"
                  
                />

                
                </Grid.Column>
                <Grid.Column width={8}>
                  <label><b>En Yüksek Maaş</b></label>

                  <Input
                  style={{ width: "100%" }}
                  id="jobAdMaxWage"
                  name="jobAdMaxWage"
                  error={Boolean(formik.errors.jobAdMaxWage)}
                  onChange={formik.handleChange}
                  value={formik.values.jobAdMaxWage}
                  onBlur={formik.handleBlur}
                  type="number"
                  
                />
                  
                </Grid.Column>
              </Grid>


            </Form.Field>

            <Form.Field>

              <label> <b>Açıklama</b></label>
              <Input
                  style={{ width: "100%" }}
                  id="jobAdDescription"
                  name="jobAdDescription"
                  error={Boolean(formik.errors.jobAdDescription)}
                  onChange={formik.handleChange}
                  value={formik.values.jobAdDescription}
                  onBlur={formik.handleBlur}
                  type="text"
                  
                />


            </Form.Field>

            <Button
                content="Ekle"
                positive
                type="submit"
                
              />

          </Form>




        
      

    </div>
  )
}
