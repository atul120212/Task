let submit=document.querySelector("#submit");

submit.addEventListener('click',()=>{

    
   console.log("hello")
    //console.log(generatedurl);
   


   //storing the data in objects getting from form
    const data={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        websitelink: document.getElementById("websitelink").value,
        image: document.getElementById("image").value,
        gender: document.getElementsByName("gender"),
        skills: document.getElementById("skills").value
    };
    console.log(data);

    //Card Template
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      
      <div class="NameContainer">${data.name}</div>
      <a href="mailto:atulsharma28092004@gmail.com">${data.email}</a><br>
      <a href="www.google.com">${data.websitelink}</a>
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
    //adding the card one after the other
    output.appendChild(newlist);
   
    //clearing the input fields after submission
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})