<template>
  <div class="row g-0">
    <div class="col-12 col-lg-7 col-xl-8 p-4 p-sm-5">
      <img src="../assets/images/logo.png" alt="Logo">
      <div class="mx-auto mt-5 text-center col-md-9 col-lg-11 col-xl-8">
        <h1 class="fw-bold">Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ducimus consequuntur temporibus non assumenda impedit.</p>
        <div class="px-3 py-5 my-5 bg-white rounded-4 shadow border">
          <h3 class="text-uppercase fs-5 fw-bold">Login to your account</h3>
          <form id="login-form" class="mx-auto mt-4 col-md-8">
            <div class="mb-3 input-group">
              <span class="input-group-text" id="email-icon"><i class="fa-regular fa-envelope"></i></span>
              <input type="email" class="py-3 form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="email-icon">
            </div>
            <div class="mb-4 input-group">
              <span class="input-group-text" id="password-icon"><i class="fa-solid fa-lock"></i></span>
              <input type="password" class="py-3 form-control" placeholder="Password" aria-label="Password" aria-describedby="password-icon">
            </div>
            <button @click="$router.push('/dashboard')" type="button" class="px-4 btn-blue text-uppercase">Login</button>
          </form>
          <div class="mt-2">
            <a href="#"><small>Forgot password?</small></a>
          </div>
        </div>
      </div>
    </div>
    <div class="signup-div d-flex align-items-center justify-content-center p-4 p-sm-5 col-12 col-lg-5 col-xl-4">
      <div class="text-center">
        <h3 class="text-uppercase fw-bold fs-4 text-white">New here?</h3>
        <p class="text-white">Sign up to lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form id="signup-form" class="mt-4">
          <div class="signup-input-boxes px-3 py-4 rounded shadow">
            <div class="mb-3 form-floating">
              <input type="email" class="form-control" id="signup-email" placeholder="name@example.com">
              <label for="signup-email">Email Address</label>
            </div>
            <div class="mb-3 form-floating">
              <input type="text" class="form-control" id="name" placeholder="John Doe">
              <label for="name">Full Name</label>
            </div>
            <div class="mb-3 form-floating">
              <input type="password" class="form-control" id="signup-password" placeholder="Password">
              <label for="signup-password">Password</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="confirm-password" placeholder="Confirm Password">
              <label for="confirm-password">Confirm Password</label>
            </div>
          </div>
          <button type="submit" class="btn-white-border mt-5">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'homePage'
}
</script>
