angular.module('core.directives')
  .directive("cvTrim", [ function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('blur', function() {
          scope.$apply(function() {
            element.val(element.val().trim().replace(/\s+/g, ' '));
          });
        });
      }
    };
  }])
  .directive("xngHref", ['$window', function($window) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          $window.location.href = attrs.xngHref;
        });
      }
    };
  }])
  .directive('clickOut', ['$window', '$parse', function($window, $parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var clickOutHandler = $parse(attrs.clickOut);

        angular.element($window).on('click', function(event) {
          if (element[0].contains(event.target)) return;
          clickOutHandler(scope, {
            $event: event
          });
          scope.$apply();
        });
      }
    };
  }])
  .directive('cvLoader', [function() {
    return {
      restrict: 'A',
      template: '<svg width=\'70px\' height=\'70px\' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-facebook"><rect x="0" y="0" width="100" height="100" fill="transparent" class="bk"></rect><g transform="translate(20 50)"><rect x="-10" y="-30" width="20" height="60" fill="#981937" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(50 50)"><rect x="-10" y="-30" width="20" height="60" fill="#981937" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.1s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g><g transform="translate(80 50)"><rect x="-10" y="-30" width="20" height="60" fill="#981937" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="2" to="1" begin="0.2s" repeatCount="indefinite" dur="1s" calcMode="spline" keySplines="0.1 0.9 0.4 1" keyTimes="0;1" values="2;1"></animateTransform></rect></g></svg>'
    };
  }])
  .directive('cvTextLoader', [function() {
    return {
      restrict: 'A',
      template: '<svg width=\'24px\' height=\'24px\' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ellipsis"><circle cx="16" cy="50" r="15" fill="#981937" transform="rotate(0 50 50)"><animate id="anir11" attributeName="r" from="0" to="15" begin="0s;anir14.end" dur="0.25s" fill="freeze"></animate><animate id="anir12" attributeName="r" from="15" to="15" begin="anir11.end" dur="1.25s" fill="freeze"></animate><animate id="anir13" attributeName="r" from="15" to="0" begin="anir12.end" dur="0.25s" fill="freeze"></animate><animate id="anir14" attributeName="r" from="0" to="0" begin="anir13.end" dur="0.25s" fill="freeze"></animate><animate id="anix11" attributeName="cx" from="16" to="16" begin="0s;anix18.end" dur="0.25s" fill="freeze"></animate><animate id="anix12" attributeName="cx" from="16" to="16" begin="anix11.end" dur="0.25s" fill="freeze"></animate><animate id="anix13" attributeName="cx" from="16" to="50" begin="anix12.end" dur="0.25s" fill="freeze"></animate><animate id="anix14" attributeName="cx" from="50" to="50" begin="anix13.end" dur="0.25s" fill="freeze"></animate><animate id="anix15" attributeName="cx" from="50" to="84" begin="anix14.end" dur="0.25s" fill="freeze"></animate><animate id="anix16" attributeName="cx" from="84" to="84" begin="anix15.end" dur="0.25s" fill="freeze"></animate><animate id="anix17" attributeName="cx" from="84" to="84" begin="anix16.end" dur="0.25s" fill="freeze"></animate><animate id="anix18" attributeName="cx" from="84" to="16" begin="anix17.end" dur="0.25s" fill="freeze"></animate></circle><circle cx="50" cy="50" r="15" fill="#c17587" transform="rotate(0 50 50)"><animate id="anir21" attributeName="r" from="15" to="15" begin="0s;anir25.end" dur="1s" fill="freeze"></animate><animate id="anir22" attributeName="r" from="15" to="0" begin="anir21.end" dur="0.25s" fill="freeze"></animate><animate id="anir23" attributeName="r" from="0" to="0" begin="anir22.end" dur="0.25s" fill="freeze"></animate><animate id="anir24" attributeName="r" from="0" to="15" begin="anir23.end" dur="0.25s" fill="freeze"></animate><animate id="anir25" attributeName="r" from="15" to="15" begin="anir24.end" dur="0.25s" fill="freeze"></animate><animate id="anix21" attributeName="cx" from="16" to="50" begin="0s;anix28.end" dur="0.25s" fill="freeze"></animate><animate id="anix22" attributeName="cx" from="50" to="50" begin="anix21.end" dur="0.25s" fill="freeze"></animate><animate id="anix23" attributeName="cx" from="50" to="84" begin="anix22.end" dur="0.25s" fill="freeze"></animate><animate id="anix24" attributeName="cx" from="84" to="84" begin="anix23.end" dur="0.25s" fill="freeze"></animate><animate id="anix25" attributeName="cx" from="84" to="84" begin="anix24.end" dur="0.25s" fill="freeze"></animate><animate id="anix26" attributeName="cx" from="84" to="16" begin="anix25.end" dur="0.25s" fill="freeze"></animate><animate id="anix27" attributeName="cx" from="16" to="16" begin="anix26.end" dur="0.25s" fill="freeze"></animate><animate id="anix28" attributeName="cx" from="16" to="16" begin="anix27.end" dur="0.25s" fill="freeze"></animate></circle><circle cx="84" cy="50" r="15" fill="#981937" transform="rotate(0 50 50)"><animate id="anir31" attributeName="r" from="15" to="15" begin="0s;anir35.end" dur="0.5s" fill="freeze"></animate><animate id="anir32" attributeName="r" from="15" to="0" begin="anir31.end" dur="0.25s" fill="freeze"></animate><animate id="anir33" attributeName="r" from="0" to="0" begin="anir32.end" dur="0.25s" fill="freeze"></animate><animate id="anir34" attributeName="r" from="0" to="15" begin="anir33.end" dur="0.25s" fill="freeze"></animate><animate id="anir35" attributeName="r" from="15" to="15" begin="anir34.end" dur="0.75s" fill="freeze"></animate><animate id="anix31" attributeName="cx" from="50" to="84" begin="0s;anix38.end" dur="0.25s" fill="freeze"></animate><animate id="anix32" attributeName="cx" from="84" to="84" begin="anix31.end" dur="0.25s" fill="freeze"></animate><animate id="anix33" attributeName="cx" from="84" to="84" begin="anix32.end" dur="0.25s" fill="freeze"></animate><animate id="anix34" attributeName="cx" from="84" to="16" begin="anix33.end" dur="0.25s" fill="freeze"></animate><animate id="anix35" attributeName="cx" from="16" to="16" begin="anix34.end" dur="0.25s" fill="freeze"></animate><animate id="anix36" attributeName="cx" from="16" to="16" begin="anix35.end" dur="0.25s" fill="freeze"></animate><animate id="anix37" attributeName="cx" from="16" to="50" begin="anix36.end" dur="0.25s" fill="freeze"></animate><animate id="anix38" attributeName="cx" from="50" to="50" begin="anix37.end" dur="0.25s" fill="freeze"></animate></circle><circle cx="84" cy="50" r="15" fill="#c17587" transform="rotate(0 50 50)"><animate id="anir41" attributeName="r" from="15" to="0" begin="0s;anir44.end" dur="0.25s" fill="freeze"></animate><animate id="anir42" attributeName="r" from="0" to="0" begin="anir41.end" dur="0.25s" fill="freeze"></animate><animate id="anir43" attributeName="r" from="0" to="15" begin="anir42.end" dur="0.25s" fill="freeze"></animate><animate id="anir44" attributeName="r" from="15" to="15" begin="anir43.end" dur="1.25s" fill="freeze"></animate><animate id="anix41" attributeName="cx" from="84" to="84" begin="0s;anix48.end" dur="0.25s" fill="freeze"></animate><animate id="anix42" attributeName="cx" from="84" to="16" begin="anix41.end" dur="0.25s" fill="freeze"></animate><animate id="anix43" attributeName="cx" from="16" to="16" begin="anix42.end" dur="0.25s" fill="freeze"></animate><animate id="anix44" attributeName="cx" from="16" to="16" begin="anix43.end" dur="0.25s" fill="freeze"></animate><animate id="anix45" attributeName="cx" from="16" to="50" begin="anix44.end" dur="0.25s" fill="freeze"></animate><animate id="anix46" attributeName="cx" from="50" to="50" begin="anix45.end" dur="0.25s" fill="freeze"></animate><animate id="anix47" attributeName="cx" from="50" to="84" begin="anix46.end" dur="0.25s" fill="freeze"></animate><animate id="anix48" attributeName="cx" from="84" to="84" begin="anix47.end" dur="0.25s" fill="freeze"></animate></circle></svg>'
    };
  }]);
