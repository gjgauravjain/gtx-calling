/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

const Video = () => {
    useEffect(() => {
        getConnect();
    } ,[])
  
    const getConnect = async() => {
        const {ZoomMtg} = await import("@zoomus/websdk");
        ZoomMtg.setZoomJSLib("https://source.zoom.us/lib",'/av');
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();

        ZoomMtg.generateSDKSignature({
            meetingNumber: "2922556333",
            role: "1",
            sdkKey: "k6m5opDQyk1RwTsEYNmQ",
            sdkSecret: "J5WtzK9f14v7a2DybGcax8ymAYc3f819",
            success: function(signature: any){
                ZoomMtg.init({
                    leaveUrl: "video",
                    success: function(data: any){
                        console.log("dataa", data);
                        console.log("signature", signature);
                        ZoomMtg.join({
                            meetingNumber: "2922556333",
                            signature: signature.result,                            
                            userName: "Rohit",
                            userEmail: "gtxappdev@gmail.com",
                            passWord: "uaBfU5",
                            tk: "1704142508",
                            sdkKey: "k6m5opDQyk1RwTsEYNmQ",
                            success: function(res: any) {
                                console.log('__JOined--', res);
                                
                            },
                            error: function(error: any) {
                                console.log('__JOined Error--', error);
                            }
                        })
                    },
                    error: function(error: any){
                        console.log("error", error);
                    }
                })
            },
            error: function(error: any){
                console.log("error", error);
            }
        })
    }
    return (
        <div>
            <h1>Meeting</h1>
        </div>
    )
}

export default Video