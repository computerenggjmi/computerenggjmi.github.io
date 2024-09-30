const images =
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const PhdScholarsongoing = [
  {
    name: "Areeba Atiq",
    supervisor: "Dr. Sarfaraz Masood",
    title: "Estimation of Heart rate using Deep Learning",
    year: 2024
  },
  {
    name: "Shaista Khan",
    supervisor: "Prof. Tanvir Ahmad",
    title: "Fairness in Graph Mining",
    year: 2024
  },
  {
    name: "Anwar Hussain",
    supervisor: "Dr. Mohd Zeeshan Ansari",
    title: "Enhancing Healthcare Access Using Deep Learning",
    year: 2024
  },
  {
    name: "Sadaf",
    supervisor: "Dr. Mumtaz Ahmad",
    title: "Generating Image from Textual Description using Large Language Models (LLMs)",
    year: 2024
  },
  {
    name: "Mohd. Anas",
    supervisor: "Dr. Mumtaz Ahmad",
    title: "Hate Speech Detection in Social Networks using Machine Learning and Deep Learning Methods",
    year: 2024
  },
  {
    name: "Neelam",
    supervisor: "Dr. Danish Raza Rizvi",
    title: "Design and Development of an Advanced Plants Disease Detection System using Deep Learning for Precision Agriculture",
    year: 2024
  },
  {
    name: "Shadab Ahmad Ghazali",
    supervisor: "Dr. Vinay Thakur",
    title: "Mitigating Privacy and Security Challenges in Artificial Intelligence and Machine Learning Systems",
    year: 2024
  },
  {
    name: "Saba Manzoor",
    supervisor: "Dr. Faiyaz Ahmad and Dr. Musheer Ahmad",
    title:
      "Deep Learning based Automated Traffic Analysis for Intelligent Transportation",
    year: 2023,
  },
  {
    name: "Nishat Fatima",
    supervisor: "Prof. Tanvir Ahmad",
    title:
      "Designing ML Models for Early Detection and Diagnosis Of Autism Spectrum Disorder (ASD)",
    year: 2023,
  },
  {
    name: "Humera Aqeel",
    supervisor: "Dr. Danish Raza Rizvi",
    title:
      "A smart framework for Knowledge summarization and Prediction Modeling on Electrcronic Hospital Recod (HER)",
    year: 2023,
  },
  {
    name: "Hiba Shakeel",
    supervisor: "Prof. Bashir Alam",
    title:
      "Design And analysis of Load Balancing Algorithm in Cloud anc fog Computing",
    year: 2023,
  },
  {
    name: "Nighat Naaz Ansari",
    supervisor: "Prof. Mohd. Amjad",
    title: "Parkinson's Disease progression prediction using Deep Learning",
    year: 2023,
  },
  {
    name: "Sahruna",
    supervisor: "Dr. Musheer Ahmad & Dr. Faiyaz Ahmad",
    title:
      "A Deep Learning Approach for Brain Tumor Classification And Segmentation",
    year: 2023,
  },
  {
    name: "Amit Khatri",
    supervisor: "Dr. Shahazad Alam",
    title: "Investigating role of Al in Big Data Classification",
    year: 2023,
  },
  {
    name: "Aman Kumar",
    supervisor: "Dr.Danish Raza Rizvi",
    title:
      "Prominent Feature for image-Based Text Retrieval and Knowledge Weihtage Calculation",
    year: 2022,
  },
  {
    name: "Anisurrahman",
    supervisor: "Dr.Bashir Alam",
    title: "Early Detection Of Lung Cancer using Deep Learning",
    year: 2022,
  },
  {
    name: "Anupam Kumar",
    supervisor: "Dr Faiyaz Ahmad and Dr.Bashir Alam",
    title: "High Brid Bio-inspired Computing in Medical Image Data Analysis",
    year: 2022,
  },
  {
    name: "Aqib Nazir Mir",
    supervisor: "Dr.Danish Raza Rizvi",
    title: "Generalizable and Explainable Deep Learning in Medical Imaging",
    year: 2022,
  },
  {
    name: "Azra",
    supervisor: "Dr. Mohd Zeeshan Ansari",
    title: "Deep Learning based multimodal fake news Detection",
    year: 2022,
  },
  {
    name: "Ibtesaam Rais",
    supervisor: "Dr. Shahzad Alam",
    title: "Enhanced Index Tracking using Soft Computing",
    year: 2022,
  },
  {
    name: "Rifa Nizam Khan",
    supervisor: "Dr. Mohd Amjad",
    title: "IoT Based women Self Defense System",
    year: 2022,
  },
  {
    name: "Tahseen Ali",
    supervisor: "Dr.Faiyaz Ahmad and Dr.Musheer Ahmad",
    title: "Application of Deep Learning for Cyber Security",
    year: 2022,
  },
  {
    name: "Zaira Bano",
    supervisor: "Dr .Mohd Zeeshan Ansari",
    title: "Automation of Software Testing using Machine iearning.",
    year: 2022,
  },
  {
    name: "Danish Asad Khan",
    supervisor: "Dr. Sarfaraz Masood and Prof. Mohd Amjad",
    title: "Application of Internet of Things in Smart Cities",
    year: 2021,
  },
  {
    name: "Ana Fatima",
    supervisor: "Dr. Sarfaraz Masood",
    title: "Application of Deep Learning in Computer Vision",
    year: 2021,
  },
  {
    name: "Iqra Nissar",
    supervisor: "Dr. Shahzad Alam and Dr. Sarfaraz Masood",
    title:
      "Role of deep Learning in Early Detection of Breast Cancer using Medical Image Analysis",
    year: 2021,
  },
  {
    name: "Ishfaq Ahmad Khaja",
    supervisor: "Dr. Musheer Ahmad",
    title: "Deep Learning for Design and Analysis of Security Systems",
    year: 2021,
  },
  {
    name: "Suman Raj",
    supervisor: "Dr. Shahzad Alam and Prof. Tanvir Ahmad",
    title: "Model for predicting cardiac arrest using Artificial intelligence",
    year: 2021,
  },
  {
    name: "Md Izhar",
    supervisor: "Dr. Musheer Ahmad",
    title:
      "Efficient High-Dimensional Hyper chaotic Models-Their Design and Cryptographic Application",
    year: 2021,
  },
  {
    name: "Zeba Anwar",
    supervisor: "Dr. Sarfaraz Masood",
    title: "Solicitation and Vefioration of Agriculture Through Deep Learning",
    year: 2021,
  },
  {
    name: "Shafaque Aziz",
    supervisor: "Prof. Mohd Amjad",
    title:
      "An Investigation The learning and Recognition of the Sign Language Transcription Using Deep learning",
    year: 2021,
  },
  {
    name: "Iffar Zarrin",
    supervisor: "Dr. Mumtaz Ahmad and Dr. Sarfaraz Masood",
    title: "Towards vehicular safety Using Machine learning paradigms",
    year: 2021,
  },
  {
    name: "Yusra",
    supervisor: "Dr. Musheer Ahmad and Prof. Tanvir Ahmad",
    title: "A Deep Learning Architecture for Sentiment",
    year: 2021,
  },
  {
    name: "Md Mahtab Alam",
    supervisor: "Dr. Mumtaz Ahmad",
    title: "Health Based recommendation system using deep Learning",
    year: 2021,
  },
  {
    name: "Amirul Haque",
    supervisor: "Prof. Bashir Alam",
    title: "GPU Based Hybrid Intrusion Detection System using Machine Learning",
    year: 2019,
  },
  {
    name: "Muhammad Hamid",
    supervisor: "Prof. Bashir Alam",
    title: "Pattern Recognition using Quantum Machine Learning",
    year: 2019,
  },
  {
    name: "Mohd Danish",
    supervisor: "Prof. Mohd Amjad and Prof. Tamar Ahmad",
    title: "Rating Based Recommender System using User Textual Reviews",
    year: 2019,
  },
  {
    name: "Rajiv Kumar Nath",
    supervisor: "Prof. Tanvir Ahmad",
    title:
      "Content Based Recommendation Systems using Computational intelligence",
    year: 2019,
  },
  {
    name: "Sabeena Yasmin Hera",
    supervisor: "Prof. Mohd Amjad",
    title:
      "Application of Machine Learning for User Profiling in Recommender System",
    year: 2019,
  },
  {
    name: "Samta Rani",
    supervisor: "Prof. Tanvir Ahmad",
    title: "A framework for Medical Diagnosis using Machine Learning",
    year: 2019,
  },
  {
    name: "Sana Zeba",
    supervisor: "Prof. Mohd Amjad",
    title:
      "Development of Approach for isolating Routing Attacks in Wireless Sensor based IOT System",
    year: 2019,
  },
  {
    name: "Tanya Liyaqat",
    supervisor: "Prof. Tanvir Ahmad",
    title:
      "Application of Machine Learning in Recommendaton Systems Based on Trust and Emotions",
    year: 2019,
  },
  {
    name: "Asif Khan",
    supervisor: "Prof. Mohd Amjad",
    title:
      "Threshold Sensitive with dynamic clustering and Sink Mobility An Energy Efficient Networks Protocol",
    year: 2019,
  },
  {
    name: "Faiz Akram",
    supervisor: "Prof. Tanvir Ahmad",
    title:
      "An investigation into Applications and Recommendations system during Software Requirement Elicitation",
    year: 2018,
  },
  {
    name: "Pranav Shrivastava",
    supervisor: "Prof. Bashir Alam",
    title:
      "A cryptographic system for secure data sharing with efficient dynamic group management in cloud computing",
    year: 2018,
  },
  {
    name: "Sielvie Sharma",
    supervisor: "Prof. Tanvir Ahmad and Dr. Muhammad Abulais",
    title:
      " Sub-event Detection in online social Media Using Deep Learning Techniques",
    year: 2018,
  },
  {
    name: "Umme Aiman",
    supervisor: "Prof. Tanvir Ahmad",
    title: "Application of Machine Learning and deep learning",
    year: 2017,
  },
  {
    name: "Ishleen Kaur",
    supervisor: "Prof. M N Doja and Prof. Tanvir Ahmad",
    title:
      "Survival Prediction in Cancer using Effective Data mining Techniques",
    year: 2017,
  },
];
const PhdScholarsawarded = [
  {
    name: "Mr. Venkata Subramanyam Vampugani",
    supervisor: "Prof. M. N. Doja",
    title:
      "Conceptual Modeling of the Data Sources of a Data Warehouse Using UML",
    year: 2014,
  },
  {
    name: "Mr. Vishal Gupta",
    supervisor: "Prof. M.N. Doja",
    title:
      "Performance Evaluation & Optimization of QoS Issues related to Wireless Sensor Networks",
    year: 2016,
  },
  {
    name: "Mr. Lalit Mohan Goyal",
    supervisor: "Dr. Tanvir Ahmad and Prof. M.M. Sufyan Beg",
    title: "Efficient Mining of Data in Distributed Databases",
    year: 2016,
  },
  {
    name: "Mr. Mohd. Wazih Ahmad",
    supervisor: "Prof. M.N. Doja",
    title: "Soft Computing in Intelligent Information Retrieval Systems",
    year: 2018,
  },
  {
    name: "Mr. Abdul Rahman",
    supervisor: "Dr. Tanvir Ahmad and Prof. M.M. Sufyan Beg",
    title: "Enhanced Image Identification Using Extended Fuzzy logic",
    year: 2015,
  },
  {
    name: "Mr. Mohit Gambhir",
    supervisor: "Prof. M.N. Doja and Prof. Moinuddin",
    title: "Authentication and Access Control Issues in Social Networks",
    year: 2015,
  },
  {
    name: "Mr. Siddharth Sankar Biswas",
    supervisor: "Dr. Bashir Alam and Prof. M.N. Doja",
    title: "Shortest Path Algorithms in Multigraphs & RT- Multigraphs",
    year: 2015,
  },
  {
    name: "Ms. Shweta Malthotra",
    supervisor: "Prof. M.N. Doja and Dr. Bashir Alam",
    title:
      "Developing a Framework for Cloud Database Management System Architecture",
    year: 2018,
  },
  {
    name: "Mr. Vivek Sharma",
    supervisor: "Dr. Bashir Alam and Prof. M.N. Doja",
    title:
      "Performance Improvement Routing Protocols in MANET using Soft Computing Techniques",
    year: 2018,
  },
  {
    name: "Mr. Rizwan Khan",
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Automatic Test data Generation for Data -Flow Testing Using Nature Inspired Evolutionary Meta-Heuristics Genetic Algorithm",
    year: 2017,
  },
  {
    name: "Mr. Syed Zubair Ahmad Shah",
    supervisor: "Dr. Mohd. Amjad",
    title: "Precending Clustering by Pattern Preservation",
    year: 2019,
  },
  {
    name: "Mr. Pawan Singh Mehra",
    supervisor: "Prof. M.N. Doja and Dr. Bashir Alam",
    title:
      "Energy Efficient cluster based Secure Routing protocol for wireless sensor Networks",
    year: 2019,
  },
  {
    name: "Mr. Arvind Kumar",
    supervisor: "Dr. Bashir Alam",
    title:
      "Fault tolerant and energy efficient scheduling algorithms for Real time systems",
    year: 2019,
  },
  {
    name: "Mr. Waseem Ahmed",
    supervisor: "Dr. Tanvir Ahmad and Prof. M.M. Sufyan Beg",
    title:
      "INTERCOMMUNICATION AMONGST VARIOUS INFORMATION SYSTEMS APPLYING FUZZY ROUGH SETS",
    year: 2019,
  },
  {
    name: "Mr. Adeel Shiraz",
    supervisor: "Dr. Tanvir Ahmad",
    title: "Big Data Mining through various tools and Techniques",
    year: 2019,
  },
  {
    name: "Mrs. Chandni Saxena",
    supervisor: "Prof. M.N. Doja and Dr. Tanvir Ahmad",
    title: "A Data Mining Framework for Ranking of Nodes in Complex Networks",
    year: 2019,
  },
  {
    name: "Mr. Samar Wazir",
    supervisor: "Dr. Tanvir Ahmad and Prof. M.M. Sufyan Beg",
    title:
      "Performance Analysis, Improvement and Optimization of Techniques used by Association Rule Mining",
    year: 2020,
  },
  {
    name: "Mr. Om Pal",
    supervisor: "Dr. Bashir Alam",
    title:
      "Study of Cryptographic Key Management in Perspective of Cyber Security",
    year: 2019,
  },
  {
    name: "Mrs. Gunjan Ansari",
    supervisor: "Dr. Tanvir Ahmad and Prof. M.N. Doja",
    title:
      "Improvised Sentiment Analysis and spam detection using various learning algorithms",
    year: 2020,
  },
  {
    name: "Ms. Nazia Tabassum",
    supervisor: "Dr. Tanvir Ahmad",
    title: "Iterative Framework for Reciprocal Recommendation Systems",
    year: 2020,
  },
  {
    name: "Mr. Sarfaraz Masood",
    supervisor: "Prof. M.N. Doja",
    title: "Training Schemes for Neural Network",
    year: 2020,
  },
  {
    name: "Mr. Arvinda Kushwaha",
    supervisor: "Dr. Mohd. Amjad",
    title: "QoS issues for wireless sensor Networks in Cloud Environment",
    year: 2020,
  },
  {
    name: "Mr. Mumtaz Ahmed",
    supervisor: "Prof. M.N. Doja and Dr. Mohd. Amjad",
    title:
      "Energy Efficient Spectrum Access Scheme in Wireless Sensor Networks",
    year: 2021,
  },
  {
    name: "Mrs. Amreen Ahmad",
    supervisor: "Dr. Tanvir Ahmad",
    title: "Trust Network based recommendation system",
    year: 2020,
  },
  {
    name: "Mr. Musheer Ahmad",
    supervisor: "Prof. M.N. Doja and Prof. M.M. Sufyan Beg",
    title:
      "Design and Security Evaluation of Chaos-Based Cryptographic Algorithms",
    year: 2020,
  },
  {
    name: "Mr. Vinay Thakur",
    supervisor: "Prof. M.N. Doja",
    title:
      "Designing of Uniform Model for Multipurpose Cadastral System in India",
    year: 2020,
  },
  {
    name: "Mr. Sunil",
    supervisor: "Prof. M.N. Doja",
    title: "Web Mining on Asynchronous E-learning",
    year: 2020,
  },
  {
    name: "Mr. Prashant Giridhar Shambharkar",
    supervisor: "Prof. M.N. Doja",
    title:
      "Automatic Classification of Movie Trailers using Data Mining Techniques",
    year: 2021,
  },
  {
    name: "Mr. Rafeeq Ahmed",
    supervisor: "Dr. Tanvir Ahmad",
    title: "Text Mining using Big Data Analytics - A Fuzzy Approach",
    year: 2021,
  },
  {
    name: "Mr. Shahzad Alam",
    supervisor: "Dr. Tanvir Ahmad and Prof. M.N. Doja",
    title: "Investigation of various information hiding techniques",
    year: 2021,
  },
  {
    name: "Mr. Chanchal Kumar",
    supervisor: "Prof. M.N. Doja",
    title: "Secure Portfolio Optimization Using Soft Computing Techniques",
    year: 2021,
  },
  {
    name: "Mr. Wakar Ahmad",
    supervisor: "Dr. Bashir Alam",
    title: "Scheduling in Cloud for Big Data",
    year: 2021,
  },
];

const PhdScholars = [images, PhdScholarsongoing, PhdScholarsawarded];
export default PhdScholars;
