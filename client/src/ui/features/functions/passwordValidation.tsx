export function passwordValidation(password: string) {
  let errorValidation = "";

  function CheckPassword(pwd: any) {
    var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/;

    return passw.test(pwd);
  }
  if (password === "") {
    errorValidation = "Veuillez saisir votre password";
    return [false, errorValidation];
    if (CheckPassword(password) === true) {
      return true;
    } else {
      errorValidation =
        "Votre mot de passe doit contenir au moins une Majuscule, une minuscule et un chiffre et doit faire entre 8 et 20 caractères";
        return [false, errorValidation];
    }
  }

  return errorValidation;
}
