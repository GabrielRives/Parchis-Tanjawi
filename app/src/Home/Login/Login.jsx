import "./Login.scss";
import logInIcon from "/src/assets/log-in.svg";
import closer from "/src/assets/x-circle.svg";

export default function Login({}){
    return (
      <div className="logIn">
        <div className="logIn__logInHead">
          <img src={logInIcon} className="logInImage" alt="Icon Log-In" />
          <h3>Connexion à votre compte</h3>
         
        </div>
        <form className="logIn__logInBody">
          <div className="logIn__logInBody__logInContainer">
            <label className="logIn__logInBody__logInContainer__logInSubTitle">
              Pseudo
            </label>
            <input
              className="logIn__logInBody__logInContainer__logInInput"
              placeholder="The_Great_Tanjawi"
              name="nickname"
              onChange={(event) => {}}
            />
          </div>
          <div className="logIn__logInBody__logInContainer">
            <label className="logIn__logInBody__logInContainer__logInSubTitle">
              Mot de passe
            </label>
            <input
              type="password"
              className="logIn__logInBody__logInContainer__logInInput"
              placeholder="******************"
              name="password"
              onChange={(event) => {}}
            />
          </div>
          <input
            type="submit"
            className="logIn__logInBody__connect"
            value="SE CONNECTER"
            onClick={(event) => {}}
          />
        </form>
      </div>
    );
}