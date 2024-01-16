import React, {useState} from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Navbar from '../../Components/Navigation/Navbar';
import Image from "next/image";
import Link from "next/link";
import inputValidation from "./contactUsFormValidate";

const ContactUs: NextPage = () => {

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
                width: 80%;
                height: 250px;
                margin-left: auto;
                margin-right: auto;
                transition: transform 0.5s ease-in-out;
            }

            .ImgContainer:hover {
                transform: scale(1.04);
            }

            .container1 {
                border-radius: 3rem;
                margin: 0 auto;
                background-color: white;
                box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
                padding: 3rem;
                width: 70%;
                height: 70%;
                transition: transform 0.5s ease-in-out;
            }

            .container1:hover {
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                transform: scale(1.015);
            }

            input[type=text], textarea {
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
                margin-top: 6px;
                margin-bottom: 16px;
                resize: vertical;
            }

            input[type=submit] {
                background-color: #e7ac9a;
                color: white;
                padding: 12px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }

            input[type=submit]:hover {
                opacity: 80%;
            }

            .align-center {
                display: flex;
                align-items: center;
                justify-content: center;
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

            .margin-left {
                margin-left: 10px;
            }

            .margin-left2 {
                margin-left: 20px;
            }
            `}</style>
            <Navbar>
            </Navbar>
            <div className={styles.container}>
                <Head>
                    <title>Contact Us</title>
                    <meta name="description" content="Contact Us Page" />
                    <link rel="icon" href="/bg/logo icon.png" />
                </Head>
            </div>

            <main className={`${styles.main}`}>
            <br></br>
            <>
                <div>
                    <div className="container">
                        <div className="ImgContainer p-4">
                            <Image src="/bg/contactus.png" alt="contactUs Title" className="h-auto w-100% mx-auto" width={4434} height={615}/>
                        </div>
                        <div className="containerDiv picture">
                            <Image src="/Jessica2.jpg" alt="Jessica2 Profile Picture" className="rounded-full h-auto w-auto" width={670} height={797} />
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="container1">
                            <p className="headerFont">Contact Us Form&nbsp;&nbsp;</p>
                            <form method = "POST" action="/ContactUs/action_page.php" name="ContactUs" className="margin-left">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" name="fullName" placeholder="Name"/>
                                <div id="name_error" className="val_error"></div>
                                <label htmlFor="user_message">Your Queries</label>
                                <textarea id="user_message" name="user_message" placeholder="Please Write Your Queries Here..." style={{height:'200px'}}></textarea>
                                <div id="user_message_error" className="val_error"></div>
                                <br></br>
                                <div className="align-center">
                                    <input type="submit" value="Submit" name="ContactUs"/>
                                </div>
                            </form>
                        </div>
                        <a href="mailto:jessicachan292003@gmail.com">
                            <div className="containerDiv container1 p-4">
                                <p className="headerFont">Send Email&nbsp;&nbsp;</p>
                                <li className="margin-left">jessicachan292003@gmail.com</li>
                            </div>
                        </a>
                        <a href="tel:+60176944154">
                            <div className="containerDiv container1 p-4">
                                <p className="headerFont">Phone Number&nbsp;&nbsp;</p>
                                <li className="margin-left">+60176944154</li>
                                <br></br>
                            </div>
                        </a>
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


export default ContactUs;

