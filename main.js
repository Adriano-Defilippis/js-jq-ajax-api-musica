$(document).ready(function() {
	//Code


  //Ritorno Array lista cd da chiamata ajax
  var url = "https://flynn.boolean.careers/exercises/api/array/music"

  $.ajax({

    url: url,
    method: "GET",
    success: function(data){
      var arrCd = data.response;
      console.log(arrCd);

      //Metodo JQUERY per scorrere tutto l'array
      $.each(arrCd, function(index, val) {

        //Ciclo per attraversare ogni oggetto dell array
        for (var key in val) {
          var source = $('#templateCd').html();
          var template = Handlebars.compile(source);

          var context = {urlImg: val.poster ,title: val.title, author: val.author, year: val.year};
          var html = template(context);
          //trovo le coppie di chiave valore e lo stampo a schermo
          $('.cds-container').append(html + "<br>");

          console.log(key + " : " + val[key]);
          console.log(val.title + val.genre + val.author);
        }

        //TAG HTML
        $('.cds-container').append("<hr>");


        console.log(val.title + val.genre + val.author);


      });


    },


  });


});
