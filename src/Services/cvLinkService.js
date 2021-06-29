import axios from "axios"

export default class CvLinkService { 

    getAllByCvId(cvId) {
        return axios.get("http://localhost:8080/api/cvLink/getAllByCv?cvId="+cvId)
    }

    addCvLink(values) {
        return axios.post("http://localhost:8080/api/cvLink/add",values)
    }

    deleteCvLink(cvLinkId) {
        return axios.post("http://localhost:8080/api/cvLink/delete?id="+cvLinkId)
    }
    
    updateCvLink(values,intcvLinkId) {
        return axios.post("http://localhost:8080/api/cvLink/update?id="+intcvLinkId,values)
    }
}