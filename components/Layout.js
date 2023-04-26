/** @format */

import Head from "next/head";
import Header from "./Header"
import Search from "./Search"

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Search />
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}

Layout.defaultProps = {
    title: "Welcome to conscious readz",
    keywords: "personal development, coding and veganism",
    description: "The best blog site about web dev and veganism"
}
