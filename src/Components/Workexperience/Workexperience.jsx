import React from 'react'
import './Workexperience.css'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { MdGroupWork } from 'react-icons/md'
import 'react-vertical-timeline-component/style.min.css';
 

const Workexperience = () => {
    const data =[
        {
            company: 'Fiverr',
            position: 'Frontend developer',
            year: '2022 - Date',
            tech:[
                {
                    techName: 'Reactjs'
                },
                {
                    techName: 'Nodejs'
                },
            
                {
                    techName: 'javascript'
                },
                {
                    techName: 'Tailwind'
                }
            ]
        },
        {
            company: 'Kitarific',
            position: 'Wordpress designer',
            year: '2022 - 2024',
            tech:[
                {
                    techName: 'Wordpress'
                },
                {
                    techName: 'Elementor'
                },
            
                {
                    techName: 'Javascript'
                }
            ]
        },
        {
            company: 'Codeplay',
            position: 'Frontend developer',
            year: '2023 - 2024',
            tech:[
                {
                    techName: 'React Native'
                },
                {
                    techName: 'Bootstrap'
                },
            
                {
                    techName: 'Tailwind'
                }
            ]
        },
                
        {
            company: 'Upwork',
            position: 'Frontend developer',
            year: '2022 - Date',
            tech:[
                {
                    techName: 'NextJs'
                },
                {
                    techName: 'React'
                },
            
                {
                    techName: 'Javascript'
                }
            ]
        },
        {
            company: 'HNG',
            position: 'Frontend developer',
            year: '2024',
            tech:[
                {
                    techName: 'NextJs'
                },
                {
                    techName: 'React'
                },
            
                {
                    techName: 'Tailwind'
                },
                {
                    techName: 'Bootstrap'
                }
            ]
        },
    ]
   
  return (
    
    <div className='container work-experience'
    id='work'>
        <div className='section-title'>
            <h2>Work Experience</h2>
            <span className='line'></span>
        </div>
            <VerticalTimeline lineColor='brown' >
             {data.map((item, index)=>(

            
                <VerticalTimelineElement
                key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#996248', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  brown' }}
                  iconStyle={{ background: 'black', color: 'white' }}
                  icon={<MdGroupWork />}>
                  <h3 className="vertical-timeline-element-title">{item.company}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.position}
                  </h4>
                  <p className="vertical-timeline-element-subtitle">{item.year}
                  </p>

                  <div className='row'>
                        { item.tech.map((tech, index)=>
                                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                                    <div className='tech-skills'>
                                        <p>{tech.techName}</p>
                                       
                                    </div>
                                </div>
                        )}
                  </div>
                  
               </VerticalTimelineElement>               
               ))}
           </VerticalTimeline>
    </div>
  )
}

export default Workexperience
