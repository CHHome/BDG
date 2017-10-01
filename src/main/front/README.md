# blooddonation

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 注意点
- 路由的复用问题，AffairManage，PlanManage，Statistics中的路由复用
当加了keep-alive，并且存在beforeROuterEnter
1. 当切换（不同组件的）路由（离开当前组件进入下一个组件）时（相同组件仍会调用beforeRouterEnter）会将前一个路由缓存（再次访问时该组件时（包括不同路由但组件相同）直接取用，beforeRouteEnter,缓存优先级大于beforeRouteEnter）
当缓存发生的时候，再次访问该组件是不会再调用beforeRouterEnter的，解决方法，取消keep-alive防止缓存，但beforeRouterEnter必须存在，防止组件的复用带来的问题

- 另外一种是keep-alive，beforeROuterEnter，activated同时存在，activated解决组件缓存带来的问题，beforeROuterEnter解决组件复用问题
