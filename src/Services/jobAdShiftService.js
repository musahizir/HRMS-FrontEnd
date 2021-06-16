import axios from "axios"

export default class JobAdShiftService{
    getJobAdShifts() {
        return axios.get("http://localhost:8080/api/jobAdShift/getAll")
    }
}