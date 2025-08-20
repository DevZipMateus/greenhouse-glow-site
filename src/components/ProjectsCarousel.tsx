
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Autoplay from "embla-carousel-autoplay"

const ProjectsCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const projectImages = [
    {
      src: "/lovable-uploads/galeria/503299822_17852381223461512_8619531566400650503_n.webp",
      alt: "Projeto de estufa agrícola 1"
    },
    {
      src: "/lovable-uploads/galeria/503440528_17854946148461512_8076149620039391486_n.webp",
      alt: "Projeto de estufa agrícola 2"
    },
    {
      src: "/lovable-uploads/galeria/503511813_17854028355461512_5280593946084040637_n.webp",
      alt: "Projeto de estufa agrícola 3"
    },
    {
      src: "/lovable-uploads/galeria/503530757_2414059358973747_6212328373224725207_n.jpg",
      alt: "Projeto de estufa agrícola 4"
    },
    {
      src: "/lovable-uploads/galeria/508334499_17853629592461512_1986506545852760071_n.jpg",
      alt: "Projeto de estufa agrícola 5"
    },
    {
      src: "/lovable-uploads/galeria/515867173_17855794425461512_1831249445488158903_n.webp",
      alt: "Projeto de estufa agrícola 6"
    },
    {
      src: "/lovable-uploads/galeria/517589024_17856514626461512_3350666098817326873_n.jpg",
      alt: "Projeto de estufa agrícola 7"
    },
    {
      src: "/lovable-uploads/galeria/519493553_17857126776461512_5400329225671654108_n.webp",
      alt: "Projeto de estufa agrícola 8"
    },
    {
      src: "/lovable-uploads/galeria/520194717_17857381134461512_97224881692311098_n.jpg",
      alt: "Projeto de estufa agrícola 9"
    },
    {
      src: "/lovable-uploads/galeria/521416222_1401837954407393_7595169616142930018_n.jpg",
      alt: "Projeto de estufa agrícola 10"
    },
    {
      src: "/lovable-uploads/galeria/522265276_17857855425461512_4896802176631970973_n.webp",
      alt: "Projeto de estufa agrícola 11"
    },
    {
      src: "/lovable-uploads/galeria/531065223_769490532425976_6448269044075019846_n.jpg",
      alt: "Projeto de estufa agrícola 12"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Alguns de Nossos Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos projetos que realizamos para nossos clientes, 
            demonstrando nossa experiência e qualidade em estufas agrícolas.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex justify-center">
          <Carousel 
            plugins={[plugin.current]}
            className="w-full max-w-6xl"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projectImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                          <CardContent className="p-0">
                            <div className="aspect-square overflow-hidden">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                        <div className="relative">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
