import { httpStore } from "../../../util/config";

export class UserApi {
    async getAll() {
        const res = await httpStore.get('/api/users/getall');
        return res.data.content;
    }

    // {
    //     "email": "string",
    //     "password": "string",
    //     "name": "string",
    //     "gender": true,
    //     "phone": "string"
    //   }
    async addUser(newUser) {
        const res = await httpStore.post('/api/users/signup', newUser);
        return res.data.content;

    }

    async getAllPaging(params) {

        let [queryKey,pageIndex] = params.queryKey;
        let pageSize = 20;
        const res = await httpStore.get(`/api/Users/paging?pageIndex=${pageIndex}&pageSize=${pageSize}`);
        console.log(res.data.content)
        return res.data.content;
    }
}

export const userApi = new UserApi();