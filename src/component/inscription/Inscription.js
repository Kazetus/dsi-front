import { useState } from "react";

export default function Inscription() {
    
    const validUsername = new RegExp("^[a-zA-Z]{1,1}[a-zA-Z0-9]{3,23}$");
    const validMail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
    const validTel = new RegExp("^(\\s*0\\s*[1-9]\\s*\\.?\\s*([\\s.-]*\\d\\s*){8})$");
    const validPassword = new RegExp("(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.n])(?=.*[A-Z])(?=.*[a-z]).*$");

    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidMail, setIsValidMail] = useState(true);
    const [isValidTel, setIsValidTel] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
    
    function checkForm(el) {
        let control = "";
        switch(el.id) {
            case "username" :
                control = validUsername;
                break;
            case "email" :
                control = validMail;
                break;
            case "tel" :
                control = validTel;
                break;
            case "password" :
                control = validPassword;
                break;
            case "confirmPassword" :
                control = document.getElementById("password").value;
                break;
            default :
            break;
        }
        if(el.value.match(control) !== null || control === el.value) {
            console.log(el.value);
            validateInput(el.id);
            document.getElementById(el.id).classList.remove("is-invalid");
        } else {
            devalidateInput(el.id);
            document.getElementById(el.id).classList.add("is-invalid");
        }
    }
    function validateInput(id) {
        switch(id) {
            case "username" :
                setIsValidUsername(true);
                break;
            case "email" :
                setIsValidMail(true);
                break;
            case "tel" :
                setIsValidTel(true);
                break;
            case "password" :
                setIsValidPassword(true);
                break;
            case "confirmPassword" :
                setIsValidConfirmPassword(true);
                break;
            default :
            break;
        }
    }
    function devalidateInput(id) {
        switch(id) {
            case "username" :
                setIsValidUsername(false);
                break;
            case "email" :
                setIsValidMail(false);
                break;
            case "tel" :
                setIsValidTel(false);
                break;
            case "password" :
                setIsValidPassword(false);
                break;
            case "confirmPassword" :
                setIsValidConfirmPassword(false);
                break;
            default :
            break;
        }
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Inscription</h2>
                    <form method="POST" action="/account">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="username">Nom d'utilisateur :</label>
                            <input className="form-control" onChange={(e) => checkForm(e.target)} type="text" name="username" id="username"/>
                            {!isValidUsername ? <p>Entre 4 et 24 caractères
                                Doit commencer par une lettre.
                                Doit comporter au moins une lettre et aucun caractère spécial.</p> : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Adresse e-mail :</label>
                            <input className="form-control" onChange={(e) => checkForm(e.target)} type="mail" name="email" id="email"/>
                            {!isValidMail ? <p>L'adresse mail doit avoir le bon format.</p> : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="tel">Téléphone :</label>
                            <input className="form-control" onChange={(e) => checkForm(e.target)} type="text" name="tel" id="tel"/>
                            {!isValidTel ? <p>le numero de téléphone doit avoir le bon format.</p>  : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="password">Mot de passe :</label>
                            <input className="form-control" onChange={(e) => checkForm(e.target)} type="text" name="password" id="password"/>
                            {!isValidPassword ? <p>le mot de passe doit contenir au moins 8 caractères.
                            le mot de passe doit comporter au moins 1 lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.</p>  : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="confirmPassword">Confirmation du mot de passe :</label>
                            <input className="form-control" onChange={(e) => checkForm(e.target)} type="text" name="confirmPassword" id="confirmPassword"/>
                            {!isValidConfirmPassword ? <p>les mot de passe doivent correspondre.</p>  : null}
                        </div>
                        <button className="btn btn-primary" type="submit" disabled={isValidUsername && isValidConfirmPassword && isValidMail && isValidTel && isValidPassword ? false : true}>Envoyer</button>
                        <a href="/signin">Déjà un compte ?</a>
                    </form>
                </div>
            </div>
        </div>
    )
}