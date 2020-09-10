$('.carousel').carousel({
        interval: 2000
      })

 $(document).ready(function () {
        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];
        for (i = 0; i < countersQuantity; i++) {
          counter[i] = parseInt(counters[i].innerHTML);
        }
        var count = function (start, value, id) {
          var localStart = start;
          setInterval(function () {
            if (localStart < value) {
              localStart++;
              counters[id].innerHTML = localStart;
            }
          }, 40);
        }
        for (j = 0; j < countersQuantity; j++) {
          count(0, counter[j], j);
        }
      });

 $(document).ready(function () {
        $("#testimonial-slider").owlCarousel({
          items: 1,
          itemsDesktop: [1000, 2],
          itemsDesktopSmall: [979, 1],
          itemsTablet: [768, 1],
          pagination: false,
          navigation: true,
          slideSpeed: 1000,
          singleItem: true,
          transitionStyle: "goDown",
          navigationText: ["", ""],
          autoPlay: false
        });
      });

 // Detect request animation frame
      var scroll = window.requestAnimationFrame ||
        // IE Fallback
        function (callback) { window.setTimeout(callback, 1 / 6670) };
      var elementsToShow = document.querySelectorAll('.show-on-scroll');

      function loop() {

        Array.prototype.forEach.call(elementsToShow, function (element) {
          if (isElementInViewport(element)) {
            element.classList.add('is-visible');
          }
        });

        scroll(loop);
      }

      // Call the loop for the first time
      loop();

      // Helper function from: http://stackoverflow.com/a/7557433/274826
      function isElementInViewport(el) {
        // special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
          el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
          (rect.top <= 0
            && rect.bottom >= 0)
          ||
          (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
          ||
          (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
      }

      jQuery(function ($) {
        $('#golink').click(function () {
          return false;
        }).dblclick(function () {
          window.location = this.href;
          return false;
        });
      });

       // CHAT BOOT MESSENGER////////////////////////


      $(document).ready(function () {
        $(".chat_on").click(function () {
          $(".Layout").toggle();
          $(".chat_on").hide(300);
        });

        $(".chat_close_icon").click(function () {
          $(".Layout").hide();
          $(".chat_on").show(300);
        });

      });