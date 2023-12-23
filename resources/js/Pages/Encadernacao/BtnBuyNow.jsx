function BtnBuyNow(props) {
    return(
        <>
        <div className="container mx-auto flex justify-center items-center my-4">
            <a href={props.link} className="flex justify-center items-center bg-green-500 lg:text-3xl text-center lg:mx-0 mx-1 border-0 py-3 lg:w-[950px] w-1/1 px-6 rounded-lg text-white hover:bg-green-600">COMPRAR AGORA COM PREÇO PROMOCIONAL</a>
        </div>
        </>
    )
}

export default BtnBuyNow;