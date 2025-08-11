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
          name: "Ranked Stars",
          imgUrl: "./assets/logo-brawl.jpg",
          imgHref: "https://ranked-stars.web.app/",
          description: "A replica of the Brawl Stars ranked UI.",
        },
      ],
    };
  },
  methods: {},
}).mount("#app");
