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
        // Ogni elemento dell'Array diventa un oggetto
          var oggetto =  {
                          "poster" : val.poster,
                          "title" : val.title,
                          "author" : val.author,
                          "year" : val.year,
                          "genere" : val.genre
                        };
        //Clono template di handlebars
        var source = $('#templateCd').html();
        var template = Handlebars.compile(source);

        var context = {urlImg: val.poster ,title: val.title, author: val.author, year: val.year};
        var html = template(context);
        //Appendo al contenitore il template compilato
        $('.cds-container').append(html + "<br>");

        console.log(val.title + val.genre + val.author);


          console.log("nuovo oggetto ", oggetto);
        // }


      });


    },


  });

  var selectBar = $('select option');
  console.log(selectBar);

  selectBar.click(function(){

    var thisOption = $(this).val();
    console.log("valore dell'opzione cliccata: ", thisOption);
    console.log($('.cd'));

    for (var i = 0; i < $('.cd').length; i++) {
      $('.cd')[i]
    }


  });


// DOCUMENT READY
});
