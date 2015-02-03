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
      var sum = _.reduce(price, function(memo, num){ return memo + num; });
      data.content.push({label: key, value: sum});
    }

    var total = _.reduce(_.pluck(data.content, 'value'), function(memo, num){ return memo + num;});
    document.getElementsByTagName('h1')[0].innerHTML = '總計 : ' + total.toLocaleString() + '元';

    var output = {
      header: {
        title: {
          text: '中國國民黨取自國家土地市值統計'
        }
      },
      labels: {
        inner: {
          format: 'percentage'
        }
      },
      tooltips: {
        enabled: true,
        type: 'placeholder',
        string: 'NTD{value}',
        placeholderParser: function(index, data) {
          data.value = data.value.toLocaleString();
        }
      },
      size: {
        'canvasHeight': 700,
        'canvasWidth': 1200
      },
      data: data
    };

    var pie = new d3pie('pie', output);
  });
