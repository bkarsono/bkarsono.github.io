const { createApp } = Vue;

createApp({
  data() {
    return {
      currentTab: "About Me",
      projects: [
        {
          name: "Haki 2D",
          imgUrl: "./assets/logo-haki.png",
          imgHref: "https://fortnite.gg/creative?creator=nachoboy999",
          description:
            "A Brawl Stars clone made in Unreal Editor for Fortnite.",
        },
        {
          name: "Not Stake",
          imgUrl: "./assets/logo-discord.jpg",
          imgHref: "https://discord.com/",
          description:
            "A Discord bot that allows users to create events and predict outcomes using virtual currency.",
        },
        {
          name: "Draft Stars",
          imgUrl: "./assets/logo-brawl.jpg",
          imgHref: "https://supercell.com/en/games/brawlstars/",
          description: "In Progress...",
        },
      ],
    };
  },
  methods: {},
}).mount("#app");
