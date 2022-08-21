import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardofUser from './componets/CardofUser'
import Form from './componets/Form'
import { useForm } from 'react-hook-form'

const URL = 'https://users-crud1.herokuapp.com/users/'

function App() {

  const [userz, setUserz] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [obj, setObj] = useState()

  const { register, handleSubmit, reset } = useForm()

  const getAllUsers = () => {
    axios.get(URL)
      .then(res => setUserz(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createUser = (newUser) => {

    axios.post(URL, newUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, updateUser) => {

    axios.patch(`${URL}${id}/`, updateUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setObj()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))

  }

  const showForm = () => {
    setIsShowForm(!isShowForm)
    const defaultV = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: ""
    }
    reset(defaultV)
  }

  return (
    <div className="App">

      <div className='form-app'>
        <button onClick={showForm}>{isShowForm ? 'Hide' : 'Create new user'}</button>
        {isShowForm && <Form
          createUser={createUser}
          updateUserById={updateUserById}
          obj={obj}
          register={register}
          handleSubmit={handleSubmit}
          reset={reset}
        />}
      </div>
      <div className='cards-img'>
        {
          userz?.map(user => (
            <CardofUser
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              URL={URL}
              setObj={setObj}
              setIsShowForm={setIsShowForm}
              reset={reset}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App
