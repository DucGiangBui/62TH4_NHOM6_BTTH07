$(document).ready(function(){

        function checkUserID() {
            let userID = $("#txtUserID").val();
            let userIDRegex = /^[a-zA-z0-9]{5,12}$/;
            if (userIDRegex.test(userID)) {
                return true;
            }
            return false;
        }

        function checkPW() {
            let pw = $("#txtPW").val();
            let pwRegex = /^[a-zA-z0-9]{7,12}$/;
            if (pwRegex.test(pw)) {
                return true;
            }
            return false;
        }

        function checkName(){
            let name = $("#txtName").val();
            let nameRegex = /^[a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
            if (nameRegex.test(name)){
                return true;
            }
            return false;
        }

        function checkAddress(){
            let Address = $("#txtAdd").val();
            let AddressRegex = /^[a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
            if(AddressRegex.test(Address)){
                return true
            }
            return false
        }
        // function checkCountry() {
        //     let country = d$("#country").val();
        //     if (country!= "0") {
        //         return true;
        //     } 
        //     return false;
        // }

        function checkZipCode(){
            let zipCode = $("#txtZip").val();
            let zipCodeRegex = /^[0-9]{5,7}$/;
            if (zipCodeRegex.test(zipCode)){
                return true;
            }
            return false;
        }

        function checkEmail(){
            let email = $("#txtEmail").val();
            let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
            if (emailRegex.test(email)){
                return true;
            }
            return false;
        }

        function checkEmail(){
            let email = $("#txtEmail").val();
            let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
            if (emailRegex.test(email)){
                return true;
            }
            return false;
        }

        function checkEmail(){
            let email = $("#txtEmail").val();
            let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
            if (emailRegex.test(email)){
                return true;
            }
            return false;
        }
    
    
        $("#btnRegister").click(function(e){
            e.preventDefault();
            if(checkUserID()){
                $("#statusOfUserID").text('User ID hợp lệ !')
                $("#statusOfUserID").css('color','blue')
            }
            else{
                $("#statusOfUserID").text('User ID không hợp lệ !')
                $("#statusOfUserID").css('color','red')
            }
            if(checkPW()){
                $("#statusOfPass").text('Password hợp lệ !')
                $("#statusOfPass").css('color','blue')
            }
            else{
                $("#statusOfPass").text('Password không hợp lệ !')
                $("#statusOfPass").css('color','red')
            }
            if(checkName()){
                $("#statusOfName").text('Name hợp lệ !')
                $("#statusOfName").css('color','blue')
            }
            else{
                $("#statusOfName").text('Name không hợp lệ !')
                $("#statusOfName").css('color','red')
            }
            if(checkAddress()){
                $("#statusOfAdd").text('Address hợp lệ !')
                $("#statusOfAdd").css('color','blue')
            }
            else{
                $("#statusOfAdd").text('Address không hợp lệ !')
                $("#statusOfAdd").css('color','red')
            }
            // if(checkCountry()){
            //     $("#statusOfCountry").text('Country hợp lệ !')
            //     $("#statusOfCountry").css('color','blue')
            // }
            // else{
            //     $("#statusOfCountry").text('Country không hợp lệ !')
            //     $("#statusOfCountry").css('color','red')
            // }

            if(checkZipCode()){
                $("#statusOfZip").text('Zip Code hợp lệ !')
                $("#statusOfZip").css('color','blue')
            }
            else{
                $("#statusOfZip").text('Zip Code không hợp lệ !')
                $("#statusOfZip").css('color','red')
            }

            if(checkEmail()){
                $("#statusOfEmail").text('Email hợp lệ !')
                $("#statusOfEmail").css('color','blue')
            }
            else{
                $("#statusOfEmail").text('Email không hợp lệ !')
                $("#statusOfEmail").css('color','red')
            }
        })
    })