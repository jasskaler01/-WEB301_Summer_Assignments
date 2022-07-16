/*
  Jaskaran SIngh
  #0782371
*/
$(function () {


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.getElementById("error").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }
   
  document.getElementById('getLocation').addEventListener( "click", getLocation);
 document.getElementById('submit').addEventListener( "click", submitInfo);



function showPosition(position) {
  
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  localStorage.setItem('latitude',lat);
  localStorage.setItem('longitude',lon);
  document.getElementById('lat').value=lat
  document.getElementById('lon').value=lon

}
function submitInfo(){
  let fname = $('#fName').val();
  let lname = $('#lName').val();
  localStorage.setItem('fname',fname);
  localStorage.setItem('lname',lname);
document.getElementById('success').innerHTML='Data submit Successfuly'
}
function showError(error) {
  console.log("An error occurred: ", error);
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("Permission denied");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Position unavailable");
      break;
    case error.TIMEOUT:
      console.log("Position took too long!");
      break;
    default:
      console.log("Something went wrong with the geolocation");
  }
}
});