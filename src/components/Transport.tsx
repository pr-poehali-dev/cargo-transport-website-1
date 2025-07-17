import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Transport = () => {
  return (
    <section id="transport" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            ВИДЫ ПЕРЕВОЗОК
          </h2>
          <p className="text-xl text-gray-300 font-bold">
            ВЫБЕРИТЕ ПОДХОДЯЩИЙ ТИП ДОСТАВКИ ДЛЯ ВАШЕГО ГРУЗА
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          <Card className="border-4 border-white bg-black text-white shadow-2xl">
            <CardHeader className="bg-red-600 border-b-4 border-white">
              <CardTitle className="flex items-center text-2xl font-black tracking-wider">
                <Icon name="Zap" size={32} className="text-white mr-4" />
                ЭКСПРЕСС-ДОСТАВКА
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-red-600 p-4 border-2 border-white font-black">
                  <span className="text-lg">СРОЧНАЯ ДОСТАВКА</span>
                  <Badge className="bg-white text-black border-2 border-black px-4 py-2 text-sm font-black">2-4 ЧАСА</Badge>
                </div>
                <div className="flex justify-between items-center bg-gray-800 p-4 border-2 border-white font-black">
                  <span className="text-lg">СТАНДАРТНАЯ ДОСТАВКА</span>
                  <Badge className="bg-white text-black border-2 border-black px-4 py-2 text-sm font-black">В ДЕНЬ ЗАКАЗА</Badge>
                </div>
                <div className="flex justify-between items-center bg-gray-700 p-4 border-2 border-white font-black">
                  <span className="text-lg">ПЛАНОВАЯ ДОСТАВКА</span>
                  <Badge className="bg-white text-black border-2 border-black px-4 py-2 text-sm font-black">1-2 ДНЯ</Badge>
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