import ai_ml_workshop from '../images/Events/ai-ml_workshop_2024.jpeg';
import cloud2023 from '../images/Events/cloud2023.jpeg';
import Conference from '../images/Events/conference.png';
import Cybersynapse from '../images/Events/cybersynapse2024.jpeg';
import event_2020_python from '../images/Events/event_2020_python.jpg';
import Ukumi from '../images/Events/ukumi_hacakthno.jpg';
import genai24 from '../images/Events/genai24.jpg';
import eci from '../images/Events/ECI.jpg';
import omnicon from '../images/Events/omnicon 2018.jpg';
import skill_campus from '../images/Events/skill_campus_2018.jpg';
import ml_18 from '../images/Events/ml_2018.jpg';
import audi_18 from '../images/Events/audi_2018.jpg';
import Tech2023 from '../images/Events/Tech2023.png';

const y2015 = [];
const y2016= [];
const y2017 = [
  {
    image : eci,
    desc : "We are grateful to inform that the 15th National Conference of Engineering Council of India (ECI) on the Theme: ‘Preparing Engineers/Technologists for Role in Industry’ which was held on November 10, 2017 at New Delhi was very successful.",
    date: "November 10, 2017",
    venue: "AICTE Headquarter, Vasant Kunj, New Delhi",
    tagline: "15th National Conference",
    
  }
];

const y2018= [{
  image : omnicon,
  desc : "CSI-JMI organized Omnicron 2018, on 4th October, an online competitive programming contest for everyone. It was a great opportunity to showcase one’s knowledge of programming and coding skills to the world, with the additional incentive of cash prizes too. ",
  date: "04 Oct, 2018",
  venue: "online at hackerrank.com/omnicorn-2018",
  tagline: "Omnicron 2018 : Competitive coding competition",
  
},{
  image : skill_campus,
  desc : "CSI-JMI in collaboration with Skill Campus brought one of a kind work shop on App Development, on 26th October, 2018. iOS App Development is amongst the most popular skills in the industry presently. iOS apps are developed with Swift and objective C. The workshop was successful with the huge response received from the students. ",
  venue: "Room No. 328,3rd Floor, FET",
  date: "21st, 22nd November, 2018",
  tagline: "iOS App Development",
  
},{
  image : ml_18,
  desc : "CSI-JMI organized a workshop on 'Basics of Machine Learning' on 21st and 22nd November, 2018. Machine Learning is one of the most discussed and rapidly emerging topics in the field of computer science.",
  venue: "Room No. 328,3rd Floor, FET",
  date: "08, 09 Sep, 2018",
  tagline: "Workshop on Basics of Machine Learning",
},{
  
  image : audi_18,
  desc : "It was an enterprising atmosphere at Jamia Millia Islamia, with the presence of Hotmail founder Sabeer Bhatia at Dr M A Ansari Auditorium, where he was conferred with the University’s highest award ‘Imtiaz-e-Jamia’.",
  venue: "Dr M A Ansari Auditorium, Jamia Millia Islamia",
  date: "11 am | 7th February, 2018",
  tagline: "JMI Honours Hotmail Founder Sabeer Bhatia",
}];

const y2019 = [];
const y2020 = [
{
  "image": event_2020_python,
  "desc": "Join the Online Faculty Development Programme (FDP) on Python Programming, organized by Jamia Millia Islamia in collaboration with Spoken Tutorial IIT-B, from 7th to 11th September, 2020. The course covers Python fundamentals, hands-on sessions, and expert lectures from reputed institutions.",
  "date": "7th September to 11th September, 2020",
  "venue": "Online",
  "tagline": "Online Faculty Development Programme on Python Programming"
}  
];
const y2021 = [];
const y2022 = [
{
  "image": Conference,
  "desc": "International Conference on Recent Advances in Computer Science and Engineering (ICRACSE-2022), held on November 26-27, 2022, featuring prominent speakers from renowned universities and industries.",
  "date": "November 26-27, 2022",
  "venue": "Jamia Millia Islamia",
  "tagline": "ICRACSE-2022"
}
  
];
const y2023 = [
{
  "image": Tech2023,
  "desc": "The 2023-24 Tech Fest, to be held on 2nd March, is a celebration of innovation, technology, and creativity. It will feature a range of competitions, exhibitions, and workshops aimed at bringing together students and tech enthusiasts to showcase their talents and learn from industry experts. Join us for a day of hands-on experiences, cutting-edge demonstrations, and networking opportunities!",
  "date": "2nd March 2024",
  "venue": "FET Auditorium, Jamia Millia Islamia",
  "tagline": "2023-24 Tech Fest"
},
  {
  "image":ai_ml_workshop,
  "desc": "Join the 3-week Short Term Training Program on Artificial Intelligence & Machine Learning at Jamia Millia Islamia. The course covers lectures, hands-on sessions, and modules on AI, Python, Data Science, Machine Learning, and Deep Learning using Keras & Tensorflow.",
  "date": "4th July to 22nd July, 2023",
  "venue": "Department of Computer Engineering, Jamia Millia Islamia",
  "tagline": "3-Weeks Short Term Training Program on AI & ML"
},
  {
  "image": cloud2023,
  "desc": "Immerse yourself in the world of cloud computing with the Google Cloud Study Jam! This interactive workshop will introduce you to the fundamentals of Google Cloud Platform (GCP), empowering you to build scalable and innovative applications. Learn from industry experts, collaborate with fellow learners, and gain hands-on experience through engaging labs and challenges. Whether you're a beginner or have some experience, this study jam is the perfect opportunity to kickstart your cloud journey.",
  "date": "November 3, 2023",
  "venue": "Online",
  "tagline": "Google Cloud Study Jam"
}
  
];
const y2024 = [
{
  "image": ai_ml_workshop,
  "desc": "Join the 3-week Short Term Training Program on Artificial Intelligence & Machine Learning at Jamia Millia Islamia. The course covers lectures, hands-on sessions, and modules on AI, Python, Data Science, Machine Learning, and Deep Learning using Keras & Tensorflow.",
  "date": "1st July to 19th July, 2024",
  "venue": "Department of Computer Engineering, Jamia Millia Islamia",
  "tagline": "3-Weeks Short Term Training Program on AI & ML"
},
{
  "image": Ukumi,
  "desc": "The hackathon organized by Ukumi AI on August 17-18, 2024, at Jamia Millia Islamia aimed to build innovative tools for deriving meaningful insights from videos and demonstrating video understanding. Participants were encouraged to think from the perspective of YouTubers or students seeking to extract useful information from video content.",
  "date": "August 17-18, 2024",
  "venue": "Jamia Millia Islamia",
  "tagline": "Ukumi AI Hackathon"
},
  {
  "image": Cybersynapse,
  "desc": "The 2023-24 Tech Fest, to be held on 2nd March, is a celebration of innovation, technology, and creativity. It will feature a range of competitions, exhibitions, and workshops aimed at bringing together students and tech enthusiasts to showcase their talents and learn from industry experts. Join us for a day of hands-on experiences, cutting-edge demonstrations, and networking opportunities!",
  "date": "2nd March 2024",
  "venue": "FET Auditorium, Jamia Millia Islamia",
  "tagline": "CYBERSYNAPSE 2024",
  },
  {
  "image": genai24,
  "desc": "Discover the power of generative AI with Google's cutting-edge technology. Learn about the latest advancements in AI and explore real-world applications. Join us for an online event that will inspire and educate you on the future of AI.",
  "date": "April, 2024",
  "venue": "Online",
  "tagline": "Gen AI by Google"
}

  ];
export const data = {
   "2015" : y2015,
   "2016" : y2016,
    "2017" : y2017,
    "2018" : y2018,
    "2019" : y2019,
    "2020" : y2020,
    "2021" : y2021,
    "2022" : y2022,
    "2023" : y2023,
    "2024" : y2024,
}
export const options = ["2024","2023","2022","2021","2020","2019","2018","2017","2016","2015"]