<template>
<div id="app">
    <div class="about-page">
        <div data-aos="fade-up">
        <div class="vid_container">
            <video controls width="960px" height="536px" class="about_video">
                <source src="../assets/videos/about_sus.mp4" type="video/mp4">
            </video>
        </div>
        </div>
        <div data-aos="fade-right">
        <div class="about_startup-summit">
            <div class="design"></div>
            <div class="text">
                <h1>What is Startup Summit 2021?</h1>
                <p>Startup Summit is a 3-day tech conference, organized by BYTE, with a goal of empowering its attendees to step up for the future and create positive change. The event will feature talks from global professionals of the startup world, a diverse exposition that provides a glimpse into the Philippines’ budding startup scene, and internship opportunities from 
our innovative partners.</p>
                <h1>Why Startup Summit?</h1>
                <p>Startup Summit 2021 presents a unique and holistic experience that provides numerous learning opportunities enabling participants to gather new insights. </p> 
                <p>This all-in-one conference grants participants access to thought-provoking keynote sessions, personal interactions with global thought leaders, as well as internship and networking opportunities with our curated list of startups.</p>
                <h1>Why Stepping up for the Future?</h1>
                <p>In a time of shifting paradigms, Startup Summit invites everyone to take part in building a brighter and bolder tomorrow by stepping up for the future. The event challenges participants to seek opportunities amidst adversity and gear up for a future that reflects the positive change we all vie to be a part of.</p>
            </div>
        </div>
        <div>
        <div data-aos="fade-left">
        <div class="about_byte">
            <div class="text">
                <h1>About BYTE: Building Young Tech Entrepreneurs</h1>
                <p>BYTE, the home organization for B.S. Information Technology Entrepreneurship course, is an independent organization under LIONS.</p>
                <p>We strive to help our members develop technological skills and entrepreneurial principles in an inclusive, fun and welcoming environment, and to promote tech entrepreneurship inside and outside of the Ateneo De Manila University.</p>
                <p>BYTE envisions itself to be a technological and entrepreneurial network spearheaded by existing and potential catalysts for change.</p>
            </div>
            <img src="../assets/about_picture.png" class=byte_picture img draggable="false">
        </div>
        </div>
    </div>
</div>
</div>
</div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
    name: "AboutPage",
    created(){
        AOS.init(
            {
                disable: 'tablet' & 'mobile'
            }
        ),
        AOS.refresh(
            {
                disable: 'tablet' & 'mobile'
            }
        )
    }
}
</script>

<style scoped>
/*Fonts*/
@font-face {
    font-family: "objectivity";
    src: url(../assets/fonts/objectivity.extra-bold.otf);
}
@font-face {
    font-family: "inter";
    src: url(../assets/fonts/Inter-Regular.ttf);
}

/*Unviersal styling*/
p {
    font-size: 16px;
    font-family: "inter";
    line-height: 26px;
    font-weight: 400px;
    color: rgba(0, 0, 0, 1);
    /* text-shadow: 0 3px 3px rgb(145, 143, 143) ; */
}
h1 {
    font-size: 28px;
    font-family: "objectivity";
    color: rgba(0, 0, 0, 1);
    line-height: 40px;
    font-weight: 800px;
    /* text-shadow: 0 3px 3px rgb(145, 143, 143) ; */
}

/*Applying flex box to the different parts of the website*/
.about-page {
    display: flex;
    flex-direction: column;
}
.about_startup-summit {
    display: flex;
    flex-direction: row;
}
.about_byte {
    display: flex;
    flex-direction: row;
    margin: 150px 0px 230px 130px;
    padding: 0px;
}

/*Video element*/
.vid_container {
    display: flex;
    height: 100vh;
    width: 100%;
    border: none;
    margin: 0;
    padding: 0;
    padding-top: 5%;
}
.about_video {
    align-self: center;
    border-color: black;
    border-style: solid;
    width: 680px;
    /* min-height: 70%; */
    height: 510px;
    margin: 0 auto 0 auto;
}

/*About startup summit portion*/
.about_startup-summit .design{
    display: flex;
    flex-direction: column;
    width: 48vw;
    height: 66.660vw;
    background-image: url(../assets/desktop/about_design.png);
    background-repeat: no-repeat;
    background-position-x: 0px;
    background-size: contain;
    margin-left: -8px;
}
.about_startup-summit .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    margin: 100px 0px 0px -30px;
    width: 45vw;
}
.about_startup-summit .text p{
    margin-bottom: 30px;
    margin-top: 0px;
}

/*About byte portion*/
.about_byte .text{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 45vw;
    padding: 0px;
    margin: 20px 55px 0 0;
}
.about_byte .text p {
    margin-top: 7px;
}
.about_byte .text h1 {
    margin-bottom: 10px;
}
.about_byte .byte_picture {
    /* margin-right: -8px; */
    padding-right: 0px;
    width: 45vw;
    height: 26vw;
}

/*weird screen size*/
@media (max-width: 1170px) {
    .about_startup-summit .design {
        height: 70vw;
    }
}

/*wide screen*/
@media (min-width: 1920px) {
    /*about start up summit portion*/
    .about_startup-summit .text {
        margin: auto;
        width: 33vw;
    }
    .about_startup-summit {
        margin-bottom: 100px;
    }
    .about_startup-summit .design {
        margin-right: -60px;
    }

    /*about byte portion*/
    .about_byte {
        margin-left: auto;
        margin-right: auto;
        width: 65vw;
    }
    .about_byte .byte_picture {
        width: 55vw;
        height: 20vw;
    }
}

/*Tablet size and Mobile size*/
@media (max-width: 1024px){
    /*Changing flexbox elements due to rearrangement*/
    .about_byte {
        flex-direction: column-reverse;
        margin: 90px 0 200px -9px;
        padding: 0;
    }
    /*Video element*/
    /* .about_video {
        z-index: 5;
        width: 90vw;
        height: 50vw;
    } */
    
    /*About start up summit portion*/
    /*hard coded positioning of the design element*/
    .about_startup-summit .vid_container {
        padding: 0;
    }
    .about_startup-summit .design {
        display: none;
        position: absolute;
        width: 100vw;
        height: 1425.384px;
        left: -2px;
        top: -20.8333vw;
        z-index: 3;
        background-image: url(../assets/tablet/about_design.svg);
        background-size: 100vw 80vw;
        background-position: 0px 30px;
        margin: 0;
    }
    .about_startup-summit {
        margin-left: 15px;
        width: 85vw;
    }
    .about_startup-summit .text {
        width: 85vw;
        margin-left: 5px;
    }

    /*About byte portion*/
    .about_byte {
        margin-left: 0px;
        margin-right: 0px;
        width: 100%;
    }
    .about_byte .byte_picture {
        width: 100vw;
        margin-left: -8px;
        height: 55vw;
    }
    .about_byte .text {
        margin: 90px 0 0 22px;
        width: 85vw;
    }
}

@media (max-width: 768px) {
    .about_video {
        z-index: 5;
        width: 90vw;
        height: 50vw;
    }
}
</style>