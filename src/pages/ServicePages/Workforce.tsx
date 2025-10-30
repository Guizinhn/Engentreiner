import React from 'react';
import { ArrowLeft, Check, Users, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import imagemQuatro from '../../images/imagemQuatro.jpg'
import imageSete from '../../imagesadjusted/ImageSete.jpg'

const Workforce = () => {
  return <div className="w-full">
    <div className="bg-[#2f2f2f] text-white py-20">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-[#eb0808] transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Voltar para a página inicial
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Fornecimento de Mão de Obra
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Profissionais especializados e qualificados para atender às
          necessidades específicas do seu projeto ou operação.
        </p>
      </div>
    </div>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-6">
              Por que contratar mão de obra especializada?
            </h2>
            <p className="text-[#2f2f2f] mb-6">
              Em um mercado cada vez mais competitivo, contar com
              profissionais altamente qualificados e especializados é
              fundamental para garantir a qualidade, segurança e eficiência
              dos seus projetos e operações.
            </p>
            <p className="text-[#2f2f2f]">
              A Engetrainer oferece soluções completas de fornecimento de mão
              de obra especializada, com profissionais rigorosamente
              selecionados e capacitados para atender às demandas específicas
              do seu negócio, garantindo resultados superiores e conformidade
              com todas as normas técnicas e de segurança.
            </p>
          </div>
          <div>
            <img src={imageSete} alt="Equipe de profissionais especializados" className="rounded-lg shadow-lg w-full h-auto" />
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
              <Users size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Profissionais Qualificados
            </h3>
            <p className="text-[#2f2f2f]">
              Equipe rigorosamente selecionada e constantemente treinada para
              garantir o mais alto nível de qualidade técnica e
              profissionalismo.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[#eb0808] rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Conformidade Legal
            </h3>
            <p className="text-[#2f2f2f]">
              Total compliance com a legislação trabalhista e normas
              regulamentadoras, garantindo segurança jurídica para sua
              empresa.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[#eb0808] rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Agilidade e Flexibilidade
            </h3>
            <p className="text-[#2f2f2f]">
              Rápida mobilização de equipes para atender às suas necessidades,
              com contratos flexíveis que se adaptam à duração e escopo do seu
              projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-12 text-center">
          Profissionais Disponíveis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Operador de Elevador Cremalheira
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                <span>Profissional habilitado para operar o transporte vertical em obras, assegurando a movimentação segura de pessoas e materiais conforme as normas, realizando inspeções,
                  orientando procedimentos e mantendo a área de operação organizada, em articulação com as equipes de segurança e manutenção. </span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Operador Mini Grua
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                <span>profissional responsável por içar e movimentar materiais em obras com segurança e eficiência, executando a operação do equipamento, manutenção básica, inspeções diárias, 
                  cumprimento de normas técnicas/regulamentadoras e organização do ambiente para mitigação de riscos.</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
              Sinaleiro Amarrador
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                <span>Profissional que realiza a amarração segura de cargas, sinaliza manobras de equipamentos de içamento (ex.: guindastes) ao operador e verifica a área de trabalho. 
                  Atua como elo entre solo e cabine, garantindo movimentação segura das cargas e prevenção de quedas e acidentes.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-[#2f2f2f] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Precisa de profissionais qualificados para seu projeto?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          A Engetrainer tem a solução ideal para sua necessidade de mão de
          obra especializada, com profissionais qualificados e prontos para
          integrar sua equipe.
        </p>
        <a href="https://wa.me/5511987396856?text=Olá,%20gostaria%20de%20informações%20sobre%20fornecimento%20de%20mão%20de%20obra" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#eb0808] hover:bg-[#d10707] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
          Solicitar profissionais
        </a>
      </div>
    </section>
  </div>;
};
export default Workforce;