import axios from "axios"

export default class CvSchoolService { 

    getAllByCvId(cvId) {
        return axios.get("http://localhost:8080/api/cvSchool/getAllByCv?cvId="+cvId)
    }

    addCvSchool(values) {
        return axios.post("http://localhost:8080/api/cvSchool/add",values)
    }

    deleteCvSchool(cvSchoolId) {
        return axios.post("http://localhost:8080/api/cvSchool/delete?id="+cvSchoolId)
    }

   
    updateCvSchool(values,intcvSchoolId) {
        return axios.post("http://localhost:8080/api/cvSchool/update?id="+intcvSchoolId,values)
    }
}
    

    
