document.addEventListener("DOMContentLoaded", () => {
  
  // Remove loading class after page loads
  setTimeout(() => {
    document.body.classList.remove('page-loading');
  }, 100);

  // === MILESTONE DATA ===
  const milestones = [
    {
      id: 1,
      milestone: "1k Subscriber",
      date: "May 8th 2022",
      icon: "🎉"
    },
    {
      id: 2,
      milestone: "Monetize / AdSense Enabled",
      date: "May 11th 2022",
      icon: "💰"
    },
    {
      id: 3,
      milestone: "First 100 Likes on 2 Videos",
      date: "May 30th 2022",
      icon: "👍"
    },
    {
      id: 4,
      milestone: "Ketupat Studios Collaboration",
      date: "June 13th 2022",
      icon: "🤝"
    },
    {
      id: 5,
      milestone: "First 200 Likes",
      date: "Sep 10th 2022",
      icon: "❤️"
    },
    {
      id: 6,
      milestone: "First 10k Views",
      date: "Nov 20th 2022",
      icon: "👀"
    },
    {
      id: 7,
      milestone: "First Collab With Rock Band (Breathing Theory)",
      date: "April 29th 2023",
      icon: "🎸"
    },
    {
      id: 8,
      milestone: "10k Subscriber",
      date: "June 25th 2023",
      icon: "🎊"
    },
    {
      id: 9,
      milestone: "20k Subscriber",
      date: "June 29th 2023",
      icon: "🚀"
    },
    {
      id: 10,
      milestone: "30k Subscriber",
      date: "July 12th 2023",
      icon: "⭐"
    },
    {
      id: 11,
      milestone: "10M Views In Total",
      date: "Oct 7th 2025",
      icon: "🏆"
    }
  ];

  // === RENDER MILESTONES ===
  const milestoneList = document.querySelector(".milestone-list");

  milestones.forEach((milestone) => {
    const item = document.createElement("div");
    item.classList.add("milestone-item");

    const icon = document.createElement("div");
    icon.classList.add("milestone-icon");
    icon.textContent = milestone.icon;

    const details = document.createElement("div");
    details.classList.add("milestone-details");

    const title = document.createElement("div");
    title.classList.add("milestone-title");
    title.textContent = milestone.milestone;

    const date = document.createElement("div");
    date.classList.add("milestone-date");
    date.textContent = milestone.date;

    details.appendChild(title);
    details.appendChild(date);

    item.appendChild(icon);
    item.appendChild(details);

    milestoneList.appendChild(item);
  });

  // === MILESTONE BOX EXPAND/COLLAPSE ===
  const milestoneBox = document.querySelector(".milestone-box");
  const milestoneHeader = document.querySelector(".milestone-header");

  milestoneHeader.addEventListener("click", () => {
    milestoneBox.classList.toggle("expanded");
  });

 // === VIDEO BACKGROUND QUEUE ===
  const videoElement = document.getElementById('bg-video');
  const videoQueue = [
    'vid/map.mp4',
    'vid/Prologue.mp4',
    'vid/skykun.mp4',
    'vid/Trailer.mp4',
    'vid/sigma.mp4',
    // Add more video paths here
  ];
  
  let currentVideoIndex = 0;

  function playNextVideo() {
    if (videoQueue.length === 0) return;
    
    currentVideoIndex = currentVideoIndex % videoQueue.length;
    videoElement.src = videoQueue[currentVideoIndex];
    videoElement.load();
    
    // Play with error handling
    const playPromise = videoElement.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
    

    currentVideoIndex++;
  }

  // When video ends, play next in queue
  videoElement.addEventListener('ended', () => {
    playNextVideo();
  });

  // Start playing first video
  playNextVideo();

  // === PAGE TRANSITION ===
  const backBtn = document.querySelector(".back-btn");
  
  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("page-exit");
    
    setTimeout(() => {
      window.location.href = backBtn.href;
    }, 500);
  });
  // --- NEW AUDIO LOGIC ---
  const backgroundMusic = document.getElementById('background-music');
  const musicBtn = document.getElementById('music-btn');
  const volumeSlider = document.getElementById('volume-slider');
  let isMusicPlaying = false;

  // Set initial volume from the slider value (70%)
  backgroundMusic.volume = volumeSlider.value / 100;
  const updateMusicIcon = () => {
    // SVG for Play (Mute/Paused)
    const playIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    // SVG for Pause (Playing)
    const pauseIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';

    musicBtn.innerHTML = isMusicPlaying ? pauseIcon : playIcon;
  };

  const playMusic = () => {
    if (backgroundMusic.paused) {
      // Attempt to play and handle the promise for autoplay restrictions
      backgroundMusic.play().then(() => {
        isMusicPlaying = true;
        updateMusicIcon();
      }).catch(error => {
        console.log('Autoplay prevented. User interaction needed.', error);
        // If play is blocked, keep isMusicPlaying false and show the Play icon
        isMusicPlaying = false;
        updateMusicIcon();
      });
    }
  };

  const toggleMusic = () => {
    if (isMusicPlaying) {
      backgroundMusic.pause();
      isMusicPlaying = false;
    } else {
      playMusic();
    }
    updateMusicIcon();
  };

  // Attempt to play music on button click
  musicBtn.addEventListener('click', toggleMusic);

  // Volume control
  volumeSlider.addEventListener('input', (e) => {
    const newVolume = e.target.value / 100;
    backgroundMusic.volume = newVolume;
    
    // If volume is raised from 0, attempt to play
    if (newVolume > 0 && backgroundMusic.paused) {
        playMusic();
    }
  });

  // Autoplay compromise: Start music on first user interaction
  const startMusicOnInteraction = () => {
      playMusic();
      document.removeEventListener('mousemove', startMusicOnInteraction);
      document.removeEventListener('touchstart', startMusicOnInteraction);
  };

  document.addEventListener('mousemove', startMusicOnInteraction, { once: true });
  document.addEventListener('touchstart', startMusicOnInteraction, { once: true });
});