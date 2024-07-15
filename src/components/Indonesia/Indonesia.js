// import data from "../../utils/constants/indonesia"
// import styles from "./Indonesia.module.css";
import { useSelector } from "react-redux";
import IndonesiaCovid from "./Indonesia.styled";

function Indonesia({judul, subjudul}) {
    const dataIndo = useSelector((store) => store.data.data);
    console.log(dataIndo);
    return(
        <IndonesiaCovid>
            <div className="container">
                <h2 className="judul">{judul}</h2>
                <h5 className="caption">{subjudul}</h5>
                <div className="box_container">
                    {dataIndo.indonesia && dataIndo.indonesia.map((indo) => {
                        return (
                            <div className="box" key={indo.status}>
                                <h1 style={{ color: indo.color }}>{indo.status}</h1>
                                <br/>
                                <p className="total">{indo.total}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </IndonesiaCovid>
    )
}

export default Indonesia;