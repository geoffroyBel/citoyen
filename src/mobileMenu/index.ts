export const navigator = (path: string) => {
  return [
    { name: "Accueil", href: "/", current: path === "/" },
    { name: "Test", href: "/about", current: path === "/about" },
  ];
};
