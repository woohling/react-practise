import 'jquery';
import 'fancybox/dist/js/jquery.fancybox.pack';
import 'fancybox/dist/css/jquery.fancybox.css';
import 'fancybox/dist/helpers/js/jquery.fancybox-thumbs';
import 'fancybox/dist/helpers/css/jquery.fancybox-thumbs.css';

$(document).ready(function() {
    $(".fancybox").fancybox({
        helpers:  {
            thumbs : {
                width: 50,
                height: 50
            }
        }
    });
});