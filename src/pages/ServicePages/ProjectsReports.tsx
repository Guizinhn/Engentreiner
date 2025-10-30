import React, { memo } from 'react';
import { ArrowLeft, Check, FileText, Search, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import imageDezeseis from '../../imagesadjusted/ImageDezeseis.jpg'
import imageUm from '../../imagesadjusted/imageUm.jpg'

const ProjectsReports = () => {
  return <div className="w-full">
      <div className="bg-[#2f2f2f] text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-[#eb0808] transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Voltar para a página inicial
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Projetos e Laudos
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Elaboração de projetos técnicos e laudos de conformidade com as
            normas vigentes, garantindo segurança e conformidade legal para sua
            empresa.
          </p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={ imageDezeseis } alt="Projeto técnico de engenharia" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-6">
                Excelência técnica em cada detalhe
              </h2>
              <p className="text-[#2f2f2f] mb-6">
                Na Engetrainer, contamos com uma equipe multidisciplinar de
                engenheiros e técnicos altamente qualificados para a elaboração
                de projetos técnicos e laudos que atendem às mais rigorosas
                normas e regulamentações.
              </p>
              <p className="text-[#2f2f2f]">
                Nosso compromisso é entregar documentação técnica de alta
                qualidade, com análises precisas e recomendações práticas que
                garantam a segurança, conformidade legal e eficiência
                operacional da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-12 text-center">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-[#eb0808] rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Projetos Técnicos
              </h3>
              <p className="text-[#2f2f2f]">
                Desenvolvimento de projetos técnicos completos, incluindo
                memoriais descritivos, especificações técnicas e desenhos
                detalhados.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-[#eb0808] rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Laudos Técnicos
              </h3>
              <p className="text-[#2f2f2f]">
                Elaboração de laudos técnicos de conformidade, inspeção e
                avaliação de estruturas, equipamentos e instalações.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 bg-[#eb0808] rounded-full flex items-center justify-center mx-auto mb-6">
                <FileCheck size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Documentação Técnica
              </h3>
              <p className="text-[#2f2f2f]">
                Desenvolvimento de procedimentos operacionais, manuais técnicos
                e documentação para atendimento a requisitos legais e
                normativos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-12 text-center">
            Projetos e Laudos Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                Serviços Técnicos
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Emissão de ART's (elétrica e mecânica).</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Laudos de SPDA, NR-10 e NR-13. </span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Emissão de PPRA, PCMSO, LTCAT, Ordem de Serviços, entre outros.</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Projetos de instalações elétricas, estruturas mecânicas, dados e voz.</span>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Processo de desenvolvimento
              </h2>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="bg-[#eb0808] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Levantamento de necessidades
                    </h3>
                    <p className="text-gray-300">
                      Análise detalhada das necessidades específicas do cliente
                      e dos requisitos legais e normativos aplicáveis.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-[#eb0808] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Visita técnica e coleta de dados
                    </h3>
                    <p className="text-gray-300">
                      Inspeção in loco para levantamento de informações,
                      medições e registros fotográficos.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-[#eb0808] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Elaboração da documentação
                    </h3>
                    <p className="text-gray-300">
                      Desenvolvimento do projeto ou laudo por profissionais
                      especializados, com ART (Anotação de Responsabilidade
                      Técnica).
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-[#eb0808] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Revisão e aprovação
                    </h3>
                    <p className="text-gray-300">
                      Verificação minuciosa da documentação para garantir
                      qualidade técnica e conformidade com as normas aplicáveis.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-[#eb0808] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Entrega e suporte
                    </h3>
                    <p className="text-gray-300">
                      Entrega da documentação final e suporte técnico para
                      implementação das recomendações e/ou adequações
                      necessárias.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className='w-80 md:w-96 mx-auto'>
              <img src={ imageUm } alt="Processo de desenvolvimento de projetos" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-8">
            Precisa de projetos ou laudos técnicos?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-[#2f2f2f]">
            Entre em contato com a Engetrainer e conte com nossa equipe
            especializada para desenvolver a solução ideal para sua empresa.
          </p>
          <a href="https://wa.me/5511996853405?text=Olá,%20gostaria%20de%20informações%20sobre%20projetos%20e%20laudos%20técnicos" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#eb0808] hover:bg-[#d10707] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
            Solicitar orçamento
          </a>
        </div>
      </section>
    </div>;
};
export default ProjectsReports;