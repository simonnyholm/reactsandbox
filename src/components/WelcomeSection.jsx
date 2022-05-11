import CurrentFrontArticle from "./CurrentFrontArticle.jsx";
import IntroArticle from "./IntroArticle.jsx";
import WelcomeImage from "./WelcomeImage.jsx";

const WelcomeSection = () => {
  return (
    <section>
      <IntroArticle />
      <WelcomeImage/>
      <CurrentFrontArticle/>
    </section>
  );
};

export default WelcomeSection;
