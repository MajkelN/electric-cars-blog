import React, {useState, useContext} from 'react';
import {StoreContext} from '../store/StoreProvider.jsx'

import  { Link } from 'react-router-dom'

import {Wrapper , FormWrapper, Form, InputBtn} from '../components/SignInComponents/Form.css'

const SignIn = (props) => {
    const { isLoggedIn, setIsLoggedIn} = useContext(StoreContext)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(login === 'Admin' && password === 'Admin123') {
            setIsLoggedIn(true);
            alert("Succeed to log in")
        } else {
            setIsLoggedIn(false);
            alert("Failed to log in!")
        }
    }

    const handleOnChangeLogin = (e) => setLogin(e.target.value);
    const handleOnChangePassword = (e) => setPassword(e.target.value);

    return ( 
        <>
            <Wrapper>
                <FormWrapper>
                    <h3>Sign In</h3>
                    <Form  onSubmit={handleSubmit}>        
                        <input type="text" value={login} onChange={handleOnChangeLogin} placeholder="Login"/>
                        <input type="password" value={password} onChange={handleOnChangePassword}  placeholder="Password"/>
                        <InputBtn type='submit' >Sign in</InputBtn>
                    </Form>
                    { isLoggedIn ? <Link to='/add'>Keep going</Link>: null }
                </FormWrapper>
            </Wrapper>
        </>
    );
}
 
export default SignIn;