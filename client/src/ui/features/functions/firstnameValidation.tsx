export function firstnameValidation(firstname: string) {
  let errorValidation = "";

  function contientQueDesLettres(chaine: string) {
    return /^[a-zA-Z]+$/.test(chaine);
  }

  if (firstname === "") {
    errorValidation = "Veuillez saisir votre prénom";
    return [false, errorValidation];
  } else {
    if (!contientQueDesLettres(firstname)) {
      errorValidation = "Votre Prénom ne peut contenir que des lettres";
      return [false, errorValidation];
    } else {
      if (firstname.length >= 2) {
        errorValidation = "OK";
        return true;
      } else {
        errorValidation = "Prénom trop court";
        return [false, errorValidation];
      }
    }
  }

  return errorValidation;
}
