import axios from "axios"

export default class CvDetailsService { 

    getAllByCvId(cvId) {
        return axios.get("http://localhost:8080/api/cvDetails/getAllByCv?cvId="+cvId)
    }

    addCvDetails(values) {
        return axios.post("http://localhost:8080/api/cvDetails/add",values)
    }

    deleteCvDetails(cvDetailsId) {
        return axios.post("http://localhost:8080/api/cvDetails/remove?id="+cvDetailsId)
    }

    updateCvDetails(values,intCvDetailsId){
        return axios.post("http://localhost:8080/api/cvDetails/update?id="+intCvDetailsId,values)
    }

    getCvDetail(intCvDetailsId){
        return axios.get("http://localhost:8080/api/cvDetails/getById?id="+intCvDetailsId)
    }

    
}