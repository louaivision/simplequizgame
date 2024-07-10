document.getElementById("game").style.display = "none";
// دالة لبدء اللعبة
function startGame() {
    document.getElementById("start").style.display = "none";
	document.getElementById("game").style.display = "block";
}
function playSound() {
    const audio = document.getElementById('click');
    audio.currentTime = 0; 
    audio.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  }

  function playSwitchSound() {
    const switchSound = new Audio('10.mp3');
    switchSound.currentTime = 0; 
    switchSound.play(); 
}

function openSettings() {
  setTimeout(() => {
    document.getElementById('settingsModal').style.display = 'block';
    const theme = localStorage.getItem('theme') || 'light';
    document.getElementById('theme-toggle').checked = theme === 'dark';
    playSound(); 
  }, 100); 
}

function openAbout() {
  setTimeout(() => {
    document.getElementById('aboutModal').style.display = 'block';
    playSound(); 
  }, 100); 
}
// دالة لإغلاق النوافذ المنبثقة
function closeModal(modalId) {
    playSound();
    var modal = document.getElementById(modalId);
    modal.classList.add('fadeOut'); 
    setTimeout(function() {
        modal.style.display = 'none';
        modal.classList.remove('fadeOut'); 
    }, 900); // 
}

// دالة لتبديل السمة
function toggleTheme() {
    const isChecked = document.getElementById('theme-toggle').checked;
    if (isChecked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

// ضبط السمة عند التحميل
window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}
