import React from "react"
import "./Home.css"
import hero from "../pic/hhh.png"
import skill1 from "../pic/skillicon.png"
import skill2 from "../pic/skillicon2.png"
import skill3 from "../pic/skillicon3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>John</span>
            </h1>
            <h2>
              a 
              <span>
                <Typewriter words={[" Professional Coder.", "Web Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p> I am a professional and experienced website designer and developer. I am an expert in HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, MySQL, WordPress, Canva, C, C++, java, java GUI.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                  <i class="fa-brands fa-facebook"></i>
                  </button>
                  <button className='btn_shadow'>
                  <i class="fa-brands fa-instagram"></i>
                  </button>
                  <button className='btn_shadow'>
                  <i class="fa-brands fa-twitter"></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
