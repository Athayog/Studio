export async function getStaticProps() {
  const url = new URL(process.env.URL || 'http://localhost:3000');
  url.pathname = '/api/shopify/products';

  const res = await fetch(url.toString());

  if (!res.ok) {
    console.error(res);
    return { props: {} };
  }

  const data = await res.json();

  const products = data.products.edges
    .map(({ node }) => {

      return {
        id: node.id,
        title: node.title,
        description: node.description,
        imageSrc: node.images.edges[0].node.src,
        imageAlt: node.title,
        price: node.variants.edges[0].node.priceV2.amount,
        slug: node.handle,
      };
    })
    .filter(Boolean);

  return {
    props: { products },
    // In case you're building this yourself, the first deployment can't call
    // the API because it hasn't been deployed yet. This dummy product will get
    // you through that first deploy.
    // props: {
    //   products: [
    //     {
    //       id: 'a1',
    //       title: 'Test',
    //       description: 'Test',
    //       imageSrc:
    //         'https://cdn.shopify.com/s/files/1/0589/5798/8049/products/corgi-toy.jpg',
    //       imageAlt: 'test',
    //       price: '19.99',
    //       slug: 'test',
    //     },
    //   ],
    // },
  };
}


function certification({ products }) {
  console.log('data', products)
  return (

    <div>
      {products.map((data) => {
        return (
          <>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </>
        );
      })}
    </div>
  )
}

export default certification