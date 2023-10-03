import React, {useState} from "react";
import { Image, SafeAreaView } from "react-native";

const MyImage = () => {
    const [imageSource, setImageSource] = useState({uri:'http://example.com'});
    return (
        <Image 
            source={require("AwesomeProject/assets/variks_yesss.jpg")} 
            style={{width: '100%',height: '50%', backgroundColor: 'black'}}
            //resizeMode="center"
            onError={()=>{
                console.log("Error detected while loading image.")
                //setImageSource(require("AwesomeProject/assets/variks_yesss.jpg"))
            }}
        />
    );
};

export default MyImage;