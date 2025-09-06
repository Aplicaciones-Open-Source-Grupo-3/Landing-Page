// Text translations for English and Spanish
const translations = {
    en: {
        main: "Main",
        about: "About",
        how_it_works: "How it works?",
        pricing: "Pricing",
        contact: "Contact",
        hero_title: "PARKING MANAGEMENT",
        hero_subtitle: "MADE EASY",
        hero_description: "Maximize your revenue and offer a superior customer experience with our comprehensive solution",
        start_now: "Start now",
        about_title: "Do you have these problems?",
        problem1_title: "Operational Inefficiency",
        problem2_title: "Revenue Loss",
        problem3_title: "Poor Customer Experience",
        about_closing: "So Easy Park is the solution for you",
        how_it_works_title: "Our Comprenhensive Solution",
        how_it_works_subtitle: "EasyPark simplifies the parking management process in four simple steps. Discover how our platform helps you optimize your parking lot.",
        vehicle_registration: "Real-time Control",
        real_time_control: "Visualize the occupancy of each space instantly, optimizing the flow of entry and exit.",
        automated_access: "Complete Automation",
        automated_access_description:"From vehicle registration to payment collection, the entire process is automated, reducing the need for manual intervention.",
        smart_payment: "Smart Customer Management",
        smart_payment_description: "Efficiently manage subscriptions, access history, and customer profiles",
        real_time_monitoring: "Advanced Analytics",
        advanced_analytics_description:"Access detailed reports on revenue, usage patterns to improve decision-making and maximize your profits.",
        pricing_title: "Our Plans",
        standard_plan_title: "Standard",
        basic_tag: "Basic",
        standard_price: "$30 / month",
        days_free_trial: "✔ 30 days free trial",
        real_time_occupancy: "✔ Real-time occupancy view",
        advanced_analytics: "✔ Basic analytics and reports",
        basic_revenue_reports: "✔ Basic revenue reports",
        standard_support:"✔ Standard support",
        start_free: "Start free",
        pro_plan_title: "Pro",
        advanced_tag: "Advanced",
        pro_price: "$100 / month",
        all_basic_plan_features: "✔ All Basic plan features",
        advanced_analytics: "✔ Advanced analytics and custom reports",
        priority_support: "✔ 24/7 priority support",
        complete_subscription: "✔ Complete subscription",
        integrations_with_other_systems: "✔ Integrations with other systems",
        order_now: "Order now",
        contact_title: "Ready to Optimize Your Parking?",
        contact_subtitle: "Chat directly with one of our advisors to quickly resolve all your questions.",
        contact_whatsapp: "Start Chat on WhatsApp",
        contact_telegram: "Start Chat on Telegram",
        
    },
    es: {
        main: "Inicio",
        about: "Acerca de",
        how_it_works: "¿Cómo funciona?",
        pricing: "Precios",
        contact: "Contacto",
        hero_title: "GESTIÓN DE ESTACIONAMIENTO",
        hero_subtitle: "HECHA FÁCIL",
        hero_description: "Maximice sus ingresos y ofrezca una experiencia superior al cliente con nuestra solución integral",
        start_now: "Comience ahora",
        about_title: "¿Tiene estos problemas?",
        problem1_title: "Ineficiencia Operacional",
        problem2_title: "Pérdida de Ingresos",
        problem3_title: "Mala Experiencia del Cliente",
        about_closing: "Entonces Easy Park es la solución para usted",
        how_it_works_title: "Nuestra Solución Integral",
        how_it_works_subtitle: "EasyPark simplifica el proceso de gestión de estacionamientos en cuatro sencillos pasos. Descubra cómo nuestra plataforma le ayuda a optimizar su estacionamiento.",
        vehicle_registration: "Control en Tiempo Real",
        real_time_control: "Visualice la ocupación de cada espacio al instante, optimizando el flujo de entrada y salida.",
        automated_access: "Automatización Completa",
        automated_access_description:"Desde el registro del vehículo hasta la cobranza del pago, todo el proceso está automatizado, reduciendo la necesidad de intervención manual.",
        smart_payment: "Gestión Inteligente de Clientes",
        smart_payment_description: "Gestione eficientemente las suscripciones, el historial de acceso y los perfiles de los clientes.",
        real_time_monitoring: "Analítica Avanzada",
        advanced_analytics_description:"Acceda a informes detallados sobre ingresos, patrones de uso para mejorar la toma de decisiones y maximizar sus ganancias.",
        pricing_title: "Nuestros Planes",
        standard_plan_title: "Estándar",
        basic_tag: "Básico",
        standard_price: "$30 / mes",
        pro_price: "$100 / mes",
        days_free_trial: "✔ 30 días de prueba gratis",
        real_time_occupancy: "✔ Vista de ocupación en tiempo real",
        advanced_analytics: "✔ Analítica y reportes básicos",
        basic_revenue_reports: "✔ Reportes básicos de ingresos",
        standard_support:"✔ Soporte estándar para todos los usuarios",
        start_free: "Comience gratis",
        pro_plan_title: "Pro",
        advanced_tag: "Avanzado",
        all_basic_plan_features: "✔ Todas las características del plan básico",
        advanced_analytics: "✔ Analítica y reportes avanzados",
        priority_support: "✔ Soporte prioritario 24/7",
        complete_subscription: "✔ Gestión completa de suscripciones",
        integrations_with_other_systems: "✔ Integraciones total",
        order_now: "Ordene ahora",
        contact_title: "¿Listo para Optimizar su Estacionamiento?",
        contact_subtitle: "Chatee directamente con uno de nuestros asesores para resolver rápidamente todas sus preguntas.",
        contact_whatsapp: "Iniciar chat en WhatsApp",
        contact_telegram: "Iniciar chat en Telegram",
        
    }
};

let currentLanguage = 'en'; // Default language

// Function to change the language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en'; // Toggle between 'en' and 'es'
    updateContent();
    document.getElementById('language-toggle').textContent = currentLanguage === 'en' ? 'ES' : 'EN'; // Change button text
}

// Function to update content based on selected language
function updateContent() {
    // Loop through all elements with the 'data-translate' attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Initialize content in the default language
updateContent();
