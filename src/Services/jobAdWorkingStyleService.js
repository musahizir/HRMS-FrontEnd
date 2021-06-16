import axios from "axios"

export default class JobAdWorkingStyleService{
    getJobAdWorkingStyles() {
        return axios.get("http://localhost:8080/api/jobAdWorkingStyle/getAll")
    }
}