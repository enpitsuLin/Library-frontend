<template>
  <div>
    <v-carousel hide-delimiters :height="fix_height" class="carousel">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
        <v-container
          class="flex-row carousel-container"
          :style="{'padding-top':fix_height- 250+'px'}"
        >
          <v-row class="carousel-title d-none d-md-flex">
            <v-col>恢复楼内全部服务的通知</v-col>
          </v-row>
          <v-row class="carousel-body d-none d-md-flex">
            <v-divider class="d-none d-md-flex"></v-divider>
          </v-row>
          <v-row class="carousel-body d-none d-md-flex">
            <v-col
              class="carousel-content"
            >图书馆在做好常态化疫情防控工作、继续确保线上服务正常运行的同时，自6月5日起恢复楼内全部服务，欢迎在校师生到现场享用图书馆服务。</v-col>
          </v-row>
          <v-row
            justify="center"
            class="carousel-service-icon"
            :style="{'margin-top':service_icon+'px'}"
            no-gutters
          >
            <v-col
              class="service-icon"
              v-for="(item,i) in service"
              :key="i"
              lg="1"
              md="1"
              sm="3"
              xs="3"
            >
              <a href="#">
                <v-icon>{{item.icon}}</v-icon>
                <p>{{item.title}}</p>
              </a>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fix_height: document.body.clientHeight - 64,
      service_icon: this.get_service_margin(),
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },

        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      service: [
        { title: "馆藏分布", icon: "mdi-home" },
        { title: "借阅制度", icon: "mdi-book-open" },
        { title: "借阅/续借/预约", icon: "mdi-book-check" },
        { title: "热门图书", icon: "mdi-fire" },
        { title: "阅读推荐", icon: "mdi-thumb-up" },
        { title: "新书通报", icon: "mdi-leaf" },
        { title: "工具软件", icon: "mdi-tools" },
        { title: "新生指南", icon: "mdi-notebook-multiple" },
      ],
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        that.fix_height = document.documentElement.clientHeight - 64;
        /* console.log(
          document.documentElement.clientWidth,
          document.documentElement.clientHeight,
          that.get_service_margin()
        ); */
        that.service_icon = that.get_service_margin();
      })();
    };
  },
  methods: {
    get_service_margin: function () {
      if (document.documentElement.clientWidth >= 960) {
        return 20;
      } else if (document.documentElement.clientWidth <= 600) {
        return 100;
      } else {
        return 90;
      }
    },
  },
  watch: {
    screenHeight(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenHeight值改变，就将其重新赋给data里的screenHeight
        this.screenHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          // 打印screenHeight变化的值
          console.log(that.screenHeight);
          that.timer = false;
        }, 400);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.carousel {
  background-image: linear-gradient(0deg, black, transparent);
  .carousel-container {
    .carousel-title {
      width: 1140px;
      font-size: 40px;
      text-shadow: 0px 6px 10px black;
    }
    .carousel-body {
      .carousel-content {
        padding-bottom: 10px;
      }
    }
  }
  .carousel-service-icon {
    .service-icon {
      padding: 0 6px;
      height: 64px;
      font-size: 12px;
      text-align: center;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>