import React,{Fragment} from 'react'

export default function Carousel() {
  return (
    <Fragment>
        <div id="carouselExampleIndicators" className="carousel slide my-3" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img className="d-block img-fluid" src="//www.mexicoescultura.com/galerias/actividades/principal/rosana_900_1.jpg" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h4 className="text-warning">Caption goes here</h4>
                        <p>Caption goes here</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="//cms.intomore.com/wp-content/uploads/2018/08/GettyImages-1020392532_900x350_acf_cropped.jpg" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h4 className="text-warning">Caption goes here</h4>
                        <p>Caption goes here</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="//generator.org.uk/wp-content/uploads/2018/10/didfund_banner_draft_2-e1539264702663.jpg" alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h4 className="text-warning">Caption goes here</h4>
                        <p>Caption goes here</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </Fragment>
  )
}
