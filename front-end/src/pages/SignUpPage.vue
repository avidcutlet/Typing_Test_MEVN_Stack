<template>
	<div class="container p-5 my-5 mx-auto border rounded">
		<h2 class="mb-5">Sign up</h2>
		<div class="form-floating mb-3">
			<input
				type="text"
				class="form-control mx-auto"
				id="floatingInput"
				placeholder="Username"
			/>
			<label for="floatingInput">Username</label>
		</div>
		<div class="form-floating mb-3">
			<input
				type="email"
				class="form-control mx-auto"
				id="floatingInput"
				placeholder="name@example.com"
			/>
			<label for="floatingInput">Email address</label>
		</div>
		<PasswordField />
		<PasswordField />
		<div class="d-flex flex-row-reverse pt-3">
			<button type="button" class="btn btn-outline-danger">Cancel</button>
			<button type="button" class="btn btn-outline-primary mx-4">
				Sign up
			</button>
		</div>
	</div>
</template>

<script>
import PasswordField from '@/components/PasswordField.vue';

export default {
	name: "RegistrationPage",
	components: {
		"PasswordField": PasswordField, // Using component more than once
	},
};
</script>

<style>
    .container {
        max-width: 40%;
    }
</style>