import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import '@fontsource/darker-grotesque/800.css'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      return pages[`../pages/${name}.tsx`]
    },
    setup: ({ App, props }) => <App {...props} />,
  })
}
