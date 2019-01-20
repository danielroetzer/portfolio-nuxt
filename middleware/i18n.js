/*
 * 1. sets i18n.locale and state.locale if possible
 * 2. redirects if not with locale
 */
export default function ({ 
  isHMR, app, store, route, params, error, redirect 
}) {
  if (isHMR) { // ignore if called from hot module replacement
    return;
  } // if url does not have language, redirect to german
  else if (!params.lang) { 
    return redirect('/de' + route.fullPath);
  }
  // based on directory structure _lang/xxxx, de/about has params.lang as "de"
  const locale = params.lang || 'de'; 
  store.commit('SET_LANG', locale); // set store
  app.i18n.locale = store.state.locale;
}