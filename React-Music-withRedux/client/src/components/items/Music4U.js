import React,{Fragment} from 'react'

export default function Music4U() {
  return (
    <Fragment>
      <div className="mt-3 p-0" style={{height:"9em",backgroundImage:"url(//static-zmp3.zadn.vn/skins/zmp3-v5.1/images/discover_background.png)",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative" }}>
            <div className="p-0 m-0 " style={{height:"9em",backgroundColor:"black",opacity:0.6}}>

            </div>
            <div className="d-flex justify-content-center align-items-center "  style={{position:"absolute",zIndex:"900" ,top: "50%",left: "52%",marginRight: "-50%",transform: "translate(-50%, -50%)"}}>
                <div>
                    <a href="/"><img style={{height: "5em",width: "5em"}} src="//static-zmp3.zadn.vn/skins/zmp3-v5.1/images/discover_cover_240.jpg" alt=""  ></img></a>
                </div>
                <div className="d-flex flex-column mx-1">
                    <a href="/" className=" p-0 m-0">
                        <b className=" text-light">Dành Riêng Cho Bạn</b>
                    </a>
                    <p className="text-primary overflow-hidden small">Khám phá âm nhạc dành riêng cho bạn.</p>
                </div>
            </div>
            
        </div>
    </Fragment>
  )
}
