let regSub = new RegExp('^((?!' + 'primablock.com' + '|www)([^.]*))', 'g');
let subdomain = document.location.hostname.match(regSub);

if (document.location.hostname.search("primablock.com") !== -1 && !(subdomain && subdomain[0])) {
  window.ga = window.ga || function () {
    (ga.q = ga.q || []).push(arguments)
  };
  ga.l = +new Date;
  ga('create', 'UA-108528431-1', 'auto');

  ga('require', 'eventTracker');
  ga('require', 'outboundLinkTracker');
  ga('require', 'urlChangeTracker');

  ga('send', 'pageview');

  var trackEvent = function(label) {
    ga('send', 'event', 'outbound', 'click', label);
  }
}