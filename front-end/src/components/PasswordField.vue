<template>
	<div class="form-floating">
		<input
			:type="passwordVisibility()"
			class="d-inline form-control mw-75"
			id="floatingPassword"
			placeholder="Password"
			v-model="password"
		/>
		<button
			class="d-inline btn btn-outline-secondary"
			type="button"
			@click="togglePasswordVisibility"
		>
			<i class="bi bi-eye" v-if="showPassword"></i>
			<i class="bi bi-eye-slash" v-else></i>
		</button>
		<label for="floatingPassword">Password</label>
	</div>
</template>

<script>
export default {
   name: "PasswordField",
   data() {
		return {
			password: "",
			showPassword: false,
		};
	},
   methods: {
		togglePasswordVisibility() {
			this.showPassword = !this.showPassword;
		},
		passwordVisibility() {
			return this.showPassword ? 'text' : 'password'
		},
	},
}
</script>

<!-- <style>
   #floatingPassword {
      max-width: 50%;
   }
</style> -->