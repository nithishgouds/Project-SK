import {LuUsers} from "react-icons/lu";

export default function LoginCard() {

    return (<div className="login-card max-w-full bg-white py-30">
        <div className="max-w-md w-full mx-auto  mb-0 bg-white  p-8 pb-18 border rounded-md text-center shadow-lg">
            <LuUsers className="mx-auto text-[#009951]" style={{width: '5vw', height: 'auto'}}/>

            <h3 className="font-normal text-2xl sm:text-3xl py-4">CUSTOMER LOGIN</h3>

            <hr className="my-4 border-t-2 border-gray-400"/>

            <input
                className="mt-8 w-full border border-gray-400 pl-3 py-2 text-sm placeholder:text-sm placeholder:text-gray-500 rounded"
                type="text"
                placeholder="Phone Number"
            />

            <input
                className="mt-6 w-full border border-gray-400 pl-3 py-2 text-sm placeholder:text-sm placeholder:text-gray-500 rounded"
                type="password"
                placeholder="Password"
            />
            <button className='mt-10 w-full border border-black-400 bg-[#ff9b24] hover:bg-amber-600
                 pl-3 py-2 text-sm'>SIGN IN
            </button>
        </div>
        </div>
    )
}