
import BtnBuyNow from "./Encadernacao/BtnBuyNow";
import DriveSection from "./Encadernacao/DriveSection";
import Gallery from "./Encadernacao/Gallery";
import Header from "./Encadernacao/Header";
import ListItem from "./Encadernacao/ListItem";
import Testemonials from "./Encadernacao/Testemonials";

function Encadernacao() {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <div className="bg-red-500 mb-1">
            <Header />
        </div>

        {/*  Site header */}
       
            <div className="container mx-auto">
                <div className="flex items-center justify-center text-white text-2xl">
                    <img src="/images/encadernacao/banner_topo.png" className="" alt="" />
                </div>
            </div>
            <BtnBuyNow />
            
            
  
        {/*  Page content */}
        {/* <Pricing /> */} 
        <div className="lg:w-[950px] mx-auto lg:flex gap-3 items-start justify-center">
            <ul>
                <ListItem item="Encadernação" />
                <ListItem item="Agendas 2024" />
                <ListItem item="Planners" />
                <ListItem item="Adesivos" />
                <ListItem item="Miolos" />
            </ul>
            <ul>
                <ListItem item="Lista de compras" />
                <ListItem item="Desk planner" />
                <ListItem item="Calendários" />
                <ListItem item="Blocos" />
                <ListItem item="Arquivos PDF E PNG" />
            </ul>
            
        </div>
        <div className="flex flex-col items-center justify-center lg:px-0 px-5 py-12 bg-blue-50">
            <h1 className="text-4xl">Tudo isso e muito mais por um <span className="text-[#008000]"><strong>preço especial!</strong></span></h1>
            <p className="text-4xl">de <span className="text-red-700"><s><b>34,90</b></s></span></p>
            <p className="text-6xl"><b>por <span className="text-green-700">14,90</span></b></p>
            <div className="bg-yellow-300 text-4xl px-6 py-4 rounded-lg text-red-500"><b>ÚLTIMOS DIAS DE PROMOÇÃO!</b></div>
            <ul>
                <ListItem item="Acesso vitalício" />
                <ListItem item="Compre e baixe agora mesmo" />
            </ul>
            <img src="https://assets.kiwify.com.br/extra/footer-kiwify-gray.png" className="w-32 my-2" />
        </div>
        <BtnBuyNow />
        
        <DriveSection />

        <Gallery />       
        <BtnBuyNow />
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
                <ListItem item="Alavanques seu negócio" />
                <ListItem item="Atualizações gratuitas" />
            </ul>
        <BtnBuyNow />

        <Testemonials />
        </div>

        <div className="container mx-auto mt-3">
            <div className="flex items-center justify-center text-white text-2xl">
                <img src="/images/encadernacao/banner_topo.png" className="" alt="" />
            </div>
            <div className="lg:w-[950px] mx-auto lg:flex gap-3 items-start justify-center">
            
                <ul>
                    <ListItem item="Agendas" />
                    <ListItem item="Planners, desk planner e planner duo" />
                    <ListItem item="Calendários" />
                    <ListItem item="Miolos, capas e contracapas" />
                    <ListItem item=" Bloquinhos, adesivos" />
                </ul>
                <ul>
                    <ListItem item="Mimos" />
                    <ListItem item="5 bônus especiais" />
                    <ListItem item="Mais de 30 GB em arquivos" />
                    <ListItem item="Arquivos no formato PNG e PDF" />
                    <ListItem item=" Mais de 9.000 arquivos" />
                </ul>
                
            </div>
        </div>
        <BtnBuyNow />

        
        <div className="bg-zinc-100">
            <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl flex flex-col items-center justify-center py-12">
                <img src="/images/Logo_Todaideia.png" alt="Logo Todaideia" className="w-32 mb-4" />
                <p>Desenvolvido por <span className="text-[#E61484]"><b>Todaideia</b></span> - Agência Criativa &copy; 2023</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Encadernacao;
  