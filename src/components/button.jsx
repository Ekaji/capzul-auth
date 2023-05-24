export default function Button({ icon, backgroundColor, text, }) {

    console.log(icon)
    return (
        <div className={`md:w-1/2 mb-5 h-[33.87px] ${backgroundColor ?? backgroundColor }  flex justify-center items-center rounded-md`
        }>
            <div className="flex justify-center space-x-3 ">
                {
                icon == '/google.png' ? (
                    <span className=' my-auto'>
                            <img className='h-[14.11px]' src={icon } />
                    </span>
                ) : null
            }
                <span className=''>
                    <p className='text-[9.88px] text-white'>
                        {text}</p>
                </span>
            </div>
        </div>
    )
}
