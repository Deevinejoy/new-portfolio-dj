import { useState } from 'react'
import './Project.css'
import { FcExpand, FcCollapse } from 'react-icons/fc'

const Projectlist = ({ item }) => {
    const [projectCollapse, setProjectCollapse] = useState(false)
    const handleCollapse = () => {
        setProjectCollapse(!projectCollapse)
    }


    return (
        <div className={projectCollapse ? 'project-list-opened  project-list' : 'project-list'}
            onClick={handleCollapse}
            onMouseEnter={() => setProjectCollapse(true)}
            onMouseLeave={() => setProjectCollapse(false)}>
            <div className='project-collapse'>
                <h3>{item.name}</h3>
                <p>
                    {projectCollapse ? <FcCollapse size={20} /> : <FcExpand size={20} />}
                </p>
            </div>
            <div className='project-img'>
                <img src={item.img} alt='image' />

            </div>
            <div className="des">
                {projectCollapse ?
                    <p>{item.des}</p> : <p>{(item.des).substring(0, 20)}...
                        <span style={{ color: 'purple' }}> Read more</span></p>
                }

            </div>
            <div className='live-demo-btn'>
                <a target='_blank' href={item.link}>Live demo</a>
            </div>
        </div>
    )
}

export default Projectlist
