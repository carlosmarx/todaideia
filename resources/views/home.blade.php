<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Todaideia - Agência Criativa</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />

    <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <!--Replace with your tailwind.css once created-->
    {{-- <link href="https://unpkg.com/@tailwindcss/custom-forms/dist/custom-forms.min.css" rel="stylesheet" /> --}}

    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

      html {
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      }
    </style>
  </head>

  <body class="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed" style="background-image: url('/images/header-landing.png');">
    <div class="h-full">
      <!--Nav-->
      <div class="w-full container mx-auto">
        <div class="w-full flex items-center justify-between">
          <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="{{route('home')}}">
            <img src="./images/logo.png" alt="Logo Todaideia" class="w-36" />
          </a>

          <div class="flex w-1/2 justify-end content-center">
            {{-- <a class="inline-block text-[#009eef] no-underline hover:text-[#e61484] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?url=#">
              <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                ></path>
              </svg>
            </a> --}}
            <a
              class="inline-block text-[#009eef] no-underline hover:text-[#e61484] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
              href="https://www.facebook.com/todaideiaBR"
            >
              <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
              </svg>
            </a>
            <a
              class="inline-block text-[#009eef] no-underline hover:text-[#e61484] hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
              href="https://www.instagram.com/todaideiabr"
            >
              <svg class="fill-current h-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 169.063 169.063" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752 c17.455,0,31.656,14.201,31.656,31.655V122.407z"></path> <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561 C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561 c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"></path> <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78 c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78 C135.661,29.421,132.821,28.251,129.921,28.251z"></path> </g> </g></svg>
            </a>
          </div>
        </div>
      </div>

      <!--Main-->
      <div class="container pt-8 md:pt-16 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full justify-center item lg:items-center overflow-y-hidden lg:mb-12">
          <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            <span class="text-[#009eef]">
              Toda</span><span class="text-[#e61484]">ideia</span>
            - Agência Criativa
          </h1>
        </div>
        <!--Left Col-->
        <div class="flex flex-col w-full xl:w-1/2 justify-center lg:items-center overflow-y-hidden">
          <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#009eef] via-pink-500 to-[#e61484]">
              Gráfica Rápida
            </span>
            
          </h1>
          <p class="leading-normal text-white md:text-2xl mb-8 text-center">
            Soluções em impressão: Produtos personalizados (canecas, agendas, etiquetas), blocos, comandas, adesivos e etc.
          </p>

              <a
                class="bg-gradient-to-r from-[#009eef] to-[#e61484] hover:from-[#e61484] hover:to-[#009eef] text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out text-2xl text-center cursor-pointer" title="Saiba mais sobre nossa Gráfica Rápida">
                Saiba mais
              </a>
          
        </div>

        <!--Right Col-->
        <div class="flex flex-col w-full xl:w-1/2 justify-center item lg:items-center overflow-y-hidden">
          <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#e61484] via-pink-500 to-[#009eef]">
              Tecnologia
            </span>
     
          </h1>
          <p class="leading-normal text-blue-100 md:text-2xl mb-8 text-center">
            Soluções em tecnologia: Sistemas web, sites, aplicativos e automações em geral!
          </p>

            <a
              class="bg-gradient-to-r from-[#009eef] to-[#e61484] hover:from-[#e61484] hover:to-[#009eef] text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out text-2xl text-center cursor-pointer" title="Saiba mais sobre nossas soluções em Tecnologia da Informação">
                Saiba mais
            </a>
        </div>

        <div class="w-full mx-auto md:pt-16 mt-8">
          <div class="md:w-1/2 mx-auto">
            <form class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label class="block text-blue-300 py-2 font-bold mb-2 text-center" for="emailaddress">
                  Quero me cadastrar pra receber novidades e comunicados importantes!
                </label>
                <input
                  class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  id="emailaddress"
                  type="text"
                  placeholder="Seu melhor email"
                />
              </div>
  
              <div class="flex items-center justify-center pt-4">
                <button
                  class="bg-gradient-to-r from-purple-800 to-red-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  type="button"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
          
        </div>

        <!--Footer-->
        <div class="w-full pt-10 pb-6 text-sm text-center md:text-center fade-in">
          <a class="text-white no-underline hover:no-underline" href="#">&copy; Todaideia - Agência Criativa {{ date('Y') }}</a>
          - Desenvolvido por
          <a class="text-[#009eef] no-underline hover:no-underline hover:text-blue-400" href="https://www.todaideia.com" title="Acessar Todaideia.com">Todaideia.com</a>
        </div>
      </div>
    </div>
    <script type="module">
      import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2.31/dist/web.js'
    
      Typebot.initBubble({
        typebot: "bot-8plg3o4",
        apiHost: "https://bot.rltecno.com.br",
        previewMessage: {
          message: "Seja bem vindo! Posso ajudar?",
          autoShowDelay: 10000,
        },
        theme: {
          button: { backgroundColor: "#9B74B7" },
          chatWindow: { backgroundColor: "#fff" },
        },
      });
    </script>
  </body>
</html>
