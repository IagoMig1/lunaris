import React from 'react';
import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Lunaris - Desenvolvimento de Sites e Marketing Digital em Curitiba</title>
          <meta
            name="description"
            content="Transformamos ideias em realidade digital com soluções de desenvolvimento de sites, marketing digital e branding para empresas em Curitiba. Lunaris: inovação, estratégia e presença online."
          />
          <meta
            name="keywords"
            content="desenvolvimento de sites Curitiba, marketing digital Curitiba, soluções digitais, criação de site Curitiba, branding digital, presença online, Lunaris"
          />
          <meta name="author" content="Lunaris" />
          <meta property="og:title" content="Lunaris - Soluções Digitais em Curitiba" />
          <meta
            property="og:description"
            content="Soluções digitais que transformam negócios. Websites, marketing e tecnologia com foco em resultados reais."
          />
          <meta property="og:image" content="/logo.png" />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index, follow" />
          <html lang="pt-BR" />
        </Helmet>

        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#121212]">
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full bg-[#4e1b92]/10 blur-[120px]"
              animate={{}}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                top: '0%',
                left: '0%'
              }}
            />
            <motion.div
              className="absolute w-[600px] h-[600px] rounded-full bg-[#23184d]/10 blur-[120px]"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
                x: [0, -30, 0],
                y: [0, 50, 0]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                bottom: '0%',
                right: '0%'
              }}
            />
          </div>
          <div className="container mx-auto px-4 z-10 pt-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
                // REMOVIDO initial e animate para evitar animação inicial
              >
                <motion.span
                  className="inline-block px-4 py-1 rounded-full bg-[#4e1b92]/20 text-purple-300 text-sm font-medium mb-6"
                  // REMOVIDO initial e animate
                >
                  Fundada em 2024
                </motion.span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Transformando ideias em
                  <motion.span
                    className="block bg-gradient-to-r from-[#4e1b92] to-purple-300 bg-clip-text text-transparent"
                    // REMOVIDO initial e animate
                  >
                    realidade digital
                    <br /> <br />
                  </motion.span>
                </h1>
                <motion.p
                  className="text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
                  // REMOVIDO initial e animate
                >
                  A Lunaris combina tecnologia de ponta e marketing estratégico para
                  elevar sua marca e impulsionar o crescimento do seu negócio.
                </motion.p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <motion.button
                    className="px-8 py-3 rounded-lg bg-[#4e1b92] hover:bg-[#5f2ba3] text-white font-medium transition-all"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(78, 27, 146, 0.5)'
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                  >
                    Nossos Serviços
                  </motion.button>
                  <motion.button
                    className="px-8 py-3 rounded-lg border border-[#4e1b92] text-white font-medium hover:bg-[#4e1b92]/10 transition-all"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(78, 27, 146, 0.3)'
                    }}
                    whileTap={{
                      scale: 0.95
                    }}
                  >
                    Fale Conosco
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                className="md:w-1/2 flex justify-center items-center"
                // REMOVIDO initial e animate para evitar animação inicial
                transition={{
                  duration: 1,
                  delay: 0.2
                }}
              >
                <motion.div className="relative w-64 h-64 md:w-96 md:h-96">
                  {[...Array(3)].map((_, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 2
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] rounded-full opacity-20 blur-xl" />
                    </motion.div>
                  ))}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{
                      scale: 1.1
                    }}
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <img
                      src={logo} // Caminho para o logo.png
                      alt="Logo"
                      className="w-48 h-48 md:w-64 md:h-64 object-contain"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </>
    </HelmetProvider>
  );
};

export default Hero;
