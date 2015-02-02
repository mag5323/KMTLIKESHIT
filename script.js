d3.json("data/2014_estate.json")
  .get(function(error, estate) {

    var data = {
      content: []
    };

    delete estate['救國團劍潭青年活動中心建物一覽表'];
  });
