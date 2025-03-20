const passwordView = document.querySelectorAll('.password-view');

passwordView.forEach((element) => {
  element.addEventListener('click', () => {
    const input = element.previousElementSibling,
          icon = element.querySelector('i');
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
      element.classList.add('active');
    } else {
      input.type = 'password';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
      element.classList.remove('active');
    }
  });
});


const customFiles = document.querySelectorAll('.custom-file');

customFiles.forEach((element) => {

  const fileInput = element.querySelector('.form-file'),
        dt = new DataTransfer(),
        fileArea = $('<div/>', {class: 'custom-file-list file-area'}),
        filesList = $('<div/>', {class: 'files-list'});
        

    $(fileInput).on('change', function(e){
    for(var i = 0; i < this.files.length; i++){
    const fileItem = $('<div/>', {class: 'file-item'}),
          fileDetail = $('<div/>', {class: 'file-detail'}),
          fileName = $('<span/>', {class: 'file-name', text: this.files.item(i).name}),
          fileSize = $('<span/>', {class: 'file-size', text: (this.files.item(i).size / 1024).toFixed(2) + 'kb'});

      fileDetail.append(fileName).append(fileSize);
      fileItem.append('<span class="file-delete">Remove</span>').append(fileDetail);
      filesList.append(fileItem);
      fileArea.append(filesList);
      $(element).append(fileArea);
      element.querySelector('.custom-file-empty-text').classList.add('hidden');
    };

    for (let file of this.files) {
    dt.items.add(file);
    }

    this.files = dt.files;

    $('span.file-delete').click(function(){
      let name = $(this).next('.file-detail').find('.file-name').text(),
          counter = dt.items.length;
      $(this).parent().remove();
      for(let i = 0; i < dt.items.length; i++){
        if(name === dt.items[i].getAsFile().name){
          dt.items.remove(i);
          counter--;
          continue;
        }
      }
      fileInput.files = dt.files;
      if(counter === 0){
        element.querySelector('.custom-file-empty-text').classList.remove('hidden');
        fileArea.remove();
      }
    });
  });
});

$('[data-chars-count]').keyup(function() {  
  const maxLength = $(this).attr('maxlength');
  const currLength = $(this).val().length;
  $(this).parents('.form-group').find('.assistive-text').text(maxLength - currLength +' characters left');  
});

