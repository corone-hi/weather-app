# weather-app
react native 

## expo

1. expo init weather-app

**
✅ Your project is ready!

To run your project, navigate to the directory and run one of the following npm commands.

- cd weather-app
- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- npm run android
- npm run ios # requires an iOS device or macOS for access to an iOS simulator
- npm run web


2. weather-app 폴더로 이동
3. visual code로 열고싶으면  ` code . ` 입력 


## github

1. git remote add origin [repo 주소]
2. git pull origin master --allow-unrelated-histories (readme파일을 받음

## expo

- app.json  -> configuration 파일 (expo가 읽게될 파일)
- App.js -> 기본적인 리엑트 컴포넌트 

* npm start -> expo DEV tools 열어준다
              
                - QR코드는 안드로이드 폰에서 expo에 들어가 scan QR코드로 앱을 열어 테스트 할 수 있다.
                - ios는 없기에 로그인해서 터미널에서 expo login 필요
                - Run on iOS simulator/ Android device/emulator를 누르면 폰으로 테스트 가능
               
* live reload 지원
: 내가 저장하면, 자동으로 리프레쉬가 되고, 변경된 것 확인할 수 있다.

* expo 개발자 메뉴
: commad or ctrl +D
: 폰의 경우는 한번 흔들기

- 디버그를 사용할 경우 애플리케이션을 느리게 만들 수 있기에, 필요할 때만 사용한다.

* 파일들을 가지고 직접 작업하고 싶으면 npm run eject
 -> but, 한번이라도 eject를 실행시키면 되돌릴 수 없다. (업데이트 등 전부 혼자 처리해야함)
 
 ## react native
 
 <네이티브 앱 만드는 방법>
 
 1. fully Native
 : switft or objective-c로 ios 앱 만드는 것, Java or 코틀린 가지고 만드는 것
 
 2. 앱 기반 웹뷰 만드는 것
 : 하이브리드, 앱 안에서 웹이 작동하는 것
 
 3. 리액트 네이티브
 : Android, IOS 둘 다 자바스크립트 엔진을 가지고 있기에 자바스크립트를 실행할 수 있다. 즉, iOS또는 Android의 
 네이티브 엔진에게 (자바스크립트를 이용한) 메세지를 보내는 것
 
 #### App.js의 TEXT
 
 `
 import { StyleSheet, Text, View } from 'react-native';
 `
 
 - 안드로이드, ios의 네이티브 텍스트, 뷰를 이어주는 브릿지
 
 ```
 export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

- 우리는 컴포넌트를 사용, 즉 자바스크립트
- 컴포넌트 안에 브릿지가 있다 -> 누군가가 작성해 놓은 swift code나 java code로 iphone, android가 이 컴포넌트를 이해하도록 하기 위해 (브릿지는 그러므로 항상 존재)

#### View

: View는 `<div>`와 유사한 것
: 리액트 네이티브에서는 전부 View 안에 집어 넣어야 한다.

* span과 같은 속성 X -> Text 안에 집어 넣으면 된다.


#### css 엔진

:리엑트 네이티브에서 css엔진을 구현해놓았기에 flex box와 같은 것들을 이용할 수 있다.

```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

🔴차이점: align-items으로 사용했다면 여기서는 alignItems로 표기

- 텍스트에 css 적용하고 싶을 시 속성 변경 필요

`
<Text style={styles.text}>Hello!</Text>
`
- styles API도 수정 필요

```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
  }
});
```

#### flex box

//default

- 웹사이트에서 모든 flex box의 디폴트는 로우(row)

- 리액트 네이티브에선 flex direction이 "컬럼(column)"
  -> 모바일 폰에서는 대게 모든게 서로 아래에 있기 때문
  
`//변경
const styles = StyleSheet.create({
  flexDirection: "row"
})`

-flex layout 핸들링

```
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yelloView}><Text>Hello</Text></View>
      <View style={styles.blueView}><Text>Hello</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yelloView:{
    flex:1,
    backgroundColor:"yellow"
  },
  blueView:{
    flex:1,
    backgroundColor:"blue"
  }
}); 
```
<img src="https://blogfiles.pstatic.net/MjAyMDExMjFfMjgw/MDAxNjA1OTU3Njg0NjU1.RE5ipSgQiizzWCDlNCau54KB5FrSBVU_DvjXYRYMyQgg.FnI_Uub95J8H_MNPO3k3aM6KRvVcEuDSZVU0ENnqvfUg.JPEG.cucu154/KakaoTalk_20201121_200411952_02.jpg" width="40%" height="40%"/>

```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
   
  },
  yelloView:{
    flex:1,
    backgroundColor:"yellow"
  },
  blueView:{
    flex:1,
    backgroundColor:"blue"
  }
});
```

<img src ="https://blogfiles.pstatic.net/MjAyMDExMjFfMjQ2/MDAxNjA1OTU3Njg0NjMz.ZerupBMxg69sr13YPGaaaqh8dauuWI_XNBytPN9v1mQg.4AkKBqiGBrrxB65_2n5YAqgKeAnU10sfikgTX8SStGMg.JPEG.cucu154/KakaoTalk_20201121_200411952_01.jpg" width="40%" height="40%"/>


+ flex:1 (container은 부모)
-> 모든 공간 사용가능하다는 것을 의미
-> yellow, blue를 flex:1으로 만들었을 때, 둘은 전부를 사용할 순 없음, flex 컨테이너 옆에 붙어있기 때문

+ flex:2
-> 스크린의 3분의 2를 차지
  즉, 자리를 경쟁하는 형제들, 더 큰애가 대부분의 자리를 차지하는 것

** width, height보다는 flex로 조절하는 것이 좋음
-> 사이즈가 큰 폭을 가지고 있거나, ipad를 열어보거나, 더 작은 폰, 회전 시 알아서 맞춰지기 때문


### API

-> expo api <Location>
https://docs.expo.io/versions/v39.0.0/sdk/location/
 
* background location: 사용자를 따라가거나, 그사람이 하는 것을 스파이 할 때
* Geofencing: 사용자가 어떤 지역에 들어갔을때, 떠났을 때를 알고 싶을 때

1. expo install expo-location, npm install expo-location
2. import * as Location from 'expo-location';
3. 클래스로 변경
``` 
export default class extends React.Component{
  getLocation = async()=>{
    const location = await Location.getCurrentPositionAsync();
    console.log(location);

  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return <Loading />;
  }
}
```

4. 위치 사용 승인 작업 받기

```
export default class extends React.Component{
  getLocation = async()=>{
    try {
      await Location.requestPermissionsAsync();
      const {coords} = await Location.getCurrentPositionAsync();  
      console.log(location);

    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }

```

5. [https://openweathermap.org]
API key 설정

6. [https://openweathermap.org/current]
API 호출 -> 

```
getWeather = async(latitude, longitude)=>{
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  }
```

</hr>

### styles

1. 온도 설정 -> API: ceisius -> unit=metric (쿼리에 추가)
2. 날씨에 따라 아이콘 속성도 달라지도록 설정
- weather.js 생성
```
import React from "react";
import { View, Text, StyleSheet }from "react-native";
import PropTypes from "prop-types";

export default function Weather({temp}){
    return(
        <View style={styles.container}>
            <Text>{temp}</Text>
        </View>
    );

}

Weather.propTypes = {
    temp:PropTypes.number.isRequired

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",


    },
    text:{

    }
});
```

- App.js에 temperature 가져올 수 있도록 수정

```
import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from "axios";



const API_KEY = "5061f187425517f513243ca088c26c42"


export default class extends React.Component{
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude)=>{
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ isLoading:false, temp: data.main.temp});
  }
  getLocation = async()=>{
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();  
      //send to API and get weather
      this.getWeather(latitude, longitude);
      
      
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
    
    
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }
}


```

- 날씨 이름들 가져와서 설정하기

[https://openweathermap.org/weather-conditions]

- icon 설정
[https://docs.expo.io/guides/icons/#expovector-icons]
[https://icons.expo.fyi/]

```
import { MaterialCommunityIcons } from '@expo/vector-icons';  //{}안에 사용하고 싶은 패밀리명 입력
```

사용법:
```
export default class IconExample extends React.Component {
  render() {
    return <Ionicons name="md-checkmark-circle" size={32} color="green" />;
  }
}

```

-배경색 gradient
-> expo install expo-linear-gradient
->안되면 npm으로 

