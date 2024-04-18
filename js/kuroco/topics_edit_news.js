/**
 * Add a tweet button.
 */
function add_tweet_icon () {
  var i = document.createElement("i");
      i.setAttribute("class", "fa fa-twitter");

  var button = document.createElement("a");
      button.innerText = "Post on X";
      button.style.lineHeight = "40px";
      button.setAttribute("class", "rcms_btn large");
      button.addEventListener("click", post_tweet);  
      button.prepend(i);

  var li = document.createElement("li");
      li.appendChild(button);

  var buttons = document.getElementById("buttonbox_ul");
      buttons.appendChild(li);
}

/**
 * Generate and insert slug to news editor.
 */
function insert_slug () {
  var slug = document.getElementsByName("slug")[0];
  if (slug.value == ""){
    var date = new Date();
    var d1 = date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) +('0' + date.getDate()).slice(-2) + '-001';
    slug.value = d1;
  }  
}

/**
 * Generate and open twitter window based on the news editor content.
 */
function post_tweet () {
  var today = new Date();
  today = today.getMonth()+1 + "月" + today.getDate() + "日";
  var title = document.getElementById("subject").value;
  var content = document.getElementsByClassName("ck-editor__main")[0].textContent;
  var cat = document.getElementsByName("contents_type")[0].value;
  var slug = document.getElementsByName("slug")[0].value;
  var tweet = "";
  switch(cat){
    case '20': 
      slug = "news/" + slug;
      break;
    case '1':
      slug = "news/covid-19/" + slug;
      break;
    case '21':
      slug = "news/politics/" + slug;
      break;
    case '22':
      slug = "news/nikkei/" + slug;
      break;
    case '23':
      slug = "news/economic/" + slug;
      break;
    case '24':
      slug = "news/others/" + slug;
      break;
  }
  var url = "https://www.mtown.my/" + slug;
  if (!content) {
    content = content.substr(0,140);    
  }

  tweet = "【"+today+" #ニュース】\n🔸" + title +"\n\n" + content + "\n\n詳しくはこちら​👉";
  tweet = "https://twitter.com/share?url="+url+"&text=" + encodeURIComponent(tweet);
  window.open(tweet);
}

new insert_slug();
new add_tweet_icon();
