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
            if (pwRegex.test(pw.value)) {
                return true;
            }
            return false;
        }
        function checkName() {
            let Name = $("txtName").val();
            let NameRegex =/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
            if (NameRegex.test(Name.value)) {
                 return true;
            }
            return false;
        }
        function checkAddress(){
            let Address = $("txtAddress").val();
            let AddressRegex = /^[a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
            if(AddressRegex.test(Address.value)){
                return true
            }
            return false
        }
        function checkCountry() {
            let country = d$("country").val();
            if (country.value != "0") {
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
            if(checkCountry()){
                $("#statusOfCountry").text('Country hợp lệ !')
                $("#statusOfCountry").css('color','blue')
            }
            else{
                $("#statusOfCountry").text('Country không hợp lệ !')
                $("#statusOfCountry").css('color','red')
            }
        })
    })