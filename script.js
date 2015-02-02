d3.json("data/2014_estate.json")
  .get(function(error, estate) {

    var data = {
      content: []
    };

    delete estate['救國團劍潭青年活動中心建物一覽表'];

    for (key in estate) {
      var kmt = estate[key].data;
      var priceTmp = _.pluck(kmt, '2014年市值推估');
      var price = _.pluck(priceTmp, '總價（元）');
      var sum = _.reduce(price, function(memo, num){ return memo + num; }, 0);
      data.content.push({label: key, value: sum});
    }
  });
