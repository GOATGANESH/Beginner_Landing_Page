let menu=document.getElementById('menu')
let lightDarkMode=document.getElementById('light-dark-mode')
let navborder=document.getElementById('nav-bar')
const account=document.getElementById('sign-in')
let flag=0

let isSignedIn=false

lightDarkMode.addEventListener('click',()=>{
    if (flag==0) {
        document.body.style.animation="darkbackground 0.6s ease-in";
    setTimeout(()=>{
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
        navborder.style.borderBottom="2px solid white"
    },550)
    flag=1
    }
    else{
        document.body.style.animation="lightbackground 0.6s ease-in";
    setTimeout(()=>{
        document.body.style.backgroundColor="#fff"
        document.body.style.color="black"
        navborder.style.borderBottom="2px solid black"
    },550)
    flag=0
    }
    
})

const userForm = document.createElement('div');
    userForm.id = 'user-form';
    userForm.style.display = 'none';
    userForm.innerHTML = `
        <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="Submit">
        </form>
    `;
    document.querySelector('.content').appendChild(userForm);

    account.addEventListener('click', () => {
        document.querySelector('.content .left,.right').style.display="none"
        document.querySelector('.right img').style.display="none"
        userForm.style.display = 'block';
    });


