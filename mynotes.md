  <!-- Used to open Lightbox -->

    <div class="row">
      <div class="column">
       <img src="img1.jpg" onclick="openModal();currentSlide(1)" class="hover-shadow">
      </div>

  <!-- The Modal/Lightbox -->

      <div id="myLightbox" class="modal">
        <span class="close cursor" onclick="closeModal()">&times;</span>
        <div class="modal-content">

      <div class="myLightbox">
        <div class="numbertext"></div>
        <img src="img1.jpg" style="width:100%">
      </div>

  <!-- More can be added just copy div from above but change src and onclick -->


  <!-- Caption text -->
      
      <div class="caption-container">
        <p id="caption"></p>
      </div>

  <!-- Thumbnail image controls -->
      
      <div class="column">
        <img class="demo cursor" src="img1.jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods">
      </div>

  <!-- More can be added just copy div from above but change src and onclick -->
      
      </div>

  <!-- CSS for Lightbox -->

  <!-- The Modal (background) -->
  .modal {
    display: none;  <!-- Hidden by default -->
    position: fixed; <!-- Stay in place --> 
    z-index: 1; <!-- Sit on top -->
    padding-top: 100px; <!-- Location of the box -->
    left: 0;
    top: 0;
    width: 100%; <!-- Full width -->
    height: 100%; <!-- Full height -->
    overflow: auto; <!-- Enable scroll if needed -->
    background-color: rgb(0,0,0); <!-- Fallback color -->
    background-color: rgba(0,0,0,0.9); <!-- Black w/ opacity -->
      }

  <!-- Modal Content (image) -->
      .modal-content {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
      }

   <!-- /* Caption of Modal Image */ -->
      #caption {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
        text-align: center;
        color: #ccc;
        padding: 10px 0;
        height: 150px;
      }

  <!-- /* Add Animation */ -->
      .modal-content, #caption {  
        -webkit-animation-name: zoom;
        -webkit-animation-duration: 0.6s;
        animation-name: zoom;
        animation-duration: 0.6s;
      }

      @-webkit-keyframes zoom {
        from {-webkit-transform:scale(0)} 
        to {-webkit-transform:scale(1)}
      }

      @keyframes zoom {
        from {transform:scale(0)} 
        to {transform:scale(1)}
      }

  <!-- /* The Close Button */ -->
      .close {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
      }

      .close:hover,
      .close:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
      }

  <!-- /* 100% Image Width on Smaller Screens */ -->
      @media only screen and (max-width: 700px){
        .modal-content {
          width: 100%;
        }
      }
      </style>