import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import imagemCinco from '../../images/imagemCinco.jpg'
import imageSeis from '../../imagesadjusted/imageSeis.jpg'

const SpecialLifting = () => {
  return <div className="w-full">
      <div className="bg-[#2f2f2f] text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-[#eb0808] transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Voltar para a página inicial
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Içamentos Especiais
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Planejamento e execução de operações de içamento com segurança,
            precisão e eficiência, atendendo às mais rigorosas normas técnicas.
          </p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-6">
                Soluções completas para movimentação de cargas
              </h2>
              <p className="text-[#2f2f2f] mb-6">
                A Engetrainer oferece serviços especializados de planejamento e
                execução de operações de içamento, com foco na segurança,
                eficiência e conformidade com as normas técnicas aplicáveis.
              </p>
              <p className="text-[#2f2f2f]">
                Nossa equipe de engenheiros e técnicos altamente qualificados
                desenvolve planos detalhados de rigging, considerando todos os
                aspectos técnicos e de segurança necessários para garantir o
                sucesso da operação, mesmo nas situações mais complexas e
                desafiadoras.
              </p>
            </div>
            <div>
              <img src={ imagemCinco } alt="Operação de içamento especial" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-12 text-center">
            Nossos Serviços de Içamento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Planejamento de Rigging
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Elaboração de planos detalhados de rigging para operações de
                içamento, incluindo cálculos estruturais, análise de riscos e
                definição de equipamentos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Cálculos de capacidade e estabilidade</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Desenhos técnicos detalhados</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Análise de riscos e contingências</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Execução de Içamentos
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Realização de operações de içamento com equipe especializada e
                equipamentos adequados, garantindo segurança e eficiência.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Supervisão técnica especializada</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Operadores certificados</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Equipamentos de última geração</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Içamentos Complexos
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Soluções para içamentos de alta complexidade, como cargas de
                grandes dimensões, pesos elevados ou condições adversas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Içamentos múltiplos coordenados</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Operações em espaços confinados</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Içamentos de precisão milimétrica</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Içamentos Industriais
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Movimentação de equipamentos industriais, como máquinas,
                transformadores, geradores e estruturas metálicas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Montagem de equipamentos</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Movimentação interna</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Reposicionamento de máquinas</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Içamentos na Construção Civil
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Operações de içamento para o setor da construção civil, como
                estruturas pré-moldadas, vigas, painéis e elementos
                arquitetônicos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Montagem de estruturas</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Posicionamento de elementos</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Instalação de painéis e fachadas</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Consultoria em Movimentação de Cargas
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Assessoria técnica especializada para operações de movimentação
                de cargas, incluindo análise de viabilidade e otimização de
                processos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Estudos de viabilidade</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Definição de equipamentos</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Otimização de processos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-12 text-center">
            Equipamentos Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Guindastes
              </h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Guindastes móveis</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Guindastes articulados</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Guindastes sobre esteiras</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Equipamentos Auxiliares
              </h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Talhas e tirfors</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Macacos hidráulicos</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Sistemas de skidding</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Acessórios de Içamento
              </h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Cintas e correntes</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Balancins e spreaders</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Manilhas e olhais</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Equipamentos de Segurança
              </h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Células de carga</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Anemômetros</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Sistemas de monitoramento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#2f2f2f] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={ imageSeis } alt="Planejamento de operação de içamento" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Por que escolher a Engetrainer?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#eb0808] rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <strong>Experiência comprovada</strong>
                    <p className="text-gray-300">
                      Mais de 10 anos de atuação em operações de içamento
                      complexas nos mais diversos segmentos industriais.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#eb0808] rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <strong>Equipe especializada</strong>
                    <p className="text-gray-300">
                      Engenheiros, técnicos e operadores altamente qualificados
                      e com vasta experiência em movimentação de cargas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#eb0808] rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <strong>Segurança em primeiro lugar</strong>
                    <p className="text-gray-300">
                      Rigorosos procedimentos de segurança em todas as etapas do
                      processo, desde o planejamento até a execução.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#eb0808] rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <strong>Soluções personalizadas</strong>
                    <p className="text-gray-300">
                      Desenvolvimento de soluções sob medida para cada operação,
                      considerando as especificidades técnicas e logísticas de
                      cada projeto.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-8">
            Precisa de uma operação de içamento especial?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-[#2f2f2f]">
            Entre em contato com a Engetrainer e conte com nossa expertise para
            planejar e executar sua operação com segurança e eficiência.
          </p>
          <a href="https://wa.me/5511996853405?text=Olá,%20gostaria%20de%20informações%20sobre%20serviços%20de%20içamento%20especial" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#eb0808] hover:bg-[#d10707] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
            Solicitar orçamento
          </a>
        </div>
      </section>
    </div>;
};
export default SpecialLifting;