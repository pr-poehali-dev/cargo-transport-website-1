import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  return (
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
  );
};

export default Reviews;