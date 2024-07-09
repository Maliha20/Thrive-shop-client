import { Card, CardContent } from "@/components/ui/card";
import slider1 from "@/assets/slider1.jpg";
import slider2 from "@/assets/slider2.jpg";
import slider3 from "@/assets/slider3.jpg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const HeroSection = () => {
    const sliderData = [
        {
          id: 1,
          image: slider1,
        },
        {
          id: 2,
          image: slider2,
        },
        {
          id: 3,
          image: slider3,
        }
        
      ];
  return (
    <div className="mx-auto container">
     <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mx-auto overflow-hidden"
    >
      <CarouselContent className="flex">
        {sliderData.map((sliderImg) => (
          <CarouselItem key={sliderImg.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="p-2">
              <Card className="hover:shadow-lg hover:bg-blue-50 border-0 rounded-sm">
                <CardContent className="flex aspect-video items-center justify-center py-4 px-4 ">
                <img
                    src={sliderImg?.image}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-blue-200" />
      <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-blue-200" />
    </Carousel>
    </div>
   
  );
};

export default HeroSection;