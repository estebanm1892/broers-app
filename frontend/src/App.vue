<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Inicio</router-link>
        <router-link class="nav-link" to="/users">Usuarios</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>
