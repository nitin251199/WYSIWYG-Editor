function submit(){
    var dayname = day.options[day.selectedIndex].text
    var topicname = topic.options[topic.selectedIndex].text
    
    switch(topicname)
    {
        case 'Topic 1':
        document.getElementById("editor").value = "Contents Related To Topic 1";
        break; 
        case 'Topic 2': 
        document.getElementById("editor").value = "Contents Related To Topic 2";
        break;
        case 'Topic 3': 
        document.getElementById("editor").value = "Contents Related To Topic 3";
        break;
        case 'Topic 4': 
        document.getElementById("editor").value = "Contents Related To Topic 4";
        break;
        case 'Topic 5': 
        document.getElementById("editor").value = "Contents Related To Topic 5";
        break;

    }

    var data = document.getElementById("editor").value;
    

    htm="<table border='1' class='table' cellspacing='0' cellpadding='10' width='600px'>"
    htm+="<tr><th><b>"+dayname+"</b>:"+topicname+"</th>"
    htm+="<tr><td>"+data+"</td></tr></table>"

    result.innerHTML = htm;
}
function func(){
    var topicname = topic.options[topic.selectedIndex].text
    
    switch(topicname)
    {
        case 'Topic 1':
        document.getElementById("editor").value = "Contents Related To Topic 1";
        break; 
        case 'Topic 2': 
        document.getElementById("editor").value = "Contents Related To Topic 2";
        break;
        case 'Topic 3': 
        document.getElementById("editor").value = "Contents Related To Topic 3";
        break;
        case 'Topic 4': 
        document.getElementById("editor").value = "Contents Related To Topic 4";
        break;
        case 'Topic 5': 
        document.getElementById("editor").value = "Contents Related To Topic 5";
        break;

    }
    var data = document.getElementById("editor").value;
    CKEDITOR.instances['editor'].setData(data);
}