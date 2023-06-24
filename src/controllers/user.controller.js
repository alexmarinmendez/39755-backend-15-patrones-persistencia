import UserService from "../services/userService.js"
import UserDTO from '../dtos/userDTO.js'
const userService = new UserService()

const getUsers = async(req, res) => {
    let result = await userService.getUsers()
    let resultDTO = result.map(user => new UserDTO(user))
    res.json(resultDTO)
}

const saveUser = async(req, res) => {
    let user = req.body
    //TODO: validaciones
    let result = await userService.addUser(user)
    res.json(new UserDTO(result))
}

export default { getUsers, saveUser }