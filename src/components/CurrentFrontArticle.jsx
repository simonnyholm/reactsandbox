import CurrentFrontHeader from "./CurrentFrontHeader";
import CurrentFrontP from "./CurrentFrontP";
import FunInput from "./FunInput";

const CurrentFrontArticle = () => {
  return (
    <article>
      <CurrentFrontHeader title="Her sker der noget nyt" />
      <CurrentFrontP content="Alle er glade, når der er masser af chokolade. Alle er glade, når der er masser af chokolade. Alle er glade, når der er masser af chokolade. " />
      <FunInput />
    </article>
  );
};

export default CurrentFrontArticle;
