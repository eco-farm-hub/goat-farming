import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/Homepage/Features";
import Heading from "@theme/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.css";

const images = [
  {
    src: "/slide-images/img-1.jpg",
    title: "Welcome to Goat Farming",
    subtitle: "Learn and master the art of sustainable goat farming.",
  },
  {
    src: "/slide-images/img-2.jpg",
    title: "Healthy Herds, Prosperous Farms",
    subtitle:
      "Best practices for raising healthy goats and boosting productivity.",
  },
  {
    src: "/slide-images/img-3.jpg",
    title: "Your Guide to Goat Farming Success",
    subtitle:
      "Discover tips, guides, and resources to grow your goat farming business.",
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <header className={styles.heroBanner}>
      <Slider {...settings} className="relative h-full w-full">
        {images.map((image, index) => (
          <div key={index} className="relative h-full w-full">
            {/* Background Image */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 mt-16">
              <Heading as="h1" className="text-3xl md:text-5xl lg:text-6xl font-bold">
                {image.title}
              </Heading>
              <p className="mt-4 text-sm md:text-lg lg:text-2xl max-w-2xl">
                {image.subtitle}
              </p>
              <div className="m-8 mb-24">
                <Link
                  className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg md:text-xl transition-transform transform hover:scale-105 duration-300 ease-in-out hover:text-white hover:bg-green-700 hover:no-underline"
                  to="/docs/intro"
                >
                  Goat Farming Guide - 5min ⏱️
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
