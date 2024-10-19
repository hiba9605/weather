// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [data, setData] = useState({
//     celcius: '',
//     name: '',
//     humidity: '',
//     speed: '',
//     image:''
//   });

//   const [name, setName] = useState('');
//   const [error, setError] = useState(null); // State to manage error messages

//   const handleClick = () => {
//     if (name !== "") {
//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`)
//         .then(res => {
//           let imagePath =''
//           if(res.data.weather[0].main=="clouds"){
//             imagePath="./src/images/clouds.png"
//           }else if(res.data.weather[0].main=="clear"){
//             imagePath="./src/images/clear.png"

//           }else if(res.data.weather[0].main=="rain"){
//             imagePath="./src/images/rain.png"

//           }else if(res.data.weather[0].main=="drizzle"){
//             imagePath="./src/images/drizzle.png"

//           }else if(res.data.weather[0].main=="mist"){
//             imagePath="./src/images/mist.png"

//           }else{
//             imagePath="./src/images/clouds.png"

//           }
//           if (!res.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return res.json(); // Convert response to JSON
//         })
//         .then(weatherData => {
//           console.log(weatherData); // Log the weather data
//           // Update state with weather data
//           setData({
//             celcius: weatherData.main.temp,
//             name: weatherData.name,
//             humidity: weatherData.main.humidity,
//             speed: weatherData.wind.speed
//           });
//           setError(null); // Clear any previous error messages
//         })
//         .catch(err => {
//           console.log(err);
//           setError('Please enter a valid city name.'); // Set error message
//         });
//     } else {
//       setError('Please enter a city name.'); // Set error message for empty input
//     }
//   };

//   return (
//     <>
//       <div>
//         <div className='weather'>
//           <div className='inputarea'>
//             <input
//               type="text"
//               placeholder='Enter City Name'
//               onChange={e => setName(e.target.value)}
//             />
//             <button onClick={handleClick}>
//               <i style={{ width: '40px' }} className="fa-solid fa-magnifying-glass"></i>
//             </button>
//           </div>
//           {error && <p className="error">{error}</p>} {/* Display error message */}
//           <div className='weatherinfo'>
//             <img className='icon' src={data.image} alt="" />
//             <h1>{data.celcius}°C</h1>
//             <h2>{data.name}</h2>
//           </div>
//           <div className='weatherdetail'>
//             <div className='humidity'>
//               <img src="./src/images/humidity.png" alt="" />
//               <div className='humi'>
//                 <p>{data.humidity}%</p>
//                 <p>Humidity</p>
//               </div>
//             </div>
//             <div className='wind'>
//               <img src="./src/images/wind.png" alt="" />
//               <div className='win'>
//                 <p>{data.speed} Km/h</p>
//                 <p>Wind</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;




import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    celcius: '',
    name: '',
    humidity: '',
    speed: '',
    image: ''
  });

  const [name, setName] = useState('');
  const [error, setError] = useState(null); // State to manage error messages

  const handleClick = () => {
    if (name !== "") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json(); // Convert response to JSON
        })
        .then(weatherData => {
          console.log(weatherData); // Log the weather data

          let imagePath = '';
          if (weatherData.weather[0].main === "Clouds") {
            imagePath = "./src/images/clouds.png";
          } else if (weatherData.weather[0].main === "Clear") {
            imagePath = "./src/images/clear.png";
          } else if (weatherData.weather[0].main === "Rain") {
            imagePath = "./src/images/rain.png";
          } else if (weatherData.weather[0].main === "Drizzle") {
            imagePath = "./src/images/drizzle.png";
          } else if (weatherData.weather[0].main === "Mist") {
            imagePath = "./src/images/mist.png";
          }else if(weatherData.weather[0].main === "Snow"){
            imagePath = "./src/images/snow.png";

          }
           else {
            imagePath = "./src/images/default.png"; // Default image for unrecognized conditions
          }

          // Update state with weather data and image path
          setData({
            celcius: weatherData.main.temp,
            name: weatherData.name,
            humidity: weatherData.main.humidity,
            speed: weatherData.wind.speed,
            image: imagePath // Set the image path in state
          });
          setError(null); // Clear any previous error messages
        })
        .catch(err => {
          console.log(err);
          setError('Please enter a valid city name.'); // Set error message
        });
    } else {
      setError('Please enter a city name.'); // Set error message for empty input
    }
  };

  return (
    <>
      <div>
        <div className='weather'>
          <div className='inputarea'>
            <input
              type="text"
              placeholder='Enter City Name'
              onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
              <i style={{ width: '40px' }} className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          {error && <p className="error">{error}</p>} {/* Display error message */}
          <div className='weatherinfo'>
            <img className='icon' src={data.image} alt="" />
            <h1>{data.celcius}°C</h1>
            <h2>{data.name}</h2>
          </div>
          <div className='weatherdetail'>
            <div className='humidity'>
              <img src="./src/images/humidity.png" alt="" />
              <div className='humi'>
                <p>{data.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className='wind'>
              <img src="./src/images/wind.png" alt="" />
              <div className='win'>
                <p>{data.speed} Km/h</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;