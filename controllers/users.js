import { v4 as uuid4 } from 'uuid'; 


let users = []; 

export const createUser = (req,res) => {

    const user = req.body

    const userWithId = {...user, id: uuid4()}
    users.push(userWithId)
    res.send(`User: ${req.body.firstName} successfully added to database`)

};


export const  getUsers = (req, res) => {
    console.log(users)
    res.send(users)
}; 


export const getUser = (req, res) => {

    const user = users.find((user) => user.id == req.params.id)
    console.log(`found user ${user}`)
    res.send(user)
}


export const deleteUser =  (req, res) => {

    const user = users.find((user) => user.id === req.params.id)
    users = users.filter((user) => user.id != req.params.id)

    res.send(`User: ${user.firstName} successfully deleted from database`)
}


export const updateUser = (req, res) => {

    const { firstName, lastName, age, occupation } = req.body

    const user = users.find((user) => user.id === req.params.id)

    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (age) user.age = age 
    if (occupation) user.occupation = occupation

    res.send(`User: ${user.firstName} successfully updated in database`)
}