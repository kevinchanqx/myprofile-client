import './index.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark custom-nav nav-shadow">
      <div class="container centralize">
        <a class="navbar-brand nav-menu home-icon" href="/"><i class="fa-solid fa-house-chimney-user"></i></a>
        <a class="navbar-brand nav-menu" href="/home">Home</a>
        <a class="navbar-brand nav-menu" href="/about-me">About Me</a>
        <a class="navbar-brand nav-menu" href="/education">Education</a>
        <a class="navbar-brand nav-menu" href="/career">Career</a>
        <a class="navbar-brand nav-menu" href="/contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar