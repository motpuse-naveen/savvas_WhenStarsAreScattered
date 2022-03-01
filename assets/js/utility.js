$.fn.extend({
  Disable: function () {
    return this.each(function () {
      $(this).attr("disabled", "disabled").attr("aria-disabled", "true").addClass("disabled")
    });
  },
  Enable: function () {
    return this.each(function () {
      $(this).removeAttr("disabled").removeAttr("aria-disabled").removeClass("disabled")
    });
  },
  ShowElement: function () {
    return this.each(function () {
      $(this).removeAttr("aria-hidden").removeClass("disnone");
    });
  },
  HideElement: function () {
    return this.each(function () {
      $(this).attr("aria-hidden", "true").addClass("disnone");
    });
  },
  InactiveTabs: function () {
    return this.each(function () {
      $(this).removeClass("active").addClass("inactive").attr("aria-hidden", "true");
    });
  },
  ActiveTabs: function () {
    return this.each(function () {
      $(this).addClass("active").removeClass("inactive").attr("aria-hidden", "false");
    });
  }
});

(function (document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: 56,


    init: function () {

      $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
      $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
    },

    getFixedOffset: function () {
      return this.OFFSET_HEIGHT_PX;
    },


    scrollIfAnchor: function (href, pushToHistory) {
      var match, anchorOffset;

      if (!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));

      if (match) {
        anchorOffset = $(match).offset().top - this.getFixedOffset();
        $('html, body').animate({ scrollTop: anchorOffset });
        /*
        $("a[refid]").removeClass("active");
        $("a[refid='" + href.slice(1) + "']").addClass("active");
        */

        if (HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },

    scrollToCurrent: function (e) {
      if (this.scrollIfAnchor(window.location.hash) && e) {
        e.preventDefault();
      }
    },

    delegateAnchors: function (e) {
      var elem = e.target;

      if (this.scrollIfAnchor(elem.getAttribute('href'), true)) {
        e.preventDefault();
      }
    }
  };

  $(document).ready($.proxy(anchorScrolls, 'init'));
})(window.document, window.history, window.location);
