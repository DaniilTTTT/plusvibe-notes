import React from 'react'
import './UserNeed.css'

function UserNeed() {
  return (
    <div className='userneed-container'>
      <div className="features">
        <h3 className='features-title'>Powerful features</h3>
        <h4 className='feature'><span className='feature-title'><img src="/thunder.svg" alt="speed" className='feature-img'/>Fast loading speed</span> <p className='feature-desc'>The app ensures you spend less time waiting and more time creating.</p></h4>
        <h4 className='feature'><span className='feature-title'><img src="/beauty.svg" alt="beauty" className='feature-img'/>Responsive design</span> <p className='feature-desc'>Our responsive design guarantees a flawless experience on all devices.</p></h4>
        <h4 className='feature'><span className='feature-title'><img src="/lock.svg" alt="lock" className='feature-img'/>Data security</span> <p className='feature-desc'>We prioritize data security to keep your notes safe and private at all times.</p></h4>
      </div>

      <div className="benefits">
        <h3 className='benefits-title'>Direct benefits</h3>
        <h4 className='benefit'><span className='benefit-title'><img src="/time.svg" alt="time" className='benefit-img'/>Save your time</span> <p className='benefit-desc'>Providing quick note-taking features that let you capture ideas instantly.</p></h4>
        <h4 className='benefit'><span className='benefit-title'><img src="/productivity.svg" alt="productivity" className='benefit-img'/>Improves productivity</span> <p className='benefit-desc'>Organizing your notes efficiently and helps you focus on what matters most.</p></h4>
        <h4 className='benefit'><span className='benefit-title'><img src="/ux.svg" alt="ux" className='benefit-img'/>Enhances user experience</span> <p className='benefit-desc'>We prioritize data security to keep your notes safe and private at all times.</p></h4>
      </div>
    </div>
  )
}

export default UserNeed