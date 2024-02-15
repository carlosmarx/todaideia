import { Head } from '@inertiajs/react';
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function NewHome(props) {
    return (
        <>
            <Head title="Nova Home" />
            
            
            {/* Contact section top */}
            <div className='w-full bg-white'>
                <div className='mx-auto h-10 flex justify-between max-w-6xl px-4 md:px-0 lg:px-0 '>
                    <div className='flex items-center'>
                        <a href='https://wa.me/5586994144081' className='flex items-center gap-2 group text-todaideia-pink  hover:text-todaideia-blue transition-colors'>
                            <FaWhatsapp className='text-green-600 '/>
                            <span className=''>86 9 9414-4081</span>
                        </a>
                    </div>
                    <div className='text-todaideia-pink flex gap-4 items-center'>
                        <a href="#" className='hover:text-todaideia-blue transition-colors'>
                            <FaFacebook />
                        </a>
                        <a href="#" className='hover:text-todaideia-blue transition-colors'>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            {/* Contact section top */}
            
            {/* Hero */}
            <div className="bg-cover bg-fixed bg-[url('/images/site/bg-hero.png')] min-h-[500px]">
                {/* Nav */}
                <div className='mx-auto max-w-6xl py-2'>
                    <div className="w-full flex items-center justify-between py-2">
                        <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="{{route('home')}}">
                            <img src="./images/site/logo-white.png" alt="Logo Todaideia" className="w-28 md:w-32 " />
                        </a>

                        <div className="flex w-1/2 justify-end content-center gap-2">
                        
                            <a
                            className="inline-block bg-white rounded text-todaideia-blue no-underline hover:text-todaideia-pink hover:text-underline text-center h-10 py-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out hover:bg-white hover:rounded transition-all"
                            href="#"
                            >
                                INICÍO
                            </a>

                            <a
                            className="inline-block bg-white rounded text-todaideia-blue no-underline hover:text-todaideia-pink hover:text-underline text-center h-10 py-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out hover:bg-white hover:rounded transition-all"
                            href="#"
                            >
                                PROJETOS
                            </a>

                            <a
                            className="inline-block bg-white rounded text-todaideia-blue no-underline hover:text-todaideia-pink hover:text-underline text-center h-10 py-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out hover:bg-white hover:rounded transition-all"
                            href="#"
                            >
                                SOBRE NÓS
                            </a>

                            <a
                            className="inline-block bg-white rounded text-todaideia-blue no-underline hover:text-todaideia-pink hover:text-underline text-center h-10 py-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out hover:bg-white hover:rounded transition-all"
                            href="#"
                            >
                                CONTATO
                            </a>
                           
                        </div>
                    </div>
                </div>
                {/* End Nav */}
                {/* Main Hero */}
                <div className='mx-auto max-w-6xl py-36 flex flex-col justify-center items-center'>
                    <h1 className='text-6xl text-white max-w-xl text-center'><strong>Create Your Own Web Masterpiece</strong></h1>
                    <p className='text-white max-w-2xl py-8 text-center'>Every user like a potential buyer or partner, uses the Internet to search for information about goods and services. At his disposal are thousands of offers, instant consultations of experts, forums, opinions and advice.</p>
                    <a href="#" className='bg-todaideia-orange py-4 px-16 rounded-3xl text-white hover:bg-[#d05300] transform hover:scale-125 duration-300 ease-in-out transition-all'>
                        <strong>
                            Fale conosco
                        </strong>
                    </a>
                </div>
                {/* End Main Hero */}
            </div>
            {/* End Hero */}
            

        </>
    )
}