function hide()
{
  document.getElementById("nine_holes_div").style.display = "none";
  document.getElementById("holes_div").style.display = "none";
  document.getElementById("section_div").style.display = "none";
  document.getElementById("upload_div").style.display = "none";
  localStorage.setItem('selectCourseName', JSON.stringify("default"));
  localStorage.setItem('selectHoleNumber', JSON.stringify("default"));

}
function revealProgressDiv()
{
  document.getElementById("upload_bar_div").style.display = "block";
}
function hideProgressDiv()
{
  document.getElementById('fileButton').value = "";
  document.getElementById("upload_bar_div").style.display = "none";
}


function hideSection()
{
  document.getElementById("section_div").style.display = "none";
  document.getElementById("upload_div").style.display = "none";
    document.getElementById("upload_bar_div").style.display = "none";
  document.getElementById("section").value = "default";
  document.getElementById("9holes").value = "default";
  document.getElementById("18holes").value = "default";
}

function getEmail()
{
  return JSON.parse(localStorage.getItem('user'));
}
function getCourseName()
{
  return JSON.parse(localStorage.getItem('selectCourseName'));
}
function getEmailDataBase()
{
  return JSON.parse(localStorage.getItem('userDataBase'));
}


function revealArea()
{
  document.getElementById("section_div").value = "default";
  document.getElementById("section_div").style.display = "block";

  //var selected = document.getElementById("selectCourse").value = "block";
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

function storeHoleName()
{
  var selectHoleName = document.getElementById("selectCourse").value;
  localStorage.setItem('selectCourseName', JSON.stringify(selectHoleName));
}
