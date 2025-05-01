import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

import { camisetas, moletons, calcas, Produto } from '../data'; // Caminho ajustado conforme estrutura

const Home = () => {
  const renderProdutoSlide = (produto: Produto) => (
    <SwiperSlide key={produto.id}>
      <div className="border rounded-xl p-4 shadow-md bg-white max-w-sm mx-auto">
        <div className="w-full aspect-[3/4] overflow-hidden rounded-lg mb-2 bg-gray-100">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-lg font-medium">{produto.nome}</h3>
        <img
          src={produto.logoMarca}
          alt={produto.marca}
          className="h-8 mx-auto mt-2"
        />
      </div>
    </SwiperSlide>
  );

  return (
    <section className="py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à Outlet Mega Santorini</h1>
      <p className="text-gray-700 text-lg max-w-xl mx-auto mb-8">
        Aqui você encontra camisetas e produtos estilosos para todos os gostos.
        Confira nossa vitrine e entre em contato para comprar via Shopee ou Whatsapp.
      </p>

      {/* Marcas */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Trabalhamos com grandes marcas</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {['Nike', 'Lacoste', 'Oakley', 'Adidas', 'Hugo', 'Ck', 'Quiksilver'].map((marca, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded shadow-md flex items-center justify-center"
              style={{ width: '120px', height: '80px' }}
            >
              <img
                src={`/marcas/${marca.toLowerCase().replace(/ /g, '-')}-logo.png`}
                alt={marca}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Camisetas */}
      <div className="mb-12 max-w-5xl mx-auto whitespace-nowrap">
        <h2 className="text-2xl font-semibold mb-4">Camisetas</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {camisetas.map(renderProdutoSlide)}
        </Swiper>
      </div>

      {/* Moletons */}
      <div className="mb-12 max-w-5xl mx-auto whitespace-nowrap">
        <h2 className="text-2xl font-semibold mb-4">Moletom Feminina</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {moletons.map(renderProdutoSlide)}
        </Swiper>
      </div>

      {/* Calças */}
      <div className="mb-12 max-w-5xl mx-auto whitespace-nowrap">
        <h2 className="text-2xl font-semibold mb-4">Calça Moletom Masculino</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {calcas.map(renderProdutoSlide)}
        </Swiper>
      </div>
    </section>
  );
};

export default Home;