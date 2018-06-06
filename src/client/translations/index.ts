import moment from 'moment'
import { addLocaleData } from 'react-intl'
import { DEFAULT_LOCALE } from '@constants'

// tslint:disable no-submodule-imports
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
// tslint:disable no-import-side-effect

import 'moment/locale/pt-br'
// tslint:enable no-submodule-imports no-import-side-effect

import enTranslationMessages from './locales/en.json'
import ptTranslationMessages from './locales/pt.json'

moment.locale('pt-br')

addLocaleData([...en, ...pt])
export const appLocales = ['en', 'pt']

export const formatTranslationMessages = (locale, messages) => {
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
  en: formatTranslationMessages('en', enTranslationMessages),
  pt: formatTranslationMessages('pt', ptTranslationMessages),
}
