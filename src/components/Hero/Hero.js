import HeroCovid from "./Hero.styled";

function Hero() {
    return(
        <HeroCovid>
                <div className="left">
                    <h2 className="judul">SIGAP</h2>
                    <h5 className="caption">Monitoring Keadaan Geografis Wilayah Indonesia</h5>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut laudantium similique magni delectus fuga fugit.</p>
                    <button className="button">Vaccine</button>
                </div>
                <div className="right">
                    <img className="hero_image" src="https://picsum.photos/536/354" alt="" />
                </div>
        </HeroCovid>
    )
}

export default Hero;        