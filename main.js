// Construct the request
// Replace MyAppID with your Production AppID
const MyAppID = "NikolayK-Test-PRD-62eb6be68-a323e783";
// const MyAppID = "NikolayK-Test-SBX-82eb84eea-b0362bb7";
let url = "https://svcs.ebay.com/services/search/FindingService/v1";
  url += "?OPERATION-NAME=findItemsByKeywords";
  url += "&SERVICE-VERSION=1.0.0";
  url += "&SECURITY-APPNAME=" + MyAppID;
  url += "&GLOBAL-ID=EBAY-DE";
  url += "&RESPONSE-DATA-FORMAT=JSON";
  // url += "&callback=_cb_findItemsByKeywords";
  url += "&callback=test";
  url += "&REST-PAYLOAD";
  url += "&keywords=harry%20potter";
  url += "&paginationInput.entriesPerPage=3";

// Parse the response and build an HTML table to display search results
function _cb_findItemsByKeywords(root) {
  var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
  var html = [];
  html.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tbody>');
  for (let i = 0; i < items.length; ++i) {
    var item     = items[i];
    var title    = item.title;
    var pic      = item.galleryURL;
    var viewitem = item.viewItemURL;
    if (null != title && null != viewitem) {
      html.push('<tr><td>' + '<img src="' + pic + '" border="0">' + '</td>' +
      '<td><a href="' + viewitem + '" target="_blank">' + title + '</a></td></tr>');
    }
  }
  html.push('</tbody></table>');
  document.getElementById("results").innerHTML = html.join("");
}

function test() {
  console.log("test")
}

const urlPost = "https://svcs.ebay.com/services/search/FindingService/v1"
const postHeaders = {
  // 'Content-Type': 'application/json',
  // "X-EBAY-SOA-SERVICE-NAME": "FindingService",
  "X-EBAY-SOA-OPERATION-NAME": "findItemsIneBayStores",
  // "X-EBAY-SOA-GLOBAL-ID": "EBAY-DE",
  // "X-EBAY-SOA-REQUEST-DATA-FORMAT": "JSON",
  "X-EBAY-SOA-SECURITY-APPNAME": MyAppID,
}

const reqXML = `

`

fetch(urlPost, {
  method: 'POST',
  mode: 'no-cors',
  headers: postHeaders,
  // body: JSON.stringify(filter)
})
  // .then(response => response.json())
  // .then(data => console.log(data));

// Submit the request
// let s = document.createElement('script'); // create script element
// s.src= url;
// document.body.appendChild(s);
// const urlTxt = document.createElement('p')
// urlTxt.innerText = url
// document.body.appendChild(urlTxt)
console.log("Hello Ebay")