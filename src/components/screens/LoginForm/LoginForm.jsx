import React from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import { userLogin } from '../../../redux/slices/auth/authAction';


const LoginForm = () => {
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();

    const submitForm = async (data) => {
        dispatch(userLogin(data))

    }
    return (
        <form onSubmit={handleSubmit(submitForm)}
            className=' w-full h-full max-w-[450px] flex flex-col px-10 items-center'
        >
            <div className='w-full h-full'>
                <h1 className='my-5 text-[24px] text-center'>Авторизація</h1>
                <input
                    className='w-full text-[18px] py-5 px-3 rounded-full my-3'
                    type="text" {...register('name')}
                    required
                    placeholder="Ім'я" />
                <input
                    className='w-full text-[18px] py-5 px-3 rounded-full my-3'
                    type="password" {...register('password')}
                    required
                    placeholder='Пароль' />
                <input
                    className='w-full text-[18px] py-4 px-2 rounded-full my-5 text-white bg-[rgb(15,157,161)]'
                    type="submit" value={"Увійти"} disabled={loading} />
            </div>
        </form>
    )
}

export default LoginForm