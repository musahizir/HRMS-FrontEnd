import axios from "axios"

export default class CvService {
    getAllByCandidateId() {
        return axios.get("http://localhost:8080/api/cvController/getAllByCandidateId?id="+44)
    }
}