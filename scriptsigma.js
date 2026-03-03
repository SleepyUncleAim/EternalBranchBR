// 🎬 Episode List
const episodes = {
  S1: [
    { src: "video/s1e1.mp4", title: "The Beginning: Attacked & Chased (Broken Realm: S1 - Episode 1)" },
    { src: "video/s1e2.mp4", title: "The Itch (Broken Realm: S1 - Episode 2)" },
    { src: "video/s1e3.mp4", title: "Go Down Swinging (Broken Realm: S1 - Episode 3)" },
    { src: "video/s1e4.mp4", title: "Get Through (Broken Realm: S1 - Episode 4)" },
    { src: "video/s1e5.mp4", title: "Defeat The Night (Broken Realm: S1 - Episode 5)" },
    { src: "video/s1e6.mp4", title: "Statement (Broken Realm: S1 - Episode 6)" },
    { src: "video/s1e7.mp4", title: "Dont Let Go (Broken Realm: S1 - Episode 7)" },
    { src: "video/s1e8.mp4", title: "My Way (Broken Realm: S1 - Episode 8)" },
  ],
  S2: [
    { src: "video/s2e1.mp4", title: "Royalty (Broken Realm: S2 - Episode 1)" },
    { src: "video/s2e2.mp4", title: "No Turning Back (Broken Realm: S2 - Episode 2)" },
    { src: "video/s2e3.mp4", title: "They Call Me A God (Broken Realm: S2 - Episode 3)" },
    { src: "video/s2e4.mp4", title: "The Darkness (Broken Realm: S2 - Episode 4)" },
    { src: "video/s2e5.mp4", title: "Fearless (Broken Realm: S2 - Episode 5)" },
    { src: "video/s2e6.mp4", title: "The Cure (Broken Realm: S2 - Episode 6)" },
    { src: "video/s2e7.mp4", title: "Breathless (Broken Realm: S2 - Episode 7)" },
    { src: "video/s2e8.mp4", title: "Devil (VIP) (Broken Realm: S2 - Episode 8)" },
    { src: "video/s2e9.mp4", title: "Purpose (Broken Realm: S2 - Episode 9)" },
  ],
  S3: [
    { src: "video/s3e1e2.mp4", title: "Reanimate (Broken Realm: S3 - Episode 1 & 2)" },
    { src: "video/s3e3.mp4", title: "Pull Me Apart (Broken Realm: S3 - Episode 3)" },
    { src: "video/s3e4e5.mp4", title: "Spider To The Fly (Broken Realm: S3 - Episode 4)" },
    { src: "video/s3e6.mp4", title: "Grateful (Broken Realm: S3 - Episode 5)" },
    { src: "video/s3e7.mp4", title: "Wildfire (Broken Realm: S3 - Episode 6)" },
    { src: "video/s3e8.mp4", title: "Ignite (Broken Realm: S3 - Episode 7)" },
    { src: "video/s3e9.mp4", title: "Villains & Heroes (Broken Realm: S3 - Episode 8)" },
    { src: "video/s3e10.mp4", title: "Run Away (Broken Realm: S3 - Episode 9)" },
    { src: "video/s3e11.mp4", title: "Made For This (Broken Realm: S3 - Episode 10)" },
  ],
  EB: [
    { src: "video/EBe1.mp4", title: "Live A Lie (Eternal Branch: Prelude To Chaos - Episode 1)" },
    { src: "video/EBe2.mp4", title: "Say Goodbye (Eternal Branch: Prelude To Chaos - Episode 2)" },
    { src: "video/EBe3p1.mp4", title: "Rise Up (Eternal Branch: Prelude To Chaos - Episode 3 Part 1)" },
    { src: "video/Ebe3p2.mp4", title: "Mistakes (Eternal Branch: Prelude To Chaos - Episode 3 Part 2)" },
    { src: "video/EBe4.mp4", title: "Dreams (Eternal Branch: Prelude To Chaos - Episode 4)" },
  ],
  ReMemories: [
    { src: "video/B1.mp4", title: "Opening of Broken Realm" },
    { src: "video/B2.mp4", title: "Broken Realm Trailer" },
  ]
};

const videos = [...episodes.S1, ...episodes.S2, ...episodes.S3, ...episodes.EB, ...episodes.ReMemories];
let current = 0;

// DOM Elements
const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const title = document.getElementById("title");
const playlist = document.getElementById("playlist");

// Build playlist
function buildPlaylist() {
  Object.entries(episodes).forEach(([season, eps]) => {
    const header = document.createElement("div");
    header.classList.add("season-header");
    header.textContent = season === "EB" ? "Eternal Branch: Prelude To Chaos" : `Broken Realm: Season ${season.slice(1)}`;
    playlist.appendChild(header);

    eps.forEach((ep) => {
      const div = document.createElement("div");
      div.classList.add("playlist-item");
      div.textContent = ep.title;
      div.addEventListener("click", () => loadVideo(videos.indexOf(ep)));
      playlist.appendChild(div);
    });
  });
}

function loadVideo(index) {
  current = index;
  video.src = videos[index].src;
  title.textContent = `Now Playing: ${videos[index].title}`;
  document.querySelectorAll(".playlist-item").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
  video.play();
  playBtn.textContent = "⏸ Pause";
}

function nextVideo() {
  loadVideo((current + 1) % videos.length);
}

function prevVideo() {
  loadVideo((current - 1 + videos.length) % videos.length);
}

// Event Listeners
playBtn.addEventListener("click", () => {
  if (!video.src) return;
  if (video.paused) {
    video.play();
    playBtn.textContent = "⏸ Pause";
  } else {
    video.pause();
    playBtn.textContent = "▶ Play";
  }
});

nextBtn.addEventListener("click", nextVideo);
prevBtn.addEventListener("click", prevVideo);
video.addEventListener("ended", nextVideo);

buildPlaylist();
loadVideo(0);

document.body.insertAdjacentHTML('beforeend', sidebarHTML);

//  Background Rotator - Initialize after DOM is ready
const initBackgroundRotator = () => {
  const bg = document.getElementById("background-rotator");
  if (!bg) return;
  
  const totalImages = 12;
  let currentImage = 1;

  const changeBackground = () => {
    bg.classList.remove("show");
    setTimeout(() => {
      bg.style.backgroundImage = `url('images/${currentImage}.png')`;
      bg.classList.add("show");
      currentImage = currentImage === totalImages ? 1 : currentImage + 1;
    }, 1000);
  };

  changeBackground();
  setInterval(changeBackground, 60000);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBackgroundRotator);
} else {
  initBackgroundRotator();
}

let menuBtn = document.getElementById('menuBtn');
if (!menuBtn) {
  const header = document.querySelector('header') || document.body;
  menuBtn = document.createElement('button');
  menuBtn.id = 'menuBtn';
  menuBtn.className = 'menu-btn';
  menuBtn.textContent = '☰';
  header.prepend(menuBtn);
}

const sidebar = document.getElementById('_sd');
const sidebarOverlay = document.getElementById('_sd_overlay');
const sidebarClose = document.getElementById('_sd_close');
const aboutBtn = document.getElementById('_sd_about');
const offlineBtn = document.getElementById('_sd_offline');
const confirmBox = document.getElementById('_sd_confirm');
const confirmMsg = document.getElementById('_sd_confirm_msg');
const confirmCancel = document.getElementById('_sd_confirm_cancel');
const confirmOk = document.getElementById('_sd_confirm_ok');

let targetUrl = null;

const openSidebar = () => { sidebar.classList.add('_open'); sidebarOverlay.classList.add('_show'); };
const closeSidebar = () => { sidebar.classList.remove('_open'); sidebarOverlay.classList.remove('_show'); };

const showConfirm = (url, message) => {
  targetUrl = url;
  confirmMsg.textContent = message;
  confirmBox.classList.remove('_hidden');
};

menuBtn.addEventListener('click', openSidebar);
sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

aboutBtn.addEventListener('click', () => showConfirm('http://www.sethzemor.net', 'Open www.sethzemor.net in a new tab?'));
offlineBtn.addEventListener('click', () => showConfirm('http://saga.sethzemor.net', 'Open saga.sethzemor.net (Watch Offline) in a new tab?'));

confirmCancel.addEventListener('click', () => { confirmBox.classList.add('_hidden'); targetUrl = null; });
confirmOk.addEventListener('click', () => {
  confirmBox.classList.add('_hidden');
  if (targetUrl) window.open(targetUrl, '_blank');
  targetUrl = null;
  closeSidebar();
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && !href.startsWith("#") && !this.target) {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });