import React from 'react'

const LoginForm = () => {
    return (
        <form action=""
            className=' w-full h-full max-w-[450px] flex flex-col px-10 items-center'
        >
            <div className='w-full h-full'>
                <h1 className='my-5 text-[24px] text-center'>Авторизація</h1>
                <input
                    className='w-full text-[18px] py-5 px-3 rounded-full my-3'
                    type="text" name='name' placeholder="Ім'я" />
                <input
                    className='w-full text-[18px] py-5 px-3 rounded-full my-3'
                    type="password" name='password' placeholder='Пароль' />
                <input
                    className='w-full text-[18px] py-4 px-2 rounded-full my-5 text-white bg-[rgb(15,157,161)]'
                    type="submit" value={"Увійти"} />
            </div>
        </form>
    )
}

export default LoginForm