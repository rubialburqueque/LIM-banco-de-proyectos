<template>
        <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/">Choose - Movie</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Inicio</b-nav-item>
            <b-nav-item to="/programs">Programas</b-nav-item>
            <b-nav-item to="/movies">Películas</b-nav-item>
            <b-nav-item to="/most-recent">Mas recientes</b-nav-item>
            <b-nav-item to="/my-list">Mi lista</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" icon="search" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->  
            <template v-slot:button-content>
              <em>Admin</em>
            </template>
            <b-dropdown-item to="/login">Ingresar</b-dropdown-item>
            <b-dropdown-item to="/register">Registro</b-dropdown-item>
          </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>