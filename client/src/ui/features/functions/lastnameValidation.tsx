export function lastnameValidation(lastname: string) {
  let errorValidation = "";

  function contientQueDesLettres(chaine: string) {
    return /^[a-zA-Z]+$/.test(chaine);
  }

  if (lastname === "") {
    errorValidation = "Veuillez saisir votre nom";
    return [false, errorValidation];
  } else {
    if (!contientQueDesLettres(lastname)) {
      errorValidation = "Votre nom ne peut contenir que des lettres";
      return [false, errorValidation];
    } else {
      if (lastname.length >= 2) {
        return true;
      } else {
        errorValidation = "Nom trop court";
        return [false, errorValidation];
      }
    }
  }
}
