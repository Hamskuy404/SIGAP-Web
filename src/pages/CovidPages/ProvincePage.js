
import Provinces from "../../components/Provinces/Provinces";
import Form from "../../components/Form/Form";
import Hero from "../../components/Hero/Hero";
// import data from "../../utils/constants/provinces";
// import { useDispatch, useSelector } from "react-redux";
// import { updateCovid } from "../../components/Features/CovidSlice";


function ProvincePage(props) {
//     const provinces = useSelector((state) => state.covid.covid);
//   const dispatch = useDispatch();


    return(
        <>
            <Hero/>
            <Provinces judul="Provinsi" subjudul="Data Covid Berdasarkan Provinsi"/>
            <Form/>
        </>
    )
}

export default ProvincePage;