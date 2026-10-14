/**
 * A LITTLE WORLD MADE FOR SYIFA
 * Personal Romantic Birthday Surprise Website
 * For: Syifa Syauqina Aushaf (22nd Birthday)
 * From: Firdaus Mohammad (Your Future Husband)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. PHOTO MEMORIES CONFIGURATION (EASILY EDITABLE)
     ========================================================================== */
  const PHOTO_MEMORIES = [
    {
      id: 1,
      filename: 'images/foto1.jpg',
      title: 'Our First Memory',
      caption: 'One of my favorite memories.',
      subcaption: 'Hari di mana sayang happy bangett aku suka ajak sayang jalan jalan keluar jauh xixixi.'
    },
    {
      id: 2,
      filename: 'images/foto2.jpg',
      title: 'Pure Happiness',
      caption: 'A little moment, a lot of happiness.',
      subcaption: 'Hal-hal sederhana jadi luar biasa kalau bareng kamu, meskipun setelah itu besok ldr xixixi.'
    },
    {
      id: 3,
      filename: 'images/foto3.jpg',
      title: 'Making Ordinary Special',
      caption: 'You make ordinary days feel special.',
      subcaption: 'Nemenin sayang ketawa dan happy jadi obatku terbaik di dunia.'
    },
    {
      id: 4,
      filename: 'images/foto4.jpg',
      title: 'My Favorite Person',
      caption: 'My favorite person, always.',
      subcaption: 'Selalu jadi rumah ternyaman buat bercerita dan keluh kesahku.'
    },
    {
      id: 5,
      filename: 'images/foto5.jpg',
      title: 'Countless Reasons',
      caption: 'More memories, more reasons to love you.',
      subcaption: 'Tiap langkah dan cerita bareng kamu punya arti sendiri sayangg.'
    },
    {
      id: 6,
      filename: 'images/foto6.jpg',
      title: 'Piece of My Heart',
      caption: 'Every picture holds a little piece of my heart.',
      subcaption: 'Menatap fotomu selalu bikin rasa syukurku selalu bertambah.'
    },
    {
      id: 7,
      filename: 'images/foto7.jpg',
      title: 'Prettiest Smile',
      caption: 'The prettiest smile in the whole universe.',
      subcaption: 'Cantik hatinya, cantik parasnya, bidadari kesayanganku.'
    },
    {
      id: 8,
      filename: 'images/foto8.jpg',
      title: 'Dreaming Together',
      caption: 'Growing together, dreaming together.',
      subcaption: 'Cerita cerita sellau meskipun kdang suka ngejek mukanya kayak gini kalo ngejek xixixi.'
    },
    {
      id: 9,
      filename: 'images/foto9.jpg',
      title: 'Warmth & Laughter',
      caption: 'Warm moments and your sweetest laugh.',
      subcaption: 'Momen manis yang selalu pengen aku ulang berulang kali yaitu lihat sayang happy selalu dan ga sedih.'
    },
    {
      id: 10,
      filename: 'images/foto10.jpg',
      title: 'Through Every Season',
      caption: 'Through ups and downs, always with you.',
      subcaption: 'Melewati hari baik maupun capek aku pengen selalu bersama perempuan terhebat.'
    },
    {
      id: 11,
      filename: 'images/foto11.jpg',
      title: 'Our Next Chapter',
      caption: 'Looking at the future with you.',
      subcaption: 'Menatap masa depan dengan doa yang sama menuju halal bersama sayang xixixi.'
    },
    {
      id: 12,
      filename: 'images/foto12.jpg',
      title: 'My Safe Haven',
      caption: 'My safe place and my biggest blessing.',
      subcaption: 'sayangg adalah anugerah terindah yang Tuhan titipkan untukku.'
    },
    {
      id: 13,
      filename: 'images/foto13.jpg',
      title: 'In Every Prayer',
      caption: 'Countless prayers, one destination.',
      subcaption: 'Semoga langkah kita selalu dimudahkan menuju pelaminan impian.'
    },
    {
      id: 14,
      filename: 'images/foto14.jpg',
      title: 'My Forever Girl',
      caption: 'My forever favorite girl.',
      subcaption: 'Cantikku, manisku, perempuan kesayangan calon suamimu.'
    },
    {
      id: 15,
      filename: 'images/foto15.jpg',
      title: 'Happy 22nd Birthday',
      caption: 'To many more birthdays by your side.',
      subcaption: 'Selamat ulang tahun ke-22, cinta terbaik dalam hidupku.'
    }
  ];

  /* ==========================================================================
     2. LOVE LETTER TEXT CONTENT
     ========================================================================== */
  const LOVE_LETTER_TEXT = `My dearest Syifa,

Happy birthday, sayangkuu cantikku.

Selamat ulang tahun yang ke-22, perempuan kesayanganku. Di hari spesialmu ini, aku berdoa semoga kamu selalu diberikan kesehatan, umur yang panjang, kebahagiaan, rezeki yang berkah, dan hati yang selalu tenang.

Semoga di umur 22 tahun ini semua rencana, impian, dan keinginanmu satu per satu bisa tercapai. Kalau ada hari ketika kamu merasa lelah atau semuanya terasa sulit, semoga kamu selalu menemukan alasan untuk tetap tersenyum dan percaya bahwa hal-hal baik sedang menuju kepadamu.

Terima kasih sudah hadir di hidupku. Terima kasih untuk setiap cerita, tawa, perhatian, dan momen kecil yang membuat hubungan ini begitu berarti buat aku.

Aku tahu aku masih punya banyak hal yang harus dipelajari. Aku ingin terus memperbaiki diri, menjadi lebih dewasa, lebih bertanggung jawab, dan lebih siap untuk masa depan yang ingin kita bangun bersama.

And my love, ada satu doa yang ingin aku titipkan lewat hari spesialmu ini.

Doakan calon suamimu ini, ya, sayangku.

Semoga Allah melancarkan rezekiku, memudahkan pekerjaanku, menguatkan usahaku, dan membimbingku agar bisa mempersiapkan diri dengan baik. Semoga Allah menyegerakan niat baikku untuk menikahimu ketika waktunya sudah tepat dan semua persiapannya dimudahkan.

Aku ingin suatu hari nanti bisa merayakan ulang tahunmu bukan hanya sebagai pacarmu, tetapi sebagai suamimu. Aku ingin bisa hadir di sampingmu, menemanimu ketika bahagia maupun lelah, mendengarkan ceritamu setelah hari yang panjang, dan membangun rumah yang penuh kasih sayang bersama kamu.

Aku tidak berjanji bahwa hidup akan selalu mudah. Tapi aku ingin terus belajar menjadi pasangan yang bisa diajak berjuang, saling menghargai, saling menjaga, dan saling menguatkan.

Semoga hubungan kita selalu dijaga, diberi kesabaran, dan diarahkan menuju masa depan yang baik. Semoga setiap langkah yang kita ambil membawa kita semakin dekat dengan niat baik yang kita impikan.

Happy 22nd birthday, my favorite girl.

Keep smiling, keep dreaming, and keep being the beautiful person you are.

I am so proud of you, Syifa. And I hope that one day, I will be right beside you when we celebrate all the birthdays that are still waiting for us.

I can't wait for the day I finally get to call you my wife.`;

  /* ==========================================================================
     3. DOM ELEMENTS
     ========================================================================== */
  const audioEl = document.getElementById('romantic-audio');
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const musicLabel = document.getElementById('music-label');
  const openSurpriseBtn = document.getElementById('open-surprise-btn');
  const openingSection = document.getElementById('opening-section');
  const mainContent = document.getElementById('main-content');
  const greetingSection = document.getElementById('greeting-section');
  const progressBarFill = document.getElementById('progress-bar-fill');
  const progressText = document.getElementById('progress-text');
  const polaroidGrid = document.getElementById('polaroid-grid');

  // Envelope & Letter
  const envelope = document.getElementById('envelope');
  const openLetterBtn = document.getElementById('open-letter-btn');
  const envelopeWrapper = document.getElementById('envelope-wrapper');
  const letterSheetContainer = document.getElementById('letter-sheet-container');
  const letterContent = document.getElementById('letter-content');
  const skipTypingBtn = document.getElementById('skip-typing-btn');

  // Cake & Candles
  const blowCandlesBtn = document.getElementById('blow-candles-btn');
  const relightCandlesBtn = document.getElementById('relight-candles-btn');
  const flames = [
    document.getElementById('flame-1'),
    document.getElementById('flame-2'),
    document.getElementById('flame-3')
  ];
  const smokes = [
    document.getElementById('smoke-1'),
    document.getElementById('smoke-2'),
    document.getElementById('smoke-3')
  ];
  const blowWind = document.getElementById('blow-wind');
  const wishGrantedBanner = document.getElementById('wish-granted-banner');
  const confettiCanvas = document.getElementById('confetti-canvas');

  // Lightbox
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxFilehint = document.getElementById('lightbox-filehint');

  // Final actions
  const replayStoryBtn = document.getElementById('replay-story-btn');
  const backToMemoriesBtn = document.getElementById('back-to-memories-btn');

  /* ==========================================================================
     4. AUDIO CONTROLLER & SYNTHESIZER FALLBACK
     ========================================================================== */
  let isMusicPlaying = false;
  let audioContext = null;
  let synthMelodyInterval = null;

  // Web Audio API romantic melody generator fallback (if local audio file fails or browser blocks)
  function startSynthesizedPianoFallback() {
    if (synthMelodyInterval) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioContext) audioContext = new AudioCtx();
      if (audioContext.state === 'suspended') audioContext.resume();

      // C major romantic chords notes: C, E, G, B, D, A
      const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 392.00, 329.63, 293.66];
      let step = 0;

      const playTone = () => {
        if (!isMusicPlaying) return;
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const freq = notes[step % notes.length];
        step++;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioContext.currentTime);

        // Soft envelope: attack + warm decay
        gain.gain.setValueAtTime(0, audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start();
        osc.stop(audioContext.currentTime + 1.3);
      };

      synthMelodyInterval = setInterval(playTone, 800);
      playTone();
    } catch (e) {
      console.warn('Synthesizer audio fallback unavailable:', e);
    }
  }

  function stopSynthesizedPianoFallback() {
    if (synthMelodyInterval) {
      clearInterval(synthMelodyInterval);
      synthMelodyInterval = null;
    }
  }

  function playMusic() {
    if (!audioEl) return;
    audioEl.volume = 0.7;
    const playPromise = audioEl.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isMusicPlaying = true;
          updateMusicUI(true);
        })
        .catch(err => {
          console.warn('Local audio element could not play, attempting synth fallback:', err);
          isMusicPlaying = true;
          startSynthesizedPianoFallback();
          updateMusicUI(true);
        });
    } else {
      isMusicPlaying = true;
      updateMusicUI(true);
    }
  }

  function pauseMusic() {
    if (audioEl) audioEl.pause();
    stopSynthesizedPianoFallback();
    isMusicPlaying = false;
    updateMusicUI(false);
  }

  function toggleMusic() {
    if (isMusicPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  function updateMusicUI(isPlaying) {
    if (isPlaying) {
      musicToggleBtn.classList.add('playing');
      musicLabel.textContent = 'Musik: On 🎶';
      musicToggleBtn.setAttribute('aria-label', 'Matikan musik');
    } else {
      musicToggleBtn.classList.remove('playing');
      musicLabel.textContent = 'Musik: Off';
      musicToggleBtn.setAttribute('aria-label', 'Nyalakan musik');
    }
  }

  musicToggleBtn.addEventListener('click', toggleMusic);

  /* ==========================================================================
     5. AMBIENT BACKGROUND CANVAS (FLOATING HEARTS & SPARKLES)
     ========================================================================== */
  const ambientCanvas = document.getElementById('ambient-canvas');
  if (ambientCanvas) {
    const ctx = ambientCanvas.getContext('2d');
    let particles = [];
    const MAX_PARTICLES = window.innerWidth < 600 ? 18 : 28;

    function resizeAmbientCanvas() {
      ambientCanvas.width = window.innerWidth;
      ambientCanvas.height = window.innerHeight;
    }
    resizeAmbientCanvas();
    window.addEventListener('resize', resizeAmbientCanvas);

    class AmbientParticle {
      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        this.x = Math.random() * ambientCanvas.width;
        this.y = initial ? Math.random() * ambientCanvas.height : ambientCanvas.height + 20;
        this.size = Math.random() * 12 + 8;
        this.speedY = Math.random() * 0.8 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.45 + 0.15;
        this.type = Math.random() > 0.4 ? 'heart' : 'sparkle';
        this.color = Math.random() > 0.5 ? '#F8BBD0' : '#E88AA8';
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }
      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        if (this.y < -30 || this.x < -30 || this.x > ambientCanvas.width + 30) {
          this.reset(false);
        }
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        if (this.type === 'heart') {
          // Draw heart
          const s = this.size / 16;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-8 * s, -10 * s, -16 * s, 2 * s, 0, 14 * s);
          ctx.bezierCurveTo(16 * s, 2 * s, 8 * s, -10 * s, 0, 0);
          ctx.fill();
        } else {
          // Draw 4-point star sparkle
          const s = this.size * 0.6;
          ctx.fillStyle = '#FFE082';
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    for (let i = 0; i < MAX_PARTICLES; i++) {
      particles.push(new AmbientParticle());
    }

    function animateAmbient() {
      ctx.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateAmbient);
    }
    animateAmbient();
  }

  /* ==========================================================================
     6. INTERACTIVE SPARKLE BURST (CLICK / TAP)
     ========================================================================== */
  const sparkleContainer = document.getElementById('sparkle-container');
  function createSparkleBurst(x, y, count = 12) {
    if (!sparkleContainer) return;
    const colors = ['#E88AA8', '#C2185B', '#F8BBD0', '#FFD54F', '#FFFFFF'];

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'click-sparkle';
      const size = Math.random() * 8 + 6;
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
      const dist = Math.random() * 60 + 30;
      const dx = Math.cos(angle) * dist + 'px';
      const dy = Math.sin(angle) * dist + 'px';
      const color = colors[Math.floor(Math.random() * colors.length)];

      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.backgroundColor = color;
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      el.style.setProperty('--dx', dx);
      el.style.setProperty('--dy', dy);

      sparkleContainer.appendChild(el);
      setTimeout(() => el.remove(), 850);
    }
  }

  // Add click ripple sparkle to primary buttons
  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-primary') || e.target.closest('.btn-pulse')) {
      createSparkleBurst(e.clientX, e.clientY, 10);
    }
  });

  /* ==========================================================================
     7. OPENING SCREEN SURPRISE TRIGGER
     ========================================================================== */
  openSurpriseBtn.addEventListener('click', (e) => {
    const rect = openSurpriseBtn.getBoundingClientRect();
    createSparkleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 24);

    // Play music right after user interaction
    playMusic();

    // Transition opening screen smoothly
    openingSection.classList.add('fade-out');

    setTimeout(() => {
      openingSection.classList.add('is-hidden');
      mainContent.classList.remove('is-hidden');

      // Scroll smoothly to greeting section
      greetingSection.scrollIntoView({ behavior: 'smooth' });

      // Trigger scroll reveals
      triggerScrollReveals();
    }, 600);
  });

  /* ==========================================================================
     8. SCROLL REVEAL & PROGRESS MILESTONES
     ========================================================================== */
  function triggerScrollReveals() {
    const allRevealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!('IntersectionObserver' in window)) {
      allRevealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.05,
      rootMargin: '50px 0px 50px 0px'
    });

    allRevealElements.forEach(el => observer.observe(el));
  }

  // Story Progress Tracking
  const sections = [
    { id: 'greeting-section', label: 'Greeting 💗' },
    { id: 'wishes-section', label: 'Doa Indah 🕊️' },
    { id: 'gallery-section', label: 'Memories 📸' },
    { id: 'letter-section', label: 'Surat Calon Suami 💍' },
    { id: 'cake-section', label: 'Make a Wish 🎂' },
    { id: 'final-message-section', label: 'Forever Love 💖' }
  ];

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressPercent = Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100));

    if (progressBarFill) {
      progressBarFill.style.width = `${progressPercent}%`;
    }

    // Determine current milestone
    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionEl = document.getElementById(sections[i].id);
      if (sectionEl && scrollPos >= sectionEl.offsetTop) {
        if (progressText) progressText.textContent = sections[i].label;
        break;
      }
    }
  }, { passive: true });

  /* ==========================================================================
     9. PHOTO MEMORIES GALLERY & LIGHTBOX
     ========================================================================== */
  let currentLightboxIndex = 0;

  function renderPolaroids() {
    if (!polaroidGrid) return;
    polaroidGrid.innerHTML = '';

    // Tilts pattern for playful polaroid scrapbook look
    const tilts = [-2, 2.5, -1.5, 1.8, -2.5, 2, -1.8, 1.5, -2.2, 2.3, -1.6, 2.1, -1.9, 1.7, -2.4];

    PHOTO_MEMORIES.forEach((photo, idx) => {
      const card = document.createElement('article');
      card.className = 'polaroid-card is-revealed';
      const tiltAngle = tilts[idx % tilts.length];
      card.style.setProperty('--tilt', `${tiltAngle}deg`);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Lihat foto: ${photo.caption}`);

      card.innerHTML = `
        <div class="washi-tape" aria-hidden="true"></div>
        <div class="polaroid-media">
          <img 
            class="polaroid-img" 
            src="${photo.filename}" 
            alt="Foto Kenangan Syifa dan Firdaus - ${photo.title}" 
            loading="lazy"
          />
          <div class="polaroid-placeholder-inner is-hidden">
            <span class="placeholder-decor-icon">📸</span>
            <span class="placeholder-tag">MEMORY #${String(photo.id).padStart(2, '0')}</span>
            <span class="placeholder-filename">${photo.filename}</span>
            <span class="placeholder-hint">Tambahkan foto kenangan kalian 💖</span>
          </div>
        </div>
        <div class="polaroid-caption">
          ${photo.caption}
          <span class="polaroid-subtext">${photo.subcaption}</span>
        </div>
      `;

      const imgEl = card.querySelector('.polaroid-img');
      const placeholderEl = card.querySelector('.polaroid-placeholder-inner');

      // Smart fallback for multiple extensions (.jpg, .jpeg, .png, .webp)
      const extensions = ['.jpg', '.jpeg', '.png', '.webp'];
      let extIndex = 0;
      const baseFilename = photo.filename.substring(0, photo.filename.lastIndexOf('.'));
      photo.workingSrc = photo.filename;

      if (imgEl) {
        imgEl.addEventListener('error', function onImgError() {
          extIndex++;
          if (extIndex < extensions.length) {
            const nextSrc = baseFilename + extensions[extIndex];
            photo.workingSrc = nextSrc;
            imgEl.src = nextSrc;
          } else {
            imgEl.style.display = 'none';
            photo.workingSrc = null;
            if (placeholderEl) placeholderEl.classList.remove('is-hidden');
          }
        });
      }

      // Click to open lightbox
      card.addEventListener('click', () => openLightbox(idx));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(idx);
        }
      });

      polaroidGrid.appendChild(card);
    });
  }

  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('is-active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxCloseBtn.focus();
  }

  function closeLightbox() {
    lightboxModal.classList.remove('is-active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = PHOTO_MEMORIES[currentLightboxIndex];
    if (!item) return;

    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${PHOTO_MEMORIES.length}`;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.caption + ' — ' + item.subcaption;
    lightboxFilehint.textContent = `File: ${item.filename}`;

    const activeSrc = item.workingSrc || item.filename;
    lightboxImg.src = activeSrc;
    lightboxImg.alt = item.title;
  }

  function nextPhoto() {
    currentLightboxIndex = (currentLightboxIndex + 1) % PHOTO_MEMORIES.length;
    updateLightboxContent();
  }

  function prevPhoto() {
    currentLightboxIndex = (currentLightboxIndex - 1 + PHOTO_MEMORIES.length) % PHOTO_MEMORIES.length;
    updateLightboxContent();
  }

  // Lightbox event listeners
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextPhoto);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevPhoto);

  // Keyboard navigation for Lightbox
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('is-active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
  });

  // Mobile Touch Swipe for Lightbox
  let touchStartX = 0;
  let touchEndX = 0;
  lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) nextPhoto();
      else prevPhoto();
    }
  }, { passive: true });

  /* ==========================================================================
     10. LOVE LETTER INTERACTION & TYPEWRITER
     ========================================================================== */
  let isTyping = false;
  let typingTimer = null;
  let letterOpenedOnce = false;

  function openLetter() {
    if (letterOpenedOnce) return;
    letterOpenedOnce = true;

    envelope.classList.add('is-open');

    setTimeout(() => {
      envelopeWrapper.classList.add('is-hidden');
      letterSheetContainer.classList.remove('is-hidden');
      startTypewriter();
    }, 600);
  }

  function startTypewriter() {
    letterContent.textContent = '';
    const cursor = document.createElement('span');
    cursor.className = 'letter-cursor';
    letterContent.appendChild(cursor);

    let charIndex = 0;
    isTyping = true;

    function typeNextChar() {
      if (!isTyping || charIndex >= LOVE_LETTER_TEXT.length) {
        finishTypewriter();
        return;
      }

      const nextChar = LOVE_LETTER_TEXT.charAt(charIndex);
      letterContent.insertBefore(document.createTextNode(nextChar), cursor);
      charIndex++;

      // Speed control: faster on commas and dots for natural pacing
      let delay = 22;
      if (nextChar === '\n') delay = 90;
      else if (nextChar === '.' || nextChar === '!' || nextChar === '?') delay = 140;
      else if (nextChar === ',') delay = 70;

      typingTimer = setTimeout(typeNextChar, delay);
    }

    typeNextChar();
  }

  function finishTypewriter() {
    isTyping = false;
    if (typingTimer) clearTimeout(typingTimer);
    letterContent.textContent = LOVE_LETTER_TEXT;
    if (skipTypingBtn) skipTypingBtn.style.display = 'none';
  }

  if (openLetterBtn) openLetterBtn.addEventListener('click', openLetter);
  if (envelope) {
    envelope.addEventListener('click', openLetter);
    envelope.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLetter();
      }
    });
  }
  if (skipTypingBtn) skipTypingBtn.addEventListener('click', finishTypewriter);

  /* ==========================================================================
     11. BIRTHDAY CAKE SURPRISE & CONFETTI ENGINE
     ========================================================================== */
  let confettiAnimationId = null;
  let confettiParticles = [];

  function launchConfetti(durationMs = 4500) {
    if (!confettiCanvas) return;
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = confettiCanvas.offsetWidth;
    confettiCanvas.height = confettiCanvas.offsetHeight;

    const colors = ['#C2185B', '#E88AA8', '#F8BBD0', '#FFF', '#FFD54F', '#FFF8F0'];
    const particleCount = window.innerWidth < 600 ? 55 : 95;
    confettiParticles = [];

    for (let i = 0; i < particleCount; i++) {
      confettiParticles.push({
        x: confettiCanvas.width / 2 + (Math.random() - 0.5) * 80,
        y: confettiCanvas.height * 0.5,
        w: Math.random() * 10 + 6,
        h: Math.random() * 7 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 14,
        vy: -(Math.random() * 12 + 6),
        gravity: 0.32,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        isHeart: Math.random() > 0.65
      });
    }

    const startTime = performance.now();

    function renderConfetti(currentTime) {
      const elapsed = currentTime - startTime;
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

      confettiParticles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotationSpeed;

        if (elapsed > durationMs - 1200) {
          p.opacity = Math.max(0, p.opacity - 0.02);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.isHeart) {
          // Mini confetti heart
          const s = p.w / 14;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-4 * s, -5 * s, -8 * s, 1 * s, 0, 7 * s);
          ctx.bezierCurveTo(8 * s, 1 * s, 4 * s, -5 * s, 0, 0);
          ctx.fill();
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
      });

      if (elapsed < durationMs) {
        confettiAnimationId = requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        cancelAnimationFrame(confettiAnimationId);
      }
    }

    if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = requestAnimationFrame(renderConfetti);
  }

  // Blow Candles Interaction
  if (blowCandlesBtn) {
    blowCandlesBtn.addEventListener('click', (e) => {
      blowCandlesBtn.disabled = true;

      // 1. Show wind blow effect
      if (blowWind) {
        blowWind.classList.remove('is-hidden');
      }

      // Sparkle burst around button
      const rect = blowCandlesBtn.getBoundingClientRect();
      createSparkleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);

      setTimeout(() => {
        // 2. Extinguish candle flames
        flames.forEach(flame => {
          if (flame) flame.classList.add('blown-out');
        });

        // 3. Smoke puffs
        smokes.forEach(smoke => {
          if (smoke) smoke.classList.remove('is-hidden');
        });

        if (blowWind) blowWind.classList.add('is-hidden');

        // 4. Launch Confetti Explosion
        launchConfetti(5000);

        // 5. Reveal celebration wish banner
        setTimeout(() => {
          if (wishGrantedBanner) wishGrantedBanner.classList.remove('is-hidden');
          blowCandlesBtn.classList.add('is-hidden');
          if (relightCandlesBtn) relightCandlesBtn.classList.remove('is-hidden');
          blowCandlesBtn.disabled = false;
        }, 600);

      }, 400);
    });
  }

  // Relight Candles (Celebrate Again)
  if (relightCandlesBtn) {
    relightCandlesBtn.addEventListener('click', () => {
      flames.forEach(flame => {
        if (flame) flame.classList.remove('blown-out');
      });
      smokes.forEach(smoke => {
        if (smoke) smoke.classList.add('is-hidden');
      });
      if (wishGrantedBanner) wishGrantedBanner.classList.add('is-hidden');
      relightCandlesBtn.classList.add('is-hidden');
      if (blowCandlesBtn) {
        blowCandlesBtn.classList.remove('is-hidden');
        blowCandlesBtn.disabled = false;
      }
      createSparkleBurst(window.innerWidth / 2, window.innerHeight * 0.6, 15);
    });
  }

  /* ==========================================================================
     12. FINAL ACTIONS: REPLAY STORY & BACK TO MEMORIES
     ========================================================================== */
  if (replayStoryBtn) {
    replayStoryBtn.addEventListener('click', () => {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // After scrolling back, restore opening screen state gracefully
      setTimeout(() => {
        openingSection.classList.remove('is-hidden', 'fade-out');
        mainContent.classList.add('is-hidden');
      }, 500);
    });
  }

  if (backToMemoriesBtn) {
    backToMemoriesBtn.addEventListener('click', () => {
      const gallery = document.getElementById('gallery-section');
      if (gallery) gallery.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     13. INITIALIZATION
     ========================================================================== */
  renderPolaroids();
  triggerScrollReveals();
});
