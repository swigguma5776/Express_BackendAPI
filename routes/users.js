import express from 'express'; 

//internal imports
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js'

const router = express.Router(); 


// API route to get our users
router.get('/', getUsers)

// API route to get user
router.get('/:id', getUser)

// API route to create user 
router.post('/', createUser)

// API route to delete user 
router.delete('/:id', deleteUser)

// API route to update user 
router.patch('/:id', updateUser)


export default router