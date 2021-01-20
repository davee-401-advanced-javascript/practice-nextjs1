import Head from 'next/head'
import Link from 'next/link'
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from '../store';
import Header from '../components/header/header.js';
import StoreFront from '../components/storefront/storefront.js';
import Footer from '../components/footer/footer.js';




export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Provider store={store}>
        <CssBaseline/>
        <Header/>

        <h1>Home Page</h1>
        <h1>Login Here??</h1>

        <Link href='./main-page.js'>
          <a>Go to Main Page</a>
        </Link>

        <StoreFront/>
        <Footer/>
      </Provider>
    </div>
  )
}
