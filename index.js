
$(document).ready(function(){

    $('button').click(function(){
        
        let password = $('.p-input').val();
        let c_password = $('.c_pass').val();

      
        if(password !== c_password){          
            $('.p-para').css('display', 'block');
        } else {
            
            $('.form-div').toggle(1000); 
            let name = $('input').val();
            $('.data').toggle('display', 'block');
            $('h1').html(`${name}`);
            $('h3').html(`${password}`);
        }
    });
});
