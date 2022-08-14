import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import mainImage from "../public/mainPage.svg";
import footer from "../public/mainPage_footer.svg";
const Home: NextPage = () => {
  return (
    <div className={""}>
      <Head>
        <title>Galaxy timer</title>
        <meta
          name="description"
          content="Pomodoro timer online aesthetic space"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"home"}>
        <div className="home_title">
          <div className="home_h1">
            <h1 className="home_h1_1">Gal</h1>
            <h1 className="home_h1_2">axy</h1>
          </div>
          <h2 className="home_h2">time tracker</h2>
        </div>
        <div className="home_container">
          <div className="home_whitebg"></div>
          <div className="home_mainImageContainer">
            <Image
              src={mainImage}
              alt=""
              className="home_mainImage"
              layout="responsive"
            />
          </div>
        </div>
        <footer className={"home_footer"}>
          <Link href="timer">
            <a className="home_footerButton">start focus</a>
          </Link>
          <div className="home_footerImageContainer">
            <Image src={footer} alt="" className="home_footerImage" />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
