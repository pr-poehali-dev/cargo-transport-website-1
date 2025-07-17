import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-black border-b-4 border-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Icon name="Truck" size={40} className="text-red-600" />
            <h1 className="text-4xl font-black text-white tracking-wider">CARGOTRANS</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-red-600 transition-colors font-bold text-lg tracking-wide">УСЛУГИ</a>
            <a href="#transport" className="text-white hover:text-red-600 transition-colors font-bold text-lg tracking-wide">ВИДЫ ПЕРЕВОЗОК</a>
            <a href="#about" className="text-white hover:text-red-600 transition-colors font-bold text-lg tracking-wide">О КОМПАНИИ</a>
            <a href="#reviews" className="text-white hover:text-red-600 transition-colors font-bold text-lg tracking-wide">ОТЗЫВЫ</a>
            <a href="#contact" className="text-white hover:text-red-600 transition-colors font-bold text-lg tracking-wide">КОНТАКТЫ</a>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700 text-white border-2 border-white font-black text-lg px-6 py-3 tracking-wide">
            ЗАКАЗАТЬ ПЕРЕВОЗКУ
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;