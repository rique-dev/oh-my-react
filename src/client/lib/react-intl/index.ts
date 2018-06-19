import {
  addLocaleData,
  defineMessages,
  FormattedMessage,
  IntlProvider,
} from 'react-intl'
// tslint:disable no-submodule-imports
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
// tslint:disable no-import-side-effect

interface LocaleData {
  en: ReactIntl.LocaleData
  pt: ReactIntl.LocaleData
}

const localeData: LocaleData = {
  en,
  pt,
}

addLocaleData([...localeData.en, ...localeData.pt])

export { defineMessages, FormattedMessage, IntlProvider }
