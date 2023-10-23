// function export to inject html
export function changeRoute(){

    // declare varibables
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
   
    // change content
    if(pageID != ""){
      $.get(`pages/${pageID}/${pageID}.html`, function(data){
      $("#app").html(data);

    //   create page button functionality
        if(pageID == "create"){
            $("#submit").on("click", function(e){
                e.preventDefault();
                let userObj = {
                    firstName: $("#fName").val(), 
                    lastName: $("#lName").val(),
                    personalPhone: $("#pTel").val(),
                    workPhone: $("#wTel").val(),
                    email: $("#email").val(),
                    age: $("#age").val(),
                    website: $("#website").val(),
                    username: $("#username").val(),
                    password: $("#password").val(),
                    pin: $("#pin").val(),
                };
                console.log(userObj);
            
            })
        }

        //   edit page button functionality
        if(pageID == "edit"){
            $("#edit").on("click", function(e){
                e.preventDefault();
                let userObj = {
                    firstName: "Jerry", 
                    lastName: "Butler",
                    email: "jbutlerj@iu.edu",
                    personalPhone: "3171234567",   
                };
                $("#fName").val(userObj.firstName);
                $("#lName").val(userObj.lastName);
                $("#email").val(userObj.email);
                $("#pTel").val(userObj.personalPhone);
            })
            $("#submit").on("click", function(e){
                e.preventDefault();
                let userObj = {
                    firstName: $("#fName").val(), 
                    lastName: $("#lName").val(),
                    email: $("#email").val(),
                    personalPhone: $("#pTel").val(),
                };
                console.log(userObj);
            })
        }

        //   login-create account page button functionality
        if(pageID == "login"){
            $("#login").on("click", function(e){
                e.preventDefault();
                let userObj = {
                    username: $("#username").val(), 
                    password: $("#login-password").val(),
                };
                console.log(userObj);
            })
            $("#submit").on("click", function(e){
                e.preventDefault();
                let userObj = {
                    firstName: $("#fName").val(), 
                    lastName: $("#lName").val(),
                    email: $("#email").val(),
                    password: $("#create-password").val(),
                };
                console.log(userObj);
            })
        }

      });
    }else{
      $.get(`pages/home/home.html`, function(data){
      $("#app").html(data);
      });
    }
}