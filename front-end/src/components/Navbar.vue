<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img
					src="/docs/5.0/assets/brand/bootstrap-logo.svg"
					alt=""
					width="30"
					height="24"
					class="d-inline-block align-text-top"
				/>
				Typing Test
			</a>
			<ul
				class="navbar-nav justify-content-end my-2 my-lg-0 navbar-nav-scroll"
				style="--bs-scroll-height: 100px"
			>
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#"
						>Sign up</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#"
						>Login</a
					>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavBar",
};
</script>
