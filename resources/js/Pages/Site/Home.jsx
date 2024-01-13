import { Head } from '@inertiajs/react';
import NavSite from './Components/NavSite';
import CardSection from './Components/CardSection';
import Hero from './Components/Hero';
import FormNewsletter from './Components/FormNewsletter';
import Footer from './Components/Footer';

export default function Home(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-w-screen min-h-screen bg-cover bg-fixed bg-[url('/images/header-landing.png')] md:p-0 p-2">
                <div className="h-full">
                    <NavSite />
                    <div className="container pt-8 md:pt-16 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                        <Hero />

                        <div className="container pt-8 md:pt-16 mx-auto flex flex-wrap flex-col md:flex-row items-center [&>*:nth-child(1)]:md:mb-0 [&>*:nth-child(1)]:mb-8 ">
                            <CardSection 
                                title="Gráfica rápida" 
                                content="Soluções em impressão: Produtos personalizados (canecas, agendas, etiquetas), blocos, comandas, adesivos e etc." 
                                route="site.grafica" 
                            />
                            <CardSection 
                                title="Tecnologia" 
                                content="Soluções em tecnologia: Sistemas web, sites, aplicativos e automações em geral!" 
                                route="site.ti" 
                            />
                        </div>

                        <FormNewsletter />

                        <Footer />

                    </div>
                </div>
            </div>
        </>
    );
}
