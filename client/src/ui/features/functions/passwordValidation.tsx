export function passwordValidation(password: string) {
  function CheckPassword(pwd: any) {
    var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/;
    return passw.test(pwd);
  }

  if (password === "") {
    return {
      errorValidation: "*Veuillez saisir votre password",
      isValid: false,
    };
  } else if (CheckPassword(password) === true) {
    return { isValid: true };
  } else {
    return {
      errorValidation:
        "*Votre mot de passe doit contenir au moins une Majuscule, une minuscule et un chiffre et doit faire entre 8 et 20 caractères",
      isValid: false,
    };
  }
}
