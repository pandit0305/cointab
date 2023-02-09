import React ,{useEffect,useState} from 'react'; 
import axios from 'axios';
export default function UsersDetailsPage(){
    const [data, setData] = useState([]);
    const getDATA = ()=>{
        axios({
            method: "GET",
            baseURL: "http://localhost:8000",
            url: "/getData",
          })
            .then((res) => {
              console.log("data is fetched");
              setData(res.data[0].userData)
            })
            .catch((err) => {
              console.log(err);
            });
    }
    useEffect(()=>{
        getDATA();
    },[])

  

    return(
        <>
            <h2>
                Users Table
            </h2>
            <div style={{width:"50%", margin:"auto"}}>
                <table className="center">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Phone</th>
                    </tr>
                </table>
                <tbody>
                    {
                        data.length>0 && data?.map((ele)=>(
                            <tr>
                                <td>{ele.name.title +" "+ ele.name.first +" "+ ele.name.last}</td>
                                <td>{ele.email}</td>
                                <td>{ele.gender}</td>
                                <td>{ele.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </div>
        </>
    )
}