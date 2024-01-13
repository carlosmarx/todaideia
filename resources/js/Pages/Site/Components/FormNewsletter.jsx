export default function() {
    return (
        <>
            <div className="w-full mx-auto md:pt-16 mt-8">
                <div className="md:w-1/2 mx-auto">
                    <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-blue-300 py-2 font-bold mb-2 text-center" htmlFor="emailaddress">
                        Quero me cadastrar pra receber novidades e comunicados importantes!
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                        id="emailaddress"
                        type="text"
                        placeholder="Seu melhor email"
                        />
                    </div>
        
                    <div className="flex items-center justify-center pt-4">
                        <button
                        className="bg-gradient-to-r from-purple-800 to-red-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                        type="button"
                        >
                        Cadastrar
                        </button>
                    </div>
                    </form>
                </div>
            </div>  
        </>
    )
}