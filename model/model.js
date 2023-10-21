// function export to inject html
export function changeRoute(){

    // declare varibables
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    // change content
    if(pageID != ""){
      $.get(`pages/${pageID}/${pageID}.html`, function(data){
      $("#app").html(data);
      });
    }else{
      $.get(`pages/home/home.html`, function(data){
      $("#app").html(data);
      });
    }
}