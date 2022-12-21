import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import Donor_user from "../components/Donor/Donor_user";
import Page_header from "../components/Public/Page_header";
import Donor_style from "../styles/Donor.module.css";

const donor = () => {
  const [loading, setloading] = useState(true);
  const [Users, setUser] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        setloading(false)
      })
  }, []);
  console.log({Users});
  const handleSearch =(e)=>{
    setSearch(e.target.value);
    // if(search){
    //   const updated = Users.filter((user)=>user.blood.includes(search.toUpperCase()));
    //   setUpdateUser(updated);
    // }else{
    //   setUpdateUser(Users);

    // }
    
  }

  const filterByBlood = (user)=>{
    if( search !== ""){
      return user.blood.includes(search.toUpperCase());
    }else{
      return true;
    }
  }

  return (
    <div className="donor_area">
      <Page_header text="Find Donor"></Page_header>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className={`${Donor_style.donor_area_left}`}>
              <div className={`${Donor_style.find_input}`}>
                <p>Find your blood:</p>
                  <input onChange={handleSearch}
                  type="text"
                  placeholder="Type your needed blood...."
                  name="search"
                  value={search}
                  id=""
                />
                
              </div>
            </div>
          </div>
          <div className="col-md-10">
            {loading ? (
              <HashLoader
                color={"#dd0211"}
                loading={true}
                size={50}
                cssOverride={{ display: "block", margin: "0 auto" }}
              />
            ) : (
              <div className={`${Donor_style.donor_area_right}`}>
                {Users
                .filter(filterByBlood)
                .
                map((donor) => (
                  <Donor_user key={donor._id} donor={donor}></Donor_user>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default donor;
