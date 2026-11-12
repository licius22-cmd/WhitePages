	/* BL (blurred) VSL variants - served only to selected affiliates (param + 30-day cookie) */
	var BL_PARAM = 'affiliate';
	var BL_AFFS = ['ax9817g', 'sagcho'];
	var BL_IDS = {d: 'h5PItx4uyFQ', m: 'VZiYz-vXu1I'};
	function blActive() {
		try {
			var a = new URLSearchParams(window.location.search).get(BL_PARAM);
			if (a) {
				document.cookie = 'bl_aff=' + encodeURIComponent(a) + '; max-age=' + (30 * 86400) + '; path=/';
			} else {
				var c = document.cookie.match(/(?:^|; )bl_aff=([^;]*)/);
				a = c ? decodeURIComponent(c[1]) : '';
			}
			return BL_AFFS.indexOf(String(a).trim().toLowerCase()) !== -1;
		} catch (e) { return false; }
	}

	var VIDEO_ID = 'z80GrBJ4qKc'; //Set YouTube video ID
	videoSize();

	var TIME_TO_SHOW_THINGS = 1823; // Set time to button show in seconds
	var HIDDEN_CONTENT_ID = 'action-area'; //Set button id
	var BUBBLE_ID = 'bubble';
	var done = 0;

	var playerWrapper = document.getElementById('player-wrapper');
	var playpause = document.getElementById('playpause');
	var glass = document.getElementById('glass');
	var playing = false;

// Initialize progress bar
   // Initialize progress bar
    const videoHolder = document.querySelector("#player-wrapper");

    if (!videoHolder) {
        console.error("No element found with the class 'player-wrapper'.");
    }

    const progressBarContainer = createProgressBarContainer();
    const progressBar = createProgressBar();
    progressBarContainer.appendChild(progressBar);
    videoHolder.appendChild(progressBarContainer);

    const firstPhaseTime = 3 * 60 * 1000; // 3 minutes in milliseconds
    const secondPhaseTime = (2497 * 1000) - firstPhaseTime; // video duration in milisss
    const firstPhaseProgress = 30; // First 30%

    let animationStartTime = null;
    let isPaused = false;
    let elapsedTime = 0;
    let currentProgress = 0; // Store current progress percentage

   function createProgressBarContainer() {
	    const container = document.createElement("div");

	    // Check if the device is mobile
	    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	    container.style.position = "absolute";
	    container.style.bottom = "5px";
	    container.style.left = isMobile ? "5px" : "5px"; // Set left based on device type
	    container.style.right = isMobile ? "5px" : "5px"; // Set left based on device type
	    container.style.height = "12px";
	   // container.style.width = isMobile ? "98%" : "99.3%"; // Set width based on device type
	    container.style.backgroundColor = "rgb(34 34 34)";

	    return container;
	}


    function createProgressBar() {
        const bar = document.createElement("div");
        bar.style.height = "100%";
        bar.style.width = "0%";
        bar.style.backgroundColor = "#ffc107";
        bar.style.transition = "width linear";
        return bar;
    }

    function updateProgress() {
        const currentTime = performance.now();
        if (!animationStartTime) animationStartTime = currentTime;

        const totalDuration = firstPhaseTime + secondPhaseTime;
        const elapsed = currentTime - animationStartTime + elapsedTime;
        currentProgress = Math.min(
            elapsed < firstPhaseTime
                ? (elapsed / firstPhaseTime) * firstPhaseProgress
                : firstPhaseProgress + ((elapsed - firstPhaseTime) / secondPhaseTime) * (100 - firstPhaseProgress),
            100
        );

        progressBar.style.width = `${currentProgress}%`;

        if (currentProgress < 100 && !isPaused) {
            requestAnimationFrame(updateProgress);
        }
    }

    function startProgress() {
        if (!isPaused) {
            return;
        }
        isPaused = false;
        animationStartTime = performance.now(); // Reset animation start to now without recalculating past progress
        requestAnimationFrame(updateProgress);
    }

    function pauseProgress() {
        if (isPaused) return;
        isPaused = true;
        elapsedTime += performance.now() - animationStartTime;
        animationStartTime = null;
    }

    function resetProgress() {
        isPaused = true;
        elapsedTime = 0;
        animationStartTime = null;
        currentProgress = 0;
        progressBar.style.width = "0%";
    }








	playerWrapper.addEventListener("click", function(){
		if (playing == false) {
	        setTimeout(function() {
	            if (typeof player.playVideo === "function") {
					player.unMute();
	                player.playVideo();
	                player.setVolume(100);
	                playing = true;
	                playpause.style.visibility = "hidden";
	                glass.style.visibility = "visible";
					startProgress();

	            } else {
	                console.error("player.playVideo is not available");
	            }
	        }, 1000); // delay 1 sec
	    }
		else
		{
			player.pauseVideo();
			playing = false;
			playpause.style.visibility = "visible";
			glass.style.visibility = "hidden";
            pauseProgress();
		}
	});

	function toggleMute(){
		if (player && player.unMute) {
			player.unMute();
			player.seekTo(0);
			resetProgress();
			startProgress();
			document.getElementById('unmute').style.display = "none";
			//Hiding the headline
			document.getElementById('headline').style.scale = "0";
			document.getElementById('headline').style.height = "0";
			document.getElementById('headline-mobile').style.scale = "0";
			document.getElementById('headline-mobile').style.height = "0";
			// Cinema Mode Idea
			document.getElementById('headline-bg').style.display = "none";
			document.getElementById('video__body').style.background = "#0c0632";
			document.getElementById('banner-bg').style.background = "#0c0632";
			document.getElementById('action-area-spacing').style.background = "#0c0632";
			document.getElementById('action-area').style.background = "#0c0632";
			document.getElementById('load-holder').style.scale = "0";
			document.getElementById('nav-1').style.backgroundColor = "#0c0632";
			//document.getElementById('nav-1contents').style.backgroundColor = "#FFD0E3";
			//document.getElementById('testimonials').style.backgroundColor = "#0c0632";
			//document.getElementById('vsl-exclusive').style.color = "#dcf7f7";
			document.getElementById('your-time').style.color = "#fff";

			const elements = document.querySelectorAll('#font-updater');
			const images = document.querySelectorAll('#img-updater');

			elements.forEach(function(element) {
			    element.style.color = "#dcf7f7";
			});
			images.forEach(function(img) {
			    img.style.filter = 'invert(1)'; // Inverts the colors of the image
			});
		}
	}

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	var player;
	var videotime = 0;
	var youtube = false;
	var videoStarted = false;

	function onYouTubePlayerAPIReady() {
		player = new YT.Player('player', {
			videoId: VIDEO_ID,
			playerVars: {
				'autoplay': 1,
				'cc_lang_pref': 'EN',
				'cc_load_policy': 1,
				'controls': 0,
				'disablekb': 1,
				'fs': 0,
				'playsinline': 1,
				'rel': 0,
				'modestbranding': 1,
				'iv_load_policy': 3,
				'showinfo': 0,
				'wmode':'transparent',
				'host': 'https://www.youtube.com'
			},
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}

	function onPlayerReady(event) {

		handleReturningViewer();
		
		event.target.playVideo();
		event.target.mute();


		if (event.target.mute() || event.data == YT.PlayerState.PLAYING) {
			isPaused = true;
           startProgress();
            console.log('started from mute');
        }		

		function updateTime() {
			var oldTime = videotime;
			if(player && player.getCurrentTime) {
				videotime = player.getCurrentTime();
				// console.log(videotime);
			}
			if(videotime !== oldTime) {
				onProgress(videotime);
			}
		}
		timeupdater = setInterval(updateTime, 100);
	}

	function onProgress(currentTime) {
		if(currentTime >= TIME_TO_SHOW_THINGS) {
			showHiddenItem();
			return;
		}
	}

	function showHiddenItem() {

		var visibleHiddenItem;
		if (visibleHiddenItem == undefined) {
			visibleHiddenItem = true;
			document.getElementById(HIDDEN_CONTENT_ID).style.display = 'block';
			var bubbleEl = document.getElementById(BUBBLE_ID);
			if (bubbleEl) bubbleEl.style.display = 'flex';
			showCountdown();
		}
	}		

	function onPlayerStateChange(event) {
		
		player.setPlaybackRate(1.1);
		
		if (event.data==YT.PlayerState.PAUSED){
			pauseProgress();
			document.getElementById('playpause').style.visibility = "visible";
			document.getElementById('glass').style.visibility = "hidden";
		}
		if (event.data == YT.PlayerState.PLAYING && !done) {
            
            startProgress();
			document.getElementById('playpause').style.visibility = "hidden";
			document.getElementById('glass').style.visibility = "visible";
			if (!videoStarted) {
				videoStarted = true;
				console.log ('video started');
				handleNewViewer();
			}
			setInterval(function() {
				console.log("updated video viewed cookie");
				createCookie('video_played', parseInt(player.getCurrentTime()), 365);
			}, 10000);
		}
		if (event.data == YT.PlayerState.ENDED) {
	        console.log('Video has ended');
	        showThumbnail();
	    }
	}

	
function showThumbnail() {
    var glassDiv = document.getElementById('glass');

    glassDiv.style.backgroundImage = "url('../includes/img/vidThumb.jpg')";
    glassDiv.style.backgroundSize = "cover"; 
    glassDiv.style.backgroundPosition = "center";
    glassDiv.style.visibility = "visible";
}

	function handleNewViewer() {
		if (getCookie('video_played') == null) {
			console.log('no cookie set');
			createCookie('video_played', 1, 365);
			console.log('cookie created');
		}
	}

	function handleReturningViewer() {
		if (getCookie('video_played') != null) {
			console.log('returning viewer');
			setTimeout(function() {
				showHiddenItem();
			}, 10);
		}
	}

	/* Cookie Start */
	function createCookie(name, value, days) {
		var date, expires;
		if (days) {
			date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			expires = "; expires="+date.toGMTString();
		} else {
			expires = "";
		}
		document.cookie = name+"="+value+expires+"; path=/";
	}

	function getCookie(name) {
		var dc = document.cookie;
		var prefix = name + "=";
		var begin = dc.indexOf("; " + prefix);
		if (begin == -1) {
			begin = dc.indexOf(prefix);
			if (begin != 0) return null;
		} else {
			begin += 2;
			var end = document.cookie.indexOf(";", begin);
			if (end == -1) {
				end = dc.length;
			}
		}
		return decodeURI(dc.substring(begin + prefix.length, end));
	}
	/* Cookie End */

	function videoSize() {
		var w1 = window.innerWidth;
		var h1 = window.innerHeight;
		if (w1 > h1) {
			VIDEO_ID = blActive() ? BL_IDS.d : 'z80GrBJ4qKc';
			document.getElementById('player-wrapper').style.paddingBottom = "56.75%";
			document.getElementById('player-holder').style.paddingBottom = "58%";
		} else {
			VIDEO_ID = blActive() ? BL_IDS.m : 'Srjuzi-yqNk';
			// document.getElementById('player-wrapper').style.minHeight = "100vw";
			document.getElementById('player-wrapper').style.paddingBottom = "175%";
			document.getElementById('player-holder').style.paddingBottom = "190%";
		}
	}

	function stopVideo() {
		player.stopVideo();
	}

	// Under VSL timer script

	function startCountdown(duration, display) {
		var timer = duration, minutes, seconds;
		setInterval(function () {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			display.textContent = minutes + ":" + seconds;

			console.log (timer);

			if (--timer < 0) {
				timer = duration;
			}
			else if (timer == 0) {
				document.getElementById("time").style.display = "none"; 
			}
		}, 1000);
	}

	var shownCountdown;
	function showCountdown() {
		if (shownCountdown == undefined) {
			shownCountdown = true;
			var countDown = 60 * 30,
			display = document.querySelector('#time');
			startCountdown(countDown, display);
		}
	};