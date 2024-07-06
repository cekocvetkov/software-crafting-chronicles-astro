/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Montserrat"],
      mono: ["Montserrat"],
      display: ["Montserrat"],
      body: ["Montserrat"],
    },
    // fontSize: {
    //   blogPostFontSize: "2px",
    // },
    colors: {
      searchFieldPlaceholderColor: "#e58c4c80",
      searchFieldBorderColor: "#faf9f680",
      searchFieldCaretColor: "#faf9f680",
      transparent: "transparent",
      backgroundColor: "#323232",
      accentColor: "#445544",
      primaryTextColor: "#faf9f6",
      secondaryTextColor: "#e58c4c",
      tagsColor: "#d97833",
      borderColor: "#b66d3880",
      blue: {
        100: "#445544",
      },
    },
    width: {
      mainWidth: "1056px",
      minBlogItemWidth: "180px",
    },
    height: {
      mainHeight: "620px",
      mainHeightPosts: "618px",
    },
    extend: {},
  },
  plugins: [],
};
