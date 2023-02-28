import React from 'react'
import './contact.css'

function Contact() {
  return (
    <>
        <section className='mannn'>
        <h5>HAVE QUESTION?</h5>
        <h2>CONTACT US</h2> 
        <div className='formm'> 
         
        <div className="title">
            <div className="title1">
                <p>Address:</p>
                <h4>184 Main Collins Street</h4>
                <p>Phone:</p>
                <h4>(226) 446 9371</h4>
                <p>Email:</p>
                <h4>confer@gmail.com</h4>
                <p>Websit:</p>
                <h4>www.confer.com</h4>
            </div>
        </div>

          <form>    

            {/* <h4 class="text-warning text-center pt-5">Registration Page</h4>  

             */}
             <br /><br />
            {/* <label>     

              <input type="text" class="input" name="name" placeholder="Your name"/>                   <div class="line-box">          

              <div class="line"></div>        

              </div>    

            </label>      */}

            

            <label>     

              <input 

                     type="text" 

                     class="input" 

                     name="username"        

                     placeholder="Last name"/>        

              <div class="line-box">         

                <div class="line"></div>        

              </div>    

            </label>     

            

            <label>     
      
    
              <input type="email" 

                     class="input" 

                     name="email" 

                     placeholder="E-mail"/>        

              <div class="line-box">          

                <div class="line"></div>        

              </div>    

            </label>     

            

            {/* <label>     

              <input 

                     type="phone" 

                     class="input" 

                     name="number" 

                     placeholder="Your Number"/>      

              <div class="line-box">        

                <div class="line"></div>      

              </div>    

            </label>      */}
{/* <label className='textarea'>     

<input 

       type="textarea" 

       class="input" 

       name="message" 

       placeholder="message"/>      

<div class="line-box">        

  <div class="line"></div>      

</div>    

</label>  */}
<br />
            

            <button type="submit">Send Message</button>  

          </form> 

      </div> 
      </section>
    </>
  )
}

export default Contact