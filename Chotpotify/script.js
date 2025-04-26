console.log("hello");


let currentSong = new Audio();
let songs = [];
let cloudSongs = [
    {
        title: "Ei Khola Chul",
        artist:"Bagdhara",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275287/Bagdhara_-_Ei_khola_chul_%E0%A6%8F%E0%A6%87_%E0%A6%96%E0%A7%8B%E0%A6%B2%E0%A6%BE_%E0%A6%9A%E0%A7%81%E0%A6%B2___Official_Audio_xvgw2b.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275536/Ei_Khola_Chul_jhvbur.jpg"
    },
    {
        title: "Blue",
        artist:"ykaizzk",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275293/Blue_-_ykaizzk_-_flute_version_-_wtw5zs.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745276008/blue_flute_lkal2g.jpg"
    },
    {
        title: "Bokul Phooler Mala",
        artist:"Utsho & Proloy",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275313/Bokul_Phooler_Mala_%E0%A6%AC%E0%A6%95%E0%A7%81%E0%A6%B2_%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%87%E0%A6%B0_%E0%A6%AE%E0%A6%BE%E0%A6%B2%E0%A6%BE___Latest_Bengali_Music_Video_2024___Utso___Pralay___SVFMusic_plui0b.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275556/bokul_phooler_mala_dfvp0m.jpg"
    },
    {
        title: "Can't Help Falling In Love - Bangla Version",
        artist:"Farabi Dhurv",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275311/Can_t_Help_Falling_In_Love____%E0%A6%A4%E0%A6%AC%E0%A7%81_%E0%A6%86%E0%A6%AE%E0%A6%BF_%E0%A6%AC%E0%A6%BE%E0%A6%B0%E0%A6%AC%E0%A6%BE%E0%A6%B0_%E0%A6%AC%E0%A7%8B%E0%A6%95%E0%A6%BE_%E0%A6%AC%E0%A6%A8%E0%A7%87_%E0%A6%AF%E0%A6%BE%E0%A6%87_%E0%A6%A4%E0%A7%8B%E0%A6%AE%E0%A6%BE%E0%A6%B0_%E0%A6%95%E0%A6%BE%E0%A6%9B%E0%A7%87____Farabi_Dhruv___Toisifor_Eem_dnnecp.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745276008/i_cant_help_falling_in_love_m9prtq.jpg"
    },
    {
        title: "Chotto Duto Shalik",
        artist:"Susmita Saurav & Saikat & Dipesh Chakraborty",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275304/Chotto_duto_shalik--Full_music_video_song--Susmita--Saurav--Saikat--Dipesh_Chakraborty_Songs_nqbgwq.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275556/chotto_duto_shalik_dnyka2.jpg"
    },
    {
        title: "Dobar Pala Ase Jodi",
        artist: "Hemanta Mukherjee",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275296/Dobar_Pala_Ase_Jadi_Lyrical_-_%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%AF_%E0%A6%A1%E0%A7%8B%E0%A6%AC%E0%A6%BE%E0%A6%B0_%E0%A6%AA%E0%A6%BE%E0%A6%B2%E0%A6%BE_-_Hemanta_Mukherjee_xu20ba.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275550/shurjo_dobar_pala_ashe_jodi_rbl9pp.jpg"
    },
    {
        title: "E Bhabe Golpo Hok",
        artist: "Motion Picture Soundtrack",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275315/E_Bhabe_Golpo_Hok_vjcnaz.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275559/e_bhabe_golpo_hok_kwz4nr.jpg"
    },
    {
        title: "Ghum Ghum Chand Jhikimiki Tara",
        artist:"Sandhya Mukherjee",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275310/Ghum_Ghum_Chand_Jhikimiki_Tara_with_lyrics_-_Sandhya_Mukherjee_-_HD_Song_zizbox.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275536/ghum_ghum_chand_jhikimiki_tara_xygwgr.jpg"
    },
    {
        title: "Jahan Mein Aisa Kaun Hai - Reprise",
        artist:"Ramya Ramkumar",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275322/Jahan_Mein_Aisa_Kaun_Hai_-_Reprise_g30bud.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275536/jahan_mein_aisa_kaun_hai_mx8jga.jpg"
    },
    {
        title: "Jiya ",
        artist:"Anubha Bajaj",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275326/Jiya_Official_Lyric_Video_-_Anubha_Bajaj_tntcx4.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275536/jiya_gwll4o.jpg"
    },
    {
        title: "Kabhi Kabhi",
        artist:"AUR",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275331/Kabhi_Kabhi_-_AUR___Official_Music_Video_cnzygf.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275536/kabhi_kabhi_s68jxy.jpg"
    },
    {
        title: "Kothay Kothay Je Raat Hoye Jay",
        artist:"Manna Dey",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275321/Kathay_Kathay_Je_Raat_Hoye_Jay___Sabai_To_Sukhi_Hotey_Chai___Manna_Dey___Audio_i38kfn.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275537/kathay_kathay_je_raat_hoye_jay_maabw4.jpg"
    },
    {
        title: "Koto Kotha Bola Holo Na Priyo",
        artist: "Abhisekh - Unmesh - Sneha",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275332/Koto_Kotha_Bola_Holo_Na_Priyo_-_%E0%A6%95%E0%A6%A4_%E0%A6%95%E0%A6%A5%E0%A6%BE_%E0%A6%AC%E0%A6%B2%E0%A6%BE_%E0%A6%B9%E0%A6%B2%E0%A7%8B_%E0%A6%A8%E0%A6%BE_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A7%9F_-_Abhisekh_-_Unmesh_-_Sneha_-_Bengali_Song_g4c2ds.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275537/koto_kotha_bola_bjnexz.jpg"
    },
    {
        title: "Nao",
        artist:"Prasen",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275345/Nao_pmgfr0.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275541/Nao_et0znp.jpg"
    },
    {
        title: "Polash Ronger Bhalobasha ",
        artist: "Dwitiya Bhaag - Soutik Shuvra Aniket",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275339/Polash_Ronger_Bhalobasha_%E0%A6%AA%E0%A6%B2%E0%A6%BE%E0%A6%B6_%E0%A6%B0%E0%A6%99%E0%A7%87%E0%A6%B0_%E0%A6%AD%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A6%BE_-_Dwitiya_Bhaag_-_Soutik_Shuvra_Aniket_-_Bangla_Gaan_vbce6t.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745276008/polash_ronger_valobasha_acb2fr.jpg"
    },
    {
        title: "Porshi Premer Gaan",
        artist: "Saswata & Suchandrika & Imam & Pramit  & Debdeep",
        url: "https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275297/Porshi_Premer_Gaan_%E0%A6%AA%E0%A7%9C%E0%A6%B6%E0%A7%80_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%AE%E0%A7%87%E0%A6%B0_%E0%A6%97%E0%A6%BE%E0%A6%A8___Saswata___Suchandrika___Imam___Pramit___Debdeep_qhn1lj.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275542/porshi_premer_gaan_nlahzr.jpg"
    },
    {
        title: "Premik Na Hoy Bhabo",
        artist:"Rupaktiary, Jhonti, Debdeep",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275294/Premik_Na_Hoy_Bhabo_-_rupaktiary_Jhonti_Debdeep_-_Usnish_Ruchira-_Srijit_-_New_Bengali_Song_2022_rpwxc7.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745276008/premik_nahoy_bhabo_jso3pt.jpg"
    },
    {
        title: "Preyoshi",
        artist:"Poizon Green",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275302/Preyoshi___Poizon_Green___Album_Firing_Squad___Official_lyrical_Video_tvvjug.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275542/preyoshi_jxm2no.jpg"
    },
    {
        title: "Sada Kalo Prem",
        artist:"Niharika Nath - Jakiruddin Khan - Somraj",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275292/Sada_Kalo_Prem_TITLE_TRACK_Niharika_Nath_-_Jakiruddin_Khan_-_Somraj_-_Bengali_Romantic_Song_2024_kqx0zw.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275543/sada_kalo_prem_n2egrq.jpg"
    },
    {
        title: "Sara Dao",
        artist: "Kabir Suman",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275312/Sara_Dao_-_Kabir_Suman__Through_The_Olive_Trees_wqcqgr.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275543/sara_dao_fh2jqa.jpg"
    },
    {
        title: "Shudhu Tomake",
        artist:"FRANKLIN",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275315/Shudhu_Tomake_-_%E0%A6%B6%E0%A7%81%E0%A6%A7%E0%A7%81_%E0%A6%A4%E0%A7%87%E0%A6%BE%E0%A6%AE%E0%A6%BE%E0%A6%95%E0%A7%87_-_FRANKLIN_banglamusic_banglasong_p9gbww.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275550/shudhu_tomake_a6cmro.jpg"
    },
    {
        title: "Shudhu Tomakei Bhalobese",
        artist:"Nilanjan, Sudhaborshy",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275314/Shudhu_Tomakei_Bhalobese_-_Nilanjan_Sudhaborshy_i01des.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275550/shudhu_tomakei_bhalobeshe_d6vjmm.jpg"
    },
    {
        title: "Sob Guliye Jay",
        artist: "Nilajan Ghoshal",
        url:"https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275328/Sob_Guliye_Jay_%E0%A6%B8%E0%A6%AC_%E0%A6%97%E0%A7%81%E0%A6%B2%E0%A6%BF%E0%A7%9F%E0%A7%87_%E0%A6%AF%E0%A6%BE%E0%A7%9F_-_Bengali_Original_Song._Use_headphones_hnhw3o.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275543/shob_guliye_jay_yyy7id.jpg"
    },
    {
        title: "Shomoy",
        artist: "Avishek Saha",
        url: "https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275334/Somoy_cvr5ot.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275543/shomoy_fkczuu.jpg"
    },
    {
        title: "Subho Bibaho Serial Title Song",
        artist: "Rahul Dutta Anushka Patra Santajit",
        url: "https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275337/Subho_Bibaho_Serial_Title_Song___Rahul_Dutta___Anushka_Patra___Santajit_yd3moa.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745276008/shubho_bibaho_title_track_yydbjp.jpg"
    },
    {
        title: "SukhJapon",
        artist:"Rohit & Titlee",
        url: "https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275345/SukhJapon_-_%E0%A6%B8%E0%A7%81%E0%A6%96%E0%A6%AF%E0%A6%BE%E0%A6%AA%E0%A6%A8_Full_Original_New_Song_Bengali_Music_Video_2024___Latest_Song_Rohit___Titlee_vd3wzx.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275550/shukh_japon_aezlcg.jpg"
    },
    {
        title: "Taakey Jato Tarai Dure",
        artist: "Mohiner Ghoraguli",
        url: "https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275348/Taakey_Jato_Tarai_Dure_-_Mohiner_Ghoraguli_zgijx6.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275551/takey_joto_tarai_dure_dure_m7drgt.jpg"
    },
    {
        title: "Tomake Shonai",
        artist: "Debdeep Banik - Tamalika Golder - Ushasee Kar - Ayan Banerjee",
        url: "https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275348/Tomake_Shonai_%E0%A6%A4%E0%A7%8B%E0%A6%AE%E0%A6%BE%E0%A6%95%E0%A7%87_%E0%A6%B6%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%87_-_Debdeep_Banik_-_Tamalika_Golder_-_Ushasee_Kar_-_Ayan_Banerjee_kx3a1v.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745276009/tomake_shonai_duvxss.jpg"
    },
    {
        title: "Tomar Prio Ritu Borsha Tai",
        artist: "Upal Nilanjan",
        url: "https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275347/Tomar_Priyo_Ritu_Barsha_Tai_s1lysk.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275553/tomar_priyo_ritu_borsha_tai_ongvwz.jpg"
    },
    {
        title: "Uttap",
        artist: "Nilanjan Ghoshal",
        url: "https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275350/Uttap_%E0%A6%89%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%AA___new_bengali_song_ws3rjd.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275555/uttap_v2ucva.jpg"
    },
    {
        title: "Jaani Dekha Hobe (Female Version)",
        artist: "Shreya Ghoshal",
        url: "https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275355/%E0%A6%9C%E0%A6%BE%E0%A6%A8%E0%A6%BF_%E0%A6%A6%E0%A7%87%E0%A6%96%E0%A6%BE_%E0%A6%B9%E0%A6%AC%E0%A7%87_-_Jaani_Dekha_Hobe_Female_Version_-_Lyrical_-_Shreya_Ghoshal_-_%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE_%E0%A6%97%E0%A6%BE%E0%A6%A8_imyvrs.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275536/jaani_dekha_hobe_zpkfgy.jpg"
    },
    {
        title: "Yuddher Gaan",
        artist: "Dwitiya Bhaag _ Aniket Soutik Shuvra",
        url: "https://res.cloudinary.com/dgmaxgtno/video/upload/v1745275355/Yuddher_Gaan___%E0%A6%AF%E0%A7%81%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A7%87%E0%A6%B0_%E0%A6%97%E0%A6%BE%E0%A6%A8___Dwitiya_Bhaag___Aniket_Soutik_Shuvra___Bengali_Original_Song_rudi0w.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745275555/yuddher_gaan_drlnc7.jpg"
    },
    {
        title: "Tumi Amar Onek Shokher",
        artist: "Piran Khan",
        url: "https://res.cloudinary.com/dgmaxgtno/video/upload/v1745506796/Tumi_Amar_Onek_Shokher_-_Arifur_Rahman_Jony_-_Piran_Khan_-%E0%A6%A4%E0%A7%81%E0%A6%AE%E0%A6%BF_%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%B0_%E0%A6%85%E0%A6%A8%E0%A7%87%E0%A6%95_%E0%A6%B6%E0%A6%96%E0%A7%87%E0%A6%B0-_Jovan_-_Safa_Kabir_-_k2efvu.mp3",
        cover:"https://res.cloudinary.com/dgmaxgtno/image/upload/v1745514091/tumi_amar_onek_shokher_eaouly.jpg"
    },


];

//second to MM:SS conversion
function scndToMinSec(sec){
    if (isNaN(sec) || sec < 0){
        return "00:00";
    }
    const min = Math.floor(sec/60);
    const seconds = Math.floor(sec % 60);
    return `${String(min).padStart(2,"0")}:${String(seconds).padStart(2,"0")};`
}


//Loading songs from cloud

async function getCloudSongs() {
    songs = cloudSongs.map((song)=>{
        return song.url                 //songs array is now filled with the url of songs
    })

    let songUL = document.querySelector(".songList ul")
    songUL.innerHTML = ""; //music list faka ekhon

    for (const song of cloudSongs) {
        songUL.innerHTML = songUL.innerHTML + `
        <li>
    <img src="${song.cover}" class="song-cover" width="88" style = "border-radius:10px">
    <div class="info">
        <div style="font-size: 20px">${song.title}</div>
        <div style="color : grey; font-size: 12px">${song.artist}</div>
    </div>
    <div class="playNow">
        <span>Play Now</span>
        <img src="./img/svg/play-svgrepo-com.svg" alt="">
    </div>
        </li>
        `
    }

    //adding event listener to all the list element
    let songArr = Array.from(document.querySelectorAll(".songList li"))
    songArr.forEach((li ,index)=> {
        li.addEventListener("click",()=>{
            return playMusic(index)
        })
    });
}


//music play for idx

const playMusic  = (idx,pause = false)=>{
    const track = cloudSongs[idx];
    currentSong.src = track.url;

    if (!pause){
        currentSong.play().then(()=>{
            play.src = "img/svg/pause-svgrepo-com.svg"
        }).catch((err)=>{
            console.warn("Playback Blocked:",err)
        })
    }
    document.querySelector(".songinfo").innerHTML =`
        <img src = "${track.cover}" width="88" style="margin-right: 8px;">
        ${track.title}
    `;
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

function togglePlayPause(){
    if(currentSong.paused){
        currentSong.play();
        play.src = "./img/svg/play-svgrepo-com.svg"
    }else{
        currentSong.pause();
        play.src = "img/svg/pause-svgrepo-com.svg"
    }
}



async function main() {

    await getCloudSongs();
    playMusic(0,true)  //preload first song but dont play

    // Play/Pause Button
    const playButton = document.getElementById("play");
    if (playButton) {
        playButton.addEventListener("click",togglePlayPause)
    }
}

main();