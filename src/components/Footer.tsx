let data = new Date();

export const Footer = () => {

    return (
        <footer className="bg-gray-800 py-4 text-center text-white mt-5 fixed bottom-0 w-full">
            <p>&copy; {data.getFullYear()} Galeria de Fotos. Todos os direitos reservados.</p>
        </footer>
    );
};