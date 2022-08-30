const studentContainer = document.querySelector('.container')




     

let getAllStudent = async () => {
 let response = await fetch('../studentdata.json') 
 let result = await response.json() 
 return result
}


(async () => {

    try {

        const res = await getAllStudent()
        const allData = res.data.students
        displayAllStudent(allData);
        
    } catch (error) {
        console.log("Not found", error)
    }
 
})()




// search functionalities


const search = async()=> {
 let input = document.querySelector(".input").value
 let searchContainer = ''

 const res = await getAllStudent()
 let response = res.data.students

 const stringLowerCase = (value) => value.toString().toLowerCase();
 const isMatched = (value, matchBy) => stringLowerCase(value).match(stringLowerCase(matchBy));
 

let searchTrack = response.filter( (item) => isMatched(item.name, input) || isMatched(item.stuId, input) || isMatched(item.circle, input));
  searchTrack.length > 0?

  searchTrack.forEach((searchItem, index) => {
    const {id,name, stuId, track, img, description, socialmedia:{linkedin, github, twitter, portfolio}} = searchItem;
    

    let newIndex = index+id;
    
  
    searchContainer += `
               
    <div class="profile-card">
    <div class="card-content">
      <div class="front-card">
        
        <div class="image">
          <img src=${img} alt="" />
        </div>
  
        
        <div class="profile-info">
          <p><span> NAME</span>${name}</p>
          <p><span>TRACK</span> ${track}</p>
          <p><span>STU-ID</span>ALT/SOE/022/${stuId}</p>
        </div>
      </div>
  
      <div class="back-card">
        <div class="introduction">
          <p class="intro-title">
            Introduction
          </p>
          <p>
           ${description.intro}
          </p>
  
          <button type="submit" onclick = detailProfile(${newIndex})> Read More..  </button>
        </div>
  
        <!-- SOCIAL-MEDIA -->
        <div class="social-media">
  
  
  
        <a
        id="media-link" target =_blank
        href= ${linkedin}
      >
        <i class="fab fa-linkedin"></i>
      </a>
  
  
      <a
      id="media-link" target =_blank
      href= ${github}
    >
      <i class="fab fa-github"></i>
    </a>
  
  
        <a
        id="media-link" target =_blank
        href=${twitter}
      >
            <i class="fab fa-twitter"></i>
         </a> 
  
         
  
          <a id="media-link" target =_blank href=${portfolio}
            ><i class="fa fa-briefcase" ></i
          ></a>
  
         
        </div>
      </div>
    </div>
  </div>
    `
   }):  searchContainer += `      
   <div class="profile-info1">
          <p id='no-user'><span class='blink'>Invalid user!!!</span><br>Check the <i>all link icon</i> .
          </p>

    </div>
  `;
  
   studentContainer.innerHTML = searchContainer   
}


// callback function that display all student card
const displayAllStudent = (allstudent) => {

  let container = ''

 allstudent.forEach((item, index)=> {
  const { name, stuId, track, img, description, socialmedia:{linkedin, github, twitter, portfolio}} = item;


  container += (`
      
  <div class="profile-card">
  <div class="card-content">
    <div class="front-card">
      
      <div class="image">
        <img src=${img} alt="" />
      </div>

      
      <div class="profile-info">
        <p><span> NAME</span>${name}</p>
        <p><span>TRACK</span> ${track}</p>
        <p><span>STU-ID</span>ALT/SOE/022/${stuId}</p>
      </div>
    </div>

    <div class="back-card">
      <div class="introduction">
        <p class="intro-title">
          Introduction
        </p>
        <p>
         ${description.intro}
        </p>

        <button type="submit" onclick = detailProfile(${index})> Read More..  </button>
      </div>

      <!-- SOCIAL-MEDIA -->
      <div class="social-media">



      <a
      id="media-link" target =_blank
      href= ${linkedin}
    >
      <i class="fab fa-linkedin"></i>
    </a>


    <a
    id="media-link" target =_blank
    href= ${github}
  >
    <i class="fab fa-github"></i>
  </a>


      <a
      id="media-link" target =_blank
      href=${twitter}
    >
          <i class="fab fa-twitter"></i>
       </a> 

       

       <a id="media-link" target =_blank href=${portfolio}
       ><i class="fa fa-briefcase" ></i
     ></a>

       
      </div>
    </div>
  </div>
</div>
 
 `)
    
 });

 studentContainer.innerHTML = container

 
}



const allStudent = async ()=>{
  let allContainer = ''

  const res = await getAllStudent()
 let response = res.data.students
   
 
 response.forEach((allItem, index) => {
  const { name, stuId, track, img, description, socialmedia:{linkedin, github, twitter, portfolio}} = allItem;
    

  allContainer += `
             
  <div class="profile-card">
  <div class="card-content">
    <div class="front-card">
      
      <div class="image">
        <img src=${img} alt="" />
      </div>

      
      <div class="profile-info">
        <p><span> NAME</span>${name}</p>
        <p><span>TRACK</span> ${track}</p>
        <p><span>STU-ID</span>ALT/SOE/022/ ${stuId}</p>
      </div>
    </div>

    <div class="back-card">
      <div class="introduction">
        <p class="intro-title">
          Introduction
        </p>
        <p>
         ${description.intro}
        </p>

        <button type="submit" onclick = detailProfile(${index})> Read More..  </button>
      </div>

      <!-- SOCIAL-MEDIA -->
      <div class="social-media">



      <a
      id="media-link" target =_blank
      href= ${linkedin}
    >
      <i class="fab fa-linkedin"></i>
    </a>


    <a
    id="media-link" target =_blank
    href= ${github}
  >
    <i class="fab fa-github"></i>
  </a>


      <a
      id="media-link" target =_blank
      href=${twitter}
    >
          <i class="fab fa-twitter"></i>
       </a> 

       

       <a id="media-link" target =_blank href=${portfolio}
       ><i class="fa fa-briefcase" ></i
     ></a>

       
      </div>
    </div>
  </div>
</div>
  `
 })

 studentContainer.innerHTML = allContainer

}





// frontend
const frontend = async ()=>{
  let frontendContainer = ''

  const res = await getAllStudent()
 let response = res.data.students

 let filterTrack = response.filter(item => {
return item.track === "Frontend Engineering"

})
 filterTrack.forEach((frontendItem, index) => {
  const {id,name, stuId, track, img, description, socialmedia:{linkedin, github, twitter, portfolio}} = frontendItem;

  frontendContainer += `
             
  <div class="profile-card">
  <div class="card-content">
    <div class="front-card">
      
      <div class="image">
        <img src=${img} alt="" />
      </div>

      
      <div class="profile-info">
        <p><span> NAME</span>${name}</p>
        <p><span>TRACK</span> ${track}</p>
        <p><span>STU-ID</span>ALT/SOE/022/${stuId}</p>
      </div>
    </div>

    <div class="back-card">
      <div class="introduction">
        <p class="intro-title">
          Introduction
        </p>
        <p>
         ${description.intro}
        </p>

        <button type="submit" onclick = detailProfile(${id})> Read More..  </button>
      </div>

      <!-- SOCIAL-MEDIA -->
      <div class="social-media">



      <a
      id="media-link" target =_blank
      href= ${linkedin}
    >
      <i class="fab fa-linkedin"></i>
    </a>


    <a
    id="media-link" target =_blank
    href= ${github}
  >
    <i class="fab fa-github"></i>
  </a>


      <a
      id="media-link" target =_blank
      href=${twitter}
    >
          <i class="fab fa-twitter"></i>
       </a> 

       

       <a id="media-link" target =_blank href=${portfolio}
       ><i class="fa fa-briefcase" ></i
     ></a>

       
      </div>
    </div>
  </div>
</div>
  `
 })

 studentContainer.innerHTML = frontendContainer
}



// backend function

const backend = async ()=>{
  let backendContainer = ''

  const res = await getAllStudent()
 let response = res.data.students

 let filterTrack = response.filter(item => {
return item.track === "Backend Engineering"

})

 filterTrack.forEach((backendItem, index) => {
  const {id, name, stuId, track, img, description, socialmedia:{linkedin, github, twitter, portfolio}} = backendItem;

  backendContainer += `
             
  <div class="profile-card">
  <div class="card-content">
    <div class="front-card">
      
      <div class="image">
        <img src=${img} alt="" />
      </div>

      
      <div class="profile-info">
        <p><span> NAME</span>${name}</p>
        <p><span>TRACK</span> ${track}</p>
        <p><span>STU-ID</span>ALT/SOE/022/${stuId}</p>
      </div>
    </div>

    <div class="back-card">
      <div class="introduction">
        <p class="intro-title">
          Introduction
        </p>
        <p>
         ${description.intro}
        </p>

        <button type="submit" onclick = detailProfile(${id})> Read More..  </button>
      </div>

      <!-- SOCIAL-MEDIA -->
      <div class="social-media">



      <a
      id="media-link" target =_blank
      href= ${linkedin}
    >
      <i class="fab fa-linkedin"></i>
    </a>


    <a
    id="media-link" target =_blank
    href= ${github}
  >
    <i class="fab fa-github"></i>
  </a>


      <a
      id="media-link" target =_blank
      href=${twitter}
    >
          <i class="fab fa-twitter"></i>
       </a> 

       
       <a id="media-link" target =_blank href=${portfolio}
       ><i class="fa fa-briefcase" ></i
     ></a>

       

       
      </div>
    </div>
  </div>
</div>
  `
 })

 studentContainer.innerHTML = backendContainer
}


// cloud function

const cloud = async ()=>{
  let cloudContainer = ''

  const res = await getAllStudent()
 let response = res.data.students

 let cloudTrack = response.filter(item => {
return item.track === "Cloud Engineering"

})

 cloudTrack.forEach((cloudItem, index) => {
  const { id,name, stuId, track, img, description, socialmedia:{linkedin, github, twitter, portfolio}} = cloudItem;

  cloudContainer += `
             
  <div class="profile-card">
  <div class="card-content">
    <div class="front-card">
      
      <div class="image">
        <img src=${img} alt="" />
      </div>

      
      <div class="profile-info">
        <p><span> NAME</span>${name}</p>
        <p><span>TRACK</span> ${track}</p>
        <p><span>STU-ID</span>ALT/SOE/022/${stuId}</p>
      </div>
    </div>

    <div class="back-card">
      <div class="introduction">
        <p class="intro-title">
          Introduction
        </p>
        <p>
         ${description.intro}
        </p>

        <button type="submit" onclick = detailProfile(${id})> Read More..  </button>
      </div>

      <!-- SOCIAL-MEDIA -->
      <div class="social-media">



      <a
      id="media-link" target =_blank
      href= ${linkedin}
    >
      <i class="fab fa-linkedin"></i>
    </a>


    <a
    id="media-link" target =_blank
    href= ${github}
  >
    <i class="fab fa-github"></i>
  </a>


      <a
      id="media-link" target =_blank
      href=${twitter}
    >
          <i class="fab fa-t"></i>
       </a> 

       

       <a id="media-link" target =_blank href=${portfolio}
       ><i class="fa fa-briefcase" ></i
     ></a>

       
      </div>
    </div>
  </div>
</div>
  `
 })

 studentContainer.innerHTML = cloudContainer
}





// store full profile of single user
const detailProfile = async(index) =>{

 const res = await getAllStudent()
 let response = res.data.students
 const filterItems = response.filter(item =>{
   return item.id === index? location.href = "dashboardhome.html" : null;
 
 })

 filterItems.forEach(item =>{

  
   localStorage.setItem("data", JSON.stringify(item))

   

  
 })

}




