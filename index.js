function handleClick(contentId) {
    var contents = document.querySelectorAll("#content > div");
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }

    document.getElementById(contentId ).style.display = "block";
  }