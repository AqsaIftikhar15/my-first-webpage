import Image from "next/image";
import picc from "../../../images/picc.png"

function Profile(){
    return(
        <div className ="homeContainer">
        <div className ="childContainer"><h4 style={{fontSize:"50px",}}>
          Hi! <br/>
          I'm <b>Aqsa Iftikhar</b>,currently learning generative AI and data Science.</h4>
        </div>
        <div className ="childContainer2">
        <Image src={picc} alt="profile pic" />
        </div>
        </div>
      );
}

export default Profile

