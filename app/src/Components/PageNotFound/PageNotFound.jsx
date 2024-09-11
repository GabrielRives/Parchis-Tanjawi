import "./PageNotFound.scss";
import background from "/src/assets/backgroundSite.jpg";

export default function PageNotFound() {
  return (
    <>
      <div className="pageNotFound">
        <img src={background} className="pageNotFound__picture" />
        <div className="pageNotFound__dialogueBox">
          <p className="pageNotFound__dialogueBox__text">
            La page recherchée a fait triple 6 et a passé son tour...
          </p>
          
        </div>
      </div>
    </>
  );
}
