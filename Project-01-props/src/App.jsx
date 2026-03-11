import React from 'react'
import { Bookmark } from "lucide-react"

const App = () => {
  return (
    <div className="parent">

      <div className="card">
        <div className="top">
          <img src="https://imgs.search.brave.com/-QlnopsS72o8z4m37MBvznkKqNpLr4D87VV3CRwrBjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc" alt="" />
          <button>Save  <Bookmark/></button>
        </div>
        <div className="center">

        </div>
      </div>

    </div>
  )
}

export default App