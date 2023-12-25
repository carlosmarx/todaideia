
import BtnBuyNow from "./Encadernacao/BtnBuyNow";
import DriveSection from "./Encadernacao/DriveSection";
import Gallery1 from "./Caderneta/Gallery1";
import Header from "./Encadernacao/Header";
import ListItem from "./Encadernacao/ListItem";
import Testemonials from "./Caderneta/Testemonials";
import Gallery2 from "./Caderneta/Gallery2";
import { Head } from '@inertiajs/react'

function Caderneta() {
    return (
        <>
            <Head title="Kit Caderneta - Bloquinhos" />
            <div className="flex flex-col min-h-screen bg-white">
                <div className="bg-red-500 mb-1">
                    <Header />
                </div>

                {/*  Site header */}
            
                    <div className="container mx-auto">
                        <div className="flex items-center justify-center text-white text-2xl">
                            <img src="/images/caderneta/Banner.png" className="" alt="" />
                        </div>
                    </div>
                    <BtnBuyNow link="https://go.perfectpay.com.br/PPU38CNN9D2" />
                    
                <div className="lg:w-[950px] mx-auto lg:flex gap-3 items-start justify-center">
                    <ul>
                        <ListItem item="ALBUM DO BEBÊ" />
                        <ListItem item="CADERNETAS DE VACINA" />
                        <ListItem item="BLOQUINHO" />
                        <ListItem item="ÁLBUM DE RECORDAÇÕES E MESVERSÁRIO" />
                    </ul>
                    <ul>
                        <ListItem item="PORTA DOCUMENTOS" />
                        <ListItem item="CHAVEIROS" />
                        <ListItem item="MARCA PÁGINAS" />
                        <ListItem item="Arquivos PDF E PNG" />
                    </ul>
                    
                </div>
                <div className="flex flex-col items-center justify-center lg:px-0 px-5 py-12 bg-blue-50">
                    <h1 className="text-4xl">São mais de <span className="text-red-600"><strong>200GB</strong></span> de arquivos!</h1>
                    <h1 className="text-4xl">Tudo isso e muito mais por um <span className="text-[#008000]"><strong>preço especial!</strong></span></h1>
                    <p className="text-4xl">de <span className="text-red-700"><s><b>44,90</b></s></span></p>
                    <p className="text-6xl"><b>por <span className="text-green-700">19,90</span></b></p>
                    <div className="bg-yellow-300 text-4xl px-6 py-4 rounded-lg text-red-500"><b>ÚLTIMOS DIAS DE PROMOÇÃO!</b></div>
                    <ul>
                        <ListItem item="Acesso vitalício" />
                        <ListItem item="Compre e baixe agora mesmo" />
                    </ul>
                    <img src="https://app.perfectpay.com.br/img/perfectpay/logo_h30.png" className="w-48 my-2" />
                </div>
                <BtnBuyNow link="https://go.perfectpay.com.br/PPU38CNN9D2" />
                
                <DriveSection />

                <Gallery1 />       
                <BtnBuyNow link="https://go.perfectpay.com.br/PPU38CNN9D2" />
                <div className="lg:w-[950px] mx-auto lg:flex gap-3 items-start justify-center">
                    
                    <ul>
                        <ListItem item="Comprar" />
                        <ListItem item="Baixar" />
                        <ListItem item="Usar como quiser" />
                    </ul>
                    
                </div>
                <div className="flex flex-col items-center justify-center lg:px-0 px-5 py-12 bg-blue-50">
                    <h1 className="text-4xl">Pagamento <span className="text-[#008000]"><strong>único!</strong></span>Sem mensalidade.</h1>
                    <p className="text-4xl">Economize tempo e dinheiro!</p>
                    <div className="bg-yellow-300 text-4xl px-6 py-4 rounded-lg text-red-500"><b>ÚLTIMOS DIAS DE PROMOÇÃO!</b></div>
                    <ul>
                        <ListItem item="Milhares de arquivos" />
                        <ListItem item="Alavanque seu negócio" />
                        <ListItem item="Atualizações gratuitas" />
                    </ul>
                <BtnBuyNow link="https://go.perfectpay.com.br/PPU38CNN9D2" />

                {/* <Testemonials /> */}
                </div>
                <Gallery2 />  
                <BtnBuyNow link="https://go.perfectpay.com.br/PPU38CNN9D2" />

                <div className="container mx-auto mt-3">
                    <div className="flex items-center justify-center text-white text-2xl">
                        <img src="/images/encadernacao/banner_topo.png" className="" alt="" />
                    </div>
                    <div className="lg:w-[950px] mx-auto lg:flex gap-3 items-start justify-center">
                    
                        <ul>
                            <ListItem item="Com Bolsinho" />
                            <ListItem item="Páginas extras" />
                            <ListItem item="Miolos, capas e contracapas" />
                            <ListItem item=" Bloquinhos" />
                            <ListItem item="Mais de 200 GB em arquivos" />
                            <ListItem item="Arquivos no formato PNG e PDF" />
                            <ListItem item=" Mais de 150.000 arquivos" />
                        </ul>
                        
                    </div>
                </div>
                <BtnBuyNow link="https://go.perfectpay.com.br/PPU38CNN9D2" />

                
                <div className="bg-zinc-100">
                    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl flex flex-col items-center justify-center py-12">
                        <img src="/images/Logo_Todaideia.png" alt="Logo Todaideia" className="w-32 mb-4" />
                        <p>Desenvolvido por <span className="text-[#E61484]"><b>Todaideia</b></span> - Agência Criativa &copy; 2023</p>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Caderneta;
  