/**
 * Insert form field.
 */
function insert_form () {
  var parent = document.getElementsByClassName("mt-4")[0];
  var container = document.createElement("div");
  parent.appendChild(container);

  var span = document.createElement("span");
  span.innerText = "Base URL:";
  container.appendChild(span);  

  var base_url = document.createElement("input");
  base_url.setAttribute("id", "base_url");
  base_url.setAttribute("type", "text");
  base_url.setAttribute("value", window.location.origin + "/files/user/images/2024/04/436/Mtown436_");
  base_url.style.width = "600px";
  base_url.style.marginRight = "10px";
  base_url.style.marginBottom = "10px";
  container.appendChild(base_url);

  var br = document.createElement("br");
  container.appendChild(br);  
  
  var span = document.createElement("span");
  span.innerText = "Page Number:";
  container.appendChild(span);  

  var page_number = document.createElement("input");
  page_number.setAttribute("id", "page_number");
  page_number.setAttribute("type", "text");
  page_number.setAttribute("value", "24");
  page_number.style.width = "50px";
  page_number.style.marginRight = "10px";
  container.appendChild(page_number);

  var button = document.createElement("button");
  button.addEventListener("click", insert_images, false);
  button.setAttribute("class", "rcms_btn large");
  button.innerText = "Insert";
  container.appendChild(button);  
}

/**
 * Generate backnumber image fields.
 * @page_number
 * @base_url
 */
function insert_images () {
  var base_url    = document.getElementById("base_url").value;
  var page_number = document.getElementById("page_number").value;
  document.getElementById("extension_55_0").style.display = "none";
  document.getElementById("extension_56").style.display   = "none";

  var container = document.getElementsByClassName("mt-4")[0];
  
  for (var i=1;i-1<page_number;i++){
    var url   = base_url + i + ".jpg"
    var input = document.createElement("input");
    var img   = document.createElement("img");
    input.setAttribute("data-v-08b0fa91", "");
    input.setAttribute("type", "hidden");
    input.setAttribute("id", "ext_1["+i+"]");
    input.setAttribute("name", "ext_1["+i+"]");
    input.setAttribute("value", url);
    img.style.width = "70px";
    img.style.margin = "3px";
    img.setAttribute("src", url);
    container.appendChild(img);
    container.appendChild(input);
    
    if(i==1){
      var input = document.createElement("input");
      input.setAttribute("data-v-08b0fa91", "");
      input.setAttribute("type", "hidden");
      input.setAttribute("id", "ext_2");
      input.setAttribute("name", "ext_2");
      input.setAttribute("value", url);
      container.appendChild(input);
    }
  }
  var message = document.createElement("p");
  message.innerText = page_number + " images loaded. Please save the current topic."
  container.appendChild(message);
}  
new insert_form();
