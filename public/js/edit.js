function hide()
{
  document.getElementById("nine_holes_div").style.display = "none";
  document.getElementById("holes_div").style.display = "none";
  document.getElementById("section_div").style.display = "none";
  document.getElementById("upload_div").style.display = "none";

}
function getEmail()
{
  return JSON.parse(localStorage.getItem('user'));
}
function getEmailDataBase()
{
  return JSON.parse(localStorage.getItem('userDataBase'));
}


function revealArea()
{
  document.getElementById("section_div").style.display = "block";
}
function revealUpload()
{
  document.getElementById("upload_div").style.display = "block";
}
function setHeader()
{
  var holes = JSON.parse(localStorage.getItem('holes'))

  if(holes < 10)
  {
    document.getElementById("nine_holes_div").style.display = "block";
    document.getElementById("holes_div").style.display = "none";
  }
  else
  {
    document.getElementById("nine_holes_div").style.display = "none";
    document.getElementById("holes_div").style.display = "block";
  }

  var course = localStorage.getItem('course');
  document.getElementById("course_head").innerHTML = "Upload to " + JSON.parse(course);
}

function setEditHeader(e)
{
  document.getElementById("course_head").innerHTML = "Edit " + e;
}