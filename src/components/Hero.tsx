import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-red-600 text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-wider text-white">
              НАДЕЖНЫЕ ГРУЗОПЕРЕВОЗКИ ПО ВСЕЙ СТРАНЕ
            </h2>
            <p className="text-2xl mb-12 text-white font-bold tracking-wide">
              ЭКСПРЕСС-ДОСТАВКА МАЛОГАБАРИТНЫХ ГРУЗОВ, КВАРТИРНЫЕ И ОФИСНЫЕ ПЕРЕЕЗДЫ
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-black text-white border-4 border-white hover:bg-white hover:text-black font-black text-xl py-6 px-8 tracking-wide">
                РАССЧИТАТЬ СТОИМОСТЬ
              </Button>
              <Button size="lg" variant="outline" className="border-4 border-white text-white hover:bg-white hover:text-black font-black text-xl py-6 px-8 tracking-wide">
                СВЯЗАТЬСЯ С НАМИ
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://v3.fal.media/files/elephant/RX3iNCofdQRG4VTlHbVLU_output.png" 
              alt="Грузовая перевозка" 
              className="border-4 border-white shadow-2xl filter contrast-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;