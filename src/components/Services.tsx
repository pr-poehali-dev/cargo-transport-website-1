import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600">
            Комплексные решения для ваших логистических потребностей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Package" size={24} className="text-blue-600" />
              </div>
              <CardTitle>Малогабаритный груз</CardTitle>
              <CardDescription>
                Быстрая доставка документов, посылок и небольших грузов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Экспресс-доставка за 2-4 часа
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Отслеживание в реальном времени
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Страхование груза
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Home" size={24} className="text-blue-600" />
              </div>
              <CardTitle>Квартирные переезды</CardTitle>
              <CardDescription>
                Профессиональная помощь в переезде квартир и домов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Упаковка и защита мебели
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Грузчики и транспорт
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Сборка/разборка мебели
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Building" size={24} className="text-blue-600" />
              </div>
              <CardTitle>Офисные переезды</CardTitle>
              <CardDescription>
                Быстрый и безопасный переезд офисов и предприятий
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Планирование переезда
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Работа в выходные
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  Минимальные простои
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