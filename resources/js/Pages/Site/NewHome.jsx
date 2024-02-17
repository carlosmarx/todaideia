import { Head } from '@inertiajs/react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { HiMegaphone } from "react-icons/hi2";

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
            <div className="bg-cover bg-fixed bg-[url('/images/site/bg-hero.png')] min-h-[300px] md:min-h-[500px]">
                {/* Nav */}
                <div className='mx-auto max-w-6xl'>
                    <div className="w-full flex items-center justify-center sm:justify-between py-4 md:py-2">
                        <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="{{route('home')}}">
                            <img src="./images/site/logo-white.png" alt="Logo Todaideia" className="w-28 md:w-32 " />
                        </a>

                        <div className="hidden w-1/2 justify-end content-center gap-2 md:flex">
                        
                            <a
                            className=" bg-white rounded text-todaideia-blue no-underline hover:text-todaideia-pink hover:text-underline text-center h-10 py-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out hover:bg-white hover:rounded transition-all"
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
                <div className='mx-auto max-w-6xl py-8 md:py-32 flex flex-col justify-center items-center'>
                    <h1 className='text-2xl md:text-4xl text-white max-w-xl text-center'><strong>Transformamos ideias em experiências digitais</strong></h1>
                    <p className='text-white max-w-2xl md:py-8 p-4 text-center'>Bem-vindo à nossa agência de desenvolvimento digital, onde a criatividade encontra a tecnologia para criar experiências digitais excepcionais. Aqui na Todaideia, somos impulsionados pela paixão de transformar ideias em realidade, levando conceitos inovadores e transformando-os em experiências digitais imersivas e envolventes.</p>
                    <a href="#" className='bg-todaideia-orange py-4 px-16 rounded-3xl text-white hover:bg-[#d05300] transform hover:scale-125 duration-300 ease-in-out transition-all'>
                        <strong>
                            Fale conosco
                        </strong>
                    </a>
                </div>
                {/* End Main Hero */}
            </div>
            {/* End Hero */}
            
            {/* Our Services */}
            <div className='bg-todaideia-gray min-h-[200px]'>
                <div className='container max-w-6xl mx-auto items-center md:py-16 py-8'>
                    <h2 className="flex flex-row flex-nowrap items-center">
                        <span className="flex-grow block border-t border-black"></span>
                        <span className="flex-none block mx-4 px-6 py-3 text-xl rounded leading-none font-medium bg-todaideia-blue text-white">
                            NOSSOS SERVIÇOS
                        </span>
                        <span className="flex-grow block border-t border-black"></span>
                    </h2>

                    <h2 className="flex flex-row flex-nowrap items-center justify-center mt-8 md:mt-16 text-2xl md:text-4xl text-black text-center">
                        <span><strong>Soluções Digitais Integradas para o Seu Sucesso Online</strong></span>
                    </h2>

                    <section className="py-6 leading-7 text-gray-900 sm:py-8 md:py-12">
                        <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
                            
                            <div id="pricing" className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
                                <div className="relative bg-gray-50 z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                                    <h3
                                        className="m-0 text-2xl font-semibold text-center leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                                        Aplicativos móveis
                                    </h3>
                                    <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                                        <FaMobileAlt size={64} color='white' className='bg-todaideia-orange p-2 rounded-lg' />
                                    </div>
                                    <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                                        <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                                                </path>
                                            </svg>
                                            Aplicativos android
                                        </li>

                                        <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                                                </path>
                                            </svg>
                                            Aplicativos IOs
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white rounded-lg sm:p-6 md:px-8 md:py-16">
                                    <h3
                                        className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl text-center">
                                        Desenvolvimento Web
                                    </h3>
                                    <div className="flex items-end mt-3 leading-7 text-gray-900 border-0 border-gray-200">
                                        <FaGlobe size={64} color='white' className='bg-todaideia-blue p-2 rounded-lg' />
                                    </div>
                                    <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                                        <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                                                </path>
                                            </svg>
                                            Sites
                                        </li>

                                        <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                                                </path>
                                            </svg>
                                            Landing pages
                                        </li>

                                        <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                                                </path>
                                            </svg>
                                            E-Commerces
                                        </li>

                                        <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                                                </path>
                                            </svg>
                                            Sistemas corporativos
                                        </li>
                                    </ul>
                                    
                                </div>
                                
                                <div className="relative bg-gray-50 z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                                    <h3
                                        className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl text-center">
                                        Marketing <br /> digital
                                    </h3>
                                    <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                                        <HiMegaphone size={64} color='white' className='bg-todaideia-yellow p-2 rounded-lg' />
                                    
                                    </div>

                                    <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                                        <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                                                </path>
                                            </svg>
                                            Google Ads
                                        </li>

                                        <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                                                </path>
                                            </svg>
                                            Facebook Ads
                                        </li>

                                        <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                                                </path>
                                            </svg>
                                            Email marketing
                                        </li>

                                        <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                            <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                                                </path>
                                            </svg>
                                            Otimização de sites (SEO)
                                        </li>
                                    </ul>
                                </div>
                            
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* End Our Services */}

            <div className='min-h-[200px]'>
                
            </div>
        </>
    )
}