import Card from './components/card'
const App = () => {
 const jobs = [
  {
    brandLogo: "https://imgs.search.brave.com/vgyIh0TbKxPNSu2j2PaXLnYOyFFuLCMYlBf_fL71sOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore"
  },
  {
    brandLogo: "https://imgs.search.brave.com/PaEPYpRQV5ZOViC3PzEHHTgAMCWH3NoBzzDq2yIa6IE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2FwcGxlLWxvZ28t/cG5nL2FwcGxlLWxv/Z28taWNvbi0xNi5w/bmc",
    name: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad"
  },
  {
    brandLogo: "https://imgs.search.brave.com/zx7cxNMKmQOnZfpcwQbaxGEQVAHp_m6pV_e2gqJCE1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NDk1LzIwNy9zbWFs/bC9tZXRhLWxvZ28t/cm91bmRlZC1nbG9z/c3ktaWNvbi13aXRo/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Bangalore"
  },
  {
    brandLogo: "https://imgs.search.brave.com/-QlnopsS72o8z4m37MBvznkKqNpLr4D87VV3CRwrBjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai"
  },
  {
    brandLogo: "https://imgs.search.brave.com/gtEqWi7RJOX_WMq88-Soryp4wbWAqsE7fUIOIAnbBMg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTcv/Mzk2LzgxNC9zbWFs/bC9uZXRmbGl4LW1v/YmlsZS1hcHBsaWNh/dGlvbi1sb2dvLWZy/ZWUtcG5nLnBuZw",
    name: "Netflix",
    datePosted: "4 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://imgs.search.brave.com/iHkbQTj4aZlTc_7pRtQ-E3G3u7PenlogD0buYAcji2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q0L2Vm/LzE1L2Q0ZWYxNTUx/N2YwNGJjMGI2MDAy/M2Y2YTQ1MzhlZDVk/LmpwZw",
    name: "Microsoft",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Hyderabad"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Ng3ovJirtLC9ah5RcwYmeT0KEDH5AdzHoKbifMa9cYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9pbnNwaXJh/dGlvbl9pbWFnZXMv/NjUxNTYwL2NvbnZl/cnNpb25zLzEyMDB4/NjAwd2EtZGVza3Rv/cC5qcGc",
    name: "Uber",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Bangalore"
  },
  {
    brandLogo: "https://imgs.search.brave.com/DaONTt_LMJS0y-F6IyOzC8pwbedIcVZm31UdMA2wdA8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/aGlzdG9yeS5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDkvQWlyYm5iLUxv/Z28ucG5n",
    name: "Airbnb",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://imgs.search.brave.com/keoO9nomv2zjmkTaR52gpx1_ymCD009HJuF4HhZhtEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvaW5mbHVlbnQu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzEwL0xpbmtl/ZGluLUxvZ28tMjAw/MyVFMiU4MCU5MzIw/MTEtbWluLTEtMzAw/eDE2OS5qcGc",
    name: "LinkedIn",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Bangalore"
  },
  {
    brandLogo: "https://imgs.search.brave.com/W8Uk6TJWmp1G4RKVc2C9Pfi7iWchZ-tldGL1aUwWbC8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MmE0YzA2NmZkZWUx/NWQyOTA1MDA3YzAu/cG5n",
    name: "Adobe",
    datePosted: "2 weeks ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Noida"
  }
];

  return (
    <div className="parent">
     {jobs.map(function(elem,idx){
      return <div key={idx}>

      <Card logo={elem.brandLogo} name={elem.name}
      datePosted={elem.datePosted} 
      post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
      </div>
     })}
    </div>
  )
}

export default App