import axios from "axios"

export default class FavoriteJobAdService {
  
    addFavoriteJobAd(jobAdvertisement){
        return axios.post("http://localhost:8080/api/favoriteJobAd/add",jobAdvertisement)
    }

    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/favoriteJobAd/getByCandidateId?id="+id)
    }

    
    
}