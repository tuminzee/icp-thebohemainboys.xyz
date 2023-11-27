import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (<Html lang="en">
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="keywords" content="The Bohemian Boys"/>
            <meta name="description" content="The Ultimate NFT in Luxury Travel"/>
            <meta name="author" content="Rhapsody"/>
            {/* ------ Favicon ------ */}
            <link rel="shortcut icon" href="/dark/assets/imgs/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/dark/assets/imgs/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/dark/assets/imgs/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/dark/assets/imgs/favicon-16x16.png"/>
            <link rel="manifest" href="/dark/assets/imgs/site.webmanifest"/>
            {/* ------ Google Fonts ------ */}
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"/>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"/>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"/>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
            {/* ------ bootstrap icons cdn ------ */}
            {/*<link rel="stylesheet" href="/dark/assets/css/plugins/bootstrap-icons.css"/>*/}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
            {/* ------ Plugins ------ */}
            <link rel="stylesheet" href="/dark/assets/css/plugins.css"/>
            {/* ------ Core Style Css ------ */}
            <link rel="stylesheet" href="/dark/assets/css/style.css"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>)
}
