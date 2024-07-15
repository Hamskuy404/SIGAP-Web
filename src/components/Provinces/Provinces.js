
import { useSelector } from "react-redux";
import ProvincesCovid from "./Provinces.styled";

function Provinces({ judul, subjudul }) {
    const covidProvinces = useSelector((store) => store.covid.covid)
    return(
        <ProvincesCovid>
            <div className="container">
                <h2 className="judul">{judul}</h2>
                <h5 className="caption">{subjudul}</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Provinsi</th>
                            <th>Positive</th>
                            <th>Sembuh</th>
                            <th>Dirawat</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        { covidProvinces && covidProvinces.map((item)=>{
                            return(
                                <tr key={item.kota}>
                                    <td>{item.kota}</td>
                                    <td>{item.kasus}</td>
                                    <td>{item.sembuh}</td>
                                    <td>{item.dirawat}</td>
                                    <td>{item.meninggal}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </ProvincesCovid>
        
    )
}

export default Provinces;