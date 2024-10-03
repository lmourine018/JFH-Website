
/* Single image */
import simg1 from '../images/service-single/1.jpg'
import simg2 from '../images/service-single/2.jpg'
import simg3 from '../images/service-single/3.jpg'
import simg4 from '../images/service-single/4.jpg'
import simg5 from '../images/service-single/5.jpg'
import simg6 from '../images/service-single/6.jpg'
import dentalMain from '../images/service-single/dentalMain.jpg';
import dental1 from '../images/service-single/dental1.jpg';
// import dental2 from '../images/services/dental-2.jpg';
// import maternityMain from '../images/services/maternity-main.jpg';
import maternity1 from '../images/service-single/maternity1.jpg';
// import maternity2 from '../images/services/maternity-2.jpg';
// import pharmacologyMain from '../images/services/pharmacology-main.jpg';
import pharmacology1 from '../images/service-single/pharmacology1.jpg';
// import pharmacology2 from '../images/services/pharmacology-2.jpg';


const Services = [
    {
        slug: 'dental-services',
        title: 'Dental Services',
        description: 'Comprehensive dental care for all ages.',
        simage: dentalMain,
        images: [dental1],
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
        slug: 'maternity',
        title: 'Maternity',
        description: 'Comprehensive care for expectant mothers.',
        simage: maternity1,
        // images: [maternity1, maternity2],
        capabilitiesDescription: 'Our maternity services include:',
        capabilities: [
            'Prenatal Care',
            'Birthing Classes',
            'Postnatal Support',
            'Lactation Consulting',
            'Neonatal Care',
            'Normal Delivery',
            'Cs',
        ],
        approach: 'We provide compassionate and personalized maternity care, ensuring the health and well-being of both mother and child throughout the pregnancy journey.',
        related: ['dental-services', 'pharmacology'],
        icon: 'flaticon-pregnant',
    },
    {
        icon: 'flaticon-pharmacy',
        slug: 'pharmacology',
        title: 'Pharmacology',
        description: 'Expert pharmaceutical services and consultations.',
        simage: pharmacology1,
        // images: [pharmacology1, pharmacology2],
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
    },
    {
        slug: 'orthopedic',
        title: 'Orthopedic',
        description: 'Comprehensive orthopedic care and treatments.',
        simage: simg3,
        capabilitiesDescription: 'Our orthopedic services include:',
        capabilities: [
            'Fracture Management',
            'Joint Replacement Surgery',
            'Arthroscopy',
            'Physical Therapy',
            'Sports Medicine',
        ],
        approach: 'We specialize in providing advanced orthopedic treatments for bones and joints, ensuring a speedy recovery.',
        related: ['physiotherapy-services', 'theater-services'],
        icon: 'flaticon-bone',
    },
    {
        slug: 'gynecology',
        title: 'Gynecological',
        description: 'Advanced care for women’s reproductive health.',
        simage: simg4,
        capabilitiesDescription: 'Our gynecological services include:',
        capabilities: [
            'Pap Smears and Pelvic Exams',
            'Family Planning',
            'Menstrual Disorders Treatment',
            'Reproductive Health Counseling',
            'Gynecologic Surgery',
        ],
        approach: 'We offer personalized gynecological care to address various reproductive health needs with a patient-first approach.',
        related: ['maternity-services', 'pharmacology'],
        icon: 'flaticon-baby',
    },
    {
        slug: 'optical-clinic',
        title: 'Optical Clinic',
        description: 'Eye care and optical services for all ages.',
        simage: simg5,
        capabilitiesDescription: 'Our optical services include:',
        capabilities: [
            'Comprehensive Eye Exams',
            'Prescription Glasses and Contact Lenses',
            'Laser Eye Surgery',
            'Vision Therapy',
            'Eye Disease Management',
        ],
        approach: 'We provide complete optical services with state-of-the-art technology to ensure healthy eyes and clear vision.',
        related: ['dental-services', 'pharmacology'],
        icon: 'flaticon-rehabilitation',
    },
    {
        slug: 'theater',
        title: 'Theater Services',
        description: 'Advanced surgical care in a sterile environment.',
        simage: simg6,
        capabilitiesDescription: 'Our theater services include:',
        capabilities: [
            'General Surgery',
            'Minimally Invasive Procedures',
            'Orthopedic Surgery',
            'Gynecological Surgery',
            'Emergency Surgeries',
        ],
        approach: 'We ensure the highest level of safety and expertise for all surgical procedures, providing top-notch care.',
        related: ['orthopedic', 'maternity-services'],
        icon: 'flaticon-microsurgery',
    },
    {
        slug: 'physiotherapy',
        title: 'Physiotherapy Services',
        description: 'Rehabilitation and physical therapy to enhance mobility.',
        simage: simg6,
        capabilitiesDescription: 'Our physiotherapy services include:',
        capabilities: [
            'Post-Surgery Rehabilitation',
            'Chronic Pain Management',
            'Sports Injury Recovery',
            'Manual Therapy Techniques',
            'Exercise Therapy',
        ],
        approach: 'Our physiotherapy services are designed to promote healing, restore mobility, and improve quality of life.',
        related: ['orthopedic', 'theater-services'],
        icon: 'flaticon-microsurgery',
    },
];

export default Services;