const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const request = require('request')

// Define your HTML/CSS
const data = {
  html: `<div class="compact-profile">
      <div class="header">
        <div class="profile">
          <div class="title">Mahesh Patel</div>
          <hr>
          <div class="sub-title"><img class="location-icon" src="https://res.cloudinary.com/thinkcdnimages/image/upload/v1553103254/location_e5herv.svg"><span>Ahmedabad, India</span></div>
          <div class="highlights">

		<div class="badge">
			<img class="badgebg" src="https://res.cloudinary.com/thinkcdnimages/image/upload/v1553015903/badge_hy9svu.png">
			<div class="number">7</div>
<!--       <div class="number rocket"><img src="https://res.cloudinary.com/thinkcdnimages/image/upload/v1553017498/rocket_i3kmd0.svg"></div> -->
      <div class="text-container"><div class="text">Years Experience</div></div>
		</div>

		<div class="pic" style="background-image: url('https://res.cloudinary.com/thinkcdnimages/image/upload/v1553103562/mahesh-patel_aljchq.png');">
<!-- 			<img class="img" src="https://anima-uploads.s3.amazonaws.com/projects/5c90c5dbe0a593000bd612a4/releases/5c90fb4b449d31000932ba59/img/compact-profile-img@2x.png"> -->
</div>
		</div>
        </div>
      </div>
      <div class="content">
        <div class="section">
          <div class="title">
            Hard Skills
          </div>
          <div class="tags">
            <div class="tag bg-primary-light text-primary">
              ડ્રાઇવિંગ (Driving)
            </div>
            <div class="tag bg-primary-light text-primary">
              ડિલિવરી(Delivery)
            </div>
          </div>
      </div>
        <div class="section m-top">
          <div class="title">
            Soft Skills
          </div>
          <div class="tags flex">
            <div class="tag bg-primary-light text-primary flex col justify-center align-center">
              <div>Working Memory</div>
              <div class="stars flex justify-center">
                <span class="star filled"></span>
                <span class="star filled"></span>
                <span class="star filled"></span>
                <span class="star empty"></span>
                <span class="star empty"></span>
              </div>
            </div>
            <div class="tag bg-primary-light text-primary flex col justify-center align-center">
              <div>Basic Maths</div>
              <div class="stars flex justify-center">
                <span class="star filled"></span>
                <span class="star filled"></span>
                <span class="star filled"></span>
                <span class="star filled"></span>
                <span class="star empty"></span>
              </div>
            </div>
          </div>
      </div>
        <div class="section m-top">
          <div class="title">
            Hobbies
          </div>
          <div class="tags">
            <div class="tag bg-primary-light text-primary">
              Travel (પ્રવાસ)
            </div>
            <div class="tag bg-primary-light text-primary">
              Movies/TV shows(મૂવીઝ)
            </div>
          </div>
      </div>
    </div>
  <div class="footer">
    <div class="logo"><img src="https://res.cloudinary.com/thinkcdnimages/image/upload/v1553080609/logo-long-35h-www_b3ldjo.png"></div>
    <div class="title">Currently working at</div>
    <div class="text">Uber</div>
    <hr>
    <div class="tags">
      <div class="tag bg-white text-primary mb-0 flex align-center">
        <img class="phone-icon" src="https://res.cloudinary.com/thinkcdnimages/image/upload/v1553103062/phone_v0hjpk.svg">+91 - 1989899999
      </div>
    </div>

      </div>`,
  css: ".box { border: 4px solid #03B875; padding: 20px; font-family: 'Roboto'; }",
  google_fonts: "Roboto"
}

// Create an image by sending a POST to the API.
// Retrieve your api_id and api_key from the Dashboard. https://htmlcsstoimage.com/dashboard
img_url = '';
request.post({ url: 'https://hcti.io/v1/image', form: data})
  .auth('9a01fd95-e431-4003-8a53-f3af816957fd', '9f623ec6-e868-4126-bfa0-4c323e5e5713')
  .on('data', function(data) {
    resp = JSON.parse(data)
    console.log(resp['url']);
    img_url = resp['url'];
  })

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send(img_url);
});
