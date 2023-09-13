import axios from 'axios';

const FecthAllUser = (headers, props) => {

    return axios.get(`https://wlp.howizbiz.com/api/species?paginate=true&page=${props.page}&perpage=${props.perpage}&with=roles,createdBy&search=${props.search}&inactive=-1`, headers);

}
const PostCreateUser = (headers, user) => {
    return axios.post('https://wlp.howizbiz.com/api/species', user, headers);
}
const UpdateUser = (headers, animal) => {
    return axios.put(`https://wlp.howizbiz.com/api/species/${animal.id}`, animal.animalNew, headers);
}

const DeleteUser = (headers, animal) => {
    return axios.delete(`https://wlp.howizbiz.com/api/species/${animal.data.id}`, headers, animal);
}

const LoginApi = (username, password) => {
    return axios.post('https://wlp.howizbiz.com/api/web-authenticate', { username, password });
}
const GetRanks = (headers) => {
    return axios.get('https://wlp.howizbiz.com/api/phanloaihoc?ranks[]=Kingdom&ranks[]=Phylum&ranks[]=Class&ranks[]=Order&ranks[]=Family&ranks[]=Genus', headers);
}
const GetUser = (headers) => {
    return axios.get('https://wlp.howizbiz.com/api/me', headers);
}
const PostImage = (headers, formData) => {
    return axios.post('https://wlp.howizbiz.com/api/attach-multiple-feature-file', formData, headers);
}
export { FecthAllUser, PostCreateUser, UpdateUser, DeleteUser, LoginApi, GetRanks, GetUser, PostImage };