export default `
:root {
    --main-bg: #202020;
}
body{
    display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    /*left: 0;*/
    /*right: 0;*/
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: var(--main-bg);
}
#globalLoader.hidden {
    -webkit-animation: hide-slow 1s 1s forwards;
}
#globalLoader.hidden .loader {
    display: none;
}
.loader {
    --clr: #c7782d;
    /* color of spinning  */
    width: 140px;
    height: 140px;
    position: relative;
}
.loader div:nth-child(1), .loader div:nth-child(2) {
    content: "";
    position: absolute;
    //top: -1px;
    left: -4px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 2px solid transparent;
    border-top-color: var(--clr);
}
.loader div:nth-child(1) {
    z-index: 100;
    animation: spin 1s infinite;
}
.loader div:nth-child(2) {
    border: 10px solid #ccc;
}
#logo {
    background: url(/logo/icon4x2.png) no-repeat;
    background-size: cover;
    width: 81px;
    height: 47.49px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    animation: heartbeat 2s ease-in-out infinite;
}
#logo.loaded-content.fullscreen {
    width: 50px;
    height: 29.3px;
    -webkit-transition: all 0.5s ease-out;
       -moz-transition: all 0.5s ease-out;
        -ms-transition: all 0.5s ease-out;
         -o-transition: all 0.5s ease-out;
            transition: all 0.5s ease-out;
    -webkit-animation: to-top-right 1s 1s forwards;
}
@keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes hide-slow {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        display: none;
        z-index: -1;
    }
}
@-webkit-keyframes to-top-right {    
    100% {
        left: 100%;
        top: 75px;
        margin-left: -35px;
        margin-top: -50px;
        opacity: 0;
        visibility: hidden;
    }
}
@-ms-keyframes to-top-right {    
    100% {
        left: 100%;
        top: 75px;
        margin-left: -35px;
        margin-top: -50px;
        opacity: 0;
        visibility: hidden;
    }
}
@keyframes to-top-right {
    100% {
        left: 100%;
        top: 75px;
        margin-left: -35px;
        margin-top: -50px;
        opacity: 0;
        visibility: hidden;
    }
}
@keyframes heartbeat {
  0% {
    width: 81px;
    height: 47.49px;
  }
  20% {
    width: 90px;
    height: 52.77px;
  }
  40% {
    width: 81px;
    height: 47.49px;
  }
  60% {
    width: 90px;
    height: 52.77px;
  }
  100% {
    width: 81px;
    height: 47.49px;
  }
}
`;