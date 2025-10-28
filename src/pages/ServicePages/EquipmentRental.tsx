import React from 'react';
import { ArrowLeft, Check, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import imagemSeis from '../../images/imagemSeis.jpg'
import imageTres from '../../imagesadjusted/imageTres.jpg'

const EquipmentRental = () => {
  return <div className="w-full">
    <div className="bg-[#2f2f2f] text-white py-20">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-[#eb0808] transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Voltar para a página inicial
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Locação de Equipamentos
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Equipamentos de alta qualidade para suas operações e projetos, com
          garantia de segurança, manutenção em dia e suporte técnico
          especializado.
        </p>
      </div>
    </div>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={imagemSeis} alt="Equipamentos para locação" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-6">
              Por que alugar equipamentos?
            </h2>
            <p className="text-[#2f2f2f] mb-6">
              A locação de equipamentos é uma solução inteligente e econômica
              para empresas que buscam otimizar seus recursos financeiros e
              operacionais. Ao optar pela locação, você elimina os custos de
              aquisição, manutenção e depreciação, além de contar com
              equipamentos sempre atualizados e em perfeitas condições de uso.
            </p>
            <p className="text-[#2f2f2f]">
              A Engetrainer oferece uma ampla gama de equipamentos para
              locação, desde ferramentas manuais até máquinas de grande porte,
              sempre com manutenção em dia, certificações atualizadas e
              suporte técnico especializado.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-12 text-center">
          Nossos Diferenciais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[#eb0808] rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Entrega e Retirada
            </h3>
            <p className="text-[#2f2f2f]">
              Oferecemos serviços de entrega e retirada dos equipamentos
              diretamente no seu local de trabalho, facilitando a logística e
              garantindo agilidade.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[#eb0808] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Manutenção Garantida
            </h3>
            <p className="text-[#2f2f2f]">
              Todos os nossos equipamentos passam por rigorosos processos de
              manutenção preventiva e corretiva, garantindo seu perfeito
              funcionamento.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[#eb0808] rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Flexibilidade de Prazos
            </h3>
            <p className="text-[#2f2f2f]">
              Oferecemos contratos flexíveis, com opções de locação por hora,
              diária, semanal ou mensal, adaptando-se às necessidades
              específicas do seu projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-12 text-center">
          Equipamentos Disponíveis para Locação
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Mini Grua Velox
            </h3>
            <p className="text-[#2f2f2f] mb-4">
              Agiliza a movimentação vertical de materiais na construção civil. Acionamento feito pela botoeira do motor elétrico,
              conta com botão de parada em caso de emergência. Acompanha caçamba ou cesto para blocos. Capacidade de carga de até 500 kg na subida ou descida.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Elevador Cremalheira
            </h3>
            <p className="text-[#2f2f2f] mb-4">
              Agilidade com alta capacidade de carga e segurança no transporte vertical de pessoas e materiais na obra.  
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Grua Torre Fixa
            </h3>
            <p className='text-[#2f2f2f] mb-4'>
              A Grua Torre Fixa proporciona a movimentação, elevação e o transporte de materiais de forma vertical ou horizontal, em construções com altura livre de até 39 metros. 
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Guindaste Articulado
            </h3>
            <p className='text-[#2f2f2f] mb-4'>
              Equipamentos para movimentação, remoção e transporte de máquinas industriais, em especial maquinário pesado e de grande porte. 
              Isso porque o guindaste articulado realiza um trabalho ágil e eficiente, transportando de modo seguro e com praticidade os mais variados equipamentos. 
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Guidauto
            </h3>
            <p className='text-[#2f2f2f] mb-4'>
              Equipamento ideal para içar e transportar máquinas, equipamentos, estruturas metálicas, contêineres e outros materiais de grande porte. 
              Necessário para o posicionamento de materiais em altura, montagem de estruturas e outras operações que requerem elevação e precisão.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              PTA – PLATAFORMA DE TRABALHO AÉREO 
            </h3>
            <p className='text-[#2f2f2f] mb-4'>
              É um equipamento de elevação que oferece acesso seguro a locais altos, dispensando a necessidade de escadas ou improvisos. A locação permite o uso imediato do equipamento, sem longos processos de compra e instalação.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-[#2f2f2f] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Como funciona a locação
            </h2>
            <ol className="space-y-6">
              <li className="flex">
                <div className="bg-[#eb0808] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    Solicitação de orçamento
                  </h3>
                  <p className="text-gray-300">
                    Entre em contato conosco informando os equipamentos
                    necessários, quantidade e período de locação.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-[#eb0808] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    Aprovação e contrato
                  </h3>
                  <p className="text-gray-300">
                    Após a aprovação do orçamento, firmamos o contrato de
                    locação com todas as condições acordadas.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-[#eb0808] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    Entrega dos equipamentos
                  </h3>
                  <p className="text-gray-300">
                    Realizamos a entrega dos equipamentos no local indicado,
                    com checklist de verificação e orientações de uso.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-[#eb0808] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    Suporte durante a locação
                  </h3>
                  <p className="text-gray-300">
                    Oferecemos suporte técnico durante todo o período de
                    locação, com atendimento rápido em caso de necessidade.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-[#eb0808] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    Devolução dos equipamentos
                  </h3>
                  <p className="text-gray-300">
                    Ao término do contrato, realizamos a retirada dos
                    equipamentos no local indicado, com checklist de
                    verificação.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div>
            <img src={imageTres} alt="Processo de locação de equipamentos" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-8">
          Precisa de equipamentos para seu projeto?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-[#2f2f2f]">
          Entre em contato com a Engetrainer e solicite um orçamento
          personalizado para a locação dos equipamentos necessários para o seu
          projeto.
        </p>
        <a href="https://wa.me/5511996853405?text=Olá,%20gostaria%20de%20informações%20sobre%20locação%20de%20equipamentos" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#eb0808] hover:bg-[#d10707] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
          Solicitar orçamento
        </a>
      </div>
    </section>
  </div>;
};
export default EquipmentRental;