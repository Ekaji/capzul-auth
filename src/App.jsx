import './index.css'
import Button from './components/button'

function App() {

    const buttonData = [
        {
            name: 'Create account',
            icon: '',
            backgroundColor: 'bg-[#007AFF]',
            text: 'Create account'
        },
        {
        name: 'google',
        icon: '/google.png',
        backgroundColor: 'bg-[#2D3748]',
        text: 'Sign in with Google'
        },]


    return (
        <>
            <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
                <div className="bg-[#FFFFFF] text-gray-500 shadow-xl w-full overflow-hidden"
                    style={
                        {maxWidth: "1300px"}
                }>
                    <div className="md:flex w-full">
                        <div className="relative min-h-[80vh] md:min-h-[675px] md:block md:w-5/12 linear-bg py-10 px-10">
                            <img className='absolute top-2/4 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-5/6 md:h-full m-auto md:max-w-[300px] md:max-h-[300px] lg:max-w-[500px] lg:max-h-[500px]' src="/Ellipse.png" alt="" />
                            <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-4/5 md:h-full m-auto md:max-w-[200px] md:max-h-[300px] lg:max-w-[350px] lg:max-h-[500px]' src="/Imgs.png" alt="" />
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
                                    <div className="md:w-1/2 px-3 mb-5 ">
                                        <label htmlFor="" className="text-xs font-semibold px-1">First name</label>
                                        <input type="text" className="w-full  pr- 3 py-2 rounded-lg border-2 border-gray-200 outline-none "/>
                                    </div>
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                                        <input type="text" className="w-full  pr- 3 py-2 rounded-lg border-2 border-gray-200 outline-none "/>
                                    </div>
                                </div>
                                {/*  */}
                                <div className='flex flex-col md:flex-row'>
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="Email or phone number" className="text-xs font-semibold px-1">Email or phone number</label>
                                        <input type="text" className="w-full  pr- 3 py-2 rounded-lg border-2 border-gray-200 outline-none " name="Email or phone number"/>
                                    </div>
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="Date of birth" className="text-xs font-semibold px-1">Date of birth
                                            <p className='text-[0.5rem] inline'>(DD/MM/YY)</p>
                                        </label>
                                        <input type="date" className="w-full  pr- 3 py-2 rounded-lg border-2 border-gray-200 outline-none " name="Date of birth"/>
                                    </div>
                                </div>
                                {/*  */}
                                <div className='flex flex-col md:flex-row'>
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="Password" className="text-xs font-semibold px-1">Password</label>
                                        <input type="text" className="w-full  pr- 3 py-2 rounded-lg border-2 border-gray-200 outline-none " name="Password"/>
                                    </div>
                                    <div className="md:w-1/2 px-3 mb-5">
                                        <label htmlFor="Confirm password" className="text-xs font-semibold px-1">Confirm password</label>
                                        <input type="text" className="w-full  pr- 3 py-2 rounded-lg border-2 border-gray-200 outline-none " name="Confirm password"/>
                                    </div>
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
                                            <Button
                                                key={button.name}
                                                icon={button.icon}
                                                backgroundColor={button.backgroundColor}
                                                text={button.text}
                                            />
                                        ))
                                }
                                {/* <div className="md:w-1/2 mb-5 h-[33.87px] bg-[#007AFF] flex justify-center items-center rounded-md">
                                    <div className="flex justify-center space-x-3 ">

                                        <span className=''>
                                            <p className='text-[9.88px] text-white'>Create account</p>
                                        </span>
                                    </div>
                                </div>

                                <div className="md:w-1/2 mb-5 h-[33.87px] bg-[#2D3748] flex justify-center items-center rounded-md">
                                    <div className="flex justify-center space-x-3 ">
                                        <span className=' my-auto'>
                                            <img className='h-[14.11px]' src='/google.png'/>
                                        </span>
                                        <span className=''>
                                            <p className='text-[9.88px] text-white'>Sign in with Google</p>
                                        </span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default App
