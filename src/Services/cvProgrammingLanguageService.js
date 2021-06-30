import axios from "axios"

export default class CvProgrammingLanguageService { 

    getAllByCvId(cvId) {
        return axios.get("http://localhost:8080/api/programmingLanguage/getAllByCv?cvId="+cvId)
    }

    addCvProgrammingLanguage(values) {
        return axios.post("http://localhost:8080/api/programmingLanguage/add",values)
    }

    deleteCvProgrammingLanguage(cvSchoolProgrammingLanguageId) {
        return axios.post("http://localhost:8080/api/programmingLanguage/delete?id="+cvSchoolProgrammingLanguageId)
    }

    updateCvProgrammingLanguage(values,intcvProgrammingLanguageId) {
        return axios.post("http://localhost:8080/api/programmingLanguage/update?id="+intcvProgrammingLanguageId,values)
    }

    getCvProgrammingLanguage(intCvProgrammingLanguageId){
        return axios.get("http://localhost:8080/api/programmingLanguage/getById?id="+intCvProgrammingLanguageId)
    }
}