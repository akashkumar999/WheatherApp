import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';
import ParkIcon from '@mui/icons-material/Park';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const INIT_URL =
        "https://images.unsplash.com/photo-1584728828243-90ab6f9c7aaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=2048x2048&w=is&k=20&c=MEinOvXAEFy9XXcclTgQV64m_FaoT_NRz8YyWItS9zM=";
    const COLD_URL = "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1567688993206-43c34131b21f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const SPRING_URL = "https://images.unsplash.com/photo-1593955808003-93f6151e6028?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const WHEATHER_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {info.weather} </h1> */}
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 70 ? RAIN_URL : info.temp > 30 ? HOT_URL : info.temp >= 15 && info.temp <= 25 ? INIT_URL : info.temp >= 1 && info.temp <= 14 ? COLD_URL : info.temp >= 25 && info.temp == 30 ? SPRING_URL : WHEATHER_URL}

                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp;{
                                info.humidity > 70 ? <ThunderstormIcon/> : info.temp > 30 ? <WbSunnyIcon/> : info.temp >= 15 && info.temp <= 25 ? <CloudIcon/> : info.temp >= 1 && info.temp <= 14 ? <AcUnitIcon/> : info.temp >= 25 && info.temp == 30 ?  <ParkIcon/>: <FilterVintageIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" color='text.secondary' component={"span"} >
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Feelslike = {info.feels_like}</p>
                            <p>Max Temp = {info.tempMax}</p>
                            <p>Min Temp = {info.tempMin}</p>
                            <p>The Weather can be described as {info.weather} and feels like  {info.feels_like}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}