const title = 'Athayog Living – A holistic yogic living';
const description = 'yoga studio in banglore';
const keywords =
     'yoga studio in bangalore, yoga classes in bangalore, yoga teacher in bangalore, safe yoga, online yoga classes, yoga workshops in bangalore, yoga treatment in bangalore, yoga for weight loss, yoga course in bangalore';

const SEO = {
     title,
     description,
     keywords,
     canonical: 'https://athayogliving.com/',
     openGraph: {
          type: 'website',
          locale: 'en_IE',
          url: 'https://athayogliving.com/',
          title,
          description,
          images: [
               {
                    url: 'https://athayogliving.com/og.png',
                    alt: title,
                    width: 1280,
                    height: 720
               }
          ]
     }
};

export default SEO;
