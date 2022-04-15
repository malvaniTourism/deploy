import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { comnPost } from "../../services/comnServ";
import validator from 'validator';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cPass, setCPass] = useState('');
    const [err, setErr] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const validate = () => {
        if (name === '') {
            setErr(true);
            setErrMsg('Enter Name')
        } else if (email === '') {
            setErr(true);
            setErrMsg('Enter Email Address')
        } else if (!validator.isEmail(email)) {
            setErr(true);
            setErrMsg('Enter Valid Email Address')
        } else if (pass === '') {
            setErr(true);
            setErrMsg('Enter Password')
        } else if (!validator.isStrongPassword(pass)) {
            setErr(true);
            setErrMsg('Enter Strong Password')
        } else if (pass === cPass) {
            setErr(true);
            setErrMsg('Password & Confirm Password Does Not Match')
        } else {
            setErr(false);
            setErrMsg('');
            submit();
        }
        setTimeout(() => {
            setErr(false);
            setErrMsg('');
        }, 3000)
    }

    const submit = () => {
        var formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', pass);
        formData.append('password_confirmation', cPass);

        comnPost('auth/register', formData)
        .then(res => {
            console.log('res', res);
            if (res.data.success) {
                navigate('/login');
            } else {
                setErr(true);
                setErrMsg('Could not create user');
                setTimeout(() => {
                    setErr(false);
                    setErrMsg('');
                }, 3000)
            }
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
            <div className="reg-card flex-col col-md-8 col-xs-2">
                <div>
                    <h3 className="log-head">Sign Up</h3>
                </div>
                <div className="flex-col col-md-8 col-xs-2">
                    <input
                        className="my-inp"
                        placeholder="Name"
                        type={'text'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <input
                        className="my-inp"
                        placeholder="Confirm Password"
                        type={'password'}
                        value={cPass}
                        onChange={(e) => setCPass(e.target.value)}
                    />
                </div>
                <div className="col-md-6 col-sm-8">
                    <button className="my-btn" onClick={() => validate()}>Sign Up</button>
                </div>
                <div>
                    <text>Already a user? <a href="/login">Login</a></text>
                </div>
            </div>
        </div>
    )
};

export default Register;