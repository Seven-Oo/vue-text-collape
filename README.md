# vue-text-collape

> vue文本内容折叠插件

## Install

```
npm install vue-text-collape
```


## Usage

安装成功后，在入口文件引入

```
import Collape from 'vue-text-collape'
Vue.use(Collape)
```



在vue文件中，直接调用

```
<Collape
  :lineH="24"
  :rowNum="3"
  :bgColor="'antiquewhite'"
  :content="'具体的文本内容'"
  :showTxt="'展开'"
  :hideTxt="'折叠'"
  :showColor="'#354880'"
  :hideColor="'#42b983'"/>
```


## Props


PropName | Type | Description 
---|---|---
lineH<br>(required) | Number | Line height of text
rowNum<br>(required) | Number | Rows of text
bgColor<br>(required) | String | Background-color of text
content<br>(required) | String | The text to display
showTxt | String | Expanded text description<br>Default:展开
hideTxt | String | Folded text description<br>Default:收起
showColor<br>(required) | String | Color of expanded text description
hideColor<br>(required) | String | Color of folded text description


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
