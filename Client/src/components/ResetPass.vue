
<template>
<body> 
<div align=center>
    <h1>Change Password</h1>
    
    <form method="post" action="">

     <label for="token">Token:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
    <input type="password" id="token" name="token" title="Token" /><br>


    <label for="newPassword">New Password:&ensp;&ensp;&ensp;</label>
    <input type="password" id="newPassword" name="newPassword" title="New password" /><br>
    
    <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" name="confirmPassword" title="Confirm new password" /><br>

   <input type=button onClick="location.href='login.html'" value='Change password'>
    
    <!-- <input type="submit" value="Change Password" title="Change password" /> -->
    
    </form> 
</div>

</body>
</template>
<script>
export default {
    return:{

    }
}
</script>
 function Function() {
        var oldpasswprd = document.getElementById('oldPassword').value;
        var newpassword = document.getElementById('newPassword').value;
        var confirmpassword = document.getElementById('confirmPassword').value;
        if (oldPassword == "" || newpassword == "" || confirmpassword == "") {
            alert('Please fill all the details');
        }
        else if (oldpasswprd == newpassword) {
            alert("Old password and New Password cannot be same");
        }
        else if (newpassword != confirmpassword) {
            alert("password mismatch");
        }
    }

<style>
        body{
            background-color: cadetblue;

        }
        button{
            background-color: green;
        }
 </style>
