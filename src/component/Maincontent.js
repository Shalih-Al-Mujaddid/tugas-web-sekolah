import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "./assets/akuntasi.jpg";
import kegiatan1 from "./assets/kegiatan2.jpg";
import kegiatan2 from "./assets/kegiatan1.jpg";

const Maincontent = ()=> {
    return(
        <div>
            <Hero />
            <div className="Container">
                <div className="row justify-content-center text-center aling-">
                    <div className="col-12 text-center my-5 mr-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                    <div className="col-lg-4 col-12">
                            <Cardjurusan image={jurusan1} jurusan="Belajar Matematika"/>
                    </div>
                    <div className="col-lg-4 col-12">
                            <Cardjurusan image={jurusan1} jurusan="Belajar Matematika"/>
                    </div>
                    <div className="col-lg-4 col-12">
                            <Cardjurusan image={jurusan1} jurusan="Belajar Matematika"/>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 my-3">
                            <Cardkegiatan image={kegiatan1}/>
                    </div>
                    <div className="col-12 my-3">
                            <Cardkegiatan image={kegiatan2}/>
                    </div>
                    <div className="col-12 my-3">
                            <Cardkegiatan image={kegiatan1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent;