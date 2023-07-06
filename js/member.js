// GLOBAL VARIABLES
const filterBtns = document.querySelectorAll('.filter-btns')
const trackArr = Array.from(filterBtns)
const inputValue = document.querySelector('.input')
let studentData = []

// EVENT LISTENERS
// FIRST LOAD
window.onload = () => getAllStudents()

// SEARCH
inputValue.addEventListener('keyup', () => searchStudents())

// SELECT TRACK
trackArr.forEach(track => {
  track.addEventListener('click', () => {
    const dataTrack = track.getAttribute('data-track')
    console.log(dataTrack)
    dataTrack === 'all' ? 
      getAllStudents() :
      filterStudents(`${dataTrack} engineering`)
  })
})

// LOAD ALL DATA FROM STUDENTDATA JSON FILE
const getAllStudents = async() => {
  try {
    const response = await fetch('../studentData.json')
    const result = await response.json()
    //console.log(result.data.students)
    studentData = result.data.students
    renderData(studentData)
  } catch (err) {
    console.log(err)
  }
} 

// RENDER ALL STUDENTS
// const displayAllStudent = (students) => {
//   const studentContainer = document.querySelector('.container')
//   studentContainer.innerHTML = ''

//   students.forEach(item => {
//     const { name, stuId, track, img, description, socialmedia:{linkedin, github, twitter, portfolio}} = item;
//     const card = (`
        
//     <div class="profile-card">
//     <div class="card-content">
//       <div class="front-card">
        
//         <div class="image">
//           <img src=${img} alt="" />
//         </div>

        
//         <div class="profile-info">
//           <p><span> NAME</span>${name}</p>
//           <p><span>TRACK</span> ${track}</p>
//           <p><span>STU-ID</span>ALT/SOE/022/${stuId}</p>
//         </div>
//       </div>

//       <div class="back-card">
//         <div class="introduction">
//           <p class="intro-title">
//             Introduction
//           </p>
//           <p>
//           ${description.intro}
//           </p>

//           <button type="submit" onclick = detailProfile(${item.stuId})> Read More..  </button>
//         </div>

//         <!-- SOCIAL-MEDIA -->
//         <div class="social-media">



//         <a
//         id="media-link" target =_blank
//         href= ${linkedin}
//       >
//         <i class="fab fa-linkedin"></i>
//       </a>


//       <a
//       id="media-link" target =_blank
//       href= ${github}
//     >
//       <i class="fab fa-github"></i>
//     </a>


//         <a
//         id="media-link" target =_blank
//         href=${twitter}
//       >
//             <i class="fab fa-twitter"></i>
//         </a> 

        

//         <a id="media-link" target =_blank href=${portfolio}
//         ><i class="fa fa-briefcase" ></i
//       ></a>

        
//         </div>
//       </div>
//     </div>
//   </div>
  
//   `)
//   studentContainer.innerHTML += card
//   })
// }

// FILTER STUDENTS BY TRACK
const filterStudents = async (track) => {
  // SINCE WE NEED TO DISPLAY A NEW SET OF STUDENTS BY TRACK
  // WE NEEDED TO MAKE THIS AN ASYNC FUNCTION TO FETCH ALL STUDENTS
  // AND THEN ONCE THAT DATA IS LOADED WE CAN CONTINUE FILTERING
  await getAllStudents()
  inputValue.value = ''
  const filteredStudents = studentData.filter(s => s.track.toUpperCase() === track.toUpperCase())
  studentData = filteredStudents
  renderData(filteredStudents)
}

// SEARCH STUDENTS
const searchStudents = () => {
  console.log(studentData)
  const searchContainer = document.querySelector('.container')
  let result = ''
  const stringLowerCase = (value) => value.toString().toLowerCase();
  const isMatched = (value, matchBy) => stringLowerCase(value).match(stringLowerCase(matchBy)); 
 
 const searchTrack = studentData.filter( (item) => isMatched(item.name, inputValue.value) || isMatched(item.stuId, inputValue.value) || isMatched(item.circle, inputValue.value));
   
 searchTrack.length > 0? (
 
   searchTrack.forEach((searchItem, index) => {
     const {id,name, stuId, track, img, description, socialmedia:{linkedin, github, twitter, portfolio}} = searchItem;
     let newIndex = index+id;    
    result += `              
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
    
            <button type="submit" onclick = detailProfile(${stuId})> Read More...  </button>
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
 ) :  result += `      
      <div class="profile-info1">
            <p id='no-user'><span class='blink'>Invalid user!!!</span><br>Check the <i>all link icon</i> .
            </p> 
      </div>
   `;

   searchContainer.innerHTML = result
}

// CONTAINS THE OUTLINE OF UI 
function renderData(data){
  console.log("DATA: ", data)
  const studentContainer = document.querySelector('.container')
  studentContainer.innerHTML = ''

  data.forEach((item) => {
    const { name, stuId, track, img, description, socialmedia:{linkedin, github, twitter, portfolio}} = item;

    const card = `
               
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
 
           <button type="submit" onclick = detailProfile(${stuId})> Read More...  </button>
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
    studentContainer.innerHTML += card
  })
}

// NAVIGATE TO STUDENT PROFILE
const detailProfile = (index) =>{ 
  const filteredItems = studentData.filter(item => item.stuId === index ? location.href = "dashboardhome.html" : null)
  console.log(filteredItems)
    filteredItems.forEach(item =>{
      localStorage.setItem("data", JSON.stringify(item))  
    })
}
