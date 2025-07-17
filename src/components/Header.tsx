import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" size={32} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">CargoTrans</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#transport" className="text-gray-600 hover:text-blue-600 transition-colors">Виды перевозок</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О компании</a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Заказать перевозку
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;