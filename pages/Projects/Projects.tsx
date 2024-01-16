import React from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Navbar from '../../Components/Navigation/Navbar';
import Image from "next/image";
import Link from "next/link";
import YouTubeVideo from '../../Youtube/YouTubeVideo';

const Projects: NextPage = () => {
    const youtubeVideoId = "Dt9vMojk-Cg";
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
            height: 250px;
            margin-left: auto;
            margin-right: auto;
            transition: transform 0.5s ease-in-out;
            }

            .ImgContainer:hover {
            transform: scale(1.04);
            }

            .containerVid {
                width: 100%;
                height: 100%;
            }

            .containerVid2 {
                border-radius: 3rem;
                margin: 0 auto;
                background-color: white;
                box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
                padding: 20px;
                width: 70%;
                height: 100%;
                transition: transform 0.5s ease-in-out;
            }

            .containerVid2:hover {
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                transform: scale(1.015);
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

            .wrapper {
                box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
                background-color: white;
                background-size: 100%;
                border-radius: 3rem;
                margin: 0 auto;
                width: 70%;
                height: 150%;
            }

            .slideshow {
                height: 80vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .slider {
                width: 100%;
                padding: 20px;
                border-radius: 10px;
                overflow: hidden;
            }

            .slides {
                width: 330%;
                height: 500px;
                display: flex;
            }

            .slides input {
                display: none;
            }

            .slide {
                width: 20%;
                transition: 2s;
                overflow: hidden;
            }

            .slide img {
                width: 100%;
            }

            .navigation-manual {
                position: absolute;
                width: 40%;
                margin-top: 25px;
                display: flex;
                justify-content: right;
            }

            .manual {
                border: 2px solid rgba(128, 0, 64, 1);
                padding: 5px;
                border-radius: 10px;
                cursor: pointer;
            }

            .manual:not(:last-child) {
                margin-right: 40px;
            }

            .manual:hover {
                background-color: rgba(128, 0, 64, 1);
            }

            #btn1:checked ~ .first {
                margin-left: 7%;
            }

            #btn2:checked ~ .first {
                margin-left: -8%;
            }

            #btn3:checked ~ .first {
                margin-left: -33%;
            }

            #btn4:checked ~ .first {
                margin-left: -55%;
            }

            #btn5:checked ~ .first {
                margin-left: -75%;
            }

            #btn6:checked ~ .first {
                margin-left: -95%;
            }

            #btn7:checked ~ .first {
                margin-left: -115%;
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

            .header1 {
            font-size: 17px;
            font-weight: bold;
            padding-bottom: 4px;
            padding-top: 4px;
            }

            .justify {
                text-align: justify;
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

            .newsLink {
                color: black;
                text-decoration: none;
                transition: color 0.3s, text-decoration 0.3s;
            }

            .newsLink:hover {
                color: blue;
                text-decoration: underline;
            }

            @media only screen and (max-width: 1000px) {
                .slideshow {
                    margin: 0;
                    padding: 0;
                    height: 280px;
                }

                .slides {
                    width: 350%;
                    height: auto;
                }

                .slide {
                    height: 200px;
                    transition: 2s;
                    overflow: hidden;
                }

                .navigation-manual {
                    position: absolute;
                    width: 20%;
                    margin-top: 10px;
                    display: flex;
                    margin-left: 25px;
                    justify-content: left;
                }
            }
        `}</style>
        <Navbar>
        </Navbar>
        <div className={styles.container}>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Projects Page" />
                <link rel="icon" href="/bg/logo icon.png" />
            </Head>
        </div>

        <main className={`${styles.main}`}>
            <br></br>
            <>
            <div>
                <div className="container">
                <div className="ImgContainer p-4">
                    <Image src="/bg/projects.png" alt="Projects Title" className="h-auto w-100% mx-auto" width={4434} height={615}/>
                </div>
                <div className="containerDiv wrapper">
                    <div className="slideshow">
                        <div className="slider">
                            <div className="slides">
                                <input type = "radio" name = "radioButton" id = "btn1" />
                                <input type = "radio" name = "radioButton" id = "btn2" />
                                <input type = "radio" name = "radioButton" id = "btn3" />
                                <input type = "radio" name = "radioButton" id = "btn4" />
                                <input type = "radio" name = "radioButton" id = "btn5" />
                                <input type = "radio" name = "radioButton" id = "btn6" />
                                <input type = "radio" name = "radioButton" id = "btn7" />

                                <div className="slide first p-2">
                                    <Image src="/projects/carousel/1.jpg" alt="Flying VTOL Drone" width={1280} height={960} />
                                </div>

                                <div className="slide p-2">
                                    <Image src="/projects/carousel/5.jpg" alt="Preparation before flying VTOL 2" width={1280} height={960} />
                                </div>

                                <div className="slide p-2">
                                    <Image src="/projects/carousel/7.jpg" alt="Preparation before flying VTOL 3" width={1280} height={960} />
                                </div>

                                <div className="slide p-2">
                                    <Image src="/projects/carousel/2.JPG" alt="Group Photo infront Sarawak Forestry Corporation" width={1333} height={1000} />
                                </div>

                                <div className="slide p-2">
                                    <Image src="/projects/carousel/3.jpg" alt="Group Photo before going to the boat" width={715} height={536} />
                                </div>

                                <div className="slide p-2">
                                    <Image src="/projects/carousel/4.jpg" alt="Group Photo during MOU Signing Ceremony" width={1280} height={960} />
                                </div>

                                <div className="slide p-2">
                                    <Image src="/projects/carousel/6.jpeg" alt="Group Photo infront Sunway University" width={1168} height={876} />
                                </div>
                            </div>
                            <div className="navigation-manual">
                                <label htmlFor = "btn1" className="manual"></label>
                                <label htmlFor = "btn2" className="manual"></label>
                                <label htmlFor = "btn3" className="manual"></label>
                                <label htmlFor = "btn4" className="manual"></label>
                                <label htmlFor = "btn5" className="manual"></label>
                                <label htmlFor = "btn6" className="manual"></label>
                                <label htmlFor = "btn7" className="manual"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="containerDiv container1 p-4">
                    <p className="headerFont">Projects&nbsp;&nbsp;</p>
                    <p className="header1 justify">Jan 2023 – Present (Ends in February 2024)</p>
                    <p className="margin-left justify"><strong>ICT Pilot Projects for Rural Areas (Sunway Cat II Japan APT)</strong></p>
                    <li className="margin-left2 justify">Sunway HUMAC RC, Level 3, Sunway University, Bandar Sunway</li>
                    <li className="margin-left3 justify">A student leader that manages the team, team schedule and activities.</li>
                    <li className="margin-left3 justify">Conducts, participates, and manages workshops, meetings, and trips</li>
                    <li className="margin-left3 justify">Research on Kuching’s Mangrove trees (Kuching Wetland National Park) using various types of drones, hyperspectral along with data processing such as stitching, annotation and image processing.</li>
                    <br></br>
                    <p className="header1 justify">May 2023 - July 2023</p>
                    <p className="margin-left justify"><strong>Network and System Administrator project</strong></p>
                    <li className="margin-left2 justify">Configured a Linux based local network that consist of Web Server, DNS Server, and DHCP Server</li>
                    <br></br>
                    <p className="header1 justify">Apr 2022 – Jun 2022</p>
                    <p className="margin-left justify"><strong>Web Development</strong></p>
                    <li className="margin-left2 justify">Published, implemented, and designed a website using web development skills such as HTML, CSS, JavaScript, PHP, and SQL (3-tier development).</li>
                    <br></br>
                    <p className="header1 justify">Aug 2021 – Dec 2021</p>
                    <p className="margin-left justify"><strong>Python-based project</strong></p>
                    <li className="margin-left2">Mastermind Game</li>
                    <br></br>
                    <p className="header1 justify">Sep 2020 – June 2021</p>
                    <p className="margin-left justify"><strong>Java-based projects</strong></p>
                    <li className="margin-left2 justify">Go Fish Game</li>
                    <li className="margin-left2 justify">Connect Four Game</li>
                    <li className="margin-left2 justify">Cashier System</li>
                    <li className="margin-left2 justify">Student Management System</li>
                    <li className="margin-left2 justify">Library System </li>
                    <br></br>
                    <p className="header1 justify">Sep 2020 – Oct 2020</p>
                    <p className="margin-left justify"><strong>Voluntary Work</strong></p>
                    <li className="margin-left2 justify">Miao Ling, Maha Vihara Duta Maitreya Monastery, Batam City, Indonesia</li>
                    <li className="margin-left3 justify">Assisted the vihara personnel with their work, cleaned the temple, and participated in the temple events.</li>
                </div>

                <div className="containerDiv containerVid2 p-4">
                    <p className="headerFont">Sunway Cat 2 Japan APT Video&nbsp;&nbsp;</p>
                    <br></br>
                    <div className="containerVid">
                        <YouTubeVideo videoId={youtubeVideoId} />
                    </div>
                    <br></br>
                </div>

                <div className="containerDiv container1 p-4">
                    <p className="headerFont">News Article Link about Sunway Cat 2 Japan APT&nbsp;&nbsp;</p>
                    <li><a href="https://www.newsarawaktribune.com.my/drones-protect-forests-from-threats/" className="newsLink">newsarawaktribune</a></li>
                    <li><a href="https://dayakdaily.com/swak-forestry-corporation-sunway-university-ink-mou-on-mangrove-forest-management-using-drones/"  className="newsLink">dayakdaily</a></li>
                    <li><a href="https://opengovasia.com/advancing-conservation-through-technology/"  className="newsLink">opengovasia</a></li>
                    <li><a href="https://sunwayuniversity.edu.my/news/2023/sunway-university-partners-japanese-companies-and-sarawak-forestry-corporation-mangrove"  className="newsLink">sunwayuniversity</a></li>
                    <li><a href="https://www.disruptr.com.my/malaysia-japan-collaborate-in-sarawak-mangrove-forest-conservation-and-sustainable-management/"  className="newsLink">disruptr</a></li>
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

export default Projects;