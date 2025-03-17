const homeSpotify = document.getElementById("homeSpotify")
const tabSpotify = document.getElementById("tabSpotify")
const searchSpotify = document.getElementById("searchSpotify")
const librarySpotify = document.getElementById("librarySpotify")
const likedSpotify = document.getElementById("likedSpotify")
const chillPlaylistSpotify = document.getElementById("chillPlaylistSpotify")
const mtbmbsbPlaylistSpotify = document.getElementById("mtbmbsbPlaylistSpotify")
const kamikazePlaylistSpotify = document.getElementById("kamikazePlaylistSpotify")
const sslpExpandedPlaylistSpotify = document.getElementById("sslpExpandedPlaylistSpotify")
const eminemShowPlaylistSpotify = document.getElementById("eminemShowPlaylistSpotify")
const mmlpPlaylistSpotify = document.getElementById("mmlpPlaylistSpotify")
const taylorSwiftPanel = document.getElementById("taylorSwiftPanel")
const eminemPanel = document.getElementById("eminemPanel")
const arianaGrandePanel = document.getElementById("arianaGrandePanel")

const homeBtn = document.getElementById("homeBtn")
const searchBtn = document.getElementById("searchBtn")
const libraryBtn = document.getElementById("libraryBtn")
const likedBtn = document.getElementById("likedBtn")
const chillBtn = document.getElementById("chillBtn")


// Seleciona todos os elementos com a classe .eminemArtist
const mmlpBtn = document.querySelectorAll('.mmlpBtn');
// Função para lidar com o clique
mmlpBtn.forEach((element) => {
    element.addEventListener('click', () => {
        tabSpotify.style.display = "none"
        mmlpPlaylistSpotify.style.display = "block"
    });
});


// Seleciona todos os elementos com a classe .eminemArtist
const mtbmbsbBtn = document.querySelectorAll('.mtbmbsbBtn');
// Função para lidar com o clique
mtbmbsbBtn.forEach((element) => {
    element.addEventListener('click', () => {
        tabSpotify.style.display = "none"
        mtbmbsbPlaylistSpotify.style.display = "block"
    });
});


// Seleciona todos os elementos com a classe .eminemArtist
const kamikazeBtn = document.querySelectorAll('.kamikazeBtn');
// Função para lidar com o clique
kamikazeBtn.forEach((element) => {
    element.addEventListener('click', () => {
        tabSpotify.style.display = "none"
        kamikazePlaylistSpotify.style.display = "block"
    });
});


// Seleciona todos os elementos com a classe .eminemArtist
const sslpExpandedBtn = document.querySelectorAll('.sslpExpandedBtn');
// Função para lidar com o clique
sslpExpandedBtn.forEach((element) => {
    element.addEventListener('click', () => {
        homeSpotify.style.display = "none"
        tabSpotify.style.display = "none"
        sslpExpandedPlaylistSpotify.style.display = "block"
    });
});

// Seleciona todos os elementos com a classe .eminemArtist
const eminemShowBtn = document.querySelectorAll('.eminemShowBtn');
// Função para lidar com o clique
eminemShowBtn.forEach((element) => {
    element.addEventListener('click', () => {
        homeSpotify.style.display = "none"
        tabSpotify.style.display = "none"
        eminemShowPlaylistSpotify.style.display = "block"
    });
});

// Referências para as seções
const sections = {
    homeSpotify,
    tabSpotify,
    searchSpotify,
    librarySpotify,
    likedSpotify,
    chillPlaylistSpotify,
    mtbmbsbPlaylistSpotify,
    kamikazePlaylistSpotify,
    sslpExpandedPlaylistSpotify,
    eminemShowPlaylistSpotify,
    mmlpPlaylistSpotify,
    taylorSwiftPanel,
    eminemPanel,
    arianaGrandePanel,
};

// Referências para os botões e suas seções correspondentes
const buttons11 = [
    { button: homeBtn, section: 'homeSpotify' },
    // { button: searchBtn, section: 'searchSpotify' },
    { button: libraryBtn, section: 'librarySpotify' },
    // { button: likedBtn, section: 'likedSpotify' },
    { button: chillBtn, section: 'chillPlaylistSpotify' },
];

// Função para exibir a seção correspondente e esconder as demais
function switchSection(sectionToShow) {
    for (const [key, section] of Object.entries(sections)) {
        section.style.display = key === sectionToShow ? 'block' : 'none';
    }
}

// Adiciona os event listeners aos botões
buttons11.forEach(({ button, section }) => {
    button.addEventListener('click', () => {
        switchSection(section);
    });
});

// Seleciona todos os elementos com a classe .eminemArtist
const eminemArtists = document.querySelectorAll('.eminemArtist');

// Função para lidar com o clique
eminemArtists.forEach((element) => {
    element.addEventListener('click', () => {
        homeSpotify.style.display = "none"
        // Mostra a seção com id "tabsSpotify"
        tabSpotify.style.display = 'block';

        // Ação nos elementos com a classe .eminem
        const eminemElements = document.querySelectorAll('.eminem');
        eminemElements.forEach((eminem) => {
            eminem.style.display = "block"
        });
    });
});

// Seleciona todos os elementos com a classe .eminemArtist
const taylorSwiftArtists = document.querySelectorAll('.taylorSwiftArtist');

// Função para lidar com o clique
taylorSwiftArtists.forEach((element) => {
    element.addEventListener('click', () => {
        homeSpotify.style.display = "none"
        // Mostra a seção com id "tabsSpotify"
        tabSpotify.style.display = 'block';

        // Ação nos elementos com a classe .eminem
        const taylorSwiftElements = document.querySelectorAll('.taylorSwift');
        taylorSwiftElements.forEach((taylorSwift) => {
            taylorSwift.style.display = "block"
        });
    });
});



// Seleciona todos os elementos com a classe .eminemArtist
const chillHitsBtn = document.querySelectorAll('.chillHitsBtn');

// Função para lidar com o clique
chillHitsBtn.forEach((element) => {
    element.addEventListener('click', () => {
        homeSpotify.style.display = "none"
        // Mostra a seção com id "tabsSpotify"
        tabSpotify.style.display = 'block';

        // Ação nos elementos com a classe .eminem
        const chillHitsElements = document.querySelectorAll('.chillHits');
        chillHitsElements.forEach((chillHits) => {
            chillHits.style.display = "block"
        });
    });
});




// Seleciona todos os elementos com a classe .eminemArtist
const arianaGrandeArtists = document.querySelectorAll('.arianaGrandeArtist');

// Função para lidar com o clique
arianaGrandeArtists.forEach((element) => {
    element.addEventListener('click', () => {
        homeSpotify.style.display = "none"
        // Mostra a seção com id "tabsSpotify"
        tabSpotify.style.display = 'block';

        // Ação nos elementos com a classe .eminem
        const arianaGrandeElements = document.querySelectorAll('.arianaGrande');
        arianaGrandeElements.forEach((arianaGrande) => {
            arianaGrande.style.display = "block"
        });
    });
});






    const player = document.getElementById('spotifyBody');
        let playerInitialized = false;

        // Função para iniciar o player
        function initializePlayer() {
            if (playerInitialized) return;  // Previne inicializações duplicadas

            playerInitialized = true; // Marca como inicializado
            // Lista de músicas com informações
    const tracks = [
        {
            title: "Just Don't Give a Fuck",
            artist: "Eminem",
            duration: "4:02",
            src: "https://www.dropbox.com/scl/fi/yqedhzcoogsiybo399zf2/Eminem-Just-Don-t-Give-a-Fuck-Lyrics-ezmp3.cc.mp3?rlkey=y42c5rf1zb0sikdardjj93t63&st=hlu3bbfc&dl=1",
            image: "https://m.media-amazon.com/images/I/815UbQWSslL._UF894,1000_QL80_.jpg",
        },
        {
            title: "Without Me",
            artist: "Eminem",
            duration: "4:50",
            src: "https://www.dropbox.com/scl/fi/upy06ogvb10yz8d17is9h/Without-Me-ezmp3.cc.mp3?rlkey=n608fi83dxto0zmrugldbs90r&st=71rw2in6&dl=1",
            image: "https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4",
        },
        {
            title: "Superman",
            artist: "Eminem, Dina Rae",
            duration: "5:50",
            src: "https://www.dropbox.com/scl/fi/894t8p9bsas4yf46hjh1u/Eminem-Superman-ezmp3.cc.mp3?rlkey=9urt2lvcqss69gmfqnvlte5xy&st=z5lb25ft&dl=1",
            image: "https://i.scdn.co/image/ab67616d0000b2736ca5c90113b30c3c43ffb8f4",
        },
        {
            title: "Stan",
            artist: "Eminem, Dido",
            duration: "6:44",
            src: "https://www.dropbox.com/scl/fi/nuvnf7446jq6wsjk8v98e/Eminem-Stan-Lyrics-ft.-Dido-ezmp3.cc.mp3?rlkey=lotf4ppnwatvc5c1rhmiids83&st=tuf08qcu&dl=1",
            image: "https://static.qobuz.com/images/covers/ca/cn/aeps1l79qcnca_600.jpg",
        },
        {
            title: "Gnat",
            artist: "Eminem",
            duration: "3:44",
            src: "https://www.dropbox.com/scl/fi/pa3sd0dnn475f96ln7cb1/Eminem-Gnat-Lyrics-ezmp3.cc.mp3?rlkey=229sqe5z2g98r1bivri8mewva&st=8kblzgfj&dl=1",
            image: "https://i.scdn.co/image/ab67616d0000b273b84b0516d901f95461bb5165",
        },
        {
            title: "The Way I Am",
            artist: "Eminem",
            duration: "4:53",
            src: "https://www.dropbox.com/scl/fi/n3gct1ak0ofv83u9agxkt/the-way-i-am.mp3?rlkey=8oybgglbviz3bk1sj7yol34gx&st=iuru5e5c&dl=1",
            image: "https://static.qobuz.com/images/covers/ca/cn/aeps1l79qcnca_600.jpg",
        },
    ];

    let currentTrackIndex = 0;
    const audio = document.getElementById('audio');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const trackImage = document.getElementById('track-image');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const trackList = document.getElementById('track-list');
    const volumeBar = document.getElementById('volume-bar');

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function loadTrack(index) {
        currentTrackIndex = index;
        const track = tracks[index];
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        trackImage.src = track.image;
        audio.src = track.src;
        audio.load();
    }

    function togglePlayPause() {
        let playIcon = document.getElementById("playIcon")
        if (audio.paused) {
            audio.play();
            // playPauseButton.textContent = '<i class="fa-solid fa-pause"></i>';
            // if (playIcon.className == "fa-solid fa-play") {
            //     playIcon.className = "fa-solid fa-pause"
            // }
        } else {
            audio.pause();
            // if (playIcon.className == "fa-solid fa-pause") {
            //     playIcon.className = "fa-solid fa-play"
            // }
        }
    }

    function playTrack(index) {
        let playIcon = document.getElementById("playIcon")
        loadTrack(index);
        audio.play();
        // if (playIcon.className == "fa-solid fa-play") {
        //         playIcon.className = "fa-solid fa-pause"
        //     }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function generateTrackList() {
        tracks.forEach((track, index) => {
            const trackWrapper = document.createElement('div');
            trackWrapper.classList.add('track-wrapper');
            trackWrapper.setAttribute('data-w-id', `track-${index}`);
    
            // Track Left Section
            const trackLeft = document.createElement('div');
            trackLeft.classList.add('track-left');
    
            const trackArtistDiv = document.createElement('div');
            trackArtistDiv.classList.add('track-artist');
    
            const trackArtistImage = document.createElement('img');
            trackArtistImage.src = track.image;
            trackArtistImage.alt = `${track.title} by ${track.artist}`;
            trackArtistImage.classList.add('track-artist-image');
            trackArtistDiv.appendChild(trackArtistImage);
    
            const trackNameWrapper = document.createElement('div');
            trackNameWrapper.classList.add('track-name-wrapper');
    
            const trackSongName = document.createElement('div');
            trackSongName.classList.add('track-song-name');
            trackSongName.textContent = track.title;
            trackNameWrapper.appendChild(trackSongName);
    
            const trackExplicit = document.createElement('div');
            trackExplicit.classList.add('track-explicit');
    
            const trackExplicitLabel = document.createElement('div');
            trackExplicitLabel.classList.add('track-explicit-label');
            trackExplicitLabel.textContent = track.explicit ? 'Explicit' : '';
            trackExplicit.appendChild(trackExplicitLabel);
    
            trackNameWrapper.appendChild(trackExplicit);
    
            trackLeft.appendChild(trackArtistDiv);
            trackLeft.appendChild(trackNameWrapper);
    
            // Track Right Section
            const trackRight = document.createElement('div');
            trackRight.classList.add('track-right');
    
            const trackDropdown = document.createElement('div');
            trackDropdown.classList.add('track-dropdown', 'w-dropdown');
    
            const dropdownToggle = document.createElement('div');
            dropdownToggle.classList.add('dropdown-toggle', 'w-dropdown-toggle');
    
            const dropdownIcon = document.createElement('img');
            dropdownIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef84ee54e67b7_ico-track-dropdown.svg';
            dropdownIcon.alt = '';
            dropdownIcon.classList.add('ico-track-dropdown');
            dropdownToggle.appendChild(dropdownIcon);
    
            const dropdownList = document.createElement('nav');
            dropdownList.classList.add('dropdown-list', 'hero-artist', 'track', 'w-dropdown-list');
    
            const dropdownOptions = [
                'Start Radio',
                'Save to your Liked Songs',
                'Add to Queue',
                'Add to Playlist',
                'Copy Song Link',
                'Open in Desktop app',
            ];
    
            dropdownOptions.forEach((option) => {
                const dropdownLink = document.createElement('a');
                dropdownLink.classList.add('dropdownlink', 'w-dropdown-link');
                dropdownLink.textContent = option;
                dropdownList.appendChild(dropdownLink);
            });
    
            trackDropdown.appendChild(dropdownToggle);
            trackDropdown.appendChild(dropdownList);
    
            const trackTime = document.createElement('div');
            trackTime.classList.add('track-time');
            trackTime.textContent = track.duration;
    
            trackRight.appendChild(trackDropdown);
            trackRight.appendChild(trackTime);
    
            // Track Showed Note
            const trackShowedNote = document.createElement('div');
            trackShowedNote.classList.add('track-showed', 'note');
    
            const trackNoteIcon = document.createElement('img');
            trackNoteIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef831884e6850_ico-track-note.svg';
            trackNoteIcon.alt = '';
            trackNoteIcon.classList.add('ico-track-note');
            trackShowedNote.appendChild(trackNoteIcon);
    
            // Track Hover
            const trackHover = document.createElement('div');
            trackHover.classList.add('track-hover');
    
            const trackPlayIcon = document.createElement('img');
            trackPlayIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef83ff74e67cb_track-ico-play.svg';
            trackPlayIcon.alt = '';
            trackPlayIcon.classList.add('ico-track-play');
            trackHover.appendChild(trackPlayIcon);
    
            // Assemble Track Wrapper
            trackWrapper.appendChild(trackLeft);
            trackWrapper.appendChild(trackRight);
            trackWrapper.appendChild(trackShowedNote);
            trackWrapper.appendChild(trackHover);
    
            // Add Click Event to Play the Track
            trackWrapper.addEventListener('click', () => playTrack(index));
    
            // Append to Track List
            trackList.appendChild(trackWrapper);
        });
    }
    

    // Atualiza a barra de progresso e o tempo
    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;
        currentTimeDisplay.textContent = formatTime(currentTime);
        durationDisplay.textContent = formatTime(duration);
    });

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100;
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${secs}`;
    }

    loadTrack(currentTrackIndex);
    generateTrackList();
            // Adicionar eventos aos botões de controle
            playPauseButton.addEventListener('click', togglePlayPause);
            prevButton.addEventListener('click', prevTrack);
            nextButton.addEventListener('click', nextTrack);
            
        }

        // Monitora a visibilidade do player e reinicia quando necessário
        const observePlayer = new MutationObserver(() => {
            const player = document.getElementById('eminemPanel');
            if (document.getElementById('eminemPanel') != null) {
                initializePlayer();
            } else {
                playerInitialized = false; // Permitir reinicialização ao reabrir
            }
        });

        // Observar mudanças no estilo de exibição do player
        observePlayer.observe(document.body, { attributes: true, subtree: true });


 // Espera até que o DOM esteja carregado
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os elementos .track-wrapper
    const trackWrappers = document.querySelectorAll('.track-wrapper');
  
    // Adiciona o evento de clique a cada .track-wrapper
    trackWrappers.forEach((wrapper) => {
      wrapper.addEventListener('click', () => {
        // Remove a classe .green de todos os .track-song-name
        document.querySelectorAll('.track-song-name').forEach((song) => {
          song.classList.remove('green');
        });
  
        // Adiciona a classe .green ao .track-song-name dentro do .track-wrapper clicado
        const songName = wrapper.querySelector('.track-song-name');
        if (songName) {
          songName.classList.add('green');
        }
      });
    });
  });
  
  // Seleciona o botão "Ver Mais"
const showMoreWrapper = document.querySelector('.showmore-wrapper');
// Seleciona todos os elementos com a classe "album" que possuem também a classe "hidden"
const hiddenAlbums = document.querySelectorAll('.album.hidden');
// Seleciona o texto dentro do botão
const showMoreText = document.querySelector('.showmore');

// Variável para controlar o estado do botão (exibindo ou escondendo)
let isShowingMore = false;

// Adiciona o evento de clique ao botão
showMoreWrapper.addEventListener('click', () => {
  if (!isShowingMore) {
    // Exibe apenas os álbuns que estão inicialmente escondidos
    hiddenAlbums.forEach(album => album.classList.remove('hidden'));
    // Muda o texto para "Ver Menos"
    showMoreText.textContent = 'Ver Menos';
    isShowingMore = true;
  } else {
    // Esconde novamente apenas os álbuns que estavam originalmente escondidos
    hiddenAlbums.forEach(album => album.classList.add('hidden'));
    // Muda o texto para "Ver Mais"
    showMoreText.textContent = 'Ver Mais';
    isShowingMore = false;
  }
});






const player11 = document.getElementById('taylorSwiftPlaylistSpotify');
        let playerInitialized11 = false;

        // Função para iniciar o player
        function initializePlayer11() {
            if (playerInitialized11) return;  // Previne inicializações duplicadas

            playerInitialized11 = true; // Marca como inicializado
            // Lista de músicas com informações
            const tracks = [
                {
                    title: "I Can Do It With a Broken Heart",
                    artist: "Taylor Swift",
                    duration: "3:38",
                    src: "https://www.dropbox.com/scl/fi/hy8mwb7aijd6h6uqmkvps/I-Can-Do-It-With-a-Broken-Heart.mp3?rlkey=3n68gtzcov96nwh9i99ox3ezl&st=uk8kc67y&dl=1",
                    image: "https://www.dropbox.com/scl/fi/lyqwhuv2mtriumou9gsn5/The_Tortured_Poets_Department.jpg?rlkey=y9hmrjsdh8qmdused8f45umvx&st=4a3qypqn&raw=1",
                },
                {
                    title: "august",
                    artist: "Taylor Swift",
                    duration: "4:21",
                    src: "https://www.dropbox.com/scl/fi/7omcwewl8efzubfactfo1/august-Audio-Taylor-Swift.mp3?rlkey=cq5tot3ejb4ccas7c2vdw17d0&st=d0ej6z7b&dl=1",
                    image: "https://www.dropbox.com/scl/fi/ykv4jqd2cf9nd671zl9p5/0x1900-000000-80-0-0.jpg?rlkey=omurwpvetqd43aciqfa1et1p4&st=o5c34ril&raw=1",
                },
                {
                    title: "So High School",
                    artist: "Taylor Swift",
                    duration: "3:48",
                    src: "https://www.dropbox.com/scl/fi/e6yhd11xjbfiua9wn0tdl/So-High-School-Audio-Taylor-Swift.mp3?rlkey=az851q17go59arnopu28bcojw&st=sdgybs1a&dl=1",
                    image: "https://www.dropbox.com/scl/fi/btsmgztefiza3qs3k7762/ab67616d0000b2738ecc33f195df6aa257c39eaa.jpg?rlkey=8x7oqiccuvzm16mydvqsv0em9&st=tuimnn6x&raw=1",
                },
                {
                    title: "Daylight",
                    artist: "Taylor Swift",
                    duration: "4:53",
                    src: "https://www.dropbox.com/scl/fi/4n1opc90573ug3c9hfcs7/Taylor-Swift-Daylight-Official-Audio.mp3?rlkey=q6jg6risrkbvsc6f4nd7z9e7j&st=qni36ju2&dl=1",
                    image: "https://www.dropbox.com/scl/fi/epyck9ziluq26xjuz93c5/Capa_de_Lover_por_Taylor_Swift_-2019.png?rlkey=2yurix9p4mr099cd74yehlk16&st=pa74psvd&raw=1",
                },
                {
                    title: "cardigan",
                    artist: "Taylor Swift",
                    duration: "3:59",
                    src: "https://www.dropbox.com/scl/fi/nu2lfbbkca90tfmgfbzqb/cardigan-Audio-Taylor-Swift.mp3?rlkey=s3x7q01kya2m4ccnvltt492a8&st=rnmf2g8q&dl=1",
                    image: "https://www.dropbox.com/scl/fi/ykv4jqd2cf9nd671zl9p5/0x1900-000000-80-0-0.jpg?rlkey=omurwpvetqd43aciqfa1et1p4&st=o5c34ril&raw=1",
                },
                {
                    title: "Cruel Summer",
                    artist: "Taylor Swift",
                    duration: "2:58",
                    src: "https://www.dropbox.com/scl/fi/p97xntz4x42wth7439d5i/Taylor-Swift-Cruel-Summer-Official-Audio.mp3?rlkey=m6z9tk2n98d8cjs9rrfym7ko6&st=d9c3dyc4&dl=1",
                    image: "https://www.dropbox.com/scl/fi/epyck9ziluq26xjuz93c5/Capa_de_Lover_por_Taylor_Swift_-2019.png?rlkey=2yurix9p4mr099cd74yehlk16&st=pa74psvd&raw=1",
                },
                {
                    title: "dorothea",
                    artist: "Taylor Swift",
                    duration: "3:45",
                    src: "https://www.dropbox.com/scl/fi/ckkp6txdpztmj9k2zrcsr/dorothea-Audio-Taylor-Swift.mp3?rlkey=0yyvv6por22ybpa4o1i3aoiov&st=4u74y5nf&dl=1",
                    image: "https://www.dropbox.com/scl/fi/dbz0p9xg1bn1ht4i1k6co/1200x1200bb.jpg?rlkey=bihz63incy4a0wliw1q9sg2a1&st=2wms7ynn&raw=1",
                },
                {
                    title: "End Game",
                    artist: "Taylor Swift, Ed Sheeran, Future",
                    duration: "4:04",
                    src: "https://www.dropbox.com/scl/fi/1rfn470gz6kon69j3pmuv/Taylor-Swift-End-Game-ft.-Ed-Sheeran-Future-Audio.mp3?rlkey=4nwhj58lzh7g68cic2anx275j&st=iw093uoj&dl=1",
                    image: "https://www.dropbox.com/scl/fi/e0dmptn1p5sjohdt3atz7/Taylor_Swift_-_Reputation.png?rlkey=6sk4eg3eig6r9q83tbrfwzweq&st=cin2orm2&raw=1",
                },
                {
                    title: "Picture To Burn",
                    artist: "Taylor Swift",
                    duration: "2:53",
                    src: "https://www.dropbox.com/scl/fi/yoz3xzzlf8xondiexi0v5/Taylor-Swift-Picture-to-burn-Audio-Official.mp3?rlkey=qzp03olyf51gnt7d0zn2v22c8&st=6jyhuwkx&dl=1",
                    image: "https://www.dropbox.com/scl/fi/hfk34w41m447nf8owleao/ab67616d0000b273c909d4e47de2ab0636f46d64.jpg?rlkey=fb712yz2tbu40i22yzq9946ne&st=s4zukt52&raw=1",
                },
                {
                    title: "Sparks Fly (Taylor's Version)",
                    artist: "Taylor Swift",
                    duration: "4:21",
                    src: "https://www.dropbox.com/scl/fi/lda2ksngfwjp5r8j99vj8/Sparks-Fly-Taylor-s-Version-Audio-Taylor-Swift.mp3?rlkey=eb9afjifeqn8bpm13qhinaf7q&st=fliagr9h&dl=1",
                    image: "https://www.dropbox.com/scl/fi/opchybfm5o3lh5cctakln/Speak_Now_-Taylor-s_Version.png?rlkey=hra4pvb8jplj4mi19buxlcbic&st=y2s08ct3&raw=1",
                },
            ];

    let currentTrackIndex = 0;
    const audio = document.getElementById('audio');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const trackImage = document.getElementById('track-image');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const chillPanel = document.getElementById('chillPanel');
    const volumeBar = document.getElementById('volume-bar');
    const tracksTaylor = document.getElementById('tracksTaylor');

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function loadTrack(index) {
        currentTrackIndex = index;
        const track = tracks[index];
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        trackImage.src = track.image;
        audio.src = track.src;
        audio.load();
    }

    function togglePlayPause() {
        let playIcon = document.getElementById("playIcon")
        if (audio.paused) {
            audio.play();
            // playPauseButton.textContent = '<i class="fa-solid fa-pause"></i>';
            // if (playIcon.className == "fa-solid fa-play") {
            //     playIcon.className = "fa-solid fa-pause"
            // }
        } else {
            audio.pause();
            // if (playIcon.className == "fa-solid fa-pause") {
            //     playIcon.className = "fa-solid fa-play"
            // }
        }
    }

    function playTrack(index) {
        let playIcon = document.getElementById("playIcon")
        loadTrack(index);
        audio.play();
        // if (playIcon.className == "fa-solid fa-play") {
        //         playIcon.className = "fa-solid fa-pause"
        //     }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function generateTrackList11() {
        tracks.forEach((track, index) => {
            const trackWrapper = document.createElement('div');
            trackWrapper.classList.add('track-wrapper');
            trackWrapper.setAttribute('data-w-id', `track-${index}`);
    
            // Track Left Section
            const trackLeft = document.createElement('div');
            trackLeft.classList.add('track-left');
    
            const trackArtistDiv = document.createElement('div');
            trackArtistDiv.classList.add('track-artist');
    
            const trackArtistImage = document.createElement('img');
            trackArtistImage.src = track.image;
            trackArtistImage.alt = `${track.title} by ${track.artist}`;
            trackArtistImage.classList.add('track-artist-image');
            trackArtistDiv.appendChild(trackArtistImage);
    
            const trackNameWrapper = document.createElement('div');
            trackNameWrapper.classList.add('track-name-wrapper');
    
            const trackSongName = document.createElement('div');
            trackSongName.classList.add('track-song-name');
            trackSongName.textContent = track.title;
            trackNameWrapper.appendChild(trackSongName);
    
            const trackExplicit = document.createElement('div');
            trackExplicit.classList.add('track-explicit');
    
            const trackExplicitLabel = document.createElement('div');
            trackExplicitLabel.classList.add('track-explicit-label');
            trackExplicitLabel.textContent = track.explicit ? 'Explicit' : '';
            trackExplicit.appendChild(trackExplicitLabel);
    
            trackNameWrapper.appendChild(trackExplicit);
    
            trackLeft.appendChild(trackArtistDiv);
            trackLeft.appendChild(trackNameWrapper);
    
            // Track Right Section
            const trackRight = document.createElement('div');
            trackRight.classList.add('track-right');
    
            const trackDropdown = document.createElement('div');
            trackDropdown.classList.add('track-dropdown', 'w-dropdown');
    
            const dropdownToggle = document.createElement('div');
            dropdownToggle.classList.add('dropdown-toggle', 'w-dropdown-toggle');
    
            const dropdownIcon = document.createElement('img');
            dropdownIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef84ee54e67b7_ico-track-dropdown.svg';
            dropdownIcon.alt = '';
            dropdownIcon.classList.add('ico-track-dropdown');
            dropdownToggle.appendChild(dropdownIcon);
    
            const dropdownList = document.createElement('nav');
            dropdownList.classList.add('dropdown-list', 'hero-artist', 'track', 'w-dropdown-list');
    
            const dropdownOptions = [
                'Start Radio',
                'Save to your Liked Songs',
                'Add to Queue',
                'Add to Playlist',
                'Copy Song Link',
                'Open in Desktop app',
            ];
    
            dropdownOptions.forEach((option) => {
                const dropdownLink = document.createElement('a');
                dropdownLink.classList.add('dropdownlink', 'w-dropdown-link');
                dropdownLink.textContent = option;
                dropdownList.appendChild(dropdownLink);
            });
    
            trackDropdown.appendChild(dropdownToggle);
            trackDropdown.appendChild(dropdownList);
    
            const trackTime = document.createElement('div');
            trackTime.classList.add('track-time');
            trackTime.textContent = track.duration;
    
            trackRight.appendChild(trackDropdown);
            trackRight.appendChild(trackTime);
    
            // Track Showed Note
            const trackShowedNote = document.createElement('div');
            trackShowedNote.classList.add('track-showed', 'note');
    
            const trackNoteIcon = document.createElement('img');
            trackNoteIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef831884e6850_ico-track-note.svg';
            trackNoteIcon.alt = '';
            trackNoteIcon.classList.add('ico-track-note');
            trackShowedNote.appendChild(trackNoteIcon);
    
            // Track Hover
            const trackHover = document.createElement('div');
            trackHover.classList.add('track-hover');
    
            const trackPlayIcon = document.createElement('img');
            trackPlayIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef83ff74e67cb_track-ico-play.svg';
            trackPlayIcon.alt = '';
            trackPlayIcon.classList.add('ico-track-play');
            trackHover.appendChild(trackPlayIcon);
    
            // Assemble Track Wrapper
            trackWrapper.appendChild(trackLeft);
            trackWrapper.appendChild(trackRight);
            trackWrapper.appendChild(trackShowedNote);
            trackWrapper.appendChild(trackHover);
    
            // Add Click Event to Play the Track
            trackWrapper.addEventListener('click', () => playTrack(index));
    
            // Append to Track List
            tracksTaylor.appendChild(trackWrapper);
        });
    }

    loadTrack(currentTrackIndex);
    generateTrackList11();

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100;
    });
        }

        // Monitora a visibilidade do player e reinicia quando necessário
        const observePlayer11 = new MutationObserver(() => {
            const player = document.getElementById('taylorSwiftPanel');
            if (document.getElementById('taylorSwiftPanel') != null) {
                initializePlayer11();
            } else {
                playerInitialized11 = false; // Permitir reinicialização ao reabrir
            }
        });

        // Observar mudanças no estilo de exibição do player
        observePlayer11.observe(document.body, { attributes: true, subtree: true });












        const player12 = document.getElementById('arianaGrandePlaylistSpotify');
        let playerInitialized12 = false;

        // Função para iniciar o player
        function initializePlayer12() {
            if (playerInitialized12) return;  // Previne inicializações duplicadas

            playerInitialized12 = true; // Marca como inicializado
            // Lista de músicas com informações
            const tracks = [
                {
                    title: "Into You",
                    artist: "Ariana Grande",
                    duration: "4:04",
                    src: "https://www.dropbox.com/scl/fi/6m14r8t9rmad4gmc3uew9/Ariana-Grande-Into-You-Official-Audio.mp3?rlkey=0gm0jglggr9hf9x8k623g7xei&st=kgs6f9mh&dl=1",
                    image: "https://www.dropbox.com/scl/fi/kpgrgot712zgtmktwo0a6/Ariana_Grande_-_Into_You.png?rlkey=qjqq2rd0qxpq8t1xdhrn1ynfn&st=9nq6xxd2&raw=1",
                },
                {
                    title: "no tears left to cry",
                    artist: "Ariana Grande",
                    duration: "3:25",
                    src: "https://www.dropbox.com/scl/fi/bl7t609szyv6ppbo29wi1/Ariana-Grande-No-Tears-Left-To-Cry-Audio.mp3?rlkey=31rcryzeaozamlgvy4g8d0660&st=sx0h35fo&dl=1",
                    image: "https://www.dropbox.com/scl/fi/1h0jf2cd4en0zu9z0nchx/ab67616d0000b273c3af0c2355c24ed7023cd394.jpg?rlkey=k5vd1g947zokljg0vp3m7d3gw&st=1t0wgw5y&raw=1",
                },
                {
                    title: "needy",
                    artist: "Ariana Grande",
                    duration: "2:51",
                    src: "https://www.dropbox.com/scl/fi/scm58pbflhdm31t4fl4rl/Ariana-Grande-needy-Official-Audio.mp3?rlkey=jqa84425yks9iuf0aqatm0sad&st=vjmds341&dl=1",
                    image: "https://www.dropbox.com/scl/fi/vbwvl7r7kz2b3y6qv8usb/ab67616d00001e0256ac7b86e090f307e218e9c8.jpg?rlkey=ljzzl8agwo3ly2yyjyb61qy0p&st=ijqiz1br&raw=1",
                },
                {
                    title: "thank u, next",
                    artist: "Ariana Grande",
                    duration: "3:27",
                    src: "https://www.dropbox.com/scl/fi/ax6l60dgjmj43pmxqpqcr/Ariana-Grande-thank-u-next-audio.mp3?rlkey=bgfa5443bh61efpzugvmlbrq8&st=icxz18kh&dl=1",
                    image: "https://www.dropbox.com/scl/fi/vbwvl7r7kz2b3y6qv8usb/ab67616d00001e0256ac7b86e090f307e218e9c8.jpg?rlkey=ljzzl8agwo3ly2yyjyb61qy0p&st=ijqiz1br&raw=1",
                },
                {
                    title: "pov",
                    artist: "Ariana Grande",
                    duration: "3:21",
                    src: "https://www.dropbox.com/scl/fi/pu2dle4log757hr82lvkj/Ariana-Grande-pov-official-audio.mp3?rlkey=so1hiez521gwkssk32jgjoqrc&st=zlxdc4xn&dl=1",
                    image: "https://www.dropbox.com/scl/fi/2axhmc1151dend58znmci/ab67616d0000b2735ef878a782c987d38d82b605.jpg?rlkey=myeuyo4xwi4gwq1wpvrs96y6e&st=hv33l9xx&raw=1",
                },
                {
                    title: "obvious",
                    artist: "Ariana Grande",
                    duration: "2:26",
                    src: "https://www.dropbox.com/scl/fi/v6j0onepf1sgh64v7e4gv/Ariana-Grande-obvious-official-audio.mp3?rlkey=4zno8hs9erwqf9jnflxaujuoa&st=n00670ep&dl=1",
                    image: "https://www.dropbox.com/scl/fi/2axhmc1151dend58znmci/ab67616d0000b2735ef878a782c987d38d82b605.jpg?rlkey=myeuyo4xwi4gwq1wpvrs96y6e&st=hv33l9xx&raw=1",
                },
                {
                    title: "bye",
                    artist: "Ariana Grande",
                    duration: "2:44",
                    src: "https://www.dropbox.com/scl/fi/5zwoof1artafojx47htj2/Ariana-Grande-bye-lyric-visualizer.mp3?rlkey=macm6y3sqmc1yl03ez1ivj2s0&st=b0qyv14k&dl=1",
                    image: "https://www.dropbox.com/scl/fi/icx7z6oy03u37rbekolkd/images-1.jpg?rlkey=8iu8v72v129k960r4ieekvtb4&st=copzc09u&raw=1",
                },
                {
                    title: "eternal sunshine",
                    artist: "Ariana Grande",
                    duration: "3:30",
                    src: "https://www.dropbox.com/scl/fi/ol97t7zowhy6lewd4siq9/Ariana-Grande-eternal-sunshine-lyric-visualizer.mp3?rlkey=01pkazcxiagyl6ai6ni7t12x9&st=xdiv2p35&dl=1",
                    image: "https://www.dropbox.com/scl/fi/icx7z6oy03u37rbekolkd/images-1.jpg?rlkey=8iu8v72v129k960r4ieekvtb4&st=copzc09u&raw=1",
                },
                {
                    title: "true story",
                    artist: "Ariana Grande",
                    duration: "2:43",
                    src: "https://www.dropbox.com/scl/fi/h928bmkumuhwxodndcklj/Ariana-Grande-true-story-lyric-visualizer.mp3?rlkey=agxuhe9ykmc3y0sckbgufiorj&st=3ecsgjpl&dl=1",
                    image: "https://www.dropbox.com/scl/fi/icx7z6oy03u37rbekolkd/images-1.jpg?rlkey=8iu8v72v129k960r4ieekvtb4&st=copzc09u&raw=1",
                },
                {
                    title: "the boy is mine",
                    artist: "Ariana Grande",
                    duration: "2:53",
                    src: "https://www.dropbox.com/scl/fi/v49529pw16freynnapc81/Ariana-Grande-the-boy-is-mine-lyric-visualizer.mp3?rlkey=n6vjujtqdwuyh2q55htv8u01j&st=g6h2603k&dl=1",
                    image: "https://www.dropbox.com/scl/fi/icx7z6oy03u37rbekolkd/images-1.jpg?rlkey=8iu8v72v129k960r4ieekvtb4&st=copzc09u&raw=1",
                },
            ];

    let currentTrackIndex = 0;
    const audio = document.getElementById('audio');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const trackImage = document.getElementById('track-image');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const chillPanel = document.getElementById('chillPanel');
    const volumeBar = document.getElementById('volume-bar');
    const tracksArianaGrande = document.getElementById('tracksArianaGrande');

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function loadTrack(index) {
        currentTrackIndex = index;
        const track = tracks[index];
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        trackImage.src = track.image;
        audio.src = track.src;
        audio.load();
    }

    function togglePlayPause() {
        let playIcon = document.getElementById("playIcon")
        if (audio.paused) {
            audio.play();
            // playPauseButton.textContent = '<i class="fa-solid fa-pause"></i>';
            // if (playIcon.className == "fa-solid fa-play") {
            //     playIcon.className = "fa-solid fa-pause"
            // }
        } else {
            audio.pause();
            // if (playIcon.className == "fa-solid fa-pause") {
            //     playIcon.className = "fa-solid fa-play"
            // }
        }
    }

    function playTrack(index) {
        let playIcon = document.getElementById("playIcon")
        loadTrack(index);
        audio.play();
        // if (playIcon.className == "fa-solid fa-play") {
        //         playIcon.className = "fa-solid fa-pause"
        //     }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function generateTrackList12() {
        tracks.forEach((track, index) => {
            const trackWrapper = document.createElement('div');
            trackWrapper.classList.add('track-wrapper');
            trackWrapper.setAttribute('data-w-id', `track-${index}`);
    
            // Track Left Section
            const trackLeft = document.createElement('div');
            trackLeft.classList.add('track-left');
    
            const trackArtistDiv = document.createElement('div');
            trackArtistDiv.classList.add('track-artist');
    
            const trackArtistImage = document.createElement('img');
            trackArtistImage.src = track.image;
            trackArtistImage.alt = `${track.title} by ${track.artist}`;
            trackArtistImage.classList.add('track-artist-image');
            trackArtistDiv.appendChild(trackArtistImage);
    
            const trackNameWrapper = document.createElement('div');
            trackNameWrapper.classList.add('track-name-wrapper');
    
            const trackSongName = document.createElement('div');
            trackSongName.classList.add('track-song-name');
            trackSongName.textContent = track.title;
            trackNameWrapper.appendChild(trackSongName);
    
            const trackExplicit = document.createElement('div');
            trackExplicit.classList.add('track-explicit');
    
            const trackExplicitLabel = document.createElement('div');
            trackExplicitLabel.classList.add('track-explicit-label');
            trackExplicitLabel.textContent = track.explicit ? 'Explicit' : '';
            trackExplicit.appendChild(trackExplicitLabel);
    
            trackNameWrapper.appendChild(trackExplicit);
    
            trackLeft.appendChild(trackArtistDiv);
            trackLeft.appendChild(trackNameWrapper);
    
            // Track Right Section
            const trackRight = document.createElement('div');
            trackRight.classList.add('track-right');
    
            const trackDropdown = document.createElement('div');
            trackDropdown.classList.add('track-dropdown', 'w-dropdown');
    
            const dropdownToggle = document.createElement('div');
            dropdownToggle.classList.add('dropdown-toggle', 'w-dropdown-toggle');
    
            const dropdownIcon = document.createElement('img');
            dropdownIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef84ee54e67b7_ico-track-dropdown.svg';
            dropdownIcon.alt = '';
            dropdownIcon.classList.add('ico-track-dropdown');
            dropdownToggle.appendChild(dropdownIcon);
    
            const dropdownList = document.createElement('nav');
            dropdownList.classList.add('dropdown-list', 'hero-artist', 'track', 'w-dropdown-list');
    
            const dropdownOptions = [
                'Start Radio',
                'Save to your Liked Songs',
                'Add to Queue',
                'Add to Playlist',
                'Copy Song Link',
                'Open in Desktop app',
            ];
    
            dropdownOptions.forEach((option) => {
                const dropdownLink = document.createElement('a');
                dropdownLink.classList.add('dropdownlink', 'w-dropdown-link');
                dropdownLink.textContent = option;
                dropdownList.appendChild(dropdownLink);
            });
    
            trackDropdown.appendChild(dropdownToggle);
            trackDropdown.appendChild(dropdownList);
    
            const trackTime = document.createElement('div');
            trackTime.classList.add('track-time');
            trackTime.textContent = track.duration;
    
            trackRight.appendChild(trackDropdown);
            trackRight.appendChild(trackTime);
    
            // Track Showed Note
            const trackShowedNote = document.createElement('div');
            trackShowedNote.classList.add('track-showed', 'note');
    
            const trackNoteIcon = document.createElement('img');
            trackNoteIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef831884e6850_ico-track-note.svg';
            trackNoteIcon.alt = '';
            trackNoteIcon.classList.add('ico-track-note');
            trackShowedNote.appendChild(trackNoteIcon);
    
            // Track Hover
            const trackHover = document.createElement('div');
            trackHover.classList.add('track-hover');
    
            const trackPlayIcon = document.createElement('img');
            trackPlayIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef83ff74e67cb_track-ico-play.svg';
            trackPlayIcon.alt = '';
            trackPlayIcon.classList.add('ico-track-play');
            trackHover.appendChild(trackPlayIcon);
    
            // Assemble Track Wrapper
            trackWrapper.appendChild(trackLeft);
            trackWrapper.appendChild(trackRight);
            trackWrapper.appendChild(trackShowedNote);
            trackWrapper.appendChild(trackHover);
    
            // Add Click Event to Play the Track
            trackWrapper.addEventListener('click', () => playTrack(index));
    
            // Append to Track List
            tracksArianaGrande.appendChild(trackWrapper);
        });
    }

    loadTrack(currentTrackIndex);
    generateTrackList12();

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100;
    });
        }

        // Monitora a visibilidade do player e reinicia quando necessário
        const observePlayer12 = new MutationObserver(() => {
            const player = document.getElementById('arianaGrandePanel');
            if (document.getElementById('arianaGrandePanel') != null) {
                initializePlayer12();
            } else {
                playerInitialized12 = false; // Permitir reinicialização ao reabrir
            }
        });

        // Observar mudanças no estilo de exibição do player
        observePlayer12.observe(document.body, { attributes: true, subtree: true });






















const player2 = document.getElementById('mtbmbsbPlaylistSpotify');
        let playerInitialized2 = false;

        // Função para iniciar o player
        function initializePlayer2() {
            if (playerInitialized2) return;  // Previne inicializações duplicadas

            playerInitialized2 = true; // Marca como inicializado
            // Lista de músicas com informações
    const tracks = [
        {
            title: "Alfred - Intro",
            artist: "Eminem",
            duration: "0:17",
            src: "https://www.dropbox.com/scl/fi/xm75hwij9bacy72m11fbe/Alfred-Intro.mp3?rlkey=qiwhosjzr4g72kcclbfk4rsmn&st=8w78d27m&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Black Magic (feat. Skylar Grey)",
            artist: "Eminem, Skylar Grey",
            duration: "2:54",
            src: "https://www.dropbox.com/scl/fi/bvizrdzqjjbfhoplrojxz/Black-Magic-feat.-Skylar-Grey-Official-Audio.mp3?rlkey=ilssrmqykr2k2laxdzbex3gep&st=746y275h&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Alfred's Theme",
            artist: "Eminem",
            duration: "5:39",
            src: "https://www.dropbox.com/scl/fi/vadkxazpcupiftm22y0r7/Alfred-s-Theme-Official-Audio.mp3?rlkey=57ub4xgvuqvyqo7rav3h5exho&st=6fg6hibh&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Tone Deaf",
            artist: "Eminem",
            duration: "4:50",
            src: "https://www.dropbox.com/scl/fi/mdrimyczsy2eunzn3e9pa/Tone-Deaf-Official-Audio.mp3?rlkey=gijdhdg2adenaakz2ha2zco74&st=hix1ozck&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Book of Rhymes (feat. DJ Premier)",
            artist: "Eminem, DJ Premier",
            duration: "4:49",
            src: "https://www.dropbox.com/scl/fi/6q5u0stgjst2p89acgc0g/Book-of-Rhymes-feat.-DJ-Premier-Official-Audio.mp3?rlkey=puavt2a9qtnfuqngdzmcws7qh&st=hr7n2bml&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Favorite Bitch (feat. Ty Dolla $ign)",
            artist: "Eminem, Ty Dolla $ign",
            duration: "3:56",
            src: "https://www.dropbox.com/scl/fi/2zi5rd8jdhg8gznspvix4/Favorite-Bitch-feat.-Ty-Dolla-ign-Official-Audio.mp3?rlkey=1n127c3vcz7dreb0q8yjf0mmv&st=fjk4uwx0&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Gnat",
            artist: "Eminem",
            duration: "3:44",
            src: "https://www.dropbox.com/scl/fi/pa3sd0dnn475f96ln7cb1/Eminem-Gnat-Lyrics-ezmp3.cc.mp3?rlkey=229sqe5z2g98r1bivri8mewva&st=8kblzgfj&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "She Loves Me",
            artist: "Eminem",
            duration: "3:24",
            src: "https://www.dropbox.com/scl/fi/2xkrz4udpw8erl1k161pa/She-Loves-Me-Official-Audio.mp3?rlkey=nmntlmj2ejsaaafgenq247nnb&st=3c7y18r4&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Killer",
            artist: "Eminem",
            duration: "3:15",
            src: "https://www.dropbox.com/scl/fi/19emlm5lvso63fiqn2jat/Killer-Official-Audio.mp3?rlkey=2jx51zk6r3a7sukjo8d0lthkt&st=kh9exbs9&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Zeus (feat. White Gold)",
            artist: "Eminem, White Gold",
            duration: "3:50",
            src: "https://www.dropbox.com/scl/fi/ghjv0womwsl2yas0gqg3e/Zeus-feat.-White-Gold-Official-Audio.mp3?rlkey=daz8jbfxavs97u9bzmtmfzgnk&st=9r6lff8f&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Discombobulated",
            artist: "Eminem",
            duration: "4:12",
            src: "https://www.dropbox.com/scl/fi/baq0wtbfscdm6534y9nda/Discombobulated-Official-Audio.mp3?rlkey=pf8nvo7ld0dancp2iqmlulbpu&st=nrr2ghb8&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Unaccommodating (feat. Young M.A)",
            artist: "Eminem, Young M.A",
            duration: "3:36",
            src: "https://www.dropbox.com/scl/fi/c52jb1p7dprvuxwwjmvx5/Unaccommodating-feat.-Young-M.A-Official-Audio.mp3?rlkey=sm7u7qdhbovoyq71njjadxvvf&st=2etvvrw9&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Those Kinda Nights (feat. Ed Sheeran)",
            artist: "Eminem, Ed Sheeran",
            duration: "2:57",
            src: "https://www.dropbox.com/scl/fi/2zj7s94y4mcj62cuhi3r0/Those-Kinda-Nights-feat.-Ed-Sheeran-Official-Audio.mp3?rlkey=ravmjrp2he14ojojacg60s3xk&st=5ai4a34f&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Godzilla (feat. Juice WRLD)",
            artist: "Eminem, Juice WRLD",
            duration: "3:30",
            src: "https://www.dropbox.com/scl/fi/558terxjwymj10ppx6etp/Godzilla-feat.-Juice-WRLD-Official-Audio.mp3?rlkey=dk1814hy28i25mk7l2w8bvc3y&st=zf3fh43p&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: `Yah Yah (feat. Roye Da 5'9", Black Tought, Q-Tip & Denaun`,
            artist: `Eminem, Roye Da 5'9", Black Tought, Q-Tip & Denaun`,
            duration: "4:46",
            src: "https://www.dropbox.com/scl/fi/bjytodu9i1kck3s9em9g2/Yah-Yah-feat.-Royce-Da-5-9-Black-Thought-Q-Tip-Denaun-Official-Audio.mp3?rlkey=9043i7s1typacgbbc1h1359nk&st=qmzxkz4c&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Marsh",
            artist: "Eminem",
            duration: "3:20",
            src: "https://www.dropbox.com/scl/fi/8nwvkqvlefhaduullu17a/Marsh-Official-Audio.mp3?rlkey=jwfxgzcsoxiynq7en6b9r3qqu&st=1vdki9sc&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Never Love Again",
            artist: "Eminem",
            duration: "2:57",
            src: "https://www.dropbox.com/scl/fi/taz3afjdba13m1ravypof/Never-Love-Again-Official-Audio.mp3?rlkey=ttd7nemar16k2hmfsucujyzqf&st=kzlsoh6n&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Little Engine",
            artist: "Eminem",
            duration: "2:57",
            src: "https://www.dropbox.com/scl/fi/9krgn1bky9bc2sm9rvdkq/Little-Engine-Official-Audio.mp3?rlkey=x2zud25malo5dup42hog1dt1e&st=22omcthb&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "Lock It Up (feat. Anderson .Paak",
            artist: "Eminem, Anderson .Paak",
            duration: "2:50",
            src: "https://www.dropbox.com/scl/fi/vfoxjm5nna4rc5z7bxozm/Lock-It-Up-feat.-Anderson-.Paak-Official-Audio.mp3?rlkey=l94ei96w8ph1w7n6hecqhi12q&st=6ktavsda&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
        {
            title: "No Regrets (feat. Don Toliver)",
            artist: "Eminem, Don Toliver",
            duration: "3:20",
            src: "https://www.dropbox.com/scl/fi/46kd2ivszayg2fptstq0f/No-Regrets-feat.-Don-Toliver-Official-Audio.mp3?rlkey=iwd65catce72itrh3zz66fgsn&st=upib15i9&dl=1",
            image: "https://www.dropbox.com/scl/fi/6d2enwliyfd5qd9cklq9w/mtbmb.jpg?rlkey=p5kh5i665vj8ibnljntenb1cl&st=nkij3jl1&raw=1",
        },
    ];

    let currentTrackIndex = 0;
    const audio = document.getElementById('audio');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const trackImage = document.getElementById('track-image');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const chillPanel = document.getElementById('chillPanel');
    const volumeBar = document.getElementById('volume-bar');
    const mtbmbsbPanel = document.getElementById('mtbmbsbPanel');

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function loadTrack(index) {
        currentTrackIndex = index;
        const track = tracks[index];
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        trackImage.src = track.image;
        audio.src = track.src;
        audio.load();
    }

    function togglePlayPause() {
        let playIcon = document.getElementById("playIcon")
        if (audio.paused) {
            audio.play();
            // playPauseButton.textContent = '<i class="fa-solid fa-pause"></i>';
            // if (playIcon.className == "fa-solid fa-play") {
            //     playIcon.className = "fa-solid fa-pause"
            // }
        } else {
            audio.pause();
            // if (playIcon.className == "fa-solid fa-pause") {
            //     playIcon.className = "fa-solid fa-play"
            // }
        }
    }

    function playTrack(index) {
        let playIcon = document.getElementById("playIcon")
        loadTrack(index);
        audio.play();
        // if (playIcon.className == "fa-solid fa-play") {
        //         playIcon.className = "fa-solid fa-pause"
        //     }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function generateTrackList2() {
        tracks.forEach((track, index) => {
            const trackWrapper = document.createElement('div');
            trackWrapper.classList.add('track-wrapper');
            trackWrapper.setAttribute('data-w-id', `track-${index}`);
    
            // Track Left Section
            const trackLeft = document.createElement('div');
            trackLeft.classList.add('track-left');
    
            const trackArtistDiv = document.createElement('div');
            trackArtistDiv.classList.add('track-artist');
    
            const trackArtistImage = document.createElement('img');
            trackArtistImage.src = track.image;
            trackArtistImage.alt = `${track.title} by ${track.artist}`;
            trackArtistImage.classList.add('track-artist-image');
            trackArtistDiv.appendChild(trackArtistImage);
    
            const trackNameWrapper = document.createElement('div');
            trackNameWrapper.classList.add('track-name-wrapper');
    
            const trackSongName = document.createElement('div');
            trackSongName.classList.add('track-song-name');
            trackSongName.textContent = track.title;
            trackNameWrapper.appendChild(trackSongName);
    
            const trackExplicit = document.createElement('div');
            trackExplicit.classList.add('track-explicit');
    
            const trackExplicitLabel = document.createElement('div');
            trackExplicitLabel.classList.add('track-explicit-label');
            trackExplicitLabel.textContent = track.explicit ? 'Explicit' : '';
            trackExplicit.appendChild(trackExplicitLabel);
    
            trackNameWrapper.appendChild(trackExplicit);
    
            trackLeft.appendChild(trackArtistDiv);
            trackLeft.appendChild(trackNameWrapper);
    
            // Track Right Section
            const trackRight = document.createElement('div');
            trackRight.classList.add('track-right');
    
            const trackDropdown = document.createElement('div');
            trackDropdown.classList.add('track-dropdown', 'w-dropdown');
    
            const dropdownToggle = document.createElement('div');
            dropdownToggle.classList.add('dropdown-toggle', 'w-dropdown-toggle');
    
            const dropdownIcon = document.createElement('img');
            dropdownIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef84ee54e67b7_ico-track-dropdown.svg';
            dropdownIcon.alt = '';
            dropdownIcon.classList.add('ico-track-dropdown');
            dropdownToggle.appendChild(dropdownIcon);
    
            const dropdownList = document.createElement('nav');
            dropdownList.classList.add('dropdown-list', 'hero-artist', 'track', 'w-dropdown-list');
    
            const dropdownOptions = [
                'Start Radio',
                'Save to your Liked Songs',
                'Add to Queue',
                'Add to Playlist',
                'Copy Song Link',
                'Open in Desktop app',
            ];
    
            dropdownOptions.forEach((option) => {
                const dropdownLink = document.createElement('a');
                dropdownLink.classList.add('dropdownlink', 'w-dropdown-link');
                dropdownLink.textContent = option;
                dropdownList.appendChild(dropdownLink);
            });
    
            trackDropdown.appendChild(dropdownToggle);
            trackDropdown.appendChild(dropdownList);
    
            const trackTime = document.createElement('div');
            trackTime.classList.add('track-time');
            trackTime.textContent = track.duration;
    
            trackRight.appendChild(trackDropdown);
            trackRight.appendChild(trackTime);
    
            // Track Showed Note
            const trackShowedNote = document.createElement('div');
            trackShowedNote.classList.add('track-showed', 'note');
    
            const trackNoteIcon = document.createElement('img');
            trackNoteIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef831884e6850_ico-track-note.svg';
            trackNoteIcon.alt = '';
            trackNoteIcon.classList.add('ico-track-note');
            trackShowedNote.appendChild(trackNoteIcon);
    
            // Track Hover
            const trackHover = document.createElement('div');
            trackHover.classList.add('track-hover');
    
            const trackPlayIcon = document.createElement('img');
            trackPlayIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef83ff74e67cb_track-ico-play.svg';
            trackPlayIcon.alt = '';
            trackPlayIcon.classList.add('ico-track-play');
            trackHover.appendChild(trackPlayIcon);
    
            // Assemble Track Wrapper
            trackWrapper.appendChild(trackLeft);
            trackWrapper.appendChild(trackRight);
            trackWrapper.appendChild(trackShowedNote);
            trackWrapper.appendChild(trackHover);
    
            // Add Click Event to Play the Track
            trackWrapper.addEventListener('click', () => playTrack(index));
    
            // Append to Track List
            mtbmbsbPanel.appendChild(trackWrapper);
        });
    }

    loadTrack(currentTrackIndex);
    generateTrackList2();

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100;
    });
        }

        // Monitora a visibilidade do player e reinicia quando necessário
        const observePlayer2 = new MutationObserver(() => {
            const player = document.getElementById('mtbmbsbPanel');
            if (document.getElementById('mtbmbsbPanel') != null) {
                initializePlayer2();
            } else {
                playerInitialized2 = false; // Permitir reinicialização ao reabrir
            }
        });

        // Observar mudanças no estilo de exibição do player
        observePlayer2.observe(document.body, { attributes: true, subtree: true });






        const player3 = document.getElementById('kamikazePlaylistSpotify');
        let playerInitialized3 = false;

        // Função para iniciar o player
        function initializePlayer3() {
            if (playerInitialized3) return;  // Previne inicializações duplicadas

            playerInitialized3 = true; // Marca como inicializado
            // Lista de músicas com informações
    const tracks = [
        {
            title: "The Ringer",
            artist: "Eminem",
            duration: "5:37",
            src: "https://www.dropbox.com/scl/fi/y64n4q10l3m2k5zmz9h3p/The-Ringer.mp3?rlkey=npnpq9yh9q3nc0jrxzuzmwp4n&st=m54qsjh1&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Greatest",
            artist: "Eminem",
            duration: "3:46",
            src: "https://www.dropbox.com/scl/fi/qfnpgj9aca9l3hg1tv72a/Greatest.mp3?rlkey=ku8lezcx4hw967oxkotskhbr9&st=16h5k7qi&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Lucky You (feat. Joyner Lucas)",
            artist: "Eminem, Joyner Lucas",
            duration: "4:04",
            src: "https://www.dropbox.com/scl/fi/hw9m3e3017gwn4v4gukqn/Lucky-You-Feat.-Joyner-Lucas-Official-Audio.mp3?rlkey=5i9vrbpmkkif4ko4zjhexdcm1&st=4hurelab&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Paul - Skit",
            artist: "Paul Rosenberg",
            duration: "0:35",
            src: "https://www.dropbox.com/scl/fi/qdffq66pmfxnl9appvcth/Paul-Skit.mp3?rlkey=x7h6wkr4cq8flbl1tlpbpxdtj&st=u4rxkkdi&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Normal",
            artist: "Eminem",
            duration: "3:42",
            src: "https://www.dropbox.com/scl/fi/kltdc9iel45eqvdgnmdei/Normal.mp3?rlkey=mh11ygzdn8rqhjf5fnin74sry&st=kkmnsl5m&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Em Calls Paul - Skit",
            artist: "Eminem",
            duration: "0:49",
            src: "https://www.dropbox.com/scl/fi/xjai1jr4i0h2p54wrnar4/Em-Calls-Paul-Skit.mp3?rlkey=aeg06ndxy8hw0pqpjvs15j1ha&st=jq60tis4&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Stepping Stone",
            artist: "Eminem",
            duration: "5:09",
            src: "https://www.dropbox.com/scl/fi/3kgu9fomicmy6d7xow4xh/Stepping-Stone.mp3?rlkey=ahbebioxhl00c6ez220ruaqo2&st=lg45jyl8&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Not Alike (feat. Royce da 5'9)",
            artist: `Eminem, Royce da 5'9"`,
            duration: "4:48",
            src: "https://www.dropbox.com/scl/fi/haj080171oxff9wartjdm/Not-Alike.mp3?rlkey=sqhwv14ohj2r1qkygvy3lnotz&st=mi2u419s&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Kamikaze",
            artist: "Eminem",
            duration: "3:36",
            src: "https://www.dropbox.com/scl/fi/hu37poiu14o4kdfck0s2c/Kamikaze-Official-Audio.mp3?rlkey=9x5wtuvs7rdadvbpala5w9liq&st=qclxx66g&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Fall",
            artist: "Eminem",
            duration: "4:22",
            src: "https://www.dropbox.com/scl/fi/rv8l9di9jf8pvc9y2egw1/Fall-Official-Audio.mp3?rlkey=k5mx6vl4v2rqa6jnpxflyeiej&st=ie77m20c&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Nice Guy (with Jessie Reyez)",
            artist: "Eminem, Jessie Reyez",
            duration: "2:30",
            src: "https://www.dropbox.com/scl/fi/jerppa0a7aepiuog63uir/Nice-Guy.mp3?rlkey=aux75vvs1skzk5kbbwstvqi7w&st=dmjrh8eq&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Good Guy (feat. Jessie Reyez)",
            artist: "Eminem, Jessie Reyez",
            duration: "2:22",
            src: "https://www.dropbox.com/scl/fi/ufk09r4s9tmqtra1rw5a4/Good-Guy.mp3?rlkey=t7wb0zp7hmunxkuabnku3y4fo&st=ngyxvq57&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Those Kinda Nights (feat. Ed Sheeran)",
            artist: "Eminem, Ed Sheeran",
            duration: "2:57",
            src: "https://www.dropbox.com/scl/fi/2zj7s94y4mcj62cuhi3r0/Those-Kinda-Nights-feat.-Ed-Sheeran-Official-Audio.mp3?rlkey=ravmjrp2he14ojojacg60s3xk&st=5ai4a34f&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
        {
            title: "Venom - Music From The Motion Picture",
            artist: "Eminem",
            duration: "4:29",
            src: "https://www.dropbox.com/scl/fi/5wyquxepl9w1rf4z731co/Eminem-Venom-Explicit.mp3?rlkey=6njxvytbifqql8sj7qw8185ap&st=6pnavbnh&dl=1",
            image: "https://www.dropbox.com/scl/fi/4g2iva0jjvq35tihog77w/kamikaze.jpg?rlkey=9fw05lkugq8powq5jy7bcws0h&st=jaryizf8&raw=1",
        },
    ];

    let currentTrackIndex = 0;
    const audio = document.getElementById('audio');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const trackImage = document.getElementById('track-image');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const chillPanel = document.getElementById('chillPanel');
    const volumeBar = document.getElementById('volume-bar');
    const kamikazePanel = document.getElementById('kamikazePanel');

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function loadTrack(index) {
        currentTrackIndex = index;
        const track = tracks[index];
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        trackImage.src = track.image;
        audio.src = track.src;
        audio.load();
    }

    function togglePlayPause() {
        let playIcon = document.getElementById("playIcon")
        if (audio.paused) {
            audio.play();
            // playPauseButton.textContent = '<i class="fa-solid fa-pause"></i>';
            // if (playIcon.className == "fa-solid fa-play") {
            //     playIcon.className = "fa-solid fa-pause"
            // }
        } else {
            audio.pause();
            // if (playIcon.className == "fa-solid fa-pause") {
            //     playIcon.className = "fa-solid fa-play"
            // }
        }
    }

    function playTrack(index) {
        let playIcon = document.getElementById("playIcon")
        loadTrack(index);
        audio.play();
        // if (playIcon.className == "fa-solid fa-play") {
        //         playIcon.className = "fa-solid fa-pause"
        //     }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function generateTrackList3() {
        tracks.forEach((track, index) => {
            const trackWrapper = document.createElement('div');
            trackWrapper.classList.add('track-wrapper');
            trackWrapper.setAttribute('data-w-id', `track-${index}`);
    
            // Track Left Section
            const trackLeft = document.createElement('div');
            trackLeft.classList.add('track-left');
    
            const trackArtistDiv = document.createElement('div');
            trackArtistDiv.classList.add('track-artist');
    
            const trackArtistImage = document.createElement('img');
            trackArtistImage.src = track.image;
            trackArtistImage.alt = `${track.title} by ${track.artist}`;
            trackArtistImage.classList.add('track-artist-image');
            trackArtistDiv.appendChild(trackArtistImage);
    
            const trackNameWrapper = document.createElement('div');
            trackNameWrapper.classList.add('track-name-wrapper');
    
            const trackSongName = document.createElement('div');
            trackSongName.classList.add('track-song-name');
            trackSongName.textContent = track.title;
            trackNameWrapper.appendChild(trackSongName);
    
            const trackExplicit = document.createElement('div');
            trackExplicit.classList.add('track-explicit');
    
            const trackExplicitLabel = document.createElement('div');
            trackExplicitLabel.classList.add('track-explicit-label');
            trackExplicitLabel.textContent = track.explicit ? 'Explicit' : '';
            trackExplicit.appendChild(trackExplicitLabel);
    
            trackNameWrapper.appendChild(trackExplicit);
    
            trackLeft.appendChild(trackArtistDiv);
            trackLeft.appendChild(trackNameWrapper);
    
            // Track Right Section
            const trackRight = document.createElement('div');
            trackRight.classList.add('track-right');
    
            const trackDropdown = document.createElement('div');
            trackDropdown.classList.add('track-dropdown', 'w-dropdown');
    
            const dropdownToggle = document.createElement('div');
            dropdownToggle.classList.add('dropdown-toggle', 'w-dropdown-toggle');
    
            const dropdownIcon = document.createElement('img');
            dropdownIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef84ee54e67b7_ico-track-dropdown.svg';
            dropdownIcon.alt = '';
            dropdownIcon.classList.add('ico-track-dropdown');
            dropdownToggle.appendChild(dropdownIcon);
    
            const dropdownList = document.createElement('nav');
            dropdownList.classList.add('dropdown-list', 'hero-artist', 'track', 'w-dropdown-list');
    
            const dropdownOptions = [
                'Start Radio',
                'Save to your Liked Songs',
                'Add to Queue',
                'Add to Playlist',
                'Copy Song Link',
                'Open in Desktop app',
            ];
    
            dropdownOptions.forEach((option) => {
                const dropdownLink = document.createElement('a');
                dropdownLink.classList.add('dropdownlink', 'w-dropdown-link');
                dropdownLink.textContent = option;
                dropdownList.appendChild(dropdownLink);
            });
    
            trackDropdown.appendChild(dropdownToggle);
            trackDropdown.appendChild(dropdownList);
    
            const trackTime = document.createElement('div');
            trackTime.classList.add('track-time');
            trackTime.textContent = track.duration;
    
            trackRight.appendChild(trackDropdown);
            trackRight.appendChild(trackTime);
    
            // Track Showed Note
            const trackShowedNote = document.createElement('div');
            trackShowedNote.classList.add('track-showed', 'note');
    
            const trackNoteIcon = document.createElement('img');
            trackNoteIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef831884e6850_ico-track-note.svg';
            trackNoteIcon.alt = '';
            trackNoteIcon.classList.add('ico-track-note');
            trackShowedNote.appendChild(trackNoteIcon);
    
            // Track Hover
            const trackHover = document.createElement('div');
            trackHover.classList.add('track-hover');
    
            const trackPlayIcon = document.createElement('img');
            trackPlayIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef83ff74e67cb_track-ico-play.svg';
            trackPlayIcon.alt = '';
            trackPlayIcon.classList.add('ico-track-play');
            trackHover.appendChild(trackPlayIcon);
    
            // Assemble Track Wrapper
            trackWrapper.appendChild(trackLeft);
            trackWrapper.appendChild(trackRight);
            trackWrapper.appendChild(trackShowedNote);
            trackWrapper.appendChild(trackHover);
    
            // Add Click Event to Play the Track
            trackWrapper.addEventListener('click', () => playTrack(index));
    
            // Append to Track List
            kamikazePanel.appendChild(trackWrapper);
        });
    }

    loadTrack(currentTrackIndex);
    generateTrackList3();

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100;
    });
        }

        // Monitora a visibilidade do player e reinicia quando necessário
        const observePlayer3 = new MutationObserver(() => {
            const player = document.getElementById('kamikazePanel');
            if (document.getElementById('kamikazePanel') != null) {
                initializePlayer3();
            } else {
                playerInitialized3 = false; // Permitir reinicialização ao reabrir
            }
        });

        // Observar mudanças no estilo de exibição do player
        observePlayer3.observe(document.body, { attributes: true, subtree: true });







        const player4 = document.getElementById('sslpExpandedPlaylistSpotify');
        let playerInitialized4 = false;

        // Função para iniciar o player
        function initializePlayer4() {
            if (playerInitialized4) return;  // Previne inicializações duplicadas

            playerInitialized4 = true; // Marca como inicializado
            // Lista de músicas com informações
    const tracks = [
        {
            title: "My Name Is",
            artist: "Eminem",
            duration: "4:28",
            src: "https://www.dropbox.com/scl/fi/fcy6857nsfuc3tdalx58d/Eminem-My-Name-Is-Explicit.mp3?rlkey=r5xl5urgv2kctl0qtglrf6gr8&st=glnl7gfu&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "Guilty Conscience",
            artist: "Eminem",
            duration: "3:19",
            src: "https://www.dropbox.com/scl/fi/4l8gbhwdq1r4ner5r4bma/Eminem-Guilty-Conscience-Explicit.mp3?rlkey=g66mdejfijjx42i68anwmy1o4&st=lfcyc7pl&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "Brain Damage",
            artist: "Paul Rosenberg",
            duration: "3:46",
            src: "https://www.dropbox.com/scl/fi/c7vy5y53z1nlsk4w5j9pl/Brain-Damage.mp3?rlkey=6xwikjpi563eaimymg16gi0l1&st=w5t04w2o&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "'97 Bonnie & Clyde'",
            artist: "Eminem",
            duration: "5:16",
            src: "https://www.dropbox.com/scl/fi/2d0m2ca54ijqfifmrngm3/97-Bonnie-Clyde.mp3?rlkey=8o6bjq7ad9h0lpigw7kz4bs3s&st=5kdfrci4&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "Role Model",
            artist: "Eminem",
            duration: "3:25",
            src: "https://www.dropbox.com/scl/fi/srl010wifgi8b6l535hk4/Eminem-Role-Model-Uncensored-HQ.mp3?rlkey=0x1j6tyl8v5rnyjsvvmrhhrzv&st=n6qanqnw&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "My Fault",
            artist: "Eminem",
            duration: "4:01",
            src: "https://www.dropbox.com/scl/fi/m9fe4fqog6jv4jw48h7fn/My-Fault.mp3?rlkey=niw4fl29l21puu1de8qntbo48&st=bdunjia9&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "Cum on Everybody",
            artist: `Eminem`,
            duration: "3:39",
            src: "https://www.dropbox.com/scl/fi/qzui9f8r6navvfgae7708/Cum-On-Everybody.mp3?rlkey=n3iz2dxqbwp8ich7za407go90&st=94v9ncgx&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "Rock Bottom",
            artist: "Eminem",
            duration: "3:34",
            src: "https://www.dropbox.com/scl/fi/4p3mke572z66jd0jck6uz/Rock-Bottom.mp3?rlkey=bekmin5yp0zu6jeo6zgqemqwt&st=2454jcpc&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "Just Don't Give a Fuck",
            artist: "Eminem",
            duration: "4:02",
            src: "https://www.dropbox.com/scl/fi/yqedhzcoogsiybo399zf2/Eminem-Just-Don-t-Give-a-Fuck-Lyrics-ezmp3.cc.mp3?rlkey=y42c5rf1zb0sikdardjj93t63&st=hlu3bbfc&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "As The World Turns",
            artist: "Eminem",
            duration: "4:25",
            src: "https://www.dropbox.com/scl/fi/jo7yb7tlp7ry3ldcp3t2k/As-The-World-Turns.mp3?rlkey=z4y8f7mkwjn3xutsqihyuawng&st=xml8m0lq&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "I'm Shady",
            artist: "Eminem",
            duration: "3:31",
            src: "https://www.dropbox.com/scl/fi/xk7y6fgsujatpmk4mux3z/I-m-Shady.mp3?rlkey=jddm2a15c5iu54474cdhh2vrf&st=ktfnzan4&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "Bad Meets Evil",
            artist: `Eminem, Royce Da 5'9"`,
            duration: "4:13",
            src: "https://www.dropbox.com/scl/fi/b7s4og7w6elc7vlibjynu/Bad-Meets-Evil.mp3?rlkey=mnoob7pw2fcimvhqd5pcoosgs&st=9o1juch4&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
        {
            title: "Still Don't Give A Fuck",
            artist: "Eminem",
            duration: "4:17",
            src: "https://www.dropbox.com/scl/fi/ao9h4k6uxjtpjg311fu7k/Still-Don-t-Give-A-Fuck.mp3?rlkey=n4ljbplrand2ra3eg1ff3tdea&st=e95quulz&dl=1",
            image: "https://www.dropbox.com/scl/fi/91p4wl6oqiibp8aezqheu/sslpexpanded.jpg?rlkey=1r1odjqp6cch57jzaw27jbt7s&st=wrun3rpt&raw=1",
        },
    ];

    let currentTrackIndex = 0;
    const audio = document.getElementById('audio');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const trackImage = document.getElementById('track-image');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const chillPanel = document.getElementById('chillPanel');
    const volumeBar = document.getElementById('volume-bar');
    const sslpExpandedPanel = document.getElementById('sslpExpandedPanel');

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function loadTrack(index) {
        currentTrackIndex = index;
        const track = tracks[index];
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        trackImage.src = track.image;
        audio.src = track.src;
        audio.load();
    }

    function togglePlayPause() {
        let playIcon = document.getElementById("playIcon")
        if (audio.paused) {
            audio.play();
            // playPauseButton.textContent = '<i class="fa-solid fa-pause"></i>';
            // if (playIcon.className == "fa-solid fa-play") {
            //     playIcon.className = "fa-solid fa-pause"
            // }
        } else {
            audio.pause();
            // if (playIcon.className == "fa-solid fa-pause") {
            //     playIcon.className = "fa-solid fa-play"
            // }
        }
    }

    function playTrack(index) {
        let playIcon = document.getElementById("playIcon")
        loadTrack(index);
        audio.play();
        // if (playIcon.className == "fa-solid fa-play") {
        //         playIcon.className = "fa-solid fa-pause"
        //     }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function generateTrackList4() {
        tracks.forEach((track, index) => {
            const trackWrapper = document.createElement('div');
            trackWrapper.classList.add('track-wrapper');
            trackWrapper.setAttribute('data-w-id', `track-${index}`);
    
            // Track Left Section
            const trackLeft = document.createElement('div');
            trackLeft.classList.add('track-left');
    
            const trackArtistDiv = document.createElement('div');
            trackArtistDiv.classList.add('track-artist');
    
            const trackArtistImage = document.createElement('img');
            trackArtistImage.src = track.image;
            trackArtistImage.alt = `${track.title} by ${track.artist}`;
            trackArtistImage.classList.add('track-artist-image');
            trackArtistDiv.appendChild(trackArtistImage);
    
            const trackNameWrapper = document.createElement('div');
            trackNameWrapper.classList.add('track-name-wrapper');
    
            const trackSongName = document.createElement('div');
            trackSongName.classList.add('track-song-name');
            trackSongName.textContent = track.title;
            trackNameWrapper.appendChild(trackSongName);
    
            const trackExplicit = document.createElement('div');
            trackExplicit.classList.add('track-explicit');
    
            const trackExplicitLabel = document.createElement('div');
            trackExplicitLabel.classList.add('track-explicit-label');
            trackExplicitLabel.textContent = track.explicit ? 'Explicit' : '';
            trackExplicit.appendChild(trackExplicitLabel);
    
            trackNameWrapper.appendChild(trackExplicit);
    
            trackLeft.appendChild(trackArtistDiv);
            trackLeft.appendChild(trackNameWrapper);
    
            // Track Right Section
            const trackRight = document.createElement('div');
            trackRight.classList.add('track-right');
    
            const trackDropdown = document.createElement('div');
            trackDropdown.classList.add('track-dropdown', 'w-dropdown');
    
            const dropdownToggle = document.createElement('div');
            dropdownToggle.classList.add('dropdown-toggle', 'w-dropdown-toggle');
    
            const dropdownIcon = document.createElement('img');
            dropdownIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef84ee54e67b7_ico-track-dropdown.svg';
            dropdownIcon.alt = '';
            dropdownIcon.classList.add('ico-track-dropdown');
            dropdownToggle.appendChild(dropdownIcon);
    
            const dropdownList = document.createElement('nav');
            dropdownList.classList.add('dropdown-list', 'hero-artist', 'track', 'w-dropdown-list');
    
            const dropdownOptions = [
                'Start Radio',
                'Save to your Liked Songs',
                'Add to Queue',
                'Add to Playlist',
                'Copy Song Link',
                'Open in Desktop app',
            ];
    
            dropdownOptions.forEach((option) => {
                const dropdownLink = document.createElement('a');
                dropdownLink.classList.add('dropdownlink', 'w-dropdown-link');
                dropdownLink.textContent = option;
                dropdownList.appendChild(dropdownLink);
            });
    
            trackDropdown.appendChild(dropdownToggle);
            trackDropdown.appendChild(dropdownList);
    
            const trackTime = document.createElement('div');
            trackTime.classList.add('track-time');
            trackTime.textContent = track.duration;
    
            trackRight.appendChild(trackDropdown);
            trackRight.appendChild(trackTime);
    
            // Track Showed Note
            const trackShowedNote = document.createElement('div');
            trackShowedNote.classList.add('track-showed', 'note');
    
            const trackNoteIcon = document.createElement('img');
            trackNoteIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef831884e6850_ico-track-note.svg';
            trackNoteIcon.alt = '';
            trackNoteIcon.classList.add('ico-track-note');
            trackShowedNote.appendChild(trackNoteIcon);
    
            // Track Hover
            const trackHover = document.createElement('div');
            trackHover.classList.add('track-hover');
    
            const trackPlayIcon = document.createElement('img');
            trackPlayIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef83ff74e67cb_track-ico-play.svg';
            trackPlayIcon.alt = '';
            trackPlayIcon.classList.add('ico-track-play');
            trackHover.appendChild(trackPlayIcon);
    
            // Assemble Track Wrapper
            trackWrapper.appendChild(trackLeft);
            trackWrapper.appendChild(trackRight);
            trackWrapper.appendChild(trackShowedNote);
            trackWrapper.appendChild(trackHover);
    
            // Add Click Event to Play the Track
            trackWrapper.addEventListener('click', () => playTrack(index));
    
            // Append to Track List
            sslpExpandedPanel.appendChild(trackWrapper);
        });
    }

    loadTrack(currentTrackIndex);
    generateTrackList4();

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100;
    });
        }

        // Monitora a visibilidade do player e reinicia quando necessário
        const observePlayer4 = new MutationObserver(() => {
            const player = document.getElementById('sslpExpandedPanel');
            if (document.getElementById('sslpExpandedPanel') != null) {
                initializePlayer4();
            } else {
                playerInitialized4 = false; // Permitir reinicialização ao reabrir
            }
        });

        // Observar mudanças no estilo de exibição do player
        observePlayer4.observe(document.body, { attributes: true, subtree: true });






        const player5 = document.getElementById('eminemShowPlaylistSpotify');
        let playerInitialized5 = false;

        // Função para iniciar o player
        function initializePlayer5() {
            if (playerInitialized5) return;  // Previne inicializações duplicadas

            playerInitialized5 = true; // Marca como inicializado
            // Lista de músicas com informações
    const tracks = [
        {
            title: "White America",
            artist: "Eminem",
            duration: "5:24",
            src: "https://www.dropbox.com/scl/fi/9bmeghnfgbzwwav3cs1k9/White-America.mp3?rlkey=kwsnecwtd7byzpvn7mjw95znm&st=kge1ulj3&dl=1",
            image: "https://www.dropbox.com/scl/fi/1pfcn7r3g5n6rubnw3x0t/eminemshow.jpg?rlkey=rkmm8sm5kjkugtqn52dsh52rk&st=9wuzz2ia&raw=1",
        },
        {
            title: "Cleanin' Out My Closet",
            artist: "Eminem",
            duration: "4:57",
            src: "https://www.dropbox.com/scl/fi/6smwcqxyjfocu24bgbztn/Eminem-Cleanin-Out-My-Closet.mp3?rlkey=y9dvjg4eb8otcf1um42a7pj0r&st=e6ekfpur&dl=1",
            image: "https://www.dropbox.com/scl/fi/1pfcn7r3g5n6rubnw3x0t/eminemshow.jpg?rlkey=rkmm8sm5kjkugtqn52dsh52rk&st=9wuzz2ia&raw=1",
        },
        {
            title: "Square Dance",
            artist: "Paul Rosenberg",
            duration: "5:23",
            src: "https://www.dropbox.com/scl/fi/lkptcuobz45zfl9qn1vmc/Square-Dance.mp3?rlkey=pawgwi44dn6fpp7mqx5eb2sbn&st=lkw5tmho&dl=1",
            image: "https://www.dropbox.com/scl/fi/1pfcn7r3g5n6rubnw3x0t/eminemshow.jpg?rlkey=rkmm8sm5kjkugtqn52dsh52rk&st=9wuzz2ia&raw=1",
        },
        {
            title: "Say Goodbye Hollywood",
            artist: "Eminem",
            duration: "4:32",
            src: "https://www.dropbox.com/scl/fi/6cn0wcbstookdpb4nrmpo/Say-Goodbye-Hollywood.mp3?rlkey=2ffdgstk55da7zm07jxq3wptb&st=qaphejoe&dl=1",
            image: "https://www.dropbox.com/scl/fi/1pfcn7r3g5n6rubnw3x0t/eminemshow.jpg?rlkey=rkmm8sm5kjkugtqn52dsh52rk&st=9wuzz2ia&raw=1",
        },
        {
            title: "Drips",
            artist: "Eminem",
            duration: "4:45",
            src: "https://www.dropbox.com/scl/fi/qbtdtt21yedskydy8lh7z/Drips.mp3?rlkey=du8ayrnfo7wf5acf4dwi0uqf6&st=bbd27vrt&dl=1",
            image: "https://www.dropbox.com/scl/fi/1pfcn7r3g5n6rubnw3x0t/eminemshow.jpg?rlkey=rkmm8sm5kjkugtqn52dsh52rk&st=9wuzz2ia&raw=1",
        },
        {
            title: "Without Me",
            artist: "Eminem",
            duration: "4:50",
            src: "https://www.dropbox.com/scl/fi/upy06ogvb10yz8d17is9h/Without-Me-ezmp3.cc.mp3?rlkey=n608fi83dxto0zmrugldbs90r&st=71rw2in6&dl=1",
            image: "https://www.dropbox.com/scl/fi/1pfcn7r3g5n6rubnw3x0t/eminemshow.jpg?rlkey=rkmm8sm5kjkugtqn52dsh52rk&st=9wuzz2ia&raw=1",
        },
        {
            title: "Superman",
            artist: "Eminem, Dina Rae",
            duration: "5:50",
            src: "https://www.dropbox.com/scl/fi/894t8p9bsas4yf46hjh1u/Eminem-Superman-ezmp3.cc.mp3?rlkey=9urt2lvcqss69gmfqnvlte5xy&st=z5lb25ft&dl=1",
            image: "https://www.dropbox.com/scl/fi/1pfcn7r3g5n6rubnw3x0t/eminemshow.jpg?rlkey=rkmm8sm5kjkugtqn52dsh52rk&st=9wuzz2ia&raw=1",
        },
        {
            title: "Hailie's Song",
            artist: "Eminem",
            duration: "5:20",
            src: "https://www.dropbox.com/scl/fi/oa1s9d26nh7ygyukbkkvi/Hailie-s-Song.mp3?rlkey=8q4u5dkz37ohlenyatovltuim&st=eo0wlac3&dl=1",
            image: "https://www.dropbox.com/scl/fi/1pfcn7r3g5n6rubnw3x0t/eminemshow.jpg?rlkey=rkmm8sm5kjkugtqn52dsh52rk&st=9wuzz2ia&raw=1",
        },
        {
            title: "Till I Collapse",
            artist: "Eminem",
            duration: "4:57",
            src: "https://www.dropbox.com/scl/fi/jf1mn37diyyg8s9iuvy8w/Till-I-Collapse.mp3?rlkey=fzyo7ge1ik0uh9e4cll3g0uk5&st=n5z95ezj&dl=1",
            image: "https://www.dropbox.com/scl/fi/1pfcn7r3g5n6rubnw3x0t/eminemshow.jpg?rlkey=rkmm8sm5kjkugtqn52dsh52rk&st=9wuzz2ia&raw=1",
        },
        {
            title: "My Dad's Gone Crazy",
            artist: "Eminem",
            duration: "4:27",
            src: "https://www.dropbox.com/scl/fi/paryqewz3ejfbnkunnsv6/My-Dad-s-Gone-Crazy.mp3?rlkey=28wdmt5tq4tuw01w5va5x11vf&st=69f0lohw&dl=1",
            image: "https://www.dropbox.com/scl/fi/1pfcn7r3g5n6rubnw3x0t/eminemshow.jpg?rlkey=rkmm8sm5kjkugtqn52dsh52rk&st=9wuzz2ia&raw=1",
        },
    ];

    let currentTrackIndex = 0;
    const audio = document.getElementById('audio');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const trackImage = document.getElementById('track-image');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const chillPanel = document.getElementById('chillPanel');
    const volumeBar = document.getElementById('volume-bar');
    const eminemShowPanel = document.getElementById('eminemShowPanel');

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function loadTrack(index) {
        currentTrackIndex = index;
        const track = tracks[index];
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        trackImage.src = track.image;
        audio.src = track.src;
        audio.load();
    }

    function togglePlayPause() {
        let playIcon = document.getElementById("playIcon")
        if (audio.paused) {
            audio.play();
            // playPauseButton.textContent = '<i class="fa-solid fa-pause"></i>';
            // if (playIcon.className == "fa-solid fa-play") {
            //     playIcon.className = "fa-solid fa-pause"
            // }
        } else {
            audio.pause();
            // if (playIcon.className == "fa-solid fa-pause") {
            //     playIcon.className = "fa-solid fa-play"
            // }
        }
    }

    function playTrack(index) {
        let playIcon = document.getElementById("playIcon")
        loadTrack(index);
        audio.play();
        // if (playIcon.className == "fa-solid fa-play") {
        //         playIcon.className = "fa-solid fa-pause"
        //     }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function generateTrackList5() {
        tracks.forEach((track, index) => {
            const trackWrapper = document.createElement('div');
            trackWrapper.classList.add('track-wrapper');
            trackWrapper.setAttribute('data-w-id', `track-${index}`);
    
            // Track Left Section
            const trackLeft = document.createElement('div');
            trackLeft.classList.add('track-left');
    
            const trackArtistDiv = document.createElement('div');
            trackArtistDiv.classList.add('track-artist');
    
            const trackArtistImage = document.createElement('img');
            trackArtistImage.src = track.image;
            trackArtistImage.alt = `${track.title} by ${track.artist}`;
            trackArtistImage.classList.add('track-artist-image');
            trackArtistDiv.appendChild(trackArtistImage);
    
            const trackNameWrapper = document.createElement('div');
            trackNameWrapper.classList.add('track-name-wrapper');
    
            const trackSongName = document.createElement('div');
            trackSongName.classList.add('track-song-name');
            trackSongName.textContent = track.title;
            trackNameWrapper.appendChild(trackSongName);
    
            const trackExplicit = document.createElement('div');
            trackExplicit.classList.add('track-explicit');
    
            const trackExplicitLabel = document.createElement('div');
            trackExplicitLabel.classList.add('track-explicit-label');
            trackExplicitLabel.textContent = track.explicit ? 'Explicit' : '';
            trackExplicit.appendChild(trackExplicitLabel);
    
            trackNameWrapper.appendChild(trackExplicit);
    
            trackLeft.appendChild(trackArtistDiv);
            trackLeft.appendChild(trackNameWrapper);
    
            // Track Right Section
            const trackRight = document.createElement('div');
            trackRight.classList.add('track-right');
    
            const trackDropdown = document.createElement('div');
            trackDropdown.classList.add('track-dropdown', 'w-dropdown');
    
            const dropdownToggle = document.createElement('div');
            dropdownToggle.classList.add('dropdown-toggle', 'w-dropdown-toggle');
    
            const dropdownIcon = document.createElement('img');
            dropdownIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef84ee54e67b7_ico-track-dropdown.svg';
            dropdownIcon.alt = '';
            dropdownIcon.classList.add('ico-track-dropdown');
            dropdownToggle.appendChild(dropdownIcon);
    
            const dropdownList = document.createElement('nav');
            dropdownList.classList.add('dropdown-list', 'hero-artist', 'track', 'w-dropdown-list');
    
            const dropdownOptions = [
                'Start Radio',
                'Save to your Liked Songs',
                'Add to Queue',
                'Add to Playlist',
                'Copy Song Link',
                'Open in Desktop app',
            ];
    
            dropdownOptions.forEach((option) => {
                const dropdownLink = document.createElement('a');
                dropdownLink.classList.add('dropdownlink', 'w-dropdown-link');
                dropdownLink.textContent = option;
                dropdownList.appendChild(dropdownLink);
            });
    
            trackDropdown.appendChild(dropdownToggle);
            trackDropdown.appendChild(dropdownList);
    
            const trackTime = document.createElement('div');
            trackTime.classList.add('track-time');
            trackTime.textContent = track.duration;
    
            trackRight.appendChild(trackDropdown);
            trackRight.appendChild(trackTime);
    
            // Track Showed Note
            const trackShowedNote = document.createElement('div');
            trackShowedNote.classList.add('track-showed', 'note');
    
            const trackNoteIcon = document.createElement('img');
            trackNoteIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef831884e6850_ico-track-note.svg';
            trackNoteIcon.alt = '';
            trackNoteIcon.classList.add('ico-track-note');
            trackShowedNote.appendChild(trackNoteIcon);
    
            // Track Hover
            const trackHover = document.createElement('div');
            trackHover.classList.add('track-hover');
    
            const trackPlayIcon = document.createElement('img');
            trackPlayIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef83ff74e67cb_track-ico-play.svg';
            trackPlayIcon.alt = '';
            trackPlayIcon.classList.add('ico-track-play');
            trackHover.appendChild(trackPlayIcon);
    
            // Assemble Track Wrapper
            trackWrapper.appendChild(trackLeft);
            trackWrapper.appendChild(trackRight);
            trackWrapper.appendChild(trackShowedNote);
            trackWrapper.appendChild(trackHover);
    
            // Add Click Event to Play the Track
            trackWrapper.addEventListener('click', () => playTrack(index));
    
            // Append to Track List
            eminemShowPanel.appendChild(trackWrapper);
        });
    }

    loadTrack(currentTrackIndex);
    generateTrackList5();

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100;
    });
        }

        // Monitora a visibilidade do player e reinicia quando necessário
        const observePlayer5 = new MutationObserver(() => {
            const player = document.getElementById('eminemShowPanel');
            if (document.getElementById('eminemShowPanel') != null) {
                initializePlayer5();
            } else {
                playerInitialized5 = false; // Permitir reinicialização ao reabrir
            }
        });

        // Observar mudanças no estilo de exibição do player
        observePlayer5.observe(document.body, { attributes: true, subtree: true });










        const player6 = document.getElementById('chillPlaylistSpotify');
        let playerInitialized6 = false;

        // Função para iniciar o player
        function initializePlayer6() {
            if (playerInitialized6) return;  // Previne inicializações duplicadas

            playerInitialized6 = true; // Marca como inicializado
            // Lista de músicas com informações
    const tracks = [
        {
            title: "Someone You Loved",
            artist: "Lewis Capaldi",
            duration: "3:02",
            src: "https://www.dropbox.com/scl/fi/ycyyjgn7snsfl0tbq81l6/Lewis-Capaldi-Someone-You-Loved-Official-Audio.mp3?rlkey=j8r6mu3c3ojl0arze3hdgxfsu&st=gger12ox&dl=1",
            image: "https://www.dropbox.com/scl/fi/fcawsbu8m043t0vkble92/71IXzNaE7xL._UF1000-1000_QL80_.jpg?rlkey=4cu5cx7e2snqf28le0sxirhcd&st=pq2yopkl&raw=1",
        },
        {
            title: "Space Song",
            artist: "Beach House",
            duration: "5:20",
            src: "https://www.dropbox.com/scl/fi/eaano3gxuiej77zb4oe7l/Beach-House-Space-Song.mp3?rlkey=l5ma0etp261jhb014uv0saytz&st=72cyq5ka&dl=1",
            image: "https://www.dropbox.com/scl/fi/j8vi9u9vkoxsmfv6whsy8/ab67616d0000b2739b7190e673e46271b2754aab.jpg?rlkey=6nxboot8t09jl9fsqvd4hu6sy&st=3k6oafw4&raw=1",
        },
        {
            title: "Another Love",
            artist: "Tom Odell",
            duration: "5:23",
            src: "https://www.dropbox.com/scl/fi/00r4pa4jm80xueuwddn3v/Tom-Odell-Another-Love-Lyrics.mp3?rlkey=ge4s548qnpxsq3mpre8xn7j5c&st=n4k7aihe&dl=1",
            image: "https://www.dropbox.com/scl/fi/06wp97946bax4vbof4mmt/ab67616d0000b2731917a0f3f4152622a040913f.jpg?rlkey=5l03i79yvmoobc31927bxidfp&st=k2nb0229&raw=1",
        },
    ];

    let currentTrackIndex = 0;
    const audio = document.getElementById('audio');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const trackImage = document.getElementById('track-image');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const chillPanel = document.getElementById('chillPanel');
    const volumeBar = document.getElementById('volume-bar');
    const chillRight = document.getElementById('chillRight');

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function loadTrack(index) {
        currentTrackIndex = index;
        const track = tracks[index];
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        trackImage.src = track.image;
        audio.src = track.src;
        audio.load();
    }

    function togglePlayPause() {
        let playIcon = document.getElementById("playIcon")
        if (audio.paused) {
            audio.play();
            // playPauseButton.textContent = '<i class="fa-solid fa-pause"></i>';
            // if (playIcon.className == "fa-solid fa-play") {
            //     playIcon.className = "fa-solid fa-pause"
            // }
        } else {
            audio.pause();
            // if (playIcon.className == "fa-solid fa-pause") {
            //     playIcon.className = "fa-solid fa-play"
            // }
        }
    }

    function playTrack(index) {
        let playIcon = document.getElementById("playIcon")
        loadTrack(index);
        audio.play();
        // if (playIcon.className == "fa-solid fa-play") {
        //         playIcon.className = "fa-solid fa-pause"
        //     }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function generateTrackList6() {
        tracks.forEach((track, index) => {
            const trackWrapper = document.createElement('div');
            trackWrapper.classList.add('track-wrapper');
            trackWrapper.setAttribute('data-w-id', `track-${index}`);
    
            // Track Left Section
            const trackLeft = document.createElement('div');
            trackLeft.classList.add('track-left');
    
            const trackArtistDiv = document.createElement('div');
            trackArtistDiv.classList.add('track-artist');
    
            const trackArtistImage = document.createElement('img');
            trackArtistImage.src = track.image;
            trackArtistImage.alt = `${track.title} by ${track.artist}`;
            trackArtistImage.classList.add('track-artist-image');
            trackArtistDiv.appendChild(trackArtistImage);
    
            const trackNameWrapper = document.createElement('div');
            trackNameWrapper.classList.add('track-name-wrapper');
    
            const trackSongName = document.createElement('div');
            trackSongName.classList.add('track-song-name');
            trackSongName.textContent = track.title;
            trackNameWrapper.appendChild(trackSongName);
    
            const trackExplicit = document.createElement('div');
            trackExplicit.classList.add('track-explicit');
    
            const trackExplicitLabel = document.createElement('div');
            trackExplicitLabel.classList.add('track-explicit-label');
            trackExplicitLabel.textContent = track.explicit ? 'Explicit' : '';
            trackExplicit.appendChild(trackExplicitLabel);
    
            trackNameWrapper.appendChild(trackExplicit);
    
            trackLeft.appendChild(trackArtistDiv);
            trackLeft.appendChild(trackNameWrapper);
    
            // Track Right Section
            const trackRight = document.createElement('div');
            trackRight.classList.add('track-right');
    
            const trackDropdown = document.createElement('div');
            trackDropdown.classList.add('track-dropdown', 'w-dropdown');
    
            const dropdownToggle = document.createElement('div');
            dropdownToggle.classList.add('dropdown-toggle', 'w-dropdown-toggle');
    
            const dropdownIcon = document.createElement('img');
            dropdownIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef84ee54e67b7_ico-track-dropdown.svg';
            dropdownIcon.alt = '';
            dropdownIcon.classList.add('ico-track-dropdown');
            dropdownToggle.appendChild(dropdownIcon);
    
            const dropdownList = document.createElement('nav');
            dropdownList.classList.add('dropdown-list', 'hero-artist', 'track', 'w-dropdown-list');
    
            const dropdownOptions = [
                'Start Radio',
                'Save to your Liked Songs',
                'Add to Queue',
                'Add to Playlist',
                'Copy Song Link',
                'Open in Desktop app',
            ];
    
            dropdownOptions.forEach((option) => {
                const dropdownLink = document.createElement('a');
                dropdownLink.classList.add('dropdownlink', 'w-dropdown-link');
                dropdownLink.textContent = option;
                dropdownList.appendChild(dropdownLink);
            });
    
            trackDropdown.appendChild(dropdownToggle);
            trackDropdown.appendChild(dropdownList);
    
            const trackTime = document.createElement('div');
            trackTime.classList.add('track-time');
            trackTime.textContent = track.duration;
    
            trackRight.appendChild(trackDropdown);
            trackRight.appendChild(trackTime);
    
            // Track Showed Note
            const trackShowedNote = document.createElement('div');
            trackShowedNote.classList.add('track-showed', 'note');
    
            const trackNoteIcon = document.createElement('img');
            trackNoteIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef831884e6850_ico-track-note.svg';
            trackNoteIcon.alt = '';
            trackNoteIcon.classList.add('ico-track-note');
            trackShowedNote.appendChild(trackNoteIcon);
    
            // Track Hover
            const trackHover = document.createElement('div');
            trackHover.classList.add('track-hover');
    
            const trackPlayIcon = document.createElement('img');
            trackPlayIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef83ff74e67cb_track-ico-play.svg';
            trackPlayIcon.alt = '';
            trackPlayIcon.classList.add('ico-track-play');
            trackHover.appendChild(trackPlayIcon);
    
            // Assemble Track Wrapper
            trackWrapper.appendChild(trackLeft);
            trackWrapper.appendChild(trackRight);
            trackWrapper.appendChild(trackShowedNote);
            trackWrapper.appendChild(trackHover);
    
            // Add Click Event to Play the Track
            trackWrapper.addEventListener('click', () => playTrack(index));
    
            // Append to Track List
            chillRight.appendChild(trackWrapper);
        });
    }

    loadTrack(currentTrackIndex);
    generateTrackList6();

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100;
    });
        }

        // Monitora a visibilidade do player e reinicia quando necessário
        const observePlayer6 = new MutationObserver(() => {
            const player = document.getElementById('chillRight');
            if (document.getElementById('chillRight') != null) {
                initializePlayer6();
            } else {
                playerInitialized6 = false; // Permitir reinicialização ao reabrir
            }
        });

        // Observar mudanças no estilo de exibição do player
        observePlayer6.observe(document.body, { attributes: true, subtree: true });





















        const player99 = document.getElementById('mmlpPlaylistSpotify');
        let playerInitialized99 = false;

        // Função para iniciar o player
        function initializePlayer99() {
            if (playerInitialized99) return;  // Previne inicializações duplicadas

            playerInitialized99 = true; // Marca como inicializado
            // Lista de músicas com informações
    const tracks = [
        {
            title: "Stan",
            artist: "Eminem, Dido",
            duration: "6:44",
            src: "https://www.dropbox.com/scl/fi/nuvnf7446jq6wsjk8v98e/Eminem-Stan-Lyrics-ft.-Dido-ezmp3.cc.mp3?rlkey=lotf4ppnwatvc5c1rhmiids83&st=tuf08qcu&dl=1",
            image: "https://www.dropbox.com/scl/fi/fily1rvq0cekyuz0a81p4/mmlp.jpg?rlkey=1h3vkgxdbt2u01lynu9q6i84n&st=wag4z492&raw=1",
        },
        {
            title: "The Way I Am",
            artist: "Eminem",
            duration: "4:53",
            src: "https://www.dropbox.com/scl/fi/n3gct1ak0ofv83u9agxkt/the-way-i-am.mp3?rlkey=8oybgglbviz3bk1sj7yol34gx&st=iuru5e5c&dl=1",
            image: "https://www.dropbox.com/scl/fi/fily1rvq0cekyuz0a81p4/mmlp.jpg?rlkey=1h3vkgxdbt2u01lynu9q6i84n&st=wag4z492&raw=1",
        },
        {
            title: "The Real Slim Shady",
            artist: "Eminem",
            duration: "4:44",
            src: "https://www.dropbox.com/scl/fi/pnepcuw3bwnbcvy34thpv/The-Real-Slim-Shady.mp3?rlkey=lajquy8qr20p746hso7hiv8l8&st=6rumbnfp&dl=1",
            image: "https://www.dropbox.com/scl/fi/fily1rvq0cekyuz0a81p4/mmlp.jpg?rlkey=1h3vkgxdbt2u01lynu9q6i84n&st=wag4z492&raw=1",
        },
        {
            title: "I'm Back",
            artist: "Eminem",
            duration: "5:09",
            src: "https://www.dropbox.com/scl/fi/sdxyh030e4g03czqakgqv/I-m-Back.mp3?rlkey=xxfj2i6an8byx94liko3tq902&st=ks85v7dx&dl=1",
            image: "https://www.dropbox.com/scl/fi/fily1rvq0cekyuz0a81p4/mmlp.jpg?rlkey=1h3vkgxdbt2u01lynu9q6i84n&st=wag4z492&raw=1",
        },
        {
            title: "Marshall Mathers",
            artist: "Eminem",
            duration: "5:21",
            src: "https://www.dropbox.com/scl/fi/h1cqgd1bdzvzqu71b0ca5/Marshall-Mathers.mp3?rlkey=uu1474tdtqrbis1uypval58wf&st=u6a5ottv&dl=1",
            image: "https://www.dropbox.com/scl/fi/fily1rvq0cekyuz0a81p4/mmlp.jpg?rlkey=1h3vkgxdbt2u01lynu9q6i84n&st=wag4z492&raw=1",
        },
        {
            title: "Drug Ballad",
            artist: "Eminem",
            duration: "5:00",
            src: "https://www.dropbox.com/scl/fi/ruuiv4wqy65iw6741v9um/Drug-Ballad.mp3?rlkey=71tp8yz1xf98oje4rrs2no4rs&st=a60zk56l&dl=1",
            image: "https://www.dropbox.com/scl/fi/fily1rvq0cekyuz0a81p4/mmlp.jpg?rlkey=1h3vkgxdbt2u01lynu9q6i84n&st=wag4z492&raw=1",
        },
        {
            title: "Amityville",
            artist: "Eminem, Bizarre",
            duration: "4:14",
            src: "https://www.dropbox.com/scl/fi/d0m2k9i4oqmrrg0exn57w/Amityville.mp3?rlkey=llwrvxzbyu82mg7s8jq2tv9qg&st=qckz6zms&dl=1",
            image: "https://www.dropbox.com/scl/fi/fily1rvq0cekyuz0a81p4/mmlp.jpg?rlkey=1h3vkgxdbt2u01lynu9q6i84n&st=wag4z492&raw=1",
        },
        {
            title: "Bitch Please II",
            artist: "Eminem, Dr. Dre, Snoop Dogg, Xzibit, Nate Dogg",
            duration: "4:48",
            src: "https://www.dropbox.com/scl/fi/79zj6knqly6ya91jcv10k/Bitch-Please-II.mp3?rlkey=dxh9ywbr0d6hla4yurmnvj0xl&st=8cfjkr8n&dl=1",
            image: "https://www.dropbox.com/scl/fi/fily1rvq0cekyuz0a81p4/mmlp.jpg?rlkey=1h3vkgxdbt2u01lynu9q6i84n&st=wag4z492&raw=1",
        },
        {
            title: "Kim",
            artist: "Eminem",
            duration: "6:17",
            src: "https://www.dropbox.com/scl/fi/6ihox97843mh0g6662s1e/Kim.mp3?rlkey=19kcd7ulgsmbe1zh9ucqzr04y&st=9jk1rjkt&dl=1",
            image: "https://www.dropbox.com/scl/fi/fily1rvq0cekyuz0a81p4/mmlp.jpg?rlkey=1h3vkgxdbt2u01lynu9q6i84n&st=wag4z492&raw=1",
        },
        {
            title: "Under The Influence",
            artist: "Eminem, D12",
            duration: "5:21",
            src: "https://www.dropbox.com/scl/fi/zutt10idsotf1e81uhsih/Under-The-Influence.mp3?rlkey=7yqmgfjl5vu7q629bvg5kdz6y&st=gh14xvm2&dl=1",
            image: "https://www.dropbox.com/scl/fi/fily1rvq0cekyuz0a81p4/mmlp.jpg?rlkey=1h3vkgxdbt2u01lynu9q6i84n&st=wag4z492&raw=1",
        },
    ];

    let currentTrackIndex = 0;
    const audio = document.getElementById('audio');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const trackImage = document.getElementById('track-image');
    const playPauseButton = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration');
    const chillPanel = document.getElementById('chillPanel');
    const volumeBar = document.getElementById('volume-bar');
    const mmlpPanel = document.getElementById('mmlpPanel');

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    function loadTrack(index) {
        currentTrackIndex = index;
        const track = tracks[index];
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        trackImage.src = track.image;
        audio.src = track.src;
        audio.load();
    }

    function togglePlayPause() {
        let playIcon = document.getElementById("playIcon")
        if (audio.paused) {
            audio.play();
            // playPauseButton.textContent = '<i class="fa-solid fa-pause"></i>';
            // if (playIcon.className == "fa-solid fa-play") {
            //     playIcon.className = "fa-solid fa-pause"
            // }
        } else {
            audio.pause();
            // if (playIcon.className == "fa-solid fa-pause") {
            //     playIcon.className = "fa-solid fa-play"
            // }
        }
    }

    function playTrack(index) {
        let playIcon = document.getElementById("playIcon")
        loadTrack(index);
        audio.play();
        // if (playIcon.className == "fa-solid fa-play") {
        //         playIcon.className = "fa-solid fa-pause"
        //     }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        playTrack(currentTrackIndex);
    }

    function generateTrackList99() {
        tracks.forEach((track, index) => {
            const trackWrapper = document.createElement('div');
            trackWrapper.classList.add('track-wrapper');
            trackWrapper.setAttribute('data-w-id', `track-${index}`);
    
            // Track Left Section
            const trackLeft = document.createElement('div');
            trackLeft.classList.add('track-left');
    
            const trackArtistDiv = document.createElement('div');
            trackArtistDiv.classList.add('track-artist');
    
            const trackArtistImage = document.createElement('img');
            trackArtistImage.src = track.image;
            trackArtistImage.alt = `${track.title} by ${track.artist}`;
            trackArtistImage.classList.add('track-artist-image');
            trackArtistDiv.appendChild(trackArtistImage);
    
            const trackNameWrapper = document.createElement('div');
            trackNameWrapper.classList.add('track-name-wrapper');
    
            const trackSongName = document.createElement('div');
            trackSongName.classList.add('track-song-name');
            trackSongName.textContent = track.title;
            trackNameWrapper.appendChild(trackSongName);
    
            const trackExplicit = document.createElement('div');
            trackExplicit.classList.add('track-explicit');
    
            const trackExplicitLabel = document.createElement('div');
            trackExplicitLabel.classList.add('track-explicit-label');
            trackExplicitLabel.textContent = track.explicit ? 'Explicit' : '';
            trackExplicit.appendChild(trackExplicitLabel);
    
            trackNameWrapper.appendChild(trackExplicit);
    
            trackLeft.appendChild(trackArtistDiv);
            trackLeft.appendChild(trackNameWrapper);
    
            // Track Right Section
            const trackRight = document.createElement('div');
            trackRight.classList.add('track-right');
    
            const trackDropdown = document.createElement('div');
            trackDropdown.classList.add('track-dropdown', 'w-dropdown');
    
            const dropdownToggle = document.createElement('div');
            dropdownToggle.classList.add('dropdown-toggle', 'w-dropdown-toggle');
    
            const dropdownIcon = document.createElement('img');
            dropdownIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef84ee54e67b7_ico-track-dropdown.svg';
            dropdownIcon.alt = '';
            dropdownIcon.classList.add('ico-track-dropdown');
            dropdownToggle.appendChild(dropdownIcon);
    
            const dropdownList = document.createElement('nav');
            dropdownList.classList.add('dropdown-list', 'hero-artist', 'track', 'w-dropdown-list');
    
            const dropdownOptions = [
                'Start Radio',
                'Save to your Liked Songs',
                'Add to Queue',
                'Add to Playlist',
                'Copy Song Link',
                'Open in Desktop app',
            ];
    
            dropdownOptions.forEach((option) => {
                const dropdownLink = document.createElement('a');
                dropdownLink.classList.add('dropdownlink', 'w-dropdown-link');
                dropdownLink.textContent = option;
                dropdownList.appendChild(dropdownLink);
            });
    
            trackDropdown.appendChild(dropdownToggle);
            trackDropdown.appendChild(dropdownList);
    
            const trackTime = document.createElement('div');
            trackTime.classList.add('track-time');
            trackTime.textContent = track.duration;
    
            trackRight.appendChild(trackDropdown);
            trackRight.appendChild(trackTime);
    
            // Track Showed Note
            const trackShowedNote = document.createElement('div');
            trackShowedNote.classList.add('track-showed', 'note');
    
            const trackNoteIcon = document.createElement('img');
            trackNoteIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef831884e6850_ico-track-note.svg';
            trackNoteIcon.alt = '';
            trackNoteIcon.classList.add('ico-track-note');
            trackShowedNote.appendChild(trackNoteIcon);
    
            // Track Hover
            const trackHover = document.createElement('div');
            trackHover.classList.add('track-hover');
    
            const trackPlayIcon = document.createElement('img');
            trackPlayIcon.src = 'https://assets.website-files.com/5e4912f308eef805924e679f/5e4912f308eef83ff74e67cb_track-ico-play.svg';
            trackPlayIcon.alt = '';
            trackPlayIcon.classList.add('ico-track-play');
            trackHover.appendChild(trackPlayIcon);
    
            // Assemble Track Wrapper
            trackWrapper.appendChild(trackLeft);
            trackWrapper.appendChild(trackRight);
            trackWrapper.appendChild(trackShowedNote);
            trackWrapper.appendChild(trackHover);
    
            // Add Click Event to Play the Track
            trackWrapper.addEventListener('click', () => playTrack(index));
    
            // Append to Track List
            mmlpPanel.appendChild(trackWrapper);
        });
    }

    loadTrack(currentTrackIndex);
    generateTrackList99();

    progressBar.addEventListener('input', () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    volumeBar.addEventListener('input', () => {
        audio.volume = volumeBar.value / 100;
    });
        }

        // Monitora a visibilidade do player e reinicia quando necessário
        const observePlayer99 = new MutationObserver(() => {
            const player = document.getElementById('mmlpPanel');
            if (document.getElementById('mmlpPanel') != null) {
                initializePlayer99();
            } else {
                playerInitialized99 = false; // Permitir reinicialização ao reabrir
            }
        });

        // Observar mudanças no estilo de exibição do player
        observePlayer99.observe(document.body, { attributes: true, subtree: true });


