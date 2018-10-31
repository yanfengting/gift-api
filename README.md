这是一个有关于纪念品的微信小程序项目，功能：轮播图，下拉列表，下拉刷新，通过接口拉取数据显示等，技术：nodejs，MongoDB，小程序


效果图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181031123304704.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20181031123515447.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181031123602630.png)![在这里插入图片描述](https://img-blog.csdnimg.cn/20181031123643958.png)


项目描述：完成一个关于纪念品的微信小程序项目，功能：轮播图，下拉列表，下拉刷新，通过接口拉取数据显示等
技术：nodejs，MongoDB，小程序, html, css
遇到的问题和难点：
1.轮播图和下拉列表的图片怎么存储？选择express框架和mongodb数据库，在后台声明一个数组，存入图片源路径。
2.数据怎么从数据库拉取？/addData接口添加数据，/getSwipers接口获取轮播图数据，在index.js接口声明一个函数getSwipers去请求url地址使用setData方法获取数据
3.列表的详情页面怎么保证每个页面不一样？在接口拉取数据时候携带一个id，去请求数组里面的一条数据，后台访问/getGifts/:id接口，根据id查找数据并返回json数据。



