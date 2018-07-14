const defaultLanguage = require('../package.json').lingui.fallbackLocale
const languages = ['en', 'de']

const catalogs = languages.reduce((acc, current) => {
  acc[current] = {
    messages: require(`./locale/${current}/messages.json`),
  }

  return acc
}, {})


const prefix = lang => (lang == defaultLanguage ? '/' : '/' + lang)
const deprefix = pathname =>
  !pathname.startsWith(`/${defaultLanguage}/`) ? pathname.substr(4) : pathname
const langFromPath = pathname => {
  const languagePrefix = /^\/([a-z]{2})\//.exec(pathname);
  return (languagePrefix && languagePrefix[1])  || defaultLanguage;
}

exports.defaultLanguage = defaultLanguage
exports.languages = languages
exports.catalogs = catalogs
exports.prefix = prefix
exports.deprefix = deprefix
exports.langFromPath = langFromPath
