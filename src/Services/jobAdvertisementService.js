import axios from "axios"

export default class JobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("http://localhost:8080/api/jobad/findByjobAdIsActiveTrue")
    }

    jobAdAdd(values){
        return axios.post("http://localhost:8080/api/jobad/add",values)
    }

    getJobAdvertisementsNotConfirmed(){
        return axios.get("http://localhost:8080/api/jobad/getAllByJobAdIsConfirmedFalse")
    }

    jobAdChangeConfirmedFalseToTrue(jobAdId){

        return axios.post("http://localhost:8080/api/jobad/changeConfirmedFalseToTrue?id="+jobAdId)
    }

    jobAdRemove(jobAdId){

        return axios.post("http://localhost:8080/api/jobad/remove?id="+jobAdId)
    }

    jobAdchangePassiveToActive(jobAdId){

        return axios.post("http://localhost:8080/api/jobad/changePassiveToActive?id="+jobAdId)

}

getAllByJobAdIsConfirmedFalseAndConfirmRequestTrue(){
    return axios.get("http://localhost:8080/api/jobad/getAllByJobAdIsConfirmedFalseAndConfirmRequestTrue")
}


jobAdChangeConfirmRequestTrueToFalse(jobAdId){

    return axios.post("http://localhost:8080/api/jobad/changeConfirmRequestTrueToFalse?id="+jobAdId)
}
}