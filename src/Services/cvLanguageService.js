import axios from "axios"

export default class CvLanguageService { 

    getAllByCvId(cvId) {
        return axios.get("http://localhost:8080/api/cvLanguage/getAllByCv?cvId="+cvId)
    }

    addCvLanguages(values) {
        return axios.post("http://localhost:8080/api/cvLanguage/add",values)
    }

    deleteCvLanguage(cvLanguageId) {
        return axios.post("http://localhost:8080/api/cvLanguage/delete?id="+cvLanguageId)
    }
    
    updateCvLanguage(values,intcvLanguageId) {
        return axios.post("http://localhost:8080/api/cvLanguage/update?id="+intcvLanguageId,values)
    }
}