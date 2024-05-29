import "./App.css";
import Porfile from "./assets/Photo.png";
import { SocialIcon } from 'react-social-icons';
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-300' : ''} fixed left-0 right-0 top-0 z-20 bg-white`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl text-black">Portfolio de Ignacio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-700 hover:text-black cursor-pointer">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-700 hover:text-black cursor-pointer">
                    Tecnologías
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-700 hover:text-black cursor-pointer">
                    Sobre mi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl text-black">Hola, soy Ignacio</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">ingeniero informático</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-700">
                  Graduado en Ingeniería Informática en Sistemas de la Información. Apasionado por las nuevas tecnologías, grandes proyectos y el aprendizaje contínuo.

                </p>
              </div>
              <div className="container mt-7">

                <a
                  href="/CV_Ignacio.pdf"
                  download
                  className="px-8  shadow-gray-300 shadow-md py-5 bg-gradient-to-t from-blue-500 rounded-full to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white"
                >
                  Descargar CV
                </a>

              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold text-black">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-300 rounded-md p-5 flex-1 bg-white text-black">
                <img className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  PYTHON KEYLOGGER
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  Un keylogger básico hecho en python con el que podemos entender lo peligroso y fácil que es acceder a nuestro teclado.
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white">
                    No descargar!
                  </button>

                  <button className="flex-1 text-sm py-3 border rounded-full border-blue-500 text-blue-500 hover:text-blue-700 hover:border-blue-700">
                    Github
                  </button>

                </div>
              </div>
              <div className="border border-gray-300 rounded-md p-5 flex-1 bg-white text-black">
                <img className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  -
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  -
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white">
                    Vista previa
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full border-blue-500 text-blue-500 hover:text-blue-700 hover:border-blue-700">
                    Github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-300 rounded-md p-5 flex-1 bg-white text-black">
                <img className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  -
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  -
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white">
                    Vista previa
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full border-blue-500 text-blue-500 hover:text-blue-700 hover:border-blue-700">
                    Github
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 rounded-md p-5 flex-1 bg-white text-black">
                <img className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  -
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  -
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white">
                    Vista previa
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full border-blue-500 text-blue-500 hover:text-blue-700 hover:border-blue-700">
                    Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Avanzado</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS & Bootstrap</h2>
                  <p className="text-gray-500">Avanzado</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript, JQuery
                  </h2>
                  <p className="text-gray-500">Normal</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Java, Struts, Hibernate, Rest</h2>
                  <p className="text-gray-500">Avanzado</p>
                </div>
                <span className="w-[65%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Algorítmica</h2>
                  <p className="text-gray-500">Normal</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Análisis y arquitectura software</h2>
                  <p className="text-gray-500">Normal</p>
                </div>
                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Diseño, Arquitectura y Mantenimiento de Bases de Datos</h2>
                  <p className="text-gray-500">Normal</p>
                </div>
                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Wordpress
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Adaptabilidad
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Aprendizaje rápido
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Compromiso
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Inglés B2
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Ventas y negociación
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Sobre mí</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2016</h3>
                <p>
                  Voluntariado en una empresa para ayudar a niños con discapacidad mediantes el uso de tecnologías de realidad virtual.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>
                  Ingreso al Grado de Ingeniería Informática en Sistemas de la Información en la Universidad Pablo de Olavide.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>
                  Aprendo a modificar código de videojuegos para vender trucos y modificaciones a distintos clientes.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                  Casi graduado! A falta del TFG y 4 asignaturas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">

          <div>
            <ul className="flex gap-4">
              <li>
                <a href="https://github.com/ilopmuo" target="_blank">
                  <SocialIcon network="github" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ignacio-l%C3%B3pez-mu%C3%B1oyerro-402ab5186/" target="_blank">
                  <SocialIcon network="linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nacholmg/" target="_blank">
                  <SocialIcon network="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
