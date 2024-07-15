import { useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Indonesia from "../../components/Indonesia/Indonesia";
import TableIndo from "../../components/TableIndo/TableIndo";
import { useDispatch } from "react-redux";
import { addDataCovid } from "../../components/Features/CovidSlice/data";
import ENPOINT from "../../utils/constants/enpoint";

function IndonesiaPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        getDataIndonesia()
    },[])

    async function getDataIndonesia(){
        const response = await axios(ENPOINT.INDONESIA)
        // console.log(response);
        dispatch(addDataCovid(response.data))
    }

    return(
        <>
            {/* <Hero>
                    <Indonesia/>
                </Hero> */}
            <Hero/>
            <Indonesia judul="Indonesia Situation" subjudul="Data Covid Berdasakan Indonesia"/>
            <TableIndo judul="Situation By Province" subjudul="Data Covid Berdasarkan Provinsi"/>
        </>
    )
}

export default IndonesiaPage;