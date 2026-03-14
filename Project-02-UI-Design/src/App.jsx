import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'royalblue',
      Tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'pink',
      Tag:'UnderServed'

    },
    {
      img:'https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'lightseagreen',
      Tag:'Underbanked'

    },
    {
     img:'https://images.unsplash.com/photo-1690444963408-9573a17a8058?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black',
      Tag:'Aura Farming'
    },
  ] 



  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App