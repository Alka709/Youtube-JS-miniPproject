const getSuggestionAPI=(searchText)=>{
    console.log("API CALLED",searchText);
    const request=fetch(`https://youtube138.p.rapidapi.com/auto-complete/?q=${searchText}&hl=en&gl=US`,{
        method:'GET',
        headers:{
            "x-rapidapi-host":"youtube138.p.rapidapi.com",
	        "x-rapidapi-key":"4f919f749fmsh7b06359c9034437p196dd2jsnb6aac1e69eea"
        },
    });

    request.then((response)=>{
        const pr2=response.json();
        pr2.then((data)=>{
            console.log("result",data);
        });
    })
    .catch((err)=>{
        alert("Suggestion Error:",err.message);
    });
    

};

let id=null;
const getSmartSuggestionAPI=(txt)=>{
    clearTimeout(id);
    
    id=setTimeout(()=>{
        getSuggestionAPI(txt);
    },1000);
};

const data ={
    "status": "success",
    "list": [
        {
            "type": "video",
            "title": "🔴IF I Mess Up, The Treadmill SPEEDS Up😭 Say Word On Beat Challenge",
            "videoId": "EYDm9HkvM2A",
            "author": "BUKO",
            "authorId": "UCIU9cV1CA6UxVmL3GPAuOCg",
            "authorUrl": "/channel/UCIU9cV1CA6UxVmL3GPAuOCg",
            "authorVerified": false,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/Rky9NIlwggdCKs0CWErLHJrAK8ldZ8OOFl0tdGyld1QWTr92_lRKLy1LZd-kx8Max3Hi0Bdy=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/Rky9NIlwggdCKs0CWErLHJrAK8ldZ8OOFl0tdGyld1QWTr92_lRKLy1LZd-kx8Max3Hi0Bdy=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/Rky9NIlwggdCKs0CWErLHJrAK8ldZ8OOFl0tdGyld1QWTr92_lRKLy1LZd-kx8Max3Hi0Bdy=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/Rky9NIlwggdCKs0CWErLHJrAK8ldZ8OOFl0tdGyld1QWTr92_lRKLy1LZd-kx8Max3Hi0Bdy=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/Rky9NIlwggdCKs0CWErLHJrAK8ldZ8OOFl0tdGyld1QWTr92_lRKLy1LZd-kx8Max3Hi0Bdy=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/Rky9NIlwggdCKs0CWErLHJrAK8ldZ8OOFl0tdGyld1QWTr92_lRKLy1LZd-kx8Max3Hi0Bdy=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/EYDm9HkvM2A/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/EYDm9HkvM2A/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/EYDm9HkvM2A/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/EYDm9HkvM2A/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/EYDm9HkvM2A/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/EYDm9HkvM2A/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/EYDm9HkvM2A/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/EYDm9HkvM2A/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "🎮BUKO is playing SAY THE WORD ON BEAT CHAALLENGE / GAME! BUT... If he messes up his treadmill will SPEED up!\n\nTwitch: https://www.twitch.tv/00buko\nDiscord: https://discord.gg/b9bStthk\nMerch:...",
            "descriptionHtml": "🎮BUKO is playing SAY THE WORD ON BEAT CHAALLENGE / GAME! BUT... If he messes up his treadmill will SPEED up!<br><br>Twitch: https://www.twitch.tv/00buko<br>Discord: https://discord.gg/b9bStthk<br>Merch:...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "That Vegan Teacher is live!",
            "videoId": "Qih041f16VQ",
            "author": "That Vegan Teacher",
            "authorId": "UC-q4j_ttUgWmir4-Cwh_Hrg",
            "authorUrl": "/channel/UC-q4j_ttUgWmir4-Cwh_Hrg",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/qToLx16p-FIfpS2O79JenWDfYhUe0qPyF9Kc9Bs7Xz_VaoW9CnjpwvwWrxIwxEOr36BXOFrXUQ=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/qToLx16p-FIfpS2O79JenWDfYhUe0qPyF9Kc9Bs7Xz_VaoW9CnjpwvwWrxIwxEOr36BXOFrXUQ=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/qToLx16p-FIfpS2O79JenWDfYhUe0qPyF9Kc9Bs7Xz_VaoW9CnjpwvwWrxIwxEOr36BXOFrXUQ=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/qToLx16p-FIfpS2O79JenWDfYhUe0qPyF9Kc9Bs7Xz_VaoW9CnjpwvwWrxIwxEOr36BXOFrXUQ=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/qToLx16p-FIfpS2O79JenWDfYhUe0qPyF9Kc9Bs7Xz_VaoW9CnjpwvwWrxIwxEOr36BXOFrXUQ=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/qToLx16p-FIfpS2O79JenWDfYhUe0qPyF9Kc9Bs7Xz_VaoW9CnjpwvwWrxIwxEOr36BXOFrXUQ=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/Qih041f16VQ/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/Qih041f16VQ/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/Qih041f16VQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/Qih041f16VQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/Qih041f16VQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/Qih041f16VQ/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/Qih041f16VQ/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/Qih041f16VQ/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Don't be veganphobic. Be veganphantastic. Save animals. Eat plants. Repeat tomorrow. \n💚 Contact me here! Cameo (personalized birthday or congratulatory messages): https://cameo.com/thatveganteac...",
            "descriptionHtml": "Don&#39;t be veganphobic. Be veganphantastic. Save animals. Eat plants. Repeat tomorrow. <br>💚 Contact me here! Cameo (personalized birthday or congratulatory messages): https://cameo.com/thatveganteac...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "'HE MAY BE THE SUSPECT!' Ashleigh Banfield Gives SHOCKING Details In Nancy Guthrie's Abduction",
            "videoId": "ohDeg43jzzc",
            "author": "The Pascal Show",
            "authorId": "UCI49mIUtyctTFRcxw057a3A",
            "authorUrl": "/channel/UCI49mIUtyctTFRcxw057a3A",
            "authorVerified": false,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_nTK0w1kwHS9Vgsyp4E-kUqPDtBAOLHJrYg6z0PKF2vzF0=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_nTK0w1kwHS9Vgsyp4E-kUqPDtBAOLHJrYg6z0PKF2vzF0=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_nTK0w1kwHS9Vgsyp4E-kUqPDtBAOLHJrYg6z0PKF2vzF0=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_nTK0w1kwHS9Vgsyp4E-kUqPDtBAOLHJrYg6z0PKF2vzF0=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_nTK0w1kwHS9Vgsyp4E-kUqPDtBAOLHJrYg6z0PKF2vzF0=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_nTK0w1kwHS9Vgsyp4E-kUqPDtBAOLHJrYg6z0PKF2vzF0=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/ohDeg43jzzc/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/ohDeg43jzzc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/ohDeg43jzzc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/ohDeg43jzzc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/ohDeg43jzzc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/ohDeg43jzzc/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/ohDeg43jzzc/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/ohDeg43jzzc/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Join this channel to get access to perks:\nhttps://www.youtube.com/channel/UCI49mIUtyctTFRcxw057a3A/join\n\nJOIN IN MY JOURNEY TO 200,000 SUBSCRIBERS!!!!  \nSUBSCRIBE, LIKE, COMMENT AND SHARE!!!!...",
            "descriptionHtml": "Join this channel to get access to perks:<br>https://www.youtube.com/channel/UCI49mIUtyctTFRcxw057a3A/join<br><br>JOIN IN MY JOURNEY TO 200,000 SUBSCRIBERS!!!!  <br>SUBSCRIBE, LIKE, COMMENT AND SHARE!!!!...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "Kentucky vs Oklahoma LIVE FHD | NCAA Men's College Basketball 2026",
            "videoId": "SuT7BiNVgUs",
            "author": "Selva Tech",
            "authorId": "UCiKftDUV6fiBc4vOTYqaHNg",
            "authorUrl": "/channel/UCiKftDUV6fiBc4vOTYqaHNg",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/SuT7BiNVgUs/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/SuT7BiNVgUs/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/SuT7BiNVgUs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/SuT7BiNVgUs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/SuT7BiNVgUs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/SuT7BiNVgUs/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/SuT7BiNVgUs/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/SuT7BiNVgUs/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Kentucky vs Oklahoma LIVE FHD | NCAA Men's College Basketball 2026\nKentucky vs Oklahoma LIVE FHD | NCAA Men's College Basketball 2026\nKentucky vs Oklahoma LIVE FHD | NCAA Men's College Basketball 2026",
            "descriptionHtml": "Kentucky vs Oklahoma LIVE FHD | NCAA Men&#39;s College Basketball 2026<br>Kentucky vs Oklahoma LIVE FHD | NCAA Men&#39;s College Basketball 2026<br>Kentucky vs Oklahoma LIVE FHD | NCAA Men&#39;s College Basketball 2026",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "El Objetivo No Era el Juego (Dia #31) – El Rancho de Destino By el Abogado Robert Domínguez",
            "videoId": "KTxg0m723EA",
            "author": "Destino Tolk",
            "authorId": "UCcuzyvKooX95qSJ3tl9PRaA",
            "authorUrl": "/channel/UCcuzyvKooX95qSJ3tl9PRaA",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/oGd0m03Y0gN2vvJhCs78TILrLJXATjjSxKVdgQ5KtkQDgfZz_jYws1IAwZHLFx1bcW-UW2Ytsg=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/oGd0m03Y0gN2vvJhCs78TILrLJXATjjSxKVdgQ5KtkQDgfZz_jYws1IAwZHLFx1bcW-UW2Ytsg=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/oGd0m03Y0gN2vvJhCs78TILrLJXATjjSxKVdgQ5KtkQDgfZz_jYws1IAwZHLFx1bcW-UW2Ytsg=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/oGd0m03Y0gN2vvJhCs78TILrLJXATjjSxKVdgQ5KtkQDgfZz_jYws1IAwZHLFx1bcW-UW2Ytsg=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/oGd0m03Y0gN2vvJhCs78TILrLJXATjjSxKVdgQ5KtkQDgfZz_jYws1IAwZHLFx1bcW-UW2Ytsg=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/oGd0m03Y0gN2vvJhCs78TILrLJXATjjSxKVdgQ5KtkQDgfZz_jYws1IAwZHLFx1bcW-UW2Ytsg=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/KTxg0m723EA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/KTxg0m723EA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/KTxg0m723EA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/KTxg0m723EA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/KTxg0m723EA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/KTxg0m723EA/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/KTxg0m723EA/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/KTxg0m723EA/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "El Rancho de Destino es el primer reality show en la ciudad de Miami transmitido 24/7 por YouTube durante más de un mes, sin cortes y con acceso total a lo que realmente pasa. Un grupo de...",
            "descriptionHtml": "El Rancho de Destino es el primer reality show en la ciudad de Miami transmitido 24/7 por YouTube durante más de un mes, sin cortes y con acceso total a lo que realmente pasa. Un grupo de...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "Kentucky vs Oklahoma LIVE FHD | NCAA Men's College Basketball 2026",
            "videoId": "HEuzEIyxHLY",
            "author": "Selva Tech",
            "authorId": "UCiKftDUV6fiBc4vOTYqaHNg",
            "authorUrl": "/channel/UCiKftDUV6fiBc4vOTYqaHNg",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/ViC4QlDog5cWqW8AOM75RXSRQHeSaZSHO3iL3siHdfD_malxg8c9JNBzUDu9jXThL0IKmmNCtL8=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/HEuzEIyxHLY/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/HEuzEIyxHLY/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/HEuzEIyxHLY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/HEuzEIyxHLY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/HEuzEIyxHLY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/HEuzEIyxHLY/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/HEuzEIyxHLY/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/HEuzEIyxHLY/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Kentucky vs Oklahoma LIVE FHD | NCAA Men's College Basketball 2026\nKentucky vs Oklahoma LIVE FHD | NCAA Men's College Basketball 2026\nKentucky vs Oklahoma LIVE FHD | NCAA Men's College Basketball 2026",
            "descriptionHtml": "Kentucky vs Oklahoma LIVE FHD | NCAA Men&#39;s College Basketball 2026<br>Kentucky vs Oklahoma LIVE FHD | NCAA Men&#39;s College Basketball 2026<br>Kentucky vs Oklahoma LIVE FHD | NCAA Men&#39;s College Basketball 2026",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "Panamá vs República Dominicana | 4 de febrero de 2026",
            "videoId": "AuAlpkFCYNY",
            "author": "Liga ARCO Mexicana del Pacífico",
            "authorId": "UCdW_4rN3OarOoawQ4Er-ZXw",
            "authorUrl": "/channel/UCdW_4rN3OarOoawQ4Er-ZXw",
            "authorVerified": false,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/FJ5dzcL7aKlO-eUDYCJ_D1b7Srsh28jjzYyGBp6P6DqJdJfwB1cZoKkdtD-bRfhTqZvci-9N=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/FJ5dzcL7aKlO-eUDYCJ_D1b7Srsh28jjzYyGBp6P6DqJdJfwB1cZoKkdtD-bRfhTqZvci-9N=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/FJ5dzcL7aKlO-eUDYCJ_D1b7Srsh28jjzYyGBp6P6DqJdJfwB1cZoKkdtD-bRfhTqZvci-9N=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/FJ5dzcL7aKlO-eUDYCJ_D1b7Srsh28jjzYyGBp6P6DqJdJfwB1cZoKkdtD-bRfhTqZvci-9N=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/FJ5dzcL7aKlO-eUDYCJ_D1b7Srsh28jjzYyGBp6P6DqJdJfwB1cZoKkdtD-bRfhTqZvci-9N=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/FJ5dzcL7aKlO-eUDYCJ_D1b7Srsh28jjzYyGBp6P6DqJdJfwB1cZoKkdtD-bRfhTqZvci-9N=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/AuAlpkFCYNY/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/AuAlpkFCYNY/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/AuAlpkFCYNY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/AuAlpkFCYNY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/AuAlpkFCYNY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/AuAlpkFCYNY/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/AuAlpkFCYNY/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/AuAlpkFCYNY/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Serie del Caribe 2026, desde el Estadio Charros de Jalisco en Zapopan, Jalisco, México.",
            "descriptionHtml": "Serie del Caribe 2026, desde el Estadio Charros de Jalisco en Zapopan, Jalisco, México.",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "Alabama vs Texas A&M LIVE FHD | NCAA Men's College Basketball 2026",
            "videoId": "1C66-of1G3I",
            "author": "Mr.Creaτive தமிழ்",
            "authorId": "UC4YK3C82BSN63GOQhxuSRpw",
            "authorUrl": "/channel/UC4YK3C82BSN63GOQhxuSRpw",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/NzbXnkCK1x3DjpunY0-_vuCeuivamDy4nUMuxZDKcdQUeVbXsl2QtkUZFOFVdIODCbGX7cO3=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/NzbXnkCK1x3DjpunY0-_vuCeuivamDy4nUMuxZDKcdQUeVbXsl2QtkUZFOFVdIODCbGX7cO3=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/NzbXnkCK1x3DjpunY0-_vuCeuivamDy4nUMuxZDKcdQUeVbXsl2QtkUZFOFVdIODCbGX7cO3=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/NzbXnkCK1x3DjpunY0-_vuCeuivamDy4nUMuxZDKcdQUeVbXsl2QtkUZFOFVdIODCbGX7cO3=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/NzbXnkCK1x3DjpunY0-_vuCeuivamDy4nUMuxZDKcdQUeVbXsl2QtkUZFOFVdIODCbGX7cO3=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/NzbXnkCK1x3DjpunY0-_vuCeuivamDy4nUMuxZDKcdQUeVbXsl2QtkUZFOFVdIODCbGX7cO3=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/1C66-of1G3I/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/1C66-of1G3I/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/1C66-of1G3I/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/1C66-of1G3I/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/1C66-of1G3I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/1C66-of1G3I/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/1C66-of1G3I/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/1C66-of1G3I/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Alabama vs Texas A&M LIVE FHD | NCAA Men's College Basketball 2026\nAlabama vs Texas A&M LIVE FHD | NCAA Men's College Basketball 2026\nAlabama vs Texas A&M LIVE FHD | NCAA Men's College Basketball 2026",
            "descriptionHtml": "Alabama vs Texas A&amp;M LIVE FHD | NCAA Men&#39;s College Basketball 2026<br>Alabama vs Texas A&amp;M LIVE FHD | NCAA Men&#39;s College Basketball 2026<br>Alabama vs Texas A&amp;M LIVE FHD | NCAA Men&#39;s College Basketball 2026",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "WHEN YOUR PARENTS WIN THE LOTTERY | THE MOVIE",
            "videoId": "IhpnQFqEWXA",
            "author": "Darryl Mayes",
            "authorId": "UCOAh7LxxMFBFLeRrKGKhScA",
            "authorUrl": "/channel/UCOAh7LxxMFBFLeRrKGKhScA",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/Xn9d12Qai7hFRBAZk_FPKkoev526hoSwnHhjOlL9TdYwAtRKq25zmT0P9WYJ6Mw6Yy6OeNXing=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/Xn9d12Qai7hFRBAZk_FPKkoev526hoSwnHhjOlL9TdYwAtRKq25zmT0P9WYJ6Mw6Yy6OeNXing=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/Xn9d12Qai7hFRBAZk_FPKkoev526hoSwnHhjOlL9TdYwAtRKq25zmT0P9WYJ6Mw6Yy6OeNXing=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/Xn9d12Qai7hFRBAZk_FPKkoev526hoSwnHhjOlL9TdYwAtRKq25zmT0P9WYJ6Mw6Yy6OeNXing=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/Xn9d12Qai7hFRBAZk_FPKkoev526hoSwnHhjOlL9TdYwAtRKq25zmT0P9WYJ6Mw6Yy6OeNXing=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/Xn9d12Qai7hFRBAZk_FPKkoev526hoSwnHhjOlL9TdYwAtRKq25zmT0P9WYJ6Mw6Yy6OeNXing=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/IhpnQFqEWXA/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/IhpnQFqEWXA/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/IhpnQFqEWXA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/IhpnQFqEWXA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/IhpnQFqEWXA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/IhpnQFqEWXA/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/IhpnQFqEWXA/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/IhpnQFqEWXA/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Thank y'all so much for the wait!!\nThis was my BIGGEST project ever and so it took me longer than expected but I'm proud of the way it came out and i hope y'all love it! ❤️\n\nShout out to...",
            "descriptionHtml": "Thank y&#39;all so much for the wait!!<br>This was my BIGGEST project ever and so it took me longer than expected but I&#39;m proud of the way it came out and i hope y&#39;all love it! ❤️<br><br>Shout out to...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 4734,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "Notre Dame vs Louisville LIVE | College Men Basketball Feb 4,2026 | NCAAM 2026 LIVE",
            "videoId": "NqEwNeuc65U",
            "author": "TAMIL VLOGER",
            "authorId": "UCz0-YkIAIzEpxs-0fDFfzbg",
            "authorUrl": "/channel/UCz0-YkIAIzEpxs-0fDFfzbg",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/otZDqIHDjJWNY_-KOw2vlqEUxD5ezspok4rUheXj32cAjSj26xIorpsSOnw0VBWJuYpbb-3EXg=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/otZDqIHDjJWNY_-KOw2vlqEUxD5ezspok4rUheXj32cAjSj26xIorpsSOnw0VBWJuYpbb-3EXg=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/otZDqIHDjJWNY_-KOw2vlqEUxD5ezspok4rUheXj32cAjSj26xIorpsSOnw0VBWJuYpbb-3EXg=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/otZDqIHDjJWNY_-KOw2vlqEUxD5ezspok4rUheXj32cAjSj26xIorpsSOnw0VBWJuYpbb-3EXg=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/otZDqIHDjJWNY_-KOw2vlqEUxD5ezspok4rUheXj32cAjSj26xIorpsSOnw0VBWJuYpbb-3EXg=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/otZDqIHDjJWNY_-KOw2vlqEUxD5ezspok4rUheXj32cAjSj26xIorpsSOnw0VBWJuYpbb-3EXg=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/NqEwNeuc65U/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/NqEwNeuc65U/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/NqEwNeuc65U/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/NqEwNeuc65U/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/NqEwNeuc65U/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/NqEwNeuc65U/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/NqEwNeuc65U/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/NqEwNeuc65U/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Notre Dame vs Louisville LIVE | College Men Basketball Feb 4,2026 | NCAAM 2026 LIVE",
            "descriptionHtml": "Notre Dame vs Louisville LIVE | College Men Basketball Feb 4,2026 | NCAAM 2026 LIVE",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "LIVE News | Trump Epstein Files Confirmation: White House Chief of Staff Addresses Past Ties | Bondi",
            "videoId": "J13I-QHnxcw",
            "author": "Times Now",
            "authorId": "UC6RJ7-PaXg6TIH2BzZfTV7w",
            "authorUrl": "/channel/UC6RJ7-PaXg6TIH2BzZfTV7w",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/tbt86hlboNiJbdDEbSzJAPxcs8f_NGc9PjowG_nv932vS1TM_o1hKpQBQKlhpVDe-wg9NJFWsg=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/tbt86hlboNiJbdDEbSzJAPxcs8f_NGc9PjowG_nv932vS1TM_o1hKpQBQKlhpVDe-wg9NJFWsg=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/tbt86hlboNiJbdDEbSzJAPxcs8f_NGc9PjowG_nv932vS1TM_o1hKpQBQKlhpVDe-wg9NJFWsg=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/tbt86hlboNiJbdDEbSzJAPxcs8f_NGc9PjowG_nv932vS1TM_o1hKpQBQKlhpVDe-wg9NJFWsg=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/tbt86hlboNiJbdDEbSzJAPxcs8f_NGc9PjowG_nv932vS1TM_o1hKpQBQKlhpVDe-wg9NJFWsg=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/tbt86hlboNiJbdDEbSzJAPxcs8f_NGc9PjowG_nv932vS1TM_o1hKpQBQKlhpVDe-wg9NJFWsg=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/J13I-QHnxcw/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/J13I-QHnxcw/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/J13I-QHnxcw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/J13I-QHnxcw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/J13I-QHnxcw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/J13I-QHnxcw/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/J13I-QHnxcw/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/J13I-QHnxcw/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "The Department of Justice is up against a deadline to publicly release government files on Jeffrey Epstein — and Senate Democrats don’t plan on letting the Trump administration forget the...",
            "descriptionHtml": "The Department of Justice is up against a deadline to publicly release government files on Jeffrey Epstein — and Senate Democrats don’t plan on letting the Trump administration forget the...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "BREAKING: Iran Threatens to DESTROY the US & Trump - Peace Talks Falter",
            "videoId": "hORpozEgKEc",
            "author": "Steve Ram",
            "authorId": "UC_9iG1I_ic5jUOyzR9vTMBg",
            "authorUrl": "/channel/UC_9iG1I_ic5jUOyzR9vTMBg",
            "authorVerified": false,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/d3y_X0_v0SqHEGfUspogRhoG2jNNhkbwVgvYUXTf2vWXAhouHgEeks1tmeTzBGV2THTctm3eoy8=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/d3y_X0_v0SqHEGfUspogRhoG2jNNhkbwVgvYUXTf2vWXAhouHgEeks1tmeTzBGV2THTctm3eoy8=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/d3y_X0_v0SqHEGfUspogRhoG2jNNhkbwVgvYUXTf2vWXAhouHgEeks1tmeTzBGV2THTctm3eoy8=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/d3y_X0_v0SqHEGfUspogRhoG2jNNhkbwVgvYUXTf2vWXAhouHgEeks1tmeTzBGV2THTctm3eoy8=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/d3y_X0_v0SqHEGfUspogRhoG2jNNhkbwVgvYUXTf2vWXAhouHgEeks1tmeTzBGV2THTctm3eoy8=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/d3y_X0_v0SqHEGfUspogRhoG2jNNhkbwVgvYUXTf2vWXAhouHgEeks1tmeTzBGV2THTctm3eoy8=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/hORpozEgKEc/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/hORpozEgKEc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/hORpozEgKEc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/hORpozEgKEc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/hORpozEgKEc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/hORpozEgKEc/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/hORpozEgKEc/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/hORpozEgKEc/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "BREAKING NEWS: U.S.-Iran nuclear talks back on after Arab leaders lobby White House https://www.axios.com/2026/02/04/iran-nuclear-talks-canceled-witkoff\nIran's Jaw-Dropping Message To Trump...",
            "descriptionHtml": "BREAKING NEWS: U.S.-Iran nuclear talks back on after Arab leaders lobby White House https://www.axios.com/2026/02/04/iran-nuclear-talks-canceled-witkoff<br>Iran&#39;s Jaw-Dropping Message To Trump...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "\"IDK The Solution!\" Dems Admit DEFEAT on Immigration",
            "videoId": "UBpz8mA2wZc",
            "author": "Liberty Hangout",
            "authorId": "UCQMb7c66tJ7Si8IrWHOgAPg",
            "authorUrl": "/channel/UCQMb7c66tJ7Si8IrWHOgAPg",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_kyenElRU8DcRsatnyGfULdzr9PCrHs93W2NP4lc__H6Rk=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_kyenElRU8DcRsatnyGfULdzr9PCrHs93W2NP4lc__H6Rk=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_kyenElRU8DcRsatnyGfULdzr9PCrHs93W2NP4lc__H6Rk=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_kyenElRU8DcRsatnyGfULdzr9PCrHs93W2NP4lc__H6Rk=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_kyenElRU8DcRsatnyGfULdzr9PCrHs93W2NP4lc__H6Rk=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/ytc/AIdro_kyenElRU8DcRsatnyGfULdzr9PCrHs93W2NP4lc__H6Rk=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/UBpz8mA2wZc/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/UBpz8mA2wZc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/UBpz8mA2wZc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/UBpz8mA2wZc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/UBpz8mA2wZc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/UBpz8mA2wZc/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/UBpz8mA2wZc/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/UBpz8mA2wZc/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Democrats at UF struggle to support their position and offer NO alternative to Trump's immigration policies. Watch how Kaitlin Bennett confronts them with the cold hard facts.\n\nSUBSCRIBE for...",
            "descriptionHtml": "Democrats at UF struggle to support their position and offer NO alternative to Trump&#39;s immigration policies. Watch how Kaitlin Bennett confronts them with the cold hard facts.<br><br>SUBSCRIBE for...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 1544,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "Bill Clinton Testifies In Epstein House Probe; Republicans Grill Clintons Over Epstein Links",
            "videoId": "6sFhW6LS5Ec",
            "author": "Times Of India",
            "authorId": "UCckHqySbfy5FcPP6MD_S-Yg",
            "authorUrl": "/channel/UCckHqySbfy5FcPP6MD_S-Yg",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/cJ4vDypJDnXZhV5MxHZ3-f7nr1h9zEv4Zh7mlMlNe0vDO2R82gKZXnf57RVUUiDXfE1e554ArA=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/cJ4vDypJDnXZhV5MxHZ3-f7nr1h9zEv4Zh7mlMlNe0vDO2R82gKZXnf57RVUUiDXfE1e554ArA=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/cJ4vDypJDnXZhV5MxHZ3-f7nr1h9zEv4Zh7mlMlNe0vDO2R82gKZXnf57RVUUiDXfE1e554ArA=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/cJ4vDypJDnXZhV5MxHZ3-f7nr1h9zEv4Zh7mlMlNe0vDO2R82gKZXnf57RVUUiDXfE1e554ArA=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/cJ4vDypJDnXZhV5MxHZ3-f7nr1h9zEv4Zh7mlMlNe0vDO2R82gKZXnf57RVUUiDXfE1e554ArA=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/cJ4vDypJDnXZhV5MxHZ3-f7nr1h9zEv4Zh7mlMlNe0vDO2R82gKZXnf57RVUUiDXfE1e554ArA=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/6sFhW6LS5Ec/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/6sFhW6LS5Ec/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/6sFhW6LS5Ec/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/6sFhW6LS5Ec/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/6sFhW6LS5Ec/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/6sFhW6LS5Ec/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/6sFhW6LS5Ec/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/6sFhW6LS5Ec/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Bill and Hillary Clinton will testify in a US House investigation surrounding deceased sex offender Jeffrey Epstein, a spokesman for the ex-president says, heading off a potential vote to hold...",
            "descriptionHtml": "Bill and Hillary Clinton will testify in a US House investigation surrounding deceased sex offender Jeffrey Epstein, a spokesman for the ex-president says, heading off a potential vote to hold...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "LIVE: NBC News NOW - Feb. 4",
            "videoId": "Xfzjnt6p5jU",
            "author": "NBC News",
            "authorId": "UCeY0bbntWzzVIaj2z3QigXg",
            "authorUrl": "/channel/UCeY0bbntWzzVIaj2z3QigXg",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/PJj5jtuEOi5UmkFy4IBonj5WcabNcnJAIJe-jZMd1ArwIuVyQxFH_2zryBHwvfv6mJujwRpWDCM=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/Xfzjnt6p5jU/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/Xfzjnt6p5jU/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/Xfzjnt6p5jU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/Xfzjnt6p5jU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/Xfzjnt6p5jU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/Xfzjnt6p5jU/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/Xfzjnt6p5jU/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/Xfzjnt6p5jU/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "NBC News NOW is live, reporting breaking news and developing stories in real time. We are on the scene, covering the most important stories of the day and taking deep dives on issues you care...",
            "descriptionHtml": "NBC News NOW is live, reporting breaking news and developing stories in real time. We are on the scene, covering the most important stories of the day and taking deep dives on issues you care...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770250182,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        }
    ]
};


const rootElem=document.getElementById('root');

const showTrendingVideos = () =>{
    const{list}=data;
    list.forEach((video)=>{
        const{author,videoThumbnails,authorThumbnails,viewCountText,title,publishedText} =video;

        const newDiv=document.createElement("div");
        newDiv.className="video-card";
        newDiv.innerHTML=`
        <div>
            <img class='video-thumbnail' src="${videoThumbnails[3].url}">
        </div>
        <div class='card-footer-container'>
            <div class='video-author-img-container'>
                <img src="${authorThumbnails[1].url}">               
            </div>
            <div class='video-info-container'>      
                <p>${title}</p>
                <div class='video-metadata-container'>
                    <p>${author}</p>
                    <div class='dot-v1'></div>
                    <p>${viewCountText}</p>
                    <div class='dot-v1'></div> 
                    <p>${publishedText}</p>
                </div>
            </div>
        </div>
     
        `;
        rootElem.appendChild(newDiv);
    });
};
showTrendingVideos();

const handleAutoSuggest=(e)=>{
    const searchText=e.target.value;

    getSmartSuggestionAPI(searchText);


}