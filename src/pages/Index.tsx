import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Надежные грузоперевозки по всей стране
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Экспресс-доставка малогабаритных грузов, квартирные и офисные переезды, складские услуги
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://v3.fal.media/files/elephant/RX3iNCofdQRG4VTlHbVLU_output.png" 
                alt="Грузовая перевозка" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Transport Types */}
      <section id="transport" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Виды перевозок
            </h2>
            <p className="text-xl text-gray-600">
              Выберите подходящий тип доставки для вашего груза
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Zap" size={20} className="text-yellow-500 mr-2" />
                  Экспресс-доставка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Срочная доставка</span>
                    <Badge variant="secondary">2-4 часа</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Стандартная доставка</span>
                    <Badge variant="secondary">В день заказа</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Плановая доставка</span>
                    <Badge variant="secondary">1-2 дня</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Warehouse" size={20} className="text-purple-500 mr-2" />
                  Складские услуги
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Краткосрочное хранение</span>
                    <Badge variant="secondary">1-30 дней</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Долгосрочное хранение</span>
                    <Badge variant="secondary">От 1 месяца</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Климат-контроль</span>
                    <Badge variant="secondary">Доступно</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                О компании
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                CargoTrans — это современная логистическая компания, специализирующаяся на грузоперевозках 
                и переездах. Мы работаем с 2015 года и за это время выполнили более 10 000 заказов.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10К+</div>
                  <div className="text-gray-600">Выполненных заказов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Служба поддержки</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Единиц техники</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <Icon name="Shield" size={24} className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Страхование грузов</h3>
                  <p className="text-gray-600">Полное страхование всех перевозимых грузов</p>
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="Clock" size={24} className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Точно в срок</h3>
                  <p className="text-gray-600">Гарантируем соблюдение сроков доставки</p>
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="Users" size={24} className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Опытная команда</h3>
                  <p className="text-gray-600">Профессиональные водители и грузчики</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Отличный сервис! Переезд квартиры прошел быстро и без проблем. 
                  Ребята аккуратно упаковали всю мебель."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Анна Петрова</div>
                    <div className="text-sm text-gray-500">Квартирный переезд</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Пользуемся услугами экспресс-доставки постоянно. Всегда вовремя, 
                  груз в целости и сохранности."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Михаил Иванов</div>
                    <div className="text-sm text-gray-500">Экспресс-доставка</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Офисный переезд организовали на высшем уровне. Работали даже в выходные, 
                  чтобы не мешать работе офиса."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Елена Смирнова</div>
                    <div className="text-sm text-gray-500">Офисный переезд</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Получите консультацию и рассчитайте стоимость перевозки
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Заказать перевозку</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами в течение 15 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Имя
                      </label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон
                      </label>
                      <Input placeholder="+7 (999) 999-99-99" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Тип перевозки
                    </label>
                    <Input placeholder="Малогабаритный груз, переезд, и т.д." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Описание груза
                    </label>
                    <Textarea placeholder="Опишите, что нужно перевезти..." />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Заказать перевозку
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Phone" size={20} className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium">+7 (495) 123-45-67</div>
                      <div className="text-sm text-gray-500">Круглосуточно</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" size={20} className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium">info@cargotrans.ru</div>
                      <div className="text-sm text-gray-500">Ответим в течение часа</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" size={20} className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium">Москва, ул. Логистическая, 15</div>
                      <div className="text-sm text-gray-500">Офис открыт 9:00-18:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Рабочее время
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span className="text-gray-600">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота</span>
                    <span className="text-gray-600">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье</span>
                    <span className="text-gray-600">Выходной</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm text-blue-700">
                      <Icon name="Clock" size={16} className="inline mr-1" />
                      Экстренные заказы принимаются круглосуточно
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;