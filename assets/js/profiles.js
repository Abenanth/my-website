document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.single-profile').forEach(profile => {
        profile.addEventListener('click', function () {
            // Remove the active class from all profiles
            document.querySelectorAll('.single-profile').forEach(p => p.classList.remove('active'));

            // Add the active class to the clicked profile
            this.classList.add('active');
        });
    });
});

