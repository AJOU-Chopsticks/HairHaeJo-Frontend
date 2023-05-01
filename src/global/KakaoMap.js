import { useState, useEffect } from "react";

function KakaoMap() {
  const [address, setAddress] = useState("");
  const [map, setMap] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    // 지도를 생성하고, 주소-좌표 변환 객체와 마커를 초기화한다.
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new window.daum.maps.LatLng(37.282959, 127.043552),
      level: 5,
    };
    const daum = window.daum;
    const map = new daum.maps.Map(mapContainer, mapOption);
    const geocoder = new daum.maps.services.Geocoder();
    const marker = new daum.maps.Marker({
      position: new daum.maps.LatLng(37.282959, 127.043552),
      map,
    });

    setMap(map);
    setMarker(marker);
    setGeocoder(geocoder);
  }, []);

  const execDaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        const addr = data.address;

        setAddress(addr);

        geocoder.addressSearch(data.address, function (results, status) {
          if (status === window.daum.maps.services.Status.OK) {
            const result = results[0];
            const coords = new window.daum.maps.LatLng(result.y, result.x);

            map.relayout();
            map.setCenter(coords);
            marker.setPosition(coords);
          }
        });
      },
    }).open();
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <input
          type="text"
          id="Kakao_Address"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="주소"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          disabled
        />
        <button
          type="button"
          onClick={execDaumPostcode}
          className="w-32 ml-2 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800 bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
        >
          주소 검색
        </button>
      </div>
      <div
        id="map"
        className={`w-full h-80 mt-2.5 rounded-lg ${
          address ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
}

export default KakaoMap;
