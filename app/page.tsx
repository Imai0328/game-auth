//{変数名}
"use client"
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


export default function Home() {
  
  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "Test.loader.js",
  //   dataUrl: "Test.data",
  //   frameworkUrl: "Test.framework.js",
  //   codeUrl: "Test.wasm",
  // });

  // return <Unity unityProvider={unityProvider} />;
  const gameClear = true;
  // return(
  //   <div>
  //     <h1>タイトル</h1>
  //     {
  //       gameClear ? <div>You passed.</div> : <div>Please try again.</div>
  //     }
  //     <p>説明～～</p>
  //   </div>
  // );
  if (gameClear) {
    return (
      <div>
        <h1>You passed.</h1>
        <input type="password" name="password"/>
        <input type="submit" name="submit"/>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please try again.</h1>
      </div>
    );
  }
}
