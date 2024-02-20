import { Head } from '@inertiajs/react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaGlobe, FaMobileAlt } from "react-icons/fa";
import { HiMegaphone } from "react-icons/hi2";
import { FaPhp, FaLaravel, FaWordpress,FaReact, FaPython, FaVuejs, FaJs, FaSquareGit, FaSketch, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa6";

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
                    <a href="https://wa.me/5586994144081" className='bg-todaideia-orange py-4 px-16 rounded-3xl text-white hover:bg-[#d05300] transform hover:scale-125 duration-300 ease-in-out transition-all'>
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
                    <h2 className="flex flex-row flex-nowrap items-center md:px-[35%] px-12">
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

            {/* About Us */}
            <div className='container max-w-6xl mx-auto items-center md:py-12 py-6'>
                <h2 className="flex flex-row flex-nowrap items-center md:px-[35%] px-12">
                    <span className="flex-grow block border-t border-black"></span>
                    <span className="flex-none block mx-4 px-6 py-3 text-xl rounded leading-none font-medium bg-todaideia-blue text-white">
                        SOBRE NÓS
                    </span>
                    <span className="flex-grow block border-t border-black"></span>
                </h2>

                <div className='md:py-8 py-4 md:px-0 px-4 '>
                    <p className='mb-4 text-black text-justify text-xl'>Somos especialistas em desenvolvimento e design e estamos prontos para enfrentar qualquer desafio, desde a criação de websites elegantes e funcionais até o desenvolvimento de aplicativos móveis intuitivos e poderosos. Utilizamos as mais recentes tecnologias e melhores práticas para garantir que cada projeto seja executado com excelência e entregue resultados que superem as expectativas.</p>

                    <p className='mb-4 text-black text-justify text-xl'>Na <span className='text-todaideia-blue text-2xl'><strong>Todaideia</strong></span>, não apenas transformamos ideias em experiências digitais, mas também construímos parcerias duradouras com nossos clientes, oferecendo suporte contínuo e adaptando-nos às mudanças do mercado para garantir o sucesso a longo prazo.</p>

                    <p className='mb-4 text-black text-justify text-xl'>Se você está pronto para levar sua presença digital para o próximo nível e transformar suas ideias em experiências digitais impactantes, entre em contato conosco hoje mesmo. Estamos ansiosos para trabalhar juntos e fazer acontecer!
                    </p>

                    <div className='text-center py-8'>
                        <a href="https://wa.me/5586994144081" className='bg-todaideia-orange py-4 px-16 rounded-3xl text-white hover:bg-[#d05300] transform hover:scale-125 duration-300 ease-in-out transition-all'>
                            <strong>
                                Fale conosco
                            </strong>
                        </a>
                    </div>
                </div>
            </div>
            {/* End About Us */}

            {/* Techs */}
            <div className='container max-w-6xl mx-auto md:px-0 px-4'>
                <div className=' md:py-6 py-3'>
                    <h2 className="flex flex-row flex-nowrap items-center md:px-[35%] px-12">
                        <span className="flex-grow block border-t border-black"></span>
                        <span className="flex-none block mx-4 px-6 py-3 text-xl rounded leading-none font-medium bg-todaideia-blue text-white">
                            TECNOLOGIAS
                        </span>
                        <span className="flex-grow block border-t border-black"></span>
                    </h2>

                    <div className="grid grid-cols-2 gap-4 mt-4 leading-7 border-0  sm:mt-6 sm:gap-6 md:mt-8 md:gap-y-16 gap-y-10 md:grid-cols-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl min-h-[200px] md:py-16 py-8">
                        <div className='flex flex-col items-center justify-center mx-auto' title="PHP">
                            <FaPhp size={96} className='text-center' />
                            <p>PHP</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mx-auto' title="Python">
                            <FaPython size={96} className='text-center' />
                            <p>Python</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mx-auto' title="Ruby">
                            <FaSketch size={96} className='text-center' />
                            <p>Ruby/Ruby on Rails</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mx-auto' title="HTML5">
                            <FaHtml5 size={96} className='text-center' />
                            <p>HTML 5</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mx-auto' title="CSS3">
                            <FaCss3Alt size={96} className='text-center' />
                            <p>CSS 3</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mx-auto' title="Javascript">
                            <FaJs size={96} className='text-center' />
                            <p>Javascript</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mx-auto' title="Laravel">
                            <FaLaravel size={96} className='text-center' />
                            <p>Laravel</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mx-auto' title="Wordpress">
                            <FaWordpress size={96} className='text-center' />
                            <p>Wordpress</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mx-auto'  title="React JS e React Native">
                            <FaReact size={96} className='text-center' />
                            <p>ReactJS/React Native</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mx-auto' title="VueJS">
                            <FaVuejs size={96} className='text-center' />
                            <p>VueJS</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mx-auto'   title="Gite Github">
                            <FaSquareGit size={96} className='text-center' />
                            <p>Git/Github</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mx-auto' title="PHP">
                            <FaFigma size={96} className='text-center' />
                            <p>Figma</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* End techs */}

            
            {/* Projects */}
            <div className='bg-slate-100 min-h-[200px]'>
                <div className='md:py-6 py-3 max-w-6xl mx-auto px-4 md:px-0'>
                    <h2 className="flex flex-row flex-nowrap items-center md:px-[32%]  px-8">
                        <span className="flex-grow block border-t border-black"></span>
                        <span className="flex-none block mx-4 px-6 py-3 text-xl rounded leading-none font-medium bg-todaideia-blue text-white">
                            PROJETOS RECENTES
                        </span>
                        <span className="flex-grow block border-t border-black"></span>
                    </h2>

                    <div className="grid grid-cols-1 gap-4 mt-4 leading-7 border-0 sm:mt-6 sm:gap-6 md:mt-8 md:grid-cols-2">
                        <div className=''>
                            <a href='https://admans.com.br'>
                                <img src="/images/site/admans.png" alt="ADMANS" className='rounded-lg' />
                            </a>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-2xl text-todaideia-blue mb-4'><strong>ADMANS - Site institucional</strong></h2>
                            <p className='text-zinc-800 text-justify mb-2'>Site dinâmico e interativo para uma igreja evangélica comprometida em alcançar e envolver sua comunidade. Com um design limpo e moderno, o site oferece uma navegação intuitiva, permitindo que os usuários encontrem facilmente o que estão procurando. Além disso, integrei recursos como calendário de eventos, formulários de contato e áreas de doação online para facilitar a participação e o envolvimento dos membros da igreja.</p>
                            <p className='text-zinc-800 text-justify'>Além disso, o site está otimizado para dispositivos móveis, garantindo uma experiência consistente e acessível em todos os dispositivos.</p>
                            <p className='mt-8 hover:underline text-blue-600'>URL: <a href='https://admans.com.br'>https://admans.com.br</a></p>
                        </div>
                    </div>

                    <div className='border-t border-black md:hidden my-16'></div>

                    <div className="grid grid-cols-1 gap-4 mt-0 leading-7 border-0 sm:mt-6 sm:gap-6 md:mt-16 md:grid-cols-2">
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-2xl text-todaideia-blue mb-4'><strong>SIGA - Sistema corporativo</strong></h2>
                            <p className='text-zinc-800 text-justify'>Sistema corporativo completo para a gestão eficiente de leads, atendimentos e avaliações de veículos. Este sistema integra todas as etapas do processo de vendas automotivas, desde a captura inicial de leads até a conclusão da transação.</p>

                            <p className='text-zinc-800 text-justify'>Com funcionalidades avançadas de gestão de leads, o sistema permite o acompanhamento detalhado de cada interação com potenciais clientes.</p>

                            <p className='text-zinc-800 text-justify'>Para os atendimentos presenciais, o sistema simplifica o agendamento de visitas à concessionária e o registro de informações importantes durante a interação com os clientes.</p>

                            <p className='mt-8 hover:underline text-blue-600'>URL: <a href='#'>Sistema interno</a></p>
                        </div>
                        <div className='border-zinc-800'>
                            <img src="/images/site/siga.png" alt="SIGA" className='rounded-lg' />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Projects */}

            {/* Bill Gates */}
            <div className='bg-gradient-to-r from-blue-600 to-indigo-600 my-12 md:my-24 py-12'>
                <div className='container max-w-6xl mx-auto min-h-[120px] flex flex-col justify-center items-center '>
                    <p className='text-white text-2xl md:text-3xl px-4 md:px-4 text-center'>"Software é uma ótima combinação entre arte e engenharia."</p>
                    <p className='text-zinc-100 px-0 md:px-4'><i>Bill Gates</i></p>
                </div>
            </div>
            {/* End Bill Gates */}

            {/* Footer */}
            <div className='bg-[#21233A]  min-h-[220px]'>
                        <div className='mx-auto max-w-2xl flex flex-col items-center justify-center gap-y-6 py-8 md:py-16'>
                            <a className="text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="{{route('home')}}">
                                <img src="./images/site/logo-todaideia.png" alt="Logo Todaideia" className="w-28 md:w-48 " />
                            </a>
                            <p className='text-white text-center px-4'>Cada usuário, como potencial comprador ou parceiro, utiliza a Internet para buscar informações sobre bens e serviços.</p>
                            <div className='text-white flex gap-4 items-center'>
                                <a href="#" className='hover:text-todaideia-blue transition-colors'>
                                    <FaFacebook size={32} />
                                </a>
                                <a href="#" className='hover:text-todaideia-blue transition-colors'>
                                    <FaInstagram size={32} />
                                </a>
                            </div>
                        </div>
                        <div className='w-full min-h-[60px] bg-[#6020D2] flex justify-center items-center text-white text-xs'>
                            <p>Copyright &copy; 2024 | Todos os direitos reservados </p>
                        </div>
            </div>
            {/* End Footter */}
        </>
    )
}