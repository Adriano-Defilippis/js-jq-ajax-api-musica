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

      var arrOggetti = [];
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

        var context = {attributo: val.genre ,urlImg: val.poster ,title: val.title, author: val.author, year: val.year};
        var html = template(context);
        //Appendo al contenitore il template compilato
        $('.cds-container').append(html + "<br>");

        console.log(val.title + val.genre + val.author);

        arrOggetti.push(oggetto);

          console.log("nuovo oggetto ", oggetto);


      });
      //Funzine creata da me per visualizzare album
      //genere relativo
      selectGenere();
      console.log("array nuovo degli oggetti restituiti da ajax: ", arrOggetti);

    },
    error : function(error){
        alert("problemi con il server");
    }




  });





// DOCUMENT READY
});

//Funzione da inserire all'interno sel success
function selectGenere(){
  var selectBar = $('select option');
  console.log(selectBar);

  selectBar.click(function(){

    var arrCd = $('.cd');
    //Si riferisce al valore del select scelto dall'User
    var thisOption = $(this).val();
    console.log("valore dell'opzione cliccata: ", thisOption);
    console.log(arrCd);

    $('#genereh1').text(thisOption);

    $.each(arrCd, function(index, val) {
      //Si riferisce al cd che viene cincla in un preciso momento
      var thisCd = $(this);
      //Se il cd in questione(this) ha l'attributo genere !== da
      //quello selezionato da <select>, allora il display diventa none
      if (thisCd.attr("genere") !== thisOption) {

        thisCd.fadeOut();
        console.log(thisCd);
      }
      else {
        //Aggiungo una classe al contenitore dei cd
        $('.cds-container').addClass("select");

        //Creo un controllo switch per applicare il background
        //in base al genere
        switch (thisOption) {
          case "Metal":
            $('.cds-container').addClass("bg-b");
            break;

          case "Rock":
            $('.cds-container').removeClass("bg-b bg-y bg-br");
            $('.cds-container').addClass("bg-r");
            break;

          case "Pop":
            $('.cds-container').removeClass("bg-b bg-r bg-br");
            $('.cds-container').addClass("bg-y");
            break;

          case "Jazz":
            $('.cds-container').removeClass("bg-b bg-r bg-y");
            $('.cds-container').addClass("bg-br");
            break;

          default:
            $('.cds-container').removeClass("bg-b bg-r bg-y bg-br");

        }
        //Faccio comparire h1 contenete nome categoria
        $('#genereh1').addClass("active");

        //e faccio comparire quelli che hanno l'attributo===
        //alla selezione
        thisCd.fadeIn();
      }
      //Mostro tutti gli elementi
      if (thisOption === "showAll") {

        //Tolgo le classi di fondo del container generi
        $('.cds-container').removeClass("bg-b bg-r bg-y bg-br");
        //Rimuovo il titolo H1 della categoria
        $('#genereh1').removeClass("active");
        //Rimuovo classe al contenitore dei cd
        $('.cds-container').removeClass("select");
        //Mostro tutti i cd
        thisCd.fadeIn();
      }
    });



  });
}
