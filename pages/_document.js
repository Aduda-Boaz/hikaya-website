import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head crossOrigin='' nonce=''>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, minimum-scale=1'
          />
          <meta
            name='description'
            content='We help organizations tell their stories through data by introducing open source, flexible, and integrated tools that support effective use of data.'
          />
          <meta
            property='og:title'
            content='Tell your stories through data | Hikaya'
          />
          <meta
            property='og:description'
            content='We help organizations tell their stories through data by introducing open source, flexible, and integrated tools that support effective use of data.'
          />
          <meta
            property='og:image'
            content='assets/images/main-logo-122x122.png'
          />
          <meta
            name='twitter:title'
            content='Tell your stories through data | Hikaya'
          />
          <meta
            name='twitter:description'
            content='We help organizations tell their stories through data by introducing open source, flexible, and integrated tools that support effective use of data.'
          />
          <meta
            name='twitter:image'
            content='assets/images/main-logo-122x122.png'
          />
          <link
            rel='shortcut icon'
            href='assets/images/main-logo-122x122.png'
            type='image/x-icon'
          />
          <meta name='description' content='' />
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.0.8/css/fontawesome.css'
            integrity='sha384-q3jl8XQu1OpdLgGFvNRnPdj5VIlCvgsDQTQB6owSOHWlAurxul7f+JpUOVdAiJ5P'
            crossOrigin='anonymous'
          />
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
          />
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Lato:100,300,400,700'
            rel='stylesheet'
            type='text/css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://fonts.googleapis.com/css?family=Inconsolata'
          />
          <link
            rel='stylesheet'
            href='assets/bootstrap/css/bootstrap.min.css'
          />
          <link
            rel='stylesheet'
            href='assets/bootstrap/css/bootstrap-grid.min.css'
          />
          <link
            rel='stylesheet'
            href='assets/bootstrap/css/bootstrap-reboot.min.css'
          />
          <link rel='stylesheet' href='assets/dropdown/css/style.css' />
          {/* <link rel="stylesheet" href="assets/tether/tether.min.css"/> */}
          <link rel='stylesheet' href='assets/animatecss/animate.min.css' />
          <link rel='stylesheet' href='assets/theme/css/style.css' />
          {/* <link
						rel="preload"
						as="style"
						href="assets/hikaya/css/mbr-additional.css"
					/> */}
          <link
            rel='stylesheet'
            href='assets/hikaya/css/mbr-additional.css'
            type='text/css'
          />
          <link rel='stylesheet' href='assets/theme/css/custom_style.css' />
          <script src='https://wchat.freshchat.com/js/widget.js'></script>
        </Head>
        <body>
          <Main />

          <NextScript />

          <script src='assets/web/assets/jquery/jquery.min.js'></script>
          <script src='assets/popper/popper.min.js'></script>
          <script src='assets/bootstrap/js/bootstrap.min.js'></script>
          <script src='assets/smoothscroll/smooth-scroll.js'></script>
          <script src='assets/dropdown/js/nav-dropdown.js'></script>
          <script src='assets/dropdown/js/navbar-dropdown.js'></script>
          <script src='assets/tether/tether.min.js'></script>
          <script src='assets/viewportchecker/jquery.viewportchecker.js'></script>
          <script src='assets/parallax/jarallax.min.js'></script>
          <script src='assets/touchswipe/jquery.touch-swipe.min.js'></script>
          <script src='assets/theme/js/script.js'></script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
