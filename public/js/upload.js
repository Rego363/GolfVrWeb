function hide()
{
//  document.getElementById("nine_holes_div").style.display = "none";
//  document.getElementById("holes_div").style.display = "none";
  document.getElementById("section_div").style.display = "none";
  document.getElementById("upload_div").style.display = "none";

}
function hideProgressDiv()
{
  document.getElementById('fileButton').value = "";
  document.getElementById("upload_bar_div").style.display = "none";
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
function init(course, holes)
{
  localStorage.setItem('course', JSON.stringify(course));
  localStorage.setItem('holes', JSON.stringify(holes));
}

function getCourse()
{
  return JSON.parse(localStorage.getItem('course'));
}

function setHeader()
{
  var holes = JSON.parse(localStorage.getItem('holes'));

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
