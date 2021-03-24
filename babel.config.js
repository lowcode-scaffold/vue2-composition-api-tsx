module.exports = {
  presets: [
    "vca-jsx",
    [
      "@vue/cli-plugin-babel/preset",
      {
        jsx: {
          compositionAPI: true
        }
      }
    ]
  ]
};
