import React from 'react'
import IndexHeader from '../../Components/indexHeader/indexHeader'
import "./contactPage.less"
import EmailIcon from '@mui/icons-material/Email';
const ContactPage = () => {
  return (
    <div>
        <IndexHeader/>
        <div className="contactContainer">
          <div className="emailContainer">
           <EmailIcon className='icon' fontSize='large' style={{color: '#41b3a3'}} />
           <div>
           Email: cuijy100@gmail.com 

           </div>
           </div>
           {/* <div className='copyContainer' onClick={()=> {window.navigator.clipboard.writeText("cuijy100@gmail.com").then(function(x) {
            alert("Email has been copied");
            })}}
         >copy</div> */}
            
        </div>
        

    </div>
  )
}

export default ContactPage