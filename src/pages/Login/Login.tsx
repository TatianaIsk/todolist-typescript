import React, {useState} from 'react';
import Title from './../../../src/components/Title/Title';
import './Login.css';
import Input from "../../components/Input/Input";
import {Link} from "react-router-dom";

const Login: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <div className='container'>
            <Title text="Login"/>
            <div className='inputLogin'>
                <Input
                    type='text'
                    placeholder='Username'
                    value={login}
                    onChange={onChangeLogin}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <Link to='/register'>
                Sing in
            </Link>
        </div>
    );
};

export default Login;