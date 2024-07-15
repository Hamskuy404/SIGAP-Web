// import data from "../../utils/constants/indonesia"
import { useSelector } from "react-redux";
import GlobalCovid from "./Global.styled";
import store from "../Store";

function Global({judul, subjudul}) {
    const globals = useSelector((store) => store.data.data);
    return(
        <GlobalCovid>
            <div className="container">
                <h2 className="judul">{judul}</h2>
                <h5 className="caption">{subjudul}</h5>
                <div className="box_container">
                    {globals.global && globals.global.map((glob) => {
                        return (
                            <div className="box" key={glob.status}>
                                <h1 style={{color: glob.color}}>{glob.status}</h1>
                                <br/>
                                <p className="total">{glob.total}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </GlobalCovid>
    )
}

export default Global;