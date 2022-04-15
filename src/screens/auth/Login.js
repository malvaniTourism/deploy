import React, { useState } from "react";
import { comnPost } from "../../services/comnServ";
import { useNavigate } from "react-router-dom";
import validator from 'validator';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [err, setErr] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const validate = () => {
        submit();

        if (email === '') {
            setErr(true);
            setErrMsg('Enter Email Address')
        } else if (!validator.isEmail(email)) {
            setErr(true);
            setErrMsg('Enter Valid Email Address')
        } else if (pass === '') {
            setErr(true);
            setErrMsg('Enter Password')
        // } else if (!validator.isStrongPassword(pass)) {
        //     setErr(true);
        //     setErrMsg('Enter Strong Password')
        } else {
            setErr(false);
            setErrMsg('');
            submit();
        }
        setTimeout(() => {
            setErr(false)
            setErrMsg('')
        }, 3000)
    }

    const submit = async () => {
        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', pass);
        console.log(email, ' ', pass);
        comnPost('auth/login', formData)
            .then(res => {
                console.log('res', res);
                if (res.data.success) {
                    navigate('/')
                } else {
                    setErr(true);
                    setErrMsg('Invalid Credentials');
                    setTimeout(() => {
                        setErr(false);
                        setErrMsg('');
                    }, 3000)
                }
                // navigate('/')
            })
            .catch(err => {
                console.log('err', err);
            })
    }

    return (
        <div className="log-cont">
            {err ? (
                <div className="my-error">
                    <text className="err-msg">{errMsg}</text>
                </div>
            ) : null}
            <div className="log-card flex-col col-md-8 col-xs-2">
                <div>
                    <h3 className="log-head">Log In</h3>
                </div>
                <div className="flex-col col-md-8 col-xs-2">
                    <input
                        className="my-inp"
                        placeholder="Email"
                        type={'text'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="my-inp"
                        placeholder="Password"
                        type={'password'}
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <button className="my-btn" onClick={() => validate()}>Log In</button>
                </div>
                <div>
                    <text>Don't have an account? <a href="/register">Register</a></text>
                </div>
            </div>
        </div>
    )
};

export default Login;