import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import imageNove from '../../imagesadjusted/imageNove.jpg'
import imageDez from '../../imagesadjusted/imageDez.jpg'

const SafetyTraining = () => {
  return <div className="w-full">
      <div className="bg-[#2f2f2f] text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-[#eb0808] transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Voltar para a página inicial
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Treinamentos de Segurança
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Capacitação especializada em normas regulamentadoras (NRs) e
            procedimentos de segurança do trabalho para garantir um ambiente
            laboral seguro e em conformidade legal.
          </p>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={ imageNove } alt="Treinamento de segurança do trabalho" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-6">
                A importância da segurança no trabalho
              </h2>
              <p className="text-[#2f2f2f] mb-6">
                Investir em segurança do trabalho não é apenas uma obrigação
                legal, mas uma estratégia inteligente que traz benefícios
                diretos para a empresa, como redução de acidentes, diminuição do
                absenteísmo, aumento da produtividade e melhoria do clima
                organizacional.
              </p>
              <p className="text-[#2f2f2f]">
                Esses treinamentos fornecem o conhecimento necessário para que os colaboradores identifiquem riscos, utilizem equipamentos de proteção adequados e atuem conforme os procedimentos estabelecidos nas normas para cada atividade específica.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-12 text-center">
            Normas Regulamentadoras (NRs)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                NR-11 — Transporte, Movimentação, Armazenagem e Manuseio de Materiais
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Requisitos para equipamentos, vias e áreas, sinalização, amarração e estabilidade de cargas, treinamento de operadores e inspeções periódicas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: Compatível com as Legislação Vigente no pais.</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                NR-10 - Segurança em Instalações Elétricas
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Capacitação para trabalhos com eletricidade, garantindo a
                segurança e a saúde dos profissionais que atuam em instalações
                elétricas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: Compatível com as Legislação Vigente no pais.</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                NR-18 - Condições de Segurança na Construção
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Treinamento sobre as medidas de controle e sistemas preventivos
                de segurança nos processos e condições de trabalho na indústria
                da construção.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: Compatível com as Legislação Vigente no pais.</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                NR-35 - Trabalho em Altura
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Capacitação para trabalho em altura, estabelecendo os requisitos
                mínimos e as medidas de proteção para o trabalho em altura.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: Compatível com as Legislação Vigente no pais.</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
              </ul>
            </div>
            {/* <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                NR-33 - Espaços Confinados
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Treinamento para trabalho em espaços confinados, estabelecendo
                os requisitos para identificação, reconhecimento, avaliação e
                controle de riscos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: Compatível com as Legislação Vigente no pais.</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
              </ul>
            </div> */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-[#2f2f2f] mb-4">
                NR-12 - Segurança no Trabalho em Máquinas
              </h3>
              <p className="text-[#2f2f2f] mb-4">
                Capacitação sobre os requisitos mínimos para a prevenção de
                acidentes e doenças do trabalho nas fases de projeto, uso e
                manutenção de máquinas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Carga Horária: Compatível com as Legislação Vigente no pais.</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Ensino Presencial</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-[#eb0808] mr-2 mt-1 flex-shrink-0" />
                  <span>Certificação Reconhecida</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2f2f2f] mb-6">
                Metodologia de ensino
              </h2>
              <p className="text-[#2f2f2f] mb-6">
                Nossos treinamentos combinam teoria e prática, utilizando
                metodologias ativas de aprendizagem que facilitam a absorção do
                conhecimento e sua aplicação no dia a dia de trabalho.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#eb0808] rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <strong className="text-[#2f2f2f]">Aulas teóricas</strong>
                    <p className="text-[#2f2f2f]">
                      Conteúdo atualizado e alinhado às normas vigentes
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#eb0808] rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <strong className="text-[#2f2f2f]">
                      Atividades práticas
                    </strong>
                    <p className="text-[#2f2f2f]">
                      Simulações e exercícios que reforçam o aprendizado
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#eb0808] rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <strong className="text-[#2f2f2f]">Estudos de caso</strong>
                    <p className="text-[#2f2f2f]">
                      Análise de situações reais para desenvolvimento de
                      soluções
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#eb0808] rounded-full p-1 mr-3 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <strong className="text-[#2f2f2f]">
                      Avaliação contínua
                    </strong>
                    <p className="text-[#2f2f2f]">
                      Verificação da aprendizagem durante todo o processo
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img src={ imageDez } alt="Metodologia de treinamento de segurança" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#2f2f2f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Sua equipe está em conformidade com as normas?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Garanta a segurança da sua equipe e a conformidade legal da sua
            empresa com os treinamentos da Engetrainer.
          </p>
          <a href="https://wa.me/5511996853405?text=Olá,%20gostaria%20de%20informações%20sobre%20treinamentos%20de%20segurança" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#eb0808] hover:bg-[#d10707] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
            Solicitar proposta personalizada
          </a>
        </div>
      </section>
    </div>;
};
export default SafetyTraining;