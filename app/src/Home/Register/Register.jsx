import "./Register.scss";
import closer from "/src/assets/x-circle.svg";

export default function Register({}) {
  return (
    <div className="register">
      <div className="register__title">Création de votre compte joueur</div>

    

      <form className="register__form">
        <div className="register__form__left">
          {/* Surname input */}

          <div className="input__container">
            <label htmlFor="register__surname">Nom</label>
            <input
              id="register__surname"
              type="text"
              name="surname"
              onChange={(event) => {}}
            />
          </div>

          {/* Name input */}

          <div className="input__container">
            <label htmlFor="register__name">Prénom</label>
            <input
              id="register__name"
              value={name}
              type="text"
              name="name"
              onChange={(event) => {}}
            />
          </div>

          {/* Birthdate input */}

          <div className="input__container">
            <label htmlFor="register__birthdate">Date de naissance</label>
            <input
              id="register__birthdate"
              type="date"
              name="birthdate"
              onChange={(event) => {}}
            />
          </div>

          {/* Submit button */}
          <input type="submit" value="Finaliser" />
        </div>

        <div className="register__form__right">
          {/* Nickname input */}

          <div className="input__container">
            <label htmlFor="register__id">Votre pseudo</label>
            <input
              id="register__id"
              type="text"
              name="id"
              onChange={(event) => {}}
            />
          </div>

          {/* Email input */}

          <div className="input__container">
            <label htmlFor="register__email">Email</label>
            <input
              id="register__email"
              type="email"
              name="email"
              onChange={(event) => {}}
            />
          </div>

          {/* Password input */}

          <div className="input__container">
            <label htmlFor="register__password">Mot de passe</label>
            <input
              id="register__password"
              type="password"
              name="password"
              onChange={(event) => {}}
            />
          </div>

          {/* Verification password input */}

          <div className="input__container">
            <label htmlFor="register__verificationPassword">
              Confirmation MDP
            </label>
            <input
              id="register__verificationPassword"
              type="password"
              name="verificationPassword"
              onChange={(event) => {}}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
