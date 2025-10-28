import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import training from '../../imagesadjusted/imageQuatro.jpg'

const OperationTraining = () => {
  return <div className="w-full">
      <div className="bg-[#2f2f2f] text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-[#eb0808] transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Voltar para a página inicial
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Treinamentos de Operação
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Capacitação técnica especializada para operação de máquinas e
            equipamentos industriais, garantindo eficiência e segurança nas
            operações.
          </p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-6">
                Por que investir em treinamentos de operação?
              </h2>
              <p className="text-[#2f2f2f] mb-6">
                A operação adequada de máquinas e equipamentos é fundamental
                para garantir a segurança dos trabalhadores, a eficiência dos
                processos e a durabilidade dos equipamentos. Nossos treinamentos
                de operação são desenvolvidos por profissionais com vasta
                experiência prática, garantindo a transferência de conhecimento
                técnico e boas práticas operacionais.
              </p>
              <p className="text-[#2f2f2f]">
                Todos os nossos treinamentos atendem às normas regulamentadoras
                e são personalizados de acordo com as necessidades específicas
                da sua empresa e equipamentos.
              </p>
            </div>
            <div>
              <img src={training} alt="Treinamento de operação de equipamentos" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-12 text-center">
            Nossos Treinamentos de Operação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Elevador de Cremalheira
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Foco na operação segura e nas normas para o transporte de pessoas e cargas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Parte teórica e prática</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação reconhecida</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: <b>16</b> horas</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Grua de Torre Fixa
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Treinamento teórico e prático em operações utilizando a grua de forma segura, bem como zelar pelo melhor desempenho e rendimento das máquinas, evitando manutenções corretivas e atendendo o disposto na NR 18.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: <b>80</b> horas </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Mini Grua
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Treinamento teórico e prático que abrange a identificação das partes da máquina, funcionamento, amarração de cargas, estabilidade e os riscos envolvidos na operação, além da realização de análises de risco e do uso correto das sinalizações de emergência.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: <b>16</b> Horas</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Sinaleiro Amarrador de Cargas
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Treinamento teórico e prático para identificar riscos e tomar medidas preventivas. Garantir que o içamento e a movimentação de cargas sejam realizados com segurança e eficiência.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: <b>16</b> Horas</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Sinaleiro Rigger
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Curso teórico e prático que visa formar profissionais capacitados para planejar e executar as etapas de movimentação de cargas pesadas e de grande porte, garantindo a segurança do processo.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: <b>16</b> Horas</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Operador de Empilhadeira
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                O curso abrange a operação de diferentes tipos de empilhadeiras, inspeções de segurança, técnicas de movimentação e armazenamento de materiais, uso de EPIs/EPCs, e procedimentos de emergência. A formação é fundamental para evitar acidentes e garantir a conformidade com as exigências legais.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: <b>16</b> Horas</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Guindaste Articulado
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Capacita o profissional a operar o equipamento de forma segura e eficiente, abordando desde a identificação dos componentes e normas regulamentadoras (como a NR-11) até a prática de içamento e movimentação de cargas, com ênfase em estabilidade, interpretação de gráficos de carga e manutenção preventiva. 
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: <b>80</b> Horas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#2f2f2f] text-white p-8 md:p-12 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa de treinamento para sua equipe?
              </h2>
              <p className="text-lg max-w-2xl mx-auto">
                A Engetrainer oferece treinamentos personalizados de acordo com
                as necessidades específicas da sua empresa e equipamentos.
              </p>
            </div>
            <div className="flex justify-center">
              <a href="https://wa.me/5511996853405?text=Olá,%20gostaria%20de%20informações%20sobre%20treinamentos%20de%20operação" target="_blank" rel="noopener noreferrer" className="bg-[#eb0808] hover:bg-[#d10707] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
                Solicitar proposta
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default OperationTraining;