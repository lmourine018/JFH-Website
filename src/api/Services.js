
/* Single image */
import simg1 from '../images/service-single/1.jpg'
import simg2 from '../images/service-single/2.jpg'
import simg3 from '../images/service-single/3.jpg'
import simg4 from '../images/service-single/4.jpg'
import simg5 from '../images/service-single/5.jpg'
import simg6 from '../images/service-single/6.jpg'



const Services = [
    {
        slug: 'dental-services',
        title: 'Dental Services',
        description: 'Comprehensive dental care for all ages.',
        simage: require('../images/services/dental-1.jpg').default, // Ensure correct image path
        images: [
            require('../images/services/dental-1.jpg').default,
            require('../images/services/dental-1.jpg').default,
        ],
        capabilitiesDescription: 'Our dental services include:',
        capabilities: [
            'Routine Check-ups and Cleanings',
            'Orthodontics and Braces',
            'Cosmetic Dentistry',
            'Dental Implants',
            'Emergency Dental Care',
        ],
        approach: 'Our approach to dental care focuses on patient comfort, modern techniques, and comprehensive treatment plans tailored to each individual.',
        related: ['maternity-services', 'pharmacology'],
        icon: 'flaticon-tooth',
    },
    {
        slug: 'maternity-services',
        title: 'Maternity Services',
        description: 'Comprehensive care for expectant mothers.',
        simage: require('../images/services/maternity-1.jpg').default,
        images: [
            require('../images/services/maternity-1.jpg').default,
            require('../images/services/maternity-1.jpg').default,
        ],
        capabilitiesDescription: 'Our maternity services include:',
        capabilities: [
            'Prenatal Care',
            'Birthing Classes',
            'Postnatal Support',
            'Lactation Consulting',
            'Neonatal Care',
        ],
        approach: 'We provide compassionate and personalized maternity care, ensuring the health and well-being of both mother and child throughout the pregnancy journey.',
        related: ['dental-services', 'pharmacology'],
        icon: 'flaticon-pregnant',
    },
    {
        slug: 'pharmacology',
        title: 'Pharmacology',
        description: 'Expert pharmaceutical services and consultations.',
        simage: require('../images/services/pharmacology-1.jpg').default,
        images: [
            require('../images/services/pharmacology-1.jpg').default,
            require('../images/services/pharmacology-1.jpg').default,
        ],
        capabilitiesDescription: 'Our pharmacology services include:',
        capabilities: [
            'Medication Management',
            'Pharmaceutical Consultations',
            'Compounding Services',
            'Vaccinations and Immunizations',
            'Health and Wellness Programs',
        ],
        approach: 'Our pharmacology team is dedicated to providing accurate and personalized medication management to enhance patient health outcomes.',
        related: ['dental-services', 'maternity-services'],
        icon: 'flaticon-pharmacy',
    },
    {
        id: 3,
        icon: 'flaticon-bone',
        simage: simg3,
        title: 'Orthopedic',
        description: 'We have more doctor for your dental illness. We are here for your better treatment',
        slug: 'Orthopedic'
    },
    {
        id: 4,
        icon: 'flaticon-baby',
        simage: simg4,
        title: 'Gyneological',
        description: 'We have more doctor for your dental illness. We are here for your better treatment',
        slug: 'Gyneological'
    },
    {
        id: 5,
        icon: 'flaticon-rehabilitation',
        simage: simg5,
        title: 'Rehabilitation',
        description: 'We have more doctor for your dental illness. We are here for your better treatment',
        slug: 'Rehabilitation'
    },
    {
        id: 6,
        icon: 'flaticon-microsurgery',
        simage: simg6,
        title: 'Heart Surgery',
        description: 'We have more doctor for your dental illness. We are here for your better treatment',
        slug: 'Heart Surgery'
    },





];
export default Services;