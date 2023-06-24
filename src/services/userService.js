import PersistenceFactory from "../daos/persistenceFactory.js"

export default class UserService {
    constructor() {
        this.userDao
        this.init()
    }

    init = async() => {
        this.userDao = await PersistenceFactory.getPersistence()
    }

    getUsers = async() => {
        return await this.userDao.getAll()
    }

    addUser = async(user) => {
        return await this.userDao.save(user)
    }
}