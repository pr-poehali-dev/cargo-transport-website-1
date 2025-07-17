import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
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
  );
};

export default Contact;