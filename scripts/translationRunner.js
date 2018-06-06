const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
    messagesDirectory: 'src/client/translations/extracted/',
    translationsDirectory: 'src/client/translations/locales/',
    languages: ['pt', 'en'],
});
