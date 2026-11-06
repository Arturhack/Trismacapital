export const translations = {
  ES: {
    nav: { inicio: 'Inicio', ecosistema: 'Ecosistema', catalogo: 'Catálogo', aliados: 'Aliados del Café', faq: 'FAQ', contacto: 'Contacto' },
    hero: { subtitle: 'EDUCACIÓN Y TRADING ESTRATÉGICO', title: 'Domina el mercado. Construye tu legado.', desc: 'Ecosistema único que fusiona el rigor del trading financiero, la excelencia en la educación y la pasión por el café de especialidad.', btn1: 'Explorar Ecosistema', btn2: 'Nuestra Comunidad', communityModalTitle: 'Únete a nuestra Comunidad', communityModalSub: 'Síguenos en nuestras redes sociales o regístrate para acceder a contenido exclusivo.', signIn: 'Iniciar Sesión / Registro' },
    marquee: ['TRADING', 'EDUCACIÓN', 'CAFÉ DE ESPECIALIDAD', 'COMUNIDAD', 'FUTUROS', 'NASDAQ', 'ALIADOS DEL CAFÉ'],
    sections: {
      header: 'Nuestros Pilares', sub: 'Ecosistema',
      tradingTitle: 'Trading',
      tradingDesc: 'Indicadores propios, señales filtradas y mentoría en vivo sobre futuros de Nasdaq (NQ/MNQ).',
      eduTitle: 'Educación',
      eduDesc: 'Cursos online de trading y café, diseñados para avanzar a tu propio ritmo, sin humo.',
      cafeTab: 'Café',
      cafeDesc: 'Construimos una comunidad donde la rentabilidad en los mercados financieros se transforma en impacto real. Invertimos nuestra disciplina, tiempo y resultados en respaldar a los campesinos colombianos, impulsando la comercialización justa de sus productos de origen. Únete a un ecosistema que combina la precisión técnica con el compromiso social por nuestro país.',
      cafeTitle: 'Café Trisma — próximamente.', cafeSub: 'COMUNIDAD', cafeBtn: 'Sé parte del cambio', cafeAlert: '¡Gracias por tu interés en ser parte del cambio! Te damos la bienvenida a nuestra comunidad.'
    },
    catalog: {
      title: 'Cursos Trisma Capital', sub: 'Catálogo',
      filters: { 'TRADING': 'TRADING', 'CAFE': 'CAFÉ' },
      level: 'Nivel', view: 'Ver curso',
      descAppend: 'Aprenderás habilidades prácticas, herramientas fundamentales y estrategias aplicables inmediatamente al finalizar este curso.',
      cost: 'Costo del Curso', methods: 'Métodos de Pago', enroll: 'Inscribirme Ahora',
      payBtn: 'Pagar / Inscribirme', securePayment: 'Checkout Seguro vía Stripe',
      methodsList: 'Stripe (Tarjetas de Crédito / Débito), Crypto, Zelle',
      refundNotice: 'Compras sujetas a nuestra Política de Reembolso',
      mentor: { role: 'Mentor', bio: 'Experto en trading algorítmico y futuros del Nasdaq. Apasionado por la enseñanza y el café de especialidad. Más de 5 años guiando a traders hacia la consistencia.', btn: 'Agendar Reunión', back: 'Volver al curso' },
      // Unique coffee course
      coffeeCourse: {
        title: 'Conociendo la Cultura Cafetera de Colombia',
        level: 'Nivel Único — Especialidad',
        desc: 'Entendiendo nuestro tiempo libre con la especialidad del café. Aprende a transformar el tiempo libre en un ritual de consciencia, deleite y maestría sensorial a través del café de especialidad: microlotes, notas de catación SCA, perfiles de origen colombiano y calibración de métodos de extracción (prensa francesa, V60 y espresso).'
      },
      // 4 Trading courses with progressive levels
      tradingC1: {
        title: 'Curso de cero en trading.',
        level: 'Nivel 1 — Principiante',
        desc: 'El punto de partida esencial para quienes inician sin experiencia previa. Conoce los fundamentos de los mercados bursátiles, la estructura de órdenes, lectura de velas japonesas, plataformas operativas y las reglas de preservación de capital para cuidar tu dinero desde el día uno.'
      },
      tradingC2: {
        title: 'Curso básico de conceptos en trading.',
        level: 'Nivel 2 — Conceptos Básicos',
        desc: 'Consolida las bases técnicas necesarias para operar con consistencia: soportes y resistencias dinámicas, identificación de tendencias, interpretación de volumen, ratio riesgo-beneficio asimétrico y la disciplina psicológica indispensable frente a la pantalla.'
      },
      tradingC3: {
        title: 'Curso Intermedio entendiendo la bolsa de Valores.',
        level: 'Nivel 3 — Intermedio',
        desc: 'Profundiza en la mecánica institucional de Wall Street y futuros del Nasdaq (NQ/MNQ). Subastas de apertura, liquidez oculta, correlaciones entre índices, lectura de profundidad de mercado y gestión cuantitativa del riesgo por operación.'
      },
      tradingC4: {
        title: 'Curso avanzado de movimiento macroeconómico.',
        level: 'Nivel 4 — Avanzado',
        desc: 'Especialización avanzada para interpretar los catalizadores globales que mueven los grandes capitales: decisiones de la Reserva Federal (FOMC), tasas de interés, inflación (CPI, PPI), reportes de empleo (NFP), rendimiento de bonos del Tesoro y flujos macroeconómicos institucionales.'
      }
    },
    partners: {
      sub: 'ALIANZAS & ORIGEN',
      title: 'Nuestros Aliados del Café',
      desc: 'Conectamos el trading financiero con el valor tangible de nuestra tierra. Colaboramos directamente con familias caficultoras colombianas, tostadurías de especialidad y laboratorios de catación para garantizar comercio justo, sostenibilidad y granos con calificación SCA superior a 85 puntos.',
      badge: 'COMERCIO JUSTO & ORIGEN SOSTENIBLE',
      stats: [
        { value: '1,850m+', label: 'Altitud Promedio', sub: 'Montañas de Colombia' },
        { value: 'SCA 86+', label: 'Calidad en Taza', sub: 'Certificación sensorial' },
        { value: '100%', label: 'Trato Directo', sub: 'Familias caficultoras' },
        { value: '0%', label: 'Intermediarios', sub: 'Comercio transparente' }
      ],
      list: [
        {
          name: 'Fincas Campesinas de Huila & Antioquia',
          category: 'Productores de Origen',
          location: 'Pitalito & Fredonia, Colombia',
          elevation: '1,750m - 2,100m MSNM',
          varieties: 'Geisha, Caturra, Bourbon Rosado',
          desc: 'Alianzas directas con familias productoras de café que realizan fermentación controlada y recolección manual selectiva en su punto exacto de maduración.'
        },
        {
          name: 'Tostaduría Artesanal de Especialidad',
          category: 'Curaduría y Tueste',
          location: 'Medellín / Bogotá',
          elevation: 'Curvas Térmicas por Microlote',
          varieties: 'Tueste Medio / Claro Sensorial',
          desc: 'Maestros tostadores que calibran curvas térmicas por lote para preservar notas florales a jazmín, miel de caña y una acidez cítrica brillante y balanceada.'
        },
        {
          name: 'Laboratorio de Calidad Sensorial Q-Grader',
          category: 'Control de Calidad & SCA',
          location: 'Eje Cafetero, Colombia',
          elevation: 'Protocolo Internacional SCA',
          varieties: 'Catación en Frío y Caliente',
          desc: 'Evaluación técnica minuciosa que garantiza consistencia sensorial, análisis de humedad, actividad acuosa y ausencia de defectos en cada microlote.'
        },
        {
          name: 'Red de Baristas & Cafés de Autor',
          category: 'Cultura & Experiencias',
          location: 'Red Aliada Internacional',
          elevation: 'Extracción Artesanal & Espresso',
          varieties: 'V60, Chemex, Aeropress, Espresso',
          desc: 'Espacios donde el ritual del café de especialidad y las conversaciones sobre mercados financieros, economía y libertad convergen a diario.'
        }
      ],
      ctaTitle: '¿Eres caficultor, tostador o entusiasta del café de especialidad?',
      ctaDesc: 'Impulsamos proyectos agrícolas sostenibles y alianzas comerciales con valor compartido.',
      ctaBtn: 'Conectar con nuestro equipo de café'
    },
    faq: {
      title: 'Preguntas Frecuentes', sub: 'Dudas Comunes',
      q1: '¿Qué es Trisma Capital?', a1: 'Trisma Capital es un ecosistema único que fusiona el rigor del trading financiero, la excelencia en la educación y la pasión por el café de especialidad, creando un espacio de desarrollo integral.',
      q2: '¿Necesito experiencia previa para inscribirme en los cursos de trading?', a2: 'No, ofrecemos programas educativos diseñados para todos los niveles. Desde fundamentos básicos para principiantes hasta estrategias avanzadas para traders experimentados.',
      q3: '¿De dónde proviene su café de especialidad?', a3: 'Trabajamos directamente con productores locales cuidadosamente seleccionados, asegurando granos de la más alta calidad, un tueste perfecto y prácticas de comercio justo.',
      q4: '¿Cómo puedo acceder a las mentorías personalizadas?', a4: 'Las mentorías están disponibles para los estudiantes de nuestros cursos avanzados o mediante solicitud directa a través de nuestro formulario de contacto.',
      q5: '¿Ofrecen certificados al finalizar los cursos?', a5: 'Sí, todos nuestros cursos educativos otorgan un certificado de finalización que avala los conocimientos y habilidades adquiridas durante el programa.'
    },
    contact: {
      title: 'Conecta con Nosotros', sub: 'Contacto', desc: '¿Tienes dudas sobre los cursos, las mentorías o quieres ser parte de la comunidad cafetera? Escríbenos.', formSub: 'Complete el formulario a continuación y un miembro de nuestro equipo se pondrá en contacto en un plazo no mayor a 24 horas hábiles.',
      form: { name: 'Nombre', namePl: 'Ej. Juan Pérez', email: 'Correo Electrónico', emailPl: 'tu@correo.com', interest: 'Área de Interés', int1: 'Trading / Mentoría', int2: 'Cursos de Café', int3: 'Otro', msg: 'Mensaje', msgPl: '¿En qué te podemos ayudar?', btn: 'Enviar Mensaje por WhatsApp' },
      info: { emailTitle: 'Correo', hoursTitle: 'Horario de atención', hoursDesc: 'Agendar reunión (L-V, 9 AM - 6 PM)', whatsappTitle: 'WhatsApp Directo', whatsappDesc: '+1 (669) 946-7565 (Jaime)' },
      modal: { title: 'Agendar reunión con Jaime', sub: 'Elige tu disponibilidad y modalidad preferida.', name: 'Nombre Completo', namePl: 'Tu nombre y apellido', contact: 'Correo o Teléfono', contactPl: 'ejemplo@correo.com o +1 234 567 8900', date: 'Fecha', time: 'Hora', mode: 'Modalidad', mode1: 'Videollamada', mode2: 'Llamada telefónica', mode3: 'Presencial', loc: 'Lugar preferido', locPl: 'Ej. Trisma Café, Centro...', btn: 'Solicitar Reunión por WhatsApp', whatsappSuccess: 'Solicitud enviada a Jaime (+1 669 946-7565) vía WhatsApp.', whatsappBtn: 'Abrir WhatsApp con Jaime' }
    },
    footer: {
      desc: 'Ecosistema único que fusiona el rigor del trading financiero, la excelencia en la educación y la pasión por el café de especialidad.',
      explore: 'Explorar', rights: 'Todos los derechos reservados.',
      refundLink: 'Política de Reembolso',
      privacyLink: 'Política de Privacidad',
      tc: 'Términos y Condiciones',
      design: 'Diseñado con criterio de mercado y aroma a café.',
      disclaimer: 'Aviso: el trading de futuros implica un riesgo sustancial y no es adecuado para todos los inversionistas. La información de este sitio es educativa y no constituye asesoría financiera.',
      legal: {
        tabs: {
          refund: 'Reembolso y Devoluciones',
          privacy: 'Política de Privacidad',
          terms: 'Términos y Condiciones'
        },
        refund: {
          title: 'Política de Reembolso y Devoluciones',
          updated: 'Última actualización: 18 de septiembre de 2026',
          intro: 'En Trisma Capital LLC valoramos la calidad de nuestros productos y la satisfacción de nuestros clientes. Debido a la naturaleza de los productos y servicios que ofrecemos, aplicamos las siguientes condiciones comerciales de forma estricta:',
          sections: [
            {
              title: '1. Productos Digitales (Indicadores de Trading, Cursos Online e Información de Mercados)',
              text: 'Todos los productos digitales, incluyendo pero no limitándose a scripts e indicadores personalizados (thinkScript, NinjaScript, MQL5), acceso a cursos online (ej. tueste de café o estrategias de trading) y material de consultoría o análisis de mercados financieros, son de carácter intangible e irrevocables una vez entregados.',
              bullets: [
                'Condición de reembolso: No se emiten reembolsos, devoluciones ni cancelaciones una vez que el cliente ha accedido al contenido, se ha enviado el enlace de descarga o se ha activado la licencia del software.',
                'Al realizar la compra, el cliente reconoce y acepta que renuncia a su derecho de desistimiento una vez iniciada la descarga o el acceso al material digital.'
              ]
            },
            {
              title: '2. Productos Físicos y Perecederos (Café de Especialidad)',
              text: 'Por razones de seguridad alimentaria y estricto control de calidad, el café tostado es un producto perecedero.',
              bullets: [
                'No se aceptan devoluciones de café bajo ninguna circunstancia (por ejemplo, si el perfil de sabor no es del agrado del cliente o si hubo un error por parte del cliente al realizar el pedido).',
                'Excepciones: Solo se procesarán reemplazos o reembolsos si el producto llega dañado, el empaque está comprometido desde origen o se ha enviado un artículo incorrecto. En estos casos, el cliente debe notificar a nuestro soporte en un plazo máximo de 7 días naturales desde la recepción de la mercancía, adjuntando fotografías probatorias del daño y la caja de envío.'
              ]
            },
            {
              title: '3. Política contra el Fraude y Disputas de Pago (Chargebacks)',
              text: 'Cualquier intento de fraude, incluyendo la reclamación de reembolsos a través de la entidad bancaria o mediante el procesador de pagos (Stripe) tras haber consumido, descargado o accedido al producto digital, será tratado legalmente como "fraude amigable". Trisma Capital LLC registrará las direcciones IP, las marcas de tiempo de acceso y los registros de descarga de los indicadores y cursos. Presentaremos esta evidencia técnica de forma sistemática a Stripe y a la entidad emisora de la tarjeta para disputar el cargo, recuperar los fondos y bloquear al usuario de futuras compras.',
              bullets: []
            }
          ]
        },
        privacy: {
          title: 'Política de Privacidad',
          updated: 'Última actualización: 18 de septiembre de 2026',
          intro: 'Esta Política de Privacidad describe cómo Trisma Capital LLC recopila, utiliza y protege su información personal cuando visita nuestro sitio web o realiza una compra.',
          sections: [
            {
              title: '1. Información que recopilamos',
              text: 'Cuando realiza una compra o intenta realizarla, recopilamos cierta información de manera automatizada y voluntaria:',
              bullets: [
                'Datos de identificación y contacto: Nombre completo, dirección de facturación, dirección de envío (para envíos de café o productos físicos), correo electrónico y número de teléfono.',
                'Datos de pago: La información de su tarjeta de crédito o débito es procesada de forma encriptada y segura por Stripe. Trisma Capital LLC no almacena ni tiene acceso directo a los números completos de sus tarjetas ni a sus códigos de seguridad.',
                'Datos de uso, acceso y auditoría: Direcciones IP, tipo de navegador, registros de descargas de software (indicadores y scripts) e historial de acceso a la plataforma de cursos. Estos datos son críticos para la entrega del servicio y la prevención de fraudes.'
              ]
            },
            {
              title: '2. Uso de la información',
              text: 'Utilizamos la información recopilada para los siguientes propósitos operativos:',
              bullets: [
                'Procesar y completar sus pedidos, ya sea generando las guías de envío para el café o habilitando el acceso digital a los indicadores y plataformas de educación.',
                'Comunicarnos con usted para enviarle confirmaciones de pedido, soporte técnico o notificaciones de actualización de herramientas de trading.',
                'Prevenir posibles riesgos o fraudes, monitorizando las direcciones IP de compra frente a las direcciones IP de descarga para proteger nuestros activos digitales e intelectuales.',
                'Cumplir con obligaciones legales, fiscales y contables.'
              ]
            },
            {
              title: '3. Intercambio de información con terceros',
              text: 'No vendemos, alquilamos ni comercializamos su información personal. Solo compartimos datos con terceros estrictamente necesarios para la operatividad del negocio:',
              bullets: [
                'Stripe: Para el procesamiento seguro y legal de pagos en línea.',
                'Empresas de logística y paquetería: Exclusivamente la información necesaria (nombre, teléfono y dirección) para garantizar la entrega de productos físicos.',
                'Autoridades legales: Si somos requeridos por ley o para defender nuestros derechos patrimoniales ante disputas de pago fraudulentas.'
              ]
            },
            {
              title: '4. Retención de datos',
              text: 'Mantendremos la información de su pedido en nuestros registros para cumplir con nuestras obligaciones legales y de resolución de disputas comerciales, a menos que nos solicite eliminar dicha información y la ley nos permita hacerlo (salvo los registros de acceso digital necesarios para evidenciar la entrega de un producto).',
              bullets: []
            },
            {
              title: '5. Sus derechos y contacto',
              text: 'Dependiendo de su jurisdicción (incluyendo las normativas de privacidad del estado de California), usted tiene derecho a acceder a la información personal que tenemos sobre usted, y a solicitar que sea corregida, actualizada o eliminada de nuestras listas de marketing. Para ejercer estos derechos o consultar cualquier duda legal, puede ponerse en contacto con nuestro equipo de soporte.',
              bullets: []
            }
          ]
        },
        terms: {
          title: 'Términos y Condiciones',
          updated: 'Última actualización: 18 de septiembre de 2026',
          intro: 'Al utilizar este sitio web y adquirir los productos o servicios de Trisma Capital LLC, usted acepta cumplir con las siguientes condiciones comerciales y legales:',
          sections: [
            {
              title: '1. Uso del Material Educativo y Software',
              text: 'Todo el material proporcionado en los cursos y herramientas de Trisma Capital LLC, incluyendo pero no limitado a videos, documentos, scripts e indicadores (thinkScript, NinjaScript, MQL5), es de uso exclusivo y personal del estudiante. Queda estrictamente prohibida su reproducción, distribución o comercialización a terceros sin el consentimiento expreso por escrito de Trisma Capital LLC.',
              bullets: []
            },
            {
              title: '2. Sujeción a las Políticas Comerciales',
              text: 'Cualquier adquisición de productos digitales o café de especialidad está sujeta a nuestra Política de Reembolso y Devoluciones estricta y a nuestra Política de Privacidad.',
              bullets: []
            }
          ]
        },
        closeBtn: 'Entendido'
      }
    }
  },
  EN: {
    nav: { inicio: 'Home', ecosistema: 'Ecosystem', catalogo: 'Catalog', aliados: 'Coffee Partners', faq: 'FAQ', contacto: 'Contact' },
    hero: { subtitle: 'STRATEGIC TRADING & EDUCATION', title: 'Master the market. Build your legacy.', desc: 'A unique ecosystem merging the rigor of financial trading, excellence in education, and a passion for specialty coffee.', btn1: 'Explore Ecosystem', btn2: 'Our Community', communityModalTitle: 'Join our Community', communityModalSub: 'Follow us on social media or sign in to access exclusive content.', signIn: 'Sign In / Register' },
    marquee: ['TRADING', 'EDUCATION', 'SPECIALTY COFFEE', 'COMMUNITY', 'FUTURES', 'NASDAQ', 'COFFEE PARTNERS'],
    sections: {
      header: 'Our Pillars', sub: 'Ecosystem',
      tradingTitle: 'Trading',
      tradingDesc: 'Proprietary indicators, filtered signals, and live mentoring on Nasdaq futures (NQ/MNQ).',
      eduTitle: 'Education',
      eduDesc: 'Online trading and coffee courses, designed to advance at your own pace, no BS.',
      cafeTab: 'Coffee',
      cafeDesc: 'We are building a community where profitability in financial markets translates into real impact. We invest our discipline, time, and results into supporting Colombian farmers, promoting the fair commercialization of their single-origin coffee. Join an ecosystem that pairs technical precision with genuine social commitment to our land.',
      cafeTitle: 'Trisma Coffee — coming soon.', cafeSub: 'COMMUNITY', cafeBtn: 'Be part of the change', cafeAlert: 'Thank you for your interest! Welcome to our community.'
    },
    catalog: {
      title: 'Trisma Capital Courses', sub: 'Catalog',
      filters: { 'TRADING': 'TRADING', 'CAFE': 'COFFEE' },
      level: 'Level', view: 'View course',
      descAppend: 'You will learn practical skills, fundamental tools, and strategies applicable immediately upon finishing this course.',
      cost: 'Course Cost', methods: 'Payment Methods', enroll: 'Enroll Now',
      payBtn: 'Pay / Enroll', securePayment: 'Secure Checkout via Stripe',
      methodsList: 'Stripe (Credit / Debit Cards), Crypto, Zelle',
      refundNotice: 'Purchases subject to our Refund Policy',
      mentor: { role: 'Mentor', bio: 'Expert in algorithmic trading and Nasdaq futures. Passionate about teaching and specialty coffee. Over 5 years guiding traders towards consistency.', btn: 'Schedule Meeting', back: 'Back to course' },
      // Unique coffee course
      coffeeCourse: {
        title: 'Conociendo la Cultura Cafetera de Colombia',
        level: 'Single Level — Specialty',
        desc: 'Understanding our leisure time through specialty coffee. Learn how to turn leisure time into a mindful ritual of appreciation and sensory mastery through specialty coffee: micro-lots, SCA cupping scores, Colombian origin profiles, and manual brewing method calibration (French press, V60, and espresso).'
      },
      // 4 Trading courses with progressive levels
      tradingC1: {
        title: 'Curso de cero en trading.',
        level: 'Level 1 — Beginner',
        desc: 'The essential starting point for complete beginners. Understand stock and futures market architecture, order mechanics, Japanese candlestick reading, execution platforms, and core capital preservation rules to protect your funds from day one.'
      },
      tradingC2: {
        title: 'Curso básico de conceptos en trading.',
        level: 'Level 2 — Core Concepts',
        desc: 'Build a durable technical foundation: dynamic support and resistance, trend structure, volume profiling, asymmetric risk-to-reward ratios, and the crucial psychological discipline required when trading live.'
      },
      tradingC3: {
        title: 'Curso Intermedio entendiendo la bolsa de Valores.',
        level: 'Level 3 — Intermediate',
        desc: 'Deep-dive into Wall Street institutional mechanics and Nasdaq futures (NQ/MNQ). Market open/close auctions, hidden liquidity pools, index-sector correlations, market depth analysis, and quantitative risk management per position.'
      },
      tradingC4: {
        title: 'Curso avanzado de movimiento macroeconómico.',
        level: 'Level 4 — Advanced',
        desc: 'Advanced specialization to decode global macro catalysts moving billions across Wall Street: Federal Reserve policy decisions (FOMC), interest rates, inflation figures (CPI/PPI), employment reports (NFP), Treasury bond yields, and institutional capital flows.'
      }
    },
    partners: {
      sub: 'PARTNERSHIPS & ORIGIN',
      title: 'Our Coffee Partners',
      desc: 'We bridge financial markets with the tangible value of our soil. We work directly with Colombian coffee-growing families, artisan roasters, and cupping laboratories to champion fair trade, environmental sustainability, and single-origin beans rated 85+ SCA points.',
      badge: 'FAIR TRADE & SUSTAINABLE ORIGIN',
      stats: [
        { value: '1,850m+', label: 'Average Elevation', sub: 'Colombian Highlands' },
        { value: 'SCA 86+', label: 'Cup Quality', sub: 'Certified cupping score' },
        { value: '100%', label: 'Direct Trade', sub: 'Farming families' },
        { value: '0%', label: 'Middlemen', sub: 'Transparent sourcing' }
      ],
      list: [
        {
          name: 'Huila & Antioquia Family Estates',
          category: 'Origin Producers',
          location: 'Pitalito & Fredonia, Colombia',
          elevation: '1,750m - 2,100m ASL',
          varieties: 'Geisha, Caturra, Pink Bourbon',
          desc: 'Direct partnerships with generational growers practicing controlled anaerobic fermentation and meticulous selective harvesting at peak cherry ripeness.'
        },
        {
          name: 'Artisan Specialty Roastery',
          category: 'Curation & Roasting',
          location: 'Medellín / Bogotá',
          elevation: 'Micro-Lot Thermal Profiles',
          varieties: 'Medium / Light Sensory Roast',
          desc: 'Master roasters crafting bespoke thermal roast curves per lot to preserve delicate jasmine aromatics, raw cane sweetness, and crisp, balanced acidity.'
        },
        {
          name: 'Q-Grader Sensory Quality Lab',
          category: 'Quality Control & SCA',
          location: 'Coffee Triangle, Colombia',
          elevation: 'International SCA Protocol',
          varieties: 'Hot & Cold Cupping Analysis',
          desc: 'Rigorous technical cupping guaranteeing sensory consistency, moisture metrics, water activity levels, and zero primary defects in each lot.'
        },
        {
          name: 'Barista Guild & Signature Cafés',
          category: 'Culture & Experiences',
          location: 'International Partner Network',
          elevation: 'Artisan Pour-Over & Espresso',
          varieties: 'V60, Chemex, Aeropress, Espresso',
          desc: 'Vibrant spaces where the ritual of specialty coffee meets daily analysis of global finance, macro trends, and personal freedom.'
        }
      ],
      ctaTitle: 'Are you a coffee grower, roaster, or specialty coffee advocate?',
      ctaDesc: 'We back sustainable agricultural ventures and value-aligned commercial partnerships.',
      ctaBtn: 'Connect with our coffee team'
    },
    faq: {
      title: 'Frequently Asked Questions', sub: 'Common Doubts',
      q1: 'What is Trisma Capital?', a1: 'Trisma Capital is a unique ecosystem merging the rigor of financial trading, excellence in education, and a passion for specialty coffee, creating a space for comprehensive development.',
      q2: 'Do I need previous experience to enroll in trading courses?', a2: 'No, we offer educational programs designed for all levels. From basic fundamentals for beginners to advanced strategies for experienced traders.',
      q3: 'Where does your specialty coffee come from?', a3: 'We work directly with carefully selected local producers, ensuring beans of the highest quality, a perfect roast, and fair trade practices.',
      q4: 'How can I access personalized mentoring?', a4: 'Mentoring is available for students of our advanced courses or by direct request through our contact form.',
      q5: 'Do you offer certificates upon course completion?', a5: 'Yes, all our educational courses grant a certificate of completion that guarantees the knowledge and skills acquired during the program.'
    },
    contact: {
      title: 'Connect with Us', sub: 'Contact', desc: 'Have questions about the courses, mentoring, or want to join the coffee community? Write to us.', formSub: 'Complete the form below and a member of our team will contact you within 24 business hours.',
      form: { name: 'Name', namePl: 'Ex. John Doe', email: 'Email', emailPl: 'your@email.com', interest: 'Area of Interest', int1: 'Trading / Mentoring', int2: 'Coffee Courses', int3: 'Other', msg: 'Message', msgPl: 'How can we help you?', btn: 'Send Message via WhatsApp' },
      info: { emailTitle: 'Email', hoursTitle: 'Business Hours', hoursDesc: 'Schedule meeting (M-F, 9 AM - 6 PM)', whatsappTitle: 'Direct WhatsApp', whatsappDesc: '+1 (669) 946-7565 (Jaime)' },
      modal: { title: 'Schedule meeting with Jaime', sub: 'Choose your availability and preferred format.', name: 'Full Name', namePl: 'Your full name', contact: 'Email or Phone', contactPl: 'example@email.com or +1 234 567 8900', date: 'Date', time: 'Time', mode: 'Format', mode1: 'Video call', mode2: 'Phone call', mode3: 'In-person', loc: 'Preferred location', locPl: 'Ex. Trisma Cafe, Downtown...', btn: 'Request Meeting via WhatsApp', whatsappSuccess: 'Meeting request prepared for Jaime (+1 669 946-7565) via WhatsApp.', whatsappBtn: 'Open WhatsApp with Jaime' }
    },
    footer: {
      desc: 'A unique ecosystem merging the rigor of financial trading, excellence in education, and a passion for specialty coffee.',
      explore: 'Explore', rights: 'All rights reserved.',
      refundLink: 'Refund Policy',
      privacyLink: 'Privacy Policy',
      tc: 'Terms & Conditions',
      design: 'Designed with market criterion and the aroma of coffee.',
      disclaimer: 'Disclaimer: futures trading involves substantial risk and is not suitable for all investors. The information on this site is educational and does not constitute financial advice.',
      legal: {
        tabs: {
          refund: 'Refund & Returns',
          privacy: 'Privacy Policy',
          terms: 'Terms & Conditions'
        },
        refund: {
          title: 'Refund and Returns Policy',
          updated: 'Last updated: September 18, 2026',
          intro: 'At Trisma Capital LLC, we value the quality of our products and the satisfaction of our clients. Due to the nature of the products and services we offer, we strictly apply the following commercial terms:',
          sections: [
            {
              title: '1. Digital Products (Trading Indicators, Online Courses & Market Analysis)',
              text: 'All digital products, including but not limited to custom scripts and indicators (thinkScript, NinjaScript, MQL5), access to online courses (e.g. coffee roasting or trading strategies), and consulting or financial market analysis materials, are intangible in nature and irrevocable once delivered.',
              bullets: [
                'Refund condition: No refunds, returns, or cancellations are issued once the client has accessed the content, the download link has been dispatched, or the software license has been activated.',
                'Upon purchase, the client acknowledges and agrees to waive their right of withdrawal once digital download or access has commenced.'
              ]
            },
            {
              title: '2. Physical and Perishable Goods (Specialty Coffee)',
              text: 'Due to food safety regulations and strict quality control standards, roasted coffee is a perishable commodity.',
              bullets: [
                'No coffee returns are accepted under any circumstance (for example, if the flavor profile is not to the client’s liking or if an error was made by the client when placing the order).',
                'Exceptions: Replacements or refunds will only be processed if the product arrives damaged, the packaging is compromised from origin, or an incorrect item was dispatched. In such cases, the client must notify our support team within a maximum of 7 calendar days of receipt, attaching photographic evidence of the damage and shipping box.'
              ]
            },
            {
              title: '3. Anti-Fraud and Chargeback Policy',
              text: 'Any attempt at fraud, including claiming refunds through the banking institution or payment processor (Stripe) after having consumed, downloaded, or accessed the digital product, will be legally treated as "friendly fraud". Trisma Capital LLC will log IP addresses, access timestamps, and download records of indicators and courses. We will systematically submit this technical evidence to Stripe and the issuing card institution to contest the charge, recover funds, and block the user from future purchases.',
              bullets: []
            }
          ]
        },
        privacy: {
          title: 'Privacy Policy',
          updated: 'Last updated: September 18, 2026',
          intro: 'This Privacy Policy describes how Trisma Capital LLC collects, uses, and protects your personal information when you visit our website or make a purchase.',
          sections: [
            {
              title: '1. Information We Collect',
              text: 'When you make a purchase or attempt to make a purchase, we collect certain information automatically and voluntarily:',
              bullets: [
                'Identification and contact data: Full name, billing address, shipping address (for coffee or physical shipments), email address, and phone number.',
                'Payment data: Your credit or debit card information is processed securely and encrypted by Stripe. Trisma Capital LLC does not store or have direct access to your full card numbers or security codes.',
                'Usage, access, and audit data: IP addresses, browser type, software download logs (indicators and scripts), and course platform access history. These data points are critical for service delivery and fraud prevention.'
              ]
            },
            {
              title: '2. How We Use Your Information',
              text: 'We use the collected information for the following operational purposes:',
              bullets: [
                'Process and complete your orders, whether generating shipping labels for coffee or provisioning digital access to indicators and educational platforms.',
                'Communicate with you to send order confirmations, technical support, or trading tool update notifications.',
                'Prevent potential risks or fraud by monitoring purchase IP addresses against download IP addresses to safeguard our digital and intellectual property.',
                'Comply with legal, tax, and accounting obligations.'
              ]
            },
            {
              title: '3. Sharing Information with Third Parties',
              text: 'We do not sell, rent, or trade your personal information. We only share data with third parties strictly necessary for business operations:',
              bullets: [
                'Stripe: For secure and compliant online payment processing.',
                'Logistics and courier companies: Exclusively the information necessary (name, phone, and address) to ensure physical delivery of products.',
                'Legal authorities: If required by law or to defend our property rights against fraudulent payment disputes.'
              ]
            },
            {
              title: '4. Data Retention',
              text: 'We will retain your order information in our records to fulfill legal obligations and dispute resolution needs, unless you request deletion and applicable law permits it (excluding digital access logs required to substantiate product delivery).',
              bullets: []
            },
            {
              title: '5. Your Rights and Contact',
              text: 'Depending on your jurisdiction (including California privacy laws), you have the right to access personal information we hold about you, and to request correction, updates, or removal from our marketing lists. To exercise these rights or make legal inquiries, contact our support team.',
              bullets: []
            }
          ]
        },
        terms: {
          title: 'Terms & Conditions',
          updated: 'Last updated: September 18, 2026',
          intro: 'By accessing this website and purchasing products or services from Trisma Capital LLC, you agree to comply with the following commercial and legal conditions:',
          sections: [
            {
              title: '1. Use of Educational Material & Software',
              text: 'All material provided in Trisma Capital LLC courses and tools, including but not limited to videos, documents, custom scripts and indicators (thinkScript, NinjaScript, MQL5), is for the exclusive and personal use of the student. Reproduction, distribution, or resale to third parties without the express written consent of Trisma Capital LLC is strictly prohibited.',
              bullets: []
            },
            {
              title: '2. Adherence to Commercial Policies',
              text: 'Any purchase of digital products or specialty coffee is strictly governed by our Refund and Returns Policy and our Privacy Policy.',
              bullets: []
            }
          ]
        },
        closeBtn: 'Understood'
      }
    }
  }
};
