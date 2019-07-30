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

        $('.cds-container').append(val.title + "<br>");

        console.log(val.title);
      });


    },


  });


});
