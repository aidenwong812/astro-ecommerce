export interface Template {
  url: string;
  description: string;
};
const one: Template = {
  url: "/helpcenter/details",
  description: "Exploring ways to access valuable admin insights"
};
const two: Template = {
  url: "/helpcenter/details",
  description: "Inviting Creator Lite members to join your Business account"
};
const three: Template = {
  url: "/helpcenter/details",
  description: "Simplifying the process for your team to join your Workspace"
};
const four: Template = {
  url: "/helpcenter/details",
  description: "Understanding the utilization of 's privacy settings"
};

export const byName = {
  one,
  two,
  three,
  four,

};
export const helpcenterCategories = Object.values(byName);
