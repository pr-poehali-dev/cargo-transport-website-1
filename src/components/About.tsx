import Icon from "@/components/ui/icon";

const About = () => {
  return (
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
  );
};

export default About;