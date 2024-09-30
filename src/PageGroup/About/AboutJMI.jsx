import HeroSection from "./Component/HeroSection";
import image from "./assets/aboutjmi.jpeg";

function AboutJMI() {
  return (
    <div>
      <HeroSection image={image} heading={"JAMIA MILLIA ISLAMIA"} />
      {/* <div className="max-w-screen h-32 bg-center bg-cover bg-no-repeat  md:h-72 " style={{ backgroundImage:`url(${image})`}}> */}
      {/* </div> */}
      <div className=" mx-auto text-justify my-3 max-w-[90%] rounded-3xl bg-green-light px-2 md:px-12 py-7 text-lg">
        <div className=" mb-5 border-l-[3px] border-green-yellow px-4 ">
          <span className=" text-xl text-green-deep">Jamia Millia Islamia</span>
          , established in the year 1920, is an institution originally
          established by a group of Muslim nationalists and intellectuals at
          Aligarh, Uttar Pradesh during the Khilafat and Non-Cooperate movement
          in response to Mahatma Gandhi&apos;s step to boycott
          government-supported education system. Jamia Millia Islamia became a
          Central University in the year 1988 by an act of the Indian Parliament
          which was passed on December 26, 1988
        </div>
        <div className=" my-6 px-4">
          The foundation stone of the prestigious institution was laid by
          Shaikhul Hind Maulana Mahmud Hasan, Maulana Mohammad Ali Jauhar, Hakim
          Ajmal Khan, Dr. Zakir Khan, Dr. Mukhtar Ahmad Ansari, Abdul Majeed
          Khwaja, and many other enthusiastic personalities. In the year 1925,
          its campus shifted from Aligarh to Delhi. Since then, it has been
          continuously growing, always renewing its methods and preparing itself
          from time to time to meet new needs. Loyal to its ideals, it has over
          the years, tried to enhance the physical and mental development of
          students, and has become a premier educational institute of the
          country. The story of its growth from a small institution in the
          pre-independence India to a central university located in New
          Delhi—offering integrated education from nursery to research in
          specialized areas—is a saga of dedication, conviction, and vision of a
          people who worked against all odds and nurtured it growth step by
          step.
        </div>
        <div className=" my-6 px-4">
          Jamia Millia Islamia was declared a Deemed University under Section 2
          of the University Grants Commission(UGC) Act in 1962. In 1981, the
          faculties of Humanities and Languages, Natural Sciences, Social
          Science, and the State Resource Centre were founded. In 1983, it
          started the Mass Communication Research Centre and the Centre for
          Coaching and Career Planning. In 1985, it established the Faculty of
          Engineering & Technology and the University Computer Centre. Academic
          Staff College and the Academy of Third World Studies followed in 1987
          and 1988. By a Special Act of the Parliament, Jamia Millia Islamia was
          made a central university of India in December 1988. In the list of
          the Faculties, i.e. Education, Humanities & Languages, Natural
          Sciences, Social Sciences. Engineering & Technology, one more Faculty
          - Faculty of Law, was added in 1989. Many new courses and programmes
          at UG and PG levels have since been added.
        </div>
        <div className=" mt-6 border-r-[3px] border-green-yellow px-4">
          Besides its nine faculties, Jamia has a number of centers of learning
          and research, like AJK-Mass Communication Research Centre (MCRC),
          Academy of International Studies, etc. Jamia is also marching ahead in
          the field of Information Technology (IT). It offers various
          undergraduate and postgraduate IT courses. Apart from this, the Jamia
          has a campus-wide network which connects a large number of its
          departments and offices.
        </div>
      </div>
    </div>
  );
}
export default AboutJMI;
