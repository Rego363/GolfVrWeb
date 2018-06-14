function submit()
{


  if(JSON.parse(localStorage.getItem('proceed')) != false)
  {
    var courseName = document.getElementById("course_name_field").value;
    var numOfHoles = document.getElementById("holes").value;
    init(courseName, numOfHoles);
    document.location.href = "upload.html";
  }
}

function check(courses)
{

  localStorage.setItem('proceed', JSON.stringify(true));

  for(var i = 0; i < courses.length; i++)
  {
    if (courses[i] === document.getElementById("course_name_field").value)
    {
      window.alert("Error: Course already registered");
      localStorage.setItem('proceed', JSON.stringify(false));
    }
  }
}
