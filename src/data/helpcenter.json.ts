export interface Template {
  url: string;
  description: string;
};
const one: Template = {
  url: "/helpcenter/category",
  description: "Downloads - Access exclusive content and resources with our easy-to-use download feature"
};
const two: Template = {
  url: "/helpcenter/category",
  description: "FAQ - Find answers to frequently asked questions about our products and services"
};
const three: Template = {
  url: "/helpcenter/category",
  description: "Contact Us - Reach out to our friendly support team for assistance"
};
const four: Template = {
  url: "/helpcenter/category",
  description: "Shipping Information - Learn about our shipping policies and delivery options"
};
const five: Template = {
  url: "/helpcenter/category",
  description: "Returns and Exchanges - Understand our return and exchange procedures"
};
const six: Template = {
  url: "/helpcenter/category",
  description: "Privacy Policy - Read our comprehensive privacy policy to protect your data"
};
const seven: Template = {
  url: "/helpcenter/category",
  description: "Terms and Conditions - Review our terms of service for a seamless shopping experience"
};
const eight: Template = {
  url: "/helpcenter/category",
  description: "Product Support - Get assistance with setting up and using our products"
};
const nine: Template = {
  url: "/helpcenter/category",
  description: "Payment Options - Explore our secure payment methods for hassle-free transactions"
};
const ten: Template = {
  url: "/helpcenter/category",
  description: "Product Warranty - Learn about our product warranty and coverage"
};
const eleven: Template = {
  url: "/helpcenter/category",
  description: "Order Tracking - Track your order and stay updated on its status"
};
const twelve: Template = {
  url: "/helpcenter/category",
  description: "Customer Reviews - Hear what our customers have to say about their experiences"
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
  twelve
};
export const helpcenter = Object.values(byName);
