import React from 'react'
import './About.css'
function About() {
  return (
    <>
    <section className='main'>
        <div className="main1">
            <div className="part-1">
                <h2>ABOUT CONFERENCE</h2>
                <hr />
                <h1><span>WELCOME TO THE <br /></span> PROJECT MANAGEMENT</h1>
                <p>The Project Management is a platform to learn expert techniques for building successful project teams, creating efficient plans and implementing effective tracking measures to ensure your projects come in on deadline and on budget. In one fast-paced, well-designed day, we’ll cover all the essential elements of project management.</p>
                <button>INTEREST</button>
            </div>
            <div className="part-2">
                <img src="https://preview.colorlib.com/theme/confer/img/bg-img/2.png" alt="" />
            </div>

        </div>
        <div className="part-3">
            <div className="t1"><h3>CONFERENCE DATE</h3>
            
            <h2>COUNT EVERY SECOND <br /> UNTIL THE EVENT</h2>
            </div>
            <div className="t"><span>00</span> Months</div>
            <div className="t"><span>00</span> <br /> Days</div>
            <div className="t"><span>00</span> <br /> Hours</div>
            <div className="t"><span>00</span> Minutes</div>
            <div className="t"><span>00</span> Seconds</div>

        </div>
    </section>
    </>
  )
}

export default About

