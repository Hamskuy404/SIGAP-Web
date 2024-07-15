import { useSelector } from "react-redux";
import TabelIndoCovid from "./TableIndo.styled";

function TableIndo({judul, subjudul}) {
    const dataIndo = useSelector((store) => store.data.data)
    console.log(dataIndo);
    return(
        <TabelIndoCovid>
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
                    {dataIndo.regions && dataIndo.regions.map((item)=>{
                        return(
                            <tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.numbers.confirmed}</td>
                                <td>{item.numbers.recovered}</td>
                                <td>{item.numbers.treatment}</td>
                                <td>{item.numbers.death}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </TabelIndoCovid>
    )
}

export default TableIndo;