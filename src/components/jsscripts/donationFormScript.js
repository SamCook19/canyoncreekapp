if (typeof window.widgetRefs == 'undefined') {
    window.widgetRefs = [];
  }
  if(document.documentElement.lang.length===0){
    document.getElementsByTagName('html')[0].setAttribute('lang','en');
  }
  
  
  var _igWMbMaNGlzQ = {};
  window.widgetRefs.push("_igWMbMaNGlzQ");
  
  _igWMbMaNGlzQ.ASSETS_PREFIX = 'https://default.salsalabs.org';
  
  
  _igWMbMaNGlzQ.init_functions = [];
  _igWMbMaNGlzQ.post_init_functions = [];
  
  _igWMbMaNGlzQ.addInit = function addInit(func) {
    _igWMbMaNGlzQ.init_functions.push(func);
  }
  
  _igWMbMaNGlzQ.addInit(function () {
    try {
      window['sliGoogInit'] = new Function();
    } catch (e) {
    }
  });
  
  
  _igWMbMaNGlzQ.addPostInit = function addPostInit(func) {
    _igWMbMaNGlzQ.post_init_functions.push(func);
  }
  
  _igWMbMaNGlzQ.doInitialize = function doInitialize() {
  
  
    for (var i = 0; i < _igWMbMaNGlzQ.init_functions.length; i++) {
      _igWMbMaNGlzQ.init_functions[i]();
    }
    // load images
    window.IGNITE.jquery('[ignite-image-src]').each(function (index, e) {
      e = window.IGNITE.jquery(e);
      var img = e.attr("ignite-image-src");
      if (img.length > 0) {
        e.attr('src', img);
      }
    });
    for (var i = 0; i < _igWMbMaNGlzQ.post_init_functions.length; i++) {
      _igWMbMaNGlzQ.post_init_functions[i]();
    }
  
    if (typeof window.salsaWidgetFinished === "function") {
      try {
        window.salsaWidgetFinished(_igWMbMaNGlzQ.activityId);
      } catch (e) {
        console.debug(e);
        // do nothing if it errors, it isn't our code, but we don't want to prevent the page from loading
      }
    }
  
  }
  
  _igWMbMaNGlzQ.hideLoading = function () {
    _igWMbMaNGlzQ.container.find(".sli-loading-message").hide();
  }
  
  _igWMbMaNGlzQ.initializeOnLoad = function initializeOnLoad() {
    window.IGNITE.jquery(window).load(function () {
      _igWMbMaNGlzQ.doInitialize();
    });
  }
  
  _igWMbMaNGlzQ.resetSharing = function () {
    var shareDivs = window.IGNITE.jquery(".sli-socialShare");
    if (shareDivs && shareDivs.length > 0) {
      shareDivs.show();
      if (typeof FB !== 'undefined') {
        shareDivs.find("div.fb-share-button").attr("fb-xfbml-state", "reset").attr("fb-iframe-plugin-query", "").empty()
            .each(function (index, element) {
              FB.XFBML.parse(element.parentNode);
            });
      }
      if (typeof twttr !== 'undefined') {
        shareDivs.find("iframe.twitter-share-button").replaceWith("<a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-count=\"none\"></a>");
        twttr.widgets.load();
      }
    }
  
  }
  
  _igWMbMaNGlzQ.addPostInit(_igWMbMaNGlzQ.resetSharing);
  
  _igWMbMaNGlzQ.initialize = function initialize() {
  
    try {
      // check to see if the document is already loaded and call doInitialize
      if (document.readyState == 'complete') {
        _igWMbMaNGlzQ.doInitialize();
      } else {
        // set up the onLoad event handler since we're not loaded
        _igWMbMaNGlzQ.initializeOnLoad();
      }
    } catch (e) {
      //console.error("Cannot initialize widget '_igWMbMaNGlzQ' (exception: "+e+")");
    }
  }
  
  _igWMbMaNGlzQ.alreadyIncludedJS = function isAlreadyIncluded(src) {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++)
      if (scripts[i].getAttribute('src') == src) return scripts[i];
    return false;
  }
  _igWMbMaNGlzQ.alreadyIncludedCSS = function isAlreadyIncluded(src) {
    var scripts = document.getElementsByTagName("link");
    for (var i = 0; i < scripts.length; i++)
      if (scripts[i].getAttribute('href') == src) return scripts[i];
    return false;
  }
  
  _igWMbMaNGlzQ.addJS = function addFile(src) {
    if (!_igWMbMaNGlzQ.alreadyIncludedJS(src)) {
      var s = document.createElement('script');
      s.setAttribute('src', src);
      s.setAttribute('async', '');
      s.setAttribute('type', 'text/javascript');
      document.getElementsByTagName('head')[0].appendChild(s);
    }
  }
  _igWMbMaNGlzQ.addCSS = function addFile(src) {
    if (!_igWMbMaNGlzQ.alreadyIncludedCSS(src)) {
      var l = document.createElement('link');
      l.setAttribute('rel', "stylesheet");
      l.setAttribute('media', "none");
      l.setAttribute('href', src);
      l.setAttribute('onload', "this.media='all'");
  
      document.getElementsByTagName('head')[0].appendChild(l);
    }
  }
  
  _igWMbMaNGlzQ.getNode = function getNode(id) {
    try {
      return window.IGNITE.jquery(id, '#962af127-22e0-4887-84e1-688e25fb8385')[0];
    } catch (e) {
      //console.error("failed to find widget div '#962af127-22e0-4887-84e1-688e25fb8385'");
    }
  };
  
  _igWMbMaNGlzQ.getUrlParam = function getUrlParam(param, defVal) {
    var pageURL = window.location.search.substring(1);
    var URLVariables = pageURL.split('&');
    var retVal = defVal;
    for (var i = 0; i < URLVariables.length; i++) {
      var parameterName = URLVariables[i].split('=');
      if (parameterName[0] == param) {
        retVal = parameterName[1];
        break;
      }
    }
    return retVal;
  };
  
  _igWMbMaNGlzQ.urldecode = function (str) {
    return decodeURIComponent((str + '').replace(/\+/g, '%20'));
  }
  
  
  _igWMbMaNGlzQ.sort_by = function (field, reverse, primer) {
  
    var key = primer ?
        function (x) {
          return primer(x[field])
        } :
        function (x) {
          return x[field]
        };
  
    reverse = !reverse ? 1 : -1;
  
    return function (a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
  };
  
  _igWMbMaNGlzQ.numberWithCommas = function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  // extra analytics functions
  
  // queue up sending page view
  _igWMbMaNGlzQ.analyticsPostInit = function () {
    _igWMbMaNGlzQ.sendPageView();
  }
  
  _igWMbMaNGlzQ.addPostInit(_igWMbMaNGlzQ.analyticsPostInit);
  
  _igWMbMaNGlzQ.sendPageView = function recordPageView() {
    // this is done automatically by existing supported analytics methods
    // leaving this as a placeholder for future integration
    _igWMbMaNGlzQ.siftPageView();
  };
  
  _igWMbMaNGlzQ.sendPageSubmission = function recordPageSubmission(activityType, name) {
    _igWMbMaNGlzQ.siftPageView();
    _igWMbMaNGlzQ.sendFacebookPageSubmission(name,activityType);
    _igWMbMaNGlzQ.sendGoogleGAPageSubmission(name);
    _igWMbMaNGlzQ.sendGoogleGTAGPageSubmission(name);
  };
  
  _igWMbMaNGlzQ.sendStepNavigation = function recordStepNav(activityType, name, oldStep, newStep) {
    _igWMbMaNGlzQ.siftPageView();
    _igWMbMaNGlzQ.sendFacebookStepNav(name, activityType, oldStep, newStep);
    _igWMbMaNGlzQ.sendGoogleGAStepNav(name, oldStep, newStep);
    _igWMbMaNGlzQ.sendGoogleGTAGStepNav(name, oldStep, newStep);
  };
  
  _igWMbMaNGlzQ.initiatePurchase = function initiatePurchase(activityType) {
    _igWMbMaNGlzQ.sendFacebookInitiatePurchase(activityType);
    _igWMbMaNGlzQ.sendGoogleGTAGInitiatePurchase(activityType);
  };
  
  _igWMbMaNGlzQ.sendPurchase = function recordPurchase(totalDollar, currency, activityType, name) {
    _igWMbMaNGlzQ.sendFacebookPurchase(totalDollar, currency, activityType, name);
    _igWMbMaNGlzQ.sendGoogleGAPurchase(_igWMbMaNGlzQ.userInteractionId, totalDollar, currency, activityType, name);
    _igWMbMaNGlzQ.sendGoogleGTAGPurchase(_igWMbMaNGlzQ.userInteractionId, totalDollar, currency, activityType, name);
  };
  
  // send to facebook functions
  _igWMbMaNGlzQ.sendFacebookInitiatePurchase = function sendFacebookInitiatePurchase(activityType) {
    try {
      fbq('track', 'InitiateCheckout', {content_type : activityType, content_ids : [_igWMbMaNGlzQ.activityDefinitionId]});
    } catch (e) {
      // attempt to fallback to less information
      console.debug("unable to send InitiateCheckout to facebook pixel: " + e.message);
    }
  };
  _igWMbMaNGlzQ.sendFacebookPurchase = function sendFacebookPurchase(totalDollar, currency, activityType, name) {
    try {
      fbq('track', 'Purchase', {
        value : totalDollar,
        currency : currency,
        content_type : activityType,
        content_name : name,
        content_ids : [_igWMbMaNGlzQ.activityDefinitionId]
      });
    } catch (e) {
      // if we get an error, fall back to less informative capture
      console.debug("unable to send purchase to facebook pixel: " + e.message);
      try {
        fbq('track', 'Purchase', {value : totalDollar, currency : currency});
      } catch (e) {
        console.debug("unable send purchase minimual to facebook pixel: " + e.message);
      }
    }
  };
  _igWMbMaNGlzQ.sendFacebookStepNav = function sendFacebookStepNav(name, activityType, oldStep, newStep) {
    try {
      if (oldStep === null || oldStep < newStep) {
        fbq('trackCustom', 'stepForward', {
          oldStep : oldStep,
          newStep : newStep,
          content_type : activityType,
          content_ids : [_igWMbMaNGlzQ.activityDefinitionId],
          fundraiser_name : name
        });
      } else {
        fbq('trackCustom', 'stepBackward', {
          oldStep : oldStep,
          newStep : newStep,
          content_type : activityType,
          content_ids : [_igWMbMaNGlzQ.activityDefinitionId],
          fundraiser_name : name
        });
      }
    } catch (e) {
      // if we get an error, fall back to less informative capture
      console.debug("unable to track facebook step navigation: " + e.message);
    }
  };
  _igWMbMaNGlzQ.sendFacebookPageSubmission = function sendFacebookPageSubmission(name, activityType) {
    try {
      fbq('track', 'Lead', {
        activityType : activityType,
        content_ids : [_igWMbMaNGlzQ.activityDefinitionId],
        content_category : 'Page Submission',
        content_name : _igWMbMaNGlzQ.formName,
        fundraiser_name : name
      });
    } catch (e) {
      // if we get an error, fall back to less informative capture
      console.debug("unable to track facebook lead: " + e.message);
    }
  };
  // send to google analytics (via analytics.js)
  _igWMbMaNGlzQ.sendGoogleGAPurchase = function sendGooglePurchase(id, totalDollar, currency, activityType, name) {
    try {
      ga('ecommerce:addTransaction', {
        'id' : id,                  //
        'affiliation' : name,       // use the provided name
        'revenue' : totalDollar,    // Grand Total.
        'currency' : currency
      });
  
      ga('ecommerce:addItem', {
        'id' : id,
        'name' : activityType,
        'sku' : _igWMbMaNGlzQ.activityDefinitionId
      });
      ga('ecommerce:send');
    } catch (e) {
      console.debug("failed to send purchase with google analytics.js ecommerce: " + e.message);
    }
  
  };
  _igWMbMaNGlzQ.sendGoogleGAStepNav = function sendGooglePurchase(name, oldStep, newStep) {
    var action;
    try {
      if (oldStep === null || oldStep < newStep) {
        action = 'forward to ' + newStep;
      } else {
        action = 'backward to ' + newStep;
      }
      ga('send', {
        hitType : 'event',
        eventCategory : 'step navigation',
        eventAction : action,
        eventLabel : name
      });
    } catch (e) {
      console.debug("failed to send step navigation with google analytics.js: " + e.message);
    }
  };
  _igWMbMaNGlzQ.sendGoogleGAPageSubmission = function (name) {
    try {
      ga('send', {
        hitType : 'event',
        eventCategory : 'step navigation',
        eventAction : 'page submit',
        eventLabel : name
      });
    } catch (e) {
      console.debug("failed to send page submission with google analytics.js: " + e.message);
    }
  };
  
  
  // send to google analytics (via gtag.js)
  _igWMbMaNGlzQ.sendGoogleGTAGInitiatePurchase = function sendGoogleInitPurchase(activityType) {
    try {
      gtag('event', 'view_promotion', {
        'promotions' : [
          {'name' : activityType, 'id' : _igWMbMaNGlzQ.activityDefinitionId}
        ]
      });
    } catch (e) {
      console.debug("failed to send promotion with google analytics gtags ecommerce: " + e.message);
    }
  };
  _igWMbMaNGlzQ.sendGoogleGTAGPurchase = function sendGooglePurchase(id, totalDollar, currency, activityType, name) {
    try {
      gtag('event', 'purchase', {
        'transaction_id' : id,
        'affiliation' : name,      // use the provided name
        'value' : totalDollar,    // Grand Total.
        'currency' : currency,
        'items' : [
          {'name' : activityType, 'id' : _igWMbMaNGlzQ.activityDefinitionId}
        ]
      });
    } catch (e) {
      console.debug("failed to send purchase with google analytics gtags ecommerce: " + e.message);
    }
  };
  _igWMbMaNGlzQ.sendGoogleGTAGStepNav = function sendGoogleStepNav(name, oldStep, newStep) {
    var action;
    try {
      if (oldStep === null || oldStep < newStep) {
        action = 'forward to ' + newStep;
      } else {
        action = 'backward to ' + newStep;
      }
      gtag('event', action, {
        'event_category' : 'step navigation',
        'event_label' : name
      });
    } catch (e) {
      console.debug("failed to call google analytics gtags with step navigation: " + e.message);
    }
  };
  _igWMbMaNGlzQ.sendGoogleGTAGPageSubmission = function (name) {
    try {
      gtag('event', 'page submit', {
        'event_category' : 'step navigation',
        'event_label' : name
      });
    } catch (e) {
      console.debug("failed to call google analytics gtags for page submit: " + e.message);
    }
  };
  _igWMbMaNGlzQ.initialize = function initialize() {
    window.IGNITE.jquery('#962af127-22e0-4887-84e1-688e25fb8385').replaceWith(_igWMbMaNGlzQ.html);
  };
  
  
  _igWMbMaNGlzQ.data = {};
  _igWMbMaNGlzQ.isPreview = false;
  _igWMbMaNGlzQ.isBindOnly = false;
  _igWMbMaNGlzQ.userInteractionId = 'xxxuserInteractionIdxxx';
  _igWMbMaNGlzQ.cid= '';
  _igWMbMaNGlzQ.eid= 'null';
  _igWMbMaNGlzQ.eType= 'null';
  _igWMbMaNGlzQ.html = '<div id="962af127-22e0-4887-84e1-688e25fb8385"><!DOCTYPE html><html lang=\"en\"><head><\/head> <body> <formtemplate class=\"id_190efb5c-b7fa-4ada-a594-4938c2842d56\" ignite-show-content=\"true\"> <style type=\"text\/css\">#id_161d078d-6ea5-4953-bc68-73102511c4e4_logo { margin-left: auto;margin-right: auto;width: 25%; } #id_161d078d-6ea5-4953-bc68-73102511c4e4 { background-color:;padding:5px 0px 10px 0px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_645017d0-7a75-4f4a-9f57-59cd73df25ab { padding: 0px 5px 0px 5px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 450px; margin-left: auto; margin-right: 0; float: none; clear: both; } #id_2387248a-eb55-4e88-a20e-ec25f537e0cb { padding: 0px 0px 0px 0px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 500px; height: auto; margin-left: auto; margin-right: 0; float: none; clear: both; } #id_f0880f3a-ed35-4c00-b019-71a2738b120e { padding: 0px 0px 0px 0px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 450px; margin-left: auto; margin-right: 0; float: none; clear: both; } #id_f0880f3a-ed35-4c00-b019-71a2738b120e { padding: 0px 0px 0px 0px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 450px; margin-left: auto; margin-right: 0; float: none; clear: both; } #id_aaa16491-fa11-4d7d-ad17-80bfa9d5521d { padding: 0px 5px 0px 5px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 100%; height: auto; margin-left: auto; margin-right: auto; float: none; clear: both; } #id_aaa16491-fa11-4d7d-ad17-80bfa9d5521d .sli-step-navigation-steps .sli-step-navigation-step .sli-step-marker {background: rgb(140, 98, 172); color:rgb(255, 255, 255);} #id_aaa16491-fa11-4d7d-ad17-80bfa9d5521d .sli-step-navigation-steps .sli-step-navigation-step .sli-step-label {color: rgb(255, 255, 255);} #id_aaa16491-fa11-4d7d-ad17-80bfa9d5521d div.sli-progress-line {border-color: rgb(140, 98, 172); } #id_aaa16491-fa11-4d7d-ad17-80bfa9d5521d .sli-step-navigation-steps .sli-step-navigation-step.sli-selected .sli-step-marker { background: rgb(109, 88, 131);color: rgb(255, 255, 255); } #id_885391c5-19af-4dcb-a4a9-7b361ce74a1a { background-color:rgba(246, 244, 231, 0);margin:0 0;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover; } #id_ba060feb-f2b8-4dc0-ba08-7375585a24be { background-color: rgba(234, 122, 84, 0.29); margin: 0 0; border-color: #000000; border-width: 0px; border-style: none; border-radius: 8px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; } #id_118a1c8c-2cb8-4d6b-8afc-2d29782db942 { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9 { padding: 5px 4px 1.5px 4px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 100%; margin-left: 0; margin-right: auto; float: none; clear: both; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_oneTime { display: block; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_10_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_25_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_50_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_75_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_100_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_custom_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } # { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurring { display: block; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_10_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_25_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_50_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_75_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_100_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_custom_label { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } # { font-size:18px;background-color:rgb(234,122,84);border-width:1px;border-color:rgb(234, 122, 84);border-style: solid; } #id_632a71e6-e26d-44d4-8620-1c7a9a97b09e { padding: 0px 4px 0px 4px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 100%; height: auto; margin-left: 0; margin-right: auto; float: none; clear: both; } #id_828981fd-b246-40b0-818c-e6c1f063f937 { padding: 0px 4px 0px 4px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 100%; margin-left: 0; margin-right: auto; float: none; clear: both; } #id_c7f9fc65-7e4c-4b0f-b2f1-ed87bedead90 { background-color:rgba(246, 244, 231, 0);margin:0 0;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover; } #id_f12e8566-d43d-425e-ad3e-1c7d7e3036f6 { padding: 0px 0px 0px 0px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 200px; margin-left: 0; margin-right: auto; float: none; clear: both; text-align:center; } #id_28cd9b00-df5a-49d8-9d0d-4ae11f5ffdc3 { background-color:rgb(241, 240, 235);margin:0 0;border-color:#000000;border-width:0px;border-style:none;border-radius:8px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover; } #id_dc5c0021-32a9-4f44-8ed1-3715cc6d7e6d { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_6825e041-6c6d-4dfe-93b2-be28bce1d59a { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_6825e041-6c6d-4dfe-93b2-be28bce1d59a { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_1f6f1fdf-99d4-4964-be40-5589c3f4c127 { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_1f6f1fdf-99d4-4964-be40-5589c3f4c127 { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_b557c492-bd65-4f89-a753-b557f4f2ca1f { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_b557c492-bd65-4f89-a753-b557f4f2ca1f { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_0b6911b5-0ac1-4baf-a098-b67ae271174d { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:;margin-left:0;margin-right:auto;float:none;clear:both; } #id_0b6911b5-0ac1-4baf-a098-b67ae271174d { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:;margin-left:0;margin-right:auto;float:none;clear:both; } #id_eb9bea42-010a-47d2-b351-6f816e9fe5ad { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_eb9bea42-010a-47d2-b351-6f816e9fe5ad { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_1e22b5b2-6e0e-4f35-9f6d-3cf41cece5f7 { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_1e22b5b2-6e0e-4f35-9f6d-3cf41cece5f7 { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_aee29b87-238f-4a9d-8313-26ed6fcdf0e3 { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_aee29b87-238f-4a9d-8313-26ed6fcdf0e3 { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_76dabd9f-5041-42e6-b0bc-618fee2db32d { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_76dabd9f-5041-42e6-b0bc-618fee2db32d { background-color:;padding:0px 10px 0px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_5388f855-89a1-4c34-ab0a-eaea9ee86b77 { background-color:;padding:0px 10px 5px 10px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_f651dada-2058-4caa-a949-7358281142d2 { background-color:;padding:0px 0px 0px 0px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:15px;margin-left:0;margin-right:auto;float:none;clear:both;overflow-y:hidden; } #id_68c5d2f3-26d5-469d-ba19-fa9f34a6f7ba { background-color:;padding:0px 0px 0px 0px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:200px;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; text-align:center; } #id_66747cee-5eac-49fe-af1c-1e79292cfa3b { background-color:;padding:0px 0px 0px 0px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:200px;height:auto;margin-left:0;margin-right:auto;float:none;clear:both;text-align:center; } #id_c801b2c4-4eec-4185-b92e-e4541e52563a { background-color:rgb(241, 240, 235);margin:0 0;border-color:#000000;border-width:0px;border-style:none;border-radius:8px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover; } #id_d2b3671a-49fd-4a19-972b-176cb0a30868 { background-color:;padding:0px 8px 0px 8px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_7bc29313-45a0-46bb-ac6a-0db98097ca0c { padding: 0px 8px 0px 8px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 100%; margin-left: 0; margin-right: auto; float: none; clear: both; } #id_7bc29313-45a0-46bb-ac6a-0db98097ca0c_paymentType { display: none; } #id_7bc29313-45a0-46bb-ac6a-0db98097ca0c_echeck_wepay { display: none; } #id_7bc29313-45a0-46bb-ac6a-0db98097ca0c_bankSelect { height: 38px; } #id_7bc29313-45a0-46bb-ac6a-0db98097ca0c_echeck { display: none; } #id_252d1375-27b9-477d-85c1-8fb7b47062e4 { background-color:;padding:0px 0px 0px 0px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:15px;margin-left:0;margin-right:auto;float:none;clear:both;overflow-y:hidden; } #id_f72c7d43-ad7e-4ab3-87cd-26778a6ac65e { background-color:;padding:0px 0px 0px 0px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:200px;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; text-align:center; } #id_3f2b3145-2cf9-4632-9b5c-cd8b862d589d { padding: 0px 0px 0px 0px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 200px; height: auto; margin-left: 0; margin-right: auto; float: none; clear: both; text-align: center; } #id_a6d0c415-612a-4355-abda-296a64198bac_img { border:0px solid; } #id_a6d0c415-612a-4355-abda-296a64198bac { padding: 0px 0px 0px 0px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 430px; height: auto; margin-left: 0; margin-right: auto; float: none; clear: both; } #id_a6d0c415-612a-4355-abda-296a64198bac_img { float: none; margin-left: auto; margin-right: auto; display: block; width: 100%; } #id_be96dca0-6512-4d8b-a474-9c0e44d4d1eb { height: 30px; } #id_9f8df9b9-1b78-467f-9545-e156fb56dbb3 { background-color:rgb(61, 152, 120);margin:0 0;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover; } #id_5bc5390c-ac00-4948-9d30-3dc28f62c630 { background-color:;padding:;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:;float:none;clear:both; } #id_12640014-5112-4a6e-ace5-7f3d519ec655_logo { margin-left: auto;margin-right: auto;width: 15%; } #id_12640014-5112-4a6e-ace5-7f3d519ec655 { background-color:;padding:5px 0px 10px 0px;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:auto;margin-left:0;margin-right:auto;float:none;clear:both; } #id_bd02c4cc-7b3a-48c7-8276-3b3d887e678f { height: 30px; } #id_ce21e537-e051-48df-9580-fd4fdb368afa { padding: 10px 0px 0px 0px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 450px; margin-left: auto; margin-right: 0; float: none; clear: both; } #id_f82e5b2a-a578-4110-b75f-ea7677900b1a { padding: 0px 0px 0px 0px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 450px; margin-left: auto; margin-right: 0; float: none; clear: both; } #id_5829ec37-a8c3-4708-860a-14e0fa1d0137_img { border:0px solid; } #id_5829ec37-a8c3-4708-860a-14e0fa1d0137 { padding: 0px 0px 0px 0px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 430px; height: auto; margin-left: 0; margin-right: auto; float: none; clear: both; } #id_5829ec37-a8c3-4708-860a-14e0fa1d0137_img { float: none; margin-left: auto; margin-right: auto; display: block; width: 100%; } #id_03f72d2a-1caa-4f70-8c7b-5da69695e35d { padding: 0px 0px 0px 0px; border-color: #000000; border-width: 0px; border-style: none; border-radius: 0px; background-repeat: no-repeat; background-position: center; background-attachment: scroll; background-size: cover; max-width: 100%; height: 25px; margin-left: 0; margin-right: auto; float: none; clear: both; overflow-y: hidden; } #id_6c06909f-11a9-4a5c-994a-e68e10735080_img { border:0px solid; } #id_6c06909f-11a9-4a5c-994a-e68e10735080_img { float: none; margin-left: auto; margin-right: auto; display: block; width: 100%;width: 60%; } #id_c06d94cc-071a-4a90-8bb2-f9eea3f38e73 { background-color:rgb(61, 152, 120);margin:0 0;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover; } #id_669b3712-a8b2-44b7-91c0-8d81f398ad5b { background-color:;padding:;border-color:#000000;border-width:0px;border-style:none;border-radius:0px;background-repeat:no-repeat;background-position:center;background-attachment:scroll;background-size:cover;max-width:100%;height:;float:none;clear:both; } <\/style> <!-- ACTIVITY NAME: --> <style data-ignite-default-button-style=\"sli-flat\" data-ignite-default-button-size=\"sli-expand\" type=\"text\/css\">.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-content-pane,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-confirmation-pane,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-checkout-pane,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-tickets-pane,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-action-pane,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-no-targets-pane,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-comments-closed-pane {max-width: 100% !important; margin: 0px auto !important; background-color: #ffffff !important; padding: 0em !important; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-element {font-family: Cardo, serif; font-size: 14px; color: rgb(51, 45, 45); }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-button,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 input.sli-button,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 button.sli-button,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 a.sli-button,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 ul.sli-style-button .sli-amount-label {background: rgb(189, 175, 123); color: rgb(255, 255, 255); border-color: rgb(255, 194, 49); border-radius: 20px; border-width: 0px; border-style: none; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-button:hover,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 input.sli-button:hover,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 button.sli-button:hover,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 a.sli-button:hover,.id_190efb5c-b7fa-4ada-a594-4938c2842d56 ul.sli-style-button .sli-amount-label:hover {background-color: rgb(189, 175, 123); color: rgb(255, 255, 255); }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-element a:not(.sli-button) {color: rgb(61, 152, 120); }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-label {color: inherit !important; font-size: inherit !important; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-divider {background: none; border-bottom: 1px solid rgb(223, 219, 201); height: 1px; width: 100%; margin: 0px 0px 0px 0px; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-outer {max-width: 100%; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 #sli &gt; table {color: rgb(51, 45, 45); font-family: Cardo, serif; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 #sli &gt; table &gt; tr {background-color: #ffffff; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-three-column .sli-column {max-width: 33%; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-two-column .sli-column {max-width: 50%; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-webkit {max-width: 100%; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-callout {background-color: #FFA500; border-color: #222222; border-radius: 0px; border-width: 0px; border-style: none ;padding: 1em; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-callout {color: rgb(255, 255, 255); }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-input {border-color: rgba(128, 130, 178, 0.72) !important; border-radius: 8px !important; border-width: 1px !important; border-style: solid !important; padding: .5em !important; background-color: rgba(255, 255, 255, 0.72) !important; color: #222222 !important; }.id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-input::-webkit-input-placeholder { color: rgba(128, 130, 178, 0.72); } .id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-input:-ms-input-placeholder { color: rgba(128, 130, 178, 0.72); } .id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-input::-moz-placeholder { color: rgba(128, 130, 178, 0.72); opacity: 1; } .id_190efb5c-b7fa-4ada-a594-4938c2842d56 .sli-input:-moz-placeholder { color: rgba(128, 130, 178, 0.72); opacity: 1; }<\/style> <link rel=\"stylesheet\" layout-style-id=\"sli-forms-styles_v02\" \/> <div hidden=\"true\" layout-style-id=\"sli-forms-styles_v02\"><\/div> <div class=\"sli-loading-message\" id=\"id_null\"> <div class=\"sli-loading-spinner\"><\/div> <div> <p>Loading....<\/p> <\/div> <\/div> <div class=\"sli-content-pane sli-widget\" content-pane=\"0\" id=\"id_177da1ae-ab54-4c37-8eae-2e81ec441f9a_contentView\" data-token-id=\"190efb5c-b7fa-4ada-a594-4938c2842d56\" data-ignite-view=\"contentView\" data-internal-id=\"177da1ae-ab54-4c37-8eae-2e81ec441f9a\" style=\"display:none\"> <div class=\"sli-row\" id=\"id_a4d57423-804f-4ae4-8d96-5d63ec88c15e\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_fc6fbead-1526-4021-8a6c-f067187621ba\"> <div class=\"sli-element sli-logo\" id=\"id_161d078d-6ea5-4953-bc68-73102511c4e4\"> <img entity-id=\"logo\" id=\"id_161d078d-6ea5-4953-bc68-73102511c4e4_logo\" alt=\"Salsa\" width=\"275\" src=\"https:\/\/org-422d10e6-2770-4010-a776-3a094a0f35c1.salsalabs.org\/public\/images\/image-placeholder.png\" ignite-image-src=\"https:\/\/default.salsalabs.org\/api\/organization\/422d10e6-2770-4010-a776-3a094a0f35c1\/logo\/data\" \/> <\/div> <div class=\"sli-element sli-divider-element\" id=\"id_1d13e1c0-8b12-46dd-9e99-2c42e37e911d\"> <div class=\"sli-divider\"> &nbsp; <\/div> <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_ef48d309-de14-4ee2-ac53-f344c3f3ff12\"> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_39dcfd07-4ac4-488c-88bb-e255821fff25\"> <div class=\"sli-element sli-text sli-align-center-for-small sli-text-center-for-small\" id=\"id_645017d0-7a75-4f4a-9f57-59cd73df25ab\"> <div id=\"id_645017d0-7a75-4f4a-9f57-59cd73df25ab_inner\"> <div class=\"sli-element sli-text\" id=\"id_cac59b78-5290-4808-968d-ff5bd4d3540e\"> <div id=\"id_cac59b78-5290-4808-968d-ff5bd4d3540e_inner\"> <h2 aria-level=\"3\" dir=\"auto\" role=\"heading\" style=\"text-align: center;\"> <span style=\"color:#8c62ac;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Make a Difference in the life of a Survivor<\/span><\/span> <\/h2> <p> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Canyon Creek Services has been providing essential and even life-saving services to survivors in Iron, Beaver, and Garfield county for over 25 years. You can help make a difference in the lives of survivors by supporting CCS. We couldn\'t do it without the support of donors like you. <\/span><\/span> <\/p> <\/div> <\/div> <\/div> <\/div> <div class=\"sli-element sli-thermometer sli-align-center-for-small sli-text-center-for-small\" id=\"id_2387248a-eb55-4e88-a20e-ec25f537e0cb\"><\/div> <div class=\"sli-row\" id=\"id_c88e34fa-5a9a-4f04-870b-ed55369ae16f\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns\" data-ignite-container-type=\"formContainer\" id=\"id_f0880f3a-ed35-4c00-b019-71a2738b120e_container\"> <div class=\"sli-element sli-form-wrapper\" id=\"id_f0880f3a-ed35-4c00-b019-71a2738b120e\" ignite-bind-only=\"ignite-bind-only\" ignite-activity-id=\"a5f5584d-2ee6-4b7b-8075-4928173a7ea4\" ignite-activity-type=\"Fundraise\"> <form class=\"sli-form fv-form fv-form-salsa\" data-fv-framework=\"salsa\" novalidate=\"novalidate\" data-ignite-form-id=\"a5f5584d-2ee6-4b7b-8075-4928173a7ea4\" id=\"id_f0880f3a-ed35-4c00-b019-71a2738b120e_form\"> <div class=\"sli-step-navigation-wrapper sli-element\" id=\"id_aaa16491-fa11-4d7d-ad17-80bfa9d5521d\"> <div class=\"sli-step-navigation-steps sli-flex-container\"> <div class=\"sli-step-navigation-step sli-flex-item sli-vertical-align-top sli-selected\" data-ignite-for-step-id=\"1\" tabindex=\"0\"> <a class=\"sli-step-marker\">1<\/a> <div class=\"sli-step-label\"> <span class=\"sli-step-check\">\u2713<\/span>Amount <\/div> <\/div> <div class=\"sli-step-navigation-step sli-flex-item sli-vertical-align-top\" data-ignite-for-step-id=\"2\" tabindex=\"0\"> <a class=\"sli-step-marker\">2<\/a> <div class=\"sli-step-label\"> <span class=\"sli-step-check\">\u2713<\/span>Your Info <\/div> <\/div> <div class=\"sli-step-navigation-step sli-flex-item sli-vertical-align-top\" data-ignite-for-step-id=\"3\" tabindex=\"0\"> <a class=\"sli-step-marker\">3<\/a> <div class=\"sli-step-label\"> <span class=\"sli-step-check\">\u2713<\/span>Payment <\/div> <\/div> <div class=\"sli-progress-line\"><\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_885391c5-19af-4dcb-a4a9-7b361ce74a1a\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"elementStep\" id=\"id_1483b551-3072-495a-985b-b32a3a993e80\" data-ignite-step-id=\"1\"> <div class=\"sli-row\" id=\"id_ba060feb-f2b8-4dc0-ba08-7375585a24be\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_358e76b0-a75d-4e7d-8d5c-97f0bd24bdab\"> <div class=\"sli-element sli-text\" id=\"id_118a1c8c-2cb8-4d6b-8afc-2d29782db942\"> <div id=\"id_118a1c8c-2cb8-4d6b-8afc-2d29782db942_inner\"> <h4> <span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\"><strong>Select Your Amount<\/strong><\/span> <\/h4> <\/div> <\/div> <div class=\"sli-donation-amountblock sli-element\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9\" data-ignite-enable-onetime=\"true\" data-ignite-enable-recurring-amounts=\"true\" data-ignite-field-id=\"DonationAmount\"> <div class=\"sli-donationAmounts\"> <div class=\"sli-oneTimeDonation\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_oneTime\" data-ignite-onetime-amount=\"data-ignite-onetime-amount\"> <ul class=\"sli-oneTimeDonationAmounts sli-style-button\" style=\"justify-content: flex-start;\"> <li><input class=\"sli-oneTimeAmountRadio\" name=\"donationAmtToggle\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_10\" type=\"radio\" data-ignite-amount=\"10.00\" data-fv-onetimeamount=\"true\" data-sli-widget=\"_igWMbMaNGlzQ\" data-fv-row=\".sli-oneTimeDonation\" data-fv-err-container=\".sli-oneTimeDonationError\" data-fv-onetimeamount-message=\"Please select a donation amount, or enter your own amount\" \/><label class=\"sli-oneTimeAmountLabel sli-amount-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_10_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_10\">$10<\/label><\/li> <li><input class=\"sli-oneTimeAmountRadio\" name=\"donationAmtToggle\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_25\" type=\"radio\" data-ignite-amount=\"25.00\" checked=\"checked\" \/><label class=\"sli-oneTimeAmountLabel sli-amount-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_25_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_25\">$25<\/label><\/li> <li><input class=\"sli-oneTimeAmountRadio\" name=\"donationAmtToggle\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_50\" type=\"radio\" data-ignite-amount=\"50.00\" \/><label class=\"sli-oneTimeAmountLabel sli-amount-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_50_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_50\">$50<\/label><\/li> <li><input class=\"sli-oneTimeAmountRadio\" name=\"donationAmtToggle\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_75\" type=\"radio\" data-ignite-amount=\"75.00\" \/><label class=\"sli-oneTimeAmountLabel sli-amount-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_75_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_75\">$75<\/label><\/li> <li><input class=\"sli-oneTimeAmountRadio\" name=\"donationAmtToggle\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_100\" type=\"radio\" data-ignite-amount=\"100.00\" \/><label class=\"sli-oneTimeAmountLabel sli-amount-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_100_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_amt_100\">$100<\/label><\/li> <li id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_custom\" style=\" display: block;\"><input class=\"sli-oneTimeAmountRadio sli-oneTimeCustomAmount\" name=\"donationAmtToggleOther\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_custom_radio\" type=\"radio\" data-ignite-custom-onetime=\"data-ignite-custom-onetime\" aria-label=\"custom one-time donation amount\" \/> <div class=\"sli-input-group\"> <label class=\"sli-oneTimeAmountLabel sli-amount-label sli-customAmount sli-input-group-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_custom_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_custom\">$<\/label> <input class=\"sli-oneTimeAmountInput sli-customAmount sli-input sli-input-group-field sli-tiny\" size=\"5\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_onetime_custom\" type=\"text\" placeholder=\"Other\" name=\"customOneTime\" data-ignite-custom-onetime-input=\"data-ignite-custom-onetime-input\" data-fv-row=\".sli-oneTimeDonation\" data-fv-err-container=\".sli-oneTimeDonationError\" data-fv-numeric=\"true\" data-fv-numeric-message=\"Please enter a dollar amount\" data-fv-notempty=\"true\" data-fv-notempty-message=\"An amount is required\" data-fv-greaterthan=\"true\" data-fv-greaterthan-inclusive=\"false\" data-fv-greaterthan-value=\"0.0\" data-fv-greaterthan-message=\"Please enter a positive amount\" \/> <\/div><\/li> <\/ul> <div class=\"sli-oneTimeDonationError\"><\/div> <\/div> <div class=\"sli-recurringDonation\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurring\" data-ignite-recurring-amount=\"data-ignite-recurring-amount\" style=\"display:none;\"> <p data-ignite-recurrence-frequency=\"Monthly\" class=\" sli-recurringFrequency\" style=\"margin: 0;\">Donation will repeat monthly.<\/p> <ul class=\"sli-recurringDonationAmounts sli-style-button\" style=\"justify-content: flex-start;\"> <li><input class=\"sli-recurringAmountRadio\" name=\"donationAmtToggle2\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_10\" type=\"radio\" data-ignite-amount=\"10.00\" data-fv-recurringamount=\"true\" data-sli-widget=\"_igWMbMaNGlzQ\" data-fv-row=\".sli-recurringDonation\" data-fv-err-container=\".sli-recurringDonationError\" data-fv-recurringamount-message=\"Please select a donation amount, or enter your own amount\" \/><label class=\"sli-recurringAmountLabel sli-amount-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_10_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_10\">$10<\/label><\/li> <li><input class=\"sli-recurringAmountRadio\" name=\"donationAmtToggle2\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_25\" type=\"radio\" data-ignite-amount=\"25.00\" checked=\"checked\" \/><label class=\"sli-recurringAmountLabel sli-amount-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_25_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_25\">$25<\/label><\/li> <li><input class=\"sli-recurringAmountRadio\" name=\"donationAmtToggle2\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_50\" type=\"radio\" data-ignite-amount=\"50.00\" \/><label class=\"sli-recurringAmountLabel sli-amount-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_50_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_50\">$50<\/label><\/li> <li><input class=\"sli-recurringAmountRadio\" name=\"donationAmtToggle2\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_75\" type=\"radio\" data-ignite-amount=\"75.00\" \/><label class=\"sli-recurringAmountLabel sli-amount-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_75_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_75\">$75<\/label><\/li> <li><input class=\"sli-recurringAmountRadio\" name=\"donationAmtToggle2\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_100\" type=\"radio\" data-ignite-amount=\"100.00\" \/><label class=\"sli-recurringAmountLabel sli-amount-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_100_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_100\">$100<\/label><\/li> <li id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_custom\" style=\" display: block;\"><input class=\"sli-recurringAmountRadio sli-recurringCustomAmount\" name=\"donationAmtToggle2Other\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_custom_radio\" type=\"radio\" data-ignite-custom-recurring=\"data-ignite-custom-recurring\" aria-label=\"recurring donation custom amount\" \/> <div class=\"sli-input-group\"> <label class=\"sli-recurringAmountLabel sli-amount-label sli-customAmount sli-input-group-label sli-tiny sli-flat\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_custom_label\" for=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_custom\">$<\/label> <input class=\"sli-recurringAmountInput sli-customAmount sli-input sli-input-group-field sli-tiny\" size=\"5\" id=\"id_1582c5d2-7ca9-4ce4-8cc1-a4dd31180bf9_recurringAmt_custom\" type=\"text\" placeholder=\"Other\" name=\"customRecurringAmount\" data-ignite-custom-recurring-input=\"data-ignite-custom-recurring-input\" data-fv-row=\".sli-recurringDonation\" data-fv-err-container=\".sli-recurringDonationError\" data-fv-numeric=\"true\" data-fv-numeric-message=\"Please enter a dollar amount\" data-fv-notempty=\"true\" data-fv-notempty-message=\"An amount is required\" data-fv-greaterthan=\"true\" data-fv-greaterthan-inclusive=\"false\" data-fv-greaterthan-value=\"0.0\" data-fv-greaterthan-message=\"Please enter a positive amount\" \/> <\/div><\/li> <\/ul> <div class=\"sli-recurringDonationError\"><\/div> <\/div> <\/div> <\/div> <div class=\"sli-selectRecurring sli-element \" id=\"id_632a71e6-e26d-44d4-8620-1c7a9a97b09e\" data-ignite-field-id=\"MakeRecurring\"> <label class=\"sli-label\" for=\"id_632a71e6-e26d-44d4-8620-1c7a9a97b09e_makeRecurring_input\"><input class=\"sli-input\" id=\"id_632a71e6-e26d-44d4-8620-1c7a9a97b09e_makeRecurring_input\" type=\"checkbox\" name=\"makeRecurring\" value=\"true\" style=\"margin-right: 5px;\" salsa-reference-name=\"makerecurringcb\" \/>Make this donation recurring<\/label> <\/div> <div class=\"sli-donorPaysFees sli-element \" id=\"id_828981fd-b246-40b0-818c-e6c1f063f937\" data-ignite-field-id=\"DonorPaysFees\"> <label class=\"sli-label\" for=\"id_828981fd-b246-40b0-818c-e6c1f063f937_donorPaysFees_input\"><input class=\"sli-input\" id=\"id_828981fd-b246-40b0-818c-e6c1f063f937_donorPaysFees_input\" type=\"checkbox\" name=\"donorPaysFees\" value=\"true\" style=\"margin-right: 5px;\" salsa-reference-name=\"donorpaysfeescb\" \/>Increase my donation amount to cover fees<\/label> <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_c7f9fc65-7e4c-4b0f-b2f1-ed87bedead90\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_c92a5610-b819-4db8-a023-7f06bd77ae84\"> <div class=\"sli-element sli-button-element\" id=\"id_f12e8566-d43d-425e-ad3e-1c7d7e3036f6\"> <a class=\"sli-button sli-flat sli-expand\" track=\"true\" data-ignite-button-step=\"2\" data-ignite-skip-validation=\"false\" style=\"font-family:\'Trebuchet MS\', Helvetica, sans-serif;background-color:rgb(128,130,178);border-width:1px;border-color:rgb(109, 88, 131);border-style: solid;\" tabindex=\"0\">Next Step &gt;&gt;<\/a> <\/div> <div class=\"sli-element sli-text\" id=\"id_57e21f11-797f-4fa7-b967-66028f8bf80b\"> <div id=\"id_57e21f11-797f-4fa7-b967-66028f8bf80b_inner\"> <p> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Make a donation today and help us provide these essential services:<\/span><\/span> <\/p> <p style=\"text-align: center;\"> <span style=\"color:#49bdbd;\"><span style=\"font-size:20px;\"><strong><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Services You Help Us to Provide<\/span><\/strong><\/span><\/span> <\/p> <ul> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">24 hr. Emergency Shelter<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Protective Orders<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Safety Planning<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Court Accompaniment<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Emotional Support<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Safety Planning<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Housing Advocacy &amp; Assistance<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Relocation Services<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Financial Literacy<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Immigration Assistance<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Hospital Response<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Medical Advocacy<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Crisis Intervention<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Individual Advocacy<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Therapy<\/span><\/span> <\/li> <li> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Emergency Assistance for necessary items&nbsp; for specific survivor needs(medication, diapers, food, clothing, etc.)<\/span><\/span> <\/li> <\/ul> <p> <span style=\"font-size:16px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">We are committed to creating &quot;Communities Free of Domestic Violence and Sexual Assault&quot;.<\/span><\/span> <\/p> <\/div> <\/div> <\/div> <\/div> <\/div> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"elementStep\" id=\"id_d65ffdd1-df56-4208-853b-42403db60b16\" style=\"display: none;\" data-ignite-step-id=\"2\"> <div class=\"sli-row\" id=\"id_28cd9b00-df5a-49d8-9d0d-4ae11f5ffdc3\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_069e17be-2af6-4a8f-871a-c30477f4ccc4\"> <div class=\"sli-element sli-text\" id=\"id_dc5c0021-32a9-4f44-8ed1-3715cc6d7e6d\"> <div id=\"id_dc5c0021-32a9-4f44-8ed1-3715cc6d7e6d_inner\"> <h4> <strong>Your Information<\/strong> <\/h4> <\/div> <\/div> <div class=\"sli-field-person-firstname sli-form-field sli-element\" data-ignite-field-id=\"5d5a2165-f19e-4371-851b-183a6b92402b\" id=\"id_6825e041-6c6d-4dfe-93b2-be28bce1d59a\"> <label class=\"sli-required-true sli-label\" for=\"id_6825e041-6c6d-4dfe-93b2-be28bce1d59a_input\" id=\"id_6825e041-6c6d-4dfe-93b2-be28bce1d59a_label\" style=\" display: none;\">First Name*<\/label> <input class=\"sli-input sli-input-person-firstname\" type=\"text\" data-ignite-field-id=\"5d5a2165-f19e-4371-851b-183a6b92402b\" name=\"field-person-firstname\" placeholder=\"First Name\" maxlength=\"36\" required=\"required\" data-fv-notempty=\"true\" data-fv-notempty-message=\"This field requires a value\" data-fv-stringlength=\"true\" data-fv-stringlengthmessage=\"Please limit your input to at most 36 characters.\" id=\"id_6825e041-6c6d-4dfe-93b2-be28bce1d59a_input\" salsa-reference-name=\"person-firstname\" \/> <\/div> <div class=\"sli-field-person-lastname sli-form-field sli-element\" data-ignite-field-id=\"8d21a878-287a-491f-a362-b8ee2aa71819\" id=\"id_1f6f1fdf-99d4-4964-be40-5589c3f4c127\"> <label class=\"sli-required-true sli-label\" for=\"id_1f6f1fdf-99d4-4964-be40-5589c3f4c127_input\" id=\"id_1f6f1fdf-99d4-4964-be40-5589c3f4c127_label\" style=\" display: none;\">Last Name*<\/label> <input class=\"sli-input sli-input-person-lastname\" type=\"text\" data-ignite-field-id=\"8d21a878-287a-491f-a362-b8ee2aa71819\" name=\"field-person-lastname\" placeholder=\"Last Name\" maxlength=\"100\" required=\"required\" data-fv-notempty=\"true\" data-fv-notempty-message=\"This field requires a value\" data-fv-stringlength=\"true\" data-fv-stringlengthmessage=\"Please limit your input to at most 100 characters.\" id=\"id_1f6f1fdf-99d4-4964-be40-5589c3f4c127_input\" salsa-reference-name=\"person-lastname\" \/> <\/div> <div class=\"sli-field-contact-email sli-form-field sli-element\" data-ignite-field-id=\"2851b463-606f-40c8-bb3d-d31f399e6896\" id=\"id_b557c492-bd65-4f89-a753-b557f4f2ca1f\"> <label class=\"sli-required-true sli-label\" for=\"id_b557c492-bd65-4f89-a753-b557f4f2ca1f_input\" id=\"id_b557c492-bd65-4f89-a753-b557f4f2ca1f_label\" style=\" display: none;\">Email Address*<\/label> <input class=\"sli-input sli-input-contact-email\" type=\"email\" data-ignite-field-id=\"2851b463-606f-40c8-bb3d-d31f399e6896\" name=\"field-contact-email\" placeholder=\"Email Address\" maxlength=\"128\" required=\"required\" data-fv-notempty=\"true\" data-fv-notempty-message=\"This field requires a value\" data-fv-stringlength=\"true\" data-fv-stringlengthmessage=\"Please limit your input to at most 128 characters.\" data-fv-regexp=\"true\" data-fv-regexp-regexp=\"^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$\" data-fv-regexp-message=\"Please enter a valid email address\" id=\"id_b557c492-bd65-4f89-a753-b557f4f2ca1f_input\" salsa-reference-name=\"contact-email\" \/> <\/div> <div class=\"sli-field-address-line1 sli-form-field sli-element\" data-ignite-field-id=\"f775c79a-df41-43fb-96de-ee2360254689\" id=\"id_0b6911b5-0ac1-4baf-a098-b67ae271174d\"> <label class=\"sli-required-true sli-label\" for=\"id_0b6911b5-0ac1-4baf-a098-b67ae271174d_input\" id=\"id_0b6911b5-0ac1-4baf-a098-b67ae271174d_label\" style=\" display: none;\">Address, line 1*<\/label> <input class=\"sli-input sli-input-address-line1\" type=\"text\" data-ignite-field-id=\"f775c79a-df41-43fb-96de-ee2360254689\" name=\"field-address-line1\" placeholder=\"Address, line 1\" maxlength=\"128\" required=\"required\" data-fv-notempty=\"true\" data-fv-notempty-message=\"This field requires a value\" data-fv-stringlength=\"true\" data-fv-stringlengthmessage=\"Please limit your input to at most 128 characters.\" id=\"id_0b6911b5-0ac1-4baf-a098-b67ae271174d_input\" salsa-reference-name=\"address-line1\" \/> <\/div> <div class=\"sli-row\" id=\"id_e39f7854-1469-4185-9780-809484267445\"> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_b5f778b5-2401-46c6-b118-260242d73a9a\"> <div class=\"sli-field-address-city sli-form-field sli-element\" data-ignite-field-id=\"a102d60f-f8ab-47eb-8ee0-864cfa1fc5b2\" id=\"id_eb9bea42-010a-47d2-b351-6f816e9fe5ad\"> <label class=\"sli-required-true sli-label\" for=\"id_eb9bea42-010a-47d2-b351-6f816e9fe5ad_input\" id=\"id_eb9bea42-010a-47d2-b351-6f816e9fe5ad_label\" style=\" display: none;\">City*<\/label> <input class=\"sli-input sli-input-address-city\" type=\"text\" data-ignite-field-id=\"a102d60f-f8ab-47eb-8ee0-864cfa1fc5b2\" name=\"field-address-city\" placeholder=\"City\" maxlength=\"64\" required=\"required\" data-fv-notempty=\"true\" data-fv-notempty-message=\"This field requires a value\" data-fv-stringlength=\"true\" data-fv-stringlengthmessage=\"Please limit your input to at most 64 characters.\" id=\"id_eb9bea42-010a-47d2-b351-6f816e9fe5ad_input\" salsa-reference-name=\"address-city\" \/> <\/div> <\/div> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_c18f594b-1683-458b-a950-96e65de8b39c\"> <div class=\"sli-field-address-state sli-form-field sli-element\" data-ignite-field-id=\"3f8b9098-ff2d-4384-bb95-425f113028c0\" id=\"id_1e22b5b2-6e0e-4f35-9f6d-3cf41cece5f7\"> <label class=\"sli-required-true sli-label\" for=\"id_1e22b5b2-6e0e-4f35-9f6d-3cf41cece5f7_input\" id=\"id_1e22b5b2-6e0e-4f35-9f6d-3cf41cece5f7_label\" style=\" display: none;\">State*<\/label> <select class=\"sli-select-address-state sli-input\" name=\"field-address-state\" data-ignite-field-id=\"3f8b9098-ff2d-4384-bb95-425f113028c0\" required=\"required\" data-fv-notempty=\"true\" data-fv-notempty-message=\"This field requires a value\" id=\"id_1e22b5b2-6e0e-4f35-9f6d-3cf41cece5f7_input\" salsa-reference-name=\"address-state\"><option value=\"\" selected=\"selected\"> Choose one...<\/option><option value=\"AL\">Alabama<\/option><option value=\"AK\">Alaska<\/option><option value=\"AS\">American Samoa<\/option><option value=\"AZ\">Arizona<\/option><option value=\"AR\">Arkansas<\/option><option value=\"AA\">Armed Forces America<\/option><option value=\"AE\">Armed Forces Europe<\/option><option value=\"AP\">Armed Forces Pacific<\/option><option value=\"CA\">California<\/option><option value=\"CO\">Colorado<\/option><option value=\"CT\">Connecticut<\/option><option value=\"DE\">Delaware<\/option><option value=\"DC\">District of Columbia<\/option><option value=\"FL\">Florida<\/option><option value=\"GA\">Georgia<\/option><option value=\"GU\">Guam<\/option><option value=\"HI\">Hawaii<\/option><option value=\"ID\">Idaho<\/option><option value=\"IL\">Illinois<\/option><option value=\"IN\">Indiana<\/option><option value=\"IA\">Iowa<\/option><option value=\"KS\">Kansas<\/option><option value=\"KY\">Kentucky<\/option><option value=\"LA\">Louisiana<\/option><option value=\"ME\">Maine<\/option><option value=\"MD\">Maryland<\/option><option value=\"MA\">Massachusetts<\/option><option value=\"MI\">Michigan<\/option><option value=\"MN\">Minnesota<\/option><option value=\"MS\">Mississippi<\/option><option value=\"MO\">Missouri<\/option><option value=\"MT\">Montana<\/option><option value=\"NE\">Nebraska<\/option><option value=\"NV\">Nevada<\/option><option value=\"NH\">New Hampshire<\/option><option value=\"NJ\">New Jersey<\/option><option value=\"NM\">New Mexico<\/option><option value=\"NY\">New York<\/option><option value=\"NC\">North Carolina<\/option><option value=\"ND\">North Dakota<\/option><option value=\"MP\">Northern Mariana Islands<\/option><option value=\"OH\">Ohio<\/option><option value=\"OK\">Oklahoma<\/option><option value=\"OR\">Oregon<\/option><option value=\"PA\">Pennsylvania<\/option><option value=\"PR\">Puerto Rico<\/option><option value=\"RI\">Rhode Island<\/option><option value=\"SC\">South Carolina<\/option><option value=\"SD\">South Dakota<\/option><option value=\"TN\">Tennessee<\/option><option value=\"TX\">Texas<\/option><option value=\"UM\">United States Minor Outlying Islands<\/option><option value=\"UT\">Utah<\/option><option value=\"VT\">Vermont<\/option><option value=\"VI\">Virgin Islands<\/option><option value=\"VA\">Virginia<\/option><option value=\"WA\">Washington<\/option><option value=\"WV\">West Virginia<\/option><option value=\"WI\">Wisconsin<\/option><option value=\"WY\">Wyoming<\/option><\/select> <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_4abd7cde-7975-4006-aede-15e2f7b754ec\"> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_4be47dc3-3b5a-47c4-bd98-32479e792bf2\"> <div class=\"sli-field-address-zip sli-form-field sli-element\" data-ignite-field-id=\"44e5ad15-1fdd-4ba8-bf38-f5cbaad023c2\" id=\"id_aee29b87-238f-4a9d-8313-26ed6fcdf0e3\"> <label class=\"sli-required-true sli-label\" for=\"id_aee29b87-238f-4a9d-8313-26ed6fcdf0e3_input\" id=\"id_aee29b87-238f-4a9d-8313-26ed6fcdf0e3_label\" style=\" display: none;\">Zip Code*<\/label> <input class=\"sli-input sli-input-address-zip\" type=\"text\" data-ignite-field-id=\"44e5ad15-1fdd-4ba8-bf38-f5cbaad023c2\" name=\"field-address-zip\" placeholder=\"Zip Code\" maxlength=\"20\" required=\"required\" data-fv-notempty=\"true\" data-fv-notempty-message=\"This field requires a value\" data-fv-stringlength=\"true\" data-fv-stringlengthmessage=\"Please limit your input to at most 20 characters.\" data-fv-zipcode=\"true\" data-fv-zipcode-country=\"US\" data-fv-zipcode-message=\"This value is not valid as a %s postal code\" id=\"id_aee29b87-238f-4a9d-8313-26ed6fcdf0e3_input\" salsa-reference-name=\"address-zip\" \/> <\/div> <\/div> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_028ea6b8-0312-452a-8e24-7ce9a02e0037\"> <div class=\"sli-field-person-home_phone sli-form-field sli-element\" data-ignite-field-id=\"6e201e0b-8208-453f-b393-a5f0d9059726\" id=\"id_76dabd9f-5041-42e6-b0bc-618fee2db32d\"> <label class=\"sli-required-true sli-label\" for=\"id_76dabd9f-5041-42e6-b0bc-618fee2db32d_input\" id=\"id_76dabd9f-5041-42e6-b0bc-618fee2db32d_label\" style=\" display: none;\">Phone*<\/label> <input class=\"sli-input sli-input-person-home_phone\" type=\"text\" data-ignite-field-id=\"6e201e0b-8208-453f-b393-a5f0d9059726\" name=\"field-person-home_phone\" placeholder=\"555-555-5555\" maxlength=\"128\" required=\"required\" data-fv-notempty=\"true\" data-fv-notempty-message=\"This field requires a value\" data-fv-stringlength=\"true\" data-fv-stringlengthmessage=\"Please limit your input to at most 128 characters.\" id=\"id_76dabd9f-5041-42e6-b0bc-618fee2db32d_input\" salsa-reference-name=\"person-home_phone\" \/> <\/div> <\/div> <\/div> <div class=\"sli-contact-types sli-element \" id=\"id_5388f855-89a1-4c34-ab0a-eaea9ee86b77\" data-ignite-field-id=\"ContactOptIn\"> <label class=\"sli-label\"><input class=\"sli-input sli-contact-type Email\" type=\"checkbox\" id=\"id_5388f855-89a1-4c34-ab0a-eaea9ee86b77_contact_types_input\" checked=\"checked\" name=\"contactOptIn\" value=\"accepted\" style=\"margin-right: 5px;\" data-ignite-contact-value=\"Email\" salsa-reference-name=\"contactoptincb\" \/>&nbsp;I\'d like to receive updates from this organization<\/label> <div class=\"sli-contact-type\"><\/div> <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_6890cbdb-65f4-43e0-a741-9a501a7e14a8\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_0e92aea8-3f63-4981-86eb-a0a5ef53ad4a\"> <div class=\"sli-element sli-spacer\" id=\"id_f651dada-2058-4caa-a949-7358281142d2\"> &nbsp; <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_2e78af61-f3b4-42cf-a8f7-22538859c56a\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_aaf16167-d91a-4ac3-937d-4b8eed564408\"> <div class=\"sli-element sli-button-element\" id=\"id_68c5d2f3-26d5-469d-ba19-fa9f34a6f7ba\"> <a class=\"sli-button sli-flat sli-expand\" track=\"true\" data-ignite-button-step=\"3\" data-ignite-skip-validation=\"false\" style=\"background-color:rgb(73, 189, 189);\" tabindex=\"0\">Next Step &gt;&gt;<\/a> <\/div> <div class=\"sli-element sli-button-element\" id=\"id_66747cee-5eac-49fe-af1c-1e79292cfa3b\"> <a class=\"sli-button sli-flat sli-expand\" track=\"true\" data-ignite-button-step=\"1\" data-ignite-skip-validation=\"true\" style=\"color:rgb(165,155,134);background-color:rgb(255,255,255);border-width:1px;border-color:rgb(165,155,134);border-style: solid;\" tabindex=\"0\">&lt;&lt; Go Back<\/a> <\/div> <\/div> <\/div> <\/div> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"elementStep\" id=\"id_7504b897-be87-4f4d-9367-ad3be1b17f8c\" style=\"display: none;\" data-ignite-step-id=\"3\"> <div class=\"sli-row\" id=\"id_c801b2c4-4eec-4185-b92e-e4541e52563a\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_2c5d3917-e287-4aa4-9ff1-a606df410365\"> <div class=\"sli-element sli-text\" id=\"id_d2b3671a-49fd-4a19-972b-176cb0a30868\"> <div id=\"id_d2b3671a-49fd-4a19-972b-176cb0a30868_inner\"> <h4> <strong>Payment Information<\/strong> <\/h4> <\/div> <\/div> <div class=\"sli-donation-paymentblock sli-element\" id=\"id_7bc29313-45a0-46bb-ac6a-0db98097ca0c\"> <div class=\"sli-paymentType\" id=\"id_7bc29313-45a0-46bb-ac6a-0db98097ca0c_paymentType\"> <div class=\"sli-ccType sli-label\" for=\"payment_type\"> Payment Type: <\/div> <input name=\"payment_type\" type=\"radio\" value=\"CREDIT_CARD\" checked=\"checked\" id=\"XNLdrfddxQ\" \/> <label class=\"sli-label\" for=\"XNLdrfddxQ\">Credit Card<\/label> <input name=\"payment_type\" sli-payment-type=\"ACH\" style=\"display:none;\" type=\"radio\" value=\"ACH\" id=\"SKtsHAZDbo\" \/> <label class=\"sli-label\" style=\"display:none;\" sli-payment-type=\"ACH\" for=\"SKtsHAZDbo\">eCheck<\/label> <input name=\"payment_type\" sli-payment-type=\"PAYPAL\" style=\"display:none;\" type=\"radio\" value=\"PAYPAL\" id=\"jpxzdEcBSB\" \/> <label class=\"sli-label\" style=\"display:none;\" sli-payment-type=\"PAYPAL\" for=\"jpxzdEcBSB\">PayPal<\/label> <\/div> <div id=\"id_7bc29313-45a0-46bb-ac6a-0db98097ca0c_echeck_wepay\" data-ignite-echeck-wepay=\"ignite-echeck-wepay\"> <label class=\"sli-ccLabel sli-label\" for=\"bSzLfBbXCq\" style=\"display: none;\">Bank Account*<\/label> <div class=\"sli-row\"> <div class=\"sli-columns sli-medium-4 sli-large-4 sli-end sli-form-field\"><\/div> <input class=\"sli-ccInput sli-input\" type=\"text\" id=\"bSzLfBbXCq\" data-fv-field=\"wepay_bank\" data-fv-notempty-message=\"Bank Account is required\" readonly=\"readonly\" required=\"required\" name=\"wepay_bank\" placeholder=\"Bank Account\" \/> <div class=\"sli-columns sli-large-8 sli-medium-8\"> <input class=\"sli-button\" id=\"id_7bc29313-45a0-46bb-ac6a-0db98097ca0c_bankSelect\" type=\"button\" value=\"Select a Bank Account\" name=\"bank-popup\" \/> <small class=\"sli-field-error sli-wepay-error\" style=\"display: none;\"><\/small> <\/div> <\/div> <\/div> <div id=\"id_7bc29313-45a0-46bb-ac6a-0db98097ca0c_echeck\" data-ignite-echeck=\"ignite-echeck\"> <div class=\"sli-row\"> <div class=\"sli-columns sli-medium-8 sli-large-8 sli-small-12 sli-end sli-form-field\"> <label class=\"sli-ccLabel sli-label\" for=\"bvbnDcCvcO\" style=\"display: none;\">Name on Account*<\/label> <input class=\"sli-ccInput sli-input\" type=\"text\" name=\"holder_name\" id=\"bvbnDcCvcO\" required=\"required\" data-fv-notempty=\"true\" data-fv-notemtpy-message=\"Please enter the holder name\" pattern=\"^.+\\s+.*$\" data-fv-regexp-message=\"Holder name must have at least 2 parts\" placeholder=\"Name on Account\" \/> <\/div> <\/div> <div class=\"sli-row\"> <div class=\"sli-columns sli-large-8 sli-medium-8 sli-form-field\"> <label class=\"sli-ccLabel sli-label\" for=\"MhKiijyzoK\" style=\"display: none;\">Bank Routing Number*<\/label> <input class=\"sli-ccInput sli-input\" type=\"text\" name=\"bank_routing\" id=\"MhKiijyzoK\" required=\"required\" maxlength=\"9\" dava-fv-field=\"bank_routing\" data-fv-notempty=\"true\" data-fv-notemtpy-message=\"Bank Routing Number is required\" data-fv-stringlength=\"true\" data-fv-stringlength-min=\"9\" data-fv-stringlength-max=\"9\" data-fv-stringlength-message=\"Bank Routing Number must be 9 characters long\" data-fv-digits=\"true\" data-fv-digits-message=\"Please enter only digits\" placeholder=\"Bank Routing Number\" \/> <\/div> <\/div> <div class=\"sli-row\"> <div class=\"sli-columns sli-large-8 sli-medium-8 sli-form-field\"> <label class=\"sli-ccLabel sli-label\" for=\"qAHpUrEckM\" style=\"display: none;\">Bank Account Number*<\/label> <input class=\"sli-bankAccount sli-ccInput sli-input\" type=\"text\" name=\"bank_account\" id=\"qAHpUrEckM\" required=\"required\" maxlength=\"17\" dava-fv-field=\"bank_account\" data-fv-notempty=\"true\" data-fv-notemtpy-message=\"Bank Account Number is required\" data-fv-stringlength=\"true\" data-fv-stringlength-min=\"4\" data-fv-stringlength-max=\"17\" data-fv-stringlength-message=\"Bank Account Number must be from 4 to 17 characters long\" data-fv-digits=\"true\" data-fv-digits-message=\"Please enter only digits\" placeholder=\"Bank Account Number\" \/> <\/div> <\/div> <\/div> <div id=\"id_7bc29313-45a0-46bb-ac6a-0db98097ca0c_cc\" data-ignite-cc=\"ignite-cc\"> <ul class=\"sli-cards\"> <li class=\"sli-visa\" style=\"display:none;\"><\/li> <li class=\"sli-mastercard\" style=\"display:none;\"><\/li> <li class=\"sli-discover\" style=\"display:none;\"><\/li> <li class=\"sli-amex\" style=\"display:none;\"><\/li> <\/ul> <div class=\"sli-row\"> <div class=\"sli-columns sli-large-8 sli-medium-8 sli-form-field\"> <label class=\"sli-ccLabel sli-label\" for=\"pmhYedzuvv\" style=\"display: none;\">Card Number*<\/label> <input class=\"sli-ccInput sli-input\" name=\"card_number\" id=\"pmhYedzuvv\" type=\"text\" required=\"required\" data-fv-notempty-message=\"A credit card number is required\" maxlength=\"16\" autocomplete=\"off\" data-fv-creditcard=\"true\" data-fv-creditcard-message=\"Please enter a valid credit card number\" placeholder=\"Card Number\" \/> <\/div> <div class=\"sli-columns sli-large-4 sli-medium-4 sli-end sli-form-field\"> <label class=\"sli-ccExpCcvLabel sli-label\" for=\"dBwgyPNjJx\" style=\"display: none;\">Security Code*<\/label> <input class=\"sli-ccExpCcvInput sli-input\" name=\"cvv\" id=\"dBwgyPNjJx\" type=\"text\" required=\"required\" data-fv-notempty-message=\"CVV\/CCV is required\" maxlength=\"4\" size=\"4\" autocomplete=\"off\" data-fv-cvv=\"true\" data-fv-cvv_ccfield=\"card_number\" data-dv-cvv-message=\"Your CVV is invalid\" placeholder=\"CVV\" \/> <\/div> <\/div> <div class=\"sli-row\"> <div class=\"sli-columns sli-large-6 sli-medium-6 sli-form-field\"> <label class=\"sli-ccExpMonthLabel sli-label\" for=\"RMAxXwLUQC\" style=\"display: none;\">Expiration Month*<\/label> <select class=\"sli-ccInput sli-input\" name=\"expiry_month\" id=\"RMAxXwLUQC\" required=\"required\" data-fv-notempty-message=\"Month is required\" style=\"display: block;\"><option value=\"\">MM<\/option><option value=\"01\">01<\/option><option value=\"02\">02<\/option><option value=\"03\">03<\/option><option value=\"04\">04<\/option><option value=\"05\">05<\/option><option value=\"06\">06<\/option><option value=\"07\">07<\/option><option value=\"08\">08<\/option><option value=\"09\">09<\/option><option value=\"10\">10<\/option><option value=\"11\">11<\/option><option value=\"12\">12<\/option><\/select> <\/div> <div class=\"sli-columns sli-large-6 sli-medium-6 sli-end sli-form-field\"> <label class=\"sli-ccExpMonthLabel sli-label\" for=\"IQhsasRZoC\" style=\"display: none;\">Expiration Year*<\/label> <select class=\"sli-ccInput sli-input\" name=\"expiry_year\" id=\"IQhsasRZoC\" required=\"required\" data-fv-notempty-message=\"Year is required\" style=\"display: block;\"><option value=\"\">YYYY<\/option><option value=\"2021\">21<\/option><option value=\"2022\">22<\/option><option value=\"2023\">23<\/option><option value=\"2024\">24<\/option><option value=\"2025\">25<\/option><option value=\"2026\">26<\/option><option value=\"2027\">27<\/option><option value=\"2028\">28<\/option><option value=\"2029\">29<\/option><option value=\"2030\">30<\/option><option value=\"2031\">31<\/option><option value=\"2032\">32<\/option><\/select> <\/div> <\/div> <div class=\"sli-row\"> <div class=\"sli-columns sli-large-12 sli-small-12 sli-end sli-form-field\"> <label class=\"sli-ccNameLabel sli-label\" for=\"GnYGQrZETs\" style=\"display: none;\">Name on Card*<\/label> <input class=\"sli-ccNameInput sli-input\" name=\"name_on_card\" id=\"GnYGQrZETs\" type=\"text\" required=\"required\" data-fv-callback=\"true\" data-fv-callback-callback=\"validateCCName\" placeholder=\"Name on Card\" \/> <\/div> <\/div> <\/div> <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_fbb796f4-86cf-4deb-8c7d-767827b4dc52\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_c1d93670-a58b-4725-94b1-83f1b64e3205\"> <div class=\"sli-element sli-spacer\" id=\"id_252d1375-27b9-477d-85c1-8fb7b47062e4\"> &nbsp; <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_7fa824af-d0fd-499b-a918-31847679d5c1\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_582b37b1-c1d8-471b-bd51-15fa5e94b53a\"> <div class=\"sli-element sli-button-element\" id=\"id_f72c7d43-ad7e-4ab3-87cd-26778a6ac65e\"> <a class=\"sli-button sli-flat sli-expand\" track=\"true\" data-ignite-submit-button=\"data-ignite-submit-button\" style=\"background-color:rgb(73, 189, 189);\" tabindex=\"0\">Submit Donation<\/a> <div class=\"sli-processing\" style=\"display:none;\"><\/div> <\/div> <div class=\"sli-element sli-button-element\" id=\"id_3f2b3145-2cf9-4632-9b5c-cd8b862d589d\"> <a class=\"sli-button sli-flat sli-expand\" track=\"true\" data-ignite-button-step=\"2\" data-ignite-skip-validation=\"true\" style=\"color:rgb(165,155,134);background-color:rgb(255,255,255);border-width:1px;border-color:rgb(165,155,134);border-style: solid;\" tabindex=\"0\">&lt;&lt; Back<\/a> <\/div> <\/div> <\/div> <\/div> <\/div> <\/form> <div id=\"id_a5f5584d2ee64b7b80754928173a7ea4\"><script type=\"text\/javascript\" src=\"https:\/\/org-422d10e6-2770-4010-a776-3a094a0f35c1.salsalabs.org\/api\/widget\/fundraising\/a5f5584d-2ee6-4b7b-8075-4928173a7ea4?tId=id_a5f5584d2ee64b7b80754928173a7ea4&amp;eId=190efb5c-b7fa-4ada-a594-4938c2842d56&amp;eType=Template&amp;lsi=sli-forms-styles_v02&amp;bo=true\"><\/script><\/div><\/div> <\/div> <\/div> <\/div> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_3c729ee5-7a01-4ce6-b7b5-32930c85d3b7\"> <div class=\"sli-element sli-image\" id=\"id_a6d0c415-612a-4355-abda-296a64198bac\"> <img entity-id=\"b878e4c6-6311-4a93-8c78-73de2accb4ea\" id=\"id_a6d0c415-612a-4355-abda-296a64198bac_img\" alt=\"\" align=\"center\" src=\"https:\/\/org-422d10e6-2770-4010-a776-3a094a0f35c1.salsalabs.org\/public\/images\/image-placeholder.png\" ignite-image-src=\"https:\/\/org-422d10e6-2770-4010-a776-3a094a0f35c1.salsalabs.org\/190efb5c-b7fa-4ada-a594-4938c2842d56\/b878e4c6-6311-4a93-8c78-73de2accb4ea.png\" \/> <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_719c1135-8518-4f83-acbe-fe32e327a30f\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_f5f3ad6f-6e01-445d-9afc-40ce87f50b61\"> <div class=\"sli-element sli-spacer\" id=\"id_be96dca0-6512-4d8b-a474-9c0e44d4d1eb\"> &nbsp; <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_9f8df9b9-1b78-467f-9545-e156fb56dbb3\"> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_5b9eb71e-96de-4533-a7a6-be5764574547\"> <div class=\"sli-element sli-orgInfo\" id=\"id_de4f2039-9894-42ca-b844-a62ce66e0ac1\"> <div id=\"id_de4f2039-9894-42ca-b844-a62ce66e0ac1_inner\"> <address class=\"contact-info\"> <span style=\"color:#ffffff;\"><strong><span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_NAME\" ignite-mergefield-option=\"null\" ignite-text=\"ORGANIZATION NAME\">ORGANIZATION NAME<\/span><\/strong><br \/> <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_ADDRESS_LINE1\" ignite-mergefield-option=\"null\" ignite-text=\"ORG ADDRESS LINE 1\">ORG ADDRESS LINE 1<\/span> <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_ADDRESS_LINE2\" ignite-mergefield-option=\"null\" ignite-text=\"ORG ADDRESS LINE 2\">ORG ADDRESS LINE 2<\/span> | <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_CITY\" ignite-mergefield-option=\"null\" ignite-text=\"ORG CITY\">ORG CITY<\/span>, <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_STATE\" ignite-mergefield-option=\"null\" ignite-text=\"ORG STATE\">ORG STATE<\/span> <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_ZIPCODE\" ignite-mergefield-option=\"null\" ignite-text=\"ORG ZIP\">ORG ZIP<\/span><br \/> <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_CONTACT_PHONE\" ignite-mergefield-option=\"null\" ignite-text=\"ORG CONTACT PHONE\">ORG CONTACT PHONE<\/span> | <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_CONTACT_EMAIL\" ignite-mergefield-option=\"null\" ignite-text=\"ORG CONTACT EMAIL\">ORG CONTACT EMAIL<\/span><\/span> <\/address> <\/div> <\/div> <\/div> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_102109f1-1e49-489f-a100-32bd27e4dd7e\"> <div class=\"sli-social-icons-element sli-element sli-orientation-HORIZONTAL sli-iconColors-WHITE sli-iconSize-SMALL sli-alignment-RIGHT sli-align-left-for-small sli-text-left-for-small\" id=\"id_5bc5390c-ac00-4948-9d30-3dc28f62c630\"> <div class=\"sli-social-icons-text\"> <div> <span style=\"color:#ffffff\">Stay up to date with us!<\/span> <\/div> <\/div> <div class=\"sli-social-icons-list sli-hide\"> <div class=\"sli-social-icons-item\" id=\"id_FACEBOOK\"> <a href=\"https:\/\/www.facebook.com\/CCreekServices\/\" social-sharing-link=\"https:\/\/www.facebook.com\/CCreekServices\/\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"FACEBOOK\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-facebook2\" title=\"follow on Facebook\"><span class=\"sli-visually-hidden\">Facebook<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_TWITTER\"> <a href=\"https:\/\/twitter.com\/intent\/follow?screen_name=CCreekServices\" social-sharing-link=\"https:\/\/twitter.com\/intent\/follow?screen_name=CCreekServices\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"TWITTER\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-twitter2\" title=\"follow on Twitter\"><span class=\"sli-visually-hidden\">Twitter<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_INSTAGRAM\"> <a href=\"https:\/\/www.instagram.com\/ccreekservices\/\" social-sharing-link=\"https:\/\/www.instagram.com\/ccreekservices\/\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"INSTAGRAM\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-instagram\" title=\"follow on Instagram\"><span class=\"sli-visually-hidden\">Instagram<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_PINTEREST\"> <a href=\"https:\/\/www.pinterest.com\/CCreekServices\/\" social-sharing-link=\"https:\/\/www.pinterest.com\/CCreekServices\/\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"PINTEREST\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-pinterest2\" title=\"follow on Pinterest\"><span class=\"sli-visually-hidden\">Pinterest<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_YOUTUBE\"> <a href=\"https:\/\/www.youtube.com\/channel\/UCdr82-dGqDqhmm5wpA3MJRg?sub_confirmation=1\" social-sharing-link=\"https:\/\/www.youtube.com\/channel\/UCdr82-dGqDqhmm5wpA3MJRg?sub_confirmation=1\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"YOUTUBE\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-youtube3\" title=\"follow on YouTube\"><span class=\"sli-visually-hidden\">YouTube<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_LINKEDIN\"> <a href=\"https:\/\/www.linkedin.com\/company\/canyon-creek-services\/\" social-sharing-link=\"https:\/\/www.linkedin.com\/company\/canyon-creek-services\/\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"LINKEDIN\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-linkedin\" title=\"follow on LinkedIn\"><span class=\"sli-visually-hidden\">LinkedIn<\/span><\/span><\/a> <\/div> <\/div> <\/div> <\/div> <\/div> <\/div> <div class=\"sli-tickets-pane sli-widget\" id=\"id_7f001bcb-0a4a-4eb8-821d-61d24afc4763_ticketView\" style=\"display:none\" data-internal-id=\"7f001bcb-0a4a-4eb8-821d-61d24afc4763\" data-token-id=\"190efb5c-b7fa-4ada-a594-4938c2842d56\" data-ignite-view=\"ticketView\"><\/div> <div class=\"sli-checkout-pane sli-widget\" id=\"id_d67ce164-91bc-494c-9659-b63bfe4e4171_checkoutView\" style=\"display:none\" data-internal-id=\"d67ce164-91bc-494c-9659-b63bfe4e4171\" data-token-id=\"190efb5c-b7fa-4ada-a594-4938c2842d56\" data-ignite-view=\"checkoutView\"><\/div> <div class=\"sli-action-pane sli-widget\" id=\"id_2849cafa-71d2-493c-9b7a-70a2aed6926d_actionView\" style=\"display:none\" data-internal-id=\"2849cafa-71d2-493c-9b7a-70a2aed6926d\" data-token-id=\"190efb5c-b7fa-4ada-a594-4938c2842d56\" data-ignite-view=\"actionView\"><\/div> <div class=\"sli-no-targets-pane sli-widget\" id=\"id_3ed2e70e-9095-408d-9fc6-d78dcaf2a202_noTargetsView\" style=\"display:none\" data-internal-id=\"3ed2e70e-9095-408d-9fc6-d78dcaf2a202\" data-token-id=\"190efb5c-b7fa-4ada-a594-4938c2842d56\" data-ignite-view=\"noTargetsView\"><\/div> <div class=\"sli-comments-closed-pane sli-widget\" id=\"id_a238c9cd-502b-4a89-b66a-33c61609b7fb_commentsClosedView\" style=\"display:none\" data-internal-id=\"a238c9cd-502b-4a89-b66a-33c61609b7fb\" data-token-id=\"190efb5c-b7fa-4ada-a594-4938c2842d56\" data-ignite-view=\"commentsClosedView\"><\/div> <div class=\"sli-confirmation-pane sli-widget\" id=\"id_5466379b-1fac-4a29-b51f-95c7ab597cc6_confirmationView\" style=\"display:none\" data-internal-id=\"5466379b-1fac-4a29-b51f-95c7ab597cc6\" data-token-id=\"190efb5c-b7fa-4ada-a594-4938c2842d56\" data-ignite-view=\"confirmationView\"> <div class=\"sli-row\" id=\"id_5b570fb8-2737-411e-9e03-58190973ee48\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_9662f1d2-f432-4de9-a533-3e9fc2c217b5\"> <div class=\"sli-element sli-logo\" id=\"id_12640014-5112-4a6e-ace5-7f3d519ec655\"> <img entity-id=\"logo\" id=\"id_12640014-5112-4a6e-ace5-7f3d519ec655_logo\" alt=\"Salsa\" width=\"220\" src=\"https:\/\/org-422d10e6-2770-4010-a776-3a094a0f35c1.salsalabs.org\/public\/images\/image-placeholder.png\" ignite-image-src=\"https:\/\/default.salsalabs.org\/api\/organization\/422d10e6-2770-4010-a776-3a094a0f35c1\/logo\/data\" \/> <\/div> <div class=\"sli-element sli-divider-element\" id=\"id_f1f01183-ed6c-4894-bc4f-c8594c762276\"> <div class=\"sli-divider\"> &nbsp; <\/div> <\/div> <div class=\"sli-element sli-spacer\" id=\"id_bd02c4cc-7b3a-48c7-8276-3b3d887e678f\"> &nbsp; <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_dfdd21fc-8370-4cf1-81d0-1db215b5eabb\"> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_2f4261af-54fc-482c-9f40-6982d971a5e3\"> <div class=\"sli-element sli-text sli-align-center-for-small sli-text-center-for-small\" id=\"id_ce21e537-e051-48df-9580-fd4fdb368afa\"> <div id=\"id_ce21e537-e051-48df-9580-fd4fdb368afa_inner\"> <h2> <span style=\"font-size:24px;\"><span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\">Thank you for making a difference!<\/span><\/span> <\/h2> <p> <span style=\"font-family:Trebuchet MS,Helvetica,sans-serif;\"><span style=\"font-size:16px;\">Thank you for making a difference in the lives of survivors in our community. Please help spread the word about the work we do at CCS and share with your friends, family, and associates why you give us your support.&nbsp;<\/span><\/span> <\/p> <\/div> <\/div> <div class=\"sli-social-icons-element sli-element sli-orientation-HORIZONTAL sli-iconColors-AUTO sli-iconSize-MEDIUM sli-alignment-LEFT sli-align-center-for-small sli-text-center-for-small\" id=\"id_f82e5b2a-a578-4110-b75f-ea7677900b1a\"> <div class=\"sli-social-icons-text\"> <div> <span style=\"font-family:Trebuchet MS,Helvetica,sans-serif\"><strong>Share our mission......<\/strong><\/span> <\/div> <\/div> <div class=\"sli-social-icons-list sli-hide\"> <div class=\"sli-social-icons-item\" id=\"id_FACEBOOK\"> <a href=\"https:\/\/www.facebook.com\/sharer.php?u=https%3A%2F%2Fcanyoncreekservices.salsalabs.org%2FGeneralDonationFormwebsite\" social-sharing-link=\"https:\/\/www.facebook.com\/sharer.php?u=\" target=\"_blank\"><span class=\"sli-icon sli-icon-facebook2\" title=\"share on Facebook\"><span class=\"sli-visually-hidden\">Facebook<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_TWITTER\"> <a href=\"https:\/\/twitter.com\/intent\/tweet?url=https%3A%2F%2Fcanyoncreekservices.salsalabs.org%2FGeneralDonationFormwebsite\" social-sharing-link=\"https:\/\/twitter.com\/intent\/tweet?url=\" target=\"_blank\"><span class=\"sli-icon sli-icon-twitter2\" title=\"share on Twitter\"><span class=\"sli-visually-hidden\">Twitter<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_PINTEREST\"> <a href=\"https:\/\/www.pinterest.com\/pin\/find\/?url=https%3A%2F%2Fcanyoncreekservices.salsalabs.org%2FGeneralDonationFormwebsite\" social-sharing-link=\"https:\/\/www.pinterest.com\/pin\/find\/?url=\" target=\"_blank\"><span class=\"sli-icon sli-icon-pinterest2\" title=\"share on Pinterest\"><span class=\"sli-visually-hidden\">Pinterest<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_EMAIL\"> <a href=\"mailto:?&amp;body=https%3A%2F%2Fcanyoncreekservices.salsalabs.org%2FGeneralDonationFormwebsite\" social-sharing-link=\"mailto:?&amp;body=\" target=\"_blank\"><span class=\"sli-icon sli-icon-mail\" title=\"share on Email\"><span class=\"sli-visually-hidden\">Email<\/span><\/span><\/a> <\/div> <\/div> <\/div> <\/div> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_f3859fdc-9b58-49ed-b9d3-53835ea9a370\"> <div class=\"sli-element sli-image\" id=\"id_5829ec37-a8c3-4708-860a-14e0fa1d0137\"> <img entity-id=\"25a1208f-e6b1-4cd5-84dd-3feb03a88feb\" id=\"id_5829ec37-a8c3-4708-860a-14e0fa1d0137_img\" alt=\"\" align=\"center\" src=\"https:\/\/org-422d10e6-2770-4010-a776-3a094a0f35c1.salsalabs.org\/public\/images\/image-placeholder.png\" ignite-image-src=\"https:\/\/org-422d10e6-2770-4010-a776-3a094a0f35c1.salsalabs.org\/190efb5c-b7fa-4ada-a594-4938c2842d56\/25a1208f-e6b1-4cd5-84dd-3feb03a88feb.png\" \/> <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_91d4bcc8-fb8d-4167-94ca-318e04253ae4\"> <div class=\"sli-large-12 sli-medium-12 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_69357fba-118e-4342-bb8e-5ccd2106914e\"> <div class=\"sli-element sli-spacer\" id=\"id_03f72d2a-1caa-4f70-8c7b-5da69695e35d\"> &nbsp; <\/div> <div class=\"sli-element sli-image\" id=\"id_6c06909f-11a9-4a5c-994a-e68e10735080\"> <img entity-id=\"d8fe12db-bffa-44a0-b6e9-f3a02f579559\" id=\"id_6c06909f-11a9-4a5c-994a-e68e10735080_img\" max-width=\"1544\" align=\"center\" alt=\"\" src=\"https:\/\/org-422d10e6-2770-4010-a776-3a094a0f35c1.salsalabs.org\/public\/images\/image-placeholder.png\" ignite-image-src=\"https:\/\/org-422d10e6-2770-4010-a776-3a094a0f35c1.salsalabs.org\/190efb5c-b7fa-4ada-a594-4938c2842d56\/d8fe12db-bffa-44a0-b6e9-f3a02f579559.png\" \/> <\/div> <\/div> <\/div> <div class=\"sli-row\" id=\"id_c06d94cc-071a-4a90-8bb2-f9eea3f38e73\"> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_7f078d61-a2f4-44fa-8bd6-ef5b6a9698c5\"> <div class=\"sli-element sli-orgInfo\" id=\"id_c5153bce-ebf4-460c-8cf2-a543644d2f5e\"> <div id=\"id_c5153bce-ebf4-460c-8cf2-a543644d2f5e_inner\"> <address class=\"contact-info\"> <span style=\"color:#ffffff;\"><strong><span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_NAME\" ignite-mergefield-option=\"null\" ignite-text=\"ORGANIZATION NAME\">ORGANIZATION NAME<\/span><\/strong><br \/> <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_ADDRESS_LINE1\" ignite-mergefield-option=\"null\" ignite-text=\"ORG ADDRESS LINE 1\">ORG ADDRESS LINE 1<\/span> <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_ADDRESS_LINE2\" ignite-mergefield-option=\"null\" ignite-text=\"ORG ADDRESS LINE 2\">ORG ADDRESS LINE 2<\/span> | <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_CITY\" ignite-mergefield-option=\"null\" ignite-text=\"ORG CITY\">ORG CITY<\/span>, <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_STATE\" ignite-mergefield-option=\"null\" ignite-text=\"ORG STATE\">ORG STATE<\/span> <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_ZIPCODE\" ignite-mergefield-option=\"null\" ignite-text=\"ORG ZIP\">ORG ZIP<\/span><br \/> <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_CONTACT_PHONE\" ignite-mergefield-option=\"null\" ignite-text=\"ORG CONTACT PHONE\">ORG CONTACT PHONE<\/span> | <span ignite-mergefield-default=\"\" ignite-mergefield-id=\"ORG_CONTACT_EMAIL\" ignite-mergefield-option=\"null\" ignite-text=\"ORG CONTACT EMAIL\">ORG CONTACT EMAIL<\/span><\/span> <\/address> <\/div> <\/div> <\/div> <div class=\"sli-large-6 sli-medium-6 sli-small-12 sli-columns \" data-ignite-container-type=\"DEFAULT\" id=\"id_814ca39c-054c-415d-a2d4-ac0624cccab0\"> <div class=\"sli-social-icons-element sli-element sli-orientation-HORIZONTAL sli-iconColors-WHITE sli-iconSize-SMALL sli-alignment-RIGHT sli-align-left-for-small sli-text-left-for-small\" id=\"id_669b3712-a8b2-44b7-91c0-8d81f398ad5b\"> <div class=\"sli-social-icons-text\"> <div> <span style=\"color:#ffffff\">Stay up to date with us!<\/span> <\/div> <\/div> <div class=\"sli-social-icons-list sli-hide\"> <div class=\"sli-social-icons-item\" id=\"id_FACEBOOK\"> <a href=\"https:\/\/www.facebook.com\/CCreekServices\/\" social-sharing-link=\"https:\/\/www.facebook.com\/CCreekServices\/\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"FACEBOOK\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-facebook2\" title=\"follow on Facebook\"><span class=\"sli-visually-hidden\">Facebook<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_TWITTER\"> <a href=\"https:\/\/twitter.com\/intent\/follow?screen_name=CCreekServices\" social-sharing-link=\"https:\/\/twitter.com\/intent\/follow?screen_name=CCreekServices\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"TWITTER\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-twitter2\" title=\"follow on Twitter\"><span class=\"sli-visually-hidden\">Twitter<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_INSTAGRAM\"> <a href=\"https:\/\/www.instagram.com\/ccreekservices\/\" social-sharing-link=\"https:\/\/www.instagram.com\/ccreekservices\/\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"INSTAGRAM\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-instagram\" title=\"follow on Instagram\"><span class=\"sli-visually-hidden\">Instagram<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_PINTEREST\"> <a href=\"https:\/\/www.pinterest.com\/CCreekServices\/\" social-sharing-link=\"https:\/\/www.pinterest.com\/CCreekServices\/\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"PINTEREST\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-pinterest2\" title=\"follow on Pinterest\"><span class=\"sli-visually-hidden\">Pinterest<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_YOUTUBE\"> <a href=\"https:\/\/www.youtube.com\/channel\/UCdr82-dGqDqhmm5wpA3MJRg?sub_confirmation=1\" social-sharing-link=\"https:\/\/www.youtube.com\/channel\/UCdr82-dGqDqhmm5wpA3MJRg?sub_confirmation=1\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"YOUTUBE\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-youtube3\" title=\"follow on YouTube\"><span class=\"sli-visually-hidden\">YouTube<\/span><\/span><\/a> <\/div> <div class=\"sli-social-icons-item\" id=\"id_LINKEDIN\"> <a href=\"https:\/\/www.linkedin.com\/company\/canyon-creek-services\/\" social-sharing-link=\"https:\/\/www.linkedin.com\/company\/canyon-creek-services\/\" target=\"_blank\" usedefaultnetworks=\"useDefaultNetworks\" social-network-id=\"LINKEDIN\" social-follow=\"social-follow\"><span class=\"sli-icon sli-icon-linkedin\" title=\"follow on LinkedIn\"><span class=\"sli-visually-hidden\">LinkedIn<\/span><\/span><\/a> <\/div> <\/div> <\/div> <\/div> <\/div> <\/div> <\/formtemplate> <\/body><\/html></div>';// set up our IGNITE namespace and jquery
  if (typeof window.IGNITE == 'undefined' ||
      typeof window.IGNITE.jquery == 'undefined') {
    var src = _igWMbMaNGlzQ.ASSETS_PREFIX+'/public/scripts/script.min.js';
    var s = document.createElement('script');
    s.setAttribute('src', src);
    s.setAttribute('async', '');
    s.setAttribute('type', 'text/javascript');
  
    if (s.readyState) { // IE
      s.onreadystatechange = function () {
        if (s.readyState == "loaded" || s.readyState == "complete") {
          s.onreadystatechange = null;
          window.IGNITE = {};
          window.IGNITE.jquery = jQuery.noConflict(true);
          _igWMbMaNGlzQ.initialize();
        }
      };
    }
    else {
      s.onload = function () {
        window.IGNITE = {};
        window.IGNITE.jquery = jQuery.noConflict(true);
        _igWMbMaNGlzQ.initialize();
      };
    }
  
    _igWMbMaNGlzQ.addCSS("//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css");
    document.getElementsByTagName('head')[0].appendChild(s);
  }
  
  // invoke the initialization after load
  // this is to catch case where onload already finished, so this should work directly
  try {
    _igWMbMaNGlzQ.initialize();
  } catch (e) {
    // intentionally eat any errors here as to not negatively affect client pages/sites
  }
  
  _igWMbMaNGlzQ.addInit(function doInitialize() {
    var cssStyle = "sli-styles.css";
    var cssDiv = window.IGNITE.jquery("div[hidden='true'][layout-style-id]");
    if (cssDiv && cssDiv.attr("layout-style-id") && cssDiv.attr("layout-style-id").length > 0) {
      cssStyle = cssDiv.attr("layout-style-id") + ".css";
    }
    _igWMbMaNGlzQ.addCSS(_igWMbMaNGlzQ.ASSETS_PREFIX+"/public/styles/" + cssStyle);
  });
  
  _igWMbMaNGlzQ.addInit(function() {
    if (window.IGNITE.jquery('a[useDefaultNetworks]').length > 0) {
      var sfcUrl = "https://default.salsalabs.org/public/SFCxxxORG_IDxxx";
      try {
        window.IGNITE.jquery.ajax({
          url: sfcUrl,
          cache: false
        }).done(function(data) {
          if (data) {
            window.IGNITE.jquery.each(data, function(key, value) {
              if (value) {
                window.IGNITE.jquery('a[useDefaultNetworks][social-network-id=' + key + ']').attr('href', value);
              } else {
                window.IGNITE.jquery('a[useDefaultNetworks][social-network-id=' + key + ']').closest('div.sli-social-icons-item').hide();
              }
            });
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
    window.IGNITE.jquery("div.sli-social-icons-list").removeClass("sli-hide");
  });
  
  _igWMbMaNGlzQ.urlParameters = {};
  _igWMbMaNGlzQ.getUrlParameter = function(name,defaultValue) {
    if (!defaultValue) {defaultValue = '';}
    if (typeof name == 'undefined') name = 'init';
    if (!Object.keys(_igWMbMaNGlzQ.urlParameters).length) {
      var url = decodeURIComponent(window.location.search.substring(1));
      params = url.split('&');
  
      for (var i = 0; i < params.length; i++) {
        param = params[i].split('=');
        _igWMbMaNGlzQ.urlParameters[param[0]] = param[1];
      }
  
      if (window.IGNITE.jquery('input[name=makeRecurring]').length == 0) {
        delete _igWMbMaNGlzQ.urlParameters['recurring'];
        delete _igWMbMaNGlzQ.urlParameters['makerecurringcb'];
      }
    }
  
    return _igWMbMaNGlzQ.urlParameters[name] || defaultValue;
  };
  
  _igWMbMaNGlzQ.handleRecurringCheckbox = function() {
    if (_igWMbMaNGlzQ.getUrlParameter('recurring') === 'yes') {
      if (!window.IGNITE.jquery('input[name=makeRecurring]').attr('checked')) {
        window.IGNITE.jquery('input[name=makeRecurring]').click().attr('checked', 'checked');
      }
      window.IGNITE.jquery('div[data-ignite-recurring-amount]','#form_igWMbMaNGlzQ').show();
      window.IGNITE.jquery('div[data-ignite-onetime-amount]','#form_igWMbMaNGlzQ').hide();
    } else if (_igWMbMaNGlzQ.getUrlParameter('recurring') === 'no') {
      if (window.IGNITE.jquery('input[name=makeRecurring]').attr('checked')) {
        window.IGNITE.jquery('input[name=makeRecurring]').click().removeAttr('checked');
      }
      window.IGNITE.jquery('div[data-ignite-recurring-amount]','#form_igWMbMaNGlzQ').hide();
      window.IGNITE.jquery('div[data-ignite-onetime-amount]','#form_igWMbMaNGlzQ').show();
    }
  }
  
  _igWMbMaNGlzQ.handleDonationAmount = function(amount) {
    if (!isNaN(amount)) {
      var isRecurring = _igWMbMaNGlzQ.getUrlParameter('recurring') === 'yes'
                        || _igWMbMaNGlzQ.getUrlParameter('makerecurringcb') === 'yes'
                        || window.IGNITE.jquery('input[name=makeRecurring]').attr('checked');
      var donAmt = window.IGNITE.jquery((isRecurring ? '.sli-recurringAmountRadio' : '.sli-oneTimeAmountRadio')
                                        + '[data-ignite-amount*="' + amount + '"]');
      _igWMbMaNGlzQ.setAmounts(donAmt, isRecurring, amount);
    }
  }
  
  _igWMbMaNGlzQ.setAmounts = function(donAmt, isRecurring, amount) {
      var amountSet = false;
      if (donAmt.length) {
          donAmt.each(function (index, value) {
              if (parseFloat(window.IGNITE.jquery(value).attr('data-ignite-amount')) == amount) {
                  window.IGNITE.jquery(value).click();
                  amountSet = true;
              }
          });
      }
      if (!amountSet) {
          if (isRecurring) {
              window.IGNITE.jquery("input[name='donationAmtToggle2']").prop('checked',false);
  
              window.IGNITE.jquery("[data-ignite-custom-recurring-input]").closest('div').find('.sli-amount-label').addClass('sli-custom-amount-label-selected');
              // don't change this blur event, recurring amount has a listener on blur to update amounts
              window.IGNITE.jquery("[data-ignite-custom-recurring-input]").val(amount).blur();
              // need to add this event to make selection for other button
              window.IGNITE.jquery("[data-ignite-custom-recurring-input]").val(amount).focus();
          } else {
              window.IGNITE.jquery("input[name='donationAmtToggle']").prop('checked',false);
  
              window.IGNITE.jquery("[data-ignite-custom-onetime-input]").closest('div').find('.sli-amount-label').addClass('sli-custom-amount-label-selected');
              // don't change this blur event, one time amount has a listener on blur to update amounts
              window.IGNITE.jquery("[data-ignite-custom-onetime-input]").val(amount).blur();
              // need to add this event to make selection for other button
              window.IGNITE.jquery("[data-ignite-custom-onetime-input]").val(amount).focus();
          }
      }
  }
  
  _igWMbMaNGlzQ.handleOther = function(key) {
    var element = window.IGNITE.jquery('[salsa-reference-name=' + key + ']');
    var value = _igWMbMaNGlzQ.getUrlParameter(key);
    if (element.is(':checkbox')) {
      if (value == 'yes')
        element.click().attr('checked', 'checked');
      else if (value == 'no')
        element.click().removeAttr('checked');
    } else if (element.hasClass('sli-select-radio')) {
      element.find('input[value="' + value + '"]').click().attr('checked', 'checked');
    } else {
      element.val(value).change();
    }
  
    if (key == 'address-country') {
       _igWMbMaNGlzQ.handleCountryChange();
    }
  }
  
  _igWMbMaNGlzQ.handleParameter = function(key) {
      if (key) {
        if (key === 'recurring') {
          _igWMbMaNGlzQ.handleRecurringCheckbox();
        } else if (key === 'amount') {
          _igWMbMaNGlzQ.handleDonationAmount(parseFloat(_igWMbMaNGlzQ.getUrlParameter('amount')));
        } else if (key === 'oneTimeAmount') {
            var amount = parseFloat(_igWMbMaNGlzQ.getUrlParameter('oneTimeAmount'));
            var donAmt = window.IGNITE.jquery('.sli-oneTimeAmountRadio' + '[data-ignite-amount*="' + amount + '"]');
            _igWMbMaNGlzQ.setAmounts(donAmt, false, amount);
        } else if (key === 'recurringAmount') {
            var amount = parseFloat(_igWMbMaNGlzQ.getUrlParameter('recurringAmount'));
            var donAmt = window.IGNITE.jquery('.sli-recurringAmountRadio' + '[data-ignite-amount*="' + amount + '"]');
            _igWMbMaNGlzQ.setAmounts(donAmt, true, amount);
        } else {
            try {
                _igWMbMaNGlzQ.handleOther(key);
            } catch(e) {
                console.log(e);
            }
        }
      }
  }
  
  _igWMbMaNGlzQ.addPostInit(function hiddenParams() {
    // initialize
    _igWMbMaNGlzQ.getUrlParameter();
  
    for (var key in _igWMbMaNGlzQ.urlParameters) {
      _igWMbMaNGlzQ.handleParameter(key);
    }
  });
  
  _igWMbMaNGlzQ.addPostInit(function salsaTrack() {
    _igWMbMaNGlzQ.stc = _igWMbMaNGlzQ.getUrlParameter('sl_tc', _igWMbMaNGlzQ.stc);
  });