import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Transport = () => {
  return (
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
  );
};

export default Transport;