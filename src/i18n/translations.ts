export const languages = {
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  en: 'English'
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'de';

export const translations = {
  de: {
    'nav.home': 'Startseite',
    'nav.music': 'Musik',
    'nav.contact': 'Kontakt',
    'home.title': 'Willkommen',
    'home.biography': 'Biografie',
    'music.title': 'Kompositionen',
    'music.listen': 'Hören',
    'music.catalog': 'Auszug aus dem Werkverzeichnis',
    'contact.title': 'Kontakt',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Senden',
    'contact.success': 'Nachricht erfolgreich gesendet!',
    'contact.error': 'Fehler beim Senden der Nachricht.'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.music': 'Musique',
    'nav.contact': 'Contact',
    'home.title': 'Bienvenue',
    'home.biography': 'Biographie',
    'music.title': 'Compositions',
    'music.listen': 'Écouter',
    'music.catalog': 'Extrait du catalogue des œuvres',
    'contact.title': 'Contact',
    'contact.name': 'Nom',
    'contact.email': 'E-mail',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.success': 'Message envoyé avec succès!',
    'contact.error': 'Erreur lors de l\'envoi du message.'
  },
  it: {
    'nav.home': 'Home',
    'nav.music': 'Musica',
    'nav.contact': 'Contatto',
    'home.title': 'Benvenuto',
    'home.biography': 'Biografia',
    'music.title': 'Composizioni',
    'music.listen': 'Ascolta',
    'music.catalog': 'Tratto dal catalogo delle opere',
    'contact.title': 'Contatto',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.message': 'Messaggio',
    'contact.send': 'Invia',
    'contact.success': 'Messaggio inviato con successo!',
    'contact.error': 'Errore durante l\'invio del messaggio.'
  },
  en: {
    'nav.home': 'Home',
    'nav.music': 'Music',
    'nav.contact': 'Contact',
    'home.title': 'Welcome',
    'home.biography': 'Biography',
    'music.title': 'Compositions',
    'music.listen': 'Listen',
    'music.catalog': 'Excerpt from the catalog of artworks',
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message.'
  }
} as const;

export type TranslationKey = keyof typeof translations.de;
