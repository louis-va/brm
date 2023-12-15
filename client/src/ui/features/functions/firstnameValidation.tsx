export function firstnameValidation(firstname: string) {
  function contientQueDesLettres(chaine: string) {
    return /^[a-zA-Z]+$/.test(chaine);
  }

  if (firstname === "") {
    return { errorValidation: " *Veuillez saisir votre prénom", isValid: false };
  } else {
    if (!contientQueDesLettres(firstname)) {
      return {
        errorValidation: "*Votre Prénom ne peut contenir que des lettres",
        isValid: false,
      };
    } else {
      if (firstname.length >= 2) {
        return { isValid: true };
      } else {
        return { errorValidation: "*Prénom trop court", isValid: false };
      }
    }
  }
}
