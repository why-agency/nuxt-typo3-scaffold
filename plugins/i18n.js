export default ({ app }) => {
  app.i18n.locale = app.i18n.getBrowserLocale()
  app.$typo3.i18n.onLocaleChange = (oldLocale, newLocale) => {
    app.i18n.locale = newLocale
  }
}
