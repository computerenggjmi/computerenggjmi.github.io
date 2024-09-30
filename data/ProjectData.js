const image =
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// ******************************MAJOR PROJECTS********************************
const MA11 = [
  {
    name: ["Aman Singh"],
    rollNo: ["11CSS08"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Automatic Classification of Cricket Shots",
  },
  {
    name: ["Afsha Shah , ", "Noreen Anwar , ", "Shreyansh Jain"],
    rollNo: ["11CSS04 , ", "11CSS45 , ", "11CSS59"],
    supervisor: "Mr. Shahzad Alam",
    title: "ACO based Image Edge Detection Steganography",
  },
  {
    name: ["Chaudhary Shahid , ", "HusainMohammad , ", "Toseef Mahmood"],
    rollNo: ["11CSS14 , ", "11CSS34"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Truth Discovery with Multiple Conflicting Information                                                        Providers on the web",
  },
  {
    name: ["Zeba Naseem , ", "Zohra Bano"],
    rollNo: ["11CSS72 , ", "11CSS73"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Composition Method based Chaotic S-Box Design",
  },
  {
    name: ["Obedullah , ", "Shivanshu Singh"],
    rollNo: ["11CSS46 , ", "11CSS58"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Fuzzy Logic based Meta Search Engine",
  },
  {
    name: ["Jatin Aggarwal , ", "Soyef"],
    rollNo: ["11CSS24 , ", "11CSS63"],
    supervisor: "Dr. Bashir Alam",
    title: "Dynamic Sharing of GPU in Cloud System",
  },
  {
    name: ["Madhav Mehta , ", "Namrata"],
    rollNo: ["11CSS27 , ", "11CSS42"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Speech Recognition in Hindi",
  },
  {
    name: ["Shadab Khan , ", "Shubham Gupta"],
    rollNo: ["11CSS55 , ", "11CSS60"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Musical Instrument Identification",
  },
  {
    name: ["Deepanshu Bhatia , ", "Yusuf Hassan"],
    rollNo: ["11CSS15 , ", "11CSS70"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Improving CSO performance using Chaotic Maps",
  },
  {
    name: ["Nalin Sharma , ", "Suraj Tripathi"],
    rollNo: ["11CSS41 , ", "11CSS64"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Question answering system using Natural Language Processing",
  },
  {
    name: ["Izhar Ahmed , ", "Raghib Faisal , ", "Shubham Khulbe"],
    rollNo: ["11CSS23 , ", "11CSS50 , ", "11CSS61"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Seizure prediction in intracranial EEG recordings",
  },
  {
    name: ["Dheeraj Dang , ", "Jitin Tanwar"],
    rollNo: ["11CSS16 , ", "11CSS25"],
    supervisor: "Mr. Jawahar Lal",
    title: "Click-Through-Rate prediction of Ads in Mobiles",
  },
  {
    name: ["Karuna Rai , ", "Shaivi Kochar"],
    rollNo: ["11CSS26 , ", "11CSS56"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Cause-Effect pairs Sequential Pattern Mining",
  },
  {
    name: ["Hatim Tai , ", "Md. Zulkarnain , ", "Oves Khan"],
    rollNo: ["11CSS21 , ", "11CSS31 , ", "11CSS47"],
    supervisor: "Dr. Tanvir Ahmad",
    title:
      "Application of Text-Mining to Build Recommendation system for                                                        Hotels",
  },
  {
    name: ["Astha Tiwar , ", "iSiddharth Verma"],
    rollNo: ["11CSS12 , ", "11CSS62"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Solving Travelling Salesperson problem using Distributed Computing",
  },
  {
    name: ["Eram Farooqui , ", "Gulshana Chaudhary"],
    rollNo: ["11CSS18 , ", "11CSS19"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Using data mining and neural networks for forecasting stock  market trends",
  },
  {
    name: ["Andleeb , ", "Zehra Zaidi , ", "Prerna Agarwal"],
    rollNo: ["11CSS09 , ", "11CSS49"],
    supervisor: "Prof. M. N. Doja",
    title:
      "Identification and Ranking of key persons in a social networking website using Big Data Analytics",
  },
  {
    name: ["Asgher ImamS , ", "Shahzawaz Ahmad"],
    rollNo: ["11CSS11 , ", "11CSS53"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title:
      "Design & Implementation of web based search engine for category specific search result",
  },
  {
    name: ["Mohd. Sufiyan , ", "Zaki Hasan Mehdi"],
    rollNo: ["11CSS39 , ", "11CSS71"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Facial Recognition using Eigen Faces",
  },
  {
    name: ["Md. Danish Khan , ", "Md. Salik R. Khan , ", "Mohd. Danish Ansari"],
    rollNo: ["11CSS28 , ", "11CSS30 , ", "11CSS37"],
    supervisor: "Dr. Bashir Alam",
    title: "Performance Evaluation of Shortest path algorithm on GPU",
  },
  {
    name: ["Nikhil Dargan , ", "Utsav Jain"],
    rollNo: ["11CSS44 , ", "11CSS67"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Digital Watermarking based on Neural Networks",
  },
  {
    name: ["Nausheen Usmani , ", "Rukhsar Shakir"],
    rollNo: ["11CSS43 , ", "11CSS52"],
    supervisor: "Mr. Shahzad Alam",
    title: "Chaos based Zero- Steganography Method",
  },
  {
    name: ["Prakriti Marwaha , ", "Rashi Batra"],
    rollNo: ["11CSS48 , ", "11CSS51"],
    supervisor: "Dr. Tanvir Ahmad",
    title: "Satellite Image Classification using Fuzzy Logic",
  },
  {
    name: ["Mohd. Abdullah Hammad , ", "Mohd. Amir Amhad"],
    rollNo: ["11CSS32 , ", "11CSS35"],
    supervisor: "Dr. Tanvir Ahmad",
    title: "Symmetric Synchronous Stream Encryption using Images",
  },
  {
    name: ["Moonis Javed , ", "Vishakha Singh"],
    rollNo: ["11CSS40 , ", "11CSS69"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Optical Character Recognition for Hindi Language",
  },
  {
    name: ["Harshvardhan Singh , ", "Mohd. Ashraf Khan"],
    rollNo: ["11CSS20 , ", "11CSS36"],
    supervisor: "Mr. Jawahar Lal",
    title: "Sentiment Analysis for Hindi Language",
  },
  {
    name: ["Aadam Saleem , ", "Mohammad Shadab"],
    rollNo: ["11CSS01 , ", "11CSS38"],
    supervisor: "Prof. M. N. Doja",
    title: "Hand Gesture controlled Android game using LEAPTHMotion",
  },
  {
    name: ["Ekamber Chadda , ", "Shamim Biswas"],
    rollNo: ["11CSS17 , ", "11CSS57"],
    supervisor: "Mr. Faiyaz Ahmad",
    title:
      "Sentiment Analysis of Natural Language with Vector Word Representation and Deep Learning",
  },
  {
    name: ["Ankur Saldhi , ", "Mohammad Amir Jamil"],
    rollNo: ["11CSS10 , ", "11CSS33"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "Image Steganography using Genetic Algorithm and Visula Cryptography for Secure Data Hiding and Transmission                                                        over Network",
  },
  {
    name: ["Akif Khan Yusufzai , ", "Umar Ahmad , ", "Vipul Nayyar"],
    rollNo: ["11CSS07 , ", "11CSS66 , ", "11CSS68"],
    supervisor: "Dr. Bashir Alam",
    title:
      "Building and Optimizing Applications using High Performance Computing",
  },
  {
    name: ["Batool Naseem , ", "Hena Parween"],
    rollNo: ["11CSS13 , ", "11CSS22"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Combination of Cryptography and Steganography for secure communication in video file",
  },
  {
    name: ["Md. Safiyat Reza , ", "Surbhi Agarwal"],
    rollNo: ["11CSS29 , ", "11CSS65"],
    supervisor: "Mr. Musheer Ahmad",
    title: "CAT Swarm Optimization based S-Box Design",
  },
];
const MA12 = [
  {
    name: ["Abdul Karim , ", "Abhishek Joshi"],
    rollNo: ["12CSS01 , ", "12CSS04"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "Chaotic Steganography based on Edge Detection using Artificial Neural Network",
  },
  {
    name: ["Abdul Wajid Nasar , ", "Suhani Gupta"],
    rollNo: ["12CSS02 , ", "12CSS67"],
    supervisor: "Mr. Danish Raza Rizvi",
    title:
      "Ethnicity Identification of Humans Based on Facial Features using Skin Color Model",
  },
  {
    name: ["Ahsan Kamal , ", "Md. Mehrab Alam"],
    rollNo: ["12CSS07 , ", "12CSS30"],
    supervisor: "Prof. M. N. Doja",
    title:
      "Footwear image classification and visually similar recommendation using Deep Nets",
  },
  {
    name: ["Ameen Mohammad Khan , ", "Sharan Aggarwal"],
    rollNo: ["12CSS11 , ", "12CSS62"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Prediction of File-Level logical Interdependency by Mining Git Commit History",
  },
  {
    name: ["Aman Arora , ", "Nikhil Mittal"],
    rollNo: ["12CSS10 , ", "12CSS43"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Chaotically initialized bacterial foraging optimization",
  },
  {
    name: ["Abhishek Bhatnagar , ", "Sarthak Jain"],
    rollNo: ["12CSS03 , ", "12CSS58"],
    supervisor: "Mr. Zeeshan Ansari",
    title: "Artificial Bees Colony Optimization based S-Box Design",
  },
  {
    name: ["Harshvardhan Vashishtha , ", "Mehtab Khan"],
    rollNo: ["12CSS24 , ", "12CSS27"],
    supervisor: "Mr. Zeeshan Ansari",
    title:
      "Cryptographic Substitution Box Design using Affine-power-affine Transformation",
  },
  {
    name: ["Akshat Jindal , ", "Mohd. Raghib Khan , ", "Rubab Alam"],
    rollNo: ["12CSS08 , ", "12CSS35 , ", "12CSS48"],
    supervisor: "Mr. Shahzad Alam",
    title: "Message hiding using Edge Detection Technique",
  },
  {
    name: ["Antriksh Agarwal , ", "Sapna"],
    rollNo: ["12CSS12 , ", "12CSS55"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Automatic Attendance monitoring system in classroom & laboratory",
  },
  {
    name: ["Aditya Kumar , ", "Prerit Garg"],
    rollNo: ["12CSS05 , ", "12CSS44"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "User Authentication using keystroke dynamics",
  },
  {
    name: ["Anzal Zia Khan , ", "Mohd Umar Hasan"],
    rollNo: ["12CSS13 , ", "12CSS38"],
    supervisor: "Dr. Bashir Alam",
    title: "Automatic text summarization",
  },
  {
    name: ["Mohd. Rezwan , ", "Md. Raghib Ahsan"],
    rollNo: ["12CSS36 , ", "12CSS40"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Content based video classification system",
  },
  {
    name: ["Sana Noor , ", "Sultana Mumtaz Begum"],
    rollNo: ["12CSS54 , ", "12CSS68"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "A Novel algorithm for color image steganography using a new intelligent technique based on seven layers of security",
  },
  {
    name: ["Ghalib Saleem , ", "Naeem Ahmad , ", "Anghat Babu"],
    rollNo: ["12CSS22 , ", "12CSS41 , ", "10CSS11"],
    supervisor: "Mr. Musheer Ahmad",
    title:
      "Predicting the Mackey Glass chaotic time series using genetic algorithm",
  },
  {
    name: ["Rehan Raza , ", "Siddharth Sukhija"],
    rollNo: ["12CSS47 , ", "12CSS66"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Gesture recognition & processing system",
  },
  {
    name: ["Tushar Raheja , ", "Zishan Ahmad"],
    rollNo: ["12CSS90 , ", "12CSS90"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Camera pose estimation & object integration using parallel tracking & mapping",
  },
  {
    name: ["Mohd Irfan Ansari , ", "Saifur Rahman"],
    rollNo: ["12CSS34 , ", "12CSS52"],
    supervisor: "Dr. Bashir Alam",
    title: "Detecting emotion in human speech",
  },
  {
    name: ["Shuriti Khurana , ", "Sushmita Singh"],
    rollNo: ["12CSS65 , ", "12CSS70"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Music recommendation system based on deep content analysis",
  },
  {
    name: ["Jeevan Singh Nayal , ", "Ravi Kumar Jain"],
    rollNo: ["12CSS25 , ", "12CSS46"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Emotion identification in songs using musical audio features",
  },
  {
    name: ["Sahil Wadhwa , ", "Syed Ashar Javed"],
    rollNo: ["12CSS50 , ", "12CSS71"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Event classification in complex videos using convolutional neural networks",
  },
  {
    name: ["Sarah Khan , ", "Zeya Umayya"],
    rollNo: ["12CSS56 , ", "12CSS73"],
    supervisor: "Mr. Faiyaz Ahmad",
    title:
      "Image encryption using hybrid particle swarm optimization and chaotic function model",
  },
  {
    name: ["Bushra Khan , ", "Maria Khan"],
    rollNo: ["12CSS18 , ", "12CSS29"],
    supervisor: "Prof. M. N. Doja",
    title: "Contents based Image Retrieval",
  },
  {
    name: ["Aly Akhtar , ", "Chaitanya Gupta"],
    rollNo: ["12CSS09 , ", "12CSS19"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Predicting air pollution level in a specific city",
  },
  {
    name: ["Mohammad Shahjahan , ", "Shoyab Khan"],
    rollNo: ["12CSS33 , ", "12CSS64"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Voice conversion system",
  },
  {
    name: ["Saif Ahmad Khan , ", "Sajjad Waseem"],
    rollNo: ["12CSS51 , ", "12CSS53"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Image based attendance system",
  },
  {
    name: ["Manish Malik , ", "Shadab Zafar"],
    rollNo: ["12CSS28 , ", "12CSS59"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Security analysis of cryptographic Hash function",
  },
  {
    name: ["Mohib Yousuf , ", "Shafiya Naaz"],
    rollNo: ["12CSS39 , ", "12CSS60"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Implementation & analysis of visual cryptography",
  },
  {
    name: ["Nikhil K Raman , ", "Rahul Mehra"],
    rollNo: ["12CSS42 , ", "12CSS45"],
    supervisor: "Mr. Jawahar Lal",
    title: "Face recognition theft detector and alerter",
  },
  {
    name: ["Asif Ahmad Khan , ", "Athul Biju , ", "Mohd Shoib Khan"],
    rollNo: ["12CSS14 , ", "12CSS15 , ", "12CSS37"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Automatic prediction of facial attractiveness in humans",
  },
  {
    name: [
      "Habib Mohammad Khan , ",
      "Md. Shahbaz Ahmad , ",
      "Mohammad Farhan Khan",
    ],
    rollNo: ["12CSS23 , ", "12CSS31 , ", "12CSS32"],
    supervisor: "Mr. Shamim Ahmad",
    title:
      "Application of text mining to build a recommendation system for dishes",
  },
  {
    name: ["Md. Mayar Alam , ", "Sunny Sarvottam"],
    rollNo: ["12CSS27 , ", "12CSS69"],
    supervisor: "Mr. Jawahar Lal",
    title: "Feature extraction for the analysis of gait and human motion",
  },
  {
    name: ["Avishkar Gupta , ", "Dhawal Arora"],
    rollNo: ["12CSS16 , ", "12CSS20"],
    supervisor: "Prof. M. N. Doja",
    title: "Unsupervised deep learning for multi-document summarization",
  },
  {
    name: ["Sachin Sharma , ", "Shivam Rana"],
    rollNo: ["12CSS49 , ", "12CSS63"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Domain specific Author ranking system",
  },
  {
    name: ["Farheen Nilofer , ", "Sarah Masud"],
    rollNo: ["12CSS21 , ", "12CSS57"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Fuzzy Taxonomy Extraction for Big Data",
  },
  {
    name: ["Kokab Tasleem"],
    rollNo: ["12CSS26"],
    supervisor: "Dr. Bashir Alam",
    title: "Extracting relevant tags from Text documents",
  },
];
const MA13 = [
  {
    name: ["Sonaal Dua , ", "Gaurav Sharma"],
    rollNo: ["13BSS0073 , ", "13BSS0025"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Smart infrastructure control and automation systems(SICAS)",
  },
  {
    name: ["Shikha Kaushik , ", "Anamta Khan"],
    rollNo: ["13BSS0066 , ", "13BSS0013"],
    supervisor: "Mr. Danish R. Rizvi",
    title:
      "Autonomous four phase intersection traffic lights with optimum green ratios.",
  },
  {
    name: ["Fatima Munawwar , ", "Umer Ahsan"],
    rollNo: ["13BSS0023 , ", "13BSS0069"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Image caption generation using Deep Neural Network",
  },
  {
    name: ["Osama Khan , ", "Satyam Sinha , ", "Wajahat Ansari"],
    rollNo: ["13BSS0090 , ", "13BSS0062 , ", "13BSS0071"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Autonomous Car using evolving neural network",
  },
  {
    name: ["Mohammad Asif , ", "Mohd. Asad , ", "Basit Ali"],
    rollNo: ["13BSS0040 , ", "13BSS0048 , ", "13BSS0020"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Twitter sentiment classification using Distant supervision",
  },
  {
    name: ["Rabia Abdul Jabbar , ", "Saniya Suhail"],
    rollNo: ["13BSS0055 , ", "13BSS0061"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Edge detection using Krawtchouk Polynomials",
  },
  {
    name: ["Harish Chandra Thuwal , ", "Adhyan Srivastava"],
    rollNo: ["13BSS0027 , ", "13BSS0007"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Real time sign language gesture recognition from video sequences",
  },
  {
    name: ["Mohd. Shoeb , ", "Ajay Goyal"],
    rollNo: ["13BSS0051 , ", "13BSS0010"],
    supervisor: "Mr. Jawahar Lal",
    title:
      "Sentiment Analysis on restaurant reviews using Natural language processing",
  },
  {
    name: ["Saba Khan , ", "M. Munirud Doja"],
    rollNo: ["13BSS0057 , ", "13BSS0042"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Analysis of Road Accidents using data mining",
  },
  {
    name: ["Aakash Gaur , ", "Mohd. Yaseen"],
    rollNo: ["13BSS0001 , ", "13BSS0046"],
    supervisor: "Mr. Hannan Mansoor",
    title:
      "Voice based navigation system for blind people using ultrasonic sensor",
  },
  {
    name: ["Mayank Shekhar , ", "Sumit Kumar Jha"],
    rollNo: ["13BSS0033 , ", "13BSS0067"],
    supervisor: "Mr. Musheer Ahmad",
    title:
      "An optical character recognition based android application for business card scanner",
  },
  {
    name: ["Sahil , ", "Salamuddin"],
    rollNo: ["13BSS0058 , ", "13BSS0059"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Face expression recognition",
  },
  {
    name: ["Minnat Khan , ", "Gulnawaz Akram"],
    rollNo: ["13BSS0038 , ", "13BSS0026"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Automated Text categorization system using Open directory project",
  },
  {
    name: ["Maseera Ali , ", "Aditi Mishra , ", "Ahmad Zia Zafari"],
    rollNo: ["13BSS0032 , ", "13BSS0008 , ", "12CSS06"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Cryptographic Hash Function Design using Generalized Chaotic Map",
  },
  {
    name: ["Jawed Ahmad , ", "Mohd. Asad Hussain"],
    rollNo: ["13BSS0030 , ", "13BSS0039"],
    supervisor: "Dr. Bashir Alam",
    title: "Finding interesting patterns from uncertain Big data",
  },
  {
    name: ["Abdul Rauf , ", "Abdullah Hasan"],
    rollNo: ["13BSS0003 , ", "13BSS0004"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Implementation of various AI techniques to solve pacman game",
  },
  {
    name: ["Md. Shariq Shahab , ", "Md. Tabish R. Khan , ", "Nasruddin Ali"],
    rollNo: ["13BSS0035 , ", "13BSS0036 , ", "13BSS0053"],
    supervisor: "Dr. Bashir Alam",
    title: "Detect disease from Chest X-ray and annotate its context",
  },
  {
    name: ["Abdullah Wasim"],
    rollNo: ["11CSS03"],
    supervisor: "Mr. Jawahar Lal",
    title: "Spam text detection",
  },
  {
    name: ["Amit Jindal , ", "Mohd. Faizan"],
    rollNo: ["13BSS0012 , ", "13BSS0050"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Detection of acute leukemia using white blood cells segmentation based on blood samples",
  },
  {
    name: ["Mohd. Saddam Hussain , ", "Mohd. Asrar Ahmad"],
    rollNo: ["13BSS0043 , ", "13BSS0049"],
    supervisor: "Mr. Shamim Ahmad",
    title: "A new approach to hide text in image using steganography",
  },
  {
    name: ["Asjad Khan , ", "Mohd. Shahrukh , ", "Mohd. Yusuf Ali"],
    rollNo: ["13BSS0041 , ", "13BSS0044 , ", "13BSS0045"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Emotion recognition from speech using support vector machine",
  },
  {
    name: ["Adeela Izhar , ", "Shazli Khanam"],
    rollNo: ["13BSS0006 , ", "13BSS0065"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "A novel bacterial foraging technique for optimization of edge detection in images",
  },
  {
    name: ["Atul Kunwar , ", "Azhan Alam"],
    rollNo: ["13BSS0017 , ", "12CSS17"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Aging face recognition",
  },
  {
    name: ["Himanshu Sundriyal , ", "Tarun Luthra"],
    rollNo: ["13BSS0028 , ", "13BSS0068"],
    supervisor: "Dr. r Alam",
    title: "Game theoretic model for soul Network Analysis",
  },
  {
    name: ["Md. Insan Ahsan , ", "Md. Mahtab Alam"],
    rollNo: ["13BSS0034 , ", "13BSS0075"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Brain tumor detection algorithm using watershed & thresholding based segmentation",
  },
  {
    name: ["Ayush Jain , ", "Ayush Chauhan , ", "Pulkit Gupta"],
    rollNo: ["13BSS0019 , ", "13BSS0018 , ", "13BSS0054"],
    supervisor: "Dr. Mohd. Amjad",
    title: "AI lane detection and vehicle tracking using computer vision",
  },
  {
    name: ["Darsh Gupta , ", "Deepak Sharma , ", "Varun Bansal"],
    rollNo: ["13BSS0021 , ", "13BSS0022 , ", "13BSS0074"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Evaluating sentiment for user posted online reviews and opinions",
  },
  {
    name: ["Abhinav Rai , ", "Ashhar Hasan"],
    rollNo: ["13BSS0005 , ", "13BSS0015"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Deep learning based motor control unit",
  },
  {
    name: ["Amir Khan , ", "Anas Ahmad Qazi"],
    rollNo: ["13BSS0011 , ", "13BSS0014"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Language identification of transliterated text using N-Gram",
  },
  {
    name: ["Sharmin Khan , ", "Irum"],
    rollNo: ["13BSS0064 , ", "13BSS0029"],
    supervisor: "Prof. M. N. Doja",
    title:
      "Neighborhood topology to discover influential nodes in a complex network",
  },
  {
    name: ["Ahmad Sarosh Waseem , ", "Shafquat Bakhtiyar"],
    rollNo: ["13BSS0009 , ", "13BSS0063"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "Ant colony optimization based on Image edge detection steganography",
  },
  {
    name: ["Aakash Aggarwal , ", "Krishan Chopra"],
    rollNo: ["13BSS0002 , ", "13BSS0031"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Air pollution forecasting system using statistical model",
  },
  {
    name: ["Mohd. Arshad , ", "Shamshad Alam"],
    rollNo: ["13BSS0047 , ", "12CSS61"],
    supervisor: "Mr. Jawahar Lal",
    title: "Secure student information system",
  },
  {
    name: ["Mohit Singh Kharab , ", "Vaibhav Bindal"],
    rollNo: ["13BSS0052 , ", "13BSS0070"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Network Packet Analyzer",
  },
];
const MA14 = [
  {
    name: ["Ajitesh Kumar Rai , ", "Lakshita Bhatia"],
    rollNo: ["14BCS0051 , ", "14BCS0056"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Real time vehicle register of gated community",
  },
  {
    name: ["Aisha Aijaz"],
    rollNo: ["14BCS0024"],
    supervisor: "Mr. Sarfaraz Masood",
    title:
      "Automatic sleep stage scoring from single channel ECG using boosted tree",
  },
  {
    name: ["Dhruv Malik , ", "Gaurav Arora , ", "Mohd. Usman Alvi"],
    rollNo: ["14BCS0026 , ", "14BCS0028 , ", "14BCS0030"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Cancer detection using machine learning",
  },
  {
    name: ["Saif Rehman Nasir , ", "Anish Sharma , ", "Rahul Tuteja"],
    rollNo: ["14BCS0007 , ", "14BCS0039 , ", "14BCS0045"],
    supervisor: "Dr. Mohd. Zeeshan Ansari",
    title:
      "Comparative analysis of different algorithms for identification of transliterated language",
  },
  {
    name: ["Mohd. Wajid Zaman"],
    rollNo: ["14BCS0033"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Deep Learning based approaches for detection of toxicity in Online comments",
  },
  {
    name: ["Suhail Khan , ", "Mohd. Suhail , ", "Zafarullah Mahmood"],
    rollNo: ["14BCS0018 , ", "14BCS0032 , ", "14BCS0049"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Learning document vectors using attentional convolutional neural networks",
  },
  {
    name: ["Mohd. Sadiq , ", "Mubashshir Khan , ", "Murtaza Hasan"],
    rollNo: ["14BCS0060 , ", "14BCS0062 , ", "14BCS0063"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Playing TETRIS with genetic algorithms",
  },
  {
    name: ["Najeeb Khan , ", "Zaki Mustafa Farooqi"],
    rollNo: ["14BCS00 , ", "14BCS00"],
    supervisor: "Prof. M. N. Doja",
    title: "Unsupervised coarse object detection using domain adaptation",
  },
  {
    name: ["Gaurav Suri , ", "Sanjay Kumar , ", "Syed Faheel Ahmad"],
    rollNo: ["14BCS0040 , ", "14BCS0046 , ", "14BCS0067"],
    supervisor: "Mr. Danish Raza Rizvi",
    title:
      "A programming language with minimal syntax that can understand natural language.",
  },
  {
    name: ["Anas Akhtar , ", "Akshay Sharma"],
    rollNo: ["14BCS0025 , ", "14BCS0038"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Automatic CV ranking and selection mechanism",
  },
  {
    name: ["Abhishek Bhatt , ", "Harsh Vijay , ", "Rohit Kumar Wasan"],
    rollNo: ["14BCS0023 , ", "14BCS0053 , ", "14BCS0065"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Computer vision based smart switching network",
  },
  {
    name: ["Kashan U Z Khan , ", "Mohammad Huzaifa , ", "Subia Ansari"],
    rollNo: ["14BCS0014 , ", "14BCS0031 , ", "14BCS0047"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Video frame interpolation and extrapolation using deep learning",
  },
  {
    name: ["Aquib Jawed , ", "Afzal Ahmad"],
    rollNo: ["14BCS0011 , ", "14BCS0037"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Multiple watermarking scheme based on improved chaotic",
  },
  {
    name: ["Azfar Sikander Zaidi"],
    rollNo: ["14BCS0052"],
    supervisor: "Mr. Faiyaz Ahmad",
    title:
      "Stock market analysis and prediction using supervised learning techniques",
  },
  {
    name: ["Farah Naz , ", "Purnima Garg"],
    rollNo: ["14BCS0027 , ", "14BCS0034"],
    supervisor: "Dr. Bashir Alam",
    title: "Calories estimation from food images",
  },
  {
    name: ["Saquib Ali Khan , ", "Yasir Bashir Mir"],
    rollNo: ["14BCS00 , ", "14BCS00"],
    supervisor: "Dr. Bashir Alam",
    title: "Multi frame video super resolution",
  },
  {
    name: ["Abdullah , ", "Mohd. Faizan Shahid , ", "Arpit Singh"],
    rollNo: ["14BCS0001 , ", "14BCS0004 , ", "14BCS0012"],
    supervisor: "Mr. Jawahar Lal",
    title: "Multilingual sentiment analysis",
  },
  {
    name: ["Rishabh Jain , ", "Saurabh Purohit , ", "Shikhar Chaudhary"],
    rollNo: ["14BCS00 , ", "14BCS00 , ", "14BCS00"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Chord detection & optical music recognition",
  },
  {
    name: ["Shabnam Khatoon , ", "Iram Ayyub"],
    rollNo: ["14BCS0009 , ", "14BCS0054"],
    supervisor: "Mr. Me. Shahzad Alam",
    title: "Music recommendation system",
  },
  {
    name: ["Sahiba Khan , ", "Alima Siddiqui"],
    rollNo: ["14BCS0006 , ", "14BCS0010"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Recognizing Human sentiments from videos",
  },
  {
    name: ["Khalid Hasan Rahmani , ", "Mohd. Ariz Ansari"],
    rollNo: ["14BCS0055 , ", "14BCS0059"],
    supervisor: "Mr. Jawahar Lal",
    title: "Automatic highlighter of lengthy legal documents",
  },
  {
    name: ["Aviral Mudgal"],
    rollNo: ["14BCS0013"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Document similarity using feed forward neural networks",
  },
  {
    name: ["Abhishek Barnwal"],
    rollNo: ["14BCS0022"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Simulating an Autonomous Car",
  },
  {
    name: ["Mohd. Saqib , ", "Lokesh Kumar , ", "Shabahat Jawed"],
    rollNo: ["14BCS0042 , ", "14BCS0057 , ", "14BCS0066"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Natural language identification using Deep learning",
  },
  {
    name: ["Md. Amir Naseem , ", "Mohd. Zeeshan Siddiqui"],
    rollNo: ["14BCS0058 , ", "14BCS0061"],
    supervisor: "Mr. Shahzad Alam",
    title: "Predicting speech by reading lips using deep learning",
  },
  {
    name: ["Tafseer Ahmad , ", "Abdul Mohsin Siddiqui , ", "Mohd. Zaiyan Alam"],
    rollNo: ["14BCS0019 , ", "14BCS0036 , ", "14BCS0041"],
    supervisor: "Mr. Faiyaz Ahmad",
    title:
      "Autonomous navigation of a quadcopter UAV in an unknown environment in real time using RL and computer vision",
  },
  {
    name: ["Shubham Garg , ", "Vaibhav Singhal , ", "Saurabh Sharma"],
    rollNo: ["14BCS0017 , ", "14BCS0020 , ", "14BCS0035"],
    supervisor: "Mr. Musheer Ahmad",
    title:
      "Designing pseudo random number generator based on discrete chaotic map",
  },
  {
    name: ["Kunal Kaushik"],
    rollNo: ["14BCS0003"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Stance detection in news articles",
  },
  {
    name: ["Joy Mukharjee"],
    rollNo: ["14BCS0002"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Automatic traffic light control system by using measuring traffic density using computer vision",
  },
];
const MA15 = [
  {
    name: ["Razi Ahmad , ", "Saliq Saifi"],
    rollNo: ["15BCS0025 , ", "15BCS0027"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Generation of S-Box using NSGA - II",
  },
  {
    name: ["Razi Ahmad , ", "Saliq Saifi"],
    rollNo: ["15BCS0025 , ", "15BCS0027"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Generation of S-Box using NSGA - II",
  },
  {
    name: ["S.M. Mehdi Rizvi , ", "Tamsil Amani , ", "Aman Hamid"],
    rollNo: ["15BCS0029 , ", "15BCS0031 , ", "15BCS0034"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Language detection in a Hindi and English code mixed text",
  },
  {
    name: ["Mohd. Tarik , ", "Md. Sohail"],
    rollNo: ["15BCS0036 , ", "15BCS0059"],
    supervisor: "Mr. Shahzad Alam",
    title: "Scene classification using CNN",
  },
  {
    name: ["Rizwan Saifi"],
    rollNo: ["15BCS00"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Vehicle detection and tracking using machine learning and HOG",
  },
  {
    name: ["Mohammad Muzammil , ", "Nadi Habib Ur Rahman"],
    rollNo: ["15BCS0058 , ", "15BCS0061"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Topic modeling & summarization of Text documents",
  },
  {
    name: ["Dhawal Mehta , ", "Utkarsh Garg"],
    rollNo: ["15BCS0053 , ", "15BCS0066"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Recommendation system for Books",
  },
  {
    name: ["Himanshu Mehra , ", "Karan Pratap Singh , ", "Mohd. Bilal Aziz"],
    rollNo: ["15BCS0020 , ", "15BCS0021 , ", "15BCS0024"],
    supervisor: "Mr. Waseem Ahmad",
    title: "Analysis of Political sentiments on Twitter using Deep learning",
  },
  {
    name: ["Aiyan Hamid , ", "Danish Iqbal , ", "Zeeshan Ahmad Khan"],
    rollNo: ["15BCS0005 , ", "15BCS0009 , ", "15BCS0017"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Video frame interpolation using generative adversarial networks",
  },
  {
    name: ["Sadia Shafaque , ", "Kaynat Hasan"],
    rollNo: ["15BCS0026 , ", "15BCS0041"],
    supervisor: "Mr. Jawahar Lal",
    title: "Human activity recognition using machine learning algorithms",
  },
  {
    name: ["Farhan Ul Haque , ", "Himanshu Rathore"],
    rollNo: ["15BCS0022 , ", "15BCS0054"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Content based Indian NER from Wikipedia",
  },
  {
    name: ["Sharik Khan , ", "Osama Khan , ", "Prabhat Kumar More"],
    rollNo: ["15BCS0065 , ", "15BCS0071 , ", "15BCS0072"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Movie recommendation system",
  },
  {
    name: ["Adeel Masood , ", "Palak Khandelwal , ", "Shazia Khan"],
    rollNo: ["15BCS0018 , ", "15BCS0037 , ", "15BCS0074"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Drug aspect sentiment analysis",
  },
  {
    name: ["Abhay Charan , ", "Ankit Kumar , ", "Shafa at Hussain"],
    rollNo: ["15BCS0001 , ", "15BCS0006 , ", "15BCS0050"],
    supervisor: "Dr. Bashir Alam",
    title: "Bird species classification from audio",
  },
  {
    name: ["Ariba Siddiqui , ", "Adhitesh Chauhan , ", "Mohd. Intekhab"],
    rollNo: ["15BCS0007 , ", "15BCS0033 , ", "15BCS0060"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Gendered pronoun resolution in natural language text",
  },
  {
    name: ["Shivank Tripathi , ", "Md. Nafis Khan"],
    rollNo: ["15BCS0040 , ", "15BCS0070"],
    supervisor: "Mr. Musheer Ahmad",
    title: "A travel guide platform using machine learning techniques",
  },
  {
    name: ["Shaz Akhtar"],
    rollNo: ["15BCS0039"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Personalized medicine: Predict the effect of Genetic variants to enable personalized medicine",
  },
  {
    name: ["Ojaswini Bhudiraja , ", "Fatima Mariyam , ", "Syed Safder Ali"],
    rollNo: ["15BCS0013 , ", "15BCS0019 , ", "15BCS0030"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Smart home surveillance",
  },
  {
    name: ["Adnan Akhtar , ", "Ayesha Athar , ", "Sanchit Mishra"],
    rollNo: ["15BCS0004 , ", "15BCS0008 , ", "15BCS0015"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Hand Gesture recognition system using Neural Net",
  },
  {
    name: ["Mehtab Alam , ", "Shubham Kumar , ", "Ahrarul Haque"],
    rollNo: ["15BCS0042 , ", "15BCS0051 , ", "15BCS0077"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "General Purpose audio Tagging",
  },
  {
    name: ["Md. Musharraf , ", "Md. Hamid , ", "Rashid Aziz"],
    rollNo: ["15BCS0044 , ", "15BCS0045 , ", "15BCS0047"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Artificial Intelligence in Gaming",
  },
  {
    name: ["Mukul Kumar , ", "Vasu Kharab"],
    rollNo: ["15BCS0046 , ", "15BCS0080"],
    supervisor: "Mr. Jawahar Lal",
    title:
      "An English text to speech (TTS) conversion system integrated with chat Bot",
  },
  {
    name: ["Samreen , ", "Yashfeen"],
    rollNo: ["15BCS0028 , ", "15BCS0081"],
    supervisor: "Mr. Waseem Ahmad",
    title:
      "Heart beat classification using temporal and morphological information of ECGs",
  },
  {
    name: ["Aditya Raj Singh , ", "Shadma Salman , ", "Imran Khan"],
    rollNo: ["15BCS0003 , ", "15BCS0016 , ", "15BCS0078"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Upvote prediction using categorical embedding",
  },
  {
    name: ["Mohammad Irshad , ", "Saurabh Arora , ", "Shadab Ahmed"],
    rollNo: ["15BCS0043 , ", "15BCS0048 , ", "15BCS0049"],
    supervisor: "Mr. Jawahar Lal",
    title: "Image De-raining using deconvolution network",
  },
  {
    name: ["Abhinav Kumar , ", "Amish Gupta"],
    rollNo: ["15BCS0002 , ", "15BCS0069"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Automatic stance detection",
  },
  {
    name: ["Afsheen Azad"],
    rollNo: ["15BCS0068"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Practical portfolio assessment using soft computing techniques",
  },
  {
    name: ["Ishita Tripathi"],
    rollNo: ["15BCS0010"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Automated essay grading using neural networks",
  },
  {
    name: ["Kritika Gupta , ", "Nabeel Javed"],
    rollNo: ["15BCS0011 , ", "15BCS0012"],
    supervisor: "Mr. Sarfaraz Masood",
    title:
      "Comparison of various machine learning models for driver drowsiness detection",
  },
  {
    name: ["Rishabh Gupta , ", "Sahil Malik , ", "Shivanshu Chaudhary"],
    rollNo: ["15BCS00 , ", "15BCS00 , ", "15BCS00"],
    supervisor: "Mr. Shahzad Alam",
    title: "Augmented reality based personalized advertisements",
  },
  {
    name: ["Parth Dhama , ", "Sanchit Ahuja , ", "Mayank PArmar"],
    rollNo: ["15BCS00 , ", "15BCS00 , ", "15BCS00"],
    supervisor: "Dr. Bashir Alam",
    title: "Human tracking and facial recognition",
  },
  {
    name: ["Md. Nadeemuddin"],
    rollNo: ["15BCS0035"],
    supervisor: "Mr. Jawahar Lal",
    title: "Stock price prediction using machine learning algorithms",
  },
];
const MA16 = [
  {
    name: ["Areesha Fatima Siddiqui , ", "Mohammad Anas"],
    rollNo: ["16BCS002 , ", "16BCS006"],
    supervisor: "",
    title: "Homograph Language Identification in Multilingual Text",
  },
  {
    name: ["Anmol Malik , ", "Sayalath Souvannachack"],
    rollNo: ["16BCS022 , ", "16BCS023"],
    supervisor: "",
    title: "Generative writing style transfer using machine learning",
  },
  {
    name: ["Mohd. Khalid , ", "Wasim Akram"],
    rollNo: ["16BCS007 , ", "16BCS070"],
    supervisor: "",
    title: "Automatic examination system using NLP",
  },
  {
    name: ["Juned Raghib , ", "Shahnazar"],
    rollNo: ["16BCS029 , ", "16BCS065"],
    supervisor: "",
    title:
      "Deep Al Bot playing video games using reinforcement learning algorithm",
  },
  {
    name: ["Shabad Ahmad , ", "Pranjal Anand"],
    rollNo: ["16BCS054 , ", "16BCS055"],
    supervisor: "",
    title: "Text classification for letters characters and numbers",
  },
  {
    name: ["Tushar Goel , ", "Mohd. Saqib"],
    rollNo: ["16BCS053 , ", "16BCS060"],
    supervisor: "",
    title: "DNA computing based substitution Box design",
  },
  {
    name: ["Arif Khan , ", "Kumail Asgar Zaidi"],
    rollNo: ["16BCSO , ", "16BCSO"],
    supervisor: "",
    title: "DeepFake Detection",
  },
  {
    name: ["Sidra Tasleem , ", "Rishabh Chauhan"],
    rollNo: ["16BCS028 , ", "16BCS059"],
    supervisor: "",
    title: "Stock market forecasting using time series analysis",
  },
  {
    name: ["Faria Mabood , ", "Abdul Irshad"],
    rollNo: ["16BCS020 , ", "16BCS077"],
    supervisor: "",
    title: "Rethinking Atrous convolution for semantic image segmentation",
  },
  {
    name: ["Aditya Anand Thakur , ", "Aakash Jha"],
    rollNo: ["16BCS016 , ", "16BCS024"],
    supervisor: "",
    title: "Face recognition based attendance marking system",
  },
  {
    name: ["Umar Salman , ", "Mohd. Zeeshan Sheikh"],
    rollNo: ["16BCS038 , ", "16BCS075"],
    supervisor: "",
    title: "Plant Disease Identification",
  },
  {
    name: ["Yatin Kumar , ", "Shikhar Singhal"],
    rollNo: ["16BCS035 , ", "16BCS039"],
    supervisor: "",
    title: "Real Time sign language gesture recognition from video sequences",
  },
  {
    name: ["Marhaba Azim , ", "Roshan Kumar"],
    rollNo: ["16BCS004 , ", "16BCS058"],
    supervisor: "",
    title: "Image amelioration using deconvolutional neural networks",
  },
  {
    name: ["Tabish Iqbal , ", "Wajahat Kareem"],
    rollNo: ["16BCS052 , ", "16BCS076"],
    supervisor: "",
    title: "Business and Data understanding",
  },
  {
    name: ["Sumera Naaz , ", "Zain Ul Abedin"],
    rollNo: ["16BCS011 , ", "16BCS012"],
    supervisor: "",
    title:
      "Bidirectional Encoder representation from transformers in the field of cataclysm",
  },
  {
    name: ["Shabi Ul Hassan , ", "Rishab Vats , "],
    rollNo: ["16BCSO , ", "16BCSO"],
    supervisor: "",
    title: "Currency detector app for visually impaired",
  },
  {
    name: ["Agnik Guha , ", "Ajay Kumar Yadav"],
    rollNo: ["16BCS009 , ", "16BCS063"],
    supervisor: "",
    title: "Identifying depression on social media using sentiment analysis",
  },
  {
    name: ["Asma Ikram , ", "Azmal Hussain Aakil ,"],
    rollNo: ["16BCS003 , ", "16BCS051"],
    supervisor: "",
    title: "Vehicle recognition and compilation in database software",
  },
  {
    name: ["Zakiuddin , ", "Salman Khan"],
    rollNo: ["16BCS017 , ", "16BCS074"],
    supervisor: "",
    title: "Depth aware video frame interpolation",
  },
  {
    name: ["Ariba Praveen , ", "Shadma Siddiqui , ", "Asjad Ali Khan"],
    rollNo: ["16BCS019 , ", "16BCS021 , ", "16BCS073"],
    supervisor: "",
    title: "Fine grained named entity recognition for code mixed text",
  },
  {
    name: ["Urooj Iqbal , ", "Mohd Mohtashim"],
    rollNo: ["16BCS040 , ", "16BCS071"],
    supervisor: "",
    title: "Identifying semantically duplicate questions",
  },
  {
    name: ["Bhuvnesh Sharma , ", "Pratham Batra"],
    rollNo: ["16BCS018 , ", "16BCS045"],
    supervisor: "",
    title: "Emotion Recognition by speech signals",
  },
  {
    name: ["Asheeque C M , ", "Faraaz"],
    rollNo: ["16BCS008 , ", "16BCS049"],
    supervisor: "",
    title: "Information extraction using hindi Wikipedia articles",
  },
  {
    name: ["Yousuf Ansari , ", "Md. Ikrar Khan"],
    rollNo: ["16BCS010 , ", "16BCS040"],
    supervisor: "",
    title: "Redefining cancer treatment",
  },
  {
    name: ["Prithipal Singh Patwal , ", "Chirag Kaushik"],
    rollNo: ["16BCS042 , ", "16BCS047"],
    supervisor: "",
    title:
      "Classifying the genetic variations/ mutations based on evidence from the text based clinical literature",
  },
  {
    name: ["Manoj , ", "Khawaja Wisal Maqsood"],
    rollNo: ["16BCS026 , ", "16BCS078"],
    supervisor: "",
    title:
      "Pneumothorax detection and segmentation using differential learning rates and semantic segmentation through deep learning",
  },
  {
    name: ["Abhishek Singh , ", "Aftab Alam"],
    rollNo: ["16BCS033 , ", "16BCS034"],
    supervisor: "",
    title: "Student's Drive",
  },
  {
    name: ["Priyansh Taneja , ", "Tanmay Gupta"],
    rollNo: ["16BCS043 , ", "16BCS050"],
    supervisor: "",
    title: "Credit Card fraud detection",
  },
  {
    name: ["Manas Kumar Patel"],
    rollNo: ["16BCS055"],
    supervisor: "",
    title: "Classifications of sound using ML Algorithms",
  },
  {
    name: ["Mohd. Sadique , ", "Shah Faisal , ", "Abdul Ahad Khan"],
    rollNo: ["16BCS013 , ", "16BCS031 , ", "16BCS068"],
    supervisor: "",
    title: "Smart Door system (SW + HW)",
  },
  {
    name: ["Tabish Aleem , ", "Divyanshu Singh"],
    rollNo: ["16BCS056 , ", "16BCS064"],
    supervisor: "",
    title: "Blind's Eye",
  },
  {
    name: ["Adnan Khan , ", "Bhavya Jain"],
    rollNo: ["16BCSO , ", "16BCSO"],
    supervisor: "",
    title: "Object Detection& Depth estimation",
  },
  {
    name: ["Pulkit Pradeep Gupta , ", "Abhinav Nirwan"],
    rollNo: ["16BCS001 , ", "16BCS030"],
    supervisor: "",
    title: "oRate: rate your speech",
  },
  {
    name: ["Bilal Ahmad , ", "Md. Sajid Ashrafi"],
    rollNo: ["16BCS014 , ", "16BCS015"],
    supervisor: "",
    title: "Image caption Generator",
  },
];
const MA17 = [];
const MA18 = [
  {
    name: ["Naresh Pratap Singh , ", "Kartik Kaushik"],
    rollNo: ["18BCS053 , ", "18BCS061"],
    supervisor: "",
    title: "Parental Monitoring System",
  },
  {
    name: ["Amir Khan , ", "Mustafa Raza"],
    rollNo: ["18BCS043 , ", "18BCS052"],
    supervisor: "",
    title: "Number Plate Recognition using Machine Learning",
  },
  {
    name: ["Pradhumn Singh , ", "Aftab khan , ", "Amber Chawla"],
    rollNo: ["18BCS029 , ", "18BCS040 , ", "18BCS058"],
    supervisor: "",
    title: "Android Application For Vegetable and Fruit Classification",
  },
  {
    name: ["Ali Shahzeb , ", "Md Jansheir Khan , ", "Saifur Rahman Khan"],
    rollNo: ["18BCS082 , ", "18BCS083 , ", "18BCS087"],
    supervisor: "",
    title: "Food Image Recognition Using Deep Learning",
  },
  {
    name: ["Anas Intekhab Alam , ", "Masuma Akther , ", "Shazia Ansari"],
    rollNo: ["18BCS003 , ", "18BCS010 , ", "17BCS066"],
    supervisor: "",
    title: "Real time vision based American sign language recognition",
  },
  {
    name: ["Adnan Ali , ", "Mutiur Rehman Khan"],
    rollNo: ["18BCS014 , ", "18BCS039 , ", "18BCS049 , ", "17BCS011"],
    supervisor: "",
    title: "Vocalyz",
  },
  {
    name: ["Adnan Shamsi , ", "Azim Javed"],
    rollNo: ["18BCS002 , ", "18BCS004"],
    supervisor: "",
    title: "COLLAR: Collaborative Text And Code Editor",
  },
  {
    name: ["Ibraheem M. A. Khan , ", "Mohammed Asim"],
    rollNo: ["18BCS007 , ", "18BCS013"],
    supervisor: "N",
    title: "Named Entity Recognition for Hindi-English Code Text",
  },
  {
    name: ["Chavi Gupta , ", "Nikhat Nasim"],
    rollNo: ["18BCS005 , ", "18BCS015"],
    supervisor: "",
    title: "Human Activity Prediction Using Machine Learning",
  },
  {
    name: ["Arbab Alam , ", "Md. Manan Gani , ", "Amzad Choudhary"],
    rollNo: ["18BCS021 , ", "18BCS050 , ", "18BCS074"],
    supervisor: "",
    title: "Real-time Eye Blink Detection",
  },
  {
    name: ["Faiz Ur Rahman , ", "Irshad Ahmed Khan"],
    rollNo: ["18BCS024 , ", "18BCS026"],
    supervisor: "",
    title: "Number Plate Detection and Recognition using YoloV3",
  },
  {
    name: ["Yusra Nasir , ", "Aseya Fatima"],
    rollNo: ["18BCS037 , ", "18BCS045"],
    supervisor: "",
    title: "Classification Of BotNet Attacks via Deep Learning",
  },
  {
    name: ["Karishma Kathat , ", "Zoya Shams"],
    rollNo: ["18BCS009 , ", "18BCS018"],
    supervisor: "",
    title: "Text Summarization",
  },
  {
    name: ["Md Aatif , ", "Md Tauhid Alam"],
    rollNo: ["18BCS011 , ", "18BCS012"],
    supervisor: "",
    title: "Toxic Comment Identification And Span Detection",
  },
  {
    name: ["Rehan Kurian Philip , ", "Mohd Uvas , ", "Md Rabbani"],
    rollNo: ["18BCS054 , ", "18BCS079 , ", "18BCS078"],
    supervisor: "",
    title: "Speech Emotion Recognition",
  },
  {
    name: ["Aatif Rashid"],
    rollNo: ["18BCS001"],
    supervisor: "",
    title: "Plant Disease Detection Using Convolutional Neural Network",
  },
  {
    name: ["Ahmad Hassan Ansari , ", "Arshan Ahmad"],
    rollNo: ["18BCS041 , ", "18BCS075"],
    supervisor: "",
    title: "In-memory scalable database",
  },
  {
    name: ["Ifa Zareen , ", "Firdausia Fatima"],
    rollNo: ["18BCS077 , ", "18BCS090"],
    supervisor: "",
    title: "Emotion Analyzer",
  },
  {
    name: ["Syed Mohammad Raza , ", "MD Ruhulamin Khan , ", "Dhruv Dua"],
    rollNo: ["18BCS056 , ", "18BCS067 , ", "18BCS089"],
    supervisor: "",
    title:
      "Exploring, generating and ranking alternate voting systems in an n-Dimensional issue space given a multivariate multi-party environment",
  },
  {
    name: [
      "Sayed Edris Sadeed , ",
      "Amir Hussain Mohibi , ",
      "Said Elham Sadat",
    ],
    rollNo: ["18BCS070 , ", "17BCS078 , ", "17BCS036"],
    supervisor: "",
    title:
      "Automatic Traffic Accident Detection and Notification with Smartphones",
  },
  {
    name: ["Mohd. Imtiaz Alam , ", "Qazi Saheeb , ", "Md Aamir"],
    rollNo: ["18BCS065 , ", "18BCS066 , ", "18BCS062"],
    supervisor: "",
    title: "Blockchain To Ensure Counterfeit Free Pharmaceutical Supply Chain",
  },
  {
    name: ["Debal Hussain Abbas , ", "Mauwaz A. Farooqui"],
    rollNo: ["18BCS046 , ", "18BCS048"],
    supervisor: "",
    title: "Solve Maths Word Problems using AI",
  },
  {
    name: ["Mohammad Sahil , ", "Saif Ali Khan , ", "Jatin Rishi"],
    rollNo: ["18BCS028 , ", "18BCS030 , ", "18BCS060"],
    supervisor: "",
    title: "Detection Of Persuasion Techniques",
  },
  {
    name: ["Md Akdas Ahmad , ", "Anas Riyaz , ", "Mohammad Fahad"],
    rollNo: ["18BCS020 , ", "18BCS059 , ", "17BCS009"],
    supervisor: "",
    title: "Toxic Comment Classification",
  },
  {
    name: ["Abhishek Gupta , ", "Javed Ahmad"],
    rollNo: ["18BCSO , ", "18BCSO"],
    supervisor: "",
    title: "Political Sentiment Analysis On Uttar Pradesh Elections",
  },
  {
    name: ["Mohammad Abdul Basit , ", "Salman Ghufran Shaikh"],
    rollNo: ["18BCS064 , ", "18BCS069"],
    supervisor: "",
    title: "Natural disaster tweets classification using multimodal data",
  },
  {
    name: ["Gaurav Arora , ", "Paritosh Singh , ", "Rahil Ali Khan"],
    rollNo: ["18BCS025 , ", "18BCS084 , ", "18BCS085"],
    supervisor: "",
    title:
      "Blockchain Based KYC verification System Implemented Using Dynamic NFTS",
  },
  {
    name: ["Umayma Khan"],
    rollNo: ["18BCS088"],
    supervisor: "",
    title: "Single Image Super Resolution",
  },
  {
    name: ["Shahrukh Khan , ", "Yash Johri"],
    rollNo: ["18BCS031 , ", "18BCS036"],
    supervisor: "",
    title: "Flora And Fauna Recognition",
  },
  {
    name: ["Arbind Sah , ", "Chirag Garg , ", "Ashar Ekram"],
    rollNo: ["18BCS022 , ", "18BCS023 , ", "18BCS076"],
    supervisor: "",
    title: "Emotion Recognition by Speech Signals",
  },
  {
    name: ["Ilma Faridi , ", "Sparsh Bansal"],
    rollNo: ["18BCS008 , ", "18BCS034"],
    supervisor: "",
    title: "Speech Emotion Detection",
  },
  {
    name: ["Mohd Arsalan , ", "Nabige Aala , ", "Nawaz Mian"],
    rollNo: ["18BCS051 , ", "18BCS080 , ", "18BCS081"],
    supervisor: "",
    title: "Fake News Detection Using Deep Learning",
  },
  {
    name: ["Md Altaf Raza , ", "Shahzeb Qamar"],
    rollNo: ["18BCS027 , ", "18BCS032"],
    supervisor: "",
    title: "Sign Language to Text",
  },
  {
    name: ["Aayush Bhat , ", "Aquil Hasan , ", "Sameer Choudhary"],
    rollNo: ["18BCS038 , ", "18BCS044 , ", "18BCS055"],
    supervisor: "",
    title: "Self-Driving Cars Simulation Using CNN",
  },
  {
    name: ["Shatak Garg"],
    rollNo: ["18BCS033"],
    supervisor: "",
    title: "Real Time Parking Space Identifier",
  },
  {
    name: ["Shahid Afridi , ", "Tauhid Alam"],
    rollNo: ["18BCS071 , ", "18BCS072"],
    supervisor: "",
    title: "Flight price prediction using machine learning techniques",
  },
  {
    name: ["Hamza Ansari"],
    rollNo: ["18BCS006"],
    supervisor: "",
    title: "Stock Market Prediction Using Machine Learning Techniques",
  },
  {
    name: ["Srijith Nair , ", "Suyash Chauhan"],
    rollNo: ["18BCS016 , ", "18BCS017"],
    supervisor: "",
    title: "Image Steganography using LSB and secret key",
  },
];
const MA19 = [
  {
    name: ["Md. Minhaj , ", "Shahabuddin"],
    rollNo: ["19BCS014 , ", "19BCS031"],
    supervisor: "",
    title:
      "Smart Eyeglass with face recognition, obstacle detection features for visually impaired",
  },
  {
    name: ["Mushabah Siddiqui , ", "Momin Siddiqui"],
    rollNo: ["19BCS056 , ", "19BCS086"],
    supervisor: "",
    title: "Assessing Widget Interaction using Magnetometer Readings",
  },
  {
    name: ["Sheikh M. Sabir , ", "Mehedi Hasan"],
    rollNo: ["19BCS058 , ", "19BCS082"],
    supervisor: "",
    title: "Web3 Based Crowdfunding Application using Blockchain",
  },
  {
    name: ["Ali Abbas , ", "Tabish Khan"],
    rollNo: ["19BCS007 , ", "19BCS037"],
    supervisor: "",
    title: "Video downloader App a",
  },
  {
    name: ["Shivam Bhardwaj , ", "Lakhsay Garg"],
    rollNo: ["19BCS033 , ", "19BCS069"],
    supervisor: "",
    title: "Map My Run App",
  },
  {
    name: ["Wajiha Fatima , ", "Nishtha Gupta"],
    rollNo: ["19BCS040 , ", "19BCS057"],
    supervisor: "",
    title: "Image search Engine a",
  },
  {
    name: ["Wahiba Jawaid , ", "Syed Sarim Husain"],
    rollNo: ["19BCS036 , ", "19BCS039"],
    supervisor: "",
    title: "Open Domain Question Answering",
  },
  {
    name: ["Arshi Naaz , ", "Syed Sahba Hasan"],
    rollNo: ["19BCS008 , ", "19BCS035"],
    supervisor: "",
    title:
      "Underwater fish Species Detection and Classification in Video Sample",
  },
  {
    name: ["Heba Shakeel , ", "Sayeda Fatima"],
    rollNo: ["19BCS065 , ", "19BCS084"],
    supervisor: "",
    title: "Medical document Summarization a",
  },
  {
    name: ["Fahad Ahmad , ", "Mohammad Hammad"],
    rollNo: ["19BCS012 , ", "19BCS025"],
    supervisor: "",
    title: "Perimeter Intruder Detection using Deep Learning",
  },
  {
    name: ["Mohammed Saad , ", "Shuja Hamid"],
    rollNo: ["19BCS071 , ", "19BCS085"],
    supervisor: "",
    title: "A Comprehensive Traffic Monitoring System using Computer Vision",
  },
  {
    name: ["Md. Asfak , ", "Mohd. Rizwan Khan"],
    rollNo: ["19BCS051 , ", "19BCS055"],
    supervisor: "",
    title: "Human Following Robot using Arduino",
  },
  {
    name: ["Piyush Para Jha , ", "Aayush Jha"],
    rollNo: ["19BCS072 , ", "19BCS087"],
    supervisor: "",
    title: "Stock Price Prediction in Indian Exchange",
  },
  {
    name: ["Yash Vinayvanshi"],
    rollNo: ["19BCS081"],
    supervisor: "",
    title:
      "A New Policy for the K-Server Problem on General Metrics and its Analysis",
  },
  {
    name: ["Aisha Pervin , ", "Kahkasha Khan"],
    rollNo: ["19BCS006 , ", "19BCS013"],
    supervisor: "",
    title:
      "Attack Classification of an Intrusion Detection system using Deep Learning and Hyper parameter Optimization",
  },
  {
    name: ["Arham Athar , ", "Garv Nanwani"],
    rollNo: ["19BCS045 , ", "19BCS049"],
    supervisor: "",
    title: "Fake product Detection using Block Chain",
  },
  {
    name: ["Mohammad Aqdas , ", "Shashi Kalwar"],
    rollNo: ["19BCS053 , ", "19BCS064"],
    supervisor: "",
    title: "Image Based Malware classification ensemble of CNN architecture",
  },
  {
    name: ["Kushagra Tyagi , ", "Vithal Gulati"],
    rollNo: ["19BCS001 , ", "19BCS080"],
    supervisor: "",
    title: "Skin Cancer Classification using Computer Vision",
  },
  {
    name: ["Faraz Anwar , ", "Haider Ali Khan"],
    rollNo: ["19BCS047 , ", "19BCS050"],
    supervisor: "",
    title: "Block Chain Messenger",
  },
  {
    name: ["Aamir Ashraf , ", "Zaid Khan"],
    rollNo: ["19BCS004 , ", "19BCS041"],
    supervisor: "",
    title: "",
  },
  {
    name: ["Surya Kant , ", "Kanishka"],
    rollNo: ["19BCS060 , ", "19BCS067"],
    supervisor: "",
    title: "Extractive Text Summarization with Topic Modeling",
  },
  {
    name: ["S. M. Arham Bilal , ", "Abhay Sharma"],
    rollNo: ["19BCS079 , ", "19BCS088"],
    supervisor: "",
    title: "Bird Species Identification using Convolutional Neural Networks",
  },
  {
    name: ["Almas Amsari , ", "Tanmay Vij"],
    rollNo: ["19BCS042 , ", "19BCS061"],
    supervisor: "",
    title: "Image Captioning in Hindi using Deep Learning Techniques",
  },
  {
    name: ["Siddhartha Ganjoo , ", "Mohd. Humaid Ilyas"],
    rollNo: ["19BCS003 , ", "19BCS028"],
    supervisor: "",
    title: "Vehicle Proximity Detection using Computer Vision",
  },
  {
    name: ["Asif Nazir , ", "Sharique Parwez"],
    rollNo: ["19BCS009 , ", "19BCS032"],
    supervisor: "",
    title: "Place of Interest Recommendation",
  },
  {
    name: ["Takseer Reyaz"],
    rollNo: ["19BCS083"],
    supervisor: "",
    title: "Lung Cancer Detection using Machine Learning",
  },
  {
    name: ["Amir Jawed , ", "Mayank Vashishtha"],
    rollNo: ["19BCS042 , ", "19BCS070"],
    supervisor: "",
    title: "Dog Breed Classification using Transfer Learning",
  },
  {
    name: ["Ritik Vashist , ", "Kshitij Dwivedi"],
    rollNo: ["19BCS002 , ", "19BCS068"],
    supervisor: "",
    title:
      "Top N resolution recommendation for customer inquiry using clustering of semantically similar textual data",
  },
  {
    name: ["Prakhar Vasishtha , ", "Raghav Gautam"],
    rollNo: ["19BCS074 , ", "19BCS075"],
    supervisor: "",
    title:
      "Medical Image Synthesis (Morula) using Diffusion Probabilistic Model & GAN",
  },
  {
    name: ["Minhaj Iqbal , ", "Mohd. Tabish"],
    rollNo: ["19BCS023 , ", "19BCS026"],
    supervisor: "",
    title: "EEG-Based Epileptic Seizure Detection in Neonates",
  },
  {
    name: ["Fariha Salman , ", "Sumaiya Fatma"],
    rollNo: ["19BCS048 , ", "19BCS059"],
    supervisor: "",
    title:
      "Automatic Detection and Monitoring of Diabetic Retinopathy using Efficient Convolution Neural Networks",
  },
  {
    name: ["Ujjwal Tyagi , ", "Viksit Kaushik"],
    rollNo: ["19BCS062 , ", "19BCS063"],
    supervisor: "",
    title: "Connect Wall- Meetings integrated with real time frame",
  },
  {
    name: ["Azmal Shaikh , ", "Raiyan Haque"],
    rollNo: ["19BCS0 , ", "19BCS029"],
    supervisor: "",
    title: "Hand Gesture recognition based interactive gaming",
  },
  {
    name: ["Avi Tyagi , ", "Prabal Sharma"],
    rollNo: ["19BCS010 , ", "19BCS073"],
    supervisor: "",
    title: "Signature Forgery Detection",
  },
  {
    name: ["Syed Farees Hussain"],
    rollNo: ["19BCS034"],
    supervisor: "",
    title: "In-app Debugging Library a",
  },
  {
    name: ["Mirza Zaid Beg , ", "Mohd Ayaaz Ansari"],
    rollNo: ["19BCS024 , ", "19BCS027"],
    supervisor: "",
    title:
      "Offensive Language classification of YouTube comments using Deep Learning Techniques",
  },
  {
    name: ["Faisal Alam , ", "Md. Adil Khan"],
    rollNo: ["19BCS046 , ", "19BCS052"],
    supervisor: "",
    title: "Irrigation System Automation using IoT",
  },
  {
    name: ["Md. Shams Qamar , ", "Md. Zaki A. Akhtar"],
    rollNo: ["19BCS020 , ", "19BCS022"],
    supervisor: "",
    title: "Real Time Sign Language Recognition",
  },
  {
    name: ["Mohd. Firoz , ", "Vikas Kaushik"],
    rollNo: ["18BCS063 , ", "19BCS038"],
    supervisor: "",
    title: "Image Compression using Deep Learning",
  },
  {
    name: ["Abdul Samad , ", "Aman Ali"],
    rollNo: ["19BCS005 , ", "19BCS043"],
    supervisor: "",
    title: "Cab Sharing System",
  },
  {
    name: ["Md. Kamil Ansari , ", "Md. Saif Haider"],
    rollNo: ["19BCS018 , ", "19BCS019"],
    supervisor: "",
    title: "Toxic Comment Classification",
  },
  {
    name: ["Md. Asif Anjum , ", "Rishi Malla"],
    rollNo: ["19BCS017 , ", "19BCS030"],
    supervisor: "",
    title: "Concrete Crack Detection using Deep Learning",
  },
  {
    name: ["Md. Ozaid , ", "Md. Tanzeel Mujtaba"],
    rollNo: ["19BCS015 , ", "19BCS021"],
    supervisor: "",
    title: "Speech Emotion Recognition",
  },
];
const MA20 = [];

// ******************************MINOR PROJECTS********************************
const MI11 = [
  {
    name: ["Md. Safiyat Reza , ", "Surbhi Aggarwal"],
    rollNo: ["11CSS29 , ", "11CSS65"],
    supervisor: "Prof. M.N. Doja",
    title:
      "Stylometrics and Authorship Analysis: Mining Write-Print for Authorship Attribution.",
  },
  {
    name: ["Shadab Khan , ", "Shubham Gupta"],
    rollNo: ["11CSS55 , ", "11CSS60"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Reading Age Determination.",
  },
  {
    name: ["Nalin Sharma , ", "Suraj Tripathi"],
    rollNo: ["11CSS41 , ", "11CSS64"],
    supervisor: "Mr. Sarfaraz Masood",
    title:
      "Speaker Identification with Gender and Age classification from Voice samples.",
  },
  {
    name: ["Md. Zulkar Nain , ", "Noreen Anwar"],
    rollNo: ["11CSS31 , ", "11CSS45"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Location based Spatial Query Processing",
  },
  {
    name: ["Izhar Ahmed , ", "Raghib Faisal , ", "Shubham Khulbe"],
    rollNo: ["11CSS23 , ", "11CSS50 , ", "11CSS61"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Model to rank 311 issues based on importance to citizen",
  },
  {
    name: ["Afsha Shah , ", "Shreyansh Jain"],
    rollNo: ["11CSS04 , ", "11CSS59"],
    supervisor: "Mr. Shahzad Alam",
    title: "ZIG-ZAG PVD: A non-traditional approach for image steganography",
  },
  {
    name: ["Harshvardhan Singh , ", "Mohd Ashraf Khan"],
    rollNo: ["11CSS20 , ", "11CSS36"],
    supervisor: "Dr. Tanvir Ahmad",
    title: "Object Recognition in Images",
  },
  {
    name: ["Md. Danish Khan , ", "Md. Salik Rahman Khan"],
    rollNo: ["11CSS28 , ", "11CSS30"],
    supervisor: "Mr. Mushir Ahmad",
    title: "Cryptanalysis of DNA sequence based image encryption Algorithm",
  },
  {
    name: ["Chaudhary Shahid Husain , ", "Mohammad Toseef Mahmood"],
    rollNo: ["11CSS14 , ", "11CSS34"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Student Information System",
  },
  {
    name: ["Jatin Aggarwal , ", "Soyef"],
    rollNo: ["11CSS24 , ", "11CSS63"],
    supervisor: "Dr.Bashir Alam",
    title: "Detection of Malarial Parasite in Blood using Image Processing",
  },
  {
    name: ["Akif Khan Yusufzai , ", "Moonis Javed"],
    rollNo: ["11CSS07 , ", "11CSS40"],
    supervisor: "Dr.Bashir Alam",
    title: "Classifying Ephemeral vs. Long Lasting Content on the web",
  },
  {
    name: ["Batool Nasim , ", "Hena Parween"],
    rollNo: ["11CSS13 , ", "11CSS22"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "A Robust Audio Steganographic Techniques based on Phase- shifting and Psycho- Acoustic Persistence of Human Hearing Ability",
  },
  {
    name: ["Shivanshu Kumar Singh , ", "Obedullah"],
    rollNo: ["11CSS , ", "11CSS"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Optimized energy consumption of MIMO and co-operative MIMO techniques in Wireless sensor networks",
  },
  {
    name: ["Aman Singh , ", "Saurabh Mehta"],
    rollNo: ["11CSS08 , ", "11CSS54"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Suspicious Object Detection",
  },
  {
    name: ["Ekamber Chadda , ", "Hatim Tai"],
    rollNo: ["11CSS17 , ", "11CSS21"],
    supervisor: "Mr. Faiyaz Ahmad",
    title:
      "Application of Data Mining to build Recommendation System for Hotel Review",
  },
  {
    name: ["Ankur Saldhi , ", "Mohammad Amir Jamil"],
    rollNo: ["11CSS10 , ", "11CSS33"],
    supervisor: "Mr. Shahzad Alam",
    title: "A Technique for Data Encryption using Digital Signature",
  },
  {
    name: ["Umar Ahmad , ", "Vipul Nayyar"],
    rollNo: ["11CSS66 , ", "11CSS68"],
    supervisor: "Dr. Bashir Alam",
    title:
      "Distributed file system with storage optimization for cloud using disjunctive property π (Pi)",
  },
  {
    name: ["Prakriti Marwaha , ", "Rashi Batra"],
    rollNo: ["11CSS48 , ", "11CSS51"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Dynamic time Warping in Speech Recognition",
  },
  {
    name: ["Mohd Sufiyan , ", "Zaki Hasan Mehndi"],
    rollNo: ["11CSS39 , ", "11CSS71"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "A new technique for Rank Aggregation",
  },
  {
    name: ["Shamim Biswas , ", "Vishakha Singh"],
    rollNo: ["11CSS57 , ", "11CSS69"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "A simulation study of Energy Efficient Mobile Ad-Hoc Network under Dynamic Spectrum Access",
  },
  {
    name: ["Mohd. Danish Ansari , ", "Oves Khan"],
    rollNo: ["11CSS37 , ", "11CSS47"],
    supervisor: "Mr. Jawahar Lal",
    title: "Human Face Detection and Face Recognition",
  },
  {
    name: ["Deepanshu Bhatia , ", "Yusuf Hassan"],
    rollNo: ["11CSS15 , ", "11CSS70"],
    supervisor: "Mr. Mushir Ahmad",
    title: "Ant Colony Optimization based S Box Design",
  },
  {
    name: ["Asgher Imam , ", "S.Shahnawaz Ahmad"],
    rollNo: ["11CSS11 , ", "11CSS53"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Text Categorization using Machine Learning Techniqu",
  },
  {
    name: ["Madhav Mehta , ", "Namrata"],
    rollNo: ["11CSS27 , ", "11CSS42"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Predictive Analysis for Online Consumer Based on Product History",
  },
  {
    name: ["Zeba Nasim , ", "Zohra Bano"],
    rollNo: ["11CSS90 , ", "11CSS73"],
    supervisor: "Mr. Mushir Ahmad",
    title: "Efficient random permutation for image scrambling",
  },
  {
    name: ["Mohd. Abdullah Hammad , ", "Mohd. Amir Ahmad"],
    rollNo: ["11CSS32 , ", "11CSS35"],
    supervisor: "Dr. Mohd. Amjad",
    title: "M.A. Ansari Health care using Android Application",
  },
  {
    name: ["Aadam Saleem , ", "Mahammad Shadab"],
    rollNo: ["11CSS01 , ", "11CSS38"],
    supervisor: "Prof. M.N. Doja",
    title:
      "Mood Based classification of Music by Analyzing Lyrical Data using Text Mining Techniques",
  },
  {
    name: ["Eram Farooqui , ", "Gulshana Chaudhary"],
    rollNo: ["11CSS , ", "11CSS"],
    supervisor: "Dr. Tanvir Ahmad",
    title:
      "Identifying learners and visualizing their engagement patterns with MOOCs",
  },
  {
    name: ["Andleeb Zehra Zaidi , ", "Prerna Agarwal"],
    rollNo: ["11CSS09 , ", "11CSS49"],
    supervisor: "Prof. M.N. Doja",
    title:
      "Identification of important or key persons in a social networking website",
  },
  {
    name: ["Astha Tiwari , ", "Siddharth Verma"],
    rollNo: ["11CSS12 , ", "11CSS62"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Gesture Recognition and Response Generation",
  },
  {
    name: ["Nikhil Dargan , ", "Utsav Jain"],
    rollNo: ["11CSS44 , ", "11CSS67"],
    supervisor: "Mr. Jawahar Lal",
    title: "Atten Tec",
  },
  {
    name: ["Dheeraj Dang , ", "Jitin Tanwar"],
    rollNo: ["11CSS16 , ", "11CSS25"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title:
      "Centralized and self-regulating approach for Traffic Simulation using Simulation of Urban Mobility (SUMO)",
  },
  {
    name: ["Nausheen Usmani , ", "Rukhsar Shakir"],
    rollNo: ["11CSS43 , ", "11CSS52"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "Color Image steganography based on Pixel value modification method using Modulus Function",
  },
  {
    name: ["Karuna Rai , ", "Shaivi Kochar"],
    rollNo: ["11CSS26 , ", "11CSS56"],
    supervisor: "Dr. Tanvir Ahmad",
    title:
      "Segregation of subjective documents from blog space to extract the knowledge using machine learning",
  },
];
const MI12 = [
  {
    name: ["Abdul Karim , ", "Abhishek Joshi"],
    rollNo: ["12CSS01 , ", "12CSS04"],
    supervisor: "Mr. Shahzad Alam",
    title: "Edge Detection of Image using Soft Computing Techniques",
  },
  {
    name: ["Akshat Jindal , ", "Mohd. Raghib Khan"],
    rollNo: ["12CSS08 , ", "12CSS35"],
    supervisor: "Mr. Shahzad Alam",
    title: "Image Watermarking",
  },
  {
    name: ["Aman Arora , ", "Tushar Raheja"],
    rollNo: ["12CSS10 , ", "12CSS90"],
    supervisor: "Mr. Danish Raza Rizvi",
    title:
      "Application of Digital Image Processing & Edge Detection on Brain Tumor Extraction from Magnetic Resonance Imaging",
  },
  {
    name: ["Aly Akhtar , ", "Chaitanya Gupta"],
    rollNo: ["12CSS09 , ", "12CSS19"],
    supervisor: "Mr. Danish Raza Rizvi",
    title:
      "Predict Winning Percentage in One Day Cricket on Basis of Individual Player Performance",
  },
  {
    name: ["Asif Ahmad Khan , ", "Habib M. Khan"],
    rollNo: ["12CSS14 , ", "12CSS23"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Graphical Password Authentication",
  },
  {
    name: ["Anghat Babu , ", "Rehan Raza , ", "Siddharth Sukheja"],
    rollNo: ["10CSS11 , ", "12CSS47 , ", "12CSS66"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Image Search Engine",
  },
  {
    name: ["Anzal Zia Khan , ", "Mohd Umar Hasan"],
    rollNo: ["12CSS13 , ", "12CSS38"],
    supervisor: "Dr. Bashir Alam",
    title: "Autocorrect & Word Prediction using Text Mining",
  },
  {
    name: ["Manish Malik"],
    rollNo: ["12CSS28"],
    supervisor: "Mr. Musheer Ahmad",
    title:
      "Algebraic Immunity & Differential Power Analysis based Efficiency Evaluation of Substitution Boxes",
  },
  {
    name: ["Ahsan Kamal , ", "Md. Mehrab Alam"],
    rollNo: ["12CSS07 , ", "12CSS30"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Opinion Mining in Online Product Reviews",
  },
  {
    name: ["Kokab Tasleem , ", "Muhammad Raghib"],
    rollNo: ["12CSS26 , ", "12CSS40"],
    supervisor: "Mr. Shamim Ahmad",
    title:
      "Hiding an Image inside another Image using Variable – Rate Steganograph",
  },
  {
    name: ["Rubab Alam , ", "Shoyab Khan"],
    rollNo: ["12CSS48 , ", "12CSS64"],
    supervisor: "Prof. M. N.Doja",
    title:
      "Classifying Latent User Attributes from Social Network sites like Facebook / Twitter",
  },
  {
    name: ["Sana Noor , ", "Sultana Mumtaz Begum"],
    rollNo: ["12CSS54 , ", "12CSS68"],
    supervisor: "Mr. Shahzad Alam",
    title: "Color Image Edge Detection Using VTV Denoising & Color Difference",
  },
  {
    name: ["Sajjad Waseem , ", "Sapna"],
    rollNo: ["12CSS53 , ", "12CSS55"],
    supervisor: "Mr. Shamim Ahmad",
    title:
      "Wavelet Transform based Steganography Techniques to hide Audio Signal in Image",
  },
  {
    name: ["Mohammad Shahjahan , ", "Saif Ahmad Khan"],
    rollNo: ["12CSS33 , ", "12CSS51"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Android Application for Free calling over LAN in Jamia Campus",
  },
  {
    name: ["Mohib Yusuf , ", "Saifur Rahman , ", "Shafiya Naaz"],
    rollNo: ["12CSS39 , ", "12CSS52 , ", "12CSS60"],
    supervisor: "Mr. Zeeshan Ansari",
    title: "Car Pooling Android App",
  },
  {
    name: ["Sarah Khan , ", "Zeya Umayya"],
    rollNo: ["12CSS56 , ", "12CSS73"],
    supervisor: "Mr. Faiyaz Ahmad",
    title:
      "Image Encryption using Hybrid Genetic Algorithm & Chaotic Function Model",
  },
  {
    name: ["Shruti Khurana , ", "Sushmita Singh"],
    rollNo: ["12CSS65 , ", "12CSS70"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Chaos Based Secure Compression Function Design",
  },
  {
    name: ["Sharan Aggarwal , ", "Shivam Rana"],
    rollNo: ["12CSS12CSS"],
    supervisor: "Dr. Tanvir Ahmad",
    title: "Modeling of Gene Regulatory Networks using Microarray Data",
  },
  {
    name: ["Aditya Kumar , ", "Shadab Zafar"],
    rollNo: ["12CSS05 , ", "12CSS59"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Music Generation using Recurrent Neural Networks",
  },
  {
    name: ["Antriksh Agarwal , ", "Zishan Ahmad"],
    rollNo: ["12CSS12 , ", "12CSS74"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Leveraging location based search queries & GPS to mine significant places & location trajectories",
  },
  {
    name: ["Sahil Wadhwa , ", "Syed Ashar Javed"],
    rollNo: ["12CSS50 , ", "12CSS71"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Modeling Context of an Image using Deep Nets",
  },
  {
    name: ["Nikhil Mittal , ", "Prerit Garg"],
    rollNo: ["12CSS43 , ", "12CSS44"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Efficient Sbox Design using Travelling Salesman Problem",
  },
  {
    name: ["Harshvardhan Vashishta , ", "Manaf Mehtab Khan"],
    rollNo: ["12CSS24 , ", "12CSS27"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Designing of HASH Function using Crypto Analysis",
  },
  {
    name: ["Abhishek Bhatnagar , ", "Sarthak Jain"],
    rollNo: ["12CSS03 , ", "12CSS58"],
    supervisor: "Mr. Zeeshan Ansari",
    title: "Bacterial Foraging Optimization based for Substitution Box",
  },
  {
    name: ["Md. Shahbaz Ahmad , ", "Mohd. Rezwan"],
    rollNo: ["12CSS31 , ", "12CSS36"],
    supervisor: "Dr. Bashir Alam",
    title: "Automatic Video Classification",
  },
  {
    name: ["Rahul Mehra , ", "Nikhil K. Raman"],
    rollNo: ["12CSS12 , ", "CSS"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Theft Detection Instant Alerter",
  },
  {
    name: ["Jeevan Singh Nayal , ", "Ravi Kumar Jain"],
    rollNo: ["12CSS25 , ", "12CSS46"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Neural Network Based Artist Identification using Audio Samples",
  },
  {
    name: ["Bushra  , ", " Khan"],
    rollNo: ["12CSS18 , ", "12CSS29"],
    supervisor: "Prof. M. N.Doja",
    title: "Image based Sports Recognition",
  },
  {
    name: ["Ameen M. Khan , ", "Sachin Sharma"],
    rollNo: ["12CSS12 , ", "CSS"],
    supervisor: "Dr. Bashir Alam",
    title:
      "Prediction & Prevention of Riots using Real Time Social Network Data Mining",
  },
  {
    name: ["Farheen Nilofer , ", "Sarah Masud"],
    rollNo: ["12CSS21 , ", "12CSS57"],
    supervisor: "Dr. Tanvir Ahmad",
    title: "Topic Modeling using BIG Data Alalytics",
  },
  {
    name: ["Abdul Wajid Nasar , ", "Suhani Gupta"],
    rollNo: ["12CSS12 , ", "CSS"],
    supervisor: "Mr. Sarfaraz Masood",
    title:
      "Region wise Identification of Humans based on Facial Features using Neural Networks",
  },
  {
    name: ["Avishkar Gupta , ", "Dhawal Arora"],
    rollNo: ["12CSS16 , ", "12CSS20"],
    supervisor: "Dr. Tanvir Ahmad",
    title:
      "Gated Feedback DNN for Generating Query able Visual Data Description",
  },
  {
    name: ["Athul Biju , ", "Sunny Sarvottam"],
    rollNo: ["12CSS15 , ", "12CSS69"],
    supervisor: "Mr. Jawahar Lal",
    title: "Web Search history Based Desktop Wallpaper Changer",
  },
  {
    name: ["Mohammad Farhan , ", "Mohd Shoib Khan"],
    rollNo: ["12CSS32 , ", "12CSS37"],
    supervisor: "Mr. Jawahar Lal",
    title: "Content based Image retrieval System",
  },
  {
    name: ["Ghalib Saleem , ", "Mohd Irfan , ", "Naeem Ahmad"],
    rollNo: ["12CSS12 , ", "CSS"],
    supervisor: "Mr. Jawahar Lal",
    title: "Virtual Mouse",
  },
  {
    name: ["MayarAlam"],
    rollNo: ["09CSS27"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Wavelet Based Digital Water MArking",
  },
];
const MI13 = [
  {
    name: ["Sonal Dua , ", "Gaurav Sharma"],
    rollNo: ["13BSS0073 , ", "13BSS0025"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Smart infrastructure control and automation systems (SICAS)",
  },
  {
    name: ["Shikha Kaushik , ", "Anamta Khan"],
    rollNo: ["13BSS0066 , ", "13BSS0013"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Human face detection, tracking and recognition",
  },
  {
    name: ["Fatima Munawwar , ", "Umer Ahsan"],
    rollNo: ["13BSS0023 , ", "13BSS0069"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Image caption generation using deep neural network",
  },
  {
    name: ["Osama Khan , ", "Satyam Sinha , ", "Wajahat Ansari"],
    rollNo: ["13BSS0090 , ", "13BSS0062 , ", "13BSS0071"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Autonomous car using evolving neural network",
  },
  {
    name: ["Mohammad Asif , ", "Mohd. AsadBasit Ali"],
    rollNo: ["13BSS0040 , ", "13BSS0048 , ", "13BSS0020"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Twitter sentiment classification using distant supervision",
  },
  {
    name: ["Rabia Abdul Jabbar , ", "Saniya Suhail"],
    rollNo: ["13BSS0055 , ", "13BSS0061"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Edge detection using krawtchouk polynomials",
  },
  {
    name: ["Harish Chandra Thuwal , ", "Adhyan Srivastava"],
    rollNo: ["13BSS0027 , ", "13BSS0007"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Real time sign language gesture recognition from video sequence",
  },
  {
    name: ["Mohd. Shoeb , ", "Ajay Goyal"],
    rollNo: ["13BSS0051 , ", "13BSS0010"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Sentiment analysis on restaurant reviews using natural language processing",
  },
  {
    name: ["Saba Khan , ", "M. Munirud Doja"],
    rollNo: ["13BSS0057 , ", "13BSS0042"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Analysis of road accidents using data mining",
  },
  {
    name: ["Akash Gaur , ", "Mohd. Yaseen"],
    rollNo: ["13BSS0001 , ", "13BSS0046"],
    supervisor: "Mr. Hannan Mansoor",
    title:
      "Voice based navigation system for blind people using ultrasonic sensor ",
  },
  {
    name: ["Mayank Shekhar , ", "Sumit Kumar Jha"],
    rollNo: ["13BSS0033 , ", "13BSS0067"],
    supervisor: "Mr. Musheer Ahmad",
    title:
      "An optical character recognition based android application for business card scanner\n                                            ",
  },
  {
    name: ["Sahil , ", "Salamuddin"],
    rollNo: ["13BSS0058 , ", "13BSS0059"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Face expression recognition",
  },
  {
    name: ["Minnat Khan , ", "Gulnawaz Akram"],
    rollNo: ["13BSS0038 , ", "13BSS0026"],
    supervisor: "Mr. Hannan Mansoor ",
    title: "Automated text categorization system using open directory project",
  },
  {
    name: ["Maseera Ali , ", "Aditi Mishra , ", "Ahmad Zia Zafari"],
    rollNo: ["13BSS0032 , ", "13BSS0008 , ", "12CSS06"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Cryptographic hash function design using generalized chaotic map",
  },
  {
    name: ["Jawd Ahmad , ", "Mohd. Asad Hussain"],
    rollNo: ["13BSS0030 , ", "13BSS0039"],
    supervisor: "Dr. Bashir Alam",
    title: "Finding interesting pattern from uncertain data",
  },
  {
    name: ["Abdul Rauf , ", "Abdullah Hasan"],
    rollNo: ["13BSS0003 , ", "13BSS0004"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Implementation of various AI techniques to solve pacman game",
  },
  {
    name: ["Md. Shariq Shahab , ", "Md. Tabish R. Khan , ", "Nasruddin Ali"],
    rollNo: ["13BSS0035 , ", "13BSS0036 , ", "13BSS0053"],
    supervisor: "Dr. Bashir Alam",
    title: "Detect disease from chest X-ray and annotate its context",
  },
  {
    name: ["Abdullah Wasim"],
    rollNo: ["11CSS03"],
    supervisor: "Mr. Jawahar Lal",
    title: "Spam text detection",
  },
  {
    name: ["Amit Jindal , ", "Mohd. Faizan"],
    rollNo: ["13BSS0012 , ", "13BSS0050"],
    supervisor: "Dr. Mohd. Amjad",
    title:
      "Detection of acute leukemia using white blood cells segmentation based on blood samples ",
  },
  {
    name: ["Mohd. Saddam Hussain , ", "Mohd. Asrar Ahmad"],
    rollNo: ["13BSS0043 , ", "13BSS0049"],
    supervisor: "Mr. Shamim Ahmad",
    title: "A new approach to hide text in image using steganography",
  },
  {
    name: ["Asjad Khan , ", "Mohd. Shahrukh , ", "Mohd. Yusuf Ali"],
    rollNo: ["13BSS0041 , ", "13BSS0044 , ", "13BSS0045"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Emotion recognition from speech using support vector machine",
  },
  {
    name: ["Adeela Izhar , ", "Shazli Khanam"],
    rollNo: ["13BSS0006 , ", "13BSS0065"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "A novel bacterial foraging technique for optimization of edge detection in images",
  },
  {
    name: ["Atul Kunwar , ", "Azhan Alam"],
    rollNo: ["13BSS0017 , ", "12CSS17"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Aging face recognition",
  },
  {
    name: ["Himanshu Sundriyal , ", "Tarun Luthra"],
    rollNo: ["13BSS0028 , ", "13BSS0068"],
    supervisor: "Dr. Bashir Alam",
    title: "Game theoretic model for soul network analysis",
  },
  {
    name: ["Md. Insan Ahsan , ", "Md. Mahtab Alam"],
    rollNo: ["13BSS0034 , ", "13BSS0075"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "Brain tumor detection algorithm using watershed and thresholding based segmentation",
  },
  {
    name: ["Ayush Jain , ", "Ayush Chauhan , ", "Pulkit Gupta"],
    rollNo: ["13BSS0019 , ", "13BSS0018 , ", "13BSS0054"],
    supervisor: "Dr. Mohd. Amjad",
    title: "AI lane detection and vehicle detecting using computer version",
  },
  {
    name: ["Darsh Gupta , ", "Deepak Sharma , ", "Varun Bansal"],
    rollNo: ["13BSS0021 , ", "13BSS0022 , ", "13BSS0074"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Evaluating sentiment for user posted online reviews and opinions",
  },
  {
    name: ["Abhinav Rai , ", "Ashhar Hasan"],
    rollNo: ["13BSS0005 , ", "13BSS0015"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Deep learning based motor control unit",
  },
  {
    name: ["Amir Khan , ", "Anas Ahmad Qazi"],
    rollNo: ["13BSS0011 , ", "13BSS0014"],
    supervisor: "Mr. M. Zeeshan Ansari",
    title: "Language identification of transliterated text using N-Gram",
  },
  {
    name: ["Sharmin Khan , ", "Irum"],
    rollNo: ["13BSS0064 , ", "13BSS0029"],
    supervisor: "Prof. M. N. Doja",
    title:
      "Neighborhood topology to discover influential nodes in a complex network\n                                            ",
  },
  {
    name: ["Ahmad Sarosh Waseem , ", "Shafqaut Bakhtiyar"],
    rollNo: ["13BSS0009 , ", "13BSS0063"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "Ant colony optimization based on image edge detection steganography",
  },
  {
    name: ["Akash Aggarwal , ", "Krishan Chopra"],
    rollNo: ["13BSS0002 , ", "13BSS0031"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Air pollution forecasting system using statistical model",
  },
  {
    name: ["Mohd. Arshad , ", "Shamshad Alam"],
    rollNo: ["13BSS0047 , ", "12CSS61"],
    supervisor: "Mr. Jawahar Lal",
    title: "Secure student information system",
  },
  {
    name: ["Mohit Singh , ", "Kharab Vaibhav Bindal"],
    rollNo: ["13BSS0052 , ", "13BSS0070"],
    supervisor: "Mr. Jawahar Lal",
    title: "Network packet analyser",
  },
];
const MI14 = [
  {
    name: ["Tafseer Ahmad , ", "Subia Ansari , ", "Iram Ayyub"],
    rollNo: ["14BCS0019 , ", "14BCS0047 , ", "14BCS0054"],
    supervisor: "Mr. Musheer Ahmad",
    title: "A Novel Data encryption scheme using DNA computing",
  },
  {
    name: ["Mubashshir Khan , ", "Murtaza Hasan"],
    rollNo: ["14BCS0062 , ", "14BCS0063"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Home Automation using ARDUINO",
  },
  {
    name: ["Mohd. Faizan Shahid , ", "Arpit Singh"],
    rollNo: ["14BCS0004 , ", "14BCS0012"],
    supervisor: "Mr. Jawahar Lal",
    title: "Opinion Mining using Deep Neural Networks.",
  },
  {
    name: ["Vaibhav Singhal , ", "Saurabh Sharma"],
    rollNo: ["14BCS0020 , ", "14BCS0035"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Fractional Order Chaotic System Based S Box Design",
  },
  {
    name: ["Md. Amir NaseemZeeshan Siddiqui"],
    rollNo: ["14BCS0058 , ", "14BCS0061"],
    supervisor: "Mr. Jawahar Lal",
    title: "Speaker recognition system using cepstral analysis",
  },
  {
    name: [
      "Abdul Mohsin Siddiqui , ",
      "Mohd. Zayan Alam , ",
      "Zaki Mustafa Farooqui",
    ],
    rollNo: ["14BCS0036 , ", "14BCS0041 , ", "14BCS0050"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Image Encryption based on Algebraic S-Box and Galios field",
  },
  {
    name: ["Shubham Garg , ", "Sanjay Kumar"],
    rollNo: ["14BCS0017 , ", "14BCS0046"],
    supervisor: "Mr. Danish Raza Rizvi",
    title: "Maternal Diabetic Analysis",
  },
  {
    name: ["Joy Mukherjee , ", "Shabnam Khatoon"],
    rollNo: ["14BCS0002 , ", "14BCS0009"],
    supervisor: "Mr. Sarfaraz Masood",
    title:
      "A project on Noise reduction on image using Morphological image cleaning",
  },
  {
    name: ["Akshay Sharma , ", "Azfar Sikander Zaidi"],
    rollNo: ["14BCS0038 , ", "14BCS0052"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Automatic Entity Recognition",
  },
  {
    name: ["Abhishek Bhat , ", "tHarsh Vijay , ", "Rohit Kumar Wasan"],
    rollNo: ["14BCS0023 , ", "14BCS0053 , ", "14BCS0065"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Artistic image style transfer using deep neural networks",
  },
  {
    name: ["Lakhita Bhatia , ", "Dhruv Malik , ", "Mohd. Usman Alvi"],
    rollNo: ["14BCS0056 , ", "14BCS0026 , ", "14BCS0030"],
    supervisor: "Mr. Mumtaz Ahmad",
    title:
      "BOT-CHEF: Making a platform for cybersecurity research and detection of vulnerable target online using Shodan.",
  },
  {
    name: ["Sahiba Khan , ", "Alima Siddiqui"],
    rollNo: ["14BCS0006 , ", "14BCS0010"],
    supervisor: "Mr. Danish Raza Rizvi",
    title:
      "Detection and Drawing of basic geometric shapes in a hand drawn diagram image",
  },
  {
    name: ["Mohd. Saqib , ", "Syed Faheel Ahmad"],
    rollNo: ["14BCS0042 , ", "14BCS0067"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Smart home monitoring using a chat bot and raspberry Pi",
  },
  {
    name: ["Farah Naaz , ", "Purnima Garg"],
    rollNo: ["14BCS0027 , ", "14BCS0034"],
    supervisor: "Mr. Sarfaraz Masood",
    title:
      "Clustering music by Genres using supervised and Unsupervised Algorithms",
  },
  {
    name: ["Aisha Aijaz , ", "Mohd. Wajid Zaman"],
    rollNo: ["14BCS0024 , ", "14BCS0033"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Framework of a clothing fashion recommendation system",
  },
  {
    name: ["Anas Akhtar , ", "Gaurav Arora"],
    rollNo: ["14BCS0025 , ", "14BCS0028"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Smart Irrigation System",
  },
  {
    name: ["Saif Rehman Nasir , ", "Anish Sharma , ", "Rahul Tuteja"],
    rollNo: ["14BCS0007 , ", "14BCS0039 , ", "14BCS0045"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Sign Language Interpreter",
  },
  {
    name: ["Khalid Hasan Rahmani , ", "Mohd. Ariz Ansari"],
    rollNo: ["14BCS0055 , ", "14BCS0059"],
    supervisor: "Dr. Bashir Alam",
    title: "Finger Print Authentication system",
  },
  {
    name: ["Aquib Jawed , ", "Mohd. Suhail"],
    rollNo: ["14BCS0011 , ", "14BCS0032"],
    supervisor: "Mr. Shahzad Alam",
    title:
      "Edge detection in medical images using quantum image enhancement and Shanon entropy",
  },
  {
    name: ["Kunal Kaushik , ", "Aviral Mudgal"],
    rollNo: ["14BCS0003 , ", "14BCS0013"],
    supervisor: "Mr. Hannan Mansoor",
    title:
      "Exploring CNN-RNN architectures for multilabel classification of the Amazon",
  },
  {
    name: [" , ", "AbdullahGourav Suri"],
    rollNo: ["14BCS0001 , ", "14BCS0040"],
    supervisor: "Dr. Bashir Alam",
    title: "Moodifier",
  },
  {
    name: ["Abhishek Barnwal , ", "Afzal Ahmad"],
    rollNo: ["14BCS0022 , ", "14BCS0037"],
    supervisor: "Mr. Shamim Ahmad",
    title:
      "User categorization from stack overflow data using BIG data techniques",
  },
  {
    name: [
      "Saquib Ali Khan , ",
      "Suhail Khan , ",
      "Najeeb Khan , ",
      "Yasir Bashir Mir , ",
      "Zafrullah Mahmood",
    ],
    rollNo: [
      "14BCS0008 , ",
      "14BCS0018 , ",
      "14BCS0043 , ",
      "14BCS0048 , ",
      "14BCS0049",
    ],
    supervisor: "Prof. M. N. Doja",
    title: "A novel approach towards spam classification",
  },
  {
    name: ["KashanUddin Z. Khan"],
    rollNo: ["14BCS0014"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Part of speech tagging of Hindi- English Code Mixed Text",
  },
  {
    name: ["Rishabn Jain , ", "Saurabh Purohit , ", "Shikhar Chaudhary"],
    rollNo: ["14BCS0015 , ", "14BCS0016 , ", "14BCS0068"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Amazon Review representative ranking",
  },
  {
    name: ["Lokesh Kumar , ", "Shabahat Jawed"],
    rollNo: ["14BCS0057 , ", "14BCS0066"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Predictive Air Pollution levels of a city (using machine learning)",
  },
  {
    name: ["Mohd. Huzaifa Faruqi , ", "Ajitesh Kumar Rai"],
    rollNo: ["14BCS0031 , ", "14BCS0051"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Autonomous parking using deep reinforcement learning",
  },
  {
    name: ["Mohd. Sadiq"],
    rollNo: ["14BCS0060"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Application of Block chain in Education Industry",
  },
];
const MI15 = [];
const MI16 = [
  {
    name: ["Faria Mabood , ", " Abdul Irshad"],
    rollNo: ["16BCS020 , ", "16BCS077"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Water Management system using IoT",
  },
  {
    name: ["Agnik Guha , ", " Yousuf Ansari , ", " Ajay Kumar Yadav"],
    rollNo: ["16BCS009 , ", "16BCS010 , ", "16BCS063"],
    supervisor: "Dr. Bashir Alam",
    title: "Customer transaction Prediction",
  },
  {
    name: ["Manoj , ", " Khwaja Wisal Maqsood"],
    rollNo: ["16BCS026 , ", "16BCS078"],
    supervisor: "Mr. Sarfaraz Masood",
    title:
      "Diabetic retinopathy detection and grading using Deep learning and image processing",
  },
  {
    name: ["Tanmay Gupta , ", " Shahnazar"],
    rollNo: ["16BCS050 , ", "16BCS065"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Identification of dog breeds using convolution neural network",
  },
  {
    name: ["Bilal Ahmad , ", " Md. Sajid Anwar Ashrafi , ", " Bhuvnesh Sharma"],
    rollNo: ["16BCS014 , ", "16BCS015 , ", "16BCS018"],
    supervisor: "Mr. Musheer Ahmad",
    title: "Loan approval prediction based on machine learning",
  },
  {
    name: ["Tabish Iqbal"],
    rollNo: ["16BCS052"],
    supervisor: "Dr. Bashir Alam",
    title: "Social media community using optimized clustering algorithm",
  },
  {
    name: ["Tushar Goel , ", " Mohd Saqib , ", " Shadab Ahmad"],
    rollNo: ["16BCS053 , ", "16BCS060 , ", "16BCS0"],
    supervisor: "Mr. Mumtaz Ahmad",
    title: "Multi Label classification",
  },
  {
    name: ["Md. Ikrar Khan , ", " Wajahat Kareem"],
    rollNo: ["16BCS044 , ", "16BCS076"],
    supervisor: "Mr. Sarfaraz Masood",
    title: "Sign language recognizer using python",
  },
  {
    name: ["Abhishek Singh , ", " Aftab Alam , ", " Yatin Kumar"],
    rollNo: ["16BCS033 , ", "16BCS034 , ", "16BCS035"],
    supervisor: "Mr. Shahzad Alam",
    title: "Real time object detection",
  },
  {
    name: [
      "Prithipal Singh Patwal , ",
      " Priyansh Taneja , ",
      " Pratham Batra",
    ],
    rollNo: ["16BCS042 , ", "16BCS043 , ", "16BCS045"],
    supervisor: "Mr. Shahzad Alam",
    title: "Lung disease classification from chest X-Ray images",
  },
  {
    name: ["Ariba Parveen , ", " Shadma Siddiqui , ", " Asjad Ali Khan"],
    rollNo: ["16BCS019 , ", "16BCS021 , ", "16BCS073"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "On data transliteration from Hindi to English",
  },
  {
    name: ["Abdullah Saif , ", " Md. Afroz"],
    rollNo: ["16BCS052 , ", "16BCS057"],
    supervisor: "Ms. Amreen Ahmad",
    title: "Summarization of lengthy documents",
  },
  {
    name: ["Shikhar Singhal , ", " Rishabh Vats , ", " Pranjal Anand"],
    rollNo: ["16BCS039 , ", "16BCS041 , ", "16BCS055"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Game development using Unity 3D",
  },
  {
    name: ["Aditya Anand Thakur , ", " Aakash Jha , ", " Chirag Kaushik"],
    rollNo: ["16BCS016 , ", "16BCS024 , ", "16BCS047"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Placement Predictor",
  },
  {
    name: ["Umar Salman , ", " Wasim Akram , ", " Mohd. Zeeshan Sheikh"],
    rollNo: ["16BCS038 , ", "16BCS070 , ", "16BCS075"],
    supervisor: "Ms. Amreen Ahmad",
    title: "Handwritten text recognition",
  },
  {
    name: ["Sumera Naaz , ", " Zain Ul Abedin"],
    rollNo: ["16BCS011 , ", "16BCS012"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Data classification with BERT in the field of Disaster management",
  },
  {
    name: ["Anmol Malik , ", " Sayalath Souvannachack"],
    rollNo: ["16BCS022 , ", "16BCS023"],
    supervisor: "Mr. Jawahar Lal",
    title: "Decentralized E- Voting system using Block chain",
  },
  {
    name: ["Shabi ul Hassan , ", " Tabish Aleem , ", " Divyanshu Singh"],
    rollNo: ["16BCS046 , ", "16BCS050 , ", "16BCS064"],
    supervisor: "Mr. Waseem Ahmad",
    title: "Object detection using Deep learning",
  },
  {
    name: ["Marhaba Azim , ", " Roshan Kumar"],
    rollNo: ["16BCS004 , ", "16BCS058"],
    supervisor: "Ms. Zeba Anwar",
    title: "Machine learning based prediction of protein-protein interaction",
  },
  {
    name: ["Urooj Iqbal , ", " Mohd. Mohtashem"],
    rollNo: ["16BCS040 , ", "16BCS071"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Drowsiness Detection and Alert",
  },
  {
    name: ["Shah Faisal , ", " Abdul Ahad Khan"],
    rollNo: ["16BCS031 , ", "16BCS068"],
    supervisor: "Dr. Mohd. Amjad",
    title: "Smart door unlock system",
  },
  {
    name: ["Sidra Tasleem , ", " Rishabh Chauhan"],
    rollNo: ["16BCS028 , ", "16BCS059"],
    supervisor: "Mr. Danish R. Rizvi",
    title: "Clothing classifier using deep neural network",
  },
  {
    name: ["Bhavya Jain , ", " Md. Adnan Khan"],
    rollNo: ["16BCS027 , ", "16BCS066"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Sales prediction based on previous data",
  },
  {
    name: ["Mohd. Sadique , ", " Juned Raghib , ", " Zakiuddin"],
    rollNo: ["16BCS013 , ", "16BCS029 , ", "16BCS0"],
    supervisor: "Mr. Waseem Ahmad",
    title: "Speech emotion recognition using ML/DL based on LPC, MFCC & MSFs",
  },
  {
    name: ["Areesha Fatima Siddiqui , ", " Mohammad Anas"],
    rollNo: ["16BCS002 , ", "16BCS006"],
    supervisor: "Mr. Mohd. Zeeshan Ansari",
    title: "Sentiment analysis of political views on twitter",
  },
  {
    name: ["Pulkit P. Gupta , ", "Abhishek Balodi , ", "Abhinav Nirwan"],
    rollNo: ["16BCS001 , ", "16BCS005 , ", "16BCS030"],
    supervisor: "Mr. Jawahar Lal",
    title: "Ad-X: Personalized Ad recommender system",
  },
  {
    name: ["Mohd. Khalid , ", "Asheeque CM , ", " Syed Faraaz Ahmad"],
    rollNo: ["16BCS007 , ", "16BCS008 , ", "16BCS049"],
    supervisor: "Mr. Faiyaz Ahmad",
    title: "Distributed machine learning system",
  },
  {
    name: ["Asma Ikram , ", "Azmal Hussain Aakil"],
    rollNo: ["16BCS003 , ", "16BCS051"],
    supervisor: "Dr. Tanvir Ahmad",
    title: "Detecting fraud in financial payments using machine learning",
  },
];
const MI17 = [];
const MI18 = [
  {
    name: ["Javed Ahmad"],
    rollNo: ["18BCS0"],
    supervisor: "",
    title: "Breast Cancer detection using Machine Learning",
  },
  {
    name: [
      "Sayed Edirs Sadeed , ",
      "Amir Hussain Mohibi , ",
      "Said Elham Sadat",
    ],
    rollNo: ["18BCS070", "17BCS078", "17BCS036"],
    supervisor: "",
    title: "IoT based infrastructure to collect patient's data",
  },

  {
    name: ["Abhishek Gupta , ", "Shazia Ansari"],
    rollNo: ["18BCS0 , ", "17BCS0"],
    supervisor: "",
    title: "Lung Cancer prediction using different machine learning techniques",
  },

  {
    name: ["Anas Intekhab Alam , ", "Masuma Akther"],
    rollNo: ["18BCS003 , ", "18BCS010"],
    supervisor: "",
    title: "Handwritten Digit Recognition Using Deep Learning",
  },

  {
    name: ["Syed Mohammad Raza , ", "MD Ruhulamin Khan"],
    rollNo: ["18BCS056 , ", "18BCS067"],
    supervisor: "",
    title:
      "Exploring the Use of NEAT Algorithm in Genetic Training by Making an Al Play Flappy Bird",
  },

  {
    name: ["Mohammad Abdul Basit , ", "Salman Ghufran Shaikh"],
    rollNo: ["18BCS064 , ", "18BCS069"],
    supervisor: "",
    title:
      "Generating insights from the Olympics by comparing various implementations of BERT-based models for sentiment classification",
  },

  {
    name: ["Md Akdas Ahmad , ", "Anas Riyaz , ", "Mohammad Fahad"],
    rollNo: ["18BCS020 , ", "18BCS059 , ", "17BCS009"],
    supervisor: "",
    title: "FACE MASK DETECTION",
  },

  {
    name: ["Yusra Nasir , ", "Aseya Fatima"],
    rollNo: ["18BCS037 , ", "18BCS045"],
    supervisor: "",
    title:
      "Recycling Waste Classification Based on Optimal Trainable Features with Swarm Algorithm",
  },

  {
    name: ["Jatin Rishi , ", "Dhruv Dua"],
    rollNo: ["18BCS060 , ", "18BCS089"],
    supervisor: "",
    title: "RTDES (Real Time Door Entry System)",
  },

  {
    name: ["Md Altaf Raza , ", "Shahzeb Qamar"],
    rollNo: ["18BCS027 , ", "18BCS032"],
    supervisor: "",
    title: "Moody Music",
  },

  {
    name: ["Chavi Gupta , ", "Nikhat Nasim"],
    rollNo: ["18BCS005 , ", "18BCS015"],
    supervisor: "",
    title: "DOCUMENT SCANNER",
  },

  {
    name: ["Mohammad Sahil , ", "Saif Ali Khan"],
    rollNo: ["18BCS028 , ", "18BCS030"],
    supervisor: "",
    title: "IDE with Cloud-based Compiler",
  },

  {
    name: ["Mutiur Rehman Khan , ", "Mohammad Yawar"],
    rollNo: ["18BCS014 , ", "18BCS049"],
    supervisor: "",
    title: "Emojify yourself using Convolutional Neural Network (CNN)",
  },

  {
    name: ["Ibraheem M. A. Khan , ", "Mohammed Asim"],
    rollNo: ["18BCS007 , ", "18BCS013"],
    supervisor: "",
    title:
      "Implementing an end-to-end object detection and tracking system for use in camera attached to autonomous vehicle",
  },

  {
    name: ["Aayush Bhat , ", "Adnan Ali"],
    rollNo: ["18BCS038 , ", "18BCS039"],
    supervisor: "",
    title: "Attendance Management System using Face Recognition",
  },

  {
    name: ["Aatif Rashid , ", "Umayma Khan"],
    rollNo: ["18BCS001 , ", "18BCS088"],
    supervisor: "",
    title: "Gender and Age Recognition Android App",
  },

  {
    name: ["Rehan Kurian Philip , ", "Mohd Uvas"],
    rollNo: ["18BCS054 , ", "18BCS079"],
    supervisor: "",
    title: "Motion Tracking in Virtual Reality",
  },

  {
    name: ["Shahid Afridi , ", "Tauhid Alam"],
    rollNo: ["18BCS071 , ", "18BCS072"],
    supervisor: "",
    title: "Heart Disease prediction using machine learning",
  },

  {
    name: ["Mohd. Imtiaz Alam , ", "Qazi Saheeb"],
    rollNo: ["18BCS065 , ", "18BCS066"],
    supervisor: "",
    title: "TEXT TO HANDWRITING CONVERTER",
  },

  {
    name: ["Arbab Alam , ", "Amzad Chaudhary"],
    rollNo: ["18BCS021 , ", "18BCS074"],
    supervisor: "",
    title: "TWITTER DATA EXTRACTING",
  },

  {
    name: ["Ilma Faridi , ", "Sparsh Bansal"],
    rollNo: ["18BCS034 , ", "18BCS008"],
    supervisor: "",
    title: "Sign Language Recognition",
  },

  {
    name: ["Aquil Hasan , ", "Sameer Choudhary"],
    rollNo: ["18BCS044 , ", "18BCS055"],
    supervisor: "",
    title: "REAL TIME OBJECT MEASUREMENT",
  },

  {
    name: ["Shahrukh Khan , ", "Yash Johri"],
    rollNo: ["18BCS031 , ", "18BCS036"],
    supervisor: "",
    title: "Restaurant Data Management",
  },

  {
    name: ["Arbind Sah , ", "Chirag Garg , ", "Ashar Ekram"],
    rollNo: ["18BCS022 , ", "18BCS023 , ", "18BCS076"],
    supervisor: "",
    title: "Covid-19 Detection Using Lungs X-RAY Images",
  },

  {
    name: ["Amir Khan , ", "Mustafa Raza"],
    rollNo: ["18BCS043 , ", "18BCS052"],
    supervisor: "",
    title: "Face Mask Detection",
  },

  {
    name: ["Hamza Ansari , ", "Md Aamir"],
    rollNo: ["18BCS006 , ", "18BCS062"],
    supervisor: "",
    title: "Shopping Cart Web App",
  },

  {
    name: ["Shatak Garg"],
    rollNo: ["18BCS033"],
    supervisor: "",
    title: "HANDWRITTEN EQUATION SOLVER",
  },
  {
    name: ["Ifa Zareen , ", "Firdausia Fatima"],
    rollNo: ["18BCS077 , ", "18BCS090"],
    supervisor: "",
    title: "Project Planner",
  },

  {
    name: ["Ahmad Hassan Ansari , ", "Arshan Ahmad"],
    rollNo: ["18BCS041 , ", "18BCS075"],
    supervisor: "",
    title:
      "Smart Wireless Privacy Centric Doorbell Security Camera with in-built-storage.",
  },

  {
    name: ["Pradhumn Singh , ", "Aftab Khan , ", "Amber Chawla"],
    rollNo: ["18BCS029 , ", "18BCS040 , ", "18BCS058"],
    supervisor: "",
    title: "SNAPCHAT FILTER USING TRANSFER LEARNING",
  },

  {
    name: ["Naresh Pratap Singh , ", "Kartik Kaushik"],
    rollNo: ["18BCS053 , ", "18BCSO"],
    supervisor: "",
    title: "Physical contact reducing systems",
  },

  {
    name: ["Ali Shahzeb , ", "Md Jansheir Khan , ", "Saifur Rahman Khan"],
    rollNo: ["18BCS082 , ", "18BCS083 , ", "18BCS087"],
    supervisor: "",
    title: "Music Generation using RNN",
  },

  {
    name: ["Md Aatif , ", "Md Tauhid Alam"],
    rollNo: ["18BCS011 , ", "18BCS012"],
    supervisor: "",
    title: "Social Distancing Detection Using Deep Learning",
  },

  {
    name: ["Adnan Shamsi , ", "Azim Jawed"],
    rollNo: ["18BCS002 , ", "18BCS004"],
    supervisor: "",
    title:
      "VoteChain: Decentralised voting and data validation mechanism using blockchain",
  },

  {
    name: ["Gaurav Arora"],
    rollNo: ["18BCS025"],
    supervisor: "",
    title: "Placement Portal App/Website",
  },
  {
    name: ["Md Rabbani , ", "Nawaz Mian"],
    rollNo: ["18BCS078 , ", "18BCS081"],
    supervisor: "",
    title: "Video Based Reconstruction of 3D People Models",
  },

  {
    name: ["Rahil Ali Khan , ", "Paritosh Singh"],
    rollNo: ["18BCS084 , ", "18BCS085"],
    supervisor: "",
    title: "Gender and Age Recognition Android App",
  },

  {
    name: ["Mohd. Manan Gani"],
    rollNo: ["18BCS050"],
    supervisor: "",
    title: "HOUSE PRICE PREDICTION",
  },
  {
    name: ["Karishma Kathat , ", "Zoya Shams"],
    rollNo: ["18BCS009 , ", "18BCS018"],
    supervisor: "",
    title: "Sentiment Analysis on Tweets",
  },

  {
    name: ["Debal Hussain Abbas , ", "Mauwaz A. Farooqui"],
    rollNo: ["18BCS046 , ", "18BCS048"],
    supervisor: "",
    title: "Commonsense Validation Sen Making",
  },

  {
    name: ["Srijith Nair , ", "Suyash Chauhan"],
    rollNo: ["18BCS016 , ", "18BCS017"],
    supervisor: "",
    title: "Al playing Games Like Minesweeper",
  },

  {
    name: ["Mohd Arsalan , ", "Nabige Aala"],
    rollNo: ["18BCS051 , ", "18BCS080"],
    supervisor: "",
    title: "FAKE NEWS DETECTION USING MACHINE LEARNING ALGORITHMS",
  },

  {
    name: ["Faiz ur Rahman , ", "Irshad Ahmed Khan"],
    rollNo: ["18BCS024 , ", "18BCS026"],
    supervisor: "",
    title:
      "To Implement Vehicle Detection and Counting System using Subtraction Algorithm in Python.",
  },
];
const MI19 = [
  {
    name: ["Mushabah Siddiqui , ", "Momin Siddiqui"],
    rollNo: ["19BCS056 , ", "19BCS086"],
    supervisor: "",
    title: "Threat Detection using Side Channel Information",
  },

  {
    name: ["Heba Shakeel , ", "Sayeda Fatima"],
    rollNo: ["19BCS065 , ", "19BCS084"],
    supervisor: "",
    title: "Documents Classification",
  },

  {
    name: ["Siddharth Ganjoo , ", "Vikas Kaushik"],
    rollNo: ["19BCS003 , ", "19BCS038"],
    supervisor: "",
    title: "Data Entry OCR Tool",
  },

  {
    name: ["Wahiba Jawaid , ", "Syed Sarim Husain"],
    rollNo: ["19BCS036 , ", "19BCS039"],
    supervisor: "",
    title: "Answer Selection in Question Answering Model using Transformers",
  },

  {
    name: ["Almas Ansari , ", "Amir Javed , ", "Tanma Vig"],
    rollNo: ["19BCS042 , ", "19BCS044 , ", "19BCS061"],
    supervisor: "",
    title: "Transliteration from Devnagri to Roman using Neural Networks",
  },

  {
    name: ["Kushagra Tyagi , ", "Kanishka , ", "Mayank Vashishtha"],
    rollNo: ["19BCS001 , ", "19BCS067 , ", "19BCS070"],
    supervisor: "",
    title: "Prediction of CROP Success rate using Machine Learning",
  },

  {
    name: ["Ritik Vashist , ", "Kshitij Dwivedi"],
    rollNo: ["19BCS002 , ", "19BCS068"],
    supervisor: "",
    title: "Smart Bin",
  },

  {
    name: ["S.M. Arham Bilal , ", "Abha Sharma"],
    rollNo: ["19BCS079 , ", "19BCS088"],
    supervisor: "",
    title: "Old Car Price Prediction",
  },

  {
    name: ["Prakhar Vasistha , ", "Vithal Gulati"],
    rollNo: ["19BCS074 , ", "19BCS080"],
    supervisor: "",
    title: "Crowd Footfall and Anomaly Detection using Computer Vision",
  },

  {
    name: ["Yash Vinayvanshi"],
    rollNo: ["19BCS081"],
    supervisor: "",
    title: "A New Polynomial Time Heuristic for Hamiltonian Cycle Problem",
  },
  {
    name: ["Arshi Naaz , ", "Syed Sahba Hasan"],
    rollNo: ["19BCS008 , ", "19BCS035"],
    supervisor: "",
    title: "Underwater Fish Species Classifier using Deep Learning",
  },

  {
    name: ["Nishtha Gupta"],
    rollNo: ["19BCS057"],
    supervisor: "",
    title: "Sign Language Recognition using Python",
  },
  {
    name: ["Minhaj Iqbal , ", "Mohd Tabish"],
    rollNo: ["19BCS023 , ", "19BCS026"],
    supervisor: "",
    title:
      "A Framework for Predicting Employee Attrition using Machine Learnin Techniques",
  },

  {
    name: ["Avi Tyagi , ", "Prabal Sharma"],
    rollNo: ["19BCS010 , ", "19BCS073"],
    supervisor: "",
    title: "Ecommerce Store Portal",
  },

  {
    name: ["Ujjwal Tyagi , ", "Viksit Kaushik"],
    rollNo: ["19BCS062 , ", "19BCS063"],
    supervisor: "",
    title: "Teaching Board Clone",
  },

  {
    name: ["Ali Abbas , ", "Shivam Bhardwaj , ", "Tabish Khan"],
    rollNo: ["19BCS007 , ", "19BCS033 , ", "19BCS037"],
    supervisor: "",
    title: "WhatsTool App",
  },

  {
    name: ["Piyush Parag Jha , ", "Aayush Jha"],
    rollNo: ["19BCS072 , ", "19BCS087"],
    supervisor: "",
    title: "Online Job Portal",
  },

  {
    name: ["Fahad Ahmad , ", "Mohammad Hammad , ", "Mohd Humaid Ilyas"],
    rollNo: ["19BCS012 , ", "19BCS025 , ", "19BCS028"],
    supervisor: "",
    title: "Person Re-Identification in a Closed Setting using Deep Learning",
  },

  {
    name: ["Mohd Firoz , ", "Md. Takseer Reyaz"],
    rollNo: ["18BCS063 , ", "19BCS083"],
    supervisor: "",
    title: "MLOps Project for a Mask R-CNN on GCP using uWSGI Flask.",
  },

  {
    name: ["Md. Adil Khan , ", "Shashi Kalwar"],
    rollNo: ["19BCS052 , ", "19BCS064"],
    supervisor: "",
    title: "Smart Irrigation System",
  },

  {
    name: ["Mohammad Saad , ", "Shuja Hamid"],
    rollNo: ["19BCS071 , ", "19BCS085"],
    supervisor: "",
    title: "Detection of Vehicle Speed using Deep Learning and OpenCV",
  },

  {
    name: ["Asif Nazir , ", "Md. Minhaaz , ", "Shahabuddin"],
    rollNo: ["19BCS009 , ", "19BCS014 , ", "19BCS031"],
    supervisor: "",
    title: "Sign Language Detection",
  },

  {
    name: ["Azmal Shaikh , ", "Raiyan Haque"],
    rollNo: ["19BCS011 , ", "19BCS029"],
    supervisor: "",
    title: "Blockchain Integrated Music Player dApp (Alpha Audio)",
  },

  {
    name: ["Md. Shamsh Qamar , ", "Md. Zaki A. Akhtar"],
    rollNo: ["19BCS020 , ", "19BCS022"],
    supervisor: "",
    title: "Semantic Analysis on Twitter Data",
  },

  {
    name: ["Faisal Alam , ", "Mohammad Aqdas , ", "Mohd Rizwan Khan"],
    rollNo: ["19BCS046 , ", "19BCS053 , ", "19BCS055"],
    supervisor: "",
    title: "IOT Based Baggage Tracking System",
  },

  {
    name: ["Md. Asfak Sheikh , ", "Mohd Sabir"],
    rollNo: ["19BCS051 , ", "19BCS058"],
    supervisor: "",
    title: "Weather Monitoring System using 10T in Real-Time",
  },

  {
    name: ["Surya Kant , ", "Mehedi Hasan"],
    rollNo: ["19BCS060 , ", "19BCS082"],
    supervisor: "",
    title: "QR Code-Based Student Entry Authorization",
  },

  {
    name: ["Md. Saif Haider"],
    rollNo: ["19BCS019"],
    supervisor: "",
    title: "Human Posture Recognition by Transfer Learning",
  },
  {
    name: ["Wajiha Fatima , ", "Zaid Khan"],
    rollNo: ["19BCS040 , ", "19BCS041"],
    supervisor: "",
    title: "Text Detection in Images",
  },
  {
    name: ["Fariha Salman , ", "Sumaiya Fatma"],
    rollNo: ["19BCS048 , ", "19BCS059"],
    supervisor: "",
    title: "License Plate Detection",
  },

  {
    name: ["Aisha Pervin , ", "Kahkasha Khan"],
    rollNo: ["19BCS006 , ", "19BCS013"],
    supervisor: "",
    title: "Smart Surveillance",
  },
];
const MI20 = [
  {
    name: ["Fardeen Hussain , ", "Fazeel Rizvi"],
    rollNo: ["20BCS022 , ", "20BCS025"],
    supervisor: "",
    title: "Forest Fire Detection using Deep Learning",
  },

  {
    name: ["Adnan Ahmad , ", "M. Bakhti ar Ali"],
    rollNo: ["20BCS006 , ", "20BCS040"],
    supervisor: "",
    title: "Traffic Flow Optimization",
  },

  {
    name: ["Abdul Basit , ", "Adnan Ilahi"],
    rollNo: ["20BCS004 , ", "20BCS007"],
    supervisor: "",
    title: "Plant Disease Detection using Deep Learning",
  },

  {
    name: ["S K Sahim Iqbal , ", "Intesab IIyas"],
    rollNo: ["20BCS069 , ", "20BCS076"],
    supervisor: "",
    title: "Brightness Control with Hand Detection",
  },

  {
    name: ["Husain Shahid Rao , ", "Sparsh Mahajan"],
    rollNo: ["20BCS028 , ", "20BCS050"],
    supervisor: "",
    title:
      "Smartphone based retinal imaging for Diabetic Retinopathy Classification",
  },

  {
    name: ["Faizullah , ", "Bilal Sajid"],
    rollNo: ["20BCS020 , ", "20BCS057"],
    supervisor: "",
    title:
      "Next-Gen Conversational Ecommerce using SDXL: An Enhanced Stable Diffusion Synthesis",
  },

  {
    name: ["Mohammad Zohair , ", "Tirth B Dalwadi"],
    rollNo: ["20BCS038 , ", "20BCS051"],
    supervisor: "",
    title: "Emotion Discovery and Reasoning its Flip in Conversation (EDiReF)",
  },

  {
    name: ["Soban Farooq , ", "Wadiya Ali"],
    rollNo: ["20BCS049 , ", "20BCS054"],
    supervisor: "",
    title: "Image Denoising: GAN based approach",
  },

  {
    name: ["Mo Tausif , ", "Mohammad Ansar"],
    rollNo: ["20BCS034 , ", "20BCS036"],
    supervisor: "",
    title: "Facial Emotion Recognition using Machine Learning",
  },

  {
    name: ["Asif Hasan , ", "Intekhab IIyas"],
    rollNo: ["20BCS015 , ", "20BCS075"],
    supervisor: "",
    title: "License Plate Detection",
  },

  {
    name: ["Atif Ahmad , ", "Mohd Irzam Wajahat"],
    rollNo: ["20BCS016 , ", "20BCS077"],
    supervisor: "",
    title: "Stock Sentiment Analysis using News Headlines",
  },

  {
    name: ["M. Abbas Ansari , ", "Arefa"],
    rollNo: ["20BCS041 , ", "20BCS074"],
    supervisor: "",
    title:
      "Multimodal Emotion Cause Pair Extraction using Graph Neural Networks",
  },

  {
    name: ["Arshmah Saeed , ", "Erfan Naseri Taheri"],
    rollNo: ["20BCS014 , ", "20BCS083"],
    supervisor: "",
    title: "A Transformer Based Approach for Image Sentiment Analysis",
  },

  {
    name: ["Shehroz Alam , ", "M. Ehtashem Anwar"],
    rollNo: ["20BCS047 , ", "20BCS085"],
    supervisor: "",
    title: "Multimodal Hate speech Detection",
  },

  {
    name: ["Viswajeet Singh Kshitij , ", "Kumar Pandey"],
    rollNo: ["20BCS053 , ", "20BCS061"],
    supervisor: "",
    title: "E-mail Monitoring System",
  },

  {
    name: ["Kovid Sharma , ", "Gaurav Singh Yadav"],
    rollNo: ["20BCS060 , ", "20BCS084"],
    supervisor: "",
    title: "PARKIN: Improve Parking experience for our users",
  },

  {
    name: ["Harsh Raina , ", "Ankur Mishra"],
    rollNo: ["20BCS027 , ", "20BCS055"],
    supervisor: "",
    title: "Audience Feedback Generative Tool for Productive Content Creation",
  },

  {
    name: ["Md. Haider Zama , ", "Saquib Ali , ", "Mohammad Kashif"],
    rollNo: ["20BCS032 , ", "20BCS046 , ", "20BCS063"],
    supervisor: "",
    title: "Image Super Resolution",
  },

  {
    name: ["Fazle Rub , ", "Mateen Khan"],
    rollNo: ["20BCS026 , ", "20BCS030"],
    supervisor: "",
    title: "Health Discernment System",
  },

  {
    name: ["Farhan Bin Zobair , ", "Mohd Maaz"],
    rollNo: ["20BCS023 , ", "20BCS044"],
    supervisor: "",
    title: "Stock Price Prediction",
  },

  {
    name: ["Anzil Mufti , ", "Apurva Pathak"],
    rollNo: ["20BCS010 , ", "20BCS011"],
    supervisor: "",
    title: "Bird Species Recognition System",
  },

  {
    name: ["Ebadul Islam Farooqui , ", "Ijlal Ahmad"],
    rollNo: ["20BCS019 , ", "20BCS059"],
    supervisor: "",
    title: "High Resolution Image Generation",
  },

  {
    name: ["Shahbaz , ", "Sibghatullah Quadir"],
    rollNo: ["20BCS067 , ", "20BCS068"],
    supervisor: "",
    title: "Diet Recommendation System",
  },

  {
    name: ["Noor Jabeen , ", "Tasneem Rizwan"],
    rollNo: ["20BCS045 , ", "20BCS089"],
    supervisor: "",
    title: "Underwater Fish Recognition",
  },

  {
    name: ["Mohd. Gufran , ", "Abbas Haider"],
    rollNo: ["20BCS001 , ", "20BCS003"],
    supervisor: "",
    title: "Conversational Fashion Outfit Generator by GenAI",
  },

  {
    name: ["Ishtiyak Ahmad Khan , ", "Md. Abu Shama"],
    rollNo: ["20BCS029 , ", "20BCS031"],
    supervisor: "",
    title: "Text Recognition from Images using Optical Character Recogition",
  },

  {
    name: ["Md. Rashid Hussain , ", "Lal Bihari Pande"],
    rollNo: ["20BCS033 , ", "20BCS062"],
    supervisor: "",
    title: "Sustainable Urban Transformation using Eco Roofs",
  },

  {
    name: ["Aiman Fatima , ", "Anzal Husain Abidi"],
    rollNo: ["20BCS008 , ", "20BCS009"],
    supervisor: "",
    title: "GAN-driven Realistic Image Synthesis from 2D Sketches",
  },

  {
    name: ["Aadil M. Husain , ", "Vidip Ghosh"],
    rollNo: ["20BCS073 , ", "20BCS079"],
    supervisor: "",
    title: "Object Tracking in a Video",
  },

  {
    name: ["Aaliyah Beg"],
    rollNo: ["20BCS002"],
    supervisor: "",
    title:
      "Detection of Stuttering Disfluency using Automatic Speech Processin",
  },
  {
    name: ["M. Ayoob Bhat , ", "Basma Quadri"],
    rollNo: ["20BCS039 , ", "20BCS082"],
    supervisor: "",
    title: "AI software as a service",
  },

  {
    name: ["Arsh Ali Khan , ", "Nabeel M. Rizwan"],
    rollNo: ["20BCS081 , ", "20BCS087"],
    supervisor: "",
    title: "Smart Attendance System using face recognition",
  },

  {
    name: ["Ausaf Ahmad , ", "Uzma Firoz Khan"],
    rollNo: ["20BCS017 , ", "20BCS052"],
    supervisor: "",
    title: "QuACk: Question generating & Answer checking",
  },

  {
    name: ["Ravi Gown J. Reddy , ", "Vickv Gupta"],
    rollNo: ["20BCS065 , ", "20BCS070"],
    supervisor: "",
    title: "Plant Leaf Disease Detection",
  },

  {
    name: ["Faizan Choudhary , ", "Aatir Nadim"],
    rollNo: ["20BCS021 , ", "20BCS035"],
    supervisor: "",
    title:
      "Detection of Diabetic Retinopathy using Machine Learning Techniques",
  },

  {
    name: ["S M Saif , ", "Syed Ali Mujtaba"],
    rollNo: ["20BCS048 , ", "20BCS088"],
    supervisor: "",
    title:
      "Development of a Chatbot for Jamia Millia Islamia university Website",
  },

  {
    name: ["Mohd. Haider , ", "Mohd. Shadab"],
    rollNo: ["20BCS043 , ", "20BCS086"],
    supervisor: "",
    title: "Automated Skin Disease Detection",
  },

  {
    name: ["Ayush Chauhan , ", "Vira Varshney"],
    rollNo: ["20BCS018 , ", "20BCS071"],
    supervisor: "",
    title: "Drug Verification and Source Tracing using Blockchain",
  },

  {
    name: ["Himanshu K. Rajput , ", "Mohammed Haziq"],
    rollNo: ["20BCS058 , ", "20BCS064"],
    supervisor: "",
    title: "Video-based Accident Detection",
  },

  {
    name: ["Asif Khan , ", "Nasrul Huda"],
    rollNo: ["20BCS056 , ", "20BCS078"],
    supervisor: "",
    title: "Lung Cancer Detection",
  },

  {
    name: ["Fatima Shafique"],
    rollNo: ["20BCS024"],
    supervisor: "",
    title: "Classification of flower species using Machine Learning Techniques",
  },
  {
    name: ["Mohd. Adil"],
    rollNo: ["20BCS042"],
    supervisor: "",
    title:
      "Generating Speech Therapy Materials through Natural Lanuage Generation (NLG)",
  },
  {
    name: ["Arish Anwar , ", "M. Minhaj Khan"],
    rollNo: ["20BCS012 , ", "20BCS037"],
    supervisor: "",
    title: "Fruits & Vegetable Recognition System",
  },
];

const MI21 = [
  {
    name: ["Ramsha Anwar"],
    rollNo: ["21BCS066"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Investigation of the security and privacy risks of healthcare applications"
  },
  {
    name: ["Mohammad Najmuddin , ", "Nihal Ahmad"],
    rollNo: ["21BCS021 , ", "21BCS022"],
    supervisor: "Dr. Sarfaraz Masood",
    title: "Real-time hand gesture-controlled virtual mouse using Machine Learning"
  },
  {
    name: ["Palash Kachroo"],
    rollNo: ["20BCS072"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Audience Feedback Generative Tool"
  },
  {
    name: ["Mohammad Danish , ", "Mohd. Aakib"],
    rollNo: ["21BCS032 , ", "21BCS033"],
    supervisor: "Prof. Mohd. Amjad",
    title: "Music Genre Classification using Machine Learning Technique"
  },
  {
    name: ["Mohammad Basit Keen , ", "Mohd Jazib Ansari"],
    rollNo: ["21BCS060 , ", "21BCS065"],
    supervisor: "Dr. Mumtaz Ahmed",
    title: "Android online news app"
  },
  {
    name: ["Muneeb Ahmad"],
    rollNo: ["21BCS012"],
    supervisor: "Dr. Sarfaraz Masood",
    title: "Latent Diffusion-Based Image Inpainting with Multimodal Guidance"
  },
  {
    name: ["Mohammed Ayan , ", "Sania Ahmad"],
    rollNo: ["21BCS020 , ", "21BCS041"],
    supervisor: "Dr. Waseem Ahmed",
    title: "Plant Leaf Disease Detection"
  },
  {
    name: ["Fahad Ur Rehman , ", "M. Rayyan Ahmad"],
    rollNo: ["21BCS015 , ", "21BCS078"],
    supervisor: "Dr. Musheer Ahmad",
    title: "Skeleton-Based Dynamic Hand Gesture Recognition"
  },
  {
    name: ["Fayez Siddiqui"],
    rollNo: ["21BCS003"],
    supervisor: "Dr. Nihal Ahmad",
    title: "PICOLM: LLM for Edge-Devices"
  },
  {
    name: ["Vasudev Sharma , ", "Saad Zafar"],
    rollNo: ["21BCS070 , ", "21BCS082"],
    supervisor: "Mr. Jawahar Lal",
    title: "Deep Neural Network Based Vehicle Detection and Classification using YOLO Algorithm"
  },
  {
    name: ["Abhishek Choudhary , ", "M. Azharul Islam"],
    rollNo: ["21BCS071 , ", "21BCS081"],
    supervisor: "Mr. Jawahar Lal",
    title: "Plant Leaf Detection using Deep Learning Techniques"
  },
  {
    name: ["Md. Sajid Alam , ", "Mohd. Moazzam"],
    rollNo: ["21BCS053 , ", "21BCS054"],
    supervisor: "Mr. Shamim Ahmad",
    title: "Video-to-Text Conversion: Summarizing Videos with NLP"
  },
  {
    name: ["Parvez Raza Siddiqui , ", "Shabbir Zafar"],
    rollNo: ["21BCS039 , ", "21BCS042"],
    supervisor: "Dr. Shahzad Alam",
    title: "Stock Prediction using Machine Learning Techniques"
  },
  {
    name: ["Mohd. Ravish , ", "Syed Owais Nawaz"],
    rollNo: ["21BCS079 , ", "21BCS083"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Deepfake Detection using Deep Learning"
  },
  {
    name: ["Aliza Ahsan , ", "Mariyam Shaikh"],
    rollNo: ["21BCS072 , ", "21BCS076"],
    supervisor: "Prof. Mohd. Amjad",
    title: "Anomaly-Based Network Intrusion Detection System"
  },
  {
    name: ["Waqas Ahmad , ", "Mohammad Hamza"],
    rollNo: ["21BCS056 , ", "21BCS085"],
    supervisor: "Dr. Danish Raza Rizvi",
    title: "Heart Disease Prediction Using Logistic Regression"
  },
  {
    name: ["Mohammad Yasir Aftab , ", "Musharraf Khan"],
    rollNo: ["21BCS010 , ", "21BCS038"],
    supervisor: "Dr. Danish Raza Rizvi",
    title: "Used car price prediction using Machine Learning"
  },
  {
    name: ["Insharah Ayyubi , ", "Mariya Usman"],
    rollNo: ["21BCS048 , ", "21BCS058"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Automation of KYC Verification Using Deep Learning"
  },
  {
    name: ["Bushra Shahzad , ", "Tabinda Hoda"],
    rollNo: ["21BCS046 , ", "21BCS055"],
    supervisor: "Dr. Musheer Ahmad",
    title: "VoiceBridge: An Intelligent Accessibility Assistant for Seamless Communication"
  },
  {
    name: ["Aamir Suhail , ", "M. Sharif Ansari"],
    rollNo: ["21BCS044 , ", "21BCS086"],
    supervisor: "Dr. Mumtaz Ahmed",
    title: "IPL Score Prediction using Deep Learning"
  },
  {
    name: ["Badre Alam , ", "Md. Hamid"],
    rollNo: ["21BCS045 , ", "21BCS051"],
    supervisor: "Dr. Shahzad Alam",
    title: "Helmet & License Plate Detection"
  },
  {
    name: ["Faizan Ahamad , ", "Mantasha Firdous"],
    rollNo: ["21BCS047 , ", "21BCS049"],
    supervisor: "Dr. Faiyaz Ahmad",
    title: "A Speech-To-Text Enable Chatbot using Transformer Models"
  },
  {
    name: ["M. Siddiqul Haque , ", "Sohail Ahmed"],
    rollNo: ["21BCS037 , ", "21BCS043"],
    supervisor: "Mr. Firoj Ahmad",
    title: "Age and Gender Recognition by Voice using Machine Learning Techniques"
  },
  {
    name: ["M. Noman Khan , ", "Kausar Ibrahim"],
    rollNo: ["21BCS063 , ", "21BCS074"],
    supervisor: "Dr. Faiyaz Ahmad",
    title: "Sign Language Recognition using Deep Learning"
  },
  {
    name: ["Shazia Fatima , ", "Madeeha Ruhi"],
    rollNo: ["21BCS069 , ", "21BCS075"],
    supervisor: "Dr. Faiyaz Ahmad",
    title: "Diagnosing Acute Lymphoblastic Leukemia Through Microscopic Blood Images using CNN"
  },
  {
    name: ["Khushal Chadda , ", "Syed Saad Zaidi"],
    rollNo: ["21BCS005 , ", "21BCS084"],
    supervisor: "Dr. Shahzad Alam",
    title: "Real-time Player Tracking system using Machine Learning Techniques"
  },
  {
    name: ["Khatri Prashant Kumar"],
    rollNo: ["21BCS004"],
    supervisor: "Dr. Mumtaz Ahmed",
    title: "AI-Driven Personalized Travel Assistant with Real-Time Adaptability"
  },
  {
    name: ["Osama Ayub Ghazi , ", "Saim Tanweer"],
    rollNo: ["21BCS023 , ", "21BCS040"],
    supervisor: "Mr. Hannan Mansoor",
    title: "Driver drowsiness detection using Machine Learning techniques"
  },
  {
    name: ["Md. Nabeel Ashar , ", "Md. Hammad Akram"],
    rollNo: ["21BCS052 , ", "21BCS077"],
    supervisor: "Dr. Sarfaraz Masood",
    title: "OPG based Age Estimation using Deep Learning"
  },
  {
    name: ["Md. Ibrahim Akhtar , ", "M. Aman Khan"],
    rollNo: ["21BCS007 , ", "21BCS011"],
    supervisor: "Dr. M. Zeeshan Ansari",
    title: "Detection of Skin Cancer using Deep Learning Techniques"
  },
  {
    name: ["M. Danish Khan , ", "Hardik Misri"],
    rollNo: ["21BCS036 , ", "21BCS057"],
    supervisor: "Dr. M. Zeeshan Ansari",
    title: "Car Number Plate Detection and Recognition System"
  },
  {
    name: ["Meraj Ahmed , ", "Mohammad Faiz"],
    rollNo: ["21BCS030 , ", "21BCS031"],
    supervisor: "Mr. Firoj Ahmad",
    title: "CNN-Driven Image Steganography for Enhanced Data Security"
  },
  {
    name: ["Rumman Ahmad , ", "Saud Anwar"],
    rollNo: ["21BCS067 , ", "21BCS068"],
    supervisor: "Dr. Musheer Ahmad",
    title: "Enhanced Disaster Event Classification with UAV-Aided Images: Integrating CNN, LSTM, and GRU for Improved Emergency Response"
  },
  {
    name: ["Mohd. Shafaat , ", "Mohd. Abbas Rizvi"],
    rollNo: ["21BCS034 , ", "21BCS035"],
    supervisor: "Prof. Mohd. Amjad",
    title: "Machine Learning-Driven Soft Bag Creation for Personalized E-Commerce Recommendations"
  },
  {
    name: ["Md. Masleuddin , ", "Md. Kashiful Haque"],
    rollNo: ["21BCS028 , ", "21BCS029"],
    supervisor: "Dr. Waseem Ahmad",
    title: "Prediction of Book Genres by Cover and Title"
  },
  {
    name: ["Ayaan Khan , ", "Mohd. Azim"],
    rollNo: ["21BCS027 , ", "21BCS062"],
    supervisor: "Prof. Bashir Alam",
    title: "Detection of Alzheimer using MRI Images using Deep Learning Techniques"
  },
  {
    name: ["M. Arsalan M. Rizvi , ", "Hammad Faizvi"],
    rollNo: ["21BCS064 , ", "21BCS073"],
    supervisor: "Dr. Nihal Ahmad",
    title: "Automated Detection of Plagiarism in Online Assessments and Source Code"
  },
  {
    name: ["Anmol Prabha , ", "Mohammad Noor E Ain"],
    rollNo: ["21BCS001 , ", "21BCS061"],
    supervisor: "Prof. Tanvir Ahmad",
    title: "Intrusion Detection System using Machine Learning Algorithms"
  },
  {
    name: ["Ankit , ", "Modabbir"],
    rollNo: ["21BCS013 , ", "21BCS017"],
    supervisor: "Prof. Bashir Alam",
    title: "Early Detection of Alzheimer’s Disease using Machine Learning"
  },
  {
    name: ["Mohammad Asad Ali , ", "Suhel Khan"],
    rollNo: ["21BCS019 , ", "21BCS025"],
    supervisor: "Prof. Bashir Alam",
    title: "Wound Detection, Classification and Segmentation"
  },
  {
    name: ["Mirza Ibrahim Beg , ", "M. Faraz Idris Siddiqui"],
    rollNo: ["21BCS008 , ", "21BCS009"],
    supervisor: "Dr. Danish Raza Rizvi",
    title: "Artificial Intelligence in Public Transit Systems"
  },
  {
    name: ["Divyansh Thapliyal , ", "Hemant Navlani"],
    rollNo: ["21BCS002 , ", "21BCS016"],
    supervisor: "Dr. M. Zeeshan Ansari",
    title: "Textual-Video-to-Speech Interface"
  }
];


// ******************************OPTIONS********************************
const opt = [
  {
    id: 1,
    value: "2020-2024",
  },
  {
    id: 1,
    value: "2019-2023",
  },
  {
    id: 1,
    value: "2018-2022",
  },
  {
    id: 1,
    value: "2017-2021",
  },
  {
    id: 1,
    value: "2016-2020",
  },
  {
    id: 1,
    value: "2015-2019",
  },
  {
    id: 1,
    value: "2014-2018",
  },
  {
    id: 1,
    value: "2013-2017",
  },
  {
    id: 1,
    value: "2012-2016",
  },
  {
    id: 1,
    value: "2011-2015",
  },
];
// ******************************PROJECT DATA********************************
const major = [MA20, MA19, MA18, MA17, MA16, MA15, MA14, MA13, MA12, MA11];
const minor = [MI21, MI20, MI19, MI18, MI17, MI16, MI15, MI14, MI13, MI12, MI11];
const ProjectData = [image, minor, major, opt];
export default ProjectData;
