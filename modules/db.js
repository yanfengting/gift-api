// 访问数据模块
// 操作mongodb数据所使用的模块包，mongoose中封装大量操作数据库的api，先引入再使用。
var mongoose = require('mongoose');
// 先连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/demo', {useNewUrlParser: true});
// 集合结构（架构）
var swiperSchma = new mongoose.Schema({
    src: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
var giftSchma = new mongoose.Schema({
    src: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    info:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    count:{
        type: String,
        required: true
    }
})


// 集合模型
var swiperModel = mongoose.model('swiper', swiperSchma);
var giftModel = mongoose.model('gift',giftSchma);

module.exports = {
    swiperModel,
    giftModel
}