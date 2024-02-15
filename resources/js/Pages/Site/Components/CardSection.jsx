export default function CardSection(props) {
    return (
        <>
            {/* <div className="flex flex-col w-full md:w-1/2 justify-center lg:items-center overflow-y-hidden"> */}
            <div className="sm:w-full md:w-1/2 flex flex-col justify-center lg:items-center">
                <h1 className="my-4 text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    
                    <span className=" text-[#009eef] sm:text-3xl md:text-5xl text-3xl">
                    {props.title}
                    </span>
                    
                </h1>
                <p className="leading-normal text-white md:text-2xl mb-8 text-center md:px-10 px-0">
                    {props.content}
                </p>

                <a  href={route(props.route)}
                    className="bg-gradient-to-r from-[#009eef] to-[#e61484] hover:from-[#5394b4] hover:to-[#d61d80] text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out text-xl text-center cursor-pointer" title={`Saiba mais sobre ${props.title}`}>
                    Saiba mais
                </a>
            
            </div>
        </>
    );
}
