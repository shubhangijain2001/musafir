<template>
  <div>
    <navBar />
    <div class="land-bg">
      <h1 class="tag">Unleash Your Wanderlust, <br>Share Your Journeys</h1>
      <div class="search">
        <p>Find the Adventure of a Lifetime</p>
        <div class="inputs">
          
          <div id="input-1">
            <!-- <label for="city">City:</label><br> -->
            <input type="text" id="city" placeholder="Enter City">
          </div>

          <div id="input-2">
            <!-- <label for="category">Choose a category:</label><br> -->
            <select id="category">
              <option disabled selected value="Catergoies">Choose Category</option>
              <option value="Historical">Historical</option>
              <option value="Gardens">Gardens</option>
              <option value="Worship Places">Worship Places</option>
            </select>
          </div>
          

          <div id="input-3-btn">
            <button class="search-btn" role="button">
              Search
            </button>
          </div>


        </div>
      </div>
    </div>
    <div class="cities">
      <h1>Explore Destinations from these Cities</h1>
      <i class="fa fa-car"></i>
    </div>
    <p></p>
    <routerView />
  </div>


</template>

<script>
import navBar from '../components/navBar.vue';
export default {
  name: 'firstPage',
  components:{
    navBar
  },
  data() {
  return {
    imageUrl: require('@/assets/udaipur_image1.jpg').default
  };
}
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');



.land-bg {
  position: relative; /* Add position relative to establish a containing block for absolute positioning */
  height: 100vh;
  background-image: url("https://i.ibb.co/5hfgMsp/udaipur-image1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.tag {
  /* font-family: 'Pacifico', cursive; */
  font-family: 'Caveat', cursive;
  font-size: 50px;
  position: absolute;
  top: 8%;
  left: 50%;
  color: white;
  padding: 0;
  text-align: center;
  transform: translate(-50%, -50%);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

}

.search {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 200px;
  width: 100%;
  background-color: rgba(19, 18, 18, 0.3);
}

.search > p{
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 30px;
  font-weight: 300;
  letter-spacing: .1rem;
  color: white;
  text-align: center;
}


.inputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 10px; 
  margin:0 400px;
}

.inputs input::placeholder{
  color:white;
  font-size: 16px;
}

/* .inputs label{ */
  /* color: white; */
  /* font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; */
  /* font-size: 16px; */
  /* font-weight: 400; */
  /* line-height: normal; */
/* } */

#city, #category{
padding: 16px 24px;
background-color: transparent !important;
color: white !important;
border: 2px solid white;
/* border-radius: 5px; */
box-sizing: border-box;
min-height: 60px;
width:95%;
appearance: none; 
font-size: 16px;
}

#category option{
  color:black;
  background-color: white;
  font-size: 16px;
}
.search-btn {
  
  appearance: none;
  background-color: white;
  border: 2px solid white;
  border-radius: 0px !important;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 95%;
  will-change: transform;
}

.search-btn:disabled {
  pointer-events: none;
}

.search-btn:hover {
  color: white;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.search-btn:active {
  box-shadow: none;
  transform: translateY(0);
}

</style>