import { Formik,useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import { Form,  Dropdown, Button, Segment, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import JobAdDropdownInput from '../utilities/customFormControls/JobAdDropdownInput';
import JobPositionService from '../Services/jobPositionService';
import JobAdWorkingStyleService from '../Services/jobAdWorkingStyleService';
import JobAdShiftService from '../Services/jobAdShiftService';
import CityService from '../Services/cityService';
import JobAdInput from '../utilities/JobAdInput';


export default function JobAdFilter({handleOnFilter}) {

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

      const [cityIndex, setCityIndex] = useState([])

      const handleChangeCity = (e, { value }) => {
        setCityIndex(value)
        // console.log(value)
        
    }
    const [jobPositionIndex, setJobPositionIndex] = useState([])

      const handleChangeJobPosition = (e, { value }) => {
        setJobPositionIndex(value)
      }

      const [jobAdWorkingStyleIndex, setJobAdWorkingStyleIndex] = useState([])
      
      const handleChangeJobAdWorkingStyle = (e, { value }) => {
        setJobAdWorkingStyleIndex(value)
        
        
    }

    const [jobAdShiftsIndex, setJobAdShiftsIndex] = useState([])
      
      const handleChangeJobAdShifts = (e, { value }) => {
        setJobAdShiftsIndex(value)
        
        
    }
      const formik = useFormik({
        
        initialValues: {
          jobId: "",
          cityId: "",
          jobAdShiftId: "",
          jobAdWorkingStyleId: ""
    
        },
    
    
        onSubmit: (values) => {
          handleOnFilter(values);
          
        },
    
      }
    
      );
    // const initialValues ={

        
    //     cityId: undefined,
    //     jobId: undefined,
    //     jobAdWorkingStyleId: undefined,
    //     jobAdShiftId: undefined
    // }

    // const onSubmit =(values) => {

    // handleOnFilter(values);
    // }

    return (
        <div>

          <Form onSubmit={formik.handleSubmit}>
         
            <Grid>
              <GridRow>
          Şehirler :
          <Dropdown 
                
                clearable
                placeholder="Seçiniz"
                search
                selection
                multiple
                onChange={handleChangeCity}
                value={cityIndex}
                // options={cityOption}
                options={cities.map((city, index) => {
                  return { text: city.cityName, key: city.index, value: city.cityId }
              })}

              />
              </GridRow>

<GridRow >
İş Pozisyonları :
<Dropdown
                clearable
                placeholder="Seçiniz"
                search
                selection
                multiple
                onChange={handleChangeJobPosition}
                value={jobPositionIndex}
                options={jobPositions.map((jobPosition, index) => {
                  return { text: jobPosition.jobName, key: jobPosition.index, value: jobPosition.jobId }
              })}

              />
              </GridRow>
              <GridRow >
Çalışma Şekli :
<Dropdown
                clearable
                placeholder="Seçiniz"
                search
                selection
                multiple
                onChange={handleChangeJobAdWorkingStyle}
                value={jobAdWorkingStyleIndex}
                options={jobAdWorkingStyles.map((jobAdWorkingStyle, index) => {
                  return { text: jobAdWorkingStyle.jobAdWorkingStyleType, key: jobAdWorkingStyle.index, value: jobAdWorkingStyle.jobAdWorkingStyleId }
              })}

              />
              </GridRow>
            <GridRow >
Çalışma Türü : 
<Dropdown
                clearable
                placeholder="Seçiniz"
                search
                selection
                multiple
                onChange={handleChangeJobAdShifts}
                value={jobAdShiftsIndex}
                options={jobAdShifts.map((jobAdShift, index) => {
                  return { text: jobAdShift.jobAdShiftType, key: jobAdShift.index, value: jobAdShift.jobAdShiftId }
              })}

              />
              </GridRow> 

</Grid>

          </Form>
          
          <Button
                type="button"
                color="grey"
                
                onClick={console.log(cityIndex,jobPositionIndex,jobAdWorkingStyleIndex,jobAdShiftsIndex),() => handleOnFilter({ cityId:cityIndex, jobId: jobPositionIndex ,jobAdWorkingStyleId: jobAdWorkingStyleIndex, jobAdShiftId: jobAdShiftsIndex})}
            >
                Filtrele
            </Button>
            
           
        </div>
    )
}
