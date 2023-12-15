export function lastnameValidation(lastname: string) {
  function contientQueDesLettres(chaine: string) {
    return /^[a-zA-Z]+$/.test(chaine);
  }

  if (lastname === "") {
    return { errorValidation: "*Veuillez saisir votre nom", isValid: false };
  } else {
    if (!contientQueDesLettres(lastname)) {
      return {
        errorValidation: "*Votre nom ne peut contenir que des lettres",
        isValid: false,
      };
    } else {
      if (lastname.length >= 2) {
        return { isValid: true };
      } else {
        return { errorValidation: "*Nom trop court", isValid: false };
      }
    }
  }
}
