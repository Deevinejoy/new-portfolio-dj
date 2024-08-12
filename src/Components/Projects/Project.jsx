
import Projectlist from './Projectlist'

const Project = () => {

    const data=[
        {
            name: 'EWC',
            des: 'Landing page for church ',
            link: 'https://youtu.be/LnBAqjkrpjE',
            img: './img/vector.jpg'
            
        },
        {
            name: 'Blog Page',
            des: 'A blog page you can Add, Delete and Edit blog posts',
            link: 'https://youtu.be/OYmN7gtLkTc',
             img:'./img/vector.jpg'
            
        },
        {
            name: 'URL shortener',
            des: 'Website to help shorten you URL',
            link: 'https://youtu.be/R8H0B6OiC1o',
             img: './img/vector.jpg'
            
        },
        {
            name: 'To-do list',
            des: 'To do list app for everyday tasks made with just html, css and javascript',
            link: 'https://youtu.be/xPa9q_ysyF4',
            img:'./img/vector.jpg'
           
        },
       
        {
            name: 'Sign-up page',
            des: 'Sign up page with e-mail validation to check for correct e-mail format',
            link: 'https://youtu.be/ezRTf_hV2Qw',
            img: './img/vector.jpg'
       
        },
       
       
        {
            name: 'Grocery list',
            des: 'App for your grocery list',
            link: 'https://youtu.be/pCFo9dZ_9cg',
            img: './img/vector.jpg'
 
        },
        {
            name: 'Color changing card',
            des: 'Changes color based on what you type',
            link: 'https://youtu.be/iIQ8uDwZ5KU',
            img: './img/vector.jpg'
        }
       
    ]
    const wpdata=[
        {
            name: 'EWC',
            des: 'Landing page for church ',
            link: 'https://youtu.be/LnBAqjkrpjE',
            img: './img/vector.jpg'
            
        },
        {
            name: 'Blog Page',
            des: 'A blog page you can Add, Delete and Edit blog posts',
            link: 'https://youtu.be/OYmN7gtLkTc',
            img: './img/vector.jpg'
        },
        {
            name: 'URL shortener',
            des: 'Website to help shorten you URL',
            link: 'https://youtu.be/R8H0B6OiC1o',
            img: './img/vector.jpg'
            
        },
        {
            name: 'To-do list',
            des: 'To do list app for everyday tasks made with just html, css and javascript',
            link: 'https://youtu.be/xPa9q_ysyF4',
            img:'./img/vector.jpg'
        },
       
        {
            name: 'Sign-up page',
            des: 'Sign up page with e-mail validation to check for correct e-mail format',
            link: 'https://youtu.be/ezRTf_hV2Qw',
            img: './img/vector.jpg'
        },
       
       
        {
            name: 'Grocery list',
            des: 'App for your grocery list',
            link: 'https://youtu.be/pCFo9dZ_9cg',
            img: './img/vector.jpg'
 
        },
        {
            name: 'Color changing card',
            des: 'Changes color based on what you type',
            link: 'https://youtu.be/iIQ8uDwZ5KU',
            img: './img/vector.jpg'
        }
       
    ]

  return (
    <div className='container'
    id='projects'>
        <div className='section-title'>
            <h1>Projects </h1>
            <span className="line"></span>
        </div>
        <div className='container row projects'> 
        {data.map((item, index)=>
            <div className='col-xl-6 col-lg-6 col-md-6  col-sm-12' key={index}>
                <Projectlist item={item} />
            </div>
        )}
        </div>
        <div className='section-title'>
            <h1> Wordpress Projects </h1>
            <span className="line"></span>
        </div>
        <div className='container row projects'> 
        {wpdata.map((item, index)=>
            <div className='col-xl-6 col-lg-6 col-md-6  col-sm-12' key={index}>
                <Projectlist item={item} />
            </div>
        )}
        </div>
      
    </div>
  )
}

export default Project
