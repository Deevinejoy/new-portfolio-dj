import React from 'react'
import './Education.css'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { FcGraduationCap} from 'react-icons/fc'
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
    const data=[
        {
            name: 'Obafemi Awolowo University',
            degree: 'Bsc',
            year: '2017-2023',
            des: 'Pure and Applied Chemistry'
        },
       
        {
            name: 'Udemy',
            degree: 'nil',
            year: '2021',
            des: 'Web development'
        },
        {
            name: 'Cousera',
            degree: 'nil',
            year: '2023',
            des:'Wordpress'
        },
       
    ]
   
  return (
    <div className='container education-section'
        id='education'>
         <div className='section-title'>
            <h1>Education </h1>
            <span className="line"></span>
        </div>

        <VerticalTimeline lineColor='brown' >
             {data.map((item, index)=>(    
                <VerticalTimelineElement
                key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#996248', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  brown' }}
                  date={item.year}
                  dateClassName='date-class'
                  iconStyle={{ background: 'black', color: 'white' }}
                  icon={<FcGraduationCap />}>
                  <h3 className="vertical-timeline-element-title">{item.name}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.degree}</h4>
                
                  <p>
                    {item.des}
                  </p>
                </VerticalTimelineElement>  
               ))}
        </VerticalTimeline>
      
      
    </div>
  )
}

export default Education
