import axios from 'axios';

const URL = 'http://localhost:8080/humans/';

class PersonClient
{
    getPersons(userId)
    {
        return axios.get(URL + 'all/' + userId);
    }
    
    getPerson(email, password)
    {
        return axios.get(URL + email + '/' + password);
    }
    getPersonCheck(email)
    {
        return axios.get(URL + email);
    }

    add(person)
    {
        return axios.post(URL + 'add', person);
    }
    
    // delete(id)
    // {
    //     axios.post(URL + 'delete/' + id);
    // }
}

export default new PersonClient();