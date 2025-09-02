import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="w-full   pt-6 px-4 text-gray-800"
      data-aos="fade-up"
      id="footer"
    >
      <section className="bg-[#A7884A] w-full container mx-auto rounded-t-2xl p-6 flex items-center max-sm:flex-col gap-4 justify-center">
        <div className="w-full flex justify-center items-center gap-2 flex-col">
          <h1 className="text-lg font-semibold">Rede Social</h1>
          <div className="w-full flex-col flex justify-center items-center gap-2 text-sm text-gray-300 ">
            <Link
              href="https://www.instagram.com/ayumifernails/"
              className="flex items-center gap-2 transition duration-300  hover:text-gray-900 "
              target="_blank"
            >
              {" "}
              <FaInstagram size={23} />
              @ayumifer
            </Link>

            <Link
              href="https://wa.me/5512991024918"
              className="flex items-center gap-2 transition duration-300  hover:text-gray-900"
              target="_blank"
            >
              <FaWhatsapp size={23} /> (12) 9 9102-4918
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-1 flex-col">
          <h1 className="text-lg font-semibold mb-2">Localização</h1>

          <p className="text-sm text-gray-300">São José dos Campos /</p>
          <p className="text-sm text-gray-300">São Paulo </p>
          <p className="text-sm text-gray-300 mt-2">
            © Ayumifer 2025. Todos os direitos reservados.
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-2 flex-col">
          <h1 className="text-lg font-semibold">Desenvolvido por</h1>
          <Link
            href="https://fernandodev.vercel.app/"
            className="flex items-center gap-2 text-sm text-gray-300 transition duration-300  hover:text-gray-900"
            target="_blank"
          >
            @WebCodeFF
          </Link>
        </div>
      </section>
    </footer>
  );
}
