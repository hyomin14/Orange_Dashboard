/* global kakao */
import React, { useEffect } from 'react';
import Map from './Map';

const MapContainer = () => {
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center : new kakao.maps.LatLng(37.619240466123706, 127.05826607807002),
            level : 3
        };
        const map = new kakao.maps.Map(container, options); //지도 생성
        
        //마커 위치
        const positions = [
            {
                title: '광운공고', 
                latlng: new kakao.maps.LatLng(37.61900362, 127.0569299)
            },
            {
                title: '선곡초', 
                latlng: new kakao.maps.LatLng(37.61819001, 127.0574569)
            },
            {
                title: '선곡초 병설', 
                latlng: new kakao.maps.LatLng(37.61907662,127.0579059)
            },
            {
                title: '착한초밥',
                latlng: new kakao.maps.LatLng(37.61910566, 127.0563253)
            },
            {
                title: '광운대옆',
                latlng: new kakao.maps.LatLng(37.61898839, 127.0583842)
            },
            {
                title: '선곡초앞',
                latlng: new kakao.maps.LatLng(37.61841911, 127.0574713)
            },
            {
                title: '골목',
                latlng: new kakao.maps.LatLng(37.61919104, 127.0571441)
            },
            {
                title: '선곡초2',
                latlng: new kakao.maps.LatLng(37.61833072, 127.0590785)
            },
            {
                title: '시샘교회',
                latlng: new kakao.maps.LatLng(37.62072147, 127.058386)
            },
            {
                title: '화도관옆',
                latlng: new kakao.maps.LatLng(37.62067371, 127.0595457)
            },
            {
                title: '아이스링크', 
                latlng: new kakao.maps.LatLng(37.62038587, 127.057319218006)
            },
            {
                title: '빌딩사이',
                latlng: new kakao.maps.LatLng(37.6205494681578, 127.057914994813)
            },
            {
                title: '우리할인마트',
                latlng: new kakao.maps.LatLng(37.61693801, 127.0604016)
            },
            {
                title: '빌딩사이2',
                latlng: new kakao.maps.LatLng(37.61702532, 127.0593595)
            },
            {
                title: '빌딩사이3',
                latlng: new kakao.maps.LatLng(37.61724747, 127.0593595)
            },
            {
                title: '빌딩사이4',
                latlng: new kakao.maps.LatLng(37.61740558, 127.0584854)
            },
            {
                title: '빌딩사이5',
                latlng: new kakao.maps.LatLng(37.61816245, 127.0586855)
            },
            {
                title: '빌딩사이6',
                latlng: new kakao.maps.LatLng(37.61740558, 127.0584854)
            },
            {
                title: '빌딩사이7',
                latlng: new kakao.maps.LatLng(37.61821691, 127.0596495)
            },
            {
                title: '빌딩사이8',
                latlng: new kakao.maps.LatLng(37.61936397, 127.0569476)
            },
            {
                title: '빌딩사이9',
                latlng: new kakao.maps.LatLng(37.61937866, 127.0573746)
            },
            {
                title: '빌딩사이10',
                latlng: new kakao.maps.LatLng(37.61943258, 127.0567865)
            },
            {
                title: '빌딩사이11',
                latlng: new kakao.maps.LatLng(37.62072832, 127.0577896)
            },
            {
                title: '빌딩사이12',
                latlng: new kakao.maps.LatLng(37.62079307, 127.0582108)
            },
            {
                title: '빌딩사이13',
                latlng: new kakao.maps.LatLng(37.62115373, 127.0574108)
            } 
            ,
            {
                title: '빌딩사이14',
                latlng: new kakao.maps.LatLng(37.62129917, 127.0585719)
            },
            {
                title: '빌딩사이15',
                latlng: new kakao.maps.LatLng(37.62147991, 127.0588516)
            },
            {
                title: '빌딩사이16',
                latlng: new kakao.maps.LatLng(37.62154548, 127.0611932)
            },
            {
                title: '빌딩사이17',
                latlng: new kakao.maps.LatLng(37.62165181, 127.0580235)
            },
            {
                title: '빌딩사이18',
                latlng: new kakao.maps.LatLng(37.62172154, 127.0570955)
            },
            {
                title: '빌딩사이19',
                latlng: new kakao.maps.LatLng(37.6221232, 127.0583583)
            },
            {
                title: '빌딩사이20',
                latlng: new kakao.maps.LatLng(37.62228523, 127.0588834)
            },
            {
                title: '빌딩사이21',
                latlng: new kakao.maps.LatLng(37.62228523, 127.0588834)
            },
            {
                title: '빌딩사이22',
                latlng: new kakao.maps.LatLng(37.62231093, 127.0571306)
            },
            {
                title: '빌딩사이23',
                latlng: new kakao.maps.LatLng(37.62233957, 127.0564366)
            },
            {
                title: '빌딩사이24',
                latlng: new kakao.maps.LatLng(37.62240018, 127.0574294)
            },
            {
                title: '빌딩사이25',
                latlng: new kakao.maps.LatLng(37.62249531, 127.0578865)
            },
            {
                title: '빌딩사이26',
                latlng: new kakao.maps.LatLng(37.62258445, 127.0583961)
            },
            {
                title: '빌딩사이27',
                latlng: new kakao.maps.LatLng(37.62266821, 127.0586535)
            },
            {
                title: '빌딩사이28',
                latlng: new kakao.maps.LatLng(37.62286562, 127.0562028)
            },
            {
                title: '빌딩사이29',
                latlng: new kakao.maps.LatLng(37.62287233, 127.0561916)
            },
            {
                title: '빌딩사이30',
                latlng: new kakao.maps.LatLng(37.62305789, 127.0593366)
            },
            {
                title: '빌딩사이31',
                latlng: new kakao.maps.LatLng(37.62305905, 127.0613411)
            },
            {
                title: '빌딩사이32',
                latlng: new kakao.maps.LatLng(37.62305905, 127.0613411)
            },
            {
                title: '빌딩사이33',
                latlng: new kakao.maps.LatLng(37.62305905, 127.0613411)
            },
            {
                title: '빌딩사이34',
                latlng: new kakao.maps.LatLng(37.62349268, 127.0595428)
            },
            {
                title: '빌딩사이35',
                latlng: new kakao.maps.LatLng(37.62375203, 127.0596355)
            },
            {
                title: '빌딩사이36',
                latlng: new kakao.maps.LatLng(37.62420561, 127.0596013)
            },
            {
                title: '빌딩사이37',
                latlng: new kakao.maps.LatLng(37.62435069, 127.0595918)
            },
            {
                title: '빌딩사이38',
                latlng: new kakao.maps.LatLng(37.62448029, 127.0600105)
            },
            {
                title: '빌딩사이39',
                latlng: new kakao.maps.LatLng(37.62457214, 127.059567)
            },
            {
                title: '빌딩사이40',
                latlng: new kakao.maps.LatLng(37.6247063, 127.060026)
            },
            {
                title: '빌딩사이41',
                latlng: new kakao.maps.LatLng(37.62474027, 127.0592907)
            },
            {
                title: '빌딩사이42',
                latlng: new kakao.maps.LatLng(37.62487699, 127.0594935)
            },
            {
                title: '빌딩사이43',
                latlng: new kakao.maps.LatLng(37.62528567, 127.058886)
            },
            {
                title: '빌딩사이44',
                latlng: new kakao.maps.LatLng(37.61907662, 127.0579059)
            },
            {
                title: '빌딩사이45',
                latlng: new kakao.maps.LatLng(37.62113646, 127.0592434)
            },
            {
                title: '빌딩사이46',
                latlng: new kakao.maps.LatLng(37.62292302, 127.0601591)
            },
            {
                title: '빌딩사이47',
                latlng: new kakao.maps.LatLng(37.62113646, 127.0592434)
            },
            {
                title: '빌딩사이48',
                latlng: new kakao.maps.LatLng(37.62399295, 127.0600579)
            }
        ]

        //마커 이미지 주소
        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
        for (var i = 0; i < positions.length; i ++) {   
            //마커 이미지 크기
            const imageSize = new kakao.maps.Size(24, 35); 
            //마커 이미지 생성
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
            //마커 생성
            const marker = new kakao.maps.Marker({
                map: map, //마커를 표시할 지도
                position: positions[i].latlng, //마커를 표시할 위치
                title : positions[i].title, //마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
                image : markerImage //마커 이미지 
            });
            marker.setMap(map);
        };
       

    }, [])

    return (
        <div>
            <div id="map" style={{width:"500px", height:"400px",left:"50px" }}>
            </div>
        </div>
    )
}

export default MapContainer;