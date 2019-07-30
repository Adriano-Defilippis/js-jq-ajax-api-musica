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

      $.each(arrCd, function(index, val) {

        for (var key in val) {

          $('.cds-container').append(key + " : " + val[key] + "<br>");

          console.log(key + " : " + val[key]);
        }

        $('.cds-container').append("<hr>");

        // $('.cds-container').append(val.title + " " + val.genre + " " + val.author + " " + "<br>");

        // for (const [key, value] of Object.entries(val)) {
        //   console.log(key, value);
        // }
        console.log(val.title + val.genre + val.author);
        // console.log(val.val());

      });


    },


  });


});
