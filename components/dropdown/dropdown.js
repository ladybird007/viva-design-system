$('[data-single-select]').each(function() {
  let classes = $(this).attr("class");

  let template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});

$('[data-search-select]').each(function() {
  let classes = $(this).attr("class");

  let template =  '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    template += `
      <div class="select-search-wrap">
          <input type="text" class="select-search" placeholder="Search...">
          <button class="select-search-clear">
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
      </div>`;
    template += `<div class="options-wrap">`;
    $(this).find("option").each(function() {
      template += '<span class="custom-option'+'" data-value="'+$(this).attr("value")+'">' + $(this).html() + '</span>';
    });
  template += '</div></div></div>';

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});


$('.select-search').on('keyup', function(e) {
  const search = $(this).val().toLowerCase();
  if (search !== '') {
    $(this).next().fadeIn();
  } else {
    $(this).next().fadeOut();
  }
  $(this).parents('.custom-select')
    .find('.custom-option').each(function() {      
      const checker = $(this).text().toLowerCase().indexOf(search) > -1;      
      if(!checker) {
        $(this).attr('style', 'display: none');
      } else {
        $(this).attr('style', 'display: block');
      }
    });    
});

$('.select-search').oninput = () => {  
  $(this).closest(".custom-select").addClass("opened");
  this.element.querySelectorAll('.custom-option').forEach(option => {
    option.style.display = option.querySelector('.custom-option').innerHTML.toLowerCase().indexOf(search.value.toLowerCase()) > -1 ? 'flex' : 'none';
  });
};

$('.select-search-clear').on('click', function() {
  $(this).parents('.custom-select').find('.select-search').val(''); 
  $(this).fadeOut();
  $(this).parents('.custom-select')
  .find('.custom-option').each(function() {          
    $(this).attr('style', 'display: block');    
  });  
});

$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});


$('.custom-select-trigger').on("click", function(event) {
  $('.multi-select-header').removeClass('multi-select-header-active');
  $('.custom-select').removeClass("opened");
  $(this).parents('.custom-select').toggleClass("opened");
  
  event.stopPropagation();
});
$("html").on('click', function(event) {
  event.stopPropagation();
  let eTarget = event.target;
  if(eTarget.classList.contains('select-search') || eTarget.classList.contains('multi-select-search') || eTarget.classList.contains('fa-solid') || eTarget.classList.contains('multi-select-option-text') || eTarget.classList.contains('multi-select-option') || eTarget.classList.contains('multi-select-header')) {
    return false;
  } else {
    $('.custom-select').removeClass("opened");
    $('.multi-select-header').removeClass('multi-select-header-active');
  }
});

$(".custom-option").on("click", function() {      
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());

  // clear search field if exists
  setTimeout(() => {
    $(this).parents('.custom-select').find('.select-search').val(''); 
    $(this).parents('.custom-select')
    .find('.custom-option').each(function() {          
      $(this).attr('style', 'display: block');    
    });  
  }, 500);
});




class MultiSelect {

  constructor(element, options = {}) {
      let defaults = {
          placeholder: 'Select Options',
          max: null,
          counter: false,
          search: true,
          selectAll: true,
          listAll: true,
          closeListOnItemSelect: false,
          name: '',
          width: '',
          height: '',
          dropdownWidth: '',
          dropdownHeight: '',
          data: [],
          onChange: function() {},
          onSelect: function() {},
          onUnselect: function() {}
      };
      this.options = Object.assign(defaults, options);
      this.selectElement = typeof element === 'string' ? document.querySelector(element) : element;
      for(const prop in this.selectElement.dataset) {
          if (this.options[prop] !== undefined) {
              this.options[prop] = this.selectElement.dataset[prop];
          }
      }
      this.name = this.selectElement.getAttribute('name') ? this.selectElement.getAttribute('name') : 'multi-select-' + Math.floor(Math.random() * 1000000);
      if (!this.options.data.length) {
          let options = this.selectElement.querySelectorAll('option');
          for (let i = 0; i < options.length; i++) {
              this.options.data.push({
                  value: options[i].value,
                  text: options[i].innerHTML,
                  selected: options[i].selected,
                  html: options[i].getAttribute('data-html'),
                  className: options[i].getAttribute('class')
              });
          }
      }
      this.element = this._template();
      this.selectElement.replaceWith(this.element);
      this._updateSelected();
      this._eventHandlers();
  }

  _template() {
      let optionsHTML = '';
      for (let i = 0; i < this.data.length; i++) {
          optionsHTML += `
              <div class="multi-select-option ${this.data[i].className ? this.data[i].className : ''}${this.selectedValues.includes(this.data[i].value) ? ' multi-select-selected' : ''}" data-value="${this.data[i].value}">
                  <span class="multi-select-option-icon"></span>
                  <span class="multi-select-option-text">${this.data[i].html ? this.data[i].html : this.data[i].text}</span>
              </div>
          `;
      }
      let selectAllHTML = '';
      if (this.options.selectAll === true || this.options.selectAll === 'true') {
          selectAllHTML = `<div class="multi-select-all">
              <span class="multi-select-option-radio"></span>
              <span class="multi-select-option-text">Select all</span>
          </div>`;
      }
      let template = `
          <div class="multi-select ${this.name}"${this.selectElement.id ? ' id="' + this.selectElement.id + '"' : ''} style="${this.width ? 'width:' + this.width + ';' : ''}${this.height ? 'height:' + this.height + ';' : ''}">
              ${this.selectedValues.map(value => `<input type="hidden" name="${this.name}[]" value="${value}">`).join('')}
              <div class="multi-select-header" style="${this.width ? 'width:' + this.width + ';' : ''}${this.height ? 'height:' + this.height + ';' : ''}">
                  <span class="multi-select-header-counter hidden">${this.options.counter ? this.selectedValues.length : ''}</span>
                  <span class="multi-select-header-placeholder">${this.placeholder}</span>
              </div>
              <div class="multi-select-options" style="${this.options.dropdownWidth ? 'width:' + this.options.dropdownWidth + ';' : ''}${this.options.dropdownHeight ? 'height:' + this.options.dropdownHeight + ';' : ''}">
                  ${this.options.search === true || this.options.search === 'true' ? '<div class="multi-select-search-wrap"><input type="text" class="multi-select-search" placeholder="Search..."><button class="multi-select-search-clear"><i class="fa-solid fa-circle-xmark"></i></button></div>' : ''}
                  ${selectAllHTML}
                  ${optionsHTML}
              </div>
          </div>
      `;
      let element = document.createElement('div');
      element.innerHTML = template;
      return element;
  }

  _eventHandlers() {
      let headerElement = this.element.querySelector('.multi-select-header');
      this.element.querySelectorAll('.multi-select-option').forEach(option => {
          option.onclick = () => {
              let selected = true;
              if (!option.classList.contains('multi-select-selected')) {
                  if (this.options.max && this.selectedValues.length >= this.options.max) {
                    return;
                  }
                  option.classList.add('multi-select-selected');
                  if (this.options.listAll === true || this.options.listAll === 'true') {
                      if (this.element.querySelector('.multi-select-header-option')) {
                          let opt = Array.from(this.element.querySelectorAll('.multi-select-header-option')).pop();
                          opt.insertAdjacentHTML('afterend', `<span class="multi-select-header-option" data-value="${option.dataset.value}">${option.querySelector('.multi-select-option-text').innerHTML}</span>`);
                      } else {
                          headerElement.insertAdjacentHTML('afterbegin', `<span class="multi-select-header-option" data-value="${option.dataset.value}">${option.querySelector('.multi-select-option-text').innerHTML}</span>`);
                      }
                  }
                  this.element.querySelector('.multi-select').insertAdjacentHTML('afterbegin', `<input type="hidden" name="${this.name}[]" value="${option.dataset.value}">`);
                  this.data.filter(data => data.value == option.dataset.value)[0].selected = true;
              } else {
                  option.classList.remove('multi-select-selected');
                  this.element.querySelectorAll('.multi-select-header-option').forEach(headerOption => headerOption.dataset.value == option.dataset.value ? headerOption.remove() : '');
                  this.element.querySelector(`input[value="${option.dataset.value}"]`).remove();
                  this.data.filter(data => data.value == option.dataset.value)[0].selected = false;
                  selected = false;
              }
              if (this.options.listAll === false || this.options.listAll === 'false') {
                  if (this.element.querySelector('.multi-select-header-option')) {
                      this.element.querySelector('.multi-select-header-option').remove();
                  }
                  headerElement.insertAdjacentHTML('afterbegin', `<span class="multi-select-header-option">${this.selectedValues.length} selected</span>`);
              }
              if (!this.element.querySelector('.multi-select-header-option')) {
                  headerElement.insertAdjacentHTML('afterbegin', `<span class="multi-select-header-placeholder">${this.placeholder}</span>`);
              } else if (this.element.querySelector('.multi-select-header-placeholder')) {
                  this.element.querySelector('.multi-select-header-placeholder').remove();
              }
              if (this.options.max) {
                  this.element.querySelector('.multi-select-header-max').innerHTML = this.selectedValues.length + '/' + this.options.max;
              }
              if (this.options.counter && this.selectedValues.length > 0) {
                this.element.querySelector('.multi-select-header-counter').classList.remove('hidden');
                this.element.querySelector('.multi-select-header-counter').innerHTML = this.selectedValues.length;
              } else {
                this.element.querySelector('.multi-select-header-counter').classList.add('hidden');
                this.element.querySelector('.multi-select-header-counter').innerHTML = '';
              }
              if (this.options.search === true || this.options.search === 'true') {
                  this.element.querySelector('.multi-select-search').value = '';
              }
              this.element.querySelectorAll('.multi-select-option').forEach(option => option.style.display = 'flex');
              if (this.options.closeListOnItemSelect === true || this.options.closeListOnItemSelect === 'true') {
                  headerElement.classList.remove('multi-select-header-active');
              }
              this.options.onChange(option.dataset.value, option.querySelector('.multi-select-option-text').innerHTML, option);
              if (selected) {
                  this.options.onSelect(option.dataset.value, option.querySelector('.multi-select-option-text').innerHTML, option);
              } else {
                  this.options.onUnselect(option.dataset.value, option.querySelector('.multi-select-option-text').innerHTML, option);
              }
          };
      });
      headerElement.onclick = () => {
        $('.custom-select').removeClass('opened');
        headerElement.classList.toggle('multi-select-header-active');
      };  
      if (this.options.search === true || this.options.search === 'true') {
          let search = this.element.querySelector('.multi-select-search');
          search.oninput = () => {
              this.element.querySelectorAll('.multi-select-option').forEach(option => {
                  option.style.display = option.querySelector('.multi-select-option-text').innerHTML.toLowerCase().indexOf(search.value.toLowerCase()) > -1 ? 'flex' : 'none';
              });
          };
      }
      if (this.options.selectAll === true || this.options.selectAll === 'true') {
          let selectAllButton = this.element.querySelector('.multi-select-all');
          selectAllButton.onclick = () => {
              let allSelected = selectAllButton.classList.contains('multi-select-selected');
              this.element.querySelectorAll('.multi-select-option').forEach(option => {
                  let dataItem = this.data.find(data => data.value == option.dataset.value);
                  if (dataItem && ((allSelected && dataItem.selected) || (!allSelected && !dataItem.selected))) {
                      option.click();
                  }
              });
              selectAllButton.classList.toggle('multi-select-selected');
          };
      }
      if (this.selectElement.id && document.querySelector('label[for="' + this.selectElement.id + '"]')) {
          document.querySelector('label[for="' + this.selectElement.id + '"]').onclick = () => {
              headerElement.classList.toggle('multi-select-header-active');
          };
      }
      document.addEventListener('click', event => {
          if (!event.target.closest('.' + this.name) && !event.target.closest('label[for="' + this.selectElement.id + '"]')) {
              headerElement.classList.remove('multi-select-header-active');
          }
      });



      let clearButton = this.element.querySelector('.multi-select-header-counter');
      if (clearButton !== null) {
        clearButton.onclick = (event) => {                    
          this.element.querySelector('.multi-select-header-counter').classList.add('hidden');
          this.element.querySelector('.multi-select-header-counter').innerHTML = '';
          headerElement.insertAdjacentHTML('afterbegin', `<span class="multi-select-header-placeholder">${this.placeholder}</span>`);
          this.element.querySelectorAll('.multi-select-header-option').forEach((option) => {
            option.classList.remove('.multi-select-header-option');
            option.style.display = 'none'
          });
          this.element.querySelectorAll('.multi-select-option').forEach((option) => {
            option.classList.remove('multi-select-selected');
            option.style.display = 'flex'
          });          
          this.data.forEach((data) => {
            data.selected = false;
          });
          event.stopPropagation();
        }
      }
  }

  _updateSelected() {
      if (this.options.listAll === true || this.options.listAll === 'true') {
          this.element.querySelectorAll('.multi-select-option').forEach(option => {
              if (option.classList.contains('multi-select-selected')) {
                  this.element.querySelector('.multi-select-header').insertAdjacentHTML('afterbegin', `<span class="multi-select-header-option" data-value="${option.dataset.value}">${option.querySelector('.multi-select-option-text').innerHTML}</span>`);
              }
          });
      } else {
          if (this.selectedValues.length > 0) {
              this.element.querySelector('.multi-select-header').insertAdjacentHTML('afterbegin', `<span class="multi-select-header-option">${this.selectedValues.length} selected</span>`);
          }
      }
      if (this.element.querySelector('.multi-select-header-option')) {
          this.element.querySelector('.multi-select-header-placeholder').remove();
      }
  }

  get selectedValues() {
    return this.data.filter(data => data.selected).map(data => data.value);
  }


  get selectedItems() {
      return this.data.filter(data => data.selected);
  }

  set data(value) {
      this.options.data = value;
  }

  get data() {
      return this.options.data;
  }

  set selectElement(value) {
      this.options.selectElement = value;
  }

  get selectElement() {
      return this.options.selectElement;
  }

  set element(value) {
      this.options.element = value;
  }

  get element() {
      return this.options.element;
  }

  set placeholder(value) {
      this.options.placeholder = value;
  }

  get placeholder() {
      return this.options.placeholder;
  }

  set name(value) {
      this.options.name = value;
  }

  get name() {
      return this.options.name;
  }

  set width(value) {
      this.options.width = value;
  }

  get width() {
      return this.options.width;
  }

  set height(value) {
      this.options.height = value;
  }

  get height() {
      return this.options.height;
  }

}

document.querySelectorAll('[data-multi-select]').forEach(select => new MultiSelect(select, {search: false, selectAll: false, counter: true }));
document.querySelectorAll('[data-multi-select-search]').forEach(select => new MultiSelect(select, {search: true, selectAll: false }));