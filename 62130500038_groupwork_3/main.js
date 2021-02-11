const app = {
  data() {
    return {
      photos: [
        {
          url: "images/pineapple.jpg",
          title: "Pineapple",
          description:"This is the picture of Pineapple",
          liked:false
        },
        {
          url: "images/lion.jpg",
          title: "Lion",
          description:"This is the picture of Lion",
          liked:false
        },
        {
          url: "images/surface.jpg",
          title: "Microsoft Surface",
          description:"This is the picture of Microsoft Surface",
          liked:false
        },
      ],
    };
  },
  methods: {
      toggleLike(index) {
          this.photos[index].liked = !this.photos[index].liked
        //   console.log(this.photos[index].liked)
      }
  },
  computed:{
      countLike(){
        return this.photos.filter(t => t.liked).length
      }
  }
};
Vue.createApp(app).mount("#app");
