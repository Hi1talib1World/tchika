<template>
  <div>
    <app-NavBar>
      <div class="navbar">
        <div class="logo">
          <img src="../assets/img/tchika-border.png" alt="Slack-Icon" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Media</a></li>
        </ul>
        <div class="login-user">
          <p>{{ userName }}</p>
          <div class="circle">
            <img src="../assets/img/user.png" alt="User-Image" />
          </div>
          <div>
            <i class="fa fa-cog"></i>
          </div>
          <div>
            <i class="fa fa-asterisk"></i>
          </div>
        </div>
      </div>
    </app-NavBar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      userName: "Hicham Outaleb"
    };
  }
};
</script>

<style scoped>
.navbar {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  background-color: #30004c;
  font-size: 1.6rem;
  min-height: 8rem;
  --main-color: rgb(161, 156, 156);
}
ul {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  flex: 0 0 40%;
}
li a {
  color: var(--main-color);
  text-decoration: none;
  border-bottom: solid transparent 2.5px;
  padding-bottom: 1rem;
}
li a:hover {
  color: white;
  border-bottom: solid white 2.5px;
}
.logo img {
  width: 5rem;
  height: 5rem;
  margin-left: 4.5rem;
}
.login-user {
  display: flex;
  justify-content: space-around;
  margin-right: 5.8rem;
  min-width: 19%;
  margin-top: 0.8rem;
  position: relative;
}
.login-user p {
  border-bottom: solid rgb(161, 156, 156) 2.5px;
  padding-bottom: 0.5rem;
  color: var(--main-color);
}
.login-user img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: solid rgb(62, 58, 84) 2px;
}
.circle {
  width: 5.7rem;
  height: 5.7rem;
  border: solid white 1.4px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 3.4rem;
  top: -0.5rem;
}
.fa,
.fa-cog {
  position: absolute;
  top: 65%;
  left: 87%;
  color: var(--main-color);
  font-size: 2.1rem;
}
.fa-asterisk {
  color: var(--main-color);
  position: absolute;
  top: 60%;
  left: 93%;
  font-size: 1rem;
}
</style>
