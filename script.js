console.log('hi');

$(function () {
  var availableTags = [
    'ActionScript',
    'AppleScript',
    'Asp',
    'BASIC',
    'C',
    'C++',
    'Clojure',
    'COBOL',
    'ColdFusion',
    'Erlang',
    'Fortran',
    'Groovy',
    'Haskell',
    'Java',
    'JavaScript',
    'Lisp',
    'Perl',
    'PHP',
    'Python',
    'Ruby',
    'Scala',
    'Scheme',
  ];
  var ac = $('#tags')
    .autocomplete({
      source: availableTags,
      focus: function (event, ui) {
        event.preventDefault();
      },
    })
    .data('ui-autocomplete');

  ac._renderItem = function (ul, item) {
    return $('<li></li>')
      .data('item.autocomplete', item)
      .append(
        '<div>' +
          item.label +
          `<a class='link' href='http://highhimanshu.com/' target='_blank'>Click here</a></div>`
      )
      .appendTo(ul);
  };
});
