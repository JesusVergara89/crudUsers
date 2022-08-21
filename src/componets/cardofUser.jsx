import React from 'react'
import axios from 'axios'

const cardofUser = ({ user, URL, getAllUsers, setObj, setIsShowForm, reset }) => {

    const deleteUser = (id) => {
        axios.delete(`${URL}${id}/`)
            .then(res => {
                console.log(res.data)
                getAllUsers()
            })
            .catch(err => console.log(err))
    }

    const updateUser = () => {
        setIsShowForm(true)
        const defaultValues = {
            email: user.email,
            password: user.password,
            first_name: user.first_name,
            last_name: user.last_name,
            birthday: user.birthday
        }
        reset(defaultValues)
        setObj(user)
    }
    return (
        <article className='Card-user'>

            <h3 className='name-tittle'>{`id: ${user.id}`}</h3>
            <ul>
                <li><b>email : </b>{user.email}</li>
                <li><b>password : </b>{user.password}</li>
                <li><b>first name : </b>{user.first_name}</li>
                <li><b>last name : </b>{user.last_name}</li>
                <li><b>Birthday : </b>{user.birthday}</li>
            </ul>

            <button onClick={() => deleteUser(user.id)} >🗑</button>
            <button onClick={updateUser} >🗐</button>

        </article>
    )
}

export default cardofUser