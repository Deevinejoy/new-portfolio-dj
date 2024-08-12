import React from 'react'
import './Techstack.css'
import {useState} from 'react'
import {Slide} from 'react-awesome-reveal'
import {Zoom} from 'react-awesome-reveal'

const Techstack = () => {
    const data=[
       
        {
            name: 'NextJs'
        },
        {
            name: 'Wordpress'
        },
        {
            name: 'Tailwind'
        },
        {
            name: 'ReactJs'
        },
        {
            name: 'Bootstrap'
        },
        {
            name:'UI/UX'
        },
        {
            name: 'Python'
        },
        {
            name: 'JavaScript'
        },
        {
            name: 'NodeJs'
        },
        {
            name: 'Html/css'
        },

        {
            name: 'Git'
        },
        {
            name: 'Github'
        },
        {
            name: 'React Native'
        }
      
    ]
   
   
    const [loadMore, setLoadMore] = useState(6)
    const handleLoadMore= () =>{
        setLoadMore((prev) => prev+3)
        
    }
  return (
    <div className='container' id='tech'>
        <div className='sect-title'>
            <h1>Tech stack</h1>
            <span className="line"></span>
        </div>
        <div className='row'>
        {data.slice(0,loadMore).map((item, index)=>
       
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'   key={index}   >
                <div className={index===0? 'tech-content-marked tech-content':'tech-content'} >
                    <span className='tech-no'
                     style={{backgroundColor: 'black'}}> {index+1}

                    </span>
                    <p>{item.name}</p> 
                </div>
                               
            </div>
     

        )} 
        </div>
       
        {loadMore >= data.length? null :
        <Zoom>
            <span className='load-more' onClick={handleLoadMore}>Load More</span>
        </Zoom>
      
   
}

    
      
    </div>
  )
}

export default Techstack
