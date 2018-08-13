
  $.ajax({
    type: 'GET',
    url: "http://www.redbullshopus.com/products.json",
  data: {
    },
   success: function(response) {
      for(var i = 0; i < response.products.length; i++){
       

        $('#main').append("<div class='interior'>"+
          "<div class ='photos'>" + "<img width='250' height='250' src="+ response.products[i].images[0].src +"</div>" +
        "<div class='product'>" + response.products[i].title + "</div>"+
        "<div class ='price'>" +"$"+ response.products[i].variants[0].price +"<br><button>ADD TO CART</button>"+
        "</div></div>")

      }
    }
  })

