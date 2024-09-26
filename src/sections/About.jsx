import Globe from "react-globe.gl";
import Button from "../conponents/Button";
import { useState } from "react";

const About = () => {
  
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('milad.abdi.137997@gmail.com')

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000)
  }
  return (
    <section className="c-space my-20">
      <div class="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/gridme1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>

            <div>
              <p className="grid-headtext text-end"> سلام , من میلاد هستم</p>
              <p className="grid-subtext text-end">با حدود یک سال تجربه کار , همواره در تلاش برای پیشرفت در این حوزه هستم, و علاقه زیادی به طراحی سه بعدی و انیمیشن دارم </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl row-span-1">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid2" className="w-full sm:w-[276px] h-fit object-contain"/>
            <div>
              <p className="grid-headtext" >Full-Stack</p>
              <p className="grid-subtext text-end">به دنبال یادگیری تخصصی <p className=" inline-block text-cyan-600"> Back-End </p> هستم ولی تمرکزم رو بصورت موقتی روی حوزه<p className="inline-block text-cyan-600">Front-End</p> قرار دادم</p>

            </div>
          </div>
        </div>

        <div className="grid-container">
          <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
            
            <Globe height={326} width={326}
              backgroundColor="rgba(0,0,0,0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[{
                lat: 34, lng: 53,
                text: "I'm here!",
              }]}
            />
          </div>
          <div>
              <p className="grid-headtext">
                آمادگی برای همکاری در پروژه های چالش برانگیز بصورت ریموت
              </p>
              <p className="grid-subtext text-end">
                من در شهر قم زندگی میکنم,و بدنبال یک شغل تمام وقت در یک شرکت پویا پر از چالش های جدید هستم و تنها نیازم رشد و یادگیری و پیشرفت در کارهای تیمی هست
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container ">
              <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
              <div>
                <p className="grid-headtext">علایق من در حوزه نرم افزار</p>
                  <p className="grid-subtext text-end">علاقه زیادی به دیباگ کردن و حل مسئله دارم گرچه گاهی این امر سردرد آور است , وهمجنین باور دارم که سایت هایی که این روزها طراحی میشن با درنظر گرفتن سرعت پیشرفت تکنولوژی های <p className="inline-block"> VR , AR </p> در آینده نه چندان دور جای خود را به طراحیی های سه بعدی خواهند داد از این رو تمام تلاشم و تمرکزم رو برای پیشرفت در این حوزه انجام خواهم داد </p>
                
              </div>
          </div>
        </div>

        <div className="grid-container">
              <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>

              <div className="space-y-2">
                <p className="font-extrabold mb-2 text-cyan-500 text-center text-2xl font-generalsans">😊
                  ارتباط با من
                </p>
                <div className="copy-container" onClick={handleCopy}>
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                  <p className="lg:text-1xl md:text-xl font-medium text-gray_gradient text-white">
                    milad.abdi.137997@gmail.com
                  </p>
                </div>
              </div>
        </div>
      </div>
    </section>
  )
} 

export default About