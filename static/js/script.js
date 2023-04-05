// // // getting all required elements
// // const searchWrapper = document.querySelector(".search-input");
// // const inputBox = searchWrapper.querySelector("input");
// // const suggBox = searchWrapper.querySelector(".autocom-box");
// // const icon = searchWrapper.querySelector(".icon");
// // let linkTag = searchWrapper.querySelector("a");
// // let webLink;

// // // if user press any key and release
// // inputBox.onkeyup = (e)=>{
// //     let userData = e.target.value; //user enetered data
// //     let emptyArray = [];
// //     if(userData){
// //         icon.onclick = ()=>{
// //             webLink = `https://www.google.com/search?q=${userData}`;
// //             linkTag.setAttribute("href", webLink);
// //             linkTag.click();
// //         }
// //         emptyArray = suggestions.filter((data)=>{
// //             //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
// //             return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
// //         });
// //         emptyArray = emptyArray.map((data)=>{
// //             // passing return data inside li tag
// //             return data = `<li>${data}</li>`;
// //         });
// //         searchWrapper.classList.add("active"); //show autocomplete box
// //         showSuggestions(emptyArray);
// //         let allList = suggBox.querySelectorAll("li");
// //         for (let i = 0; i < allList.length; i++) {
// //             //adding onclick attribute in all li tag
// //             allList[i].setAttribute("onclick", "select(this)");
// //         }
// //     }else{
// //         searchWrapper.classList.remove("active"); //hide autocomplete box
// //     }
// // }

// // function select(element){
// //     let selectData = element.textContent;
// //     inputBox.value = selectData;
// //     icon.onclick = ()=>{
// //         webLink = `https://www.google.com/search?q=${selectData}`;
// //         linkTag.setAttribute("href", webLink);
// //         linkTag.click();
// //     }
// //     searchWrapper.classList.remove("active");
// // }

// // function showSuggestions(list){
// //     let listData;
// //     if(!list.length){
// //         userValue = inputBox.value;
// //         listData = `<li>${userValue}</li>`;
// //     }else{
// //       listData = list.join('');
// //     }
// //     suggBox.innerHTML = listData;
// // }







// // var c = document.getElementById("c");
// // var ctx = c.getContext("2d");
// // var cH;
// // var cW;
// // var bgColor = "#FF6138";
// // var animations = [];
// // var circles = [];

// // var colorPicker = (function() {
// //   var colors = ["#FF6138", "#FFBE53", "#2980B9", "#282741"];
// //   var index = 0;
// //   function next() {
// //     index = index++ < colors.length-1 ? index : 0;
// //     return colors[index];
// //   }
// //   function current() {
// //     return colors[index]
// //   }
// //   return {
// //     next: next,
// //     current: current
// //   }
// // })();

// // function removeAnimation(animation) {
// //   var index = animations.indexOf(animation);
// //   if (index > -1) animations.splice(index, 1);
// // }

// // function calcPageFillRadius(x, y) {
// //   var l = Math.max(x - 0, cW - x);
// //   var h = Math.max(y - 0, cH - y);
// //   return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
// // }

// // function addClickListeners() {
// //   document.addEventListener("touchstart", handleEvent);
// //   document.addEventListener("mousedown", handleEvent);
// // };

// // function handleEvent(e) {
// //     if (e.touches) { 
// //       e.preventDefault();
// //       e = e.touches[0];
// //     }
// //     var currentColor = colorPicker.current();
// //     var nextColor = colorPicker.next();
// //     var targetR = calcPageFillRadius(e.pageX, e.pageY);
// //     var rippleSize = Math.min(200, (cW * .4));
// //     var minCoverDuration = 750;
    
// //     var pageFill = new Circle({
// //       x: e.pageX,
// //       y: e.pageY,
// //       r: 0,
// //       fill: nextColor
// //     });
// //     var fillAnimation = anime({
// //       targets: pageFill,
// //       r: targetR,
// //       duration:  Math.max(targetR / 2 , minCoverDuration ),
// //       easing: "easeOutQuart",
// //       complete: function(){
// //         bgColor = pageFill.fill;
// //         removeAnimation(fillAnimation);
// //       }
// //     });
    
// //     var ripple = new Circle({
// //       x: e.pageX,
// //       y: e.pageY,
// //       r: 0,
// //       fill: currentColor,
// //       stroke: {
// //         width: 3,
// //         color: currentColor
// //       },
// //       opacity: 1
// //     });
// //     var rippleAnimation = anime({
// //       targets: ripple,
// //       r: rippleSize,
// //       opacity: 0,
// //       easing: "easeOutExpo",
// //       duration: 900,
// //       complete: removeAnimation
// //     });
    
// //     var particles = [];
// //     for (var i=0; i<32; i++) {
// //       var particle = new Circle({
// //         x: e.pageX,
// //         y: e.pageY,
// //         fill: currentColor,
// //         r: anime.random(24, 48)
// //       })
// //       particles.push(particle);
// //     }
// //     var particlesAnimation = anime({
// //       targets: particles,
// //       x: function(particle){
// //         return particle.x + anime.random(rippleSize, -rippleSize);
// //       },
// //       y: function(particle){
// //         return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
// //       },
// //       r: 0,
// //       easing: "easeOutExpo",
// //       duration: anime.random(1000,1300),
// //       complete: removeAnimation
// //     });
// //     animations.push(fillAnimation, rippleAnimation, particlesAnimation);
// // }

// // function extend(a, b){
// //   for(var key in b) {
// //     if(b.hasOwnProperty(key)) {
// //       a[key] = b[key];
// //     }
// //   }
// //   return a;
// // }

// // var Circle = function(opts) {
// //   extend(this, opts);
// // }

// // Circle.prototype.draw = function() {
// //   ctx.globalAlpha = this.opacity || 1;
// //   ctx.beginPath();
// //   ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
// //   if (this.stroke) {
// //     ctx.strokeStyle = this.stroke.color;
// //     ctx.lineWidth = this.stroke.width;
// //     ctx.stroke();
// //   }
// //   if (this.fill) {
// //     ctx.fillStyle = this.fill;
// //     ctx.fill();
// //   }
// //   ctx.closePath();
// //   ctx.globalAlpha = 1;
// // }

// // var animate = anime({
// //   duration: Infinity,
// //   update: function() {
// //     ctx.fillStyle = bgColor;
// //     ctx.fillRect(0, 0, cW, cH);
// //     animations.forEach(function(anim) {
// //       anim.animatables.forEach(function(animatable) {
// //         animatable.target.draw();
// //       });
// //     });
// //   }
// // });

// // var resizeCanvas = function() {
// //   cW = window.innerWidth;
// //   cH = window.innerHeight;
// //   c.width = cW * devicePixelRatio;
// //   c.height = cH * devicePixelRatio;
// //   ctx.scale(devicePixelRatio, devicePixelRatio);
// // };

// // (function init() {
// //   resizeCanvas();
// //   if (window.CP) {
// //     // CodePen's loop detection was causin' problems
// //     // and I have no idea why, so...
// //     window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000; 
// //   }
// //   window.addEventListener("resize", resizeCanvas);
// //   addClickListeners();
// //   if (!!window.location.pathname.match(/fullcpgrid/)) {
// //     startFauxClicking();
// //   }
// //   handleInactiveUser();
// // })();

// // function handleInactiveUser() {
// //   var inactive = setTimeout(function(){
// //     fauxClick(cW/2, cH/2);
// //   }, 2000);
  
// //   function clearInactiveTimeout() {
// //     clearTimeout(inactive);
// //     document.removeEventListener("mousedown", clearInactiveTimeout);
// //     document.removeEventListener("touchstart", clearInactiveTimeout);
// //   }
  
// //   document.addEventListener("mousedown", clearInactiveTimeout);
// //   document.addEventListener("touchstart", clearInactiveTimeout);
// // }

// // function startFauxClicking() {
// //   setTimeout(function(){
// //     fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
// //     startFauxClicking();
// //   }, anime.random(200, 900));
// // }

// // function fauxClick(x, y) {
// //   var fauxClick = new Event("mousedown");
// //   fauxClick.pageX = x;
// //   fauxClick.pageY = y;
// //   document.dispatchEvent(fauxClick);
// // }




// window.human = false;

// var canvasEl = document.querySelector('.fireworks');
// var ctx = canvasEl.getContext('2d');
// var numberOfParticules = 30;
// var pointerX = 0;
// var pointerY = 0;
// var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
// var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

// function setCanvasSize() {
//   canvasEl.width = window.innerWidth * 2;
//   canvasEl.height = window.innerHeight * 2;
//   canvasEl.style.width = window.innerWidth + 'px';
//   canvasEl.style.height = window.innerHeight + 'px';
//   canvasEl.getContext('2d').scale(2, 2);
// }

// function updateCoords(e) {
//   pointerX = e.clientX || e.touches[0].clientX;
//   pointerY = e.clientY || e.touches[0].clientY;
// }

// function setParticuleDirection(p) {
//   var angle = anime.random(0, 360) * Math.PI / 180;
//   var value = anime.random(50, 180);
//   var radius = [-1, 1][anime.random(0, 1)] * value;
//   return {
//     x: p.x + radius * Math.cos(angle),
//     y: p.y + radius * Math.sin(angle)
//   }
// }

// function createParticule(x,y) {
//   var p = {};
//   p.x = x;
//   p.y = y;
//   p.color = colors[anime.random(0, colors.length - 1)];
//   p.radius = anime.random(16, 32);
//   p.endPos = setParticuleDirection(p);
//   p.draw = function() {
//     ctx.beginPath();
//     ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
//     ctx.fillStyle = p.color;
//     ctx.fill();
//   }
//   return p;
// }

// function createCircle(x,y) {
//   var p = {};
//   p.x = x;
//   p.y = y;
//   p.color = '#FFF';
//   p.radius = 0.1;
//   p.alpha = .5;
//   p.lineWidth = 6;
//   p.draw = function() {
//     ctx.globalAlpha = p.alpha;
//     ctx.beginPath();
//     ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
//     ctx.lineWidth = p.lineWidth;
//     ctx.strokeStyle = p.color;
//     ctx.stroke();
//     ctx.globalAlpha = 1;
//   }
//   return p;
// }

// function renderParticule(anim) {
//   for (var i = 0; i < anim.animatables.length; i++) {
//     anim.animatables[i].target.draw();
//   }
// }

// function animateParticules(x, y) {
//   var circle = createCircle(x, y);
//   var particules = [];
//   for (var i = 0; i < numberOfParticules; i++) {
//     particules.push(createParticule(x, y));
//   }
//   anime.timeline().add({
//     targets: particules,
//     x: function(p) { return p.endPos.x; },
//     y: function(p) { return p.endPos.y; },
//     radius: 0.1,
//     duration: anime.random(1200, 1800),
//     easing: 'easeOutExpo',
//     update: renderParticule
//   })
//     .add({
//     targets: circle,
//     radius: anime.random(80, 160),
//     lineWidth: 0,
//     alpha: {
//       value: 0,
//       easing: 'linear',
//       duration: anime.random(600, 800),  
//     },
//     duration: anime.random(1200, 1800),
//     easing: 'easeOutExpo',
//     update: renderParticule,
//     offset: 0
//   });
// }

// var render = anime({
//   duration: Infinity,
//   update: function() {
//     ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
//   }
// });

// document.addEventListener(tap, function(e) {
//   window.human = true;
//   render.play();
//   updateCoords(e);
//   animateParticules(pointerX, pointerY);
// }, false);

// var centerX = window.innerWidth / 2;
// var centerY = window.innerHeight / 2;

// function autoClick() {
//   if (window.human) return;
//   animateParticules(
//     anime.random(centerX-50, centerX+50), 
//     anime.random(centerY-50, centerY+50)
//   );
//   anime({duration: 200}).finished.then(autoClick);
// }

// autoClick();
// setCanvasSize();
// window.addEventListener('resize', setCanvasSize, false);



var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function resize() {
    var box = c.getBoundingClientRect();
    c.width = box.width;
    c.height = box.height;
}

var light = {
    x: 160,
    y: 200
}

var colors = ["#f5c156", "#e6616b", "#5cd3ad"];

function drawLight() {
    ctx.beginPath();
    ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
    var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
    gradient.addColorStop(0, "#3b4654");
    gradient.addColorStop(1, "#2c343f");
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
    gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
    gradient.addColorStop(0, "#fff");
    gradient.addColorStop(1, "#3b4654");
    ctx.fillStyle = gradient;
    ctx.fill();
}

function Box() {
    this.half_size = Math.floor((Math.random() * 50) + 1);
    this.x = Math.floor((Math.random() * c.width) + 1);
    this.y = Math.floor((Math.random() * c.height) + 1);
    this.r = Math.random() * Math.PI;
    this.shadow_length = 2000;
    this.color = colors[Math.floor((Math.random() * colors.length))];
  
    this.getDots = function() {

        var full = (Math.PI * 2) / 4;


        var p1 = {
            x: this.x + this.half_size * Math.sin(this.r),
            y: this.y + this.half_size * Math.cos(this.r)
        };
        var p2 = {
            x: this.x + this.half_size * Math.sin(this.r + full),
            y: this.y + this.half_size * Math.cos(this.r + full)
        };
        var p3 = {
            x: this.x + this.half_size * Math.sin(this.r + full * 2),
            y: this.y + this.half_size * Math.cos(this.r + full * 2)
        };
        var p4 = {
            x: this.x + this.half_size * Math.sin(this.r + full * 3),
            y: this.y + this.half_size * Math.cos(this.r + full * 3)
        };

        return {
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4
        };
    }
    this.rotate = function() {
        var speed = (60 - this.half_size) / 20;
        this.r += speed * 0.002;
        this.x += speed;
        this.y += speed;
    }
    this.draw = function() {
        var dots = this.getDots();
        ctx.beginPath();
        ctx.moveTo(dots.p1.x, dots.p1.y);
        ctx.lineTo(dots.p2.x, dots.p2.y);
        ctx.lineTo(dots.p3.x, dots.p3.y);
        ctx.lineTo(dots.p4.x, dots.p4.y);
        ctx.fillStyle = this.color;
        ctx.fill();


        if (this.y - this.half_size > c.height) {
            this.y -= c.height + 100;
        }
        if (this.x - this.half_size > c.width) {
            this.x -= c.width + 100;
        }
    }
    this.drawShadow = function() {
        var dots = this.getDots();
        var angles = [];
        var points = [];

        for (dot in dots) {
            var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
            var endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
            var endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
            angles.push(angle);
            points.push({
                endX: endX,
                endY: endY,
                startX: dots[dot].x,
                startY: dots[dot].y
            });
        };

        for (var i = points.length - 1; i >= 0; i--) {
            var n = i == 3 ? 0 : i + 1;
            ctx.beginPath();
            ctx.moveTo(points[i].startX, points[i].startY);
            ctx.lineTo(points[n].startX, points[n].startY);
            ctx.lineTo(points[n].endX, points[n].endY);
            ctx.lineTo(points[i].endX, points[i].endY);
            ctx.fillStyle = "#2c343f";
            ctx.fill();
        };
    }
}

var boxes = [];

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawLight();

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].rotate();
        boxes[i].drawShadow();
    };
    for (var i = 0; i < boxes.length; i++) {
        collisionDetection(i)
        boxes[i].draw();
    };
    requestAnimationFrame(draw);
}

resize();
draw();

while (boxes.length < 14) {
    boxes.push(new Box());
}

window.onresize = resize;
c.onmousemove = function(e) {
    light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
    light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
}


function collisionDetection(b){
	for (var i = boxes.length - 1; i >= 0; i--) {
		if(i != b){	
			var dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
			var dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
			var d = Math.sqrt(dx * dx + dy * dy);
			if (d < boxes[b].half_size + boxes[i].half_size) {
			    boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size-=1 : 1;
			    boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size-=1 : 1;
			}
		}
	}
}