import {
  addLocaleData,
  defineMessages,
  FormattedMessage,
  injectIntl as inject,
  InjectIntlConfig,
  IntlProvider,
  intlShape,
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

const injectIntl = <P = any>(options?: InjectIntlConfig) => (target: any) =>
  inject(target, options) as any

addLocaleData([...localeData.en, ...localeData.pt])

export { defineMessages, FormattedMessage, IntlProvider, injectIntl, intlShape }
