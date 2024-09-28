"use client"
import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


export default function Home() {

  const [password, setPassword] = useState<string>("")

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

  // const password=123;

  const checkPass = () => {
    if (password == "123") {
      alert('認証成功');

    } else {
      alert('パスワードが間違っています');
    }

  }

  if (gameClear) {
    return (
      <div>
        <h1>You passed.</h1>

        <input type="password" id="password" name="password" placeholder="パスワードを入力"
          onChange={(e) => {
            setPassword(e.target.value)

          }}
          style={{ backgroundColor: "#f0f0f0", color: "#333", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }} />
        <input type="submit" name="submit" onClick={checkPass} />
      </div>
    )


  } else {
    return (
      <div>
        <h1>Please try again.</h1>
      </div>
    );
  }
}
