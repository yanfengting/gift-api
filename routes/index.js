var express = require('express');
var router = express.Router();
var db = require('../modules/db');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addData', function(req, res, next){
  var docs = [
    { src: '/images/swipers/1.jpg', title: '直尺书签'},
    { src: '/images/swipers/2.jpg', title: '羽毛书签'},
    { src: '/images/swipers/3.jpg', title: '迷你书签'},
    { src: '/images/swipers/4.jpg', title: '钢笔'},
    { src: '/images/swipers/5.jpg', title: '戒指'},
    { src: '/images/swipers/6.jpg', title: '火漆印章'}
  ];
  
  db.swiperModel.insertMany(docs, function(err, result){
    res.json({code: 200, message: '成功'})
  });
  
})
router.get('/addGifts',function(req,res,next){
  var docs2 = [
    { src: '/images/gift/1.jpg', title: '直尺书签',price:'￥23',count:'233',info:'他的作用可不小，可当直尺使用，承载着对学生时代的怀念和对美好生活的追求。'},
    { src: '/images/gift/2.jpg', title: '迷你书签',price:'￥10',count:'23',info:'小巧玲珑，身躯虽小，但所承载的记忆不少，表面嵌有带有中北校徽，独具一格。'},
    { src: '/images/gift/3.jpg', title: '羽毛书签',price:'￥13',count:'253',info:'羽毛的形态美观，表面嵌有带有中北校徽，独具一格。使得其既有实用性，又有珍藏意义。'},
    { src: '/images/gift/4.jpg', title: '钢笔'    ,price:'￥35',count:'221',info:'中北定制版钢笔，送出去的不仅是如笔尖般的细腻的情愫，更是一种你若不离，我便不弃的决心。'},
    { src: '/images/gift/5.jpg', title: '钛钢戒指',price:'￥28',count:'253',info:'外壁刻有“中北大学”及校徽，内壁根据购买者意专属定制。美观大方，便于携带。有很好的纪念意义。'},
    { src: '/images/gift/6.jpg', title: '火漆印章',price:'￥99',count:'653',info:'火漆有多种颜色，木盒采用复古色且刻有“中北大学”及校徽。用来封信件等都有极高贵奢华的感受。'},
    { src: '/images/gift/7.jpg', title: '木质书签',price:'￥56',count:'233',info:'表面刻有校训——致知于行。其上端准有缀以纯色流苏，以端庄大方的盒子包装，给人以美的感受。'},
    { src: '/images/gift/8.jpg', title: '宝珠笔',price:'￥25',count:'213',info:'中北定制版宝珠笔，带给你高贵的体验，承载着对学生时代的怀念和对美好生活的追求。'},
    { src: '/images/gift/9.jpg', title: '明信片',price:'￥23',count:'333',info:'已经消失的小吃街、火车头，带不走、忘不掉的回忆，我们将它印在明信片上，希望这些可以给你的怀念带来慰藉。'},
    { src: '/images/gift/10.jpg', title: '银戒指',price:'￥99',count:'733',info:'标准银S925银打造，精美盒子包装。内壁提供进定制服务，给你最难忘的体验。'},
    { src: '/images/gift/11.jpg', title: '子弹壳',price:'￥12',count:'533',info:'人民兵工第一校，我见过你横刀立马的雕像，舍我其谁的炮火，不忘你从太行山走来，为纪念你，佩戴有你印记的子弹壳。'},
    { src: '/images/gift/12.jpg', title: '扑克牌',price:'￥5',count:'933',info:'让我们的玩扑克时更可以细细欣赏中北，使我们对中北的记忆喷涌而出，纪念中北，你值得拥有。'}
  ];
  db.giftModel.insertMany(docs2, function(err, result){
    res.json({code: 200, message: '成功'})
  });
})
router.get('/getSwipers', function(req, res, next){
  //查找所有数据
  db.swiperModel.find({}, function(err, result){
    if(err){
      res.json({code: 201, message: '访问数据出错'});
      return;
    }
    res.json({code: 200, message: '成功', swipers: result})
  })
})
router.get('/getGifts', function(req, res, next){
  //查找所有数据
  db.giftModel.find({}, function(err, result){
    if(err){
      res.json({code: 201, message: '访问数据出错'});
      return;
    }
    res.json({code: 200, message: '成功', gifts: result})
  })
})

router.get('/getGifts/:id', function(req, res, next){
  var id = req.params.id;
  console.log(id);
  db.giftModel.find({_id: id}, function(err, result){
    if(err){
      res.json({code: 201, message: '访问数据出错'});
      return;
    }
    res.json({code: 200, message: '成功', gifts: result})
  })
})

module.exports = router;
