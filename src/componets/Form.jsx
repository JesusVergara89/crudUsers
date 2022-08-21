import React from 'react'

const Form = ({ createUser, updateUserById, obj, reset, handleSubmit, register }) => {

    const defaultValues = {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
    }

    const submit = (data) => {
        if (obj?.id !== undefined) {
            updateUserById(obj.id, data)
            reset(defaultValues)
        } else {
            createUser(data)
        }
        reset(defaultValues)
    }
    return (
        <article className='form-article'>
            <form onSubmit={handleSubmit(submit)} >

                <label htmlFor="email"></label>
                <input type="text" id='email' placeholder='Email' {...register('email')} />



                <label htmlFor="password"></label>
                <input type="password" id='password' placeholder='Password' {...register('password')} />



                <label htmlFor="first_name"></label>
                <input type="text" id='first_name' placeholder='First name' {...register('first_name')} />



                <label htmlFor="last_name"></label>
                <input type="text" id='last_name' placeholder='Last name' {...register('last_name')} />



                <label htmlFor="birthday"></label>
                <input type="date" id='birthday' placeholder='Birthday' {...register('birthday')} />


                <button>Submit</button>

            </form>
        </article>
    )
}

export default Form