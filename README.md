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
 
 `
 export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
`

- 우리는 컴포넌트를 사용, 즉 자바스크립트
- 컴포넌트 안에 브릿지가 있다 -> 누군가가 작성해 놓은 swift code나 java code로 iphone, android가 이 컴포넌트를 이해하도록 하기 위해 (브릿지는 그러므로 항상 존재)

#### View

: View는 `<div>`와 유사한 것
: 리액트 네이티브에서는 전부 View 안에 집어 넣어야 한다.

* span과 같은 속성 X -> Text 안에 집어 넣으면 된다.


#### css 엔진

:리엑트 네이티브에서 css엔진을 구현해놓았기에 flex box와 같은 것들을 이용할 수 있다.

`
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

`

🔴차이점: align-items으로 사용했다면 여기서는 alignItems로 표기

- 텍스트에 css 적용하고 싶을 시 속성 변경 필요

`
<Text style={styles.text}>Hello!</Text>
`
- styles API도 수정 필요

`const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
  }
});`

#### flex box

- 웹사이트에서 모든 flex box의 디폴트는 로우(row)

- 리액트 네이티브에선 flex direction이 "컬럼(column)"
  -> 모바일 폰에서는 대게 모든게 서로 아래에 있기 때문
  
`//변경
const styles = StyleSheet.create({
  flexDirection: "row"
})

`

