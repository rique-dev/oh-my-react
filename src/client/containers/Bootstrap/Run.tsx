import { Fragment, IntlProvider, React } from '@lib'

import { translationMessages } from '@translations/locales'

import { DEFAULT_LOCALE } from '@constants'
import { connectRoot, Props as RootProps } from '@state/root'

declare global {
  interface Navigator {
    /**
     * IE 11 and olders
     */
    userLanguage: any
  }
}

@connectRoot()
export default class Run extends React.Component {
  componentDidMount(): void {
    const { changeLocale } = this.props as RootProps
    const userLang =
      navigator.language || navigator.userLanguage || DEFAULT_LOCALE
    changeLocale(userLang)
  }

  render(): JSX.Element {
    const { children } = this.props
    const { locale } = this.props as RootProps

    return (
      <Fragment>
        <IntlProvider
          locale={locale}
          key={locale}
          messages={translationMessages[locale]}
        >
          <div>{children}</div>
        </IntlProvider>
      </Fragment>
    )
  }
}
