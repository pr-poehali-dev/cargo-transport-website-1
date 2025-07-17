import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
  );
};

export default Hero;