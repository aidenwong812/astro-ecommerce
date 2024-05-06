export interface Template {
  url: string;
  image: string;
  description: string;
  price: string;
};
const one: Template = {
  url: "/store/product-details",
  image: "/2.jpeg",
  price: "$99",
  description: "TPDmn-67"
};
const two: Template = {
  url: "/store/product-details",
  image: "/14.jpeg",
  price: "$1.000.99",
  description: "OPD-15"
};
const three: Template = {
  url: "/store/product-details",
  image: "/19.png",
  price: "$399",
  description: "OOW-10"
};
const four: Template = {
  url: "/store/product-details",
  image: "/20.png",
  price: "$199",
  description: "hbr-8"
};
const five: Template = {
  url: "/store/product-details",
  image: "/5.jpeg",
  price: "$149",
  description: "qsd-4"
};

const six: Template = {
  url: "/store/product-details",
  image: "/8.jpeg",
  price: "$249",
  description: "knm-34"
};

const seven: Template = {
  url: "/store/product-details",
  image: "/12.jpeg",
  price: "$79.99",
  description: "kjn-4"
};

const eight: Template = {
  url: "/store/product-details",
  image: "/18.png",
  price: "$299.99",
  description: "ppw-2"
};
export const byName = {
    one,
    two,
    three,
  four,
  five,
  six,
  seven,
  eight
};
export const newarrivals = Object.values(byName);
