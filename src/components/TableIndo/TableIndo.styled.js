import { styled } from "styled-components";

const TabelIndoCovid = styled.div`
    .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
 }
 
 .judul{
    color: #06d6a0;
    font-size: 3.052rem;
    /* margin-top: 40px; */

}

.caption {
    color: #118ab2;
    margin-bottom: 7rem;
    margin-top: -40px;
    font-size: 1.953rem;
}

 .table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 80%;
 }

 .table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}

.table th,
.table td {
    padding: 12px 15px;
}

.table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
`

export default TabelIndoCovid