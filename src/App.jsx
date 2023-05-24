import './index.css'
import Button from './components/button'
import {useState} from 'react';


function App() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailOrPhoneError, setEmailOrPhoneError] = useState(false);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value);
    }

    function validatePassword() {
        const isValid = password.length >= 8; // Add your password validation logic here
        setPasswordError(! isValid);
        return isValid;
    }

    function validatePasswordMatch() {
        const isMatch = password === confirmPassword;
        setPasswordMatchError(! isMatch);
        return isMatch;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const isPasswordValid = validatePassword();
        const isPasswordMatchValid = validatePasswordMatch();

        if (isPasswordValid && isPasswordMatchValid) { // Proceed with form submission or further actions
            console.log('Form submitted successfully');
        }
    }


    function handleNameBlur(name, setNameError) {
        const isValid = validateName(name);
        setNameError(! isValid);
    }

    function handleEmailOrPhoneBlur() {
        validateEmailOrPhone();
    }


    function validateName(name) {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(name);
    }

    function validateEmailOrPhone() {
        const regex = /^\S+@\S+\.\S+$/;
        const isValid = regex.test(emailOrPhone);
        setEmailOrPhoneError(! isValid);
        return isValid;
    }

    const buttonData = [
        {
            name: 'Create account',
            icon: '',
            backgroundColor: 'bg-[#007AFF]',
            text: 'Create account'
        }, {
            name: 'google',
            icon: '/google.png',
            backgroundColor: 'bg-[#2D3748]',
            text: 'Sign in with Google'
        },
    ]


    return (
        <>
            <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
                <div className="bg-[#FFFFFF] text-gray-500 shadow-xl w-full overflow-hidden"
                    style={
                        {maxWidth: "1300px"}
                }>
                    <div className="md:flex w-full">
                        <div className="relative min-h-[80vh] md:min-h-[675px] md:block md:w-5/12 linear-bg py-10 px-10">
                            <img className='absolute top-2/4 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-5/6 md:h-full m-auto md:max-w-[300px] md:max-h-[300px] lg:max-w-[500px] lg:max-h-[500px]' src="/Ellipse.png" alt=""/>
                            <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-4/5 md:h-full m-auto md:max-w-[200px] md:max-h-[300px] lg:max-w-[350px] lg:max-h-[500px]' src="/Imgs.png" alt=""/>
                        </div>
                        <div className="w-full md:w-7/12 py-10 px-5 md:px-20">
                            <div className='mb-12'>
                                <img className='w-[120px] ' src="/Logo.png" alt=""/>
                            </div>
                            <div className="px-3 mb-8">
                                <h1 className="font-bold text-[19.76px] text-gray-900">Create account</h1>
                                <p className='text-[9.88px]'>For business, brand or celebrity</p>
                            </div>


                            <div className=''>
                                {/*  */}
                                <div className='flex flex-col md:flex-row'>
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="firstName" className="text-xs font-semibold px-1">
                                            First name
                                        </label>
                                        <input type="text" id="firstName"
                                            className={
                                                `w-full pr-3 py-2 rounded-lg border-2 ${
                                                    firstNameError ? 'border-red-500' : 'border-gray-200'
                                                } outline-none focus:border-indigo-500`
                                            }
                                            value={firstName}
                                            onChange={
                                                (e) => setFirstName(e.target.value)
                                            }
                                            onBlur={
                                                () => handleNameBlur(firstName, setFirstNameError)
                                            }/> {
                                        firstNameError && (
                                            <p className="text-xs text-red-500">Please enter a valid first name</p>
                                        )
                                    } </div>

                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="lastName" className="text-xs font-semibold px-1">
                                            Last name
                                        </label>
                                        <input type="text" id="lastName"
                                            className={
                                                `w-full pr-3 py-2 rounded-lg border-2 ${
                                                    lastNameError ? 'border-red-500' : 'border-gray-200'
                                                } outline-none focus:border-indigo-500`
                                            }
                                            value={lastName}
                                            onChange={
                                                (e) => setLastName(e.target.value)
                                            }
                                            onBlur={
                                                () => handleNameBlur(lastName, setLastNameError)
                                            }/> {
                                        lastNameError && (
                                            <p className="text-xs text-red-500">Please enter a valid first name</p>
                                        )
                                    } </div>
                                </div>
                                {/*  */}
                                <div className='flex flex-col md:flex-row'>

                                    {/*  */}
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="emailOrPhone" className="text-xs font-semibold px-1">
                                            Email or phone number
                                        </label>
                                        <input type="text" id="emailOrPhone"
                                            className={
                                                `w-full pr-3 py-2 rounded-lg border-2 ${
                                                    emailOrPhoneError ? 'border-red-500' : 'border-gray-200'
                                                } outline-none focus:border-indigo-500`
                                            }
                                            value={emailOrPhone}
                                            onChange={
                                                (e) => setEmailOrPhone(e.target.value)
                                            }
                                            onBlur={handleEmailOrPhoneBlur}/> {
                                        emailOrPhoneError && (
                                            <p className="text-xs text-red-500">Please enter a valid email or phone number</p>
                                        )
                                    } </div>
                                    {/*  */}

                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="Date of birth" className="text-xs font-semibold px-1">Date of birth
                                            <p className='text-[0.5rem] inline'>(DD/MM/YY)</p>
                                        </label>
                                        <input type="date" className="w-full  pr- 3 py-2 rounded-lg border-2 border-gray-200 outline-none " name="Date of birth"/>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="password" className="text-xs font-semibold px-1">
                                            Password
                                        </label>
                                        <input type="password"
                                            className={
                                                `w-full pr-3 py-2 rounded-lg border-2 ${
                                                    passwordError ? 'border-red-500' : 'border-gray-200'
                                                } outline-none`
                                            }
                                            name="password"
                                            value={password}
                                            onChange={handlePasswordChange}/> {
                                        passwordError && (
                                            <p className="text-xs text-red-500">Password must be at least 8 characters</p>
                                        )
                                    } </div>
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="confirmPassword" className="text-xs font-semibold px-1">
                                            Confirm password
                                        </label>
                                        <input type="password"
                                            className={
                                                `w-full pr-3 py-2 rounded-lg border-2 ${
                                                    passwordMatchError ? 'border-red-500' : 'border-gray-200'
                                                } outline-none`
                                            }
                                            name="confirmPassword"
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}/> {
                                        passwordMatchError && (
                                            <p className="text-xs text-red-500">Passwords do not match</p>
                                        )
                                    } </div>
                                </div>
                            </div>

                            <div className='flex justify-between px-3 mb-5 md:space-y-5'>
                                <div className='flex flex-col space-y-2'>
                                    <div className='flex'>
                                        <input className='mr-2' type="checkbox" name="Remember me" id=""/>
                                        <label className='text-[9.88px]' htmlFor="Remember me">Remember me</label>
                                    </div>
                                    <div className='flex'>
                                        <input className='mr-2' type="checkbox" name="I agree to all the Terms and Privacy Policy" id=""/>
                                        <label className='text-[9.88px]' htmlFor="I agree to all the Terms and Privacy Policy">I agree to all the
                                            <a>Terms</a>
                                            and
                                            <a>Privacy</a>
                                            Policy</label>
                                    </div>
                                </div>
                                <div>
                                    <a href="" className='text-[9.88px]'>
                                        <p>
                                            Forgot password ?
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row w-full px-3 md:space-x-3'>
                                {
                                buttonData.map((button) => (
                                    <Button handleSubmit={handleSubmit}
                                        key={
                                            button.name
                                        }
                                        icon={
                                            button.icon
                                        }
                                        backgroundColor={
                                            button.backgroundColor
                                        }
                                        text={
                                            button.text
                                        }/>
                                ))
                            } </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default App
