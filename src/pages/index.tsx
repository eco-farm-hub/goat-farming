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
    src: "/goat-farming/slide-images/img-1.jpg",
    title: "Welcome to Goat Farming",
    subtitle: "Learn and master the art of sustainable goat farming.",
  },
  {
    src: "/goat-farming/slide-images/img-2.jpg",
    title: "Healthy Herds, Prosperous Farms",
    subtitle:
      "Best practices for raising healthy goats and boosting productivity.",
  },
  {
    src: "/goat-farming/slide-images/img-3.jpg",
    title: "Your Guide to Goat Farming Success",
    subtitle:
      "Discover tips, guides, and resources to grow your goat farming business.",
  },
  {
    src: "/goat-farming/slide-images/img-4.jpg",
    title: "Sustainable Goat Farming",
    subtitle:
      "Learn how to raise goats in a sustainable and eco-friendly way.",
  },
  {
    src: "/goat-farming/slide-images/img-5.jpg",
    title: "Goat Farming for Beginners",
    subtitle:
      "Start your goat farming journey with our beginner-friendly guides.",
  },
  {
    src: "/goat-farming/slide-images/img-6.jpg",
    title: "Profitable Goat Farming",
    subtitle: "Maximize profits with our expert tips and strategies.",
  },
  {
    src: "/goat-farming/slide-images/img-7.jpg",
    title: "Goat Farming Business",
    subtitle:
      "Grow your goat farming business with our expert guides and resources.",
  },
  {
    src: "/goat-farming/slide-images/img-8.jpg",
    title: "Goat Farming Resources",
    subtitle:
      "Find the best resources and tools to help you succeed in goat farming.",
  },
  {
    src: "/goat-farming/slide-images/img-9.jpg",
    title: "Goat Farming Tips and Tricks",
    subtitle:
      "Discover the best tips and tricks to make your goat farming journey a success.",
  },
  {
    src: "/goat-farming/slide-images/img-10.jpg",
    title: "Goat Farming for Profit",
    subtitle:
      "Learn how to turn your goat farming hobby into a profitable business.",
  },
  {
    src: "/goat-farming/slide-images/img-11.jpg",
    title: "Goat Farming Guide",
    subtitle:
      "Get started with our comprehensive goat farming guide for beginners.",
  },
  {
    src: "/goat-farming/slide-images/img-12.jpg",
    title: "Goat Farming Made Easy",
    subtitle:
      "Simplify your goat farming journey with our easy-to-follow guides and resources.",
  },
  {
    src: "/goat-farming/slide-images/img-13.jpg",
    title: "Goat Farming Techniques",
    subtitle:
      "Master the best goat farming techniques to boost productivity and profits.",
  },
  {
    src: "/goat-farming/slide-images/img-14.jpg",
    title: "Goat Farming Strategies",
    subtitle:
      "Discover the best strategies to grow your goat farming business and achieve success.",
  },
  {
    src: "/goat-farming/slide-images/img-15.jpg",
    title: "Goat Farming Success",
    subtitle:
      "Learn how to succeed in goat farming with our expert tips and resources.",
  },
];

function HomepageHeader() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    arrows: false,
  };

  return (
    <header className={styles.heroBanner}>
      <Slider {...settings} className="relative h-full w-full">
        {images.map((image, index) => (
          <div key={index} className="relative h-full w-full">
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{ 
                background: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "cover",
              }}
            >              
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
