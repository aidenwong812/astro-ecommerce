export interface Template {
  url: string;
  image: string;
  description: string;
  price: string;
};
const one: Template = {
  url: "/store/product-details",
  image: "/1.jpeg",
  price: "$99",
  description: "TPDmn-67"
};
const two: Template = {
  url: "/store/product-details",
  image: "/2.jpeg",
  price: "$1.000.99",
  description: "OPD-15"
};
const three: Template = {
  url: "/store/product-details",
  image: "/3.jpeg",
  price: "$399",
  description: "OOW-10"
};
const four: Template = {
  url: "/store/product-details",
  image: "/4.jpeg",
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
  image: "/6.jpeg",
  price: "$249",
  description: "knm-34"
};
const seven: Template = {
  url: "/store/product-details",
  image: "/7.jpeg",
  price: "$79.99",
  description: "kjn-4"
};
const eight: Template = {
  url: "/store/product-details",
  image: "/8.jpeg",
  price: "$299.99",
  description: "ppw-2"
};
const nine: Template = {
  url: "/store/product-details",
  image: "/9.jpeg",
  price: "$199.99",
  description: "ppw-3"
};
const ten: Template = {
  url: "/store/product-details",
  image: "/10.jpeg",
  price: "$149.99",
  description: "ppw-4"
};
const eleven: Template = {
  url: "/store/product-details",
  image: "/11.jpeg",
  price: "$399.99",
  description: "ppw-5"
};
const twelve: Template = {
  url: "/store/product-details",
  image: "/12.jpeg",
  price: "$249.99",
  description: "ppw-6"
};
const thirteen: Template = {
  url: "/store/product-details",
  image: "/13.jpeg",
  price: "$199.99",
  description: "ppw-7"
};
const fourteen: Template = {
  url: "/store/product-details",
  image: "/14.jpeg",
  price: "$299.99",
  description: "ppw-8"
};
const fifteen: Template = {
  url: "/store/product-details",
  image: "/15.jpeg",
  price: "$249.99",
  description: "ppw-9"
};
const sixteen: Template = {
  url: "/store/product-details",
  image: "/16.jpeg",
  price: "$349.99",
  description: "ppw-10"
};
const seventeen: Template = {
  url: "/store/product-details",
  image: "/17.jpeg",
  price: "$199.99",
  description: "ppw-11"
};
const eighteen: Template = {
  url: "/store/product-details",
  image: "/18.png",
  price: "$299.99",
  description: "ppw-12"
};
const nineteen: Template = {
  url: "/store/product-details",
  image: "/19.png",
  price: "$249.99",
  description: "ppw-13"
};
const twenty: Template = {
  url: "/store/product-details",
  image: "/20.png",
  price: "$199.99",
  description: "ppw-14"
};
export const byName = {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty
};
export const allproducts = Object.values(byName);
