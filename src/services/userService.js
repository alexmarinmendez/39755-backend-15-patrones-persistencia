// import UserDaoArray from "../daos/userDaoArray.js";
import UserDaoFile from "../daos/userDaoFile.js"

export default class UserService {
    constructor() {
        // this.userDao = new UserDaoArray()
        this.userDao = new UserDaoFile()
    }

    getUsers = async() => {
        return await this.userDao.getAll()
    }

    addUser = async(user) => {
        return await this.userDao.save(user)
    }
}