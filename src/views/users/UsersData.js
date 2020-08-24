
import axios from 'axios';
import {getToken} from '../../utils/session';
import {apiBase} from '../../services/Rest';



const getUsers = () => {
    const token = getToken();
    return axios.get(apiBase+'/admin/getAllUsers', { headers: {'x-auth': token} });
}


const userDetails = (userId) => {

}


export default getUsers
