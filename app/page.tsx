"use client"
import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


export default function Home() {

  const [password, setPassword] = useState<string>("")

  const { unityProvider,unload } = useUnityContext({
    loaderUrl: "Test Fifth.loader.js",
    dataUrl: "Test Fifth.data",
    frameworkUrl: "Test Fifth.framework.js",
    codeUrl: "Test Fifth.wasm",
  });


  // return(
  //   <div>
  //     <h1>タイトル</h1>
  //     {
  //       isSuccess ? <div>You passed.</div> : <div>Please try again.</div>
  //     }
  //     <p>説明～～</p>
  //   </div>
  // );

  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // @ts-ignore
      if (window.isSuccess) {
        // @ts-ignore
        setIsSuccess(true);
        unload()
      }
    }, 300); // 1秒ごとに監視

    return () => clearInterval(interval); // コンポーネントがアンマウントされたときにクリーンアップ
  }, [isSuccess]);

  // const password=123;

  const checkPass = () => {
    if (password == "123") {
      console.log('hogehoge')
      alert(`認証成功}`)
      window.location.href = "https://www.dendai.ac.jp/";
    } else {
      alert('パスワードが間違っています');
    }

  }

  return (
    //     <div>
    //       <h1>You passed.</h1>

    //       <input type="password" id="password" name="password" placeholder="パスワードを入力"
    //       value={password}
    //         onChange={(e) => {
    //           setPassword(e.target.value)
    //         }}


    //         style={{ backgroundColor: "#f0f0f0", color: "#333", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }} />
    //       <input type="submit" name="submit" onClick={checkPass} />
    //     </div>
    //   )


    // } else {
    //   return (
    //     <div>
    //       <h1>Please try again.</h1>
    //       <Unity unityProvider={unityProvider} />;

    //     </div>
    <>
      {isSuccess ? (<>
        <h1>You passed.</h1>

        <input type="password" id="password" name="password" placeholder="パスワードを入力"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          style={{ backgroundColor: "#f0f0f0", color: "#333", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }} />
        <input type="submit" name="submit" onClick={checkPass} />

      </>) : (<>
      <Unity unityProvider={unityProvider} />
      </>)}
    </>
  )
}

