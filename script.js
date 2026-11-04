  const hero = document.getElementById('hero');
  const nav = document.getElementById('siteNav');
  const heroPhoto = document.querySelector('.hero-photo');
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      nav.classList.add('nav-in');
      hero.classList.add('hero-in');
    });
  });

  let menuOpen = false;
  const updateNav = () => {
    const photoHeight = heroPhoto.offsetHeight;
    const solid = menuOpen || window.scrollY > photoHeight * 0.72;
    nav.classList.toggle('nav-solid', solid);
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  window.addEventListener('resize', updateNav);
  updateNav();

  navToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    navToggle.classList.toggle('open', menuOpen);
    mobileMenu.classList.toggle('open', menuOpen);
    navToggle.setAttribute('aria-expanded', String(menuOpen));
    updateNav();
  });
  mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      menuOpen = false;
      navToggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      updateNav();
    });
  });

  // ---------- Student data ----------
  // Add a new object here to add a student — cards + modal both read
  // from this single array. Add `photo: "url.jpg"` once a real photo
  // is available; until then an initials avatar is shown automatically.
  // `about` (short personal statement) and `socials` are optional and
  // empty by default — fill them in per student whenever they're ready
  // to share. Nothing renders in the modal for a field left empty, and
  // no placeholder/fake link is ever shown.
  const emptySocials = () => ({ instagram: '', tiktok: '', github: '', linkedin: '' });
  const studentsData = [
    { name: 'Ahmad', photo: 'img/siswa/ahmad.jpg', knownAs: 'Good Vibes', obsession: 'Push Rank ML', about: 'jago badminton nya', socials: {instagram: 'https://www.instagram.com/maddhmm_?cplk=MWx1OXpyNnBwcnB3Mg=='} },
    { name: 'Alek', photo: 'img/siswa/alex.jpg', altName: 'Alfahriansyah', knownAs: 'Good Vibes', obsession: 'Football', about: 'ketenangan = alek', socials: {instagram: 'https://www.instagram.com/alfhriansyhtrsptr_?exln=a2V4YWpoaGxnNGxs'} },
    { name: 'Arkan', photo: 'img/siswa/arkan.jpg', knownAs: 'Piket Duty... Sometimes', obsession: 'Liga 4 / PSSI Kota Depok', about: 'dilan jp', socials: {instagram: 'https://www.instagram.com/kan10.323?psln=MTF6cnYzdGt1ZXdwdg=='} },
    { name: 'Dimas Adam', photo: 'img/siswa/dimas.jpg', knownAs: 'Calm & Easygoing', obsession: 'AI, Coding & Finance Books', about: 'kecerdasan = dimas', socials: {instagram: 'https://www.instagram.com/dimasprstyoo88?srtk=MTRla2s4N28wbjYxOA=='} },
    { name: 'Yukan', photo: 'img/siswa/yukan.jpg', knownAs: 'Secretary', obsession: 'Mobile Legends', about: 'yahhaha takut pak panti', socials: {instagram: 'https://www.instagram.com/668xz_?cplk=YzBodnBidmM2b3Ju'} },
    { name: 'Arfa Rizki', photo: 'img/siswa/arfa.jpg', knownAs: 'Reliable & Easygoing', obsession: 'Finding His Own Way', about: 'king of panco kelas', socials: {instagram: 'https://www.instagram.com/arfa_rizqi0?mdxt=azZnOWFkMDdjYjdn'} },
    { name: 'Nizar Ibrahim', photo: 'img/siswa/Nizar.jpg', knownAs: 'Class & OSIS Leader', obsession: 'Japanese Literature & Astronomy', about: 'ketua osis,ketua kelas', socials: {instagram: 'https://www.instagram.com/nzar_0430?rpxt=MXFrcHhqdXFqbzZ6dQ=='} },
    { name: 'Troy Firdaus', photo: 'img/siswa/troy.jpg', knownAs: 'The Hotspot Provider', obsession: 'Game Account Trading', about: 'tukang fotoin kelas', socials: {instagram: 'https://www.instagram.com/anos2high4this?obrf=MTN4Mjkwem9mZXk4dg=='} },
    { name: 'Raffie', photo: 'img/siswa/rapi.jpg', knownAs: 'sering minta hospot', obsession: 'Focus trade in silent', about: 'asik bat orang nya', socials: {instagram: 'https://www.instagram.com/ravwowie11?cplk=ZzJqeWMxMGJ3MjZ3'} },
    { name: 'Ridwan', photo: 'img/siswa/ridwan.jpg', knownAs: 'MikroTik, KIK & Debian', obsession: 'Learning MikroTik & Debian', about: 'asisten pak luqman', socials: {instagram: 'https://www.instagram.com/ridwan_dkc?cplk=NG0zMm5zZjMxNHpj'} },
    { name: 'Rizki Afriansyah', photo: 'img/siswa/rizky.jpg', knownAs: 'Active & Playful', obsession: 'Liga 4', about: 'sekretaris,aktif bat orang nya', socials: {instagram: 'https://www.instagram.com/ikyafr_?psln=YXFnY3U2OW1sdDR3'} },
    { name: 'Pandu Ardani', photo: 'img/siswa/pandu.jpg', knownAs: 'Calm', obsession: 'Learning & Practicing Hadroh', about: 'sering disuruh piket wkwkw', socials: {instagram: 'https://www.instagram.com/clixpndzz?cplk=MTNycHB3d2N5MnpteA=='} },
    { name: 'Hudzaifah', photo: 'img/siswa/Hudzaifah.jpg', knownAs: 'Vice Class Leader', obsession: 'Programming, Backend & Finance', about: 'dia yang buat', socials: {instagram: 'https://www.instagram.com/finix.joyce/'} },
    { name: 'Fishabil', photo: 'img/siswa/sabil.jpg', knownAs: 'The Loan Departement', obsession: 'Roblox & mobile legends', about: 'rusuh bat bil', socials: {tiktok: 'https://www.tiktok.com/@f28fsbilll/'} },
    { name: 'Rhaditya khaka', photo: 'img/siswa/radit.jpg', knownAs: 'hp mulu', obsession: 'game', about: 'gabisa lepas dari hp', socials: {instagram: 'https://www.instagram.com/raditzy90?rpxt=YTcxb2d2dWhmM3Vq'} }
  ];

  const initialsOf = (name) => name
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

  const peopleCount = document.getElementById('peopleCount');
  if (peopleCount) peopleCount.textContent = studentsData.length + ' profiles';

  // ---------- Render cards (studentsData rendered twice, back-to-back,
  // so the idle auto-scroll can loop from the end of the first set into
  // the start of the second set without a visible jump) ----------
  const studentsTrack = document.getElementById('studentsTrack');

  const buildCard = (student, realIndex) => {
    const card = document.createElement('article');
    card.className = 'student-card';

    const photo = document.createElement('div');
    photo.className = 'student-photo';

    const ph = document.createElement('div');
    ph.className = 'ph';
    if (student.photo) {
      ph.style.backgroundImage = `url(${student.photo})`;
    } else {
      ph.classList.add('avatar-' + (realIndex % 6));
      ph.textContent = initialsOf(student.name);
    }

    const scrim = document.createElement('div');
    scrim.className = 'photo-scrim';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'view-profile-btn';
    btn.dataset.index = String(realIndex);
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.innerHTML = 'VIEW PROFILE <span class="arrow">↗</span>';

    photo.append(ph, scrim, btn);

    const info = document.createElement('div');
    info.className = 'student-info';

    const name = document.createElement('div');
    name.className = 'student-name';
    name.textContent = student.name;
    if (student.altName) {
      const alt = document.createElement('span');
      alt.className = 'alt-name mono';
      alt.textContent = student.altName;
      name.appendChild(alt);
    }

    const fields = document.createElement('div');
    fields.className = 'student-fields';
    if (student.knownAs) {
      fields.innerHTML += `<div class="student-field"><span class="label mono">KNOWN AS</span><span class="value">${student.knownAs}</span></div>`;
    }
    if (student.obsession) {
      fields.innerHTML += `<div class="student-field"><span class="label mono">CURRENT OBSESSION</span><span class="value">${student.obsession}</span></div>`;
    }

    info.append(name, fields);
    card.append(photo, info);
    return card;
  };

  if (studentsTrack) {
    const loopedSet = [...studentsData, ...studentsData];
    loopedSet.forEach((student, i) => {
      studentsTrack.appendChild(buildCard(student, i % studentsData.length));
    });
  }

  // ---------- Student profile modal ----------
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalPhoto = document.getElementById('modalPhoto');
  const modalName = document.getElementById('modalName');
  const modalKnown = document.getElementById('modalKnown');
  const modalObsession = document.getElementById('modalObsession');
  const modalKnownWrap = document.getElementById('modalKnownWrap');
  const modalObsessionWrap = document.getElementById('modalObsessionWrap');
  const modalAbout = document.getElementById('modalAbout');
  const modalAboutWrap = document.getElementById('modalAboutWrap');
  const modalSocials = document.getElementById('modalSocials');
  let lastFocused = null;
  let modalIsOpen = false;

  const socialLabels = { instagram: 'Instagram', tiktok: 'TikTok', github: 'GitHub', linkedin: 'LinkedIn' };

  const renderSocials = (socials) => {
    modalSocials.innerHTML = '';
    if (!socials) return;
    Object.keys(socialLabels).forEach((key) => {
      const url = socials[key];
      if (!url) return; // never show a button for a platform without a real link
      const a = document.createElement('a');
      a.className = 'social-link';
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = socialLabels[key] + ' ↗';
      modalSocials.appendChild(a);
    });
  };

  const openModal = (index) => {
    const s = studentsData[index];
    if (!s) return;

    modalPhoto.className = 'ph';
    modalPhoto.textContent = '';
    modalPhoto.style.backgroundImage = '';
    if (s.photo) {
      modalPhoto.style.backgroundImage = `url(${s.photo})`;
    } else {
      modalPhoto.classList.add('avatar-' + (index % 6));
      modalPhoto.textContent = initialsOf(s.name);
    }

    modalName.textContent = s.name + (s.altName ? ` (${s.altName})` : '');

    if (s.knownAs) {
      modalKnown.textContent = s.knownAs;
      modalKnownWrap.style.display = '';
    } else {
      modalKnownWrap.style.display = 'none';
    }
    if (s.obsession) {
      modalObsession.textContent = s.obsession;
      modalObsessionWrap.style.display = '';
    } else {
      modalObsessionWrap.style.display = 'none';
    }
    if (s.about) {
      modalAbout.textContent = s.about;
      modalAboutWrap.style.display = '';
    } else {
      modalAboutWrap.style.display = 'none';
    }
    renderSocials(s.socials);

    lastFocused = document.activeElement;
    modalIsOpen = true;
    modalOverlay.classList.add('open');
    document.body.classList.add('modal-lock');
    modalClose.focus();
  };

  const closeModal = () => {
    modalIsOpen = false;
    modalOverlay.classList.remove('open');
    document.body.classList.remove('modal-lock');
    if (lastFocused) lastFocused.focus();
  };

  // ---------- Students carousel: buttons, drag, idle auto-scroll loop ----------
  const studentsPrev = document.getElementById('studentsPrev');
  const studentsNext = document.getElementById('studentsNext');
  const studentsNavEl = document.querySelector('.students-nav');
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let cardDragged = false;

  if (studentsTrack) {
    const cardScrollAmount = () => {
      const card = studentsTrack.querySelector('.student-card');
      const gap = window.innerWidth >= 900 ? 28 : 22;
      return card ? card.offsetWidth + gap : studentsTrack.clientWidth * 0.8;
    };

    const updateStudentsNavState = () => {
      const maxScroll = studentsTrack.scrollWidth - studentsTrack.clientWidth - 1;
      if (studentsPrev) studentsPrev.disabled = studentsTrack.scrollLeft <= 0;
      if (studentsNext) studentsNext.disabled = studentsTrack.scrollLeft >= maxScroll;
    };
    studentsTrack.addEventListener('scroll', updateStudentsNavState, { passive: true });
    window.addEventListener('resize', updateStudentsNavState);
    updateStudentsNavState();

    // ---------- Idle auto-scroll (seamless infinite loop) ----------
    // The track holds studentsData twice back-to-back. Once scrollLeft
    // passes the halfway point (the end of the first copy), it jumps
    // back by exactly that half-width — since the second copy is
    // identical, the jump is invisible. `.auto-playing` disables
    // scroll-snap while drifting, since snap was fighting the tiny
    // per-frame increments and effectively cancelling the motion.
    let autoRafId = null;
    let autoLastTime = null;
    let autoPaused = false;
    let resumeTimer = null;
    let isTransitioning = false; // true while a Next/Prev smooth scroll is in flight

    const wrapLoop = () => {
      const half = studentsTrack.scrollWidth / 2;
      if (half > 0 && studentsTrack.scrollLeft >= half) {
        studentsTrack.scrollLeft -= half;
      }
    };

    const autoStep = (now) => {
      if (autoLastTime === null) autoLastTime = now;
      const dt = now - autoLastTime;
      autoLastTime = now;

      const shouldRun = !autoPaused && !isTransitioning && !modalIsOpen && !reduceMotionQuery.matches;
      studentsTrack.classList.toggle('auto-playing', shouldRun);

      if (shouldRun) {
        studentsTrack.scrollLeft += dt * 0.022; // slow, calm drift
        wrapLoop();
      }
      autoRafId = requestAnimationFrame(autoStep);
    };

    const pauseAutoScroll = () => {
      autoPaused = true;
      if (resumeTimer) clearTimeout(resumeTimer);
    };
    const scheduleAutoScrollResume = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        autoPaused = false;
        autoLastTime = null;
      }, 2600);
    };

    if (!reduceMotionQuery.matches) {
      autoRafId = requestAnimationFrame(autoStep);
    }

    // The auto-drift is the ONLY thing allowed to touch scrollLeft on a
    // bare 'scroll' event. It must never fire mid-drag or mid-transition
    // (a native smooth scrollBy in progress), or it will cancel/blink
    // that animation.
    studentsTrack.addEventListener('scroll', () => {
      if (studentsTrack.classList.contains('dragging')) return;
      if (isTransitioning) return;
      wrapLoop();
    }, { passive: true });

    // ---------- Next / Prev buttons ----------
    // Guarded by `isTransitioning` so rapid repeated clicks can't stack
    // up and corrupt the scroll position, and auto-scroll is paused for
    // the whole animation so it can't fight the native smooth scrollBy.
    const goTo = (direction) => {
      if (isTransitioning) return;
      pauseAutoScroll();
      isTransitioning = true;
      studentsTrack.scrollBy({ left: cardScrollAmount() * direction, behavior: 'smooth' });

      const finishTransition = () => {
        isTransitioning = false;
        wrapLoop(); // reposition only now that the animation has fully settled
        scheduleAutoScrollResume();
      };

      if ('onscrollend' in window) {
        studentsTrack.addEventListener('scrollend', finishTransition, { once: true });
      } else {
        setTimeout(finishTransition, 520); // fallback for browsers without scrollend
      }
    };
    studentsPrev?.addEventListener('click', () => goTo(-1));
    studentsNext?.addEventListener('click', () => goTo(1));

    // Pause while hovering the prev/next controls too (desktop)
    studentsNavEl?.addEventListener('mouseenter', pauseAutoScroll);
    studentsNavEl?.addEventListener('mouseleave', scheduleAutoScrollResume);

    // Mouse drag-to-scroll — touch keeps native swipe untouched.
    // Pointer capture only engages once real dragging is detected past
    // a threshold, so a plain click on "VIEW PROFILE" still reaches
    // the button instead of being hijacked by the track.
    let isDown = false, startX = 0, startScroll = 0, activePointerId = null;
    studentsTrack.addEventListener('pointerdown', (e) => {
      pauseAutoScroll();
      if (e.pointerType !== 'mouse') return;
      isDown = true;
      cardDragged = false;
      startX = e.clientX;
      startScroll = studentsTrack.scrollLeft;
      activePointerId = e.pointerId;
    });
    studentsTrack.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (!cardDragged && Math.abs(dx) > 6) {
        cardDragged = true;
        studentsTrack.classList.add('dragging');
        studentsTrack.setPointerCapture(activePointerId);
      }
      if (cardDragged) {
        studentsTrack.scrollLeft = startScroll - dx;
      }
    });
    const endCardDrag = () => {
      isDown = false;
      studentsTrack.classList.remove('dragging');
      if (cardDragged && activePointerId !== null) {
        try { studentsTrack.releasePointerCapture(activePointerId); } catch (_) {}
      }
      activePointerId = null;
      wrapLoop();
      scheduleAutoScrollResume();
    };
    studentsTrack.addEventListener('pointerup', endCardDrag);
    studentsTrack.addEventListener('pointercancel', endCardDrag);
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-profile-btn');
    if (!btn) return;
    if (cardDragged) { cardDragged = false; return; }
    openModal(Number(btn.dataset.index));
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
  });


  // ---------- Visual Interlude: reveal on scroll + subtle parallax ----------
  // Independent of the carousel/modal logic above — safe to omit entirely
  // if this section doesn't exist on a given page.
  const interludeSection = document.getElementById('interlude');
  if (interludeSection) {
    const interludeReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if ('IntersectionObserver' in window && !interludeReduceMotion) {
      const interludeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            interludeSection.classList.add('in-view');
            interludeObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      interludeObserver.observe(interludeSection);
    } else {
      // No IntersectionObserver support, or the user prefers reduced
      // motion — show the section fully visible immediately, no animation.
      interludeSection.classList.add('in-view');
    }

    // Subtle parallax on the photo only, applied to a wrapper element
    // kept separate from the reveal-animated photo itself so the two
    // transforms never compete over the same CSS transition.
    const interludePhotoWrap = document.getElementById('interludePhotoWrap');
    if (interludePhotoWrap && !interludeReduceMotion) {
      window.addEventListener('scroll', () => {
        const rect = interludeSection.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        if (rect.bottom < 0 || rect.top > vh) return; // section off-screen, skip
        const progress = (vh - rect.top) / (vh + rect.height); // ~0 entering, ~1 leaving
        const offset = (progress - 0.5) * 22; // small, calm range in px
        interludePhotoWrap.style.transform = `translateY(${offset}px)`;
      }, { passive: true });
    }
  }

  // ---------- Visual Interlude (mobile): YouTube CTA gating ----------
  // No fake/"#" link is ever set. Fill YOUTUBE_URL in once the class's
  // real channel/video link is available — the button stays hidden
  // (as it already is via the `hidden` attribute in index.html) until then.
  const YOUTUBE_URL = 'https://youtube.com/@kelastjkt-e9s?si=ZSpGsO0ckwyazXPW';
  const interludeYoutubeBtn = document.getElementById('interludeYoutubeBtn');
  if (interludeYoutubeBtn && YOUTUBE_URL) {
    interludeYoutubeBtn.href = YOUTUBE_URL;
    interludeYoutubeBtn.hidden = false;
  }

  // ---------- THE YEARS: reveal on scroll ----------
  // Independent of everything above — safe to omit if this section
  // doesn't exist. Same one-time IntersectionObserver pattern already
  // used for the interlude section, just targeting a different id.
  const yearsSection = document.getElementById('years');
  if (yearsSection) {
    const yearsReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if ('IntersectionObserver' in window && !yearsReduceMotion) {
      const yearsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            yearsSection.classList.add('in-view');
            yearsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      yearsObserver.observe(yearsSection);
    } else {
      yearsSection.classList.add('in-view');
    }
  }

  // ---------- THE WEEK: mobile day selector + reveal on scroll ----------
  const weekSection = document.getElementById('week');
  if (weekSection) {
    const weekTabs = weekSection.querySelectorAll('.week-tab');
    const weekDays = weekSection.querySelectorAll('.week-day');

    weekTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const day = tab.dataset.day;
        weekDays.forEach((d) => d.classList.toggle('is-active', d.dataset.day === day));
        weekTabs.forEach((t) => {
          const active = t === tab;
          t.classList.toggle('is-active', active);
          t.setAttribute('aria-selected', String(active));
        });
      });
    });

    const weekReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window && !weekReduceMotion) {
      const weekObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            weekSection.classList.add('in-view');
            weekObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      weekObserver.observe(weekSection);
    } else {
      weekSection.classList.add('in-view');
    }
  }

  // ---------- OUR HOMEROOM TEACHERS: manual carousel ----------
  const teachersSection = document.getElementById('teachers');
  if (teachersSection) {
    const teacherSlides = teachersSection.querySelectorAll('.teacher-slide');
    const teacherPrev = document.getElementById('teacherPrev');
    const teacherNext = document.getElementById('teacherNext');
    const teacherIndicator = document.getElementById('teacherIndicator');
    let teacherCurrent = 0;

    const pad2 = (n) => String(n).padStart(2, '0');

    const showTeacherSlide = (index) => {
      teacherCurrent = (index + teacherSlides.length) % teacherSlides.length;
      teacherSlides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === teacherCurrent);
      });
      if (teacherIndicator) {
        teacherIndicator.textContent = `${pad2(teacherCurrent + 1)} / ${pad2(teacherSlides.length)}`;
      }
    };

    teacherPrev?.addEventListener('click', () => showTeacherSlide(teacherCurrent - 1));
    teacherNext?.addEventListener('click', () => showTeacherSlide(teacherCurrent + 1));

    // Arrow-key support while focus is within the carousel (buttons are
    // already natively keyboard-operable via Enter/Space on their own).
    teachersSection.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') showTeacherSlide(teacherCurrent - 1);
      if (e.key === 'ArrowRight') showTeacherSlide(teacherCurrent + 1);
    });

    showTeacherSlide(0); // Class X is always first — manual only, no auto-advance

    const teachersReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window && !teachersReduceMotion) {
      const teachersObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            teachersSection.classList.add('in-view');
            teachersObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      teachersObserver.observe(teachersSection);
    } else {
      teachersSection.classList.add('in-view');
    }
  }

  // ---------- CLASS STRUCTURE ----------
  // Hobby pictograms are the real image files in img/hobi/. `desc` is the
  // short explanation shown on hover / focus / tap — generic descriptions
  // of the activity itself, edit freely. Danton has no image file yet, so
  // it falls back to a small inline SVG until img/hobi/danton.jpg exists
  // (then just set its `icon` path below).
  const DANTON_FALLBACK_SVG = '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="24" cy="9" r="5" fill="currentColor" stroke="none"/><path d="M24 16 L24 29"/><path d="M24 19 L31 16 L28 11"/><path d="M24 19 L19 28"/><path d="M24 29 L21 43 M24 29 L27 43"/></svg>';

  const HOBBIES = {
    pramuka:   { label: 'Pramuka',          icon: 'img/hobi/pramuka.jpg',   desc: 'Kegiatan kepanduan yang melatih kemandirian, kerja sama, dan kepemimpinan.' },
    basket:    { label: 'Basket',           icon: 'img/hobi/basket.jpg',    desc: 'Olahraga bola beregu yang mengandalkan kecepatan dan kerja sama tim.' },
    osis:      { label: 'Organisasi OSIS',  icon: 'img/hobi/osis.jpg',      desc: 'Organisasi siswa intra sekolah, tempat belajar memimpin dan bekerja sama.' },
    danton:    { label: 'Danton',           icon: '',                       desc: 'Komandan peleton: memimpin dan mengatur barisan.' },
    mikrotik:  { label: 'MikroTik',         icon: 'img/hobi/jaringan.jpg',  desc: 'Perangkat dan sistem jaringan yang dipakai untuk mengatur jaringan komputer.' },
    taekwondo: { label: 'Taekwondo',        icon: 'img/hobi/taekwondo.jpg', desc: 'Seni bela diri asal Korea yang menonjolkan teknik tendangan.' },
    coding:    { label: 'Coding',           icon: 'img/hobi/coding.jpg',    desc: 'Menulis kode untuk membangun aplikasi dan website.' },
    investasi: { label: 'Investasi',        icon: 'img/hobi/investasi.jpg', desc: 'Menanam modal agar nilainya bertumbuh dalam jangka panjang.' },
    karate:    { label: 'Karate',           icon: 'img/hobi/karate.jpg',    desc: 'Seni bela diri asal Jepang yang menonjolkan pukulan, tangkisan, dan kuda-kuda.' },
    sepakbola: { label: 'Sepak bola',       icon: 'img/hobi/bola.jpg',      desc: 'Olahraga beregu yang dimainkan dengan menendang bola ke gawang lawan.' },
    berenang:  { label: 'Berenang',         icon: 'img/hobi/berenang.jpg',  desc: 'Olahraga air yang melatih stamina dan teknik pernapasan.' },
    badminton: { label: 'Badminton',        icon: 'img/hobi/badminton.jpg', desc: 'Olahraga raket dengan kok yang dimainkan di atas net.' }
  };

  const officersData = [
    {
      name: 'Raden Bagus Nizar Ibrahim',
      role: 'Ketua Kelas',
      avatarClass: 'officer-avatar-0',
      initials: 'RN',
      photo: 'img/siswa/Nizar.jpg',
      interests: ['pramuka', 'basket', 'osis', 'danton', 'mikrotik']
    },
    {
      name: 'Muhamad Hudzaifah',
      role: 'Wakil Ketua Kelas',
      avatarClass: 'officer-avatar-1',
      initials: 'MH',
      photo: 'img/siswa/Hudzaifah.jpg',
      interests: ['taekwondo', 'coding', 'investasi', 'karate']
    },
    {
      name: 'Rizki Afriansyah',
      role: 'Sekretaris',
      avatarClass: 'officer-avatar-2',
      initials: 'RA',
      photo: 'img/siswa/rizky.jpg',
      interests: ['sepakbola', 'berenang', 'badminton']
    }
  ];

  // Decorative network sketches for CLASS STRUCTURE — one layout per officer
  // (nodes are [x, y] in a 260x120 viewBox, edges are node-index pairs,
  // `accent` is the single purple node). Purely visual, no data.
  const NETWORK_LAYOUTS = [
    { nodes: [[18,92],[62,44],[116,84],[164,30],[214,66],[244,104],[120,22]],
      edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[1,6],[6,3],[2,4]], accent: 3 },
    { nodes: [[14,60],[58,100],[104,52],[152,96],[196,38],[246,64],[150,16]],
      edges: [[0,1],[0,2],[2,3],[2,4],[3,5],[4,5],[6,4],[2,6]], accent: 2 },
    { nodes: [[22,34],[74,82],[118,34],[170,84],[222,34],[246,100],[74,10]],
      edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[3,5],[6,2],[0,6]], accent: 4 }
  ];

  const structureSection = document.getElementById('structure');
  if (structureSection) {
    const structureItems = structureSection.querySelectorAll('.structure-item');
    const structureDetail = document.getElementById('structureDetail');
    const structurePhoto = document.getElementById('structurePhoto');
    const structureName = document.getElementById('structureName');
    const structureRole = document.getElementById('structureRole');
    const structureIcons = document.getElementById('structureIcons');
    const structureIndex = document.getElementById('structureIndex');
    const structureNet = document.getElementById('structureNet');
    const structureReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let structureCurrent = 0;

    // Keep the tooltip fully on-screen: shift it sideways when the icon
    // sits near a viewport edge (the arrow stays centred on the icon).
    const placeStructureTip = (btn) => {
      const rect = btn.getBoundingClientRect();
      const vw = document.documentElement.clientWidth;
      const half = 105;
      const center = rect.left + rect.width / 2;
      let shift = 0;
      if (center - half < 12) shift = 12 - (center - half);
      else if (center + half > vw - 12) shift = (vw - 12) - (center + half);
      btn.style.setProperty('--tip-shift', shift + 'px');
    };

    const closeStructureTips = (except) => {
      structureIcons.querySelectorAll('.structure-icon.is-open').forEach((b) => {
        if (b !== except) b.classList.remove('is-open');
      });
    };

    const buildHobbyIcon = (key) => {
      const hobby = HOBBIES[key];
      if (!hobby) return null;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'structure-icon';
      btn.setAttribute('aria-label', hobby.label + '. ' + hobby.desc);

      if (hobby.icon) {
        const img = document.createElement('img');
        img.src = hobby.icon;
        img.alt = '';
        btn.appendChild(img);
      } else {
        btn.innerHTML = DANTON_FALLBACK_SVG;
      }

      const tip = document.createElement('span');
      tip.className = 'structure-tip';
      tip.setAttribute('aria-hidden', 'true');
      const strong = document.createElement('strong');
      strong.textContent = hobby.label;
      tip.appendChild(strong);
      tip.appendChild(document.createTextNode(hobby.desc));
      btn.appendChild(tip);
      return btn;
    };

    const renderStructureNetwork = (index) => {
      const layout = NETWORK_LAYOUTS[index % NETWORK_LAYOUTS.length];
      const NS = 'http://www.w3.org/2000/svg';
      structureNet.innerHTML = '';
      layout.edges.forEach(([from, to]) => {
        const line = document.createElementNS(NS, 'line');
        line.setAttribute('x1', layout.nodes[from][0]);
        line.setAttribute('y1', layout.nodes[from][1]);
        line.setAttribute('x2', layout.nodes[to][0]);
        line.setAttribute('y2', layout.nodes[to][1]);
        const touchesAccent = from === layout.accent || to === layout.accent;
        line.setAttribute('class', 'net-line' + (touchesAccent ? ' net-line--accent' : ''));
        structureNet.appendChild(line);
      });
      layout.nodes.forEach(([x, y], i) => {
        const dot = document.createElementNS(NS, 'circle');
        dot.setAttribute('cx', x);
        dot.setAttribute('cy', y);
        const isAccent = i === layout.accent;
        dot.setAttribute('r', isAccent ? 5 : 3.4);
        dot.setAttribute('class', 'net-node' + (isAccent ? ' net-node--accent' : (i % 3 === 0 ? ' net-node--hollow' : '')));
        structureNet.appendChild(dot);
      });
    };

    const applyOfficerContent = (officer, index) => {
      structurePhoto.innerHTML = '';
      if (officer.photo) {
        const img = document.createElement('img');
        img.src = officer.photo;
        img.alt = officer.name;
        structurePhoto.appendChild(img);
      } else {
        const ph = document.createElement('span');
        ph.className = 'ph ' + officer.avatarClass;
        ph.textContent = officer.initials;
        structurePhoto.appendChild(ph);
      }
      structureName.textContent = officer.name;
      structureRole.textContent = officer.role;

      structureIcons.innerHTML = '';
      officer.interests.forEach((key) => {
        const holder = buildHobbyIcon(key);
        if (holder) structureIcons.appendChild(holder);
      });

      structureIndex.textContent = String(index + 1).padStart(2, '0');
      renderStructureNetwork(index);
    };

    const renderOfficer = (index, instant) => {
      const officer = officersData[index];
      if (!officer) return;
      structureCurrent = index;

      structureItems.forEach((item, i) => {
        const active = i === index;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });

      if (instant || structureReduceMotion) {
        applyOfficerContent(officer, index);
      } else {
        structureDetail.classList.add('is-switching');
        window.setTimeout(() => {
          applyOfficerContent(officer, index);
          structureDetail.classList.remove('is-switching');
        }, 180);
      }
    };

    structureItems.forEach((item) => {
      item.addEventListener('click', () => renderOfficer(Number(item.dataset.officer)));
    });

    // Arrow keys move between officers (selector is a tablist)
    structureSection.querySelector('.structure-selector').addEventListener('keydown', (e) => {
      const next = (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? 1
                 : (e.key === 'ArrowUp' || e.key === 'ArrowLeft') ? -1 : 0;
      if (!next) return;
      e.preventDefault();
      const i = (structureCurrent + next + structureItems.length) % structureItems.length;
      structureItems[i].focus();
      renderOfficer(i);
    });

    // Hobby descriptions: hover / keyboard focus (CSS) + click/tap toggle
    structureIcons.addEventListener('mouseover', (e) => {
      const btn = e.target.closest('.structure-icon');
      if (btn) placeStructureTip(btn);
    });
    structureIcons.addEventListener('focusin', (e) => {
      const btn = e.target.closest('.structure-icon');
      if (btn) placeStructureTip(btn);
    });
    structureIcons.addEventListener('click', (e) => {
      const btn = e.target.closest('.structure-icon');
      if (!btn) return;
      placeStructureTip(btn);
      closeStructureTips(btn);
      btn.classList.toggle('is-open');
    });
    if (window.matchMedia('(hover: hover)').matches) {
      structureIcons.addEventListener('mouseout', (e) => {
        const btn = e.target.closest('.structure-icon');
        if (btn && !btn.contains(e.relatedTarget)) btn.classList.remove('is-open');
      });
    }
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.structure-icon')) closeStructureTips(null);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeStructureTips(null);
    });

    renderOfficer(0, true); // default: Ketua Kelas, icons shown immediately

    if ('IntersectionObserver' in window && !structureReduceMotion) {
      const structureObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            structureSection.classList.add('in-view');
            structureObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      structureObserver.observe(structureSection);
    } else {
      structureSection.classList.add('in-view');
    }
  }

  // ---------- GALLERY / THE PROOF WALL: pinned horizontal journey + lightbox ----------
  // Independent of every block above. Pinned mode is armed only when it is
  // safe (no reduced-motion, sticky + IntersectionObserver available);
  // otherwise .proof-stage stays a plain natively-scrollable strip.
  const proofSection = document.getElementById('proof');
  if (proofSection) {
    const proofReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const proofPin = document.getElementById('proofPin');
    const proofStage = document.getElementById('proofStage');
    const proofTrack = document.getElementById('proofTrack');
    const proofGhost = document.getElementById('proofGhost');
    const proofNetCanvas = document.getElementById('proofNet');
    const proofBarFill = document.getElementById('proofBarFill');
    const proofHudCount = document.getElementById('proofHudCount');
    const proofHudCap = document.getElementById('proofHudCap');
    const proofHint = document.getElementById('proofHint');
    const proofNavPrev = document.getElementById('proofNavPrev');
    const proofNavNext = document.getElementById('proofNavNext');
    const proofItemEls = Array.from(proofTrack.querySelectorAll('.proof-item'));

    const proofStickyOk = !(window.CSS && CSS.supports) || CSS.supports('position', 'sticky');
    const proofCanPin = !proofReduceMotion && proofStickyOk && 'IntersectionObserver' in window;

    let proofDistance = 0;     // how far the track can slide (px)
    let proofPinTop = 0;       // document Y where the pinned stage starts
    let proofGhostTravel = 0;
    let proofProgress = 0;     // 0..1 through the whole journey
    let proofMetrics = [];     // cached layout (offsetLeft is unaffected by transforms)
    let proofStops = [0];      // x positions (px) where each photo sits centred
    let proofTicking = false;
    let proofKeyboardNav = false;

    const clamp01 = (n) => Math.min(1, Math.max(0, n));

    const proofMeasure = () => {
      const vw = proofStage.clientWidth;
      const vh = proofStage.clientHeight;
      proofDistance = Math.max(0, proofTrack.scrollWidth - vw);
      proofPin.style.height = (proofDistance + vh) + 'px';
      proofPinTop = proofPin.getBoundingClientRect().top + window.scrollY;
      proofGhostTravel = Math.max(0, Math.min(proofDistance * 0.45, proofGhost.scrollWidth - vw));
      proofMetrics = proofItemEls.map((el) => ({
        el,
        cx: el.offsetLeft + el.offsetWidth / 2,
        depth: parseFloat(el.dataset.depth) || 1,
        cap: (el.querySelector('.proof-open') || {}).dataset ? el.querySelector('.proof-open').dataset.caption : ''
      }));
      // "stops" for the prev/next buttons: the start, then each item centred
      proofStops = [0];
      proofMetrics.forEach((m) => {
        const s = Math.min(proofDistance, Math.max(0, m.cx - vw / 2));
        if (s - proofStops[proofStops.length - 1] > 8) proofStops.push(s);
      });
    };

    const proofUpdate = () => {
      proofTicking = false;
      const vw = proofStage.clientWidth;
      // read live: lazy images above this section can shift its position
      proofPinTop = proofPin.getBoundingClientRect().top + window.scrollY;
      proofProgress = proofDistance > 0 ? clamp01((window.scrollY - proofPinTop) / proofDistance) : 0;
      const x = proofProgress * proofDistance;

      proofTrack.style.transform = 'translate3d(' + (-x).toFixed(2) + 'px,0,0)';
      proofGhost.style.transform = 'translate3d(' + (-proofProgress * proofGhostTravel).toFixed(2) + 'px,0,0)';
      proofBarFill.style.transform = 'scaleX(' + proofProgress.toFixed(4) + ')';
      proofHint.classList.toggle('is-hidden', proofProgress > 0.02);
      if (proofNavPrev) proofNavPrev.disabled = x <= 8;
      if (proofNavNext) proofNavNext.disabled = x >= proofDistance - 8;

      let nearest = -1;
      let nearestDist = Infinity;
      proofMetrics.forEach((m, i) => {
        // p: -1 (far left) .. 0 (centred) .. +1 (far right)
        const p = (m.cx - x - vw / 2) / vw;
        const a = Math.min(1, Math.abs(p));
        const dx = -p * m.depth * 60;                 // depth parallax
        const scale = 1 + 0.045 * (1 - a);            // subtle "focus pull"
        const opacity = 0.28 + 0.72 * (1 - Math.pow(a, 1.6));
        m.el.style.transform = 'translate3d(' + dx.toFixed(1) + 'px,0,0) scale(' + scale.toFixed(4) + ')';
        m.el.style.opacity = opacity.toFixed(3);
        if (Math.abs(p) < nearestDist) { nearestDist = Math.abs(p); nearest = i; }
      });

      const total = proofMetrics.length;
      if (proofProgress < 0.02 || nearest < 0) {
        proofHudCount.textContent = '00 / ' + String(total).padStart(2, '0');
        proofHudCap.textContent = '';
      } else {
        proofHudCount.textContent = String(nearest + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
        proofHudCap.textContent = proofMetrics[nearest].cap || '';
      }
    };

    const proofSchedule = () => {
      if (proofTicking) return;
      proofTicking = true;
      window.requestAnimationFrame(proofUpdate);
    };

    const proofRemeasure = () => { proofMeasure(); proofUpdate(); };

    // ----- drifting network background (canvas, no library) -----
    const proofSetupNetwork = () => {
      const ctx = proofNetCanvas.getContext ? proofNetCanvas.getContext('2d') : null;
      if (!ctx) return;
      let W = 0, H = 0, nodes = [], raf = 0, visible = false;

      const init = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = proofStage.clientWidth;
        H = proofStage.clientHeight;
        proofNetCanvas.width = Math.round(W * dpr);
        proofNetCanvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = W < 700 ? 26 : 48;
        nodes = Array.from({ length: count }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.2 + 0.7,
          ph: Math.random() * Math.PI * 2,
          accent: Math.random() < 0.16
        }));
      };

      const draw = (t) => {
        ctx.clearRect(0, 0, W, H);
        const link = W < 700 ? 95 : 140;
        const ox = -proofProgress * W * 0.9; // network slides with the scroll
        const pts = nodes.map((n) => {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0) n.x += W; else if (n.x > W) n.x -= W;
          if (n.y < 0 || n.y > H) n.vy *= -1;
          return { x: (((n.x + ox) % W) + W) % W, y: n.y, n };
        });
        for (let i = 0; i < pts.length; i++) {
          for (let k = i + 1; k < pts.length; k++) {
            const dx = pts[i].x - pts[k].x, dy = pts[i].y - pts[k].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < link) {
              const hot = pts[i].n.accent || pts[k].n.accent;
              ctx.strokeStyle = (hot ? 'rgba(164,92,255,' : 'rgba(255,255,255,') + ((1 - d / link) * (hot ? 0.34 : 0.13)).toFixed(3) + ')';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(pts[i].x, pts[i].y);
              ctx.lineTo(pts[k].x, pts[k].y);
              ctx.stroke();
            }
          }
        }
        pts.forEach((p) => {
          const tw = 0.55 + 0.45 * Math.sin(t * 0.0012 + p.n.ph);
          ctx.fillStyle = p.n.accent ? 'rgba(164,92,255,' + (0.9 * tw).toFixed(3) + ')' : 'rgba(255,255,255,' + (0.45 * tw).toFixed(3) + ')';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.n.r, 0, Math.PI * 2);
          ctx.fill();
        });
      };

      const loop = (t) => {
        if (!visible || document.hidden) { raf = 0; return; }
        draw(t);
        raf = window.requestAnimationFrame(loop);
      };
      const start = () => { if (!raf) raf = window.requestAnimationFrame(loop); };

      init();
      window.addEventListener('resize', init);
      document.addEventListener('visibilitychange', () => { if (!document.hidden && visible) start(); });
      const netObserver = new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        if (visible) start();
      }, { threshold: 0 });
      netObserver.observe(proofPin);
    };

    if (proofCanPin) {
      proofSection.classList.add('proof-pinned');
      proofMeasure();
      proofUpdate();
      proofSetupNetwork();

      window.addEventListener('scroll', proofSchedule, { passive: true });
      window.addEventListener('resize', proofRemeasure);
      window.addEventListener('orientationchange', proofRemeasure);
      window.addEventListener('load', proofRemeasure);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(proofRemeasure);
      if ('ResizeObserver' in window) new ResizeObserver(proofRemeasure).observe(proofTrack);

      // first time the stage is seen: intro words rise in
      const liveObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          proofSection.classList.add('proof-live');
          liveObserver.disconnect();
        }
      }, { threshold: 0.2 });
      liveObserver.observe(proofStage);

      // Prev / next buttons: smooth-scroll the page to the neighbouring stop.
      // Picking "first stop beyond where we are" keeps rapid taps from
      // skipping a photo while a previous jump is still animating.
      const proofGoStop = (dir) => {
        const x = proofProgress * proofDistance;
        let target = null;
        if (dir > 0) {
          target = proofStops.find((s) => s > x + 8);
        } else {
          for (let i = proofStops.length - 1; i >= 0; i--) {
            if (proofStops[i] < x - 8) { target = proofStops[i]; break; }
          }
        }
        if (target === null || target === undefined) return;
        const top = proofPin.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top + target, behavior: 'smooth' });
      };
      if (proofNavPrev) proofNavPrev.addEventListener('click', () => proofGoStop(-1));
      if (proofNavNext) proofNavNext.addEventListener('click', () => proofGoStop(1));

      // Keyboard users: tabbing to an off-screen item must move the PAGE
      // (which drives the track), never scroll the clipped stage sideways.
      document.addEventListener('keydown', () => { proofKeyboardNav = true; }, true);
      document.addEventListener('pointerdown', () => { proofKeyboardNav = false; }, true);
      proofStage.addEventListener('scroll', () => { proofStage.scrollLeft = 0; });
      proofTrack.addEventListener('focusin', (e) => {
        const item = e.target.closest('.proof-item');
        if (!item || !proofKeyboardNav) return;
        const m = proofMetrics.find((mm) => mm.el === item);
        if (!m) return;
        const targetX = Math.min(proofDistance, Math.max(0, m.cx - proofStage.clientWidth / 2));
        window.scrollTo({ top: proofPinTop + targetX, behavior: 'auto' });
      });
    }

    // ----- Lightbox (photos first, then certificates — DOM order) -----
    const proofTriggers = Array.from(proofSection.querySelectorAll('.proof-open'));
    const proofLb = document.getElementById('proofLightbox');
    const proofLbImg = document.getElementById('proofLbImg');
    const proofLbCaption = document.getElementById('proofLbCaption');
    const proofLbCount = document.getElementById('proofLbCount');
    const proofLbClose = document.getElementById('proofLbClose');
    const proofLbPrev = document.getElementById('proofLbPrev');
    const proofLbNext = document.getElementById('proofLbNext');
    let proofIndex = 0;
    let proofOpen = false;
    let proofLastFocus = null;

    const showProofImage = (i) => {
      proofIndex = (i + proofTriggers.length) % proofTriggers.length;
      const trigger = proofTriggers[proofIndex];
      const thumb = trigger.querySelector('img');
      proofLbImg.src = thumb.currentSrc || thumb.src;
      proofLbImg.alt = thumb.alt;
      proofLbCaption.textContent = trigger.dataset.caption || '';
      proofLbCount.textContent =
        String(proofIndex + 1).padStart(2, '0') + ' / ' + String(proofTriggers.length).padStart(2, '0');
    };

    const openProofLb = (i) => {
      proofLastFocus = document.activeElement;
      showProofImage(i);
      proofOpen = true;
      proofLb.classList.add('is-open');
      proofLb.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-lock');
      proofLbClose.focus();
    };

    const closeProofLb = () => {
      if (!proofOpen) return;
      proofOpen = false;
      proofLb.classList.remove('is-open');
      proofLb.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-lock');
      // preventScroll: giving focus back must never jump the pinned page
      if (proofLastFocus) proofLastFocus.focus({ preventScroll: true });
    };

    proofTriggers.forEach((trigger, i) => {
      trigger.addEventListener('click', () => openProofLb(i));
    });
    proofLbClose.addEventListener('click', closeProofLb);
    proofLbPrev.addEventListener('click', () => showProofImage(proofIndex - 1));
    proofLbNext.addEventListener('click', () => showProofImage(proofIndex + 1));

    // click on the dark area (not the image / buttons / caption) closes
    proofLb.addEventListener('click', (e) => {
      if (!e.target.closest('img, button, figcaption')) closeProofLb();
    });

    document.addEventListener('keydown', (e) => {
      if (!proofOpen) return;
      if (e.key === 'Escape') { closeProofLb(); return; }
      if (e.key === 'ArrowLeft') showProofImage(proofIndex - 1);
      if (e.key === 'ArrowRight') showProofImage(proofIndex + 1);
      if (e.key === 'Tab') {
        const focusables = [proofLbClose, proofLbPrev, proofLbNext];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        else if (!focusables.includes(document.activeElement)) { e.preventDefault(); first.focus(); }
      }
    });

    // touch: horizontal swipe = previous / next
    let proofTouchX = null;
    proofLb.addEventListener('touchstart', (e) => {
      proofTouchX = e.changedTouches[0].clientX;
    }, { passive: true });
    proofLb.addEventListener('touchend', (e) => {
      if (proofTouchX === null) return;
      const dx = e.changedTouches[0].clientX - proofTouchX;
      proofTouchX = null;
      if (Math.abs(dx) > 50) showProofImage(proofIndex + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  // ---------- GALLERY / KENANGAN: 3D memory ring + lightbox ----------
  // Independent of every block above (own lightbox instance, own state).
  const memorySection = document.getElementById('memory');
  if (memorySection) {
    const memReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const memScene = document.getElementById('memoryScene');
    const memRing = document.getElementById('memoryRing');
    const memCards = Array.from(memRing.querySelectorAll('.memory-card'));
    const memTriggers = memCards.map((c) => c.querySelector('.memory-open'));
    const memPrev = document.getElementById('memoryPrev');
    const memNext = document.getElementById('memoryNext');
    const memNow = document.getElementById('memoryNow');
    const memCap = document.getElementById('memoryCap');
    const memCanvas = document.getElementById('memoryStars');

    const N = memCards.length;
    const STEP = 360 / N;
    const pad2m = (n) => String(n).padStart(2, '0');
    const wrap180 = (a) => { const m = ((a % 360) + 360) % 360; return m > 180 ? m - 360 : m; };

    let R = 0;                 // ring radius (px)
    let rot = 0;               // ring rotation (deg); card i faces us when i*STEP + rot ≡ 0
    let vel = 0;               // inertia (deg per 16ms frame)
    let target = null;         // snap / step target (deg)
    let pending = false;       // pointer is down
    let dragging = false;      // pointer moved past the threshold
    let startX = 0, lastX = 0, lastT = 0;
    let suppressClick = false;
    let hoverPause = false;
    let idleUntil = 0;         // auto-drift resumes after this time
    let visible = false;
    let raf = 0;
    let lastFrameT = 0;
    let front = -1;

    const nearestTarget = () => -Math.round(-rot / STEP) * STEP;

    const memSetFront = (i) => {
      front = i;
      memCards.forEach((c, k) => {
        c.classList.toggle('is-front', k === i);
        memTriggers[k].tabIndex = k === i ? 0 : -1;   // only the front photo is a tab stop
      });
      memNow.textContent = pad2m(i + 1) + ' / ' + pad2m(N);
      memCap.textContent = memTriggers[i].dataset.caption || '';
    };

    const memApply = () => {
      memRing.style.transform = 'translateZ(' + (-R).toFixed(1) + 'px) rotateY(' + rot.toFixed(3) + 'deg)';
      let best = 0, bestD = Infinity;
      memCards.forEach((c, i) => {
        const d = Math.abs(wrap180(i * STEP + rot));
        c.style.opacity = (1 - Math.min(1, d / 110) * 0.75).toFixed(3);   // depth fade
        if (d < bestD) { bestD = d; best = i; }
      });
      if (best !== front) memSetFront(best);
    };

    const memLayout = () => {
      const cw = memRing.offsetWidth || 300;
      R = (cw * 1.1 / 2) / Math.tan(Math.PI / N);   // radius so neighbours sit side by side (+10% gap)
      memCards.forEach((c, i) => {
        c.style.transform = 'rotateY(' + (i * STEP) + 'deg) translateZ(' + R.toFixed(1) + 'px)';
      });
      memApply();
    };

    // ----- starfield (canvas, no library) -----
    const ctx = memCanvas && memCanvas.getContext ? memCanvas.getContext('2d') : null;
    let SW = 0, SH = 0, stars = [];
    const memDrawStars = (t) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, SW, SH);
      const shift = -rot * 0.0016;   // the sky drifts a little as the ring turns
      stars.forEach((s) => {
        const x = ((((s.x + shift * s.depth) % 1) + 1) % 1) * SW;
        const a = memReduce ? 0.5 : 0.35 + 0.55 * (0.5 + 0.5 * Math.sin(t * s.sp + s.ph));
        ctx.fillStyle = s.accent ? 'rgba(164,92,255,' + a.toFixed(3) + ')' : 'rgba(255,255,255,' + (a * 0.85).toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(x, s.y * SH, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    const memInitStars = () => {
      if (!ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      SW = memorySection.clientWidth;
      SH = memorySection.clientHeight;
      memCanvas.width = Math.round(SW * dpr);
      memCanvas.height = Math.round(SH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(160, (SW * SH) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random(), y: Math.random(),
        r: Math.random() * 1.3 + 0.3,
        ph: Math.random() * Math.PI * 2,
        sp: Math.random() * 0.0012 + 0.0004,
        depth: Math.random() * 0.8 + 0.2,
        accent: Math.random() < 0.1
      }));
      memDrawStars(performance.now());
    };

    // ----- animation loop: runs only while the section is on screen -----
    const memFrame = (t) => {
      raf = 0;
      const now = t || performance.now();
      const dt = lastFrameT ? Math.min(64, now - lastFrameT) : 16;
      lastFrameT = now;
      let moving = false;

      if (!dragging) {
        if (Math.abs(vel) > 0.02) {
          rot += vel * (dt / 16);
          vel *= Math.pow(0.94, dt / 16);
          moving = true;
          if (Math.abs(vel) <= 0.02) { vel = 0; target = nearestTarget(); }
        } else if (target !== null) {
          const diff = target - rot;
          if (Math.abs(diff) < 0.04) { rot = target; target = null; }
          else { rot += memReduce ? diff : diff * (1 - Math.pow(1 - 0.14, dt / 16)); moving = true; }
        } else if (!memReduce && !pending && !hoverPause && now > idleUntil) {
          rot -= 3.2 * dt / 1000;      // slow idle drift (never with reduced motion)
          moving = true;
        }
      }
      memApply();
      memDrawStars(now);
      if (visible && !document.hidden && (!memReduce || moving || dragging)) raf = window.requestAnimationFrame(memFrame);
    };
    const memKick = () => { if (!raf && visible) { lastFrameT = 0; raf = window.requestAnimationFrame(memFrame); } };

    // ----- stepping -----
    const memPause = (ms) => { idleUntil = performance.now() + ms; };
    const memGoTo = (dir) => {
      const base = target !== null ? Math.round(-target / STEP) : Math.round(-rot / STEP);
      target = -(base + dir) * STEP;
      vel = 0;
      memPause(4500);
      memKick();
    };
    const memBringFront = (i) => {
      target = rot - wrap180(i * STEP + rot);
      vel = 0;
      memPause(4500);
      memKick();
    };

    // ----- pointer: drag with a threshold (capture only AFTER it, so plain clicks stay clicks) -----
    memScene.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      pending = true;
      dragging = false;
      startX = lastX = e.clientX;
      lastT = e.timeStamp;
      vel = 0;
      target = null;
      memKick();
    });
    memScene.addEventListener('pointermove', (e) => {
      if (pending) {
        if (!dragging && Math.abs(e.clientX - startX) > 6) {
          dragging = true;
          memScene.classList.add('is-dragging');
          try { memScene.setPointerCapture(e.pointerId); } catch (_) {}
          lastX = e.clientX;
          lastT = e.timeStamp;
        }
        if (dragging) {
          const d = (e.clientX - lastX) * 0.22;
          const dtm = Math.max(1, e.timeStamp - lastT);
          rot += d;
          vel = 0.7 * vel + 0.3 * (d * (16 / dtm));
          lastX = e.clientX;
          lastT = e.timeStamp;
          memKick();
        }
        return;
      }
      if (e.pointerType === 'mouse' && !memReduce) {
        const r = memScene.getBoundingClientRect();
        const px = (e.clientX - r.left) / (r.width || 1) - 0.5;
        const py = (e.clientY - r.top) / (r.height || 1) - 0.5;
        memScene.style.perspectiveOrigin = (50 + px * 14).toFixed(1) + '% ' + (42 + py * 12).toFixed(1) + '%';
      }
    });
    const memPointerEnd = (e) => {
      if (!pending) return;
      pending = false;
      const wasDragging = dragging;
      dragging = false;
      memScene.classList.remove('is-dragging');
      try { memScene.releasePointerCapture(e.pointerId); } catch (_) {}
      memPause(3500);
      if (wasDragging && e.type === 'pointerup') {
        suppressClick = true;                              // a drag must never open a photo
        window.setTimeout(() => { suppressClick = false; }, 60);
        vel = Math.max(-6, Math.min(6, vel));
        if (Math.abs(vel) < 0.4) { vel = 0; target = nearestTarget(); }
      } else {
        vel = 0;
        target = nearestTarget();
      }
      memKick();
    };
    memScene.addEventListener('pointerup', memPointerEnd);
    memScene.addEventListener('pointercancel', memPointerEnd);
    memScene.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') hoverPause = true; });
    memScene.addEventListener('pointerleave', () => { hoverPause = false; memScene.style.perspectiveOrigin = ''; memKick(); });

    // ----- tap a side photo → bring it forward; tap the front photo → open it -----
    memRing.addEventListener('click', (e) => {
      const btn = e.target.closest('.memory-open');
      if (!btn || suppressClick) return;
      const i = memTriggers.indexOf(btn);
      if (i === front) memLb.open(i); else memBringFront(i);
    });

    memPrev.addEventListener('click', () => memGoTo(-1));
    memNext.addEventListener('click', () => memGoTo(1));
    memorySection.addEventListener('keydown', (e) => {
      if (memLb.isOpen()) return;
      if (e.key === 'ArrowLeft') { e.preventDefault(); memGoTo(-1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); memGoTo(1); }
    });

    // ----- lightbox (own instance; navigates only the 9 memory photos) -----
    const memCreateLightbox = (cfg) => {
      let idx = 0, open = false, lastFocus = null, touchX = null;
      const show = (i) => {
        idx = (i + cfg.triggers.length) % cfg.triggers.length;
        const trigger = cfg.triggers[idx];
        const thumb = trigger.querySelector('img');
        cfg.img.src = thumb.currentSrc || thumb.src;
        cfg.img.alt = thumb.alt;
        cfg.cap.textContent = trigger.dataset.caption || '';
        cfg.count.textContent = pad2m(idx + 1) + ' / ' + pad2m(cfg.triggers.length);
        if (cfg.onChange) cfg.onChange(idx);
      };
      const openLb = (i) => {
        lastFocus = document.activeElement;
        show(i);
        open = true;
        cfg.root.classList.add('is-open');
        cfg.root.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-lock');
        cfg.close.focus();
      };
      const closeLb = () => {
        if (!open) return;
        open = false;
        cfg.root.classList.remove('is-open');
        cfg.root.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-lock');
        if (lastFocus) lastFocus.focus({ preventScroll: true });   // never jump the page on close
      };
      cfg.close.addEventListener('click', closeLb);
      cfg.prev.addEventListener('click', () => show(idx - 1));
      cfg.next.addEventListener('click', () => show(idx + 1));
      cfg.root.addEventListener('click', (e) => {
        if (!e.target.closest('img, button, figcaption')) closeLb();
      });
      document.addEventListener('keydown', (e) => {
        if (!open) return;
        if (e.key === 'Escape') { closeLb(); return; }
        if (e.key === 'ArrowLeft') show(idx - 1);
        if (e.key === 'ArrowRight') show(idx + 1);
        if (e.key === 'Tab') {
          const f = [cfg.close, cfg.prev, cfg.next];
          if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[2].focus(); }
          else if (!e.shiftKey && document.activeElement === f[2]) { e.preventDefault(); f[0].focus(); }
          else if (!f.includes(document.activeElement)) { e.preventDefault(); f[0].focus(); }
        }
      });
      cfg.root.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
      cfg.root.addEventListener('touchend', (e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        touchX = null;
        if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
      }, { passive: true });
      return { open: openLb, isOpen: () => open };
    };
    const memLb = memCreateLightbox({
      root: document.getElementById('memoryLightbox'),
      img: document.getElementById('memoryLbImg'),
      cap: document.getElementById('memoryLbCaption'),
      count: document.getElementById('memoryLbCount'),
      close: document.getElementById('memoryLbClose'),
      prev: document.getElementById('memoryLbPrev'),
      next: document.getElementById('memoryLbNext'),
      triggers: memTriggers,
      onChange: (i) => { if (i !== front) memBringFront(i); }   // ring follows what you browse
    });

    // ----- boot -----
    memLayout();
    memInitStars();
    window.addEventListener('resize', () => { memLayout(); memInitStars(); });
    window.addEventListener('load', memLayout);
    if ('ResizeObserver' in window) new ResizeObserver(memLayout).observe(memRing);

    if ('IntersectionObserver' in window) {
      memorySection.classList.add('memory-js');
      const memObserver = new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        if (visible) { memorySection.classList.add('is-in'); memKick(); }
      }, { threshold: 0.12 });
      memObserver.observe(memorySection);
      document.addEventListener('visibilitychange', () => { if (!document.hidden) memKick(); });
    }
  }

  // ---------- INTRO: full-screen word sequence, plays once per visit ----------
  // Edit INTRO_WORDS to change the wording. Each word fades/rises in, holds,
  // then leaves upward; after the last word the whole overlay slides up to
  // reveal the hero. Skipped with reduced motion, when already seen this
  // session, or when the user presses "Lewati".
  const INTRO_WORDS = ['SELAMAT DATANG', 'DI RUANG', 'XII TJKT', '2026'];
  const INTRO_HOLD = 1150;      // ms each word stays on screen
  const INTRO_GAP = 260;        // ms between words

  const introEl = document.getElementById('intro');
  if (introEl) {
    const introReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let introSeen = false;
    try { introSeen = sessionStorage.getItem('tjkt-intro-seen') === '1'; } catch (_) {}

    const introEnd = () => {
      introEl.classList.add('is-gone');
      document.body.classList.remove('intro-lock');
    };

    if (introReduce || introSeen) {
      introEnd();
    } else {
      document.body.classList.add('intro-lock');
      const wordsEl = document.getElementById('introWords');
      const skipBtn = document.getElementById('introSkip');
      const starsCanvas = document.getElementById('introStars');
      let timers = [];
      let finished = false;

      // words, stacked in one grid cell so they cross-fade in place
      const wordEls = INTRO_WORDS.map((txt) => {
        const s = document.createElement('div');
        s.className = 'intro-word';
        s.textContent = txt;
        wordsEl.appendChild(s);
        return s;
      });

      // starfield (canvas, no library), runs only while the intro is visible
      const ctx = starsCanvas.getContext ? starsCanvas.getContext('2d') : null;
      let SW = 0, SH = 0, stars = [], sraf = 0;
      const initStars = () => {
        if (!ctx) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        SW = introEl.clientWidth; SH = introEl.clientHeight;
        starsCanvas.width = Math.round(SW * dpr);
        starsCanvas.height = Math.round(SH * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = Math.round(Math.min(140, (SW * SH) / 10000));
        stars = Array.from({ length: count }, () => ({
          x: Math.random() * SW, y: Math.random() * SH,
          vy: -(Math.random() * 0.12 + 0.02),
          r: Math.random() * 1.2 + 0.3,
          ph: Math.random() * Math.PI * 2,
          accent: Math.random() < 0.12
        }));
      };
      const drawStars = (t) => {
        if (!ctx) return;
        ctx.clearRect(0, 0, SW, SH);
        stars.forEach((s) => {
          s.y += s.vy; if (s.y < -2) s.y = SH + 2;
          const a = 0.35 + 0.5 * (0.5 + 0.5 * Math.sin(t * 0.0009 + s.ph));
          ctx.fillStyle = s.accent ? 'rgba(164,92,255,' + a.toFixed(3) + ')' : 'rgba(255,255,255,' + (a * 0.8).toFixed(3) + ')';
          ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
        });
        if (!finished) sraf = window.requestAnimationFrame(drawStars);
      };
      initStars();
      sraf = window.requestAnimationFrame(drawStars);
      window.addEventListener('resize', initStars);

      const finish = () => {
        if (finished) return;
        finished = true;
        timers.forEach(clearTimeout);
        try { sessionStorage.setItem('tjkt-intro-seen', '1'); } catch (_) {}
        introEl.classList.add('is-leaving');        // slide the overlay up
        window.setTimeout(introEnd, 1000);
      };

      // sequence: word in → hold → word out → next
      let t = 400;
      wordEls.forEach((el, i) => {
        timers.push(window.setTimeout(() => el.classList.add('is-on'), t));
        timers.push(window.setTimeout(() => { el.classList.remove('is-on'); el.classList.add('is-off'); }, t + INTRO_HOLD));
        t += INTRO_HOLD + INTRO_GAP + 500;
      });
      timers.push(window.setTimeout(finish, t));

      skipBtn.addEventListener('click', finish);
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') finish(); });
    }
  }


  // ---------- NAVBAR: highlight the section currently in view ----------
  // Plain IntersectionObserver, no library. Adds .is-current to the matching
  // link in the desktop nav and the mobile menu.
  const navSpyIds = ['hero','people','years','week','teachers','structure','proof','memory'];
  const navSpyLinks = Array.from(document.querySelectorAll('.nav-links a, .mobile-menu a'))
    .filter((a) => a.getAttribute('href').startsWith('#') && a.getAttribute('href').length > 1);
  if ('IntersectionObserver' in window && navSpyLinks.length) {
    const setCurrent = (id) => {
      navSpyLinks.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === '#' + id));
    };
    const navSpy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    navSpyIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) navSpy.observe(el);
    });
  }
