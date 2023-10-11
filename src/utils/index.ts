export const smoothScroll = (containerId: string) => {
  document.getElementById(containerId)?.scrollIntoView({ behavior: "smooth" });
};
