import { PROJECTS_ENDPOINT } from "./endpoints";

export const getProjects = async () => {
  try {
    return await (await fetch(PROJECTS_ENDPOINT)).json();
  } catch (error) {
    console.log(error);
  }
};
