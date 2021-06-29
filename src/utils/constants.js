export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const products_url = `https://cdn.contentful.com/spaces/3qsattafj4mi/environments/master/entries?access_token=${process.env.REACT_APP_CONTENTFUL_API_TOKEN}&content_type=product`;

export const single_product_url = `https://cdn.contentful.com/spaces/3qsattafj4mi/environments/master/entries?access_token=${process.env.REACT_APP_CONTENTFUL_API_TOKEN}&content_type=variant&fields.product.sys.id=`;
