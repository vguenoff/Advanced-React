import Page from '../components/Page';

// import App, { Container } from 'next/app';
// class MyApp extends App {
//     render() {
//         const { Component } = this.props;

//         return (
//             <Container>
//                 <Page>
//                     <Component />
//                 </Page>
//             </Container>
//         );
//     }
// }

const MyApp = ({ Component, pageProps }) => (
    <Page>
        <Component {...pageProps} />
    </Page>
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
