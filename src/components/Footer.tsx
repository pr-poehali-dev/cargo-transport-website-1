import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Truck" size={24} />
              <span className="text-xl font-bold">CargoTrans</span>
            </div>
            <p className="text-gray-400">
              Надежные грузоперевозки и переезды по всей России
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Малогабаритный груз</li>
              <li>Квартирные переезды</li>
              <li>Офисные переезды</li>
              <li>Экспресс-доставка</li>
              <li>Складские услуги</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li>О нас</li>
              <li>Отзывы</li>
              <li>Контакты</li>
              <li>Вакансии</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <div>+7 (495) 123-45-67</div>
              <div>info@cargotrans.ru</div>
              <div>Москва, ул. Логистическая, 15</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CargoTrans. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;