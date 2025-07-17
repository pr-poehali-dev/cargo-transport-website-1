import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white border-t-4 border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-wider">
            НАШИ УСЛУГИ
          </h2>
          <p className="text-2xl text-black font-bold tracking-wide">
            КОМПЛЕКСНЫЕ РЕШЕНИЯ ДЛЯ ВАШИХ ЛОГИСТИЧЕСКИХ ПОТРЕБНОСТЕЙ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-4 border-black bg-white hover:bg-red-600 hover:text-white transition-all duration-300 group">
            <CardHeader className="border-b-4 border-black">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-4 group-hover:bg-white">
                <Icon name="Package" size={32} className="text-white group-hover:text-black" />
              </div>
              <CardTitle className="text-2xl font-black tracking-wide">МАЛОГАБАРИТНЫЙ ГРУЗ</CardTitle>
              <CardDescription className="text-lg font-bold group-hover:text-white">
                БЫСТРАЯ ДОСТАВКА ДОКУМЕНТОВ, ПОСЫЛОК И НЕБОЛЬШИХ ГРУЗОВ
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4 text-base font-bold group-hover:text-white">
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-red-600 mr-3 group-hover:text-white" />
                  ЭКСПРЕСС-ДОСТАВКА ЗА 2-4 ЧАСА
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-red-600 mr-3 group-hover:text-white" />
                  ОТСЛЕЖИВАНИЕ В РЕАЛЬНОМ ВРЕМЕНИ
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-red-600 mr-3 group-hover:text-white" />
                  СТРАХОВАНИЕ ГРУЗА
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-4 border-black bg-white hover:bg-red-600 hover:text-white transition-all duration-300 group">
            <CardHeader className="border-b-4 border-black">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-4 group-hover:bg-white">
                <Icon name="Home" size={32} className="text-white group-hover:text-black" />
              </div>
              <CardTitle className="text-2xl font-black tracking-wide">КВАРТИРНЫЕ ПЕРЕЕЗДЫ</CardTitle>
              <CardDescription className="text-lg font-bold group-hover:text-white">
                ПРОФЕССИОНАЛЬНАЯ ПОМОЩЬ В ПЕРЕЕЗДЕ КВАРТИР И ДОМОВ
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4 text-base font-bold group-hover:text-white">
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-red-600 mr-3 group-hover:text-white" />
                  УПАКОВКА И ЗАЩИТА МЕБЕЛИ
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-red-600 mr-3 group-hover:text-white" />
                  ГРУЗЧИКИ И ТРАНСПОРТ
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-red-600 mr-3 group-hover:text-white" />
                  СБОРКА/РАЗБОРКА МЕБЕЛИ
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-4 border-black bg-white hover:bg-red-600 hover:text-white transition-all duration-300 group">
            <CardHeader className="border-b-4 border-black">
              <div className="w-16 h-16 bg-black flex items-center justify-center mb-4 group-hover:bg-white">
                <Icon name="Building" size={32} className="text-white group-hover:text-black" />
              </div>
              <CardTitle className="text-2xl font-black tracking-wide">ОФИСНЫЕ ПЕРЕЕЗДЫ</CardTitle>
              <CardDescription className="text-lg font-bold group-hover:text-white">
                БЫСТРЫЙ И БЕЗОПАСНЫЙ ПЕРЕЕЗД ОФИСОВ И ПРЕДПРИЯТИЙ
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4 text-base font-bold group-hover:text-white">
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-red-600 mr-3 group-hover:text-white" />
                  ПЛАНИРОВАНИЕ ПЕРЕЕЗДА
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-red-600 mr-3 group-hover:text-white" />
                  РАБОТА В ВЫХОДНЫЕ
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-red-600 mr-3 group-hover:text-white" />
                  МИНИМАЛЬНЫЕ ПРОСТОИ
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;