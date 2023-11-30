<template>
	<div class="container p-5 my-5 mx-auto border rounded">
        <h2 class="mb-5">Login</h2>
		<div class="form-floating mb-3">
			<input
				type="email"
				class="form-control mx-auto"
				id="floatingInput"
				placeholder="name@example.com"
			/>
			<label for="floatingInput">Email address</label> 
		</div>
		<div class="form-floating">
			<input
				type="password"
				class="form-control mx-auto"
				id="floatingPassword"
				placeholder="Password"
			/>
			<label for="floatingPassword">Password</label>
		</div>
        <div class="d-flex flex-row-reverse pt-3">
            <button type="button" class="btn btn-outline-danger">Cancel</button>
            <button type="button" class="btn btn-outline-primary mx-4">Login</button>
        </div>
	</div>
</template>

<script>
export default {
	name: "LoginPage",
};
</script>

<style>
    .container {
        max-width: 40%;
    }
</style>