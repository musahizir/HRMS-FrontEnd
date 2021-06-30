import axios from "axios"

export default class EmployeeService {
    getEmplyoees() {
        return axios.get("http://localhost:8080/api/employee/getAll")
    }

    updateEmployees(values){
        return axios.post("http://localhost:8080/api/employee/update?id="+47,values)
    }

    addEmployees(values){
        return axios.post("http://localhost:8080/api/employee/add",values)
    }

    getEmployee(){
        return axios.get("http://localhost:8080/api/employee/getById?id="+47)
    }
    
}