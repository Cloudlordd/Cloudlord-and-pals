const studentContainer = document.querySelector('.container')
const filterBtns = document.querySelectorAll('.filter-btns')
const trackSelection = document.getElementsByClassName('track-selection')
const track = ['frontend', 'backend', 'cloud']

async function getStudents(){
  const response = await fetch('../studentData.json')
  const result = await response.json()
  //console.log(result.data.students)
  return result.data.students
} 

getStudents()
  .then(data => {
    
  })
  .catch(err => console.log(err))

const filterProducts = (value) => {
  filterBtns.forEach((btn) => {
    console.log(btn.innerText)
    console.log(value)
    if (btn.innerText === "ALL") {console.log("Hi all!")}
    if (value.toUpperCase() === btn.innerText.toUpperCase()) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
 
    console.log(studentData)
  })

}

async function filterSelectedTrack(s){
  const students = await getStudents()
  console.log(students)
  const studentsOnTrack = track.forEach(item => {
    students.filter(student => {
      //console.log(item)
      //console.log(student)
      if (item.toUpperCase() === student.track.toUpperCase() ) {
        console.log(student.track + " *************************************************")
        return student.track
      }
    })
  })
  console.log(studentsOnTrack)
}

function renderData(data){
   const container = `
              
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

 studentContainer.innerHTML = container
}