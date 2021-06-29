import axios from "axios"

export default class CvExperiencesService { 

    getAllByCvId(cvId) {
        return axios.get("http://localhost:8080/api/cvExperience/getAllByCv?cvId="+cvId)
    }

    addCvExperiences(values) {
        return axios.post("http://localhost:8080/api/cvExperience/add",values)
    }

    deleteCvExperience(cvExperienceId) {
        return axios.post("http://localhost:8080/api/cvExperience/delete?id="+cvExperienceId)
    }
    updateCvExperience(values,intcvExperienceId) {
        return axios.post("http://localhost:8080/api/cvExperience/update?id="+intcvExperienceId,values)
    }

  

    
    
}