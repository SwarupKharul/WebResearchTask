var clid = document.getElementById("script").getAttribute("data-origin");
var ct = document.getElementById("script").getAttribute("ct");
var ct2 = document.getElementById("script").getAttribute("data-ct");
if(ct)ct=ct;else if(ct2)ct=ct2;else ct=30;
if(clid) clid=clid; else clid='tkClid';
function getUrlParameter(sParam = 'rclid') {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}
function setClickIDValue(name=clid,value=getUrlParameter(),exp_days=ct) {
  var d = new Date();
  d.setTime(d.getTime() + (exp_days*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getClickIDValue(name=clid) {
  var cname = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++){
    var c = ca[i];
    while(c.charAt(0) == ' '){
      c = c.substring(1);
    }
    if(c.indexOf(cname) == 0){
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  var clkid = getClickIDValue();
  if (clkid !== "") {
    var trackParam = getUrlParameter();
    if(trackParam !== undefined){
      if(clkid != getUrlParameter()){
        setClickIDValue();
      }
    }
  }
  else {
    setClickIDValue();
  }
  console.log(getClickIDValue());
}
checkCookie();

function  getAdvertiserData({domain, offerId,txnID, amount, coupon=null, extra_info=null, category=null, user=null}) {
  var clkid = getClickIDValue();
  if (clkid !== "") {
    if(clkid !== 'undefined'){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', domain + "/info?offer_id="+offerId +"&clkid="+clkid+"&sale_amount="+amount+"&trans_id="+txnID+"&coupon="+coupon+"&user="+user+"&extra_info="+extra_info+"&category="+category);
      xhr.onload = function() {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        }
        else {
          console.log('Request failed.  Returned status of ' + xhr.status);
        }
      };
      xhr.send();
    }
  }
}