/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./resources/assets/js/tracking.js ***!
  \*****************************************/
;

(function ($, window, document) {
  "use strict";

  var $forms = null;
  /**
   * Register pageview.
   *
   * @param {String} pageId
   * @returns {Void}
   */

  var track = function track(pageId) {
    $.ajax({
      method: "POST",
      url: window.OPDashboardStats.rest_url,
      data: {
        pid: pageId,
        referer: document.referrer,
        currentUrl: window.location.href,
        _wpnonce: window.OPDashboardStats.nonce
      }
    }).done(function (result) {
      if (typeof result === 'undefined' || result.status !== 200) {
        return;
      }

      $forms.each(function () {
        $('<input>').attr({
          type: 'hidden',
          id: 'pageview_record_id',
          name: 'pageview_record_id',
          value: result.data.pageview_record_id
        }).appendTo($(this));
      });
      window.OPDashboardStats.pageview_record_id = result.data.pageview_record_id;
    });
  };

  $(document).ready(function () {
    $forms = $('.op3-element[data-op3-element-type="form"] form, form[data-op3-form="op3-smart-form"], .op3-element[data-op3-element-type="contactform"] form'); // Register pageview only if there is op3 or smart-theme-3 form on page

    if ($forms.length && OPDashboardStats && OPDashboardStats.pid) {
      track(OPDashboardStats.pid);
    }
  });
})(jQuery, window, document);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL3RyYWNraW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQUMsQ0FBQyxVQUFTQSxDQUFULEVBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCO0FBRTVCOztBQUVBLE1BQUlDLE1BQU0sR0FBRyxJQUFiO0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNJLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLE1BQUQsRUFBWTtBQUN0QkwsSUFBQUEsQ0FBQyxDQUFDTSxJQUFGLENBQU87QUFDSEMsTUFBQUEsTUFBTSxFQUFFLE1BREw7QUFFSEMsTUFBQUEsR0FBRyxFQUFFUCxNQUFNLENBQUNRLGdCQUFQLENBQXdCQyxRQUYxQjtBQUdIQyxNQUFBQSxJQUFJLEVBQUU7QUFDRkMsUUFBQUEsR0FBRyxFQUFFUCxNQURIO0FBRUZRLFFBQUFBLE9BQU8sRUFBRVgsUUFBUSxDQUFDWSxRQUZoQjtBQUdGQyxRQUFBQSxVQUFVLEVBQUVkLE1BQU0sQ0FBQ2UsUUFBUCxDQUFnQkMsSUFIMUI7QUFJRkMsUUFBQUEsUUFBUSxFQUFFakIsTUFBTSxDQUFDUSxnQkFBUCxDQUF3QlU7QUFKaEM7QUFISCxLQUFQLEVBU0dDLElBVEgsQ0FTUSxVQUFDQyxNQUFELEVBQVk7QUFDaEIsVUFBSSxPQUFPQSxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxNQUFNLENBQUNDLE1BQVAsS0FBa0IsR0FBdkQsRUFBNEQ7QUFDeEQ7QUFDSDs7QUFFRG5CLE1BQUFBLE1BQU0sQ0FDRG9CLElBREwsQ0FDVSxZQUFXO0FBQ2J2QixRQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWF3QixJQUFiLENBQWtCO0FBQ2RDLFVBQUFBLElBQUksRUFBRSxRQURRO0FBRWRDLFVBQUFBLEVBQUUsRUFBRSxvQkFGVTtBQUdkQyxVQUFBQSxJQUFJLEVBQUUsb0JBSFE7QUFJZEMsVUFBQUEsS0FBSyxFQUFFUCxNQUFNLENBQUNWLElBQVAsQ0FBWWtCO0FBSkwsU0FBbEIsRUFLR0MsUUFMSCxDQUtZOUIsQ0FBQyxDQUFDLElBQUQsQ0FMYjtBQU1ILE9BUkw7QUFVQUMsTUFBQUEsTUFBTSxDQUFDUSxnQkFBUCxDQUF3Qm9CLGtCQUF4QixHQUE2Q1IsTUFBTSxDQUFDVixJQUFQLENBQVlrQixrQkFBekQ7QUFDSCxLQXpCRDtBQTBCSCxHQTNCRDs7QUE2QkE3QixFQUFBQSxDQUFDLENBQUNFLFFBQUQsQ0FBRCxDQUFZNkIsS0FBWixDQUFrQixZQUFXO0FBQ3pCNUIsSUFBQUEsTUFBTSxHQUFHSCxDQUFDLENBQUMsK0lBQUQsQ0FBVixDQUR5QixDQUd6Qjs7QUFDQSxRQUFJRyxNQUFNLENBQUM2QixNQUFQLElBQWlCdkIsZ0JBQWpCLElBQXFDQSxnQkFBZ0IsQ0FBQ0csR0FBMUQsRUFBK0Q7QUFDM0RSLE1BQUFBLEtBQUssQ0FBQ0ssZ0JBQWdCLENBQUNHLEdBQWxCLENBQUw7QUFDSDtBQUNKLEdBUEQ7QUFTSCxDQWxEQSxFQWtERXFCLE1BbERGLEVBa0RVaEMsTUFsRFYsRUFrRGtCQyxRQWxEbEIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL09wdGltaXplRGFzaGJvYXJkLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90cmFja2luZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQpIHtcblxuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyICRmb3JtcyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBwYWdldmlldy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYWdlSWRcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cbiAgICBjb25zdCB0cmFjayA9IChwYWdlSWQpID0+IHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6IHdpbmRvdy5PUERhc2hib2FyZFN0YXRzLnJlc3RfdXJsLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHBpZDogcGFnZUlkLFxuICAgICAgICAgICAgICAgIHJlZmVyZXI6IGRvY3VtZW50LnJlZmVycmVyLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRVcmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICAgIF93cG5vbmNlOiB3aW5kb3cuT1BEYXNoYm9hcmRTdGF0cy5ub25jZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5kb25lKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAndW5kZWZpbmVkJyB8fCByZXN1bHQuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRmb3Jtc1xuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCc8aW5wdXQ+JykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAncGFnZXZpZXdfcmVjb3JkX2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYWdldmlld19yZWNvcmRfaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlc3VsdC5kYXRhLnBhZ2V2aWV3X3JlY29yZF9pZFxuICAgICAgICAgICAgICAgICAgICB9KS5hcHBlbmRUbygkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd2luZG93Lk9QRGFzaGJvYXJkU3RhdHMucGFnZXZpZXdfcmVjb3JkX2lkID0gcmVzdWx0LmRhdGEucGFnZXZpZXdfcmVjb3JkX2lkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgJGZvcm1zID0gJCgnLm9wMy1lbGVtZW50W2RhdGEtb3AzLWVsZW1lbnQtdHlwZT1cImZvcm1cIl0gZm9ybSwgZm9ybVtkYXRhLW9wMy1mb3JtPVwib3AzLXNtYXJ0LWZvcm1cIl0sIC5vcDMtZWxlbWVudFtkYXRhLW9wMy1lbGVtZW50LXR5cGU9XCJjb250YWN0Zm9ybVwiXSBmb3JtJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBSZWdpc3RlciBwYWdldmlldyBvbmx5IGlmIHRoZXJlIGlzIG9wMyBvciBzbWFydC10aGVtZS0zIGZvcm0gb24gcGFnZVxuICAgICAgICBpZiAoJGZvcm1zLmxlbmd0aCAmJiBPUERhc2hib2FyZFN0YXRzICYmIE9QRGFzaGJvYXJkU3RhdHMucGlkKSB7XG4gICAgICAgICAgICB0cmFjayhPUERhc2hib2FyZFN0YXRzLnBpZCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTsiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsImRvY3VtZW50IiwiJGZvcm1zIiwidHJhY2siLCJwYWdlSWQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiT1BEYXNoYm9hcmRTdGF0cyIsInJlc3RfdXJsIiwiZGF0YSIsInBpZCIsInJlZmVyZXIiLCJyZWZlcnJlciIsImN1cnJlbnRVcmwiLCJsb2NhdGlvbiIsImhyZWYiLCJfd3Bub25jZSIsIm5vbmNlIiwiZG9uZSIsInJlc3VsdCIsInN0YXR1cyIsImVhY2giLCJhdHRyIiwidHlwZSIsImlkIiwibmFtZSIsInZhbHVlIiwicGFnZXZpZXdfcmVjb3JkX2lkIiwiYXBwZW5kVG8iLCJyZWFkeSIsImxlbmd0aCIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=