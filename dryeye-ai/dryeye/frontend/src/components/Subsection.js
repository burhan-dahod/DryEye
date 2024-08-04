import React from 'react'

const Subsection = ({subtitle, children, className}) => {
  return (
    <section className={className + '-section'}>
      <h2>{subtitle}</h2>
      {children}
    </section>
    
    
  )
}

export default Subsection