import mask from "../../gambar/icons8-protection-mask.png"
import smilling from "../../gambar/icons8-smiling-100.png"
import skull from "../../gambar/icons8-skull-100.png"
import RegionsCovid from "./Regions.styled";
import { useSelector } from "react-redux";

function Regions({judul, subjudul}){
    const dataRegions = useSelector((store) => store.data.data)
    return(
        <>
        <RegionsCovid>
            <div className="container">
                <h2 className="judul">{judul}</h2>
                <h5 className="caption">{subjudul}</h5>
                <div className="box_container">
                    {dataRegions.regions && dataRegions.regions.map((region) => {
                        return (
                            <div className="box" key={region.name}>
                                    <h1 style={{color: region.color}}>{region.name}</h1>
                                    <div className="subjudul">
                                            <h5 className="status">Confirmed</h5>
                                            <div className="data">
                                                <p className="total1">{region.numbers.confirmed}</p>
                                                <img className="mask" src={mask} alt="" />
                                            </div>

                                    </div>
                                    <div className="subjudul">
                                            <h5 className="status">recovered</h5>
                                            <div className="data">
                                                <p className="total2">{region.numbers.recovered}</p>
                                                <img src={smilling} alt="" />
                                            </div>
                                    </div> 
                                    <div className="subjudul">
                                            <h5 className="status">death</h5>
                                            <div className="data">
                                                <p className="total3">{region.numbers.death}</p>
                                                <img src={skull} alt="" />
                                            </div>
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </RegionsCovid>
        </>
    )
}

export default Regions