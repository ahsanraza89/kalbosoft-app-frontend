import React from 'react'
import Card from '../../components/card/Card'


export default function Home() {

  return (
    <div>
    
      <img src="/home.jpg" alt="Home" />
      <div className="px-10  pt-10 ">
      <h1 className="text-3xl  mb-10 text-center ">Available Programs   </h1>
      </div>
    <div className='flex flex-wrap justify-center items-center gap-10 ml-16'>
      
      <Card image = "/programs-include/1.jpg" title = "Artifical Intelligence" description = "The projects being designed with the colloaboration with top tier companies, you'll actually be learning the tech skills companies seek" />
      <Card image = "/programs-include/2.jpg" title = "Blockchain" description = "Being linked with the industry, you'll get access to productive sessions and events for your personal development and career growth." />
      <Card image = "/programs-include/3.jpg" title = "Web & Mobile Development" description = "Learn latest state of the art Web and Mobile Devlopment with hybrid technologies." />
      <Card image = "/programs-include/4.jpg" title = "E-Commerce Amazon" description ="learn how tp step on amazon This is the best prodicts cidc  the century" />
      <Card image = "/programs-include/5.jpg" title = "Microsoft Office" description ="Get advanced, professional training on MS Office and start boosting your office productivity right now!" />
      <Card image = "/programs-include/6.jpg" title = "Investor Account" description ="Become a part of Gamica Eco System as an investor and receive a valuable return!" />
      </div>
  
     
  
    </div>
  )
}
