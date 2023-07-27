import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="SETTINGSmodalEnvironment" id="SETTINGSmodalID">
        <div class="SETTINGSmodalContainer MATERIAL-blur-3">
            <div class="SETTINGSmodalTopTextContainer">Sign Up</div>
            <form class="SETTINGSmodalFormAreaContainer" id="SETTINGSloginForm">
                <label for="username" class="SETTINGSmodalFormAreaText">Username</label><br>
                <input type="text" name="username" id="username" required>
                <br><br>
                <label for="email" class="SETTINGSmodalFormAreaText">Email</label><br>
                <input type="email" name="email" id="email" required>
                <br><br>
                <label for="password" class="SETTINGSmodalFormAreaText">Password</label><br>
                <input type="password" name="password" id="password" required>
                <br><br>
                <label for="profilePicture" class="SETTINGSmodalFormAreaText">Profile Picture</label><br>
                <input type="file" name="profilePicture" id="profilePicture" accept=".jpg, .png, .webp" required onchange="previewImage(event)">
                <br><br>
                <input class="SETTINGSmodalSubmit" type="submit" name="Submit" value="Submit">
            </form>
            <div class="SETTINGSrandomImage">
                <img id="previewImage" src="https://picsum.photos/400">
            </div>
        </div>
    </div>
`