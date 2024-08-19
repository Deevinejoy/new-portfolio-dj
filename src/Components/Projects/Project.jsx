import { useState } from 'react'
import Projectlist from './Projectlist'

const Project = () => {

    const data = [
        {
            name: 'DevLinks',
            des: 'A link sharing app with firebass AUTH',
            link: 'https://youtu.be/iIQ8uDwZ5KU',
            img: './img/devlink.png'
        },
        {
            name: 'EWC',
            des: 'Landing page for church ',
            link: 'https://ewc-dj-eox7.vercel.app/',
            img: './img/ewc.png'

        },
        {
            name: 'Blog Page',
            des: 'A blog page you can Add, Delete and Edit blog posts',
            link: 'https://youtu.be/OYmN7gtLkTc',
            img: './img/blog.png'

        },
        {
            name: 'URL shortener',
            des: 'Website to help shorten you URL',
            link: 'https://youtu.be/R8H0B6OiC1o',
            img: './img/shortly.png'

        },
        {
            name: 'E-commerce site',
            des: 'Craft furniture where you can view products deyails, add to cart and checkout',
            link: 'https://hng-2-onlinestore.vercel.app/',
            img: './img/fur.png'

        },
        {
            name: 'To-do list',
            des: 'To do list app for everyday tasks made with just html, css and javascript',
            link: 'https://youtu.be/xPa9q_ysyF4',
            img: './img/vector.jpg'

        },

        {
            name: 'Sign-up page',
            des: 'Sign up page with e-mail validation to check for correct e-mail format',
            link: 'https://youtu.be/ezRTf_hV2Qw',
            img: './img/form.png'

        },


        {
            name: 'Grocery list',
            des: 'App for your grocery list',
            link: 'https://youtu.be/pCFo9dZ_9cg',
            img: './img/grocery.png'

        }

    ]
    const wpdata = [
        {
            name: 'Kitarific',
            des: 'A digital marketing agency',
            link: 'https://kitarific.com',
            img: './img/kitarific.png'
        },
        {
            name: 'Kitavibez',
            des: 'A personal website',
            link: 'https://kitavibezz.com',
            img: './img/kitavibez.png'

        }
      
    ]
    const [loadMore, setLoadMore] = useState(2)
    const handleLoadMore = () => {
        setLoadMore((prev) => prev + 2)

    }
    const [loadMore2, setLoadMore2] = useState(2)
    const handleLoadMore2 = () => {
        setLoadMore2((prev) => prev + 2)

    }

    return (
        <div className='container'
            id='projects'>
            <div className='section-title'>
                <h1>Projects </h1>
                <span className="line"></span>
            </div>
            <div className='container row projects'>
                {data.slice(0, loadMore).map((item, index) =>
                    <div className='col-xl-6 col-lg-6 col-md-6  col-sm-12' key={index}>
                        <Projectlist item={item} />
                    </div>
                )}
              
              {loadMore >= data.length ? null :
                    <span className='load-more' onClick={handleLoadMore}>Load More</span>
                }
            </div>

            <div className='section-title'>
                <h1> Wordpress Projects </h1>
                <span className="line"></span>
            </div>
            <div className='container row projects'>
                {wpdata.slice(0, loadMore2).map((item, index) =>
                    <div className='col-xl-6 col-lg-6 col-md-6  col-sm-12' key={index}>
                        <Projectlist item={item}  />
                    </div>

                )}

                {loadMore2 >= wpdata.length ? null :
                    <span className='load-more' onClick={handleLoadMore2}>Load More</span>
                }

            </div>


        </div>
    )
}

export default Project
