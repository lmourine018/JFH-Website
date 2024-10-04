
/* Single image */
import simg1 from '../images/service-single/1.jpg'
import labaratory from '../images/service-single/labaratory.jpeg'
import simg3 from '../images/service-single/3.jpg'
import simg4 from '../images/service-single/4.jpg'
import eyeMain from '../images/service-single/eyeMain.jpeg'
import simg6 from '../images/service-single/6.jpg'
import dentalMain from '../images/service-single/dentalMain.jpeg';
import dental1 from '../images/service-single/dental1.jpg';
import triage from '../images/service-single/triage.jpeg';
import deliveryroom from '../images/service-single/deliveryroom.jpeg';
import maternity1 from '../images/service-single/maternity1.jpg';
import maternity2 from '../images/service-single/maternity2.jpeg';
import pharmacry from '../images/service-single/pharmacry.jpeg';
import pharmacology1 from '../images/service-single/pharmacology1.jpg';
import inpatient1 from '../images/service-single/inpatient1.jpeg';
import inpatient2 from '../images/service-single/inpatient2.jpeg';



const Services = [
    {
        slug: 'dental-services',
        title: 'Dental Services',
        description: `At JFH, we understand the importance of a healthy smile in overall well-being. Our modern dental facilities are equipped with the latest diagnostic and treatment tools, ensuring accurate assessments and effective solutions. Your comfort and safety are paramount to us, and our staff is here to guide you through every step of your dental journey.`,
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
        description: 'Designed to ensure the well-being of both expectant mothers and their newborns, our maternal wing is a sanctuary dedicated to nurturing new beginnings.As you explore our maternal wing, you will witness the dedication we have to creating a warm, supportive environment for expectant mothers.',
        simage: maternity1,
        images: [deliveryroom,maternity2],
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
        description: 'We believe in a holistic approach to healthcare, and our pharmacy services are an integral part of our commitment to providing comprehensive and compassionate medical care. Your health and well-being are our top priorities, and we are dedicated to ensuring that you receive the highest quality pharmacy services tailored to your individual needs.',
        simage: pharmacry,
        images: [pharmacology1],
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
        slug: 'optical-clinic',
        title: 'Optical Clinic',
        description: 'From routine eye examinations to specialized treatments, we ensure your vision health is in expert hands. Explore a range of eyewear options in our state-of-the-art opticalboutique, tailored to meet both style and prescription needs.',
        simage: eyeMain,
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
        slug: 'labaratory-services',
        title: 'Labaratory',
        description: 'We provide Laboratory services from the cornerstone of medical diagnoses. From early disease detection to personalized treatment plans, these services aid in identifying and understanding various health conditions, enabling timely and accurate treatment. Our laboratory services are committed to delivering excellence in patient care.',
        simage: labaratory,
        capabilitiesDescription: 'Oue Labaratory services include:',
        capabilities: [
            'Complete Blood Count (CBC)',
            'Blood Chemistry Panels',
            'Urinalysis',
            'Microbiology Cultures',
            'Genetic Testing',
            'Histopathology',
            'Immunology Tests',
            'Molecular Diagnostics',
            'Point-of-Care Testing',
            'Toxicology Screening',
        ],
        approach: 'Our approach to laboratory services emphasizes accuracy, efficiency, and patient-centric care. We utilize state-of-the-art technology and adhere to strict quality control protocols to ensure reliable results and swift turnaround times.',
        related: ['orthopedic', 'maternity-services'],
        icon: 'flaticon-laboratory',
    },
    {
        slug: 'outpatient-services',
        title: 'Outpatient Services',
        description: `Our outpatient services are designed to provide comprehensive medical care without the need for an overnight stay. Whether you're seeking preventive care, specialized treatments, or follow-up consultations, our outpatient facilities offer convenient and high-quality services to meet your healthcare needs.`,
        simage: triage,      // Main image for the outpatient service
        // images: [outpatient1],        // Array of additional images for the outpatient service
        capabilitiesDescription: 'Our outpatient services include:',
        capabilities: [
            'Primary Care Consultations',
            'Specialty Clinics (e.g., Dermatology, Endocrinology)',
            'Diagnostic Imaging (X-rays, MRIs)',
            'Physical Therapy and Rehabilitation',
            'Vaccinations and Immunizations',
            'Chronic Disease Management',
            'Mental Health Services',
            'Nutritional Counseling',
            'Preventive Screenings',
            'Minor Surgical Procedures',
        ],
        approach: 'We focus on delivering personalized and accessible outpatient care, ensuring that each patient receives timely and effective treatment in a comfortable environment.',
        related: ['inpatient-services', 'pharmacology-services'],
        icon: 'flaticon-outpatient',   // Ensure this icon class exists in your icon library
    },
    {
        slug: 'inpatient-services',
        title: 'Inpatient Services',
        description: `Our inpatient services provide comprehensive medical care requiring an overnight stay or longer. Equipped with advanced facilities and a dedicated medical team, we ensure that patients receive the highest level of care during their hospitalization, covering a wide range of medical needs from surgical procedures to intensive care.`,
        simage: inpatient1,      // Main image for the inpatient service
        images: [inpatient2],         // Array of additional images for the inpatient service
        capabilitiesDescription: 'Our inpatient services include:',
        capabilities: [
            'Surgical Procedures',
            'Intensive Care Unit (ICU)',
            'Maternity and Neonatal Care',
            'Oncology Treatment',
            'Cardiac Care',
            'Neurological Services',
            'Pediatric Inpatient Care',
            'Postoperative Recovery',
            'Inpatient Rehabilitation',
            'Pain Management',
        ],
        approach: 'We prioritize patient safety and comfort, employing cutting-edge medical technologies and compassionate care to support patients throughout their inpatient journey.',
        related: ['outpatient-services', 'cardiology-services'],
        icon: 'flaticon-inpatient',    // Ensure this icon class exists in your icon library
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
];

export default Services;