import { DEFAULT_LOCALE, LOCALES } from '@constants'

import enTranslationMessages from './locales/en.json'
import ptTranslationMessages from './locales/pt.json'

const formatTranslationMessages = (locale: any, messages: any) => {
  const defaultFormattedMessages: any =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, ptTranslationMessages)
      : {}

  return Object.keys(messages).reduce((formattedMessages: any, key: any) => {
    const formattedMessage: any =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key]

    return {
      ...formattedMessages,
      [key]: formattedMessage,
    }
    /* tslint:disable: align */
  }, {})
  /* tslint:enable: align */
}

interface TranslationMessages {
  [key: string]: () => any
}

export const translationMessages: TranslationMessages = {
  en: formatTranslationMessages(LOCALES.EN, enTranslationMessages),
  pt: formatTranslationMessages(LOCALES.PT, ptTranslationMessages),
}
