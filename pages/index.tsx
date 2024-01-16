import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../Components/Navigation/Navbar';
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg">
      <style jsx>{`
        .bg {
          background-image: url('/bg/bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .ImgContainer {
          width: 85%;
          height: auto;
          margin-left: auto;
          margin-right: auto;
          transition: transform 0.5s ease-in-out;
        }

        .ImgContainer:hover {
          transform: scale(1.04);
        }

        .roadMap{
          display: flex;
          justify-content: center;
          item-align: center;
          margin: auto;
          width: 85%;
          height: 100%;
          transition: transform 0.5s ease-in-out;
        }

        .roadMap:hover {
          transform: scale(1.04);
        }

        .extracurricular {
          margin: auto;
          width: 90%;
          height: 100%;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.5s ease-in-out
        }

        .extracurricular:hover {
          transform: scale(1.04);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.23);
        }

        .container1 {
          border-radius: 3rem;
          margin: 0 auto;
          background-color: white;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
          padding: 3rem;
          width: 70%;
          height: 70%;
          margin: 0 auto;
          transition: transform 0.5s ease-in-out;
        }

        .container1:hover {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          transform: scale(1.015);
        }

        .picture {
          background-color: transparent;
          width: 330px;
          height: 330px;
          border-radius: 50%;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          transition: transform 0.5s ease-in-out;
        }

        .picture:hover {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          transform: scale(1.03);
        }

        .containerDiv {
          margin-top: 40px;
        }

        .containerContact {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 25px;
          width: 100%;
          margin: 25px 0 70px 0;
          background-color: transparent;
        }

        .containerContact2 {
          display: inline-block;
          transition: transform 0.3s ease-in-out;
          width: auto;
          margin: 0 20px 0 50px;
          align-items: center;
          height: 10%;
        }

        .containerContact2:hover {
          transform: scale(1.10);
          box-shadow: 2px 5px 20px rgba(128, 0, 64, 0.6);
          border-radius: 50%;
        }

        .iconContact {
          height: 100%;
          display: inline-block;
        }

        @font-face{
          font-family: "Old English Text MT";
          src: url("f3258385782c4c96aa24fe8b5d5f9782.eot");
          src: url("f3258385782c4c96aa24fe8b5d5f9782.eot?#iefix")format("embedded-opentype"),
              url("f3258385782c4c96aa24fe8b5d5f9782.woff")format("woff"),
              url("f3258385782c4c96aa24fe8b5d5f9782.woff2")format("woff2"),
              url("f3258385782c4c96aa24fe8b5d5f9782.ttf")format("truetype"),
              url("f3258385782c4c96aa24fe8b5d5f9782.svg#Old English Text MT")format("svg");
          font-style:normal;
          font-weight: normal;
          font-display:swap;
        }

        .headerFont {
          font-size: 27px;
          color: white;
          text-shadow: 2px 2px 4px rgba(128, 0, 64, 1);
          font-family: "Old English Text MT";
          transition: transform 0.5s ease-in-out;
          padding-right: 1.25rem;
          padding-bottom: 0.8rem;
          text-align: left;
        }

        .container1:hover .headerFont{
          text-shadow: 2px 2px 4px rgba(128, 0, 64, 1);
          transform: scale(1.05);
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        .justify {
          text-align: justify;
        }

        .header1 {
          font-size: 17px;
          font-weight: bold;
          padding-bottom: 4px;
          padding-top: 4px;
        }

        .margin-left {
          margin-left: 10px;
        }

        .margin-left2 {
          margin-left: 20px;
        }

        .margin-left3 {
          margin-left: 40px;
        }

      `}</style>
      <Navbar>
      </Navbar>
      <div className={styles.container}>
          <Head>
            <title>Jessica Portfolio</title>
            <meta name="description" content="Welcome to My Portfolio" />
            <link rel="icon" href="/bg/logo icon.png" />
            <link href="https://db.onlinewebfonts.com/c/f3258385782c4c96aa24fe8b5d5f9782?family=Old+English+Text+MT" rel="stylesheet"></link>
          </Head>
      </div>

      <main className={`${styles.main}`}>
        <>
          <div>
            <div className="container">
              <div className="ImgContainer p-4">
                <Image src="/bg/name.png" alt="Name Jessica" className="h-auto w-100% mx-auto" width={4434} height={615}/>
              </div>
              <div className="containerContact">
                <div className="containerContact2">
                  <a href="https://www.instagram.com/jesschan2929?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"><Image src="/images/Contacts/instagram1.png" alt="Instagram" className="iconContact" width={60} height={60}></Image></a>
                </div>
                <div className="containerContact2">
                  <a href="https://www.facebook.com/profile.php?id=100084389784003&sk=about"><Image src="/images/Contacts/facebook1.png" alt="Facebook" className="iconContact" width={60} height={60}></Image></a>
                </div>
                <div className="containerContact2">
                  <a href="https://www.linkedin.com/in/jessica-jessica-b2910224b/"><Image src="/images/Contacts/linkedin1.png" alt="LinkedIn" className="iconContact" width={60} height={60}></Image></a>
                </div>
              </div>
              <div className="containerDiv picture">
                  <Image src="/Jessica2.jpg" alt="Jessica2 Profile Picture" className="rounded-full h-auto w-auto" width={670} height={797} />
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="containerDiv container1">
                <p className="headerFont">About Me&nbsp;&nbsp;</p>
                <p className="justify">
                    Hey there! I&apos;m Jessica, born in Indonesia and now in my final year of studying BSc (Hons) Information Technology
                    specifically in Computer Networking and Security at Sunway University. I&apos;ve been in Malaysia since April 2021, starting
                    this awesome journey after finishing my foundation year. Beyond just learning about IT, computer networking, and security,
                    I&apos;ve also made some really great friends. I&apos;m super passionate about technology and love getting into cool projects, teaming
                    up with other tech enthusiasts, and whenever I can, exploring new places. Every day is a chance to learn, grow, and make
                    awesome memories. I&apos;m really excited about what&apos;s coming next in this incredible adventure! 🚀🌏
                </p>
              </div>

              <div className="containerDiv roadMap">
                <Image src="/images/EDUCATION AND ACHIEVEMENTS.png" alt="Education and Achievement RoadMap" width={800} height={2000}></Image>
              </div>

              <div className="containerDiv container1 p-4">
                <p className="headerFont">Skills&nbsp;&nbsp;</p>
                <li className="justify">Skilled in Wireshark for Network and Packet Analyzer.</li>
                <li className="justify">Proficient user of Windows and Linux Operating System such as Kali Linux, Ubuntu, etc. </li>
                <li className="justify">Expert in using Virtual Machines like VMware, and Virtual Box.</li>
                <li className="justify">Designed, and implemented a network topology using cisco packet tracer.</li>
                <li className="justify">Expertise and knowledge in Network and Computer Security, including detection tools.</li>
                <li className="justify">Configured devices such as a router, switch, and PC using cisco packet tracer.</li>
                <li className="justify">Strong in HTML, CSS, JavaScript, PHP, SQL, PhpMyAdmin, Python, Java, Object Oriented Programming (OOP) and XAMPP</li>
                <li className="justify">Proficient user of Dr. Java, Eclipse, and Visual Studio Code</li>
                <li className="justify">Designed a business-related database using SQL Oracle APEX</li>
                <li className="justify">Proficient user of Microsoft Word, Excel, PowerPoint, </li>
                <li className="justify">Highly experienced in Adobe Photoshop, Canva, Adobe Illustrator, Inkscape, Gravit designer, Pixlr, and Davinci Resolve</li>
                <li className="justify">Able to adapt, learn quickly, and eager to learn.</li>
                <li className="justify">A good team player who is organized and can also work independently.</li>
              </div>

              <div className="containerDiv container1 p-4">
                <p className="headerFont">Language&nbsp;&nbsp;</p>
                <li>English</li>
                <li>Bahasa Malay</li>
                <li>Mandarin</li>
                <li>Bahasa Indonesia</li>
                <li>Chinese (Hokkien or Fujian)</li>
              </div>

              <div className="containerDiv extracurricular">
                <Image src="/images/Extracurricular Activities.jpg" alt="Extracurricular Activities" width={2000} height={800}></Image>
              </div>
            </div>
          </div>
        </>
      </main>

      <footer className={styles.footer}>
          <Link href="/">
              <Image
              src="/bg/name logo no bg2.png"
              alt="Logo"
              width={213}
              height={123}
              className="relative mx-auto w-1/6 h-auto"
              />
          </Link>
      </footer>
    </div>
  )
}

export default Home
