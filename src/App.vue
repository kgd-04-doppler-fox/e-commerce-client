<template>
  <div>
    <nav>
      <h1 class="logo">PoppyShop</h1>
      <input type="checkbox" id="hamburger-toggle">
      <label for="hamburger-toggle" class="hamburger">
        <span class="bar"></span>
      </label>
      <ul class="nav-list">
        <li><router-link to="/home">home</router-link></li>
        <li><router-link to="/cart/:UserId">cart</router-link></li>
        <li><router-link to="/login">login</router-link></li>
        <li><router-link to="/logout">logout</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
* {
  font-family: "Circular Spotify Tx T Black";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  padding: 20px 25px;
  background-color: palevioletred;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  text-transform: uppercase;
  color: aliceblue;
}

.nav-list {
  display: flex;
  list-style: none;
}

.nav-list li {
  margin-left: 30px;
}

.nav-list li a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  color: aliceblue;
}

#hamburger-toggle {
  display: none;
}

.hamburger {
  width: 30px;
  height: 30px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 25px;
}

.hamburger .bar {
  display: inline-block;
  width: 30px;
  height: 2px;
  background-color: white;
  position: relative;
  transition: all 0.3s;
}

.hamburger .bar::before,
.hamburger .bar::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  transition: all 0.3s;
}

.hamburger .bar::before {
  transform: translateY(-10px);
}

.hamburger .bar::after {
  transform: translateY(10px);
}

@media (max-width: 600px) {
  .nav-list {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: palevioletred;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(-100%);
    transition: transform 0.3s;
    z-index: 998;
  }

  .nav-list li {
    margin: 10px 0;
  }

  .nav-list li a {
    display: inline-block;
    font-size: 20px;
    padding: 15px 20px;
    transition: all 0.3s;
  }

  .nav-list li a:hover {
    background-color: white;
    color: palevioletred;
    transform: translateY(-10px);
  }

  .hamburger {
    display: flex;
    z-index: 999;
  }

  #hamburger-toggle:checked ~ .nav-list {
    transform: none;
  }

  #hamburger-toggle:checked .hamburger .bar::before {
    transform: rotate(45deg);
  }

  #hamburger-toggle:checked ~ .hamburger .bar {
    background-color: transparent;
  }

  #hamburger-toggle:checked .hamburger .bar::after {
    transform: rotate(-45deg);
  }
}
</style>
