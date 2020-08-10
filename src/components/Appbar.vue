<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>首页</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group prepend-icon="mdi-book-open-blank-variant" value="false">
          <template v-slot:activator>
            <v-list-item-title>资源</v-list-item-title>
          </template>
          <v-list-group v-for="(item, index) in resource" :key="index" sub-group value="false">
            <template v-slot:activator>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </template>
            <v-list-item link v-for="(res, subindex) in item.res" :key="subindex">
              <v-list-item-title>{{res.title}}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <v-list-item link to="/about">
          <v-list-item-action>
            <v-icon>mdi-book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>借阅</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-action>
            <v-icon>mdi-information</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>关于</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--分割-->
    <v-app-bar dark color="indigo darken-2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-icon>mdi-library</v-icon>Library
      </v-toolbar-title>

      <v-toolbar-items class="ml-8 d-none d-md-flex">
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn text to="/">
          <v-icon>mdi-home</v-icon>首页
        </v-btn>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-menu open-on-hover :close-on-content-click="false" bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text to="/" v-bind="attrs" v-on="on">
              <v-icon>mdi-book-open-blank-variant</v-icon>资源
            </v-btn>
          </template>
          <v-list dense width="240px">
            <v-list-group prepend-icon="mdi-book-open-blank-variant" value="false">
              <template v-slot:activator>
                <v-list-item-title>资源</v-list-item-title>
              </template>
              <v-list-group v-for="(item, index) in resource" :key="index" sub-group value="false">
                <template v-slot:activator>
                  <v-list-item-title>{{item.title}}</v-list-item-title>
                </template>
                <v-list-item link v-for="(res, subindex) in item.res" :key="subindex">
                  <v-list-item-title>{{res.title}}</v-list-item-title>
                </v-list-item>
              </v-list-group>
            </v-list-group>
          </v-list>
        </v-menu>

        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn text to="/">
          <v-icon>mdi-book</v-icon>借阅
        </v-btn>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn text to="/">
          <v-icon>mdi-information</v-icon>关于
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <div>
        <v-text-field
          solo
          flat
          hide-details
          label="请输入关键词"
          background-color="indigo"
          clearable
          v-show="search"
        >
          <v-icon slot="append" @click.stop="search = !search">mdi-magnify</v-icon>
        </v-text-field>
        <v-btn icon @click.stop="search = !search" v-show="!search">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resource: [
        {
          title: "馆藏资源",
          res: [
            { title: "图书/期刊" },
            { title: "电子图书" },
            { title: "电子期刊" },
            { title: "学术论文" },
          ],
        },
        {
          title: "最新/精选资源",
          res: [
            { title: "新书通报" },
            { title: "获奖图书" },
            { title: "教学参考书" },
          ],
        },
      ],
      drawer: false,
      search: false,
    };
  },
};
</script>

<style lang="less" scoped>
.v-btn--active::before {
  opacity: 0 !important;
}
.theme--dark.v-btn--active:hover::before {
  opacity: 0.24 !important;
}
</style>