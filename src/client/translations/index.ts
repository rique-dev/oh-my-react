import { DEFAULT_LOCALE, LOCALES } from '@constants'

import enTranslationMessages from './locales/en.json'
import ptTranslationMessages from './locales/pt.json'

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, ptTranslationMessages)
      : {}

  const res = Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key]
    return Object.assign(formattedMessages, {
      [key]: formattedMessage,
    })
    /* tslint:disable: align */
  }, {})
  /* tslint:enable: align */
  return res
}

export const translationMessages = {
  en: formatTranslationMessages(LOCALES.EN, enTranslationMessages),
  pt: formatTranslationMessages(LOCALES.PT, ptTranslationMessages),
}
