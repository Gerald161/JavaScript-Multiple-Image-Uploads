var set_button = document.querySelector('.set_button')

var number = document.querySelector('.number')

var input_containers = document.querySelector('.input_containers')

var initial_amount_of_inputs = 0;

set_button.addEventListener('click', (e)=>{
    if(number.value == 0 || number.value == ''){
        initial_amount_of_inputs = 0;

        input_containers.innerHTML = ``;
    }else{
        if(initial_amount_of_inputs != 0){
            var times_to_delete = number.value - initial_amount_of_inputs;

            var array_of_new_content = [];

            if(times_to_delete > 0){
                for(let step = 0; step < times_to_delete; step++){
                    var picture_upload_input = document.createElement('input');
        
                    picture_upload_input.type = 'file';
        
                    picture_upload_input.name = 'image';
        
                    picture_upload_input.accept = 'image/*';
        
                    picture_upload_input.classList.add('additional_image_input');
        
                    picture_upload_input.id = `additional_input${parseInt(initial_amount_of_inputs) + step}`
        
                    var label = document.createElement('label');
        
                    label.classList.add('select_image')
        
                    label.innerHTML = 'Select Image';
        
                    label.htmlFor = picture_upload_input.id;
        
                    var image_preview_container = document.createElement('div');
        
                    image_preview_container.classList.add('image_preview_container')
        
                    image_preview_container.innerHTML = `
                        <img src="" alt="Additional Image Preview" class="image_preview_image">
                        <span class="image_preview_text">Add Additional Image</span>
                    `
        
                    var picture_and_upload_container = document.createElement('div')
        
                    picture_and_upload_container.classList.add('beautiful_display')
        
                    picture_and_upload_container.appendChild(picture_upload_input);
        
                    picture_and_upload_container.appendChild(image_preview_container);
        
                    picture_and_upload_container.appendChild(label);
        
                    input_containers.appendChild(picture_and_upload_container);

                    array_of_new_content.push(picture_and_upload_container.children[0]);

                    array_of_new_content.forEach((inputFile)=>{
                        inputFile.addEventListener('change', function(){
                            const preview_image = inputFile.nextElementSibling.children[0];
            
                            const preview_text = inputFile.nextElementSibling.children[1];
            
                            const file = this.files[0];
            
                            if(file){
                                var file_chosen = file['type'].split('/')[0]
            
                                if(file_chosen != 'image'){
                                    alert("Please Upload An Image Here")
                                    preview_text.style.display = null;
                                    preview_image.style.display = null;
                                    preview_image.setAttribute("src", '');
                                    inputFile.value = null;
                                }else{
                                    if(file){
                                        const reader = new FileReader();
                                        preview_text.style.display = 'none';
                                        preview_image.style.display = 'block';
                                
                                        reader.addEventListener("load", function(){
                                            preview_image.setAttribute("src", this.result);
                                        })
                                
                                        reader.readAsDataURL(file);
                                    }else{
                                        preview_text.style.display = null;
                                        preview_image.style.display = null;
                                        preview_image.setAttribute("src", '');
                                    }
                                }
                            }else{
                                preview_text.style.display = null;
                                preview_image.style.display = null;
                                preview_image.setAttribute("src", '');
                            }
            
                        })
                    })
                }
            }else{
                var times_to_delete = number.value - initial_amount_of_inputs;

                var array_of_new_content = [];

                for(let step = 0; step < initial_amount_of_inputs; step++){
                    if(parseInt(initial_amount_of_inputs) + times_to_delete <= step){
                        array_of_new_content.push(step)
                    }
                }

                array_of_new_content.reverse().forEach((step)=>{
                    input_containers.removeChild(input_containers.children[step])
                })
            }

            initial_amount_of_inputs = number.value;
        }else{
            if(number.value != '' || number.value != 0){
                initial_amount_of_inputs = number.value;
                
                for(let step = 0; step < number.value; step++){
                    var picture_upload_input = document.createElement('input');
        
                    picture_upload_input.type = 'file';
        
                    picture_upload_input.name = 'image';
        
                    picture_upload_input.accept = 'image/*';
        
                    picture_upload_input.classList.add('additional_image_input');
        
                    picture_upload_input.id = `additional_input${step}`
        
                    var label = document.createElement('label');
        
                    label.classList.add('select_image')
        
                    label.innerHTML = 'Select Image';
        
                    label.htmlFor = picture_upload_input.id;
        
                    var image_preview_container = document.createElement('div');
        
                    image_preview_container.classList.add('image_preview_container')
        
                    image_preview_container.innerHTML = `
                        <img src="" alt="Additional Image Preview" class="image_preview_image">
                        <span class="image_preview_text">Add Additional Image</span>
                    `
        
                    var picture_and_upload_container = document.createElement('div')
        
                    picture_and_upload_container.classList.add('beautiful_display')
        
                    picture_and_upload_container.appendChild(picture_upload_input);
        
                    picture_and_upload_container.appendChild(image_preview_container);
        
                    picture_and_upload_container.appendChild(label);
        
                    input_containers.appendChild(picture_and_upload_container)
                }
        
                var all_picture_uploads = document.querySelectorAll('.additional_image_input')
        
                all_picture_uploads.forEach((inputFile, index)=>{
                    inputFile.addEventListener('change', function(){
                        const preview_image = document.querySelectorAll('.image_preview_image')[index]
        
                        const preview_text = document.querySelectorAll('.image_preview_text')[index]
        
                        const file = this.files[0];
        
                        if(file){
                            var file_chosen = file['type'].split('/')[0]
        
                            if(file_chosen != 'image'){
                                alert("Please Upload An Image Here")
                                preview_text.style.display = null;
                                preview_image.style.display = null;
                                preview_image.setAttribute("src", '');
                                inputFile.value = null;
                            }else{
                                if(file){
                                    const reader = new FileReader();
                                    preview_text.style.display = 'none';
                                    preview_image.style.display = 'block';
                            
                                    reader.addEventListener("load", function(){
                                        preview_image.setAttribute("src", this.result);
                                    })
                            
                                    reader.readAsDataURL(file);
                                }else{
                                    preview_text.style.display = null;
                                    preview_image.style.display = null;
                                    preview_image.setAttribute("src", '');
                                }
                            }
                        }else{
                            preview_text.style.display = null;
                            preview_image.style.display = null;
                            preview_image.setAttribute("src", '');
                        }
        
                    })
                })
            }
        }
    }
})