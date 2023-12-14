function Gallery() {
    return(
        <>
            <div className="container mx-auto px-5 py-2 lg:px-8 lg:pt-6">
                <div className="max-w-[950px] mx-auto">
                    <h1 className="text-center mb-4 text-2xl">Tenha acesso a maior coleção de arquivos de encadernação do mercado! Pacotes Completos com Capas e Miolos em pdf (alguns sendo editáveis)</h1>
                </div>
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/encadernacao/previews/5.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/encadernacao/previews/arquivo_digital_capas_alfabeto_caderno_floral_agenda_planner_miolo_pautado2.jpg" />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/encadernacao/previews/pagina_de_amostra-001.png" />
                    </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/encadernacao/previews/p5.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/encadernacao/previews/Capa_Amarela.png" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/encadernacao/previews/super_combo.png" />
                    </div>
                    </div>
                </div>
                <div className="max-w-[950px] mx-auto">
                    <h1 className="text-center text-3xl">São milhares de arquivos exclusivos que vão elevar a qualidade do seu trabalho e se destacar da concorrência!
                    </h1>
                    <h1 className="text-center mb-2 text-3xl text-green-800"><b>Acesso imediato!</b></h1>
                </div>
            </div>
        </>
    )
}

export default Gallery;