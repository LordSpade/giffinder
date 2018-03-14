// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  
    function giphyURLWithSearchTerm(searchTerm) {

        var url = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
        return url;

    }

    function appendImageToBody(srcURL) {
        $('body').append('<img src=' + srcURL + '>');
    }

    function callGiphyAPIWithSearchTerm(searchTerm) {
        var url = giphyURLWithSearchTerm(searchTerm);
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
                var image_url = response.data[0].images.original.url;
                console.log(image_url);
                appendImageToBody(image_url);
            },

        });
    }

    $('button').click(function() {
        var searchTerm = $('#srch-term').val();
        console.log(searchTerm);
        callGiphyAPIWithSearchTerm(searchTerm);

    });

   








  
});
